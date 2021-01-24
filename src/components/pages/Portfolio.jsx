import Card from '../Card'

import hospital from '../../img/OOP-Hospital-project.png'
import travel from '../../img/travel-project.png'
import weather from '../../img/Weather-project.png'
import password from '../../img/Password-project.png'
import scheduler from '../../img/Scheduler-project.png'
import google from '../../img/Google-Book-Search-project.png'
function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <Card
          img={hospital}
          title="OOP General Hospital Project"
          githubLink="https://github.com/ginajonas/oop-general-hospital"
          deployedLink="https://project-team-2.herokuapp.com"
        />
        <Card
          img={travel}
          title="Travel Project"
          githubLink="https://github.com/joshualive/Project-1"
          deployedLink="https://joshualive.github.io/Project-1"
        />
        <Card
          img={weather}
          title="Weather Dashboard"
          githubLink="https://github.com/ginajonas/Weather-Dashboard"
          deployedLink="https://ginajonas.github.io/Weather-Dashboard"
        />
        <Card
          img={password}
          title="Password Generator"
          githubLink="https://github.com/ginajonas/Password-Generator"
          deployedLink="https://ginajonas.github.io/Password-Generator"
        />
        <Card
          img={scheduler}
          title="Work Day Scheduler"
          githubLink="https://github.com/ginajonas/Work-Day-Scheduler"
          deployedLink="https://ginajonas.github.io/Work-Day-Scheduler"
        />
        <Card
          img={google}
          title="Google Book Search"
          githubLink="https://github.com/ginajonas/googlebooksearch"
          deployedLink="https://react-google-book-search-gina.herokuapp.com/#/"
        />
      </div>
    </div>
  )
}

export default Portfolio
