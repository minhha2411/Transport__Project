import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="nav__logo">
          <Link class="navbar-brand" to="/">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/610/927/small_2x/attachment_86172223-01.jpg"
              alt="logo"
              className="logo"
            ></img>
          </Link>
        </div>

        <ul class="navbar-nav ms-auto nav__link">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
              Trang chủ
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/about">
              Về chúng tôi
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/services">
              Dịch vụ
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Liên hệ
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signin">
              Đăng nhập
            </Link>
          </li>
        </ul>
        <div class="bars" onClick={props.handleClick}>
          <i class="fas fa-bars fa-lg"></i>
        </div>
      </div>
    </nav>
  );
}
