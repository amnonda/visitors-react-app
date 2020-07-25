import React, { useState, useEffect } from "react";
import axios from 'axios'



export function AddNewUserForm(props) {
  const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors`
  // let request = { loading: false, data: null, error: false }

  const [name, setName] = useState("");
  const [visitor, setVisitor] = useState(null);


  useEffect(() => {
    // request = { loading: true, data: null, error: false }
    console.log("AddNewUserForm::UseEffect called")
    // console.log("visitor is : " + visitor)

    if (visitor !== null) {
      setVisitor(null)
      let new_add = { name: name, vote: 0, imageUrl: 'http://www.stone-guitar-picks.com/stoneguitarpicksshop/images/large/GP2046_LRG.JPG' }
      // console.log(`adding: ${name}`)
      setName("")
      axios.post(url, new_add)
        .then(response => {
          // request = { loading: false, data: response.data, error: false };
          props.setVisitorAdded(true)
        })
        .catch(() => {/* request = { loading: false, data: null, error: true }*/})
    }
  },[visitor, name, url, props])


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setVisitor(`${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Create new visitor</p>
      <p>Type in new name:</p>
      <label>
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
