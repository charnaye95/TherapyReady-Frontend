import React from "react";

function Assessments() {
  return (
    <div>
      <h1 className="title">Take a Mental Health Assessment today!</h1>
      <br></br>
      <div className="test-container">
        <div>
          <p className="category">Alcohol Use</p>
          <ul>
            <li>
              <a href="https://screening.mentalhealthscreening.org/ga/screening/59372">
                Mindwise
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="category">Anxiety</p>
          <ul>
            <li>
              <a href="https://screening.mentalhealthscreening.org/ga/screening/59373">
                Mindwise
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="category">Bipolar</p>
          <ul>
            <li>
              <a href="https://screening.mentalhealthscreening.org/ga/screening/59377">
                Mindwise
              </a>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default Assessments;
