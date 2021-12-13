import { Button } from "../Product/style";
import { Card } from "./style";
import { Font } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/index";

const CartProduct = ({ product, actualIndex }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <Card>
      <Font>{product.name}</Font>
      <Font>R$ {product.price.toFixed(2)}</Font>
      <Button onClick={() => removeFromCart(actualIndex)}>Remover</Button>
    </Card>
  );
};

export default CartProduct;
