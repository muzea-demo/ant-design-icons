import * as React from "react";

const MediumSquareFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M525.6 560.5L411 309H262.5v8.7l47.8 57.6c4.8 4.2 7.1 10.4 6.5 16.7v226c1.4 8.2-1.2 16.5-7 22.4L256 705.5v8.7h152.7v-8.7L355 640.4c-5.8-5.9-8.7-14.3-7.5-22.4V422.5l133.9 291.6h15.5l115-291.6v232.7c0 6.1 0 7.3-4.1 11.4l-41.3 40.1v8.3h200.7v-8.7l-40-39.1c-3.6-2.5-5.3-7-4.6-11.4V368.1c-.7-4.2 1-8.7 4.6-11.4l40.8-39.1v-8.5H626.5L525.6 560.5z"
      fill="none"
    />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1c5.8-5.9 8.3-14.3 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z" />
  </svg>
);

MediumSquareFill.displayName = "MediumSquareFill";

export default MediumSquareFill;
