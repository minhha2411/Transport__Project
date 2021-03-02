import React from "react";

export default function Section4() {
  return (
    <div class="section4">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active circle__btn"
            aria-current="true"
            aria-label="Slide 1"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            class="circle__btn"
            aria-label="Slide 2"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            class="circle__btn"
            aria-label="Slide 3"
          ></li>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h5>
              <p>
                ‘‘Delivery giúp hệ thống The Coffee House đồng bộ quy trình giao
                hàng ở tất cả các chi nhánh và không phải lo lắng về việc phát
                triển nhân viên giao hàng’’.
              </p>
              <div class="carousel__logo">
                <img
                  src="../Images_Transport/img7.jpg"
                  class="carousel__img"
                ></img>
              </div>
              <h6>KMG CEO</h6>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h5>
              <p>
                ‘‘Với các cửa hàng trong hệ thống Kiot Viet, xoay vòng vốn nhanh
                trước nay vẫn là vấn đề nan giải. Với dịch vụ giao hàng của
                Delivery, các tài xế đều ứng tiền khi nhận hàng giúp họ giải
                quyết nhanh gọn bài toán này’’.
              </p>
              <div class="carousel__logo">
                <img
                  src="http://wheelco.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/03/team_1.jpg"
                  class="carousel__img"
                ></img>
              </div>
              <h6>KMG CEO</h6>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h5>
              <p>
                ‘‘Delivery đã luôn lắng nghe những ý kiến đóng góp của chúng tôi
                và từng bước cải thiện chất lượng dịch vụ của mình. Chúng tôi
                hoàn toàn yên tâm về chất lượng dịch vụ của Delivery’’.
              </p>
              <div class="carousel__logo">
                <img
                  src="http://wheelco.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/03/team_4.jpg"
                  class="carousel__img"
                ></img>
              </div>
              <h6>KMG CEO</h6>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// https://i.pinimg.com/originals/3a/fc/b0/3afcb0cf69dcfdf6aaa1e3aa917cea04.jpg
// https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/New_York_City_at_night_HDR.jpg/1200px-New_York_City_at_night_HDR.jpg
// https://wallpaper.dog/large/10816444.jpg

{
  /* <h2>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h2>
                <p>‘’Delivery giúp hệ thống The Coffee House đồng bộ quy trình giao hàng 
ở tất cả các chi nhánh
và không phải lo lắng về việc phát triển nhân viên giao hàng’’.</p>
<div className='section4__logo'>
    <img></img>
</div>
<h4>KMG CEO</h4> */
}
