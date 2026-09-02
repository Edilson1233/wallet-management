export default function TransferOptionButton({ icon: Icon, label, gradientClass }) {
  return (
    <button
      type="button"
      className={`flex flex-1 flex-col items-start gap-6 rounded-xl p-4 text-left text-white shadow-md transition-transform active:scale-[0.98] ${gradientClass}`}
    >
      <span className="flex h-9 w-9 items-center justify-center">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}