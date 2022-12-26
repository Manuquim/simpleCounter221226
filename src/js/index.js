//import react into the bundle
import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

function Counter(props){
    return (
        <div className="contador">
            <div className="digClock"><i class="fas fa-clock"></i></div>
            <div className="dig4">{props.dig4}</div>
            <div className="dig3">{props.dig3}</div>
            <div className="dig2">{props.dig2}</div>
            <div className="dig1">{props.dig1}</div>
        </div>);
}

Counter.propTypes = {  
    dig4: PropTypes.number,
    dig3: PropTypes.number,
    dig2: PropTypes.number,
    dig1: PropTypes.number
};
//render your react application
let tiempo=0;
setInterval(() => {
    const dig1=tiempo % 10;
    const dig2=Math.floor(tiempo/10) % 10;
    const dig3=Math.floor(tiempo/100) % 10;
    const dig4=Math.floor(tiempo/1000) % 10;
     
    tiempo++;

    ReactDOM.render(<Counter  dig4={dig4} dig3={dig3} dig2={dig2} dig1={dig1} />, 
    document.querySelector("#app")); 
}, 1000);

