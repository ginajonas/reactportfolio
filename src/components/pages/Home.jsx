import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://avatars2.githubusercontent.com/u/68718445?s=460&u=e2149a52aef29f0cd00a35470bc10f0d7eab6e6d&v=4"
              alt="Profile Pic"
            />
            <div className="card-body">
              <h5 className="card-title">Gina Jonas</h5>
              <Link
                to="https://github.com/ginajonas"
                className="btn btn-primary"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
