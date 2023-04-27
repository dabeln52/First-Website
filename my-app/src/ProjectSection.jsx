import React from "react";

function ProjectsSection() {
  return (
    <section id="Projects" className="p-5 bg-dark">
      <div className="container">
        <div className="row text-center">
          <div className="col-md">
            <div className="card bg-light text-dark">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-rulers"></i>
                </div>
                <h3 className="card-title mb-3">Southside Projects</h3>
                <p className="card-text">
                  View our current projects going on in southern Columbia.
                </p>
                <a href="South.html" className="btn btn-dark text-light">
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light text-dark">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-house"></i>
                </div>
                <h3 className="card-title mb-3">Northern Projects</h3>
                <p className="card-text">
                  View our current projects going on in Northern Columbia.
                </p>
                <a href="North.html" className="btn btn-dark text-light">
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light text-dark">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-door-open"></i>
                </div>
                <h3 className="card-title mb-3">Lake Ozark Projects</h3>
                <p className="card-text">
                  View our current projects going on at Lake of the Ozarks.
                </p>
                <a href="Lake.html" className="btn btn-dark text-light">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
