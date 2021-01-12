import { Link } from 'react-router-dom'

function Card({ img, title, link }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top" src={img} alt="Profile Pic" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={link} className="btn btn-primary">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card
