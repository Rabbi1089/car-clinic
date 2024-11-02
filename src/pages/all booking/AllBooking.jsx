import { useContext, useEffect, useState } from "react";
import { AUthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import swal from 'sweetalert';
import { json } from "react-router-dom";
import axios from "axios";


const AllBooking = () => {
  const { user } = useContext(AUthContext);
  const [myBooking, setMyBooking] = useState([]);
  const { _id } = myBooking;
  const cEmail = user.email;
  const url = `http://localhost:5000/booking?email=${cEmail}`;
  console.log(url);

  useEffect(() => {
    axios.get(url , {withCredentials : true})
    .then(res => {setMyBooking(res.data)})

   // fetch(url)
    //  .then((res) => res.json())
    //  .then((data) => setMyBooking(data));
  }, []);

  console.log("from useffect", myBooking);

  const handleBookingConfirm = (id) => {
    const url = `http://localhost:5000/booking/${id}`;
    fetch(url, {
      method : 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({status : 'confirmed'})
    }
    )
    .then(res => res.json())
    .then(data =>
    {
      console.log(data);
      if (data.modifiedCount > 1 ) {
        const remaining = myBooking.filter(booking => booking._id !== id)
        console.log(remaining);
        const updated = myBooking.find(booking =>  booking._id === id)
        updated.status = 'confirm';
        const newBooking = [updated , ...remaining]
        setMyBooking(newBooking)
      }
    }
  
  )
  }

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
            swal("Deleted!", "Your imaginary file has been deleted!", "success");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
        })
        
      }
    });

  };

  return (
    <div>
      <h1>AllBooking</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Email</th>
              <th>Date</th>
              <th>price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/*-------------------------------- row 1 ----------------------------*/}
            {myBooking.map((booking) => (
              <tr key={_id}>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(booking._id);
                    }}
                    className="btn btn-square bg-red-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={booking.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking.service}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {booking.customerName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {booking.email}
                  </span>
                </td>
                <td>{booking.date}</td>
                <td>{booking.price}</td>
                <th>
                    {
                      booking.status === 'confirmed' ? <span className=" text-purple-500 font-bold">confirmed</span> :  <button onClick={() => {handleBookingConfirm(booking._id)}}  className="btn btn-ghost btn-xs">Confirm</button>
                    }
                 
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllBooking;
