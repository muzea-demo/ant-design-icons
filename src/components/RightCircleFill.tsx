import * as React from "react";

const RightCircleFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M666.7 505.5l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.7-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"
      fill="none"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z" />
  </svg>
);

RightCircleFill.displayName = "RightCircleFill";

export default RightCircleFill;
