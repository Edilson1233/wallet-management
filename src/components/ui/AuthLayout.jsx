export default function AuthLayout({ title, subtitle, children, footerText, footerActionText, onFooterAction }) {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-slate-50">
         

                {/* Cabeçalho com o gradiente teal (ajustado para simular as curvas da imagem) */}
                <div className="h-56 bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500">
                 
                </div>

                {/* Conteúdo Principal */}
                <div className="px-6 mt-4 flex-1 flex flex-col z-10">
                    <h1 className="text-[32px] font-semibold text-gray-900 mb-2">{title}</h1>
                    <p className="text-[15px] text-gray-600 mb-6 leading-snug pr-4">{subtitle}</p>

                    <div className="flex-1 flex flex-col justify-between">
                        <div>{children}</div>

                        {/* Rodapé */}
                        <div className="py-6 text-center text-sm text-gray-600">
                            {footerText}{" "}
                            <button
                                type="button"
                                onClick={onFooterAction}
                                className="font-bold text-teal-800"
                            >
                                {footerActionText}
                            </button>
                        </div>
                    </div>
                </div>

              
           
        </div>
    );
}