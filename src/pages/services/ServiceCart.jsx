const ServiceCart = ({services}) => {
    const {_id, title, img, price} = services
    return (
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="p-0 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>Price : ${price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCart;