import React, { useEffect } from "react";
import observer from "./observer";
export default function Section5() {
  useEffect(() => {
    observer();
  });

  return (
    <div class="section5">
      <div class="skill-bars" data-aos-delay="500" data-aos="fade-up">
        <div class="bar">
          <div class="info">
            <span>Kinh Nghiệm</span>
          </div>
          <div class="progress-line html">
            <span class="inside"></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Lợi Nhuận</span>
          </div>
          <div class="progress-line css">
            <span class="inside"></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Hài Lòng</span>
          </div>
          <div class="progress-line jquery">
            <span class="inside"></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Tốc Độ</span>
          </div>
          <div class="progress-line python">
            <span class="inside"></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Tăng Trưởng</span>
          </div>
          <div class="progress-line mysql">
            <span class="inside"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
