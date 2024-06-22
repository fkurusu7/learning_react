/* eslint-disable react/prop-types */

import { useState } from "react";

const ContainerStyle = {
  backgroundColor: "#222",
  height: "100vh",
  width: "100vw",
  padding: "100px",
  display: "flex",
  justifyComponents: "center",
  alignItems: "start",
  flexDirection: "column",
};

function TestExternalState() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarsComponent color="#7156fb" onSetRating={setMovieRating} />
      <p style={{ color: "#fff", fontSize: "20px" }}>
        This movie was rated {movieRating} stars
      </p>
    </div>
  );
}

export function StarRating() {
  return (
    <div style={ContainerStyle}>
      <StarsComponent maxRating={7} />
      <StarsComponent defaultRating={3} />
      <StarsComponent maxRating={20} />
      <StarsComponent
        messages={["Terrible", "Bad", "Ok", "Good", "Amaizing"]}
      />
      <StarsComponent
        maxRating={10}
        color="#faa045"
        size={20}
        messages={["Terrible", "Bad", "Ok", "Good", "Amaizing"]}
      />

      <TestExternalState />
    </div>
  );
}

const StarContainerStyle = {
  display: "flex",
  justifyComponents: "center",
  alignItems: "center",
  gap: "16px",
  fontSize: "20px",
  marginBottom: "10px",
};

const StarComponentStyle = {
  display: "flex",
};

function StarsComponent({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [starRating, setStarRating] = useState(defaultRating);
  const [tmpStarRating, setTmpStarRating] = useState(defaultRating);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    fontSize: `${size / 1.5}px`,
    color,
  };
  function handleRating(rating) {
    setStarRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={StarContainerStyle}>
      <div style={StarComponentStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tmpStarRating ? tmpStarRating >= i + 1 : starRating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTmpStarRating(i + 1)}
            onHoverOut={() => setTmpStarRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tmpStarRating ? tmpStarRating - 1 : starRating - 1]
          : tmpStarRating || starRating || ""}
      </p>
    </div>
  );
}
function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const StarStyle = {
    height: `${size}px`,
    width: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return (
    <span
      style={StarStyle}
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

export default StarsComponent;

/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 /52 / 62 / 74 / 86 / 98
*/

/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/
