import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

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
  return (
    <>
      <div
        className={cn(
          "flex items-center overflow-hidden w-10 h-10 rounded-full",
          className
        )}
      >
        <img src={imgSrc} alt={altSrc} />
      </div>

      <div>{children}</div>
    </>
  );
};
