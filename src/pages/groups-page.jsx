import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "../components/playerscard";

const GroupPage = () => {
  const [teams, setTeams] = useState({ team1: [], team2: [] });

  useEffect(() => {
    const savedTeams = JSON.parse(localStorage.getItem("teams")) || { team1: [], team2: [] };
    setTeams(savedTeams);
  }, []);

  return (
    <main className="min-h-[calc(100vh-64px-188px)] py-4">
      <div className="container bg-[url(/images/bg2.jpeg)] bg-cover w-[1328px] h-[650px] rounded-2xl">
        <div className="flex flex-col justify-center items-center pt-5 pb-7">
          <h1 className="text-xl text-center text-white uppercase font-bold mb-4">
            O‘yinchilarni bo‘lish natijalari
          </h1>
          <div className="flex gap-20 mt-[30px]">
            <div className="backdrop-blur-2xl w-[350px] h-[400px] p-4 rounded-lg text-black">
              <h2 className="text-center font-bold text-lg mb-2">1-Guruh</h2>
              <div className="flex flex-wrap gap-3 justify-center mt-[20px]">
                {teams.team1.map((player, index) => (
                  <Cards key={index} playerName={player} team="team1" />
                ))}
              </div>
            </div>

            <div className="backdrop-blur-2xl w-[350px] h-[400px] p-4 rounded-lg text-black">
              <h2 className="text-center font-bold text-lg mb-2">2-Guruh</h2>
              <div className="flex flex-wrap gap-3 justify-center mt-[20px]">
                {teams.team2.map((player, index) => (
                  <Cards key={index} playerName={player} team="team2" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2.5">
            <Link to="/support">
              <button className="outline-none border-none rounded-lg py-2 px-6 bg-amber-500 hover:bg-amber-300 text-white mt-6">
                Davom etish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupPage;
