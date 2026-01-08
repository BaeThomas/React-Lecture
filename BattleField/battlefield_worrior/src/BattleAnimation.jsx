import React, { act, useContext, useEffect, useReducer, useState } from "react";
import { MyContext } from "./App";
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const existinghero = state.find((hero) => hero.id == action.id);
      if (existinghero) {
        return state.map((hero) =>
          hero.id == action.id ? { ...hero, qty: hero.qty + 1 } : hero
        );
      }
      return [
        ...state,
        {
          id: action.id,
          qty: 1,
          loc: action.loc,
          thename: action.heroname,
          thecard: action.herocard,
        },
      ];
    }
    case "remove":
      return state
        .map((hero) =>
          hero.id === action.id ? { ...hero, qty: hero.qty - 1 } : hero
        )
        .filter((hero) => hero.qty > 0);
    default:
      return state;
  }
};

const BattleAnimation = () => {
  const { activeid, worriors, imgloc } = useContext(MyContext);
  const [listedhero, dispatch] = useReducer(reducer, initialState);
  const index = activeid - 1;

  useEffect(() => {
    console.log("Listed heroes:", listedhero);
  }, [listedhero]);

  const addtohero = () => {
    dispatch({
      type: "add",
      id: activeid,
      loc: imgloc,
      heroname: worriors[index].name,
      herocard: worriors[index].card,
    });
  };

  return (
    <div>
      <div className="Anime">
        <div className="leftani">
          <h1 className="anititle">{worriors[index].name}</h1>
          <img src={imgloc + worriors[index].ani} alt="" className="aniimg" />
        </div>
        <div className="rightani">
          <table className="thelable">
            <thead></thead>
            <tbody>
              <tr>
                <td className="ans">POWER</td>
                <td>{worriors[index].power}</td>
              </tr>
              <tr>
                <td className="ans">PRICE</td>
                <td>{worriors[index].price} Baht</td>
              </tr>
              <tr className="def">
                <td colSpan="2">"{worriors[index].def}"</td>
              </tr>
            </tbody>
          </table>
          <div className="ADDBTN">
            <button onClick={addtohero}>ADD</button>
          </div>
        </div>
      </div>
      <div className="lower-bracket">
        <div className="listed-hero">
          {/* This is card gtest */}
          {listedhero.map((heros) => {
            return (
              <div className="small-card" key={heros.id}>
                <button
                  className="minus"
                  onClick={() => dispatch({ type: "remove", id: heros.id })}
                >
                  -
                </button>

                <div className="upper">
                  <img src={imgloc + heros.thecard} alt="" />
                </div>
                <div className="undernumber">{heros.qty}</div>
              </div>
            );
          })}
        </div>
        <div className="right-button">
          {listedhero.length > 0 ? (
            <button>Go to the Battle Field</button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BattleAnimation;
