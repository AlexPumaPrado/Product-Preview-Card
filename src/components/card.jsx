import styled from "styled-components";

// Wrapper para la página
const Fount = styled.div`
  background-color: hsl(30, 38%, 92%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`;

// Card principal
const CardItem = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  max-width: 600px;
  width: 80%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media (max-width: 375px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    padding: 0;
    align-items: start;
  }
`;

// Imagen de producto
const ProductImage = styled.img`
  width: 50%;
  object-fit: cover;
  @media (max-width: 375px) {
    position: relative;
    top: 20px;
    width: auto;
    height: auto;
    content: url("images/image-product-mobile.jpg");
    object-fit: contain;
  }
`;

// Contenedor de detalles del producto
const Text = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 375px) {
    padding: 1rem;
    align-items: start;
  }
`;

// Título del producto pequeño
const Perfume = styled.h1`
  font-family: "Montserrat", serif;
  color: hsl(228, 12%, 48%);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  @media (max-width: 375px) {
    font-size: 0.9rem; /* Reducir el tamaño en pantallas pequeñas */
  }
`;

// Título principal del producto
const Title = styled.h1`
  font-family: "Fraunces", serif;
  color: hsl(212, 21%, 14%);
  font-size: 2.2rem;
  margin: 0 0 1rem;
  @media (max-width: 375px) {
    font-family: "Fraunces", serif;
    color: hsl(212, 21%, 14%);
    font-size: 4rem;
    text-align: start;
  }
`;

// Descripción del producto
const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  color: hsl(228, 12%, 48%);
  font-size: 14px;
  line-height: 1.6;
  padding-right: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 375px) {
    font-size: 27px;
    margin-bottom: 1rem;
    text-align: start;
  }
`;

// Contenedor para ambos precios
const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 375px) {
    gap: 1.5rem;
  }
`;

// Precio con descuento
const FinalPrice = styled.p`
  font-family: "Fraunces", serif;
  color: hsl(158, 36%, 37%);
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 375px) {
    font-size: 4rem;
  }
`;

// Precio original (tachado)
const FirstPrice = styled.p`
  font-family: "Montserrat", sans-serif;
  color: hsl(228, 12%, 48%);
  font-size: 0.875rem;
  text-decoration: line-through;
  margin: 0;
  position: relative;
  top: -10px;
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

// Botón "Add to cart"
const AddToCartButton = styled.button`
  background-color: hsl(158, 36%, 37%);
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: hsl(158, 50%, 30%);
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
  }
`;

// Icono del carrito dentro del botón
const Button = styled.img`
  margin-right: 0.5rem;
  @media (max-width: 375px) {
  }
`;

const Card = () => {
  return (
    <Fount>
      <CardItem>
        <ProductImage
          src="images/image-product-desktop.jpg"
          alt="Product Image"
        />
        <Text>
          <Perfume>P E R F U M E</Perfume>
          <Title>Gabrielle Essence Eau De Parfum</Title>
          <Description>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </Description>
          <Price>
            <FinalPrice>$149.99</FinalPrice>
            <FirstPrice>$169.99</FirstPrice>
          </Price>
          <AddToCartButton>
            <Button src="images/icon-cart.svg" alt="Cart Icon" />
            Add to Cart
          </AddToCartButton>
        </Text>
      </CardItem>
    </Fount>
  );
};

export default Card;
