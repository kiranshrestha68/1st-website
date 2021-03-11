import React from "react";
import { useForm } from 'react-hook-form';


const Contact = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    

    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

                    <form action="" onSubmit                                                                                                                                                                                                                                                                                                                                                                           ={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter Your First Name" name="firstname"
                      ref={register({required: true })}/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Last  Name" name="lastname" 
                          ref={register({required: true })}/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Contact No.</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your mobile No. " name="contactno"
                          ref={register({required: true })}/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com" name="email" 
                          ref={register({required: true })}/>
                    </div>

                   

                    <div className="mb-3">
                       <label htmlFor="exampleFormControlTextarea1" className="form-label">Message Us</label>
                       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"   ref={register({required: true })}></textarea>
                    </div>

                    <div>
                        <button className="btn btn-outline-primary" type="submit"> Submit </button>
                    </div>


                    </form>
                </div>
            </div>

        </div>
        </>
    );
};

export default Contact;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function Contact() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
//       <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
//       <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
//       <select name="Title" ref={register({ required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select>

//       <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
//       <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

//       <input type="submit" />
//     </form>
//   );
// }