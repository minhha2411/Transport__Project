import React, { useState } from "react";
export default function ServicesSection1() {
  const imgLink = [
    "http://theme.hstatic.net/1000376681/1000665239/14/sv_price_banner1.jpg?v=243",
    "http://theme.hstatic.net/1000376681/1000665239/14/sv_price_banner2.jpg?v=243%22",
    "http://theme.hstatic.net/1000376681/1000665239/14/sv_price_banner4.jpg?v=243",
  ];
  const [priceBoard, SetBoard] = useState(imgLink[0]);
  const handleImg = (price) => {
    if (price === "price1") {
      SetBoard(imgLink[0]);
    } else if (price === "price2") {
      SetBoard(imgLink[1]);
    } else if (price === "price3") {
      SetBoard(imgLink[2]);
    }
  };

  return (
    <div class="ServicesSection">
      <div class="container services__price">
        <h3>BẢNG GIÁ DỊCH VỤ</h3>
        <div class="row">
          <div class="col-4">
            {/* Price 1 */}
            <div class="price price__1" onClick={() => handleImg("price1")}>
              <i class="far fa-arrow-alt-circle-right fa-2x"></i>
              <h5>Bảng giá nội tỉnh</h5>
            </div>
            {/* Price 2 */}
            <div class="price price__2" onClick={() => handleImg("price2")}>
              <i class="far fa-arrow-alt-circle-right fa-2x"></i>
              <h5>Bảng giá nội vùng</h5>
            </div>
            {/* Price 3 */}
            <div class="price price__3" onClick={() => handleImg("price3")}>
              <i class="far fa-arrow-alt-circle-right fa-2x"></i>
              <h5>Bảng giá liên vùng đặc biệt</h5>
            </div>
          </div>
          <div class="col-8">
            <div class="container services__img">
              <img src={priceBoard} alt='img'></img>

              {/* 
               <img src="http://theme.hstatic.net/1000376681/1000665239/14/sv_price_banner1.jpg?v=243"></img>
              <img src='http://theme.hstatic.net/1000376681/1000665239/14/sv_price_banner2.jpg?v=243%22'></img>
                    <img src='http://theme.hstatic.net/1000376681/1000665239/14/sv_price_banner4.jpg?v=243'></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
