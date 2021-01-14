import ProfilePic from '../../img/gina.png'

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={ProfilePic} alt="Profile Pic" />
            <div className="card-body">
              <h5 className="card-title">Gina Jonas</h5>
              <span className="email">
                <i className="fa fa-envelope"></i>
                <a href="mailto:ginajonas7@gmail.com">ginajonas7@gmail.com</a>
              </span>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ginajonas"
                className="btn btn-primary"
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1HB5s5dP-aOzaEUHB2ZizlBkgHAbPkeBQ/view?usp=sharing"
                className="btn btn-primary"
              >
                <i className="fa fa-file"></i>
                Resume
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/georgina-jonas-1796531b3/"
                className="btn btn-primary"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">
                I'm a dedicated mother of a wonderful 4 year old boy. I love
                spending time with him and my lovely better half. I'm passionate
                and enjoy the many challenges that life brings along. I'm a full
                stack web developer leveraging healthcare and beauty and arts
                background to build a more intuitive user experience on the web.
                Currently earning a certificate in full stack development from
                Carleton University in Ottawa. Known as an innovative problem
                solver passionate about developing apps, with a focus on
                mobile-first design and development. With each project, my aim
                is to best engage my audience for an impactful user experience.
                I’m excited to leverage my skills as part of a fast-paced,
                quality-driven team to build better experiences on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
