import React from "react";

export default function Section3() {
  return (
    <div class="section3">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="section3__title"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>QUY TRÌNH GIAO NHẬN</h2>
            </div>
          </div>
        </div>
        <div class="section3__process">
          <div class="line"></div>
          {/* Bar 1 */}
          <div class="processBar" data-aos="fade-left" data-aos-delay="300">
            <div class="processBar__logo">
              <img
                src="../Images_Transport/icons8-add-user-male-48.png"
                class="imgAnimation"
                alt='img'
              ></img>
            </div>
            <div class='processBar__text'>
            <h4>Đăng nhập</h4>
            <p>Đăng nhập hoặc tạo tài khoản mới để bắt đầu.</p>
            </div>
          </div>

          {/* Bar 2 */}
          <div class="processBar" data-aos="fade-left" data-aos-delay="400">
            <div class="processBar__logo">
              <img
                src="../Images_Transport/icons8-create-48.png"
                class="imgAnimation"
                alt='img'
              ></img>
            </div>
            <div class='processBar__text'>
            <h4>Tạo đơn hàng</h4>
            <p>Tạo đơn hàng trực tiếp trên website.</p>
            </div>
          </div>
          {/* Bar 3 */}
          <div class="processBar" data-aos="fade-left" data-aos-delay="500">
            <div class="processBar__logo">
              <img
                src="../Images_Transport/icons8-in-transit-48.png"
                class="imgAnimation"
                alt='img'
              ></img>
            </div>
            <div class='processBar__text'>
            <h4>Lấy hàng</h4>
            <p>
              Cung cấp địa chỉ người gửi, bàn giao hàng cho nhân viên giao hàng.
            </p>
            </div>
          </div>
          {/* Bar 4 */}
          <div class="processBar" data-aos="fade-left" data-aos-delay="600">
            <div class="processBar__logo">
              <img
                src="../Images_Transport/icons8-track-order-48.png"
                class="imgAnimation"
                alt='img'
              ></img>
            </div>
            <div class='processBar__text'>
            <h4>Theo dõi đơn hàng</h4>
            <p>Người gửi và quản lý theo dõi đơn hàng trên website.</p>
            </div>
          </div>

          {/* Bar 5 */}
          <div class="processBar" data-aos="fade-left" data-aos-delay="700">
            <div class="processBar__logo">
              <img
                src="../Images_Transport/icons8-shipped-48.png"
                class="imgAnimation"
                alt='img'
              ></img>
            </div>
            <div class='processBar__text'>
            <h4>Giao hàng</h4>
            <p>Nhân viên giao hàng cho người nhận, thu tiền hộ theo yêu cầu.</p>
            </div>
          </div>
          {/* Bar 6 */}
          <div class="processBar" data-aos="fade-left" data-aos-delay="800">
            <div class="processBar__logo">
              <img
                src="../Images_Transport/icons8-money-box-48.png"
                class="imgAnimation"
                alt='img'
              ></img>
            </div>
            <div class='processBar__text'>
            <h4>Trả tiền thu hộ</h4>
            <p>Hệ thống trả tiền thu hộ định kỳ hàng tuần</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
