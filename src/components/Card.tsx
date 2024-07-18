import { cn } from "../lib/utils";

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shadow-sm border rounded-lg p-6 mb-2 bg-white overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
