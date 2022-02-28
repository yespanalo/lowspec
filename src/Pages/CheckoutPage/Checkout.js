import "../CheckoutPage/Checkout.css";
import Button from "../Home/Button/Button";
function CheckOut(props) {
  return (
    <div className="checkout">
      <div className="checkout-img"></div>
      <div className="checkout-details">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h1>{props.price}</h1>
        <ul>
          <li>{props.feature1}</li>
          <li>{props.feature2}</li>
          <li>{props.feature3}</li>
        </ul>

        <button>CHECKOUT</button>
      </div>
    </div>
  );
}
export default CheckOut;
