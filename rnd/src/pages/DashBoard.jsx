// import { useState } from "react";
// import Navbar from "./components/navbar";
// import SideNav from "./components/sideNav";
// import Movie from "../components/Movie";
import StatisticsCard from "../components/StatisticCard";
import WeatherOverview from "../components/WeatherOverview";
import { SearchHeader } from "../components/searchHeader";
import React from "react";

const weatherStats = [
  {
    title: "Total of hives",
    value: "25",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/264320e24f12d6d6cbff5f3426919932957b52acd0bbf78fc76aab74ab80f38f?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
  },
  {
    title: "UV Index",
    value: "3/10",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2043e86cdef7102886a7959b6894e64188bc102ed8494ce21dff7fe78b367193?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
  },
  {
    title: "Humidity",
    value: "35%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3806358688325f6743e5affe4aa88cb92d492deccf9db90c4803259047d6da1a?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
  },
];

const timeLabels = [
  "7am",
  "9am",
  "11am",
  "1pm",
  "3pm",
  "5pm",
  "7pm",
  "9pm",
  "11pm",
  "1am",
  "3am",
  "5am",
];
function DashBoard() {
  return (
    <div className="overflow-hidden bg-white w-full">
      <div className="flex max-md:flex-col">
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
              <div className="flex gap-3 items-center self-start mt-9">
                <div className="self-stretch my-auto text-2xl font-bold text-stone-900">
                  Hello User
                </div>
                <div className="self-stretch my-auto text-xs font-medium text-stone-700 w-[165px]">
                  Thurday, 17th October, 2024{" "}
                </div>
              </div>
              <div className="flex flex-col p-3 mt-4 bg-orange-50 rounded max-md:max-w-full">
                <div className="flex flex-col w-full font-medium text-stone-900 max-md:max-w-full">
                  <div className="text-sm leading-none max-md:max-w-full">
                    Today's Local Weather
                  </div>
                  <div className="flex flex-wrap gap-10 justify-between items-start mt-2.5 w-full text-3xl max-md:max-w-full">
                    <div className="flex gap-2.5 min-h-[32px] min-w-[240px]">
                      <div className="my-auto">Sunny Cloudy</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d46c4406cf29286ebfa6a4842424e02418f1473d5ac53c104edc125832fd98?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
                        alt=""
                        className="object-contain shrink-0 aspect-[1.19] w-[38px]"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6ed75e035fbcdcf3b64c8685fe3a8f650775fcb94a2f0f80eda84313239a325?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
                      alt="Temperature graph"
                      className="object-contain shrink-0 aspect-[1.25] w-[105px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-2 w-full max-md:max-w-full">
                  <div className="text-sm font-medium text-stone-800">
                    Overview
                  </div>
                  <WeatherOverview stats={weatherStats} />
                </div>
              </div>
              <div className="mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <StatisticsCard
                      title="Weight"
                      currentValue="60"
                      unit="kg"
                      change="1.5"
                      changeType="increase"
                      graphImage="https://cdn.builder.io/api/v1/image/assets/TEMP/ed4e78ba-1372-448a-bcda-d5d790c98c06?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
                      timeLabels={timeLabels}
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <StatisticsCard
                      title="UV Index"
                      currentValue="6"
                      unit="/10"
                      change="1"
                      changeType="decrease"
                      graphImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e2be002e-1932-400d-9139-a51b9c5fa780?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
                      timeLabels={timeLabels}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
