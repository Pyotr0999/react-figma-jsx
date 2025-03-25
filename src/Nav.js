import logo from "./img/Group (1).jpg";

function Nav() {
  return (
    <nav>
    <button class="menu-btn" type="button">
    <span class="btn-line"></span>
    <span class="btn-line"></span>
    <span class="btn-line"></span>
    <span class="btn-line"></span>
</button>
    <ul class="menu">
    <li class="menu_list"><a href="#"class="menu_link">Что нового</a></li>
    <li class="menu_list"><a href="#"class="menu_link">Цвет</a></li>
    <li class="menu_list"><a href="#"class="menu_link">Заказать</a></li>
    </ul>

<div class="logo">
    <a href="#">
        <img src={logo} />
    </a>
</div>
<a href="#" class="phone">
    +38 050-456-56-56
</a>
</nav>
  );
}

export default Nav;
