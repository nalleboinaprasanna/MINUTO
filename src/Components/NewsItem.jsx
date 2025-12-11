const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", minHeight: "500px" }}
    >
      {src ? (
        <img
          src={src}
          className="card-img-top"
          alt={title || "News image"}
          style={{ height: "200px", objectFit: "cover" }}
        />
      ) : (
        <div
          className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
          style={{ height: "200px" }}
        >
          <span>No Image</span>
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ minHeight: "60px" }}>
          {title || "No Title"}
        </h5>
        <p className="card-text" style={{ flex: 1 }}>
          {description ? description.slice(0, 120) + "..." : "No Description"}
        </p>
        <a
          href={url}
          className="btn btn-outline-light mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;


