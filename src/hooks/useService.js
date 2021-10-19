import { useEffect, useState } from "react";


const useService = () => {
    const [services, setServices] = useState([]);

    // data load
    useEffect( () => {
        fetch('/fakeData/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return [services, setServices]
}

export default useService;