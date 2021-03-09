import React from "react";

export default function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row row1">
          <div class="col-12 col-lg-6">
            <div class="footer__left">
              <p>
                {" "}
                <i class="fas fa-phone"></i><span></span>Phone: (+84) 09698323124214
              </p>

              <p>
                {" "}
                <i class="fas fa-envelope"></i> <span></span>Email: support@delivery.com
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="footer__right">
              <div class='group__icon1'>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-google"></i>
              </div>
              <div class='group__icon2'>
              <i class="fab fa-youtube"></i>
              <i class="fas fa-envelope"></i>
              <i class="fas fa-phone"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 copyright">
            <p>Copyright @ 2020 , MinhHa All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
