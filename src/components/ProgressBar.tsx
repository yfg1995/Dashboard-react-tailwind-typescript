import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

export interface IProgressBar {
  progress: number;
}

export const ProgressBar: FC<IProgressBar> = ({ progress }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 1,
      });
    }
  }, [progress]);

  return (
    <div className="w-full bg-brandLavandedGray rounded-full h-2 overflow-hidden bg-brandCharcoalGrey">
      <div
        ref={progressBarRef}
        className="h-full rounded-full"
        style={{
          width: "0%",
          background: "white",
        }}
      />
    </div>
  );
};
