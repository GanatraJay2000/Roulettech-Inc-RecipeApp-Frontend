import { cn } from "../lib/utils";

function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("lg:w-1/3 md:w-1/2 md:mx-auto m-5 md:my-10", className)}>
      {children}
    </div>
  );
}

export default Wrapper;
