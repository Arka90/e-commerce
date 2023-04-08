import "./product-item.styles.scss";

import ReactStars from "react-stars";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

function ProductItem({ product }) {
  const { title, price, images, rating, description } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card">
      <div className="image-price-rating-container">
        <img src={images[2]} alt={title} />

        <div className="title-rating-price">
          <div className="title-container">
            <h3>{title}</h3>
          </div>
          <div className="price-container">
            <p>Rs.{price}</p>
          </div>
          <div className="rating-container">
            <ReactStars count={5} size={28} value={rating} color2={"#ffd700"} />
          </div>
        </div>
      </div>

      <div className="desc-actions">
        <div className="description-container">
          <p>{description}</p>
        </div>
        <div className="action-container">
          <div className="action-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"
              alt="edit"
            />
          </div>
          <div className="action-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
              alt="delete"
            />
          </div>
          <div className="action-icon" onClick={addProductToCart}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9376/9376776.png"
              alt="addToCart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
