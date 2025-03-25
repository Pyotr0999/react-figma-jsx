import logo from "./img/Group (1).jpg";
function NavFooter() {
  return (
    <nav class="nav1">
        <ul class="menu1">
        <li class="menu_list"><a href="#"class="menu_link1">Политика конфиденциальности</a></li>
        </ul>
    
   <div class="logo">
       <a href="#">
           <img src={logo} />
       </a>
   </div>
    <a href="#" class="phone1">
        +38 050-456-56-56
    </a>
</nav>
  );
}

export default NavFooter;
