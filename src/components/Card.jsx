function Card({ img, title, githubLink, deployedLink }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top" src={img} alt="Profile Pic" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a
            target="_blank"
            rel="noreferrer"
            href={githubLink}
            className="btn btn-primary"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={deployedLink}
            className="btn btn-primary"
          >
            Deployed App
          </a>
        </div>
      </div>
    </div>
  )
}
export default Card
