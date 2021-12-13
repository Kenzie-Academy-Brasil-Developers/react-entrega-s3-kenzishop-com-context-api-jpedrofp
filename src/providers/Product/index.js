import { createContext, useState } from "react";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Paris",
      category: "Europe",
      price: 3329.0,
      img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg",
    },
    {
      id: 2,
      name: "Tóquio",
      category: "Asia",
      price: 5695.0,
      img: "https://ci-prod.imgix.net/upload/00231840.jpg",
    },
    {
      id: 3,
      name: "Los Angeles",
      category: "America",
      price: 3477.0,
      img: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/sunset-boulevard-los-angeles-estados-unidos1.jpeg?quality=70&strip=info&w=928",
    },
    {
      id: 4,
      name: "Bali",
      category: "Asia",
      price: 8387.0,
      img: "https://www.carpemundi.com.br/wp-content/uploads/2018/07/ayana-uluwatu.jpg",
    },
    {
      id: 5,
      name: "Sydney",
      category: "Oceania",
      price: 6423.0,
      img: "https://australiabrasil.com.br/files/2017/08/sydney-1-635x318.jpg",
    },
    {
      id: 6,
      name: "Cairo",
      category: "Africa",
      price: 4370.0,
      img: "https://1.bp.blogspot.com/-jtQz2eFSwDU/Xd2bhaRhr-I/AAAAAAAAyS0/GAeh2DcuZcM1Y5tN9J28P7K-M_LdkC6_QCLcBGAsYHQ/s1600/Egito1.jpeg",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
