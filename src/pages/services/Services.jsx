import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "./ServiceCart";
const Services = () => {
  const [service, setService] = useState([]);
  const [asc, setAsc] = useState(true);
  const [searchText , setSearchText] = useState('')
  console.log(searchText);
  useEffect(() => {
    fetch(`http://localhost:5000/Services?sort=${asc ? "asc" : "desc"}&text=${searchText}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [asc , searchText]);

  const handleSearch = (e) => {
        e.preventDefault()
        const text = e.target.search.value;
        console.log(text);
        setSearchText(text)
  }
  return (
    <div className=" items-center border ">
      <div className="text-center m-6">
        <div className="flex gap-5 items-center">
          <div className="flex items-center space-x-2">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter text"
                className="input input-bordered"
                name="search"
              />
              <button type="submit" className="btn btn-primary mx-5">Submit</button>
            </form>
          </div>

          <button
            onClick={() => {
              setAsc(!asc);
            }}
            className="btn btn-secondary bg-violet-700 border-white"
          >
            {asc ? "Price High To Low" : "Price Low to High"}
          </button>
        </div>
        <h1 className="text-3xl text-orange-700 font-bold">Service</h1>
        <h3 className=" text-6xl font-bold">Our service area</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, <br /> or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className=" ml-5 grid grid-cols-3 gap-y-4 ">
        {service.map((services) => (
          <ServiceCart key={services._id} services={services}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
