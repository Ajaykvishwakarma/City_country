import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch,  useSelector} from "react-redux"
// import {addTodo} from "../Redux/action";
import { Navigate } from "react-router-dom"
// import "./Todo.css";
const axios = require("axios");
export const City = () => {
    const [ fetchD, setFetchD] = useState({})
    const [data, setData] = useState({
        city:"",
        population: "",
        country: ""

    });
   
    useEffect(() => {
        getData()
    }, [])

    
  

    const getData = () => {
        axios.get("http://localhost:8080/countries").then((res) => {
            setFetchD(res.data)
        })
    }

    var country = fetchD.country;


  

    const todos = useSelector((store) => store.todo) || [];

    const dispatch = useDispatch();

    const handleChange = (e) => {
        let {id, value} = e.target;
        setData({...data, [id] : value})
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/cities", data).then(() => {
            setData({
                city:"",
                population:"",
                country: fetchD.country,
            })
        }) 
    }
    
    return (
        <>
        <div>
            <form onSubmit={handlesubmit}>
                <lable>City name</lable>
                <input type = "text" id ="city" value={data.city} onChange={handleChange} /><br></br><br></br><br></br>

                <lable>Population</lable>
                <input type = "text" id ="population" value={data.population} onChange={handleChange} /><br></br><br></br><br></br>

                <input type = "submit" value = "submit" />
            </form>
        </div>
        </>
    )
}