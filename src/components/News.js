import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinning from "./Spinning";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    col: "success",
    
    
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    col: PropTypes.string,
   
  };

  constructor(props) {
    super(props);
    // console.log(this.props.pageSize);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      
    };
    document.title=`${this.captilise(this.props.category) } | News_King`
  }
  async UpdateNews() {
    //console.log(this.state.page);
    
    this.props.pro_Val(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.pro_Val(40);

    let con_data = await data.json();
    this.props.pro_Val(70);

   
    this.setState({
      articles: con_data.articles,
      TotalArticles: con_data.totalResults,
      loading: false
    });
    this.props.pro_Val(100);
   
    
    
  }
  async componentDidMount() {
    this.UpdateNews();
   
    
  }
 
  
  captilise=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    
  }
  fetchMoreData = async() => {
    
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    let data = await fetch(url);
    let con_data = await data.json();
   
    this.setState({
      articles: this.state.articles.concat(con_data.articles),
      TotalArticles: con_data.totalResults,
      loading: false
    });
   
  };
  render() {
     console.log(this.state.articles.length,this.state.TotalArticles);
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30 px" }}>
          News_KING -{this.captilise(this.props.category)} Top Headlines
        </h1>
        <div className="row">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.TotalArticles}
          loader={<Spinning/>}
        >
          
        
          <div className="row">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    time={new Date(element.publishedAt).toUTCString()}
                    author={!element.author ? "unknown" : element.author}
                    name={element.source.name}
                    discription={element.discription}
                    col={this.props.col}
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
}
