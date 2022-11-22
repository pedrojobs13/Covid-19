import React from "react";
import "./style.css"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
export function Header() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get("");
      const bua = response.data.data[9][1];
      let asda = bua;
      console.log(asda) 
      setUser({
        update_name: response.data.data[9][0],
        update_value: response.data.data[9][1]
      });
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="navbar">
        <div className="menu-bars">
          <h3>PAINEL DE INFORMAÇÕES COVID-19</h3>
          <span>{user.update_name} {user.update_value}</span>
        </div>
      </div>
    </>
  );
}
