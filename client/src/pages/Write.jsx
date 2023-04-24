import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button>Upload</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="nature" id="nature" />
            <label htmlFor="nature">Nature</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="love" id="love" />
            <label htmlFor="nature">Love</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="longing" id="longing" />
            <label htmlFor="nature">Longing</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="pastoral" id="pastoral" />
            <label htmlFor="nature">Pastoral</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="spiritual" id="spiritual" />
            <label htmlFor="nature">Spiritual</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
