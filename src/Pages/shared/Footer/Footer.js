import React from 'react';

const Footer = () => {
    return (
        <div>
           <section class="bg-primary">
  {/* <!-- Footer --> */}
  <footer class="text-center text-white" >
    {/* <!-- Grid container --> */}
    <div class="container p-4 pb-0">
      {/* <!-- Section: CTA --> */}
      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      {/* <!-- Section: CTA --> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div class="text-center p-3" >
      © 2022 Copyright:
      <a class="text-white" href="https://srsdev.com/">srsinfo.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  {/* <!-- Footer --> */}
</section>
        </div>
    );
};

export default Footer;