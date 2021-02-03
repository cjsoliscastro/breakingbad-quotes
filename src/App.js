import { useState, useEffect } from "react";
import Frase from "./components/Frase";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, H elvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.3s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, guardarFrase] = useState({});

  const { quote, author } = frase;

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  // Cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor onClick={consultarAPI}>
      <Frase quote={quote} author={author} />
      <Boton>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;