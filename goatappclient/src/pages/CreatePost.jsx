import "../styles/CreatePostStyle.css"; // Import the CSS file
import React, { useState } from "react";
import "../styles/Homepage.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


function CreatePost() {
  const [step, setStep] = useState(0);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [what, setWhat] = useState("");


  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleTitleChange = (event) => {
    if (event.target.value.length <= 100) {
      setTitle(event.target.value);
    }
  };
  const handleDescriptionChange = (event) => {
    if (event.target.value.length <= 300) {
      setDescription(event.target.value);
    }
  };


  const handleWhenChange = (event) => {
    if (event.target.value.length <= 100) {
      setWhen(event.target.value);
    }
  };

  const handleWhereChange = (event) => {
    if (event.target.value.length <= 100) {
      setWhere(event.target.value);
    }
  };

  const handleWhatChange = (event) => {
    if (event.target.value.length <= 100) {
      setWhat(event.target.value);
    }
  };

  

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="create-post">
            <div className="initalCreatePage" >

                <h2>Choose What to Create:</h2>
                
                <div className="btns" > 
                    <button className="postBtn" onClick={() => handleStepChange(1)}>Create Post</button>
                    <button  className="eventBtn" onClick={() => handleStepChange(2)}>Create Event</button>
                </div>
                </div>

          </div>
          
        );
      case 1:
        return (
          <div className="createPost">
          <div className="form-container">
            <form>
              <div className="addnewpost">
                <h2>Create a Post!</h2>
              </div>
              <div>
                <label htmlFor="title">Title:</label>
                
                <input
                    type="text"
                    name="title"
                    placeholder="Write Title"
                    value={title}
                    onChange={handleTitleChange}
                  ></input>
                  <p className="title-char">{`${title.length}/100`}</p>

              </div>
              <div>
                <label htmlFor="description">Description:</label>

                <input
                    type="text"
                    name="desc"
                    placeholder="Write Description"
                    value={description}
                    onChange={handleDescriptionChange}
                  ></input>
                  <p className="desc-char">{`${description.length}/300`}</p>

              </div>
              <div className="file">
                <FaIcons.FaRegImage />
              
                <label htmlFor="file">
                  <input type="file" name="file" placeholder="File"></input>
                </label>
              </div>
              <button className="newpost-btn">Post</button>
            </form>
          </div>
          </div>
        );
      case 2:
        return (
          <div className="createPost">
            <div className="form-container">
            <form>
              <div className="addnewevent">
                <h2>Create an Event!</h2>
              </div>
              <div>
               
               
              <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Write Title"
                    value={title}
                    onChange={handleTitleChange}
                  ></input>
                  <p className="title-char" >{`${title.length}/100`}</p>

              </div>
          
              <div>
                <label htmlFor="When">When:</label>
                <input
                    type="text"
                    name="when"
                    placeholder="When is the event?"
                    value={when}
                    onChange={handleWhenChange}
                  />
                  <p className="when-char" >{`${when.length}/100`}</p>
              </div>

              <div>
                <label htmlFor="where">Where:</label>
                <input
                    type="text"
                    name="where"
                    placeholder="Where is the event"
                    value={where}
                    onChange={handleWhereChange}
                  />
                  <p className="where-char" >{`${where.length}/100`}</p>
              </div>

              <div>
                <label htmlFor="what">What:</label>
                <input
                    type="text"
                    name="what"
                    placeholder="Write a description about the event"
                    value={what}
                    onChange={handleWhatChange}
                  />
                  <p className="what-char">{`${what.length}/100`}</p>
              </div>

              <button className="newpost-btn">Post</button>
            </form>
          </div>
          </div>
        );
      default:
        return (
          <div className="btns" >
            <h2>Choose an action:</h2>
            <button className="postBtn" onClick={() => handleStepChange(1)}>Create Post</button>
            <button className="eventBtn" onClick={() => handleStepChange(2)}>Create Event</button>
          </div>
        );
        
    }
  };

  return <div>{renderStep()}</div>;
}

export default CreatePost;