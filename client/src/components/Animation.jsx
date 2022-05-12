import React from "react";
import { useRive } from "rive-react";
const Animation = () => {
  const { rive, RiveComponent } = useRive(
    {
      src: "../../assets/animations/animation.riv",
      autoplay: true,
      stateMachines: "Mkhitar_Gosh",
    },
    {
      fitCanvasToArtboardHeight: true,
    }
  );
  return <RiveComponent className="w-full h-screen rive-animation" />;
};
export default Animation;
