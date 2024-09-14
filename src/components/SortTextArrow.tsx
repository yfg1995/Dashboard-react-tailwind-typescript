import { FC, useState } from "react";
import { ChevronArrowSvg } from "../svg/ChevronArrowSvg";
import { cn } from "../utils/utils";

export interface ISortTextArrow {
  objectKey: string;
  selectedObjKey: string;
  title: string;
  classNameWrap?: string;
  classNameText?: string;
  onClick?: () => void;
}

export const SortTextArrow: FC<ISortTextArrow> = ({
  objectKey,
  selectedObjKey,
  title,
  classNameWrap,
  classNameText,
  onClick,
}) => {
  const [mode, setMode] = useState(false);

  const onClickHandler = () => {
    setMode((prev) => !prev);
    onClick?.();
  };

  const isRotated = mode && objectKey === selectedObjKey;

  return (
    <div
      className={cn(
        "flex items-center gap-1 cursor-pointer select-none",
        classNameWrap
      )}
      onClick={onClickHandler}
    >
      <div className={classNameText}>{title}</div>

      <ChevronArrowSvg
        width="12"
        height="12"
        strokeColor="var(--clr-charcoal-grey)"
        strokeWidth="2.5"
        className={isRotated ? "rotate-90" : "-rotate-90"}
      />
    </div>
  );
};
