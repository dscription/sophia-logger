import { Card } from "../../atoms";
import Layout from "../../compositions/Layout/Layout";

const Curiosity = ({ user }) => {
  return (
    <Layout title="Curiosity" user={user}>
      {user.curiosities.map((curiosity, idx) => (
        <Card key={`curiosity${idx}`}>{curiosity.question}</Card>
      ))}
    </Layout>
  );
};

export default Curiosity;
