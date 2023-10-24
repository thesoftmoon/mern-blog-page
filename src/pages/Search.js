import Layout from '../layout/Layout';
import Articles from '../components/Articles';
import { useParams } from 'react-router-dom';


function Search() {

  let searched = useParams().search;
  console.log(searched);
  return (
    <Layout
      moImage={require(`../assets/img/test-img-mo.jpg`)}
      pcImage={require(`../assets/img/test-img-pc.jpg`)}
      sliderSize={'small'}
      title={'Busqueda: ' + searched}
      text={'Resultados dentro de articulos'}
    >
      <Articles search={searched} />
    </Layout>
  )

}

export default Search