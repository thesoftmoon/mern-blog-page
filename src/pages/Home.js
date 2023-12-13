import '../App.scss';
import Articles from '../components/Articles';
import Layout from '../layout/Layout';

function Home() {
  return (
    <Layout moImage={require(`../assets/img/test-img-mo.jpg`)}
      pcImage={require(`../assets/img/test-img-pc.jpg`)}
      title={'Bienvenido a este Blog MERN'}
      text={'Gracias por esperar, en este blog puedes crear, escribir, actualizar y eliminar publicaciones'}
      btn={true}
      btnLink={'/blog'}
    >
      <Articles
        home='true'
        lastArticles='true'
      />
    </Layout>

  );
}

export default Home;
