import * as React from "react";

const RedditCircleFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M728 404c-27.1 0-50.6 14.9-62.9 37-37-20.2-82.1-33.3-131.2-36.3l43-96.5 82.2 23.7c7.4 21 27.4 36.1 50.9 36.1 29.8 0 54-24.2 54-54s-24.2-54-54-54c-20.6 0-38.4 11.5-47.6 28.4L570.8 262c-10.3-3-21.1 2.1-25.5 11.8L487 404.9c-47.9 3.4-91.8 16.3-128.1 36.1-12.3-22.1-35.9-37-62.9-37-39.8 0-72 32.2-72 72 0 29.4 17.7 54.7 43 65.9-4.6 13.5-7 27.6-7 42.1 0 99.4 112.8 180 252 180s252-80.6 252-180c0-14.5-2.4-28.6-7-42.1 25.3-11.2 43-36.5 43-65.9 0-39.8-32.2-72-72-72zM282.6 509.4c-13.2-5.3-22.6-18.3-22.6-33.4 0-19.9 16.1-36 36-36 14.3 0 26.8 8.4 32.5 20.6-18.8 14.3-34.4 30.7-45.9 48.8zM368 548c0-19.9 16.1-36 36-36s36 16.1 36 36-16.1 36-36 36-36-16.1-36-36zm244.2 110.5C586.4 678.9 547.1 692 512 692c-35.1 0-74.4-13.1-100.2-33.5-9.3-7.3-10.9-20.8-3.6-30 7.3-9.3 20.8-10.9 30-3.6 14.9 11.7 44.3 24.3 73.7 24.3s58.9-12.6 73.7-24.3c9.3-7.3 22.7-5.7 30 3.6 7.5 9.3 5.9 22.7-3.4 30zM620 584c-19.9 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36zm121.4-74.6c-11.5-18.1-27.1-34.5-45.9-48.8 5.8-12.2 18.2-20.6 32.5-20.6 19.9 0 36 16.1 36 36 0 15.1-9.4 28.1-22.6 33.4z"
      fill="none"
    />
    <circle cx={620} cy={548} r={36} />
    <path d="M728 440c-14.3 0-26.8 8.4-32.5 20.6 18.8 14.3 34.4 30.7 45.9 48.8 13.2-5.3 22.6-18.3 22.6-33.4 0-19.9-16.1-36-36-36z" />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm245 477.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1-25.3-11.2-43-36.4-43-65.9 0-39.8 32.2-72 72-72 27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5c9.1-16.9 27-28.4 47.6-28.4 29.8 0 54 24.2 54 54s-24.2 54-54 54c-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8z" />
    <path d="M585.7 624.9c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30-7.3-9.3-20.8-10.9-30.1-3.6zM296 440c-19.9 0-36 16.1-36 36 0 15.1 9.4 28.1 22.6 33.4 11.5-18.1 27.1-34.5 45.9-48.8-5.7-12.2-18.2-20.6-32.5-20.6z" />
    <circle cx={404} cy={548} r={36} />
  </svg>
);

RedditCircleFill.displayName = "RedditCircleFill";

export default RedditCircleFill;
