import React from "react";
import Header from "./ui/header";

import "./styles/main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <Table
        columns={[
          { title: "Nome", field: "nome" },
          { title: "Label", field: "label" },
          { title: "Linguagem", field: "linguagem" },
          { title: "Idioma", field: "idioma" }
        ]}
        data={[
          {
            nome: "Accesibility Buttons",
            label: "lib",
            linguagem: "CSS, JS",
            idioma: "pt"
          }
        ]}
        title={"Iniciantes"}
      />
    </div>
  );
};

export default Main;
