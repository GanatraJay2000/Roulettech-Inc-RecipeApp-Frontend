import { cn } from "../lib/utils";

function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("md:w-1/3 md:mx-auto m-5 md:my-10", className)}>
      {children}
    </div>
  );
}

export default Wrapper;
