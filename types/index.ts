export type StaticPageProps = {
  params: {
    page: string[];
  };
};

export type PageProps = {
  page: {
    data: {
      title: string;
    };
  };
};
