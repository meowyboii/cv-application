import "../styles/Section.css";

function Section({ isActive, counter, onShow, children }) {
  return (
    <>
      <button
        className="section"
        style={{ color: isActive ? "black" : "gray" }}
        onClick={onShow}
      >
        <span
          className="step"
          style={{ backgroundColor: isActive ? "red" : "gray" }}
        >
          {counter}
        </span>
        {children}
      </button>
    </>
  );
}

export default Section;
