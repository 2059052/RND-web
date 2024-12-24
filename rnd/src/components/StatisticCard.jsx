import * as React from "react";
import Movies from "./Movie";

export default function StatisticsCard({
  title,
  currentValue,
  unit,
  change,
  changeType,
  graphImage,
  timeLabels,
}) {
  return (
    <div className="flex flex-col py-5 mx-auto w-full rounded-lg bg-orange-100 shadow-[0px_1px_1px_rgba(0,0,0,0.25)] max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between self-center max-w-full w-[448px]">
        <div className="flex flex-col justify-between self-start whitespace-nowrap min-h-[31px]">
          <div className="text-xs leading-3 text-zinc-400">Statistics</div>
          <div className="text-sm font-medium text-slate-800">{title}</div>
        </div>
        <div className="flex flex-col justify-between items-end min-h-[36px]">
          <div className="flex justify-center items-center text-xs font-medium text-stone-800">
            <div className="self-stretch my-auto">Current {currentValue}</div>
            <div className="self-stretch my-auto">{unit}</div>
          </div>
          <div
            className={`flex gap-1 justify-between items-center text-xs leading-5 text-right ${
              changeType === "increase" ? "text-yellow-800" : "text-lime-400"
            } whitespace-nowrap`}
          >
            <img
              loading="lazy"
              src={`http://b.io/ext_${
                changeType === "increase" ? "16" : "18"
              }-`}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            {/* <div className="flex justify-center items-start self-stretch my-auto">
              <div>{change}</div>
              {unit && <div>{unit}</div>}
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center shrink-0 mt-3.5 ml-3 max-w-full h-px border border-solid bg-orange-100 border-black w-[466px] max-md:mr-2" />
      <Movies />
      {/* <img
        loading="lazy"
        src={graphImage}
        alt={`${title} statistics graph`}
        className="object-contain mt-8 w-full aspect-[3.57] max-md:max-w-full"
      /> */}
      <div className="flex gap-1.5 justify-between items-center mt-7 mr-2.5 text-xs tracking-wide text-center text-gray-500 uppercase whitespace-nowrap min-h-[17px]">
        {timeLabels.map((label, index) => (
          <div key={index} className="self-stretch my-auto w-[30px]">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
