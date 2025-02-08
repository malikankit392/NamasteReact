import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import {useState} from "react";

const Body = () => {

    // Local State Variables - using useState() it returns an array of 2 elements first 
    // is the variable and second is the set varaible.
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);


    // Normal JS variable.
    let listOfRestaurantsJs = [
        {
            "info": {
                "id": "43909",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "cuisines": ["Pizzas"],
                "avgRating": 4.5,
                "sla":{
                    "slaString": "30-35 mins"
                }
            }
        },
        {
            "info": {
                "id": "43910",
                "name": "Dominos",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "cuisines": ["Pizzas", "Burgers"],
                "avgRating": 3.5,
                "costForTwo": "₹350 for two",
                "sla":{
                    "slaString": "30-35 mins"
                }
            }
        },
        {
            "info": {
                "id": "43911",
                "name": "MCD",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "cuisines": "Pheonix Market",
                "cuisines": ["Pizzas", "Burgers"],
                "avgRating": 4.1,
                "sla":{
                    "slaString": "30-35 mins"
                }
            }
        }
    ]

    return (
        <div className ="body"> 
            <div className = "filter">
                <button className = "filter-btn" 
                        onClick={()=> {
                            // For updating values of list of restaurant using set method of useState.
                            const filteredList = listOfRestaurants.filter((rest)=> rest.info.avgRating > 4)
                            setListOfRestaurants(filteredList);
                        }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className = "res-container">
                { listOfRestaurants.map(rest => <RestaurantCard key = {rest.info.id} resData = {rest}/>)}
            </div> 
        </div>
    )
}

export default Body;