import * as React from "react";

const GoogleCircleFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M516.9 467.4v94.8h131.8c-5.7 30.6-22.9 56.6-48.9 74-22 14.7-50 23.4-82.9 23.4-63.8 0-117.8-43.1-137-101-4.9-14.7-7.7-30.4-7.7-46.6s2.8-31.8 7.7-46.6c19.3-57.8 73.3-101 137.1-101 36 0 68.2 12.4 93.6 36.6l70.2-70.3c-42.4-39.6-97.8-63.8-163.9-63.8-95.7 0-178.5 54.9-218.8 135C281.5 435.1 272 472.5 272 512s9.5 77 26.1 110.1c40.3 80 123.1 134.9 218.8 134.9 66.1 0 121.5-22 162.1-59.4 46.3-42.7 73-105.4 73-180.1 0-17.4-1.5-34.1-4.4-50.1H516.9z"
      fill="none"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
  </svg>
);

GoogleCircleFill.displayName = "GoogleCircleFill";

export default GoogleCircleFill;
