import React, { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PlayButton } from "../assets/playbutton";
import { PauseButton } from "../assets/pausebutton";
import { SettingsButton } from "../assets/settingsbutton";
import SettingsContext from "./settingsContext";

const Timer = () => {
    const red = '#f54e4e';
    const green = '#4aec8c';

    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setPaused] = useState(true);
    const [mode, setMode] = useState("work");
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function initTimer() {
        const initialTime = settingsInfo.workMinutes * 60;
        setSecondsLeft(initialTime);
        secondLeftRef.current = initialTime;
    }

    function tick() {
        secondLeftRef.current--;
        setSecondsLeft(secondLeftRef.current);
    }

    function switchMode() {
        const nextMode = modeRef.current === "work" ? "break" : "work";
        const nextSeconds = (nextMode === "work" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

        setMode(nextMode);
        setSecondsLeft(nextSeconds);
        modeRef.current = nextMode;
        secondLeftRef.current = nextSeconds;
    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current) return;
            if (secondLeftRef.current === 0) switchMode();
            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = mode === "work" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentage = Math.round((secondsLeft / totalSeconds) * 100);
    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60

    if (seconds < 10) seconds = '0' + seconds 

    return (
        <div className="bg-blue-950 flex justify-center items-center h-[639px]">
            <div className="w-[400px]">
                <CircularProgressbar
                    value={percentage}
                    text={`${minutes + ':' + seconds }`}
                    styles={buildStyles({
                        textColor: "#fff",
                        pathColor: mode === 'work' ? red : green,
                        trailColor: "rgba(255, 255, 255, .2)",
                    })}
                />
                <div className="flex gap-4 justify-center mt-4">
                    <button onClick={() => {
                        setPaused(!isPaused);
                        isPausedRef.current = !isPaused;
                    }}>
                        {isPaused ? <PlayButton /> : <PauseButton />}
                    </button>

                    <button onClick={() => settingsInfo.setShowSettings(true)}>
                        <SettingsButton />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
