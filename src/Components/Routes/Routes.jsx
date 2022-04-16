import { Route, Routes } from "react-router-dom";
import { City } from '../AddCity/City';
import { Navbar } from '../Navbar/Navbar';
import { Show } from '../Show/Show';
import { Country } from "../AddCountry/Country";
export const Routes1 = () => {

    return (

        <>
        
        <Navbar />
        <Routes>
         <Route path="/" element={<Show/>}/>
         <Route path="/add-country" element={<Country/>}/>
         <Route path="/add-city" element={<City/>}/>
        </Routes>
        </>

    )
}