import Layout from '../components/Layout';
import Error from './_error';
import Link from 'next/link';

function About({ user, statusCode }) {
  return (
    <>
      {statusCode ? (
        <Error statusCode={statusCode} />
      ) : (
        <Layout title="About">
          <p>{user.name}</p>
          
          <img src={user.avatar_url} alt="avatar" />
        </Layout>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  let res = await fetch('https://api.github.com/users/reedbarger');
  const statusCode = res.status > 200 ? res.status : false;
  console.log(statusCode)
  let data = await res.json();

  return {
    props: { user: data, statusCode },
  };
};

export default About;
