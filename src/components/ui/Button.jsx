export default function Button({children}){

    return(
        <button type="submit"
         className="w-full py-3.5 rounded-full font-medium text-sm bg-slate-300 text-slate-500">
            {children}

        </button>
    );

}