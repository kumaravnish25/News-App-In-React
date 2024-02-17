import newsImage from '../assests/news.jpeg'
function NewsItem({title,description,src,url}) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "26em"}}>
      <img src={src?src:newsImage} style={{height:'230px', width:'380px', margin:'0.5rem'}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description?description.slice(0,90):"Description is not update!"}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
