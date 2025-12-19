import React from "react";

interface IProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<IProps> = ({ title, description }) => {
  return (
    <div className="text-center flex flex-col gap-y-3 mb-10">
      <h2 className="text-2xl lg:text-4xl capitalize font-bold text-foreground">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground lg:w-[70%] xl:w-[60%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
