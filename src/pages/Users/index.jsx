import React from "react";
import TitlePage from "../../components/TitlePage";
import SearchInput from "../../components/SearchInput";
import * as ComboBox from "../../components/ComboBox";
import UserItem from "../../components/UserItem";
//css
import "./styles.scss";

function Users() {
  const [query, setQuery] = React.useState("");
  const [hentaisPerPage, setHentaisPerPage] = React.useState(15);
  const [order, setOrder] = React.useState("Alfabética");

  return (
    <section className="page-container users">
      <TitlePage text="TODOS OS USUÁRIOS">
        <SearchInput onChange={setQuery} value={query} />
        <ComboBox.ComboSelect
          onChange={setOrder}
          value={order}
          placeholder="Ordem"
          data={[
            "Alfabética",
            "Postagem",
            "Lançamento",
            "Maior nota",
            "Mais fapados",
          ]}
          defaultValue="Alfabética"
        ></ComboBox.ComboSelect>
      </TitlePage>
      <article className="user-list">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </article>
    </section>
  );
}

export default Users;
