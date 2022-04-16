import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch,  useSelector} from "react-redux"
//  import {addCountry} from "../Redux/CountryAdd/action";
import { Navigate } from "react-router-dom"
// import "./Todo.css";
const axios = require("axios");
export const Country = () => {

    const [data, setData] = useState({
        country:"",

    });

  

    const todos = useSelector((store) => store.todo) || [];

    const dispatch = useDispatch();

    const handleChange = (e) => {
        let {id, value} = e.target;
        setData({...data, [id] : value})
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/countries", data).then(() => {
            setData({
                country:"",
            })
        }) 
    }

    
    return (
        <>
        <div>
            <form onSubmit={handlesubmit}>
                <lable>Country name</lable><br></br>
                <input type = "text" id ="country" value={data.country} onChange={handleChange} />

                <input type = "submit" value = "submit" />
            </form>
        </div>
        </>
    )
}