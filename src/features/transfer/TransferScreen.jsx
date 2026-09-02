import { ArrowLeft, Landmark, Wallet } from "lucide-react";
import Card from "../../components/ui/Card";
import TransferOptionButton from "../../components/ui/TransferOptionButton";
import ContactListItem from "../../components/ui/ContactListItem";
import { frequentContacts } from "./data";

export default function TransferScreen() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-slate-50">
            {/* Header — gradiente escuro, igual à referência visual */}
            <header className="flex items-center gap-3 bg-gradient-to-b from-teal-900 to-teal-600 px-4 pb-10 pt-5 space-x-28 text-white">
                <button
                    type="button"
                    aria-label="Voltar"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
                >
                    <ArrowLeft className="h-4  w-4" aria-hidden="" />
                </button>
                <h1 className="text-base ">Transferência</h1>
            </header>


            <main className=" -mt-4 flex-1 space-y-4 px-4 pb-8">
                <Card title="Opção de Transferência">
                    <div className="flex gap-3">
                        <TransferOptionButton
                            icon={Landmark}
                            label="Transferência Bancária"
                            gradientClass="bg-gradient-to-br from-teal-600 to-teal-900"
                        />
                        <TransferOptionButton
                            icon={Wallet}
                            label="E-Wallet"
                            gradientClass="bg-gradient-to-br from-indigo-600 to-violet-800"
                        />
                    </div>
                </Card>

                <Card
                    title="Transferências Frequentes"
                    action={
                        <span className="text-xs font-medium text-teal-700">Ver Todas</span>
                    }
                >
                    <div className="divide-y divide-slate-100">
                        {frequentContacts.map((contact) => (
                            <ContactListItem key={contact.id} contact={contact} />
                        ))}
                    </div>
                </Card>
            </main>
        </div>
    );
}