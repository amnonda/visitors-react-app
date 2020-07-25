import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


var votes = ["I am coming", "I am not coming", "I have not decided"];


function VisitorCard(props) {

    const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors/${props.visitor.id}`
    // let request = { loading: false, data: null, error: false }

    const [delete_visitor, setDeleteVisitor] = useState(false);

    useEffect(() => {
        // request = { loading: true, data: null, error: false }
        console.log("VisitorCard::UseEffect called with " + delete_visitor)

        if (delete_visitor) {
            console.log("VisitorCard::UseEffect called with true")

            setDeleteVisitor(false)
            // console.log(`deleting visitor id: ${props.visitor.id}`)
            axios.delete(url)
                .then(response => {
                    // request = { loading: false, data: response.data, error: false };
                    props.setVisitorDeleted(true)
                })
                .catch(() => { /*request = { loading: false, data: null, error: true }*/ })
        }
    },[delete_visitor,props,url])

    function FunctionShowImage() {
        return (
            <div>
                <img
                    src={props.visitor.imageUrl}
                    alt={props.visitor.name}></img>
            </div>
        )

    }

    function FunctionDetails() {
        return (
            <div className="p-3">

                {FunctionVisitorName()}

                {FunctionShowVote()}

                {FunctionChangeVote()}

                <br></br>
                {FunctionDeleteButton()}

            </div>
        )

    }

    function FunctionVisitorName() {
        return (
            <h3 className="font-bold text-xl mb-3">
                {props.visitor.name}
            </h3>
        )
    }

    function FunctionShowVote() {
        return (
            <div className="font-bold mb-3">
                vote: {votes[props.visitor.vote]}
            </div>
        )
    }

    function FunctionChangeVote() {
        return (
            <Link to={`/visitors/${props.visitor.id}`}
                className="bg-blue-500 text-white p-2 flex justify-center w-full">
                Change My vote
            </Link>
        )
    }

    function FunctionDeleteButton() {
        return (
            <label className="bg-blue-500 text-white p-2 flex justify-center w-full"
                onClick={() => setDeleteVisitor(true)}>Delete Me</label>

        )
    }


    return (
        <div className="border mb-4 rounded overflow-hidden">

            {FunctionShowImage()}

            {FunctionDetails()}

        </div>
    )

}

export default VisitorCard
export { votes }