import { FC } from "react";

export interface IErrorPage {}

export const ErrorPage: FC<IErrorPage> = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};
