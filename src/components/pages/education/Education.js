import React from "react";

const Education = () => {
  return (
    <div>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <h6>
            <strong>
              {" "}
              <i className='fas fa-graduation-cap'></i> EDUCATION{" "}
            </strong>
          </h6>
          <hr />

          <div className='row mt'>
            <div className='col s12'>
              <blockquote>
                <h6 className='no-pad mt-buttom'>
                  <strong>BACHELOUR IN ENGINEERING: </strong> 
                  <span1>(KIC)</span1>
                  <span> 2019-2023</span>
                </h6>

                <p>
                  {" "}
                  <i className='fas fa-circle' /> Kathford International College
                  of Engineering and Management is a top-ranked engineering and
                  management college affiliated to Tribhuvan University where
                  teaching extends outside classroom enabling students to
                  develop technical expertise and professional skills which
                  leads to excellent learning experience and outstanding
                  employability.
                </p>
              </blockquote>
            </div>
          </div>

          <div className='row mt'>
            <div className='col s12'>
              <blockquote>
                <h6 className='no-pad mt-buttom'>
                  <strong> +2 IN  COMPUTER SCIENCE </strong>
                  <span1> (SWSC) </span1>
                  <span> 2017-2019</span>
                </h6>
                <p>
                  {" "}
                  <i className='fas fa-circle' /> Southwestern State College have always helped to
                  pave the path of success for me through the lectures, seminars
                  and other curricular activities by bringing the best out of me
                  in every possible way. I would like to thank the institute for
                  proper guidance and support in helping me pursue my dream.
                </p>
              </blockquote>
            </div>
          </div>

          <div className='row mt'>
            <div className='col s12'>
              <blockquote>
                <h6 className='no-pad mt-buttom'>
                  <strong> SCHOOL </strong>
                  <span1> (SEBS) </span1>
                  <span> 2005-2016</span>
                </h6>
                <p>
                  {" "}
                  <i className='fas fa-circle' /> Shuvakamana English Boarding
                  School.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;