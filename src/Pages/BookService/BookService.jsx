import { useLoaderData } from "react-router-dom";
import img from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { data } from "autoprefixer";


const BookService = () => {
    const service = useLoaderData()
    const { _id, name, title, service_id, price } = service
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault()
        const form = event.target
        const email = user?.email //user
        const service = form.service.value
        const price = form.price.value
        const text = form.price.value
        const type = form.type.value
        const description = form.description.value
        const bookings = {
            email: email,
            service,
            price: price,
            text,
            type,
            description
        }
        console.log(bookings);

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('successfully')
                }
            })
    }
    return (
        <div>
            <div className="w-full">
                <img className="w-full h-[250px]" src={img} alt="" />
            </div>

            <h3>booking:{title}</h3>

            <div className=" bg-base-200 p-20 my-20">
                <div className="hero-content flex-col">

                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">
                        <form onSubmit={handleBookService} className="card-body">
                            <div className="form-control">

                                <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered" required />

                            </div>
                            <div className="grid grid-cols-2 gap-5 ">
                                <div className="form-control">

                                    <input type="text" name="service" defaultValue={title} placeholder="Service Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <input type="text" name="price" placeholder="Service Price" defaultValue={'$' + price} className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <input type="text" name="text" placeholder="Text Here" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <input type="text" name="type" placeholder="Service Type" className="input input-bordered" required />

                                </div>
                            </div>
                            <div className="form-control h-[200px] ">

                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered h-full" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-block bg-orange-600 text-white" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;