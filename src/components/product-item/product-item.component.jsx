import "./product-item.styles.scss";

import ReactStars from "react-stars";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectProductsArray } from "../../store/products/product.selector";
import { saveEditProduct } from "../../store/products/product.action";
import { addItemToCart } from "../../store/cart/cart.action";

function ProductItem({ product }) {
  const { title, price, images, rating, description } = product;

  //For Edit Cart Item
  const [beingEdited, setBeingEdited] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newRating, setNewRating] = useState(rating);
  const [newDescription, setNewnewDescription] = useState(description);

  const handelTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handelPriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handelRatingChange = (e) => {
    setNewRating(e.target.value);
  };

  const handelDescChange = (e) => {
    setNewnewDescription(e.target.value);
  };

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProductsArray);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const handelSave = () => {
    const newValues = {
      title: newTitle,
      price: newPrice,
      rating: newRating,
      description: newDescription,
    };

    dispatch(saveEditProduct(products, product, newValues));
    setBeingEdited(false);
  };

  return (
    <div className="product-card">
      <div className="image-price-rating-container">
        <img src={images[2]} alt={title} />

        <div className="title-rating-price">
          <div className="title-container">
            {beingEdited ? (
              <input value={newTitle} onChange={(e) => handelTitleChange(e)} />
            ) : (
              <h3>{title}</h3>
            )}
          </div>
          <div className="price-container">
            <p>
              Rs.
              {beingEdited ? (
                <input
                  value={newPrice}
                  onChange={(e) => handelPriceChange(e)}
                />
              ) : (
                price
              )}
            </p>
          </div>
          <div className="rating-container">
            {beingEdited ? (
              <input
                value={newRating}
                onChange={(e) => handelRatingChange(e)}
              />
            ) : (
              <ReactStars
                count={5}
                size={28}
                value={rating}
                color2={"#ffd700"}
              />
            )}
          </div>
        </div>
      </div>

      <div className="desc-actions">
        <div className="description-container">
          {beingEdited ? (
            <textarea
              value={newDescription}
              rows="5"
              cols="30"
              onChange={(e) => handelDescChange(e)}
            />
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div>
          {beingEdited ? (
            <div className="action-container">
              <div
                className="action-icon"
                onClick={() => setBeingEdited(false)}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/391/391247.png"
                  alt="cancel"
                />
              </div>
              <div className="action-icon" onClick={handelSave}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt="save"
                />
              </div>
            </div>
          ) : (
            <div className="action-container">
              <div className="action-icon" onClick={() => setBeingEdited(true)}>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
