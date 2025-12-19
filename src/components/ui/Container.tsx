import React, { type ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`container px-4 sm:px-6 md:px-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
