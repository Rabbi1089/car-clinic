import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/4.jpg";
import img4 from "../assets/images/banner/5.jpg";
const Slider = () => {
  return (
    <div className="carousel w-full rounded-xl">
      <div id="slide1" className="carousel-item relative w-full rounded-xl">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 30)] ">
        <div className="text-white ml-12 space-y-4 p-8">
        <h1 className="text-6xl font-bold">
        Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-2xl font-semibold text-white">
        There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
        </p>
        <div className="">
        <button className="btn btn-accent bg-orange-500 text-white border-orange-500 mr-4">Discover More</button>
        <button className="btn  bg-none">Latest Project</button>
        </div>
        </div>

        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end ">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 30)] ">
        <div className="text-white ml-12 space-y-4 p-8">
        <h1 className="text-6xl font-bold">
        Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-2xl font-semibold text-white">
        There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
        </p>
        <div className="">
        <button className="btn btn-accent bg-orange-500 text-white border-orange-500 mr-4">Discover More</button>
        <button className="btn  bg-none">Latest Project</button>
        </div>
        </div>

        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end ">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 30)] ">
        <div className="text-white ml-12 space-y-4 p-8">
        <h1 className="text-6xl font-bold">
        Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-2xl font-semibold text-white">
        There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
        </p>
        <div className="">
        <button className="btn btn-accent bg-orange-500 text-white border-orange-500 mr-4">Discover More</button>
        <button className="btn  bg-none">Latest Project</button>
        </div>
        </div>

        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end ">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 30)] ">
        <div className="text-white ml-12 space-y-4 p-8">
        <h1 className="text-6xl font-bold">
        Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-2xl font-semibold text-white">
        There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
        </p>
        <div className="">
        <button className="btn btn-accent bg-orange-500 text-white border-orange-500 mr-4">Discover More</button>
        <button className="btn  bg-none">Latest Project</button>
        </div>
        </div>

        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end ">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
