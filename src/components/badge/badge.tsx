import React from "react";

type BadgePropsTypes = {
  children: React.ReactNode;
};

function Badge({ children }: BadgePropsTypes) {
  return (
    <span className="rounded border px-2 py-0.5 bg-muted-foreground text-sm font-medium">
      {children}
    </span>
  );
}

export default Badge;
