import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { data } from "autoprefixer";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount){
                        alert('deleted successfully')
                        const remaining=bookings.filter(booking=>booking._id !==id)
                        setBookings(remaining)
                    }
                })
            
        }
    }

return (
    <div>
        <div className="text-5xl">Your bookings:{bookings.length}</div>
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
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></BookingRow>)
                    }

                </tbody>


            </table>
        </div>
    </div>
);
};

export default Bookings;