import React, {useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
const MessageSender = () => {

    const [input,setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");


    const handelSubmit = (e) => {
        e.preventDefault();
        //some clever db stuff
            setInput("");
            setImageUrl("");




    } 
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                <input
                className="woym"
                type="text"
                placeholder="What's on your mind?"
                value = {input}
                onChange = {(e)=> setInput(e.target.value)}
                />
                <input 
                type="text"
                className="iurl"
                placeholder="image URL (optional)"
                value = {imageUrl}
                onChange = {(e)=> setImageUrl(e.target.value)}

                 />
                <button className="hiddenButton" onClick={handelSubmit} type="submit">Hidden button</button>
                </form>

                
            </div>
            <div className="messageSender_bottom">
                <div className="MessageSender_options">
                <VideocamIcon style={{color:"red",margin: "auto"}} />
                <h3>Live Videocam</h3>
                </div>
                <div className="MessageSender_options">

                <PhotoLibraryIcon style={{color:"green"}}/>  
                <h3 className="h3">Photo/Video</h3>
                </div>
                <div className="MessageSender_options">
                <InsertEmoticonIcon style={{color:"yellow"}} /> 

                 <h3>Feeling/Activity</h3>
              </div>

                </div>

                
            </div>



    )
}

export default MessageSender;