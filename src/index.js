import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="header">Let's cheer for pizza.</h1>
    </header>
  );
}
function Menu() {
  const pizza = pizzaData;
  const pizzaNum = pizza.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic Italien cuisine . 6 creative dishes to choose from . All
            from our stone oven, all organic , all delicious
          </p>

          <ul className="pizzas">
            <></>
            {pizza.map((x) => (
              <Pizza x={x} key={x.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we'are still working in our menu . please come back later</p>
      )}
      ;
    </div>
  );
}

function Pizza({ x }) {
  return (
    <li className={`pizza ${x.soldOut ? "sold-out" : ""}`}>
      <img src={x.photoName} alt={x.name} />
      <div>
        <h3>{x.name}</h3>
        <p>{x.ingredients}</p>
        <span>{x.soldOut ? "Sold out" : x.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   hour >= openHour && hour <= closeHour
  //     ? alert("we're currently open")
  //     : alert("we're currently closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Sorry we're closed</p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour} . Come visit use Or order Online</p>
      <button type="" className="btn">
        Order Now
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
