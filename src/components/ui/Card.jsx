export default function Card({ title, action, children, className = "" }) {
  return (
    <section className={`rounded-2xl bg-white p-4 shadow-sm ${className}`}>
      {(title || action) && (
        <header className="mb-3 flex items-center justify-between">
          {title && (
            <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
          )}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}