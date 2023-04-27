import React from 'react';

function SignupForm() {
  return (
    <section className="bg-light text-dark p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Sign Up For Information</h3>
          <div className="input-group email-input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
            <button
              className="btn btn-dark btn-lg"
              type="button"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
