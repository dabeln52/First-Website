import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          Abeln Home Services
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#Projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#Reviews" className="nav-link">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a href="#About Us" className="nav-link">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function TopSection() {
  return (
    <section className="bg-dark text-light py-5 p-lg-0 pt-lg-3 text-center text-sm-start">
      <div className="container">
        <div className="d-md-flex align-items-center justify-content-between">
          <div>
            <h1>Building dreams one home at a time</h1>

            <p className="lead my-5">
              We focus on making the remodeling process smooth and stress-free
              for our clients. This ensures they love the process as much as the
              end result.
            </p>

            <a href="#Contact Us" className="btn btn-light text-dark">
              Start Remodeling
            </a>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            src="First.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}


function SignupModal() {
  return (
    <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="signupLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signupLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="lead">Fill out this form and we will get in contact with you</p>
          </div>
          <form action="">
            <div className="mb-3">
              <label htmlFor="first-name" className="col-form-label">First Name: </label>
              <input type="text" className="form-control" id="first-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="col-form-label">Last Name: </label>
              <input type="text" className="form-control" id="last-Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="col-form-label">Email: </label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="col-form-label">Phone Number: </label>
              <input type="text" className="form-control" id="phone" />
            </div>
          </form>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}




export default function HomePage() {
  return (
    <>
      <Navbar />
      <TopSection />
      <SignupModal/>
    </>
  );
}
