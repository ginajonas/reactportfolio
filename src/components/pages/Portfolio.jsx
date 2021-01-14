import Card from '../Card'

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <Card
          img="/img/OOP-Hospital-project.png"
          title="OOP General Hospital Project"
          githubLink="https://github.com/ginajonas/oop-general-hospital"
          deployedLink="https://project-team-2.herokuapp.com"
        />
        <Card
          img="/img/travel-project.png"
          title="Travel Project"
          githubLink="https://github.com/joshualive/Project-1"
          deployedLink="https://joshualive.github.io/Project-1"
        />
        <Card
          img="/img/Weather-project.png"
          title="Weather Dashboard"
          githubLink="https://github.com/ginajonas/Weather-Dashboard"
          deployedLink="https://ginajonas.github.io/Weather-Dashboard"
        />
        <Card
          img="/img/Password-project.png"
          title="Password Generator"
          githubLink="https://github.com/ginajonas/Password-Generator"
          deployedLink="https://ginajonas.github.io/Password-Generator"
        />
        <Card
          img="/img/Scheduler-project.png"
          title="Work Day Scheduler"
          githubLink="https://github.com/ginajonas/Work-Day-Scheduler"
          deployedLink="https://ginajonas.github.io/Work-Day-Scheduler"
        />
      </div>
    </div>
  )
}

export default Portfolio
