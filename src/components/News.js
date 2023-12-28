import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinning from "./Spinning";
import PropTypes from "prop-types";

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
  async UpdateNews(a) {
    //console.log(this.state.page);
    
    if(a==='c')
    {
    var url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d376ea26913400b98530f13b929d09e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }
    else if(a==='p')
    {
     url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d376ea26913400b98530f13b929d09e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    }
    else
    {
     url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d376ea26913400b98530f13b929d09e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    }
    this.setState({ loading: true });
    let data = await fetch(url);
    let con_data = await data.json();
   
    this.setState({
      articles: con_data.articles,
      TotalArticles: con_data.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    this.UpdateNews('c');
  }
  handlePrev = async () => {
    console.log("before "+this.state.page);

    this.setState({ page: (this.state.page - 1) });
    console.log("After"+this.state.page);

    this.UpdateNews('p');
  };
  handleNext = async () => {
    console.log("before "+this.state.page);
    this.setState({page: (this.state.page + 1) });
    console.log("After"+this.state.page);
    this.UpdateNews('n');
  };
  captilise=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    // console.log("ren");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30 px" }}>
          News_KING -{this.captilise(this.props.category)} Top Headlines
        </h1>
        <div className="row">
          {this.state.loading && <Spinning />}
          {!this.state.loading &&
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
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              onClick={this.handlePrev}
              className="btn btn-dark"
            >
              &#8249;Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.TotalArticles / this.props.pageSize)
              }
              onClick={this.handleNext}
              className="btn btn-dark"
            >
              Next &#8250;
            </button>
          </div>
             </div>
      </div>
    );
  }
}
