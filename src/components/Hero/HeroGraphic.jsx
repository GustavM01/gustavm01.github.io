import React, { useEffect, useState } from "react";
import "./HeroGraphic.css";
import {
  CodeXml,
  LayoutList,
  MountainSnow,
  TextAlignStart,
} from "lucide-react";

function HeroGraphic() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     const handleMouseMovement = (event) => {
  //       setPosition({
  //         x: event.clientX,
  //         y: event.clientY,
  //       });
  //       //   console.log(e);
  //     };
  //     console.log(position);
  //     window.addEventListener("mousemove", handleMouseMovement);

  //     return () => window.removeEventListener("mousemove", handleMouseMovement);
  //   }, []);
  //   console.log(position);

  const handleMouse = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    const xCenter = bounds.width / 2;
    const yCenter = bounds.height / 2;

    const x = (e.clientX - bounds.left - xCenter) / 6;
    const y = ((e.clientY - bounds.top - yCenter) / 6) * -1;

    setPosition({ x, y });
  };

  return (
    <>
      <div
        onMouseMove={handleMouse}
        onMouseLeave={() => setPosition({ x: 0, y: 0 })}
        className="scene"
      >
        <div
          className="graphic"
          style={{
            "--rotate-x": `${position.y}deg`,
            "--rotate-y": `${position.x}deg`,
          }}
        >
          <div className="glow"></div>

          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
          <div className="layer layer-4"></div>

          <div className="card">
            <MountainSnow size="75%" />
            <TextAlignStart size="75%" className="icon-gradient" />
            <LayoutList size="75%" className="icon-gradient" />
            <CodeXml size="75%" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroGraphic;
