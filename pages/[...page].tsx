import React from 'react';
import { useRouter } from 'next/router';
import {
  BuilderComponent,
  Builder,
  builder,
  useIsPreviewing,
} from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { PageProps, StaticPageProps } from '../types';

builder.init('7db0ab95142a4ef18429de6055ac3712');

export async function getStaticProps({ params }: StaticPageProps) {
  // Fetch the builder content
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll('page', {
    // We only need the URL field
    fields: 'data.url',
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

Builder.registerComponent(
  dynamic(() => import('../components/PaymentMethods')),
  {
    name: 'Payment Methods',
    inputs: [
      { name: 'creditText', type: 'text' },
      { name: 'creditImageSrc', type: 'file' },
      { name: 'paypalText', type: 'text' },
      { name: 'paypalImageSrc', type: 'file' },
      { name: 'cryptoText', type: 'text' },
      { name: 'cryptoImageSrc', type: 'file' },
    ],
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png',
  }
);

export default function Page({ page }: PageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>

      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />
    </>
  );
}
