import React from "react";

export default function Section1() {
  return (
    <div class="section1">
      <div class="container">
        <div class="row section1__row1">
          <div class="col">
            <div
              class="section1__title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>TẠI SAO CHỌN DELIVERY ?</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-lg-4">
            <div class="section1__card" data-aos="fade-right">
              <img src="../Images_Transport/icons8-in-transit-96.png"></img>
              <h3>Giao hàng toàn quốc</h3>
              <p>
                Vận chuyển đường bộ và đường không đến 64 quận/huyện tỉnh thành
                toàn quốc.
              </p>
            </div>
          </div>
          <div class="col col-lg-4">
            <div class="section1__card" data-aos="fade-up" data-aos-delay="300">
              <img src="../Images_Transport/icons8-get-cash-96.png"></img>
              <h3>Miễn phí thu hộ (COD)</h3>
              <p>
                Nhân viên giao hàng và thu hộ tiền bạn trên toàn quốc, hệ thống
                chuyển tiền thu hộ cho bạn định kỳ hàng tuần.
              </p>
            </div>
          </div>
          <div class="col col-lg-4">
            <div
              class="section1__card"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img src="../Images_Transport/icons8-deliveryman-96.png"></img>
              <h3>Sẵn sàng phục vụ</h3>
              <p>
                Hơn 5 vạn tài xế sẵn sàng vận chuyển hàng hóa của bạn đến bất kì
                đâu, không kể nắng mưa, lễ tết.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
