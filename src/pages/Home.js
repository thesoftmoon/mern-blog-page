import '../App.scss';
import Articles from '../components/Articles';
import Layout from '../layout/Layout';

function Home() {
  return (
    <Layout mainHeading="Bienvenido al nuevo blog" mainText="Un espacio para conocer las ultimas noticias y artículos del medio" activeBtn='true'>
      <Articles home='true' lastArticles='true'/>
    </Layout>
  );
}

export default Home;
