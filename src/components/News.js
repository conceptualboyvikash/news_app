import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinning from './Spinning';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps ={
        country:'in',
        pageSize:8,
        category:'general'
  }
  static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
  }

    
    constructor(){
        super();
       // console.log(this.props.pageSize);
        this.state={

            articles:[],
            loading:false,
            page:1,
        }
    }
   async componentDidMount()
    {
       // console.log("cmd");
      // console.log(this.props.pageSize);
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8a3a2d0c9d64fafb234d6f5fdfd62ae&page=1&pageSize=${this.props.pageSize}`;
      //  let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e8a3a2d0c9d64fafb234d6f5fdfd62ae&page=1&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data=await fetch(url);
       let con_data=await data.json();
       this.setState({loading:false});
     //  console.log(con_data);
     this.setState({articles:con_data.articles,TotalArticles:con_data.totalResults})
    }
    handlePrev=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8a3a2d0c9d64fafb234d6f5fdfd62ae&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
       
       this.setState({loading:true});

        let data=await fetch(url);
        let con_data=await data.json();
      //  console.log(con_data);
        this.setState(
            {
                page:this.state.page-1,
                articles:con_data.articles,
                loading:false,
            }
        )
    }
    handleNext=async()=>{

      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8a3a2d0c9d64fafb234d6f5fdfd62ae&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let con_data=await data.json();
      //  console.log(con_data);
        this.setState(
            {
                page:this.state.page+1,
                articles:con_data.articles,
                loading:false,

            }
        )
    }
  render() {
    
   // console.log("ren");
    return (
      <div className="container my-3">
        <h1 className='text-center' style={{margin:'30 px'}}>News_KING -Top Headlines</h1>
         <div className="row">
           {this.state.loading && <Spinning/>}
            {!this.state.loading && this.state.articles.map((element)=>{

                return  <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title} discription={element.discription} imageUrl={element.urlToImage===null?"https://images.wsj.net/im-900511/social":element.urlToImage} newsUrl={element.url}/>
                </div>

            })}
             <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} onClick={this.handlePrev} className="btn btn-dark">&#8249;Previous</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.TotalArticles/this.props.pageSize)} onClick={this.handleNext} className="btn btn-dark">Next &#8250;</button>
            </div>
           
        </div>
        
      </div>
    )
  }
}
