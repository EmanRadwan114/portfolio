import React from "react";

const CodeSnippet: React.FC = () => {
  return (
    <div className="border border-border shadow-lg rounded-lg">
      <div className="bg-neutral-300 dark:bg-neutral-900 rounded-t-lg w-full flex gap-3 items-center">
        <div className="flex gap-2 py-5 px-7">
          <span className="inline-block size-3 bg-red-400 rounded-full"></span>
          <span className="inline-block size-3 bg-amber-500 rounded-full"></span>
          <span className="inline-block size-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-muted-foreground">developer.tsx</span>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-b-lg py-5 px-7 w-full text-foreground/80 font-mono">
        <pre className="leading-relaxed">
          <code>
            {`const developer = {
  name: "Eman Radwan",
  role: "Frontend Developer",
  education: "ITI 9-month Graduate",
  linkedin: "Active Member",
  passion: "Learning New Skills",
  goal: "Build Impactful Web Solutions",
  hobbies: [
    "Listening to Podcasts", 
    "Walking", 
  ],
}

export default developer;`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
