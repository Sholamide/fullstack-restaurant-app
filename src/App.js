import React, { useEffect } from "react";
import { CreateContainer, Header, MainContainer } from "./components";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./components/ErrorPage";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
 
  useEffect(() => {
    const fetchData = async () => {
      await getAllFoodItems().then((data) => {
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data,
        });
      });
    };
    fetchData();
    console.log(fetchData);
  }, [dispatch]);

  return (
    <AnimatePresence mode="wait">
      <div className="flex h-auto w-screen flex-col">
        <Header />
        <main className="mt-14 w-full px-4 py-4 md:mt-20 md:px-16">
          <Routes>
            <Route path="/" element={<MainContainer />}  />
            <Route index element={<MainContainer />}  />
            <Route path="add" element={<CreateContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
