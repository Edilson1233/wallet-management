import { ChevronRight } from "lucide-react";
import Avatar from "./Avatar";

export default function ContactListItem({ contact }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 py-2.5 text-left  hover:bg-slate-50"
    >
      <Avatar initials={contact.initials} colorClass={contact.color} />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">
          {contact.name}
        </p>
        <p className="text-xs text-slate-500">{contact.phone}</p>
      </div>

      <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
    </button>
  );
}