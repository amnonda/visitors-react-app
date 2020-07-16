import React, { useState, useEffect } from 'react'
import Loader from '../Components/Loader'
import VisitorCard from '../Components/VisitorCard'
import { useAxiosGet } from '../Hooks/HttpRequests'
import AddNewUserForm from '../Forms/AddNewUserForm'
import SearchItem from '../Components/SearchItem'


function Home() {
    let content = null
   // Create your own Mock API: https://mockapi.io/
   const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors?page=1&limit=10`

 let full_list = []
let name_list = []

   let visitors = useAxiosGet(url)

   if (visitors.error) {

       content = <div>
           <div className="bg-blue-300 mb-2 p-3">
               If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
           </div>
           <div className="bg-red-300 p-3">
               There was an error please refresh or try again later.
           </div>
       </div>
   }

   if (visitors.loading) {

       content = <Loader></Loader>
   }

   if (visitors.data) {

    visitors.data.map((visitor) => {name_list.push(visitor.name); full_list.push({id: visitor.id, name: visitor.name})})

       content =

       visitors.data.map((visitor) => 
               <div key={visitor.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                   <VisitorCard visitor={visitor}></VisitorCard>
               </div>
           )
   }


    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3"> List of Visitors</h1>

            <AddNewUserForm></AddNewUserForm>
    
            <br></br>

            <SearchItem visitors={name_list} vlist={full_list}></SearchItem>
            <br></br>


            <div className="md:flex flex-wrap md:-mx-3">
                {content}
            </div>
        </div>
    )

}

export default Home;
