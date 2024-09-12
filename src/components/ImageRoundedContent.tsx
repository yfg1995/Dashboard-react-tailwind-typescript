import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";
import { useDropdownActiveState } from "../zustand/useDropdownActiveState";

export interface IImageRoundedContent extends PropsWithChildren {
  imgSrc: string;
  altSrc?: string;
  className?: string;
}

export const ImageRoundedContent: FC<IImageRoundedContent> = ({
  imgSrc,
  altSrc,
  className,
  children,
}) => {
  const { isActive } = useDropdownActiveState();

  return (
    <>
      <div
        className={cn(
          "flex items-center overflow-hidden w-10 h-10 rounded-full lg:mx-0",
          className,
          isActive ? "mx-0" : "md:mx-auto"
        )}
      >
        <img src={imgSrc} alt={altSrc} />
      </div>

      {children}
    </>
  );
};
