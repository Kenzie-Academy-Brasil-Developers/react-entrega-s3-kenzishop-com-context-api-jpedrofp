import { Card, ProductImg, Img, Button, Font } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/index";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <ProductImg>
        <Img src={product.img} alt={product.name} />
      </ProductImg>
      <Font>{product.name}</Font>
      <Font>R$ {product.price.toFixed(2)}</Font>
      <Button onClick={() => addToCart(product)}>Comprar</Button>
    </Card>
  );
};

export default Product;
