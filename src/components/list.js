export default function List({ children, className }) {
  return (
    <ul className={`flex justify-center items-center gap-6 ${className} `}>
      {children}
    </ul>
  );
}
