import { CSSProperties, FC, useEffect, useState } from "react";

interface ISatisfactionProgress {
  progress: number;
}

export const SatisfactionProgress: FC<ISatisfactionProgress> = ({
  progress,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min(elapsedTime * progress, progress);
      setAnimatedProgress(newProgress);

      if (newProgress < progress) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [progress]);

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative overflow-hidden w-full"
        style={
          {
            width: "240px",
            height: "calc(240px * 0.66)",
            "--progress": animatedProgress * 0.01,
            "--w": "240px",
            "--cW": "12px",
            "--tr": "all 1.3s linear",
          } as CSSProperties
        }
      >
        <div
          className="absolute z-[2] bg-white rounded-full"
          style={{
            width: "var(--cW)",
            height: "var(--cW)",
            bottom: 0,
            left: 0,
            transformOrigin: "calc(var(--w) * 0.5) var(--cW)",
            transform: `rotate(calc(180deg * ${animatedProgress * 0.01}))`,
            transition: "var(--tr)",
          }}
        ></div>
        <div
          className="absolute z-[1] rounded-full shadow-[inset_0_0_0_20px_var(--clr-blue)]"
          style={{
            width: "calc(var(--w) - var(--cW) * 0.5)",
            height: "calc(var(--w) - var(--cW) * 0.5)",
            top: "calc(100% - var(--w) * 0.5 + calc(var(--cW) * 0.25))",
            left: "calc(var(--cW) * 0.25)",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            transform: `rotate(calc(-180deg * (1 - ${
              animatedProgress * 0.01
            })))`,
            transition: "var(--tr)",
          }}
        ></div>
      </div>
    </div>
  );
};
