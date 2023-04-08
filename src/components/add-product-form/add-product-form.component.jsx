import FormInput from "../form-input/form-input.component";
import "./add-product-form.styles.scss";
function AddProductForm() {
  return (
    <form className="form-container">
      <FormInput label="Title" value="" name="title" required />
      <FormInput label="Descrtiption" value="" name="description" required />
      <FormInput label="Price" value="" name="price" required />
      <FormInput label="Rating" value="" name="rating" required />
      <FormInput label="Image url" value="" name="image" required />
    </form>
  );
}

export default AddProductForm;
