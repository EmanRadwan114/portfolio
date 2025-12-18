import Badge from "./badge";
import { Button } from "./button";
import { WobbleCard } from "./wobble-card";

export function ProjectCard() {
  return (
    <WobbleCard containerClassName="group">
      {/* img */}
      <div className="h-42 overflow-hidden">
        <img
          src="https://saifmohamedsv.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FLDrvgvCM%2Fnzmly.png&w=640&q=75"
          alt="img"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-5">
        {/* description */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          No shirt, no shoes, no weapons.
        </h3>
        <p className="text-muted-foreground mb-2">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
        {/* skills */}
        <div className="flex gap-2 mb-3">
          <Badge className="bg-secondary/80 text-secondary-foreground">
            HTML
          </Badge>
        </div>

        {/* /links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Button className="flex-1" variant={"outline"}>
            Github
          </Button>
          <Button className="flex-1">Live Demo</Button>
        </div>
      </div>
    </WobbleCard>
  );
}
