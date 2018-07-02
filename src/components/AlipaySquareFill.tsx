import * as React from "react";

const AlipaySquareFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M647.3 568.8c28.5-49.4 51.3-105.6 66.2-166.8H557.1v-56.2h191.7v-31.3H557.1v-93.6h-78.2c-13.7 0-13.7 13.5-13.7 13.5v80.1H271.3v31.3h193.8V402h-160v31.3h310.4c-11.4 39-26.6 75.6-44.7 108.9-100.7-33.1-208.2-60-275.7-43.4-43.2 10.6-71 29.5-87.3 49.4-75 90.9-21.2 229 137.2 229 93.6 0 183.8-52 253.7-137.8 104.3 50 310.7 135.7 310.7 135.7V652.9s-25.9-2.1-140.2-40.2c-31.8-10.6-74.4-26.8-121.9-43.9zM330.1 724.3c-123.5 0-160-96.9-99-150 20.4-17.9 57.6-26.7 77.4-28.6 73.4-7.2 141.2 20.7 221.4 59.6-56.3 73.3-128 119-199.8 119z"
      fill="none"
    />
    <path d="M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6z" />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm29.4 663.2S703 689.4 598.7 639.5C528.8 725.2 438.6 777.3 345 777.3c-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9 114.3 38.2 140.2 40.2 140.2 40.2v122.3z" />
  </svg>
);

AlipaySquareFill.displayName = "AlipaySquareFill";

export default AlipaySquareFill;
