import { useState, useEffect } from 'react';
import axios from 'axios'


export function useAxiosGet(url) {
    // we want to use a loading symbol so we will use an object instead of null
    // const [visitor, setVisitor] = useState(null)
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })


    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])



    return (request

    )

}

// The following 3 functions are not used because react does not let you call hooks 
// from callback functions
export function useAxiosPut(url, aproduct) {

    //   we want to use a loading symbol so we will use an object instead of null
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })


    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.put(url, aproduct)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])



    return (request

    )

}


export function useAxiosPost(url, aproduct) {

    //   we want to use a loading symbol so we will use an object instead of null
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })


    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.post(url, aproduct)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])



    return (request

    )

}

export function useAxiosDelete(url) {

    //   we want to use a loading symbol so we will use an object instead of null
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })


    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.delete(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])



    return (request

    )

}