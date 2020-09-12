import React from "react";
//components
import MainInput from "../../components/Input";
import TitlePage from "../../components/TitlePage";
import * as ComboBox from "../../components/ComboBox";
//css
import "./styles.scss";

function Taxonomies() {
  return (
    <section className="page-container ">
      <TitlePage text="Taxonomias" />
      <section className="taxonomies">
        <article className="filter-tag-container">
          <MainInput label="Título da Taxonomia" />
          <article className="input-and-button">
            <ComboBox.ComboSelect>
              <ComboBox.ComboItem value="" text="Categoria" />
            </ComboBox.ComboSelect>
            <button>Adicionar</button>
          </article>
        </article>
        <hr />
        <article className="classifier">
          <p>
            OBSERVAÇÃO. Para <strong>Editar</strong> ou <strong>Excluir</strong>
            alguma taxonomia basta clicar nela
          </p>
          <div>
            <p>
              Classificar por <strong>*</strong>
            </p>
            <ComboBox.ComboSelect></ComboBox.ComboSelect>
          </div>
        </article>
        <article className="grid-gender">
          <aticle className="grid-painel">
            <div className="title-painel">Gêneros</div>
          </aticle>
          <aticle className="grid-painel">
            <div className="title-painel">Qualidades</div>
          </aticle>
          <aticle className="grid-painel">
            <div className="title-painel">Anos Lançados</div>
          </aticle>
          <aticle className="grid-painel">
            <div className="title-painel">Estúdios</div>
          </aticle>
        </article>
      </section>
    </section>
  );
}

export default Taxonomies;
