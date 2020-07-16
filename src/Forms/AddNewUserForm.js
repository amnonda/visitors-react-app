import React, { useState } from "react";
import axios from 'axios'

function Add(name) {
    const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors`
    console.log("adding")
    let new_add = {name: name, vote: 0, imageUrl: 'http://www.stone-guitar-picks.com/stoneguitarpicksshop/images/large/GP2046_LRG.JPG'}
    axios.post(url, new_add)
         .then(() => {window.location.reload(false)})
}



export function AddNewUserForm(props) {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      Add(`${name}`)
  }
  return (
 <form onSubmit={handleSubmit}>
   <p>Create new visitor</p>
   <p>Type in new name:</p>
      <label>
        {/* Name: */}
        <input className="bg-blue-200"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>

  );
}

export default AddNewUserForm;
