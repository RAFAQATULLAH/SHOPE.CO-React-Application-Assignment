import "./products.css"
import Button from "../button/button";
import Card from "../Productcard/productcard";
import Items from "../../../data"


function Products({heading}){
    return (
        <>
        <div className="container">
          <div className="heading">
            <h1>{heading}</h1>
          </div>
          <div className="items">
          <Card Products={Items}/>
          </div>
          <div className="btn">
            <Button text="View All"/>
          </div>
        </div>
        </>
    )
}
export default Products;

