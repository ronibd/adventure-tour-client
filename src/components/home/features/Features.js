import React from "react"
import greenImg from "../../../img/header-bg.PNG"
import "./Features.css"

const Features = () => {
  return (
    <div className="py-5">
      <h2 className="text-center display-6">
        EXCITING TOURS FOR ADVENTURAS PEOPLE.
      </h2>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h6 className="mb-2">YOU'RE GOING TO FALL IN LOVE WITH NATURE</h6>
            <small>
              Well… we let you enjoy this moment. We hope you do laugh,
              remember, love and share these funny travel quotes. After all, we
              know that a sense of travel humor can really lighten your mood.
              And since a lot can go wrong when exploring this world, a sense of
              humor is always a good tool to have on hand.
            </small>
            <h6 className="mb-2 mt-3">
              LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
            </h6>
            <small>
              No doubt, we get it! Whenever you are not able to travel for
              whatever reason, a travel quote may help you sometimes to get you
              moving.
            </small>
          </div>

          <div className="col-md-6 text-center">
            <img className="img-fluid features__img" src={greenImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
