import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Chat with Your OWN AI 🤖",
        1500,
        "Built with Open AI 💻",
        2000,
        "Your own custamized ChatGPT 🤡",
        2500,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "3em",
        display: "inline-block",
        color: "white",
        textShadow: "1px 1px 2px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
