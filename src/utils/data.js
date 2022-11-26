import image1 from "../img/image1.png";
import image2 from "../img/pamplona.png";
import image3 from "../img/oatmeal.png";
import image4 from "../img/fi2.png";
import {MdBreakfastDining,MdLunchDining,MdDinnerDining} from 'react-icons/md'
import {GiIceCreamCone,GiMilkCarton, GiBeerBottle} from 'react-icons/gi'
import {BiDrink} from 'react-icons/bi'
export const heroData = [
  {
    id: 1,
    name: "Coolio Dip",
    decp: "Delicious.",
    price: "11",
    imageSrc: image1,
  },
  {
    id: 2,
    name: "Pamplona",
    decp: "stuffed-meat dish.",
    price: "20",
    imageSrc: image2,
  },
  {
    id: 3,
    name: "Oatmeal Cookie",
    decp: "Rolled oats.",
    price: "25",
    imageSrc: image3,
  },
  {
    id: 4,
    name: "Coolio Special ",
    decp: "Coolio special.",
    price: "25",
    imageSrc: image4,
  },
  {
    id: 4,
    name: "Coolio Dish ",
    decp: "Coolio special.",
    price: "25",
    imageSrc: image4,
  },
  {
    id: 4,
    name: "Coolio Special ",
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
];