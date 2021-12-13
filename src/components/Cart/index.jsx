import { Header, Container, Ul, Spam, H2, Button } from "./style";
import { useHistory } from "react-router-dom";
import CartProduct from "../CartProduct/index";

import { useContext } from "react";
import { CartContext } from "../../providers/Cart/index";

const Cart = () => {
  const history = useHistory();
  const { cart } = useContext(CartContext);

  const finalPrice = cart.reduce((acumulador, valorAtual) => {
    return acumulador + Number(valorAtual.price);
  }, 0);

  return (
    <>
      <Container>
        <Header>
          KenzieFlights
          <h6>Reserve o seu pacote de viagens!</h6>
        </Header>
        <Button onClick={() => history.push("/")}>Voltar</Button>

        <Spam>
          <H2> Seu carrinho de passagens</H2>
        </Spam>
        <Ul>
          {cart.map((product, index) => (
            <CartProduct key={index} product={product} actualIndex={index} />
          ))}
        </Ul>
        <Spam>
          <H2>Total: R$ {finalPrice.toFixed(2)}</H2>
        </Spam>
      </Container>
    </>
  );
};

export default Cart;
