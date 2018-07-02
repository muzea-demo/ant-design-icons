import * as React from "react";

const YahooFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="none"
      d="M459 465.2l-28.2 28.2-93.4-93.5h37v-56.3H205.9v56.3h37l159.7 159.9v65.3h-84.4v56.3h225.1v-56.3h-84.4v-65.3l103.5-103.6H627.8v-56.3H459z"
    />
    <path d="M937.3 231H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7zM859.9 681.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3zM402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231zm225.2 225.2h-65.3L458.9 559.8v65.3h84.4v56.3H318.2v-56.3h84.4v-65.3L242.9 399.9h-37v-56.3h168.5v56.3h-37l93.4 93.5 28.1-28.1V400h168.8v56.2z" />
  </svg>
);

YahooFill.displayName = "YahooFill";

export default YahooFill;
