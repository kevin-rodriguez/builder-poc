import { useRouter } from 'next/router';

const Test = () => {
  const router = useRouter();
  const query = router.query;

  console.log(query);
  return <div>Test</div>;
};

export default Test;
