import React, { type ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Badge: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={`rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      <span className="capitalize">{children}</span>
    </div>
  );
};

export default Badge;
