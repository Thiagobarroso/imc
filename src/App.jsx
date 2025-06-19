import React, { useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [msg, setMsg] = useState(
    "Preencha o campo de peso e altura para saber seu IMC"
  );

  function limpar(e) {
    e.preventDefault();
    setAltura("");
    setPeso("");
    setImc("");
    setMsg("Preencha o campo de peso e altura para saber seu IMC");
  }

  function calcular(e) {
    e.preventDefault();
    console.log(imc);

    if (!peso || !altura || isNaN(peso) || isNaN(altura)) {
      alert("Adicione valores válidos para peso e altura.");
      return;
    }

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(Number(imcCalculado.toFixed(0)));

    if (imcCalculado < 18.5) {
      setMsg("Você está abaixo do peso!");
    } else if (imcCalculado < 24.9) {
      setMsg("Peso normal, continue assim!");
    } else if (imcCalculado < 29.9) {
      setMsg("Você está com sobrepeso!");
    } else if (imcCalculado < 39.9) {
      setMsg("Obesidade! Cuide da sua saúde!");
    } else {
      setMsg("Obesidade grave! Procure um médico!");
    }
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <p>
        Calcule seu índice de massa corporal e descubra se está dentro do peso
        do peso ideal
        <br /> para sua altura
      </p>
      <form action="" className="form">
        <div className="title-container">
          <h2>Calculadora IMC</h2>
        </div>
        <div className="form-container">
          <div className="inputs">
            <label htmlFor="peso">Peso</label>
            <input
              id="peso"
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Adicione o seu peso, Ex: 90"
            />
            <label htmlFor="altura">Altura</label>
            <input
              id="altura"
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Adicione sua altura Ex:1.80"
            />
            <div className="btns">
              <button className="btn-calcular" onClick={calcular}>
                Calcular
              </button>
              <button className="btn-limpar" onClick={limpar}>
                Limpar
              </button>
            </div>
          </div>
          <div className="container-result">
            {" "}
            <div className="mensagem">
              {msg !== "" && (
                <div className="mensagem">
                  <h2>Seu IMC é: {imc}</h2>
                  <p>{msg}</p>
                </div>
              )}
            </div>
          </div>

          <div className="classificacao">
            <h4>Classificação do IMC</h4>
            <div className="classificacao-info">
              <div className="item abaixo">
                <p className="title-info">Abaixo do peso</p>
                <p>Menor que 18.5</p>
              </div>
              <div className="item normal">
                <p className="title-info">Peso Normal</p>
                <p>18.0 - 24.9</p>
              </div>
              <div className="item sobrepeso">
                <p className="title-info">Sobrepeso</p>
                <p>25.0 - 29.9</p>
              </div>
              <div className="item obeso">
                <p className="title-info">Obesidade</p>
                <p>30.0 ou mais</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
