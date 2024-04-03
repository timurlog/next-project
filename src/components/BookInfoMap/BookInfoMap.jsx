import React from "react";
import H2 from "../H2/H2";
import BackBtn from "../BackBtn/BackBtn";

export default function BookInfoMap(props) {
  return (
    <div className={`py-10`}>
      <BackBtn href={"/book-list/"} />
      <H2 txt={props.title} />
    </div>
  );
}
