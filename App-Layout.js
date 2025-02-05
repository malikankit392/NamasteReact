import React from "react";
import ReactDOM from "react-dom/client"
  
const AppLayout = () => {
    return (
        <div className="pop">
            <Header/>
            <Body/>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className ="logo" src = "https://cdn-icons-png.flaticon.com/256/10750/10750601.png" />
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

const RestaurantCard = (props) => {
    return (
        <div className= "res-card" style = {{backgroundColor: "#D3D3D3"}}>
            <img className= "res-logo" alt-text="Meghna Foods" src="https://coreldrawdesign.com/resources/previews/preview-restaurants-logo-design-cdr-template-vector-free-1704712805.jpg"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.eta}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className ="body"> 
            <div className ="search">Search</div>
            <div className = "res-container">
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, North Indian, Asian" rating="3.8" eta="30mins"/>
                <RestaurantCard resName="KFC" cuisine="Burger and Fast food" rating="4.1" eta="40mins"/>
            </div> 
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<AppLayout/>)


/* Components that our Application will have
*   Header
    - Logo 
    - Nav Items
*   Body
    - Search bar
    - RestaurantContainer
        - RestaurantCard
            -   Img
            -   Name of Restaurant
            -   Star Rating
            -   Cuisine
            -   Delivery Time
*   Footer
    - Copyright
    - Links
    - Address
    - Contact
*/