import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{ width: '80vw' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
        deleniti magni eligendi impedit beatae molestias facere
        asperiores id laudantium natus tempore quam consequatur culpa.
        Rem similique veniam accusamus, impedit repudiandae doloribus.
        Maxime molestias, odit omnis cumque, voluptates, minima
        provident vitae unde doloremque consequuntur corrupti. Quidem
        totam cum incidunt modi ipsum.
      </p>
    </Layout>
  );
};

export default withRouter(post);
