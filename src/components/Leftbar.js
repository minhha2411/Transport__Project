import React from "react";
import { Link } from "react-router-dom";

export default function Leftbar(props) {
  return (
    <div class="content__left__container">
      <div class="close" onClick={props.handleClick}>
        <i class="fas fa-times fa-2x"></i>
      </div>
      <ul>
        <li class="active">
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/about">Về chúng tôi</Link>
        </li>
        <li>
          <Link to="/services">Dịch vụ</Link>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
        <li>
          <Link to="/signin">Đăng nhập</Link>
        </li>
      </ul>
    </div>
  );
}
