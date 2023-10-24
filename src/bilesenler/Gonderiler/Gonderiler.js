import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";
import { useState } from "react";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;
  // console.log(gonderiler);
  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((element) => (
        <Gonderi
          key={element.id}
          gonderi={element}
          gonderiyiBegen={gonderiyiBegen}
        />
      ))}
    </div>
  );
};

export default Gonderiler;
