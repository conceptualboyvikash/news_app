import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinning from "./Spinning";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
  
  const[articles,setarticles]=useState([]);
  //  const [loading,setloading]=useState(false);
  const[page,setPage]=useState(1);
  const[TotalArticles,settotalarticles]=useState(0);
  
    
 //   document.title=`${captilise(category) } | News_King`
  
  const UpdateNews=async()=> {
    
    props.pro_Val(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`;
    //  setloading(true);
    let data = await fetch(url);
    props.pro_Val(40);

    let con_data = await data.json();
    props.pro_Val(70);

    setarticles(con_data.articles);
    settotalarticles(con_data.totalResults);
    //  setloading(false);
    props.pro_Val(100);
  }

   useEffect(()=>{
        UpdateNews();
        //eslint-disable-next-line
    },[]);
  
 
  
  const captilise=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    
  }
   const fetchMoreData = async() => {
    // console.log("ehllwo world");
   // console.log("the page value is :",page);
   
   
   // console.log("the page value is :",page);
   
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1);
      // setloading(true);
    let data = await fetch(url);
    let con_data = await data.json();
   
    setarticles(articles.concat(con_data.articles));
    settotalarticles(con_data.totalResults);
    //  setloading(false);
    // console.log("helow beta kuch huaa");
    console.log("ta dn al",TotalArticles," ",articles.length);
   
  };
 
    
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop: '90px',
    marginBottom: '30px'}}>
          News_KING -{captilise(props.category)} Top Headlines
        </h1>
        <div className="row">
          
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length+props.pageSize <= TotalArticles}
          loader={<Spinning/>}
        >
          
        
          <div className="row">
          {
            articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    time={new Date(element.publishedAt).toUTCString()}
                    author={!element.author ? "unknown" : element.author}
                    name={element.source.name}
                    discription={element.discription}
                    col={props.col}
                    imageUrl={
                      element.urlToImage === null
                        ? "https://images.wsj.net/im-900511/social"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
            </div>
            </InfiniteScroll>
          
             </div>
      </div>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  col: "success",

  
  
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  col: PropTypes.string,
 
};
export default News