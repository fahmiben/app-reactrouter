import React, { useState } from "react";
import { CardMovie } from "./CardMovie";
import { Filter } from "./Filter";
import { Link, Route, BrowserRouter as Router, } from 'react-router-dom';


const ListMovies = ({ movies }) => {
    
    const [text, settext] = useState("");
    const [rate, setrate] = useState("");

    const filterText = (text) => {
        settext(text);
    };
    const filterRate = (rate) => {
        setrate(rate);
    };
    
    console.log(movies);

    

    return (
        <div>
            
            <Filter filterText={filterText} filterRate={filterRate} />
            <div className="ListMovies">
            
                {movies
                    .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) &&
                    el.rating >= rate)
                    .map((el) => (
                <CardMovie movie={el}/>
                
        ))}
    </div>
        </div>
    )
}


export default ListMovies