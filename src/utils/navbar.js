import { Backet } from "../componets/Items/Backet";
import { Galery } from "../componets/Items/Galery";
import { Home } from "../componets/Items/Home";
import { Products } from "../componets/Items/Products";
import { Terms } from "../componets/Items/Terms";

export const navbarData = [
  { id: 1, title: "Домой", element: <Home />, path: "/", hidden: true },
  { id: 2, title: "Магазин", element: <Products />, path: "/products" },
  { id: 3, title: "Галерея", element: <Galery />, path: "/galary" },
  { id: 4, title: "Условия", element: <Terms />, path: "/terms" },
  { id: 5, title: "Корзина", element: <Backet />, path: "/cart" },
];
