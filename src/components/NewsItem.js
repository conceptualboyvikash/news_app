import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let{title,discription,imageUrl,newsUrl,author,time,name,col}=this.props;
    return (
      <div className='my-3'>
       <div className="card" >
            <img src={imageUrl} height='150px' className="card-img-top" alt="..."/>
            <div className="card-body">
            <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-${col}`} style={{zIndex:'1',left:'85%'}}>{name}
                  <span className="visually-hidden"></span>
             </span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <div className="card-footer text-muted"> {author}  {time} </div>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}
