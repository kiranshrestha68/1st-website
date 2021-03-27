import React from "react";
import ImgProfile from "../../images/me2.jpeg";

const Profile = () => {
  return (
    <>
      <div className="avatarImg">
        <img
          className='circle responsive-img'
          src={ImgProfile}
          alt='Kiran Shrestha'
        />
      </div>
      <div className='card light-blue darken-4 z-depth-0 hide-on-large-only'>
        <div className='card-content center social'>
          <h2 className='grey-tect text-lighten-3'>
            <strong> Kiran Shrestha </strong>
          </h2>
          <h5 className='grey-text text-lighten-1'> MERN Stack Developer</h5>
          <a href='https://www.facebook.com/kiran.stha.9085/' target='blank'>
            <i className='fab fa-facebook-square fa-2x'></i>
          </a>
          <a href='https://www.instagram.com/kstha_/' target='blank'>
            <i className='fab fa-instagram-square fa-2x'></i>
          </a>
          <a href='https://twitter.com' target='blank'>
            <i className='fab fa-twitter-square fa-2x'></i>
          </a>
          <a href='https://github.com' target='blank'>
            <i className='fab fa-github-square fa-2x'></i>
          </a>
        </div>
      </div>
      <div className='card light-blue darken-4 z-depth-0'>
        <div className='card-context'>
          <h6 className='white-text'>
            <strong> # PROFILE</strong>
          </h6>
          <hr/>
          <p className='grey-text text-lighten-3 pt'>
            Hey There!! Thanks for visiting my profile. I'm a professional
            developer with an experience of 1+ years specifically in MERN
            stack primarily enhancing applications UI/UX in JavaScript React.js BACKEND in Node.js.
             I have built all kinds of applications -
            websites, RESTful services, real-time applications. 
          </p>
        </div>
      </div>
      <br/>
    </>
  );
};

export default Profile;