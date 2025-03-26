import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./settingsContext";
import { BackButton } from "../assets/backbutton";


export const Settings = () => {

    const settingsInfo = useContext(SettingsContext)
    return (
        <div className="text-center flex flex-col justify-center items-center gap-6">
            <h1 className="font-bold text-5xl text-[#fff] mb-[30px]">Settings</h1>

            <div>
                <label className="font-normal text-3xl text-[#fff]">work: {settingsInfo.workMinutes}:00</label>
                <ReactSlider
                    className="border-2 border-red-500 h-[48px] w-[400px] cursor-pointer rounded-3xl"
                    thumbClassName="bg-red-500 w-[35px] h-[45px] rounded-full cursor-pointer"
                    trackClassName="h-[48px] rounded-3xl"
                    value={settingsInfo.workMinutes}
                    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                    min={1}
                    max={120}
                />
            </div>

            <div>
                <label className="font-normal text-3xl text-[#fff]">break: {settingsInfo.breakMinutes}:00</label>
                <ReactSlider
                    className="border-2 border-green-500 h-[48px] w-[400px] cursor-pointer rounded-3xl"
                    thumbClassName="bg-green-500 w-[35px] h-[45px] rounded-full cursor-pointer"
                    trackClassName="h-[48px] rounded-3xl"
                    value={settingsInfo.workMinutes}
                    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                    min={1}
                    max={60}
                />
            </div>
            <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
        </div>
    )
}