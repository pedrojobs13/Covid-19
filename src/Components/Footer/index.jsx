import "./styles.css";

export function Footer() {
  return (
    <>
      <div className="footer_vacinas">
        <h3>
          Para ter acesso ao gráfico de vacinas e casos de covid de forma
          completa os links abaixo:
        </h3>
      </div>

      <div className="container_vacinas">
        <div className="footer_vacinas_links">
          <span>Gráfico das Vacinas </span>{" "}
          <a href="https://www.vacinaeconfia.es.gov.br/cidadao/">Acessar </a>
        </div>
        <div className="footer_vacinas_links">
          <span>Gráfico do Covid </span>{" "}
          <a href="https://coronavirus.es.gov.br/painel-covid-19-es/">Acessar </a>
        </div>
      </div>
    </>
  );
}
