import React from "react";

const CartIcon = ({
  fill = "none",
  stroke = "currentColor",
  height = "24",
  width = "24",
  strokeWidth = "2",
}) => {
  return (
    <>
      <svg
        fill={fill}
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
        viewBox="0 0 24 24"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    </>
  );
};

export default CartIcon;
