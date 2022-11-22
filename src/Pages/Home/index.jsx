import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { Footer } from "../../Components/Footer";
import { Grafico } from "../../Components/Grafico";
import { Header } from "../../Components/Header";
import { api } from "../../services/api";

export function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("");
      const value = (await response.data.data[0].length) - 1;

      setUser({
        confimardos: response.data.data[0][value],
        confimardos_dif:
          response.data.data[0][value - 1] - response.data.data[0][value],
        curados: response.data.data[1][value],
        curados_dif:
          response.data.data[1][value - 1] - response.data.data[1][value],

        suspeitos: response.data.data[2][value],
        suspeitos_dif:
          response.data.data[2][value - 1] - response.data.data[2][value],

        obitos: response.data.data[3][value],
        obitos_dif:
          response.data.data[3][value - 1] - response.data.data[3][value],
        notificados: response.data.data[4][value],
        notificados_dif:
          response.data.data[4][value - 1] - response.data.data[4][value],
      });

    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Card
        confimardos={user.confimardos}
        confimardos_dif={user.confimardos_dif}
        curados={user.curados}
        curados_dif={user.curados_dif}
        suspeitos={user.suspeitos}
        suspeitos_dif={user.suspeitos_dif}
        obitos={user.obitos}
        obitos_dif={user.obitos_dif}
        notificados={user.notificados}
        notificados_dif={user.notificados_dif}
      />
      <Grafico />
      <Footer />
    </>
  );
}
