import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Cards from "../components/playerscard";
import DropZone from "../components/dropzone";

const StadiumPage = () => {
  const { t } = useTranslation();
  const [teams, setTeams] = useState({ team1: [], team2: [] });
  const [positions, setPositions] = useState({});

  useEffect(() => {
    const savedTeams = JSON.parse(localStorage.getItem("teams")) || { team1: [], team2: [] };
    const savedPositions = JSON.parse(localStorage.getItem("positions")) || {};
    setTeams(savedTeams);
    setPositions(savedPositions);
  }, []);

  const handleDrop = (position, item) => {
    setPositions((prev) => {
      const newPositions = { ...prev, [position]: item.playerName };
      localStorage.setItem("positions", JSON.stringify(newPositions));
      return newPositions;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="min-h-[calc(100vh-64px)] py-4">
        <div className="container text-center">
          <h1 className="text-xl uppercase font-bold mb-4">{t("pages.stadium.title")}</h1>

          <div className="flex justify-between items-center">
            {/* TEAM 1 */}
            <div className="flex flex-wrap gap-2 justify-center w-[20%]">
              {teams.team1.map((player, index) => (
                <Cards key={index} playerName={player} team="team1" />
              ))}
            </div>

            {/* STADIUM */}
            <div className="w-[60%] mx-auto relative">
              <img src="/images/station.jpg" alt="stadium" className="w-full rounded-2xl" />

              {/* DROP ZONES */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4">
                <div className="flex gap-[140px] absolute top-[100px]">
                  <DropZone position="left1" onDrop={handleDrop} assignedPlayer={positions["left1"]} />
                  <DropZone position="right1" onDrop={handleDrop} assignedPlayer={positions["right1"]} />
                </div>
                <div className="flex gap-6 gap-[140px] absolute top-[220px]">
                  <DropZone position="left2" onDrop={handleDrop} assignedPlayer={positions["left2"]} />
                  <DropZone position="right2" onDrop={handleDrop} assignedPlayer={positions["right2"]} />
                </div>
                <div className="flex gap-6 gap-[140px] absolute top-[350px]">
                  <DropZone position="left3" onDrop={handleDrop} assignedPlayer={positions["left3"]} />
                  <DropZone position="right3" onDrop={handleDrop} assignedPlayer={positions["right3"]} />
                </div>
                <div className="flex gap-6 gap-[380px] absolute top-[180px]">
                  <DropZone position="left4" onDrop={handleDrop} assignedPlayer={positions["left4"]} />
                  <DropZone position="right4" onDrop={handleDrop} assignedPlayer={positions["right4"]} />
                </div>
                <div className="flex gap-6 gap-[380px] absolute top-[280px]">
                  <DropZone position="left5" onDrop={handleDrop} assignedPlayer={positions["left5"]} />
                  <DropZone position="right5" onDrop={handleDrop} assignedPlayer={positions["right5"]} />
                </div>
              </div>
            </div>

            {/* TEAM 2 */}
            <div className="flex flex-wrap gap-2 justify-center w-[20%]">
              {teams.team2.map((player, index) => (
                <Cards key={index} playerName={player} team="team2" />
              ))}
            </div>
          </div>

          <div className="flex gap-[40px] justify-center">
            <Link to={"/about"}>
              <button className="mt-4 outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white">
                Orqaga
              </button>
            </Link>
            <Link to={"/time"}>
              <button className="mt-4 outline-none border-none rounded-lg py-2 px-6 bg-green-700 text-white">
                Davom etish
              </button>
            </Link>
          </div>
        </div>
      </main>
    </DndProvider>
  );
};

export default StadiumPage;
