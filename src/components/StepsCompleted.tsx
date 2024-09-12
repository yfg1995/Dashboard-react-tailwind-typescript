import { FC, useEffect, useRef } from "react";

type TStepsCompleted = {
  completedTasks: number;
};

export const StepsCompleted: FC<TStepsCompleted> = ({ completedTasks }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    setTimeout(() => {
      if (ref.current) {
        ref.current.style.setProperty("--steps-completed", `${completedTasks}`);
      }
    }, 200);
  }, [ref, completedTasks]);

  return <div ref={ref} className="steps-completed" />;
};
