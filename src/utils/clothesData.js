import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import Shorts from "../componets/Clothes/Shorts";
import Svitshot from "../componets/Clothes/Svitshot";
import TShirts from "../componets/Clothes/T-Shirt";
import Trauzer from "../componets/Clothes/Trouzers";

export const clothesData = [
  {
    id: 1,
    element: <Shorts />,
    path: "/shorts",
    category: "shorts",
    title: "Шорты",
    img: img4,
  },
  {
    id: 2,
    element: <Svitshot />,
    path: "/svitshots",
    category: "svitshots",
    title: "Свитшоты",
    img: img2,
  },
  {
    id: 3,
    element: <TShirts />,
    path: "/tshirts",
    category: "tshirt",
    title: "Футболки",
    img: img3,
  },
  {
    id: 4,
    element: <Trauzer />,
    path: "/trauzers",
    category: "trauzers",
    title: "Шаровары",
    img: img1,
  },
];
