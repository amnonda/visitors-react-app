import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import { Link } from 'react-router-dom'

var votes = ["I am coming", "I am not coming", "I have not decided"];



function Visitor(props) {
    // Create your own Mock API: https://mockapi.io/
    // this component is actually changing the view so we called it with a 
    // specific url string. using useParams helps us to get the url specifics
    // that were asked for so this component can get the right data from the db
    // this hook will return the id we asked for in the address bar
    const { id } = useParams()
    const [a_vote, setVote] = useState(null)
    let a_name = ""
    let a_url = ""


    const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors/${id}`

    let visitor = useAxiosGet(url)

    // let request = { loading: false, data: null, error: false }

    const [update_visitor, setUpdateVisitor] = useState(false);

    useEffect(() => {
        console.log("Visitor::UseEffect called")

        // request = { loading: true, data: null, error: false }

        if (update_visitor) {
            let updated_visitor = { id: id, name: a_name, vote: a_vote, imageUrl: a_url }
            axios.put(url, updated_visitor)
                .then(response => {
                    // request = { loading: false, data: response.data, error: false };
                    setUpdateVisitor(false)
                    alert("Your choice was saved")
                })
                .catch(() => { /*request = { loading: false, data: null, error: true } */})
        }
    })
    function FunctionDisplayName() {
        return (
            <div>
                <h1 className="text-2xl font-bold mb-3"> {visitor.data.name} </h1>
            </div>
        )

    }

    function FunctionDisplayImage() {
        return (
            <div>
                <img
                    src={visitor.data.imageUrl}
                    alt={visitor.data.name}></img>
            </div>
        )

    }

    function FunctionDisplayRadio() {
        return (
            <div>
                <p>Please select your choice:</p>

                <div>
                    <input type="radio" name="vote" onClick={() => setVote(0)}></input> I am coming
            <br></br>
                    <input type="radio" name="vote" onClick={() => setVote(1)}></input> I am not coming
            <br></br>
                    <input type="radio" name="vote" onClick={() => setVote(2)}></input> I did not decide
        </div>

            </div>
        )

    }

    function FunctionDisplayVote() {
        return (
            <div>
                My new vote is: {votes[visitor.data.vote]}
            </div>
        )



    }

    function FunctionSaveButton() {

        return (
            <label className="bg-blue-500 text-white "
                onClick={() => setUpdateVisitor(true)}>Save</label>


        )

    }


    function FunctionGoBackButton() {
        return (
            <Link to={`/`}
                className="bg-blue-500 text-white">
                Go Back
            </Link>
        )
    }


    let content = null

    if (visitor.error) {
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if (visitor.loading) {
        content = <Loader></Loader>
    }


    if (visitor.data) {
        visitor.data.vote = a_vote;
        a_name = visitor.data.name;
        a_url = visitor.data.imageUrl;

        content =
            <div>
                {FunctionDisplayName()}
                {FunctionDisplayImage()}
                {FunctionDisplayRadio()}
                {FunctionDisplayVote()}
                {FunctionSaveButton()}
                <br></br>
                {FunctionGoBackButton()}
            </div>


    }


    return (

        <div className="container mx-auto">
            {content}
        </div>
    )


}

export default Visitor;