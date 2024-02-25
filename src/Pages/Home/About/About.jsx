import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row relative">
                <div className="w-1/2 ml-10">
                    <img src={person} className="w-[400px] rounded-lg shadow-2xl h-[300px]" />
                    <img src={parts} className="max-w-sm absolute top-2/3 left-52"></img>
                </div>
                <div className="w-1/2 space-y-4">
                    <p className="font-bold text-orange-500"> About Us</p>
                    <h1 className="text-5xl font-bold ">We are qualified <br />& of experience <br />in this field</h1>
                    <p className="font-light">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className="font-light">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;