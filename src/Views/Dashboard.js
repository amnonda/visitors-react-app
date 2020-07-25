import React from 'react';
import { useAxiosGet } from '../Hooks/HttpRequests'
import Loader from '../Components/Loader'

function Dashboard() {
    const url = `https://5f078d479c5c250016307111.mockapi.io/api/v1/visitors`

    let visitors = useAxiosGet(url)

    let content = null


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

        let coming_count = 0;
        let not_coming_count = 0;
        let did_not_decide_count = 0;

        visitors.data.map((visitor) => {
            if (visitor.vote === 0)
                coming_count = coming_count + 1;
            else if (visitor.vote === 1)
                not_coming_count = not_coming_count + 1;
            else if (visitor.vote === 2)
                did_not_decide_count = did_not_decide_count + 1;

            return 0;
        }
        )
        content =
            <div>
                <h1>Sumary of List of visitors</h1>
                <p> Number of people coming: {coming_count}</p>
                <p> Number of people that are not coming: {not_coming_count}</p>
                <p> Number of people that did not decide yet: {did_not_decide_count}</p>

            </div>

    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3"> Dashboard</h1>
            {content}
        </div>
    )

}

export default Dashboard;