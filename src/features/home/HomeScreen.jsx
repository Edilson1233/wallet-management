import {
    Settings, Eye, CirclePlus, CircleArrowUp, Banknote, Zap, ReceiptText, Smartphone, Droplet,
    GraduationCap, Wifi, LayoutGrid, Activity
} from "lucide-react";
import TransferOptionButton from "../../components/ui/TransferOptionButton";
import Card from "../../components/ui/Card";
import ServicesItem from "../../components/ui/ServicesItem";


export default function HomeScreen() {

    const services = [
        { label: "Electricidade", icon: Zap, color: "orange" },
        { label: "Facturas", icon: ReceiptText, color: "pink" },
        { label: "Crédito", icon: Smartphone, color: "purple" },
        { label: "Água", icon: Droplet, color: "blue" },
        { label: "Educação", icon: GraduationCap, color: "green" },
        { label: "Internet", icon: Wifi, color: "indigo" },
        { label: "Seguros", icon: Activity, color: "red" },
        { label: "Mais", icon: LayoutGrid, color: "teal" }
    ]

    return (

        <div className="mx-auto flex min-h-screen w-full  max-w-[480px] flex-col p-8  bg-gradient-to-tr from-teal-900 via-teal-800 to-teal-600">

            <header className="mt-4 flex justify-between items-center text-white ">
                <div className="">
                    <span className="text-xs text-gray-400">Bom dia, <br /></span>
                    <h1>Edílson Paulo</h1>
                </div>
                <div>
                    <button type="button"
                        aria-label="settings"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                        <Settings className=" h-6 w-6" />
                    </button>
                </div>
            </header>

            <main className="flex flex-col mt-8 gap-8">
                <div className="flex-col text-white">
                    <span className="text-xs text-gray-400">Saldo</span>

                    <div className="flex gap-1">
                        <h1 className=" text-xl font-semibold">$12,732.51</h1>
                        <Eye className="h-8 w-6"/>
                    </div>
                </div>

                <div className="flex gap-3">
                    <TransferOptionButton
                        icon={CirclePlus}
                        label="Depósito"
                        gradientClass="bg-white/10"

                    />

                    <TransferOptionButton
                        icon={CircleArrowUp}
                        label="Transferência"
                        gradientClass="bg-white/10"

                    />

                    <TransferOptionButton
                        icon={Banknote}
                        label="Levantamento"
                        gradientClass="bg-white/10"

                    />

                </div>

                <div>
                    <Card title="Serviços">
                        <div className="grid grid-cols-4 gap-4 mb-3">

                        {services.map((item, index) => (
                            <ServicesItem
                                key={index}
                                label={item.label}
                                icon={item.icon}
                                color={item.color}
                            />
                            
                        )
                        )}
                        </div>
                    </Card>
                </div>
            </main>

        </div>


    )


}