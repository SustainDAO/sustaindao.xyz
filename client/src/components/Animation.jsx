import React from "react";
import { useRive } from "rive-react";
const Animation = () => {
  const { rive, RiveComponent } = useRive(
    {
      src: "../../assets/animations/animation3.riv",
      autoplay: true,
      stateMachines: "Mkhitar_Gosh",
    },
    {
      fitCanvasToArtboardHeight: true,
    }
  );
  return (
    <div className="mt-16">
      <RiveComponent className="w-fit rive-animation" />
    </div>
  );
};
export default Animation;
