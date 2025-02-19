import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // Local State Variables - using useState() it returns an array of 2 elements first 
    // is the variable and second is the set varaible.
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5619384&lng=73.9109977&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        // Optional Chaning...
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log("Body Rendered");

    // Conditional Rendering...
    // if(listOfRestaurants.length <=0)
    // {
    //     return (<Shimmer/>);
    // }
    
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

    return listOfRestaurants.length <=0 ? (<Shimmer/>): (
        <div className ="body"> 
            <div className = "filter">
                <button className = "filter-btn" 
                        onClick={()=> {
                            // For updating values of list of restaurant using set method of useState.
                            const filteredList = listOfRestaurants.filter((rest)=> rest.info.avgRating > 4.4)
                            setListOfRestaurants(filteredList);
                        }}>
                    Top Rated Restaurants
                </button>
                <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                <button className="search"
                        onClick={()=>{
                            console.log(searchText);
                            let restaurantsList = listOfRestaurants.filter((rest)=> rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            restaurantsList.length > 0 
                                ? setFilteredRestaurants(restaurantsList)
                                : setFilteredRestaurants(listOfRestaurants)
                        }}>Search</button>
            </div>
            <div className = "res-container">
                { filteredRestaurants.map(rest => <RestaurantCard key = {rest.info.id} resData = {rest}/>)}
            </div> 
        </div>
    )
}

export default Body;