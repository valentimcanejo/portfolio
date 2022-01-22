import React from "react";
import Card from "./Card";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiElectron } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

export default function Cards() {
  return (
    <div>
      <div className="app">
        <Card
          titulo={"Desafio-Frexco"}
          nome={"React JS with TS"}
          descricao={"Shopping simulation consuming fruityvice API"}
          link={"https://github.com/valentimcanejo/desafio-frexco"}
          color={"linear-gradient(270deg, #52c234 0%, #061700 100%)"}
          colorB={"linear-gradient(270deg, #061700 0%, #52c234 100%)"}
          icon={[<FaReact />, " ", <SiTypescript />, " ", <SiMaterialui />]}
        />

        <Card
          titulo={"ETH Wallet"}
          nome={"React with TS"}
          descricao={"ETH transfer System in React with Typescript"}
          link={"https://github.com/valentimcanejo/desafio-dexkit"}
          color={"linear-gradient(270deg, #0FF0B3 0%, #036ED9 50%)"}
          colorB={"linear-gradient(270deg, #036ED9 0%, #0FF0B3 160%)"}
          icon={[
            <FaReact />,
            " ",
            <SiTypescript />,
            " ",
            <FaEthereum />,
            " ",
            <SiMaterialui />,
          ]}
        />
        <Card
          titulo={"Desafio-NAVI"}
          nome={"React JS"}
          descricao={"Web page in React JS"}
          link={"https://github.com/valentimcanejo/Desafio-NAVI"}
          color={"linear-gradient(270deg, #fcdf8a 0%, #f38381 100%)"}
          colorB={"linear-gradient(270deg, #f38381 0%, #fcdf8a 100%)"}
          icon={<FaReact />}
        />
        <Card
          titulo={"Calculadora"}
          nome={"React JS"}
          descricao={"Calculator in React App"}
          link={"https://github.com/valentimcanejo/calculadora"}
          color={"linear-gradient(270deg, #c56cd6 0%, #5d6874 100%)"}
          colorB={"linear-gradient(270deg, #5d6874 0%, #c56cd6 100%)"}
          icon={[<FaReact />]}
        />
        <Card
          titulo={"Most Used Words"}
          nome={"Electron"}
          descricao={"System to calculate most used words in a subtitle file"}
          link={"https://github.com/valentimcanejo/most-used-words"}
          color={"linear-gradient(270deg, #E3E3E3 0%, #5D6874 100%)"}
          colorB={"linear-gradient(270deg, #5D6874 0%, #E3E3E3 100%)"}
          icon={[<FaVuejs />, " ", <SiElectron />]}
        />
        <Card
          titulo={"ToDo App"}
          nome={"React JS"}
          descricao={"ToDo list app with React"}
          link={"https://github.com/valentimcanejo/ToDo-App"}
          color={"linear-gradient(270deg, #F36265 0%, #961276 100%)"}
          colorB={"linear-gradient(270deg, #961276 0%, #F36265 100%)"}
          icon={[<FaReact />, " ", <FaNodeJs />]}
        />
        <Card
          titulo={"Boids"}
          nome={"Javascript"}
          descricao={"Flocking simulator"}
          link={"https://github.com/valentimcanejo/boid-flocking-behavior"}
          color={"linear-gradient(270deg, #b1ea4d 0%, #459522 50%)"}
          colorB={"linear-gradient(270deg, #459522 0%, #b1ea4d 180%)"}
          icon={<SiJavascript />}
        />
        <Card
          titulo={"Boids 3D"}
          nome={"Three JS"}
          descricao={"3D Flocking Simulation"}
          link={"https://github.com/valentimcanejo/threejs-flocking-simulation"}
          color={"linear-gradient(270deg, #184e68 0%, #57ca85 100%)"}
          colorB={"linear-gradient(270deg, #57ca85 0%, #184e68 100%)"}
          icon={<SiThreedotjs />}
        />
        <Card
          titulo={"CRUD"}
          nome={"React JS"}
          descricao={"CRUD in React JS with JSON server"}
          link={"https://github.com/valentimcanejo/crud"}
          color={"linear-gradient(270deg, #f2d50f 0%, #da0641 100%)"}
          colorB={"linear-gradient(270deg, #da0641 0%, #f2d50f 100%)"}
          icon={[<FaReact />, " ", <VscJson />]}
        />
        <Card
          titulo={"Binary Search Tree"}
          nome={"Java"}
          descricao={"Binary Search Tree in Java"}
          link={"https://github.com/valentimcanejo/binarysearchtree"}
          color={"linear-gradient(270deg, #65799b 0%, #5e2563 100%)"}
          colorB={"linear-gradient(270deg, #5e2563 0%, #65799b 100%)"}
          icon={<FaJava />}
        />

        <Card
          titulo={"Vue Projects"}
          nome={"Vue JS"}
          descricao={"Many projects made with Vue"}
          link={"https://github.com/valentimcanejo/projetos-vuejs"}
          color={"linear-gradient(270deg, #C56CD6 0%, #3425AF 100%)"}
          colorB={"linear-gradient(270deg, #3425AF 0%, #C56CD6 100%)"}
          icon={<FaVuejs />}
        />
      </div>
    </div>
  );
}
