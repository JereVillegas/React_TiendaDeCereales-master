import "./styles/NavBar.css";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <CartWidget />
      <nav>
        <Link to={"/"}>
          <h1>Tienda de Cereales</h1>
        </Link>
        <div className="categorias">
          <NavLink
            style={{ padding: 5 }}
            to={"/category/tradicional"}
            className={({ isActive }) =>
              isActive ? "clickeado" : "noClickeado"
            }
          >
            <h1>Tradicional</h1>
          </NavLink>
          <NavLink
            style={{ padding: 5 }}
            to={"/category/granola"}
            className={({ isActive }) =>
              isActive ? "clickeado" : "noClickeado"
            }
          >
            <h1>Granola</h1>
          </NavLink>
          <NavLink
            style={{ padding: 5 }}
            to={"/category/almohaditas"}
            className={({ isActive }) =>
              isActive ? "clickeado" : "noClickeado"
            }
          >
            <h1>Almohaditas</h1>
          </NavLink>
          <NavLink
            style={{ padding: 5 }}
            to={"/category/integral"}
            className={({ isActive }) =>
              isActive ? "clickeado" : "noClickeado"
            }
          >
            <h1>Integral</h1>
          </NavLink>
          <NavLink
            style={{ padding: 5 }}
            to={"/category/niños"}
            className={({ isActive }) =>
              isActive ? "clickeado" : "noClickeado"
            }
          >
            <h1>Niños</h1>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
