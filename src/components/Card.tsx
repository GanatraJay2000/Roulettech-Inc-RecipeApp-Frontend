function Card({ children }: { children: React.ReactNode }) {
  return <div className="shadow-sm border rounded-lg p-6 mb-2">{children}</div>;
}

export default Card;
