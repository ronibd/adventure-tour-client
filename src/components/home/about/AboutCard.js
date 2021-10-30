import React from "react"

const AboutCard = (props) => {
  return (
    <div className="col-md-3 ">
      <div className="card bg-light about__card">
        <div className="card-body text-center">
          {props.children}
          <p className="lead">{props.item.title}</p>
          <small>
            Humor will help you to turn around a bad day, simply a laugh would
            change your mood! That’s one reason why we do love these funny
            quotes and wanted to collect some of them for you.
          </small>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
