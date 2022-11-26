import image1 from "../img/c7.png";
import image2 from "../img/c1.png";
import image3 from "../img/c6.png";
import image4 from "../img/fi2.png";
import {MdBreakfastDining,MdLunchDining,MdDinnerDining} from 'react-icons/md'
import {GiIceCreamCone,GiMilkCarton, GiBeerBottle} from 'react-icons/gi'
import {BiDrink} from 'react-icons/bi'
export const heroData = [
  {
    id: 1,
    name: "Chicken and Chips",
    decp: "special recipe.",
    price: "11",
    imageSrc: image1,
  },
  {
    id: 2,
    name: "Pamplona Chicken",
    decp: "stuffed-chicken dish.",
    price: "20",
    imageSrc: image2,
  },
  {
    id: 3,
    name: "Hot-Pan Platter ",
    decp: "chicken.",
    price: "25",
    imageSrc: image3,
  },
  {
    id: 4,
    name: "Grilled Fish ",
    decp: "Coolio special.",
    price: "25",
    imageSrc: image4,
  },
];

export const categories = [
  {
    id: 1,
    name: "Breakfast",
    urlParamName: "breakfast",
    icon:<MdBreakfastDining />,
  },
  {
    id: 2,
    name: "Lunch",
    urlParamName: "lunch",
    icon: <MdLunchDining />
  },
  {
    id: 3,
    name: "Dinner",
    urlParamName: "dinner",
    icon:<MdDinnerDining/>
  },
  {
    id: 5,
    name: "Smoothies",
    urlParamName: "smoothies",
    icon:<GiMilkCarton />
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
    icon:<GiIceCreamCone />
  },
  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
    icon:<BiDrink />
  },
  {
    id: 8,
    name: "Alchohol",
    urlParamName: "alchohol",
    icon:<GiBeerBottle />
  },
  {
    id: 9,
    name: "Specials",
    urlParamName: "specials",
    icon:<GiBeerBottle />
  },
];