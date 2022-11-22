import React from "react";
import { Chart } from "react-google-charts";
import "./style.css";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Loading } from "../Loading";
export function Grafico() {
  const [user, setUser] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  let data = [
    ["Descrição", "Valores"],
    ["Não Vacinados", 29440 - user.vacinados_D1_value],
    ["Vacinados", user.vacinados_D1_value],
  ];
  let data1 = [
    ["Descrição", "Valores"],
    ["Não Vacinados", 29440 - user.totalmente_vacinados_value],
    ["Vacinados", user.totalmente_vacinados_value],
  ];
  let data2 = [
    ["Descrição", "Valores"],
    ["Não Vacinados", 29440 - user.vacinados_D3_value],
    ["Vacinados", user.vacinados_D3_value],
  ];
  let data3 = [
    ["Descrição", "Valores"],
    ["Não Vacinados", 29440 - user.vacinados_D4_value],
    ["Vacinados", user.vacinados_D4_value],
  ];
  useEffect(() => {
    async function fetchData() {
      const response = await api.get("");
      const value = (await response.data.data[0].length) - 1;
      setRemoveLoading(true);
      setUser({
        vacinados_D1: response.data.data[5][value - 2],
        vacinados_D1_value: response.data.data[5][value],

        totalmente_vacinados: response.data.data[6][value - 2],
        totalmente_vacinados_value: response.data.data[6][value],

        vacinados_D3: response.data.data[7][value - 2],
        vacinados_D3_value: response.data.data[7][value],

        vacinados_D4: response.data.data[8][value - 2],
        vacinados_D4_value: response.data.data[8][value],
      });
     
    }
    fetchData();
  }, []);



  return (
    <>
      <div className="grafico_pizza">
        <Chart
          chartType="PieChart"
          data={data}
          height="400px"
          width="100%"
          options={{
            pieHole: 0.5,
            pieSliceTextStyle: {
              color: "black",
            },
            title: user.vacinados_D1,
            titleTextStyle: {
              position: "center",
            },
            backgroundColor: "transparent",
            chartArea: {},
            legend: {
              position: "bottom",
            },
            colors: ["#0c4861", "#4bd0ff"],
            vAxis: {
              format: "currency",
            },
          }}
        />
        <Chart
          chartType="PieChart"
          data={data1}
          height="400px"
          width="100%"
          options={{
            pieHole: 0.5,
            pieSliceTextStyle: {
              color: "black",
            },
            title: user.totalmente_vacinados,
            titleTextStyle: {
              position: "center",
            },
            backgroundColor: "transparent",
            chartArea: {},
            legend: {
              position: "bottom",
            },
            colors: ["#0c4861", "#4bd0ff"],
            vAxis: {
              format: "currency",
            },
          }}
        />
        <Chart
          chartType="PieChart"
          data={data2}
          height="400px"
          width="100%"
          options={{
            pieHole: 0.5,
            pieSliceTextStyle: {
              color: "black",
            },
            title: user.vacinados_D3,
            titleTextStyle: {
              position: "center",
            },
            backgroundColor: "transparent",
            chartArea: {},
            legend: {
              position: "bottom",
            },
            colors: ["#0c4861", "#4bd0ff"],
            vAxis: {
              format: "currency",
            },
          }}
        />
        <Chart
          chartType="PieChart"
          data={data3}
          height="390px"
          width="100%"
          options={{
            pieHole: 0.5,
            pieSliceTextStyle: {
              color: "black",
            },
            title: user.vacinados_D4,
            titleTextStyle: {
              position: "center",
            },
            backgroundColor: "transparent",
            chartArea: {},
            legend: {
              position: "bottom",
            },
            colors: ["#0c4861", "#4bd0ff"],
            vAxis: {
              format: "currency",
            },
          }}
        />
         {!removeLoading && <Loading className="center" />}
      </div>
     
    </>
  );
}
