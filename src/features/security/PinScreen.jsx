import { useState } from "react";
import { ArrowLeft, Delete } from "lucide-react";

export default function PinScreen() {
    const [pin, setPin] = useState("");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "delete"];

    return (
        <div className="mx-auto flex max-w-[480px] bg-slate-100 flex-col min-h-screen w-full">
            <header className="flex items-center p-4">
                <button type="button"
                    aria-label="voltar"
                    className="rounded-full bg-white gap-3 h-9 w-9 flex items-center justify-center">
                    <ArrowLeft />
                </button> 
            </header>

            <main className="flex flex-col items-center justify-center pt-20 space-y-1">
                <h1 className="text-xl font-bold">Insira seu PIN</h1>
                <p className="text-sm text-slate-600">Por favor, digite seu PIN para continuar.</p>


                <div className="flex gap-10 pt-10">
                    {Array(6).fill(null).map((_, index) => (
                        <div key={index} className={`flex h-5 w-5 rounded-full ${index < pin.length ? "bg-slate-900" : "bg-slate-300"}`}></div>
                    ))}
                </div>

                <div className="flex pt-40 flex-col items-center justify-center">
                    <h1 className="text-sm text-green-400 font-bold">Esqueceu seu PIN?</h1>
                    <div className="grid grid-cols-3 gap-4 pt-7 ">

                        {numbers.map((item, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`h-24 w-34 bg-white flex items-center justify-center text-lg font-bold ${item === "" ? "invisible" : ""
                                    }`}
                                onClick={() => {
                                    if (item === "delete") {
                                        setPin(pin.slice(0, -1));
                                    } else {
                                        if (pin.length < 6) {
                                            setPin(pin + item);
                                        }
                                    }
                                }}
                            >
                                {item === "delete"
                                    ? <Delete className="h-6 w-6" />
                                    : item}
                            </button>
                        ))}
                    </div>
                </div>

            </main>


        </div>


    );
}

