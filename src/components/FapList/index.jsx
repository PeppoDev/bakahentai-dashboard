import React from "react";
import FapListItem from "../FapListItem";

export default function FapList({ data }) {
  return (
    <>
      {data.map((data) => (
        <FapListItem key={data.id} name={data.name} studios={data.studios} />
      ))}
    </>
  );
}
