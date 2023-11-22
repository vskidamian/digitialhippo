import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return <div className={cn("mx-auto w-full max-w-sceen-xl px-2.5 md:px-20", className)}>{children}</div>;
};

type MaxWidthWrapperProps = {
  className?: string;
  children: ReactNode;
};

export default MaxWidthWrapper;
