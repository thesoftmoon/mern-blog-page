import Layout from '../layout/Layout';
import Articles from '../components/Articles';
import { useParams } from 'react-router-dom';


function Search() {

        let searched = useParams().search;
        console.log(searched);
    return (
      <Layout mainHeading={'Busqueda: '+searched} mainText='Resultados dentro de articulos' sectionSlider='true'>
        <Articles search={searched}/>
      </Layout>
    )
  
}

export default Search