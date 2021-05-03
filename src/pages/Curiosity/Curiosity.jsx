import { Card } from '../../atoms';
import Layout from '../../compositions/Layout/Layout';


import { curiosities } from '../../data';

const Curiosity = () => {
  // todo: Make API call and getAll Curiosities, set to state.
  // todo: Dont make another API call unless Curiosities have changed.
  return (
    <Layout title="Curiosity">
      {curiosities.map((curiosity, idx) => (
        <Card key={`curiosity${idx}`}>{curiosity.question}</Card>
      ))}
    </Layout>
  );
};

export default Curiosity;
