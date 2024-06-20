import React from "react";

import { cn } from "@/lib/utils";

type JobInfoPropsTypes = {
  children: React.ReactNode;
  className?: string;
};

function JobInfo({ children, className }: JobInfoPropsTypes) {
  return (
    <p className={cn("flex items-center gap-1.5", className)}>{children}</p>
  );
}

export default JobInfo;
