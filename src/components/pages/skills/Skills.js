import React from "react";

const Skills = () => {
  return (
    <div>
      <div className='card light-blue darken-4 z-depth-0'>
        <div className='card-context'>
          <h6 className='white-text'>
            <strong> # PROFESSIONAL SKILLS</strong>
          </h6>
          <hr />
          <div className='row pt'>
            <div className='col m6 s12'>
              <p className='grey-text text-lighten-3'> HTML </p>
              <div className='progress white'>
                <div
                  className='determinate grey'
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className='col m6 s12'>
              <p className='grey-text text-lighten-3'> css </p>
              <div className='progress white'>
                <div
                  className='determinate grey'
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className='row pt'>
            <div className='col m6 s12'>
              <p className='grey-text text-lighten-3'> JavaScript </p>
              <div className='progress white'>
                <div
                  className='determinate grey'
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div className='col m6 s12'>
              <p className='grey-text text-lighten-3'> React.js </p>
              <div className='progress white'>
                <div
                  className='determinate grey'
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className='row pt'>
            <div className='col m6 s12'>
              <p className='grey-text text-lighten-3'> Node.js </p>
              <div className='progress white'>
                <div
                  className='determinate grey'
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className='col m6 s12'>
              <p className='grey-text text-lighten-3'> MongoDB </p>
              <div className='progress white'>
                <div
                  className='determinate grey'
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;