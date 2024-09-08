import { FC } from "react";
import { ChevronArrowSvg } from "../svg/ChevronArrowSvg";
import { cn } from "../utils/utils";

export interface ISortTextArrow {
  isSorted: boolean;
  title: string;
  classNameWrap?: string;
  classNameText?: string;
  onClick?: () => void;
}

export const SortTextArrow: FC<ISortTextArrow> = ({
  isSorted,
  title,
  classNameWrap,
  classNameText,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 cursor-pointer select-none",
        classNameWrap
      )}
      onClick={onClick}
    >
      <div className={cn("", classNameText)}>{title}</div>

      {isSorted ? (
        <ChevronArrowSvg
          width="12"
          height="12"
          strokeColor="var(--clr-text-grey)"
          strokeWidth="2.5"
          className="rotate-90"
        />
      ) : (
        <ChevronArrowSvg
          width="12"
          height="12"
          strokeColor="var(--clr-text-grey)"
          strokeWidth="2.5"
          className="-rotate-90"
        />
      )}
    </div>
  );
};
