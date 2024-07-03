
import React from "react";
import ReactDOM from "react-dom/client"

const Header =()=>{
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2'/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
    )
}
const RestaurantCard =({resName,cuisine})=>{
    return(
        <div className="res-card">
            <img  style={{width:"200px"}} 
            alt="res-logo"
            src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h5>4.5 stars</h5>
            <h5>35 min</h5>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body-container">
        <div className="search">
          search
        </div>
        <div className="res-container">
            <RestaurantCard resName='Meghana Foods' cuisine="Biryani, North indian,Asian"/>
            <RestaurantCard resName="burger" cuisine="Fast food"/>


        </div>
        </div>
    )
}


const AppLayout=()=>{
    return(
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)