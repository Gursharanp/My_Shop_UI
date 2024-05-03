import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/ContetCreater';
import Cart from '../CartItem/Cart';
import Logout from '../LoginItems/Logout';
import {Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios';
export default function Header() {


    let { user, setUser } = useContext(UserContext);
    let [location,setLocation] = useState("");
    const getCurrentLocation= ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    const showPosition = (locationDetails)=>{
        const latitude = locationDetails.coords.latitude;
        const longitude = locationDetails.coords.longitude;
        
        const locationAddress = axios.post("http://localhost:8080/getCurrentAddress",{"lat":latitude,"lon":longitude});
        
        locationAddress.then((res)=>{
            setLocation(res.data.address);
        }).catch((err)=>{
            console.log(err)
        })

    }
    

    useEffect(() => {

        getCurrentLocation();

        if (localStorage.getItem("user")) {
            let userData = JSON.parse(localStorage.getItem("user"));
            setUser(userData);
        }
    }, []);

    return (

        <Navbar expand="lg" className='headbar'>
            <Container>
                <Navbar.Brand href='/'>My Shop</Navbar.Brand>
                <div className='icon'>
                    <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" />
                </div>
                <div className='address'>
                    <div className='aicon'></div>
                    <div className='atext'>
                        <div className='addhead'>{location}</div>
                    </div>
                </div>
                <div className='search'>

                    <input type="search" placeholder='Search for products' />
                    <div className='sicon'> <i className="fa fa-search"></i></div>

                </div>
                <div className='category'>
                    categories
                </div>
                {
                    user == null ?
                        <Link to="/Login">
                            <div className='login'>
                                Login
                            </div>
                        </Link> : <Logout />
                }
                <div className='my-cart'>
                    <Cart />
                </div>

            </Container>
        </Navbar>


    )

}
