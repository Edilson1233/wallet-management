export default function ServicesItem({icon:Icon, label, color}){

    const colorStyles = {

        orange: "border-amber-300 bg-amber-50/50 text-amber-600",
        pink:"border-pink-300 bg-pink-50/50 text-pink-600",
        purple: "border-purple bg-purple-50/50 text-purple-600",
        blue:"border-sky-300 bg-sky-50/50 text-sky-600",
        green: "border-emerald-300 bg-emerald-50/50 text-emerald-600",
        indigo: "border-indigo-300 bg-indigo-50/50 text-indigo-600",
        red: "border-red-300 bg-red-50/50 text-red-600",
        teal: "border-teal-300 bg-teal-50/50 text-teal-600"
    };

    const selectedColor = colorStyles[color] || colorStyles.teal;



    return(
        <button type="button" className="flex flex-col gap-2 items-center">
             <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${selectedColor}`}>
                            <Icon className="w-4 h-4 fill-current "/>
                        </div>
                        
                        <span className="text-xs font-medium text-gray-600">{label}</span>


        </button>

    )
}