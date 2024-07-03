/* eslint-disable react/prop-types */
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <p>{numQuestions} questions to test your React Mastery</p>
      <button
        className="btn btn-start"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
