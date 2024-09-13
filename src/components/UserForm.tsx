import { FC } from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { ImageRoundedContent } from "./ImageRoundedContent";
import { UploadSvg } from "../svg/UploadSvg";
import { TrashCanSvg } from "../svg/TrashCanSvg";

export interface IUserForm {}

export const UserForm: FC<IUserForm> = () => {
  const onSubmit = () => {};
  return (
    <div className="flex justify-center gap-8 p-8">
      <div className="w-fit">
        <ImageRoundedContent
          imgSrc="/users/user.jpg"
          altSrc="user-profile"
          className="w-32 h-32"
        />

        <div className="flex flex-col mx-auto [&>*]:flex [&>*]:items-center [&>*]:justify-between mt-6 space-y-2 max-w-[100px] w-full [&>*]:cursor-pointer">
          <div>
            <span>Upload</span>
            <UploadSvg />
          </div>

          <div>
            <span>Remove</span>
            <TrashCanSvg />
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-12 w-full">
        <Label title="First Name" htmlFor="firstname">
          <Input id="firstname" className="outline-none" />
        </Label>

        <Label title="Last Name" htmlFor="lastname">
          <Input id="lastname" className="outline-none" />
        </Label>

        <Label title="Password" htmlFor="password">
          <Input id="password" className="outline-none" />
        </Label>

        <Label title="Password" htmlFor="password-match">
          <Input id="password-match" className="outline-none" />
        </Label>

        <Label title="Position" htmlFor="position">
          <Input id="position" className="outline-none" />
        </Label>

        <button className="flex mx-auto bg-brandCharcoalGrey px-8 py-2 rounded-lg font-medium">
          Save Changes
        </button>
      </form>
    </div>
  );
};
