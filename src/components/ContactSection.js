import React from "react";

export default function ContactSection() {
  return (
    <div class="contactSection">
      <div class="container">
        <div class="row">
            
          <img src="http://theme.hstatic.net/1000376681/1000665239/14/header_pagecontact.jpg?v=243" alt='img'></img>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="contactSection__left">
              <h2>Thông tin liên hệ</h2>
              <h4>Địa chỉ chúng tôi</h4>
              <p>Tầng 3, tòa nhà RBC, số 7/28 TT, Phường 14, Quận 10, TP HCM</p>
              <h4>Email chúng tôi</h4>
              <p>Chăm sóc khách hàng: cskh@delvery.vn</p>
              <p>Hỗ trợ kinh doanh: hotrokinhdoanh@delvery.vn</p>
              <h4>Điện thoại</h4>
              <p>1800 6328 (Miễn phí)</p>
              <h4>Thời gian làm việc</h4>
              <p>Thứ 2 đến Chủ Nhật từ 8h30 đến 21h00 (Kể cả ngày nghỉ lễ)</p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="contactSection__right">
              <h2>Hỗ trợ tư vấn</h2>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="name"
                    placeholder="Tên của bạn"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Email của bạn"
                  />
                  </div>
                  <div class='form-group'>
                  <input
                    type="tel"
                    class="form-control"
                    id="exampleInputEmail3"
                    aria-describedby="number"
                    placeholder="Số điện thoại của bạn"
                  />
                </div>
                <textarea
                  placeholder="Nội dung cần tư vấn"
                  name="advice"
                ></textarea>
                <button type="submit" class="btn">
                  Gửi cho chúng tôi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
