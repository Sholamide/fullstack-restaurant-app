import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import {FcCancel} from 'react-icons/fc'

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    const addtocart = () => {
      dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: items,
      });
      localStorage.setItem("cartItems", JSON.stringify(items));
    };
    addtocart();
  }, [dispatch, items]);

  return (
    <div
    ref={rowContainer}
    className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
      flag
        ? "overflow-x-scroll scrollbar-none"
        : "overflow-x-hidden flex-wrap justify-center"
    }`}
  >
    {data && data.length > 0 ? (
      data.map((item) => (
        <div
          key={item?.id}
          className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
        >
          <div className="w-full flex items-center justify-between">
            <motion.div
              className="w-40 h-40 -mt-8 drop-shadow-2xl"
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={item?.imageURL}
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-full bg-[#d49c3c] flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
              onClick={() => setItems([...cartItems, item])}
            >
              <MdShoppingBasket className="text-white" />
            </motion.div>
          </div>

          <div className="w-full flex flex-col items-end justify-end -mt-8">
            <p className="text-textColor font-semibold text-base md:text-lg">
              {item?.title}
            </p>
            <div className="flex items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-[#d49c3c]">₦</span> {item?.price}
              </p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="w-full flex flex-col items-center justify-center">
        <FcCancel className="h-[70px] w-[70px]" />
        <p className="text-xl text-headingColor font-semibold my-2">
           Not Available at the moment
        </p>
      </div>
    )}
  </div>
  )
}

export default RowContainer