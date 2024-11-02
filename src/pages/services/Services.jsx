import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";
const Services = () => {
    const [service , setService ] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/Services/')
        .then(res => res.json())
        .then(data => setService(data))
    },([]))
    return (
        <div className=" items-center border ">
        <div className="text-center m-6">
            <h1 className="text-3xl text-orange-700 font-bold">Service</h1>
            <h3 className=" text-6xl font-bold">Our service area</h3>
            <p>
            The majority have suffered alteration in some form, by injected humour,  <br /> or randomized words which do not look even slightly believable. 
            </p>
        </div>
        <div className=" ml-5 grid grid-cols-3 gap-y-4 ">
        {
           service.map(services => <ServiceCart key={services._id} services={services}></ServiceCart>)
        }
        </div>

        </div>

    );
};

export default Services;