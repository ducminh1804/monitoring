import React, { useState } from "react";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";
import classNames from "classnames";

export default function ValveCustom({
  id,
  handleActive,
  edit,
  name,
  border = true,
}) {
  const [enable, setEnabled] = useState(false);
  const toggle = () => {
    if (!edit) return;
    const newState = !enable;
    setEnabled(newState);
    handleActive?.(id, name,newState);
    // setEnabled((prev) => {
    //   handleActive?.(id, !prev);
    //   console.log("object");
    //   return !prev;
    // });
  };
  return (
    <div
      className={classNames(
        "w-full rounded p-2 flex flex-col items-center gap-2",
        {
          "border": border,
        }
      )}
    >
      <div onClick={toggle} className="w-[80%] ">
        <img src={enable ? val_on : val_off} alt="" />
      </div>
      <span className="font-bold text-[16px]">{name} </span>
    </div>
  );
}
