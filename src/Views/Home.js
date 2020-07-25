import React, { useState, useEffect } from 'react'
import Loader from '../Components/Loader'
import VisitorCard from '../Components/VisitorCard'
// import { useAxiosGet } from '../Hooks/HttpRequests'
import AddNewUserForm from '../Forms/AddNewUserForm'
import SearchItem from '../Components/SearchItem'
import axios from 'axios'
import Reddit from '../Components/Reddit'



function Home() {
  // Create your own Mock API: https://mockapi.io/
  const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors?page=1&limit=10`
  // const url2 = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors`

  // let visitors = null
  let content = null

  let helper_list1 = []
  let helper_list2 = []
  // let request = { loading: false, data: null, error: false }

  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [visitor_deleted, setVisitorDeleted] = useState(false);
  const [visitor_added, setVisitorAdded] = useState(false);
  // const [name, setName] = useState("");
  // const [visitor, setVisitor] = useState(null);
  const [the_content, setTheContent] = useState(null);
  const [first_get_done, setFirstGetDone] = useState(false);


  useEffect(() => {
    console.log("Home::UseEffect for axios.get called")

    if (!first_get_done || visitor_deleted || visitor_added) {
      setFirstGetDone(true)
      setVisitorDeleted(false)
      setVisitorAdded(false)
      // request = { loading: true, data: null, error: false }
      content = <Loader></Loader>
      setTheContent(content)
      axios.get(url)
        .then(response => {
          // request = { loading: false, data: response.data, error: false };
          if (response.error) {
            content =
              <div>
                <div className="bg-blue-300 mb-2 p-3">
                  If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
                  </div>
                <div className="bg-red-300 p-3">
                  There was an error please refresh or try again later.
                  </div>
              </div>

            setTheContent(content)
          }
          else
            SetVisitorsList(response.data)

        })
        .catch(() => {
          /*request = { loading: false, data: null, error: true }*/
        })
    }
  }, [first_get_done, visitor_deleted, visitor_added])

  function SetVisitorsList(visitors_list) {
    // I am adding to the helper lists first because it did not work well when
    // I added to items1 and items2 maybe because they are hooks...
    visitors_list.map((visitor) => {
      helper_list1.push(visitor.name);
      helper_list2.push({ id: visitor.id, name: visitor.name, vote: visitor.vote });

      setItems1([...helper_list1])
      setItems2([...helper_list2])

    })

    // console.log("size of items1 is: " + items1.length)
    // console.log("size of items2 is: " + items2.length)

    content = visitors_list.map((visitor) =>
      <div key={visitor.id} className="flex-no-shrink w-full md:w-1/4 md:px-3"><VisitorCard visitor={visitor} setVisitorDeleted={p => { setVisitorDeleted(p) }}></VisitorCard></div>
    )

    setTheContent(content)

  }

  // console.log("prior to useAxiosGet")
  // visitors = useAxiosGet(url)
  // console.log("after to useAxiosGet") 



  //    if (visitors.error) {

  //        content = <div>
  //            <div className="bg-blue-300 mb-2 p-3">
  //                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
  //            </div>
  //            <div className="bg-red-300 p-3">
  //                There was an error please refresh or try again later.
  //            </div>
  //        </div>

  //    }

  //    if (visitors.loading) {

  //        content = <Loader></Loader>

  //    }

  //    if (visitors.data) {

  //     // prefar two lists to send to the search component
  //     visitors.data.map((visitor) => {name_list.push(visitor.name); full_list.push({id: visitor.id, name: visitor.name})})

  //        content =

  //        visitors.data.map((visitor) => 
  //                <div key={visitor.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
  //                    <VisitorCard visitor={visitor}></VisitorCard>
  //                </div>
  //            )


  //    }


  //    setTheContent(content)

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-3"> List of Visitors</h1>

      <SearchItem vlist1={items1} vlist2={items2}></SearchItem>
      <br></br>

      {/* <AddNewUserForm setVisitorAdded={p => { setVisitorAdded(p) }}></AddNewUserForm> */}
      <AddNewUserForm setVisitorAdded={setVisitorAdded}></AddNewUserForm>

      <br></br>



      <div className="md:flex flex-wrap md:-mx-3">
        {the_content}
        {/* <Reddit></Reddit> */}
      </div>
    </div>
  )

}


export default Home;
