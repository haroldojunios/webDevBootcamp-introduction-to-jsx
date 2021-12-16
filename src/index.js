import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/100";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My favorite foods</h1>
    <div>
      <img src={img} alt="random" />
      <img className="food-img" src="https://www.receitasnestle.com.br/sites/default/files/2020-12/capa-bacon-o-que-e-como-fazer-e-melhores-receitas.jpg" alt="bacon" />
      <img className="food-img" src="https://ogimg.infoglobo.com.br/in/25038759-fec-56d/FT631A/pata-negra.jpg" alt="jamon" />
      <img className="food-img" src="https://conteudo.imguol.com.br/2014/07/16/passo-a-passo-noodles-de-pequim-1405524977562_1024x768.jpg" alt="noodle" />
    </div>
  </div>,
  document.getElementById("root")
);
