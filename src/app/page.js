"use client";
import Card from "@/components/Card";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import ProductDescription from "@/components/ProductDescription";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [rating, setRating] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [showItem, setShowItem] = useState(false);
  const [itemToShow, setItemToShow] = useState({});
  const [showCart, setShowCart] = useState(false);
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const ShowCurrentItem = (item) => {
    setShowItem(true);
    setItemToShow(item);
  };
  useEffect(() => {
    if (searchInput !== "") {
      const searchData = data.filter((item) =>
        item?.title?.toLowerCase().includes(searchInput.toLowerCase())
      );
      setData(searchData);
    } else if (searchInput == "") {
      getData();
    }
  }, [searchInput]);
  useEffect(() => {
    if (rating == "All") {
      getData();
    } else if (rating !== "All") {
      const currentData = [...data];
      const updatedData = currentData.filter(
        (item) => item?.rating?.rate > rating
      );
      setData(updatedData);
    }
  }, [rating]);
 
  return (
    <div>
      <Navbar
        setShowCart={setShowCart}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        rating={rating}
        setRating={setRating}
      />
      <div
        style={{
          display: "grid",
          grid: "380px / auto auto auto",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: showItem ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          {showItem && (
            <ProductDescription
              item={itemToShow}
              setShowItem={setShowItem}
              setCartData={setCartData}
            />
          )}
        </div>
        {showCart && (
          <div style={{ position: "absolute" }}>
            <Cart
              cartData={cartData}
              setShowCart={setShowCart}
              setCartData={setCartData}
            />
          </div>
        )}
        {!showItem &&
          data.map((item) => (
            <div key={item.id}>
              <Card
                item={item}
                setShowItem={setShowItem}
                setCartData={setCartData}
              />
              <button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "5px",
                }}
                onClick={() => ShowCurrentItem(item)}
              >
                Show Product
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
