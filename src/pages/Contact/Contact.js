import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToENmDvBXoLsxBPwmjuGcAPd1-fKrRGY68jw&usqp=CAU" className=" rounded-lg shadow-2xl ml-40 w-96" alt='contact'/>
    <div>
    <h2 className='font-lobster text-6xl italic text-center my-4'>Contact Us</h2>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" placeholder="Full Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea textarea-bordered"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
    </div>
  </div>

    );
};

export default Contact;