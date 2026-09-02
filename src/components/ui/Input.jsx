export default function Input({label, type="text", placeholder, minlength}) {
return(<div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm text-gray-700">{label}</label>
    <input
    type={type}
    placeholder={placeholder}
    minLength={minlength}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-700 text-sm"
    required/>

</div>);

}