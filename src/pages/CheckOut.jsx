import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AUthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { user } = useContext(AUthContext);
  const services = useLoaderData();
 
  const { title, service_id, price, img } = services;
  console.log(services);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      customerName: name,
      email,
      date,
      phone,
      img,
      service: title,
      service_id: service_id,
      price: price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('service booked successfully')
        }
      });
  };

  return (
    <div>
      <h1 className=" text-3xl font-bold text-red-800 text-center">
        This is checkout for {title}
      </h1>
      <form className="card-body" onSubmit={handleBooking}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Booking Date</span>
            </label>
            <input
              type="date"
              placeholder="Booking Date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="Email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Book Now" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
