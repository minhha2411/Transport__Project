import React from "react";



export default function Section6() {
  return (
    <div class="section6">
      <div class="section6__background">
        <div class="container allbox" data-aos-delay="500" data-aos='fade-up'  data-aos-offset="100">
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="box">
                <div class='section6__icon'><i class="far fa-heart"></i></div>
                <div class="counter" data-target="17500">
                  0
                </div>

                <p>Khách hàng thân thiết</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="box">
              <div class='section6__icon'><i class="fas fa-route"></i></div>
                <div class="counter" data-target="68190">
                  0
                </div>
                <p>Số km mỗi năm</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="box">
                <div class='section6__icon'><i class="fas fa-archive"></i></div>
                <div class="counter" data-target="15000">
                  0
                </div>
                <p>Đơn giao vận thành công</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="box">
                <div class='section6__icon'>   <i class="fas fa-money-check-alt"></i></div>
           
                <div class="counter" data-target="19608">
                  0
                </div>
                <p>Đơn thu hộ thành công</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
