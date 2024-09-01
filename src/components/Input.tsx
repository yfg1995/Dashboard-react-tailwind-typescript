import { useState, FC, ChangeEvent } from "react";
import { cn } from "../utils/utils";

export interface IInput {
  placeholder?: string;
  value?: string | number;
  className?: string;
  id?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onSave?: (value: string) => void;
}

export const Input: FC<IInput> = ({
  placeholder,
  value,
  className,
  id,
  autoFocus = false,
  disabled,
  onChange,
  onSave,
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
    onSave?.(newValue);
  };

  return (
    <input
      id={id}
      type="text"
      className={cn(
        "focus:outline-none w-full px-2 py-2.5 h-full bg-brandCharcoalBlack rounded-lg",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      value={inputValue}
      onChange={onInputChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};
