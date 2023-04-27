import React from 'react';

function Reviews() {
  return (
    <section id="Reviews" class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="h2 text-black align-text-top text-center">Testimonials</div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-chat-quote-fill"></i>
                </div>
                <p class="card-text">
                  "I recently had some electrical work done in my home by the team at Abeln Home Services, and I couldn't be happier with the results. They were prompt, professional, and went above and beyond to make sure everything was done safely and correctly. I highly recommend them for any home maintenance needs!"
                </p>
                <p>-Karen W</p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-chat-quote-fill"></i>
                </div>
                <p class="card-text">
                  "I was in a bind when my water heater broke down unexpectedly, but thankfully I found Abeln Home Services. They were able to come out the same day and replace the unit quickly and affordably. I was impressed with their professionalism and their willingness to work around my schedule. I'll definitely be calling them again for any future home maintenance needs."
                </p>
                <p>-Patrick Mahomes</p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-chat-quote-fill"></i>
                </div>
                <p class="card-text">
                  "I've used ABC Home Maintenance for a variety of projects around my rentals, from plumbing repairs to painting and everything in between. Every time, their team has been knowledgeable, courteous, and efficient. I appreciate their attention to detail and their commitment to getting the job done right the first time."
                </p>
                <p>-CoMo Rentals LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
