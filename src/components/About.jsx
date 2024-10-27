import img1 from "../assets/images/about_us/person.jpg"
import img2 from "../assets/images/about_us/parts.jpg"



const About = () => {
  return (
    <div className="hero bg-base-200  min-h-screen w-full items-center ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-1/2 relative">
          {" "}
          <img
            src={img1}
            className="max-w-sm rounded-lg shadow-2xl w-3/4"
          />
          <img
            src={img2}
            className="max-w-sm rounded-lg shadow-2xl absolute w-1/2 right-5 bottom-4 top-1/2"
          />
        </div>

        <div className="w-1/2 ">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="py-6 text-3xl">
        We are qualified & of experience in this field
        </p>
        <p className="py-6 text-xl">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <p className="py-6 text-xl">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <button className="btn btn-primary">Book Now</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
