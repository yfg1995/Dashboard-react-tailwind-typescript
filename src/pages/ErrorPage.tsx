import { FC } from "react";

export interface IErrorPage {}

export const ErrorPage: FC<IErrorPage> = () => {
  return (
    <div className="bg-brandCharcoalBlack flex flex-col gap-4 place-content-center font-bold text-center w-full h-screen">
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
    </div>
  );
};
