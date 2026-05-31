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
  const targetRef = useRef({ x: -15, y: 10 });
  const animationRef = useRef(null);

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
        targetRef.current = { x, y };
      } else {
        setIsReturning(true);
        targetRef.current = { x: -15, y: 10 };
      }
    };

    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.25,
        y: prev.y + (targetRef.current.y - prev.y) * 0.25,
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <>
      <div ref={cardRef} className="scene">
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
