import { TypeAnimation } from "react-type-animation";

function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Frontend, Freelincer developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={500}
      style={{
        fontSize: "28px",
        display: "inline-block",
        color: "#292929",
        fontWeight: 600,
        marginBottom: "30px",
      }}
      repeat={Infinity}
    />
  );
}

export default TypingText;
