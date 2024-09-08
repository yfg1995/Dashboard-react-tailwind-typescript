import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";

export interface IProgressBar {
  progress: number;
}

export const ProgressBar: FC<IProgressBar> = ({ progress }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          ease: "none",
        })
        .to(".number-progress", {
          scaleX: progress * 0.01,
          duration: 1,
        })

        .to(
          ".number-counter-nav",
          {
            innerText: progress,
            snap: {
              innerText: 1,
            },
            duration: 1,
          },
          "<"
        );
    },
    { scope: progressBarRef }
  );

  return (
    <div ref={progressBarRef} className="flex flex-col items-end gap-2">
      <span className="text-xs">
        <span className="number-counter-nav">0</span>%
      </span>

      <div className="w-full bg-brandLavandedGray rounded-full h-2 overflow-hidden bg-brandCharcoalGrey">
        <div className="number-progress h-full w-full scale-x-0 origin-left rounded-full bg-white" />
      </div>
    </div>
  );
};
