import "./products.css"
import Button from "../button/button";
import Card from "../Productcard/productcard";

const items = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    rating: 4.5,
    price: 180,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
  },
];


function Products({heading}){
    return (
        <>
        <div className="container">
          <div className="heading">
            <h1>{heading}</h1>
          </div>
          <div className="items">
          <Card Products={items}/>
          </div>
          <div className="btn">
            <Button text="View All"/>
          </div>
        </div>
        </>
    )
}
export default Products;
