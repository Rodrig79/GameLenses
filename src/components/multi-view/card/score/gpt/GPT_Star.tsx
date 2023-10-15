import { useState } from "react";

interface Props {
  isGlowing: boolean;
}

const GPT_Star: React.FC<Props> = ({ isGlowing = false }) => {
  var className = "gpt_star_OFF";

  if (isGlowing) {
    className = "gpt_star_ON";
  }

  return (
    <div className={className}>
      <label>⭐</label>
    </div>
  );
};

export default GPT_Star;
