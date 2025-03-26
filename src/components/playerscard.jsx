import React from "react";
import { useDrag } from "react-dnd";
import player from "../../public/images/player.jpg";
import teamlogo from "../../public/images/logo.png";
import flag from "../../public/images/flag.png";

const Cards = ({ playerName, team }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PLAYER",
    item: { playerName, team },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`cursor-grab ${isDragging ? "opacity-50" : "opacity-100"}`}>
      <div
        className={`w-[90px] h-[115px] rounded-2xl p-[5px] ${
          team === "team1" ? "bg-blue-700" : "bg-red-500"
        }`}
      >
        <div className="flex">
          <img className="rounded-2xl" src="/images/player.jpg" width={60} alt="player" />
          <div className="ml-[2px]">
            <h3 className="text-[#fff] font-bold">99</h3>
            <h4 className="text-[#fff] text-[10px] ml-[3px] mb-[5px] font-medium">ST</h4>
            <img className="rounded-4xl mb-[5px]" src="/images/logo.png" alt="team logo" />
            <img src="/images/flag.png" alt="flag" />
          </div>
        </div>
        <h1 className="text-[#fff] font-bold">{playerName}</h1>
      </div>
    </div>
  );
};


export default Cards;
