import { Header, Main, Ul, Button } from "./style";
import Product from "../Product/index";
import { useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { useContext } from "react";
import { ProductContext } from "../../providers/Product/index";

const ProductsList = () => {
  const history = useHistory();
  const { products } = useContext(ProductContext);

  return (
    <>
      <Header>
        KenzieFlights
        <h6>Reserve o seu pacote de viagens!</h6>
        <Button onClick={() => history.push("/cart")}>
          <FiShoppingCart />
        </Button>
      </Header>
      <Main>
        <hr></hr>
        <Ul>
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </Ul>
        <h6>
          *Feito com base em valores reais do GoogleFlights para abril de 2022.
        </h6>
      </Main>
    </>
  );
};

export default ProductsList;
