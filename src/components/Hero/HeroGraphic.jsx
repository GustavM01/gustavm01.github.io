import React, { useEffect, useRef, useState } from "react";
import "./HeroGraphic.css";
import {
  CodeXml,
  LayoutList,
  MountainSnow,
  TextAlignStart,
} from "lucide-react";

function HeroGraphic() {
  const [position, setPosition] = useState({ x: -15, y: 10 });
  const [isReturning, setIsReturning] = useState(false);
  const cardRef = useRef(null);
  const wasInside = useRef(false);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      const bounds = cardRef.current.getBoundingClientRect();

      const xCenter = bounds.width / 2;
      const yCenter = bounds.height / 2;

      const padding = 200;
      const maxRotation = 25;

      const left = bounds.left - padding;
      const right = bounds.right + padding;
      const top = bounds.top - padding;
      const bottom = bounds.bottom + padding;

      const insideZone =
        e.clientX >= left &&
        e.clientX <= right &&
        e.clientY >= top &&
        e.clientY <= bottom;

      const calculatedX = (e.clientX - bounds.left - xCenter) / 6;
      const calculatedY = ((e.clientY - bounds.top - yCenter) / 6) * -1;

      const x = Math.max(-maxRotation, Math.min(maxRotation, calculatedX));

      const y = Math.max(-maxRotation, Math.min(maxRotation, calculatedY));

      if (insideZone) {
        setIsReturning(false);
        setPosition({ x, y });
        wasInside.current = true;
      } else {
        setIsReturning(true);
        setPosition({ x: -15, y: 10 });
        wasInside.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  //   const handleMouse = (e) => {
  //     const bounds = e.currentTarget.getBoundingClientRect();

  //     const xCenter = bounds.width / 2;
  //     const yCenter = bounds.height / 2;

  //     const x = (e.clientX - bounds.left - xCenter) / 6;
  //     const y = ((e.clientY - bounds.top - yCenter) / 6) * -1;

  //     setPosition({ x, y });
  //   };

  return (
    <>
      {/* <div style={{ position: "absolute", left: 500, top: 100 }}>
        <p>x: {position.x}</p>
        <p>y: {position.y}</p>
      </div> */}
      <div ref={cardRef} className="scene">
        <div
          className={isReturning ? "graphic returning" : "graphic"}
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
