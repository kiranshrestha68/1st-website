import React from 'react'

const About = () => {
    return (
        <div>
           <div className="card z-depth-0 hide-on-med-and-down pt">
               <div className="card-content social">
                   <h2 className="grey-text text-darken-3">
                       <strong> Kiran Shrestha </strong>
                   </h2>
                   <h5 className='grey-text text-darken-1'> MERN Stack Developer</h5>
          <a href='https://facebook.com' target='blank'>
            <i className='fab fa-facebook-square fa-2x'></i>
          </a>
          <a href='https://instagram.com' target='blank'>
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
        </div>
    )
}

export default About