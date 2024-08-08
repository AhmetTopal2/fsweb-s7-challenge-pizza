import React, { useState } from "react";
import IconSelectors from "./IconSelectors";
import pizza1 from "../../Assets/Iteration-2-aseets/pictures/food-1.png";
import pizza2 from "../../Assets/Iteration-2-aseets/pictures/food-2.png";
import pizza3 from "../../Assets/Iteration-2-aseets/pictures/pizza-3.jpg";
import ramen1 from "../../Assets/Iteration-2-aseets/pictures/ramen1.jpg";
import ramen2 from "../../Assets/Iteration-2-aseets/pictures/ramen2.jpg";
import ramen3 from "../../Assets/Iteration-2-aseets/pictures/ramen3.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Products({ selectedCategory, setSelectedProduct }) {
  const history = useHistory();
  const foods = [
    // Ramen items
    {
      id: 1,
      name: "Spicy Miso Ramen",
      price: "45TL",
      rating: "4.8",
      reviews: "(120)",
      image: ramen1,
      category: "Ramen",
    },
    {
      id: 2,
      name: "Tonkotsu Ramen",
      price: "50TL",
      rating: "4.7",
      reviews: "(85)",
      image: ramen2,
      category: "Ramen",
    },
    {
      id: 3,
      name: "Shoyu Ramen",
      price: "48TL",
      rating: "4.9",
      reviews: "(90)",
      image: ramen3,
      category: "Ramen",
    },
    // Pizza items
    {
      id: 4,
      name: "Margherita Pizza",
      price: "60",
      rating: "4.9",
      reviews: "(200)",
      image: pizza1,
      category: "Pizza",
    },
    {
      id: 5,
      name: "Pepperoni Pizza",
      price: "65",
      rating: "4.8",
      reviews: "(180)",
      image: pizza2,
      category: "Pizza",
    },
    {
      id: 6,
      name: "BBQ Chicken Pizza",
      price: "70",
      rating: "4.7",
      reviews: "(150)",
      image: pizza3,
      category: "Pizza",
    },
    // Burger items
    {
      id: 7,
      name: "Cheeseburger",
      price: "40TL",
      rating: "4.8",
      reviews: "(110)",
      image: "https://picsum.photos/200/300?burger1",
      category: "Burger",
    },
    {
      id: 8,
      name: "Double Patty Burger",
      price: "55TL",
      rating: "4.9",
      reviews: "(95)",
      image: "https://picsum.photos/200/300?burger2",
      category: "Burger",
    },
    {
      id: 9,
      name: "Chicken Burger",
      price: "45TL",
      rating: "4.7",
      reviews: "(120)",
      image: "https://picsum.photos/200/300?burger3",
      category: "Burger",
    },
    // French fries items
    {
      id: 10,
      name: "Classic French Fries",
      price: "20TL",
      rating: "4.9",
      reviews: "(150)",
      image: "https://picsum.photos/200/300?fries1",
      category: "French fries",
    },
    {
      id: 11,
      name: "Curly Fries",
      price: "25TL",
      rating: "4.8",
      reviews: "(140)",
      image: "https://picsum.photos/200/300?fries2",
      category: "French fries",
    },
    {
      id: 12,
      name: "Sweet Potato Fries",
      price: "30TL",
      rating: "4.7",
      reviews: "(130)",
      image: "https://picsum.photos/200/300?fries3",
      category: "French fries",
    },
    // Fast food items
    {
      id: 13,
      name: "Hot Dog",
      price: "35TL",
      rating: "4.7",
      reviews: "(150)",
      image: "https://picsum.photos/200/300?fastfood1",
      category: "Fast food",
    },
    {
      id: 14,
      name: "Chicken Nuggets",
      price: "40TL",
      rating: "4.8",
      reviews: "(160)",
      image: "https://picsum.photos/200/300?fastfood2",
      category: "Fast food",
    },
    {
      id: 15,
      name: "Onion Rings",
      price: "25TL",
      rating: "4.6",
      reviews: "(170)",
      image: "https://picsum.photos/200/300?fastfood3",
      category: "Fast food",
    },
    // Soft drinks items
    {
      id: 16,
      name: "Coca Cola",
      price: "10TL",
      rating: "4.9",
      reviews: "(500)",
      image: "https://picsum.photos/200/300?drink1",
      category: "Soft drinks",
    },
    {
      id: 17,
      name: "Fanta",
      price: "10TL",
      rating: "4.8",
      reviews: "(450)",
      image: "https://picsum.photos/200/300?drink2",
      category: "Soft drinks",
    },
    {
      id: 18,
      name: "Sprite",
      price: "10TL",
      rating: "4.7",
      reviews: "(400)",
      image: "https://picsum.photos/200/300?drink3",
      category: "Soft drinks",
    },
  ];

  const filteredFoods = foods.filter(
    (food) => food.category === selectedCategory
  );

  return (
    <div className="flex justify-center">
      <div className="w-[1068px] h-full flex justify-evenly pb-16">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="bg-white cursor-pointer"
            onClick={() => {
              food.category !== "Pizza"
                ? alert('Sectiginiz Urun Mevcut Degil')
                : (setSelectedProduct(food), history.push("/pizzaOrder"));
            }}
          >
            <img src={food.image} alt={food.name} className="bg-white" />
            <p className="text-xl font-bold">{food.name}</p>
            <div className="flex justify-evenly mt-2">
              <p className="text-xl">{food.price}</p>
              <div className="flex gap-3">
                <p>{food.rating}</p>
                <p>{food.reviews}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
