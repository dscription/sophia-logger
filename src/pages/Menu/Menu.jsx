import { Card } from '../../atoms';
import Layout from '../../compositions/Layout/Layout';
import { Link } from 'react-router-dom';

const Menu = () => {
  const routes = ['curiosity'];
  return (
    <Layout title="Menu">
      {routes.map((route) => (
        <Link to={`/${route}`}>
          <Card>{route}</Card>
        </Link>
      ))}
    </Layout>
  );
};

export default Menu;
