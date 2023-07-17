import '../App.scss';
import Articles from '../components/Articles';
import Layout from '../layout/Layout';

function Home() {
  return (
    <Layout mainHeading="hola mundo" mainText="hola amigos" activeBtn='true'>
      <Articles home='true'/>
    </Layout>
  );
}

export default Home;
