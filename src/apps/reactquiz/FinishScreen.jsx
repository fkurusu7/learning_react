/* eslint-disable react/prop-types */
function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = ((points / maxPoints) * 100).toFixed(1);

  let emoji;

  if (percentage === 100) emoji = "🥳";
  if (percentage >= 80 && percentage <= 100) emoji = "🤗";
  if (percentage >= 50 && percentage <= 79) emoji = "🤭";
  if (percentage > 0 && percentage <= 49) emoji = "😪";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-start btn-ui"
        onClick={() =>
          dispatch({
            type: "restart",
          })
        }
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
