import type { IProject } from "@/types/interfaces";
import Badge from "./ui/badge";
import { Button } from "./ui/button";
import { WobbleCard } from "./ui/wobble-card";
import { IconExternalLink } from "@tabler/icons-react";

interface IProps {
  project: IProject;
}

const ProjectCard: React.FC<IProps> = ({ project }) => {
  return (
    <WobbleCard
      containerClassName="group h-full"
      className="flex flex-col h-full"
    >
      {/* img */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.img_url}
          alt={project.title}
          className="rounded-t-lg h-full w-full object-cover"
        />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        {/* description */}
        <div className="flex justify-between">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {project.githubBackLink && (
            <a href={project.githubBackLink} target="_blank">
              <Button
                className={"w-full text-muted-foreground text-base p-0"}
                variant={"link"}
              >
                Backend GitHub
                <IconExternalLink stroke={2} className="-mt-0.5" />
              </Button>
            </a>
          )}
        </div>
        <p className="text-muted-foreground mb-3">{project.description}</p>

        {/* skills */}
        <div className="flex gap-1.5 mb-3 flex-wrap">
          {project.technologies.map((item) => (
            <Badge
              className="bg-secondary/50 dark:bg-secondary/80 text-secondary-foreground"
              key={item}
            >
              {item}
            </Badge>
          ))}
        </div>

        {/* /links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-auto">
          <a href={project.githubLink} target="_blank" className="flex-1">
            <Button variant={"outline"} className={"w-full"}>
              GitHub
            </Button>
          </a>
          <a href={project.demoLink} target="_blank" className="flex-1">
            <Button className={"w-full"}>Demo</Button>
          </a>
        </div>
      </div>
    </WobbleCard>
  );
};

export default ProjectCard;
