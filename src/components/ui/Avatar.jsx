export default function Avatar({ initials, colorClass }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${colorClass}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}