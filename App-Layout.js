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

const resObj= {
    "info": {
    "id": "722840",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Nagar Road",
    "areaName": "Phoenix Marketcity Mall",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "61955",
    "avgRatingString": "4.3",
    "totalRatingsString": "592",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 0.8,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "0.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-02-05 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹149"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ba85d2-bcc5-484f-97ee-ac6eaddfe80f"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/pune/chinese-wok-nagar-road-phoenix-marketcity-mall-rest722840",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className= "res-card" style = {{backgroundColor: "#D3D3D3"}}>
            <img className= "res-logo" alt-text="Meghna Foods" 
                src = { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                resData.info.cloudinaryImageId }/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className ="body"> 
            <div className ="search">Search</div>
            <div className = "res-container">
                <RestaurantCard resData = {resObj}/>
                
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