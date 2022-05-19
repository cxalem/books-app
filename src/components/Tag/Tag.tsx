import React from "react";

type Props = {
    children: React.ReactNode;
};

const Tag: React.FC<Props> = ({ children }) => {
  return (
      <span className=" text-purple-300 text-xs px-2 py-1 bg-purple-500 bg-opacity-30 rounded-md">
          {children}
      </span>
  );
};

export default Tag;