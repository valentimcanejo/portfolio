import React from "react";
import "./style.css";
import { HiExternalLink } from "react-icons/hi";
interface Card {
  titulo: string;
  nome: string;
  descricao: string;
  link: string;
  color: string;
  colorB: string;
  icon: React.ReactNode | React.ReactNode[];
}

export const Card: React.FC<Card> = ({
  titulo,
  nome,
  descricao,
  link,
  color,
  colorB,
  icon,
}) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div
            className="flip-card-front"
            style={{
              backgroundImage: color,
            }}
          >
            <h1>{titulo}</h1>
            <div style={{ fontSize: "50px" }}>{icon}</div>
          </div>
          <div
            className="flip-card-back"
            style={{
              backgroundImage: colorB,
            }}
          >
            <h3>{titulo}</h3>
            <p>{nome}</p>
            <p>{descricao}</p>
            <a href={link} target="_blank" style={{ fontSize: "15px" }}>
              Visit Project <HiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
