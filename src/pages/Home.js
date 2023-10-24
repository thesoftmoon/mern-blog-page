import '../App.scss';
import Articles from '../components/Articles';
import Layout from '../layout/Layout';

function Home() {
  return (
    <Layout moImage={require(`../assets/img/test-img-mo.jpg`)}
      pcImage={require(`../assets/img/test-img-pc.jpg`)}
      title={'Hello World'}
      text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus.'}
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
