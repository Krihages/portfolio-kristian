export default function Wrapper({
  children,
  section = true,
  className,
}: {
  children: React.ReactNode;
  section?: boolean;
  className?: string;
}) {
  if (section) {
    return (
      <section className={`max-w-5xl mx-auto px-4 py-10  ${className}`}>
        {children}
      </section>
    );
  }
  return (
    <div className={`max-w-5xl mx-auto px-4 py-10 ${className}`}>
      {children}
    </div>
  );
}
