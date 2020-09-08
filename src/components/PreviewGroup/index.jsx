import React from "react";
//css
import "./styles.scss";

export default function PreviewGroup() {
  const [page, setPage] = React.useState(0);

  return (
    <article className="preview">
      <p>
        Previews <strong>*</strong>
      </p>
      <article className="preview-group">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
      <article className="preview-pagination">
        <div
          style={page === 0 ? { backgroundColor: "#f53767" } : null}
          onClick={() => setPage(0)}
        ></div>
        <div
          style={page === 1 ? { backgroundColor: "#f53767" } : null}
          onClick={() => setPage(1)}
        ></div>
      </article>
    </article>
  );
}
