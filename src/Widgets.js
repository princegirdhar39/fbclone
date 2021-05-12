import React from 'react';
import './Widgets.css';

const Widgets = () => {
    return (
        <div className ="Widgets">
            <iframe
            src="https://www.youtube.com/embed/SB-qEYVdvXA"
            width ="340"
            height="40%"
            style = {{border:"none", overflow: "hidden"}}
            scrolling ="no"
            frameBorder= "0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>

        </div>
    )
}
export default Widgets;