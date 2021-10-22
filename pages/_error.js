import Layout from '../components/Layout';
import Error from './';

const _error = ({ statusCode }) => {
  return (
    <Layout title="Error!!!">
      {statusCode
        ? `Could not load your user data: StatusCode ${statusCode}`
        : "Couldn't get that page, sorry!"}
    </Layout>
  );
};

export default _error;
