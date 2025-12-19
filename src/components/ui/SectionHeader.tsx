import React from "react";

interface IProps {
  title: string;
  description: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader: React.FC<IProps> = ({
  title,
  description,
  headingClassName,
  descriptionClassName,
}) => {
  return (
    <div className="text-center flex flex-col gap-y-3 mb-10">
      <h2
        className={`text-3xl lg:text-4xl capitalize font-bold text-foreground ${headingClassName}`}
      >
        {title}
      </h2>
      <p
        className={`text-lg text-muted-foreground lg:w-[70%] xl:w-[60%] mx-auto ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
