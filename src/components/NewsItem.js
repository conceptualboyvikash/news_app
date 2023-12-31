import React from 'react'

const NewsItem =(props)=> {
  
    let{title,discription,imageUrl,newsUrl,author,time,name,col}=props;
    return (
      <div className='my-3'>
       <div className="card" >
              <div className="d-flex " style={{position:'absolute',right:'0'}}>
            <span className={`badge rounded-pill bg-${col}`}>{name}
            
                  <span className="visually-hidden"></span>
             </span>
             </div>
            <img src={imageUrl} height='150px' className="card-img-top" alt="..."/>
           
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <div className="card-footer text-muted"> {author}  {time} </div>
                <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-sm btn-${col}`}>Read more</a>
            </div>
            </div>
      </div>
    )
  
}
export default NewsItem