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
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default About;
