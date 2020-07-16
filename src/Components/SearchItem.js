import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];
function SearchItem(props) {
    const history = useHistory();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  const handleSelected = e => {
    // alert(e.target.value);
    console.log(e.target.value)

  };

  const handleClick = e => {
    // console.log(e.target.value)
    let chosen_id=null
    // props.plist.map((item) => {console.log("id is: " +item.id); if(item.name == e.target.value) chosen_id = item.id})
    props.vlist.map((item) => {if(item.name == e.target.value) chosen_id = item.id})

    const url = `/visitors/${chosen_id}`
    // console.log("going to url: " + url)
    history.push(url)
  }

  React.useEffect(() => {
    const results = props.visitors.filter(item =>
        item.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div>
        <p>Search for a visitor</p>
      <input
        type="text" className="bg-blue-200"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
 
<ul>
        {searchResults.map(item => (
            <div key={item} onClick={handleClick}>
          <option>{item}</option>
            </div>
        ))}
      </ul>

      

    </div>
  );
}

export default SearchItem
