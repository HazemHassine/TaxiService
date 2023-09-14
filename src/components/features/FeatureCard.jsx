import { Typography } from "@material-tailwind/react";
import React from "react";
function FeatureCard(props) {
  return (
    <div className={`${props.small? "": "hover:-translate-y-10"} duration-500 ease-in-out group flex flex-col bg-white p-[25px_20px] rounded-3xl w-[18rem] items-center`}>
      <div className="p-[20px] w-[100px] h-[100px] bg-yellow-700 rounded-full border-black border-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.com/svgjs"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
          className="w-full h-full"
        >
          <g>
            <path
              d="M43 52h6v2h-6z"
              fill="#000000"
              data-original="#000000"
            ></path>
            <path
              d="M62 47a3.009 3.009 0 0 0-3-3 2.949 2.949 0 0 0-1.99.78l-1.07-2.13-.78-3.14A1.992 1.992 0 0 0 53.22 38H51v-3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v3h-2.22a1.992 1.992 0 0 0-1.94 1.51l-.78 3.14-1.07 2.13A2.949 2.949 0 0 0 33 44a3 3 0 0 0-1.6 5.53A2.942 2.942 0 0 0 31 51v9a2.006 2.006 0 0 0 2 2h4a2.006 2.006 0 0 0 2-2v-2h14v2a2.006 2.006 0 0 0 2 2h4a2.006 2.006 0 0 0 2-2v-9a2.942 2.942 0 0 0-.4-1.47A2.983 2.983 0 0 0 62 47ZM43 36h6v2h-6Zm-4.22 4h14.44l.5 2H38.28Zm-1.16 4h16.76l2 4H35.62ZM32 47a.992.992 0 0 1 1.97-.17l-.53 1.05A.933.933 0 0 1 33 48a1 1 0 0 1-1-1Zm5 13h-4v-2.18a3 3 0 0 0 1 .18h3Zm22 0h-4v-2h3a3 3 0 0 0 1-.18Zm0-5a1 1 0 0 1-1 1H34a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1Zm0-7a.933.933 0 0 1-.44-.12l-.53-1.05A.993.993 0 1 1 59 48Z"
              fill="#000000"
              data-original="#000000"
            ></path>
            <circle
              cx="55"
              cy="53"
              r="2"
              fill="#000000"
              data-original="#000000"
            ></circle>
            <circle
              cx="37"
              cy="53"
              r="2"
              fill="#000000"
              data-original="#000000"
            ></circle>
            <path
              d="M41 25H20.46L19 24.35v-1.43A8.06 8.06 0 0 0 22.74 18H23a2.992 2.992 0 0 0 .38-5.96l1.33-1.33A1.033 1.033 0 0 0 25 10V7a5 5 0 0 0-5-5H4a1 1 0 0 0-.89 1.45L4.88 7l-.77 1.55a1 1 0 0 0 .18 1.16l2.33 2.33A2.992 2.992 0 0 0 7 18h.26A8.06 8.06 0 0 0 11 22.92v1.43l-4.85 2.16A7 7 0 0 0 2 32.9V48a4 4 0 0 0 4 4v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V31h20a1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4ZM24 15a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1ZM7 16a1 1 0 0 1 0-2Zm-.78-7.2.67-1.35a.956.956 0 0 0 0-.9L5.62 4H20a3.009 3.009 0 0 1 3 3v2.59L21.59 11h-.15a1 1 0 0 1-.95-.68l-.54-1.64a.975.975 0 0 0-.65-.63A1.047 1.047 0 0 0 19 8a1.029 1.029 0 0 0-.6.2l-1.87 1.4a7.042 7.042 0 0 1-4.2 1.4H8.41ZM9 16v-3h3.33a9.032 9.032 0 0 0 5.4-1.8l.76-.57.11.32a2.975 2.975 0 0 0 2.4 2.01V16a6 6 0 0 1-12 0Zm4 8.28v-.54a7.822 7.822 0 0 0 4 0v.54l-2 .67Zm.15 2.16-1.14 1.13-1-1.04 1.04-.46Zm4.8-.37 1.04.46-1 1.04-1.14-1.13ZM6 50a2.006 2.006 0 0 1-2-2h2Zm16 10h-6v-8h-2v8H8V49h14Zm17-31H23a1 1 0 0 0-1 1v17H8V32H6v14H4V32.9a5.009 5.009 0 0 1 2.97-4.57l2.1-.93 2.21 2.29a.97.97 0 0 0 .71.31H12a1.052 1.052 0 0 0 .71-.29l2.29-2.3 2.29 2.3A1.052 1.052 0 0 0 18 30h.01a.97.97 0 0 0 .71-.31l2.6-2.69H39Zm2 0v-2a2.006 2.006 0 0 1 2 2ZM57.41 6.09l-9-4a.979.979 0 0 0-.82 0l-9 4A.987.987 0 0 0 38 7v5.94a12.989 12.989 0 0 0 6.69 11.36l2.82 1.57a.988.988 0 0 0 .98 0l2.82-1.57A12.989 12.989 0 0 0 58 12.94V7a.987.987 0 0 0-.59-.91ZM56 12.94a11.019 11.019 0 0 1-5.66 9.62L48 23.86l-2.34-1.3A11.019 11.019 0 0 1 40 12.94V7.65l8-3.56 8 3.56Z"
              fill="#000000"
              data-original="#000000"
            ></path>
            <path
              d="M11 14h2v2h-2zM17 14h2v2h-2zM47 17a1 1 0 0 0 .707-.293l5-5-1.414-1.414L47 14.586l-2.293-2.293-1.414 1.414 3 3A1 1 0 0 0 47 17Z"
              fill="#000000"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      </div>
      <Typography variant="h4" className="mt-4">Safety Guarantee</Typography>
      <Typography className="text-center mt-6 mb-6" color="gray">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout point of using is
        that it has normal distribution of letter
        </Typography>
    </div>
  );
}

export default FeatureCard;
