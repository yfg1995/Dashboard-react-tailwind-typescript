import { useState, FC } from "react";
import { cn } from "../utils/utils";
import { ChevronArrowSvg } from "../svg/ChevronArrowSvg";

export type TSelectOption = {
  id: string;
  value: string;
};

export interface ISelect {
  options: TSelectOption[];
  isEmptyInit?: boolean;
  defaultSelectedId?: string;
  className?: string;
  onSelect?: (id: string) => void;
  onSave?: (value: string) => void;
  disabled?: boolean;
}

export const SelectDropdown: FC<ISelect> = ({
  options,
  defaultSelectedId,
  className,
  isEmptyInit,
  disabled = false,
  onSelect,
  onSave,
}) => {
  const [selectedId, setSelectedId] = useState(
    isEmptyInit ? undefined || null : defaultSelectedId || options[0]?.id
  );
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (id: string) => () => {
    setSelectedId(id);
    onSelect?.(id);
    setToggle(false);
    onSave?.(options.find((option) => option.id === id)?.value || "");
  };

  const itemHeight = 50;

  return (
    <div
      className={cn(
        "relative cursor-pointer",
        disabled && "opacity-50 pointer-events-none",
        isEmptyInit && "pointer-events-none",
        className
      )}
    >
      <div
        className={cn(
          "relative flex justify-between gap-2 text-brandTextGray bg-brandCharcoalGrey items-center p-2 w-full select-none text-center rounded-lg",
          className
        )}
        onClick={handleToggle}
      >
        <span>
          {options.find((option) => option.id === selectedId)?.value ||
            defaultSelectedId}
        </span>

        <ChevronArrowSvg
          width="16"
          height="16"
          strokeColor="var(--clr-text-grey)"
          className={cn("mt-0.5", toggle ? "rotate-180" : "")}
        />
      </div>

      {/* {toggle && (
        <div
          className={cn(
            "absolute top-full left-0 border bg-white border-brandStrokeGray rounded-lg overflow-x-hidden overflow-y-auto max-h-[var(--item-height)] divide-y divide-y-brandStrokeGray text-center px-4 w-full",
            className
          )}
          style={
            {
              "--item-height": `${itemHeight * 5}px`,
              zIndex: 20,
            } as CSSProperties
          }
        >
          {options.map((option) => (
            <div
              className="flex justify-center items-center w-full bg-white cursor-pointer hover:text-brandStrokeGray select-none duration-300 ease-in-out"
              key={option.id}
              style={{
                color: selectedId === option.id ? "var(--clr-stroke-gray)" : "",
                height: `${itemHeight}px`,
              }}
              onClick={handleSelect(option.id)}
            >
              {option.value}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};
