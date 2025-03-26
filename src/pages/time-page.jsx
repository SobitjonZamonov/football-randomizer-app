import React, { useState, useEffect, useContext } from "react";
import Timer from "../components/timer";
import { Settings } from "../components/settings";
import SettingsContext from "../components/settingsContext";

const TimePage = () => {
    const [showSettings, setShowSettings] = useState(false)
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);
    return (
        <div className="flex justify-center items-center bg-blue-950 w-full h-[639px]">
            <SettingsContext.Provider value={{
                showSettings,
                setShowSettings,
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes
            }}>
                {showSettings ? <Settings /> : <Timer />}
            </SettingsContext.Provider>
        </div>
    );
};

export default TimePage;
