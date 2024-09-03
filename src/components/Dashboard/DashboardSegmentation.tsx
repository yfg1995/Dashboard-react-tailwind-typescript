import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { SegmentationCardBgSvg } from "../../svg/SegmentationCardBgSvg";
import { SelectDropdown } from "../SelectDropdown";
import { formatNumberWithCommas } from "../../helpers/helpers";

const allUsers = [
  {
    title: "Not Specified",
    textColor: "#363636",
    value: 800,
  },
  {
    title: "Male",
    textColor: "#818BB1",
    value: 441,
  },
  {
    title: "Female",
    textColor: "#2C365D",
    value: 233,
  },
  {
    title: "Other",
    textColor: "#2F49D1",
    value: 126,
  },
];

export interface IDashboardSegmentation
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSegmentation: FC<IDashboardSegmentation> = (props) => {
  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-lg-height)]">
        <div className="flex items-center justify-between">
          <Title title="Segmentation" />

          <TwoDotsVerticalSvg
            width="12"
            height="12"
            strokeColor="var(--clr-text-grey)"
            className="mt-1.5"
          />
        </div>

        <div className="text-brandTextGray mt-3">All users</div>

        <ul className="[&>*]:flex [&>*]:items-center [&>*]:justify-between [&>*]:relative [&>*]:space-y-2 mb-5">
          {allUsers.map((user, index) => (
            <li key={user.title}>
              <div style={{ color: user.textColor }}>{user.title}</div>

              <div className="flex items-center gap-4 mr-24">
                <span style={{ color: user.textColor }}>
                  {formatNumberWithCommas(user.value)}
                </span>
                <div className="w-12 h-0.5 bg-brandTextGray" />

                {index === allUsers.length - 1 ? (
                  <div
                    className="absolute top-0 right-0 w-20 h-28 rounded-lg overflow-hidden"
                    style={{ background: user.textColor }}
                  >
                    <SegmentationCardBgSvg />
                  </div>
                ) : (
                  <div
                    className="absolute top-0 right-0 w-20 h-28 rounded-lg overflow-hidden"
                    style={{ background: user.textColor }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>

        <SelectDropdown
          options={[]}
          defaultSelectedId="Details"
          className="w-36"
        />
      </ContainerBorderRounded>
    </div>
  );
};
