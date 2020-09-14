import React from "react";
//components
import HentaItem from "../../components/HentaItem";

export default function HeantiList({ data }) {
  return (
    <>
      {data.map((data) => (
        <HentaItem key={data.id} name={data.name} studios={data.studios} />
      ))}
    </>
  );
}
