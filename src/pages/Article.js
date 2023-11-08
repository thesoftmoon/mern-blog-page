import React,{useState} from 'react';
import Layout from '../layout/Layout';
import Article from '../components/Article';

function ArticlePage(){
    const [articleData, setArticleData] = useState({ title: '', content: '' });
    // Here you catch thedata from child and set it to a local state
    const onDataLoaded = (newData) => {
      setArticleData(newData);
    };
    return (
      <Layout
        moImage={require(`../assets/img/test-img-mo.jpg`)}
        pcImage={require(`../assets/img/test-img-pc.jpg`)}
        sliderSize={'small'}
        title={articleData.title}
        text={articleData.content}>
          {/* here you export the data from child to parent */}
        <Article onDataLoaded={onDataLoaded} />
      </Layout>
    )
  }
export default ArticlePage