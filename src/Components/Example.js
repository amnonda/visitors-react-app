import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("useEffect was visited")

    document.title = `You clicked ${count} times`;
      // document.getElementById("MyDiv").innerHTML = <div id="MyDiv" className="md:flex flex-wrap md:-mx-3"> {content}</div>
      // console.log("still here ")

      var mydiv1 = document.getElementById("MyId1").innerHTML
      var mydiv2 = document.getElementById("MyId2").innerHTML

      document.getElementById("MyId2").innerHTML = mydiv1
      document.getElementById("MyId1").innerHTML = mydiv2

      //.getElementById("MyDiv1").getElementById("MyDiv2")
      // console.log("element is " + mydiv)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

  );
}
export default Example;