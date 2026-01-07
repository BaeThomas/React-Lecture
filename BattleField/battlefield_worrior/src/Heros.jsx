import React, { act, createContext, useContext, useState } from "react";
import { MyContext } from "./App";

const Heros = () => {
  const { worriors, imgloc, activeid, SetActiveid } = useContext(MyContext);

  const takeid = (id) => {
    SetActiveid(id);
  };
  return (
    <MyContext.Provider value={activeid}>
      <div className="upperherocontainer">
        {worriors.map((character) => {
          return (
            <div
              className="herocard"
              key={character.id}
              onClick={() => takeid(character.id)}
            >
              <img
                src={imgloc + character.img}
                alt=""
                className={
                  activeid === character.id
                    ? "hero-img active"
                    : "hero-img inactive"
                }
              />
            </div>
          );
        })}
      </div>
    </MyContext.Provider>
  );
};

export default Heros;
