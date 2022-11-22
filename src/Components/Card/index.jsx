import React from "react";
import "./style.css";
import { ImCircleUp, ImCircleDown } from "react-icons/im";
export function Card({
  confimardos,
  confimardos_dif,
  curados,
  curados_dif,
  suspeitos,
  suspeitos_dif,
  obitos,
  obitos_dif,
  notificados,
  notificados_dif,
}) {
  return (
    <div className="container">
      <div className="cards">
        <h2>Confirmados</h2>
        <h3>{confimardos}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          
          <span style={{ fontSize: "0.9rem", padding: "0 2px" }}>
            {confimardos_dif}
          </span>
        </div>
      </div>
      <div className="cards">
        <h2>Curados</h2>
        <h3>{curados}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
         
          <span style={{ fontSize: "0.9rem", padding: "0 2px" }}>
            {curados_dif}
          </span>
        </div>
      </div>
      <div className="cards">
        <h2>Suspeitos</h2>
        <h3>{suspeitos}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          
          <span style={{ fontSize: "0.9rem", padding: "0 2px" }}>
            {suspeitos_dif}
          </span>
        </div>
      </div>
      <div className="cards">
        <h2>Óbitos</h2>
        <h3>{obitos}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
        
          <span style={{ fontSize: "0.9rem", padding: "0 2px" }}>
            {obitos_dif}
          </span>
        </div>
      </div>
      <div className="cards">
        <h2>Notificados</h2>
        <h3>{notificados}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          
          <span style={{ fontSize: "0.9rem", padding: "0 2px" }}>
            {notificados_dif}
          </span>
        </div>
      </div>
    </div>
  );
}
