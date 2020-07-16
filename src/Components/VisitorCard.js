import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




var votes = ["I am coming", "I am not coming", "I have not decided"];




function VisitorCard(props) {
    // console.log(props.visitor.name);
    // props is redundant here
    // here we are calling this component only to display its relevant data
    // but we are not displaying a different url and the view remains in the
    // same url as before. so we must pass the right object to this component
    // so its data will be displayed. this is done by passing the object via props
    function DeleteItem(e) {
        e.preventDefault();
        const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors/${props.visitor.id}`
        console.log("deleting" + url)
        axios.delete(url)
            .then(() => {window.location.reload(false)})
            
    }


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
                onClick={DeleteItem}>Delete Me</label>
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