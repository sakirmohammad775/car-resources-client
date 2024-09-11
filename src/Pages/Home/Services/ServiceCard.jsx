import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    const { user } = useContext(AuthContext)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className=" flex justify-between">
                    <p className="text-orange-600">price: {price}</p>
                    <FaArrowRight></FaArrowRight>

                </div>

                
                <Link to={`/bookService/${_id}`}>
                    <button className="btn text-white bg-orange-600 ">Book Now</button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceCard;