import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/ui/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function LoginScreen() {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title="Login"
            subtitle="Por favor, insira suas credenciais para acessar sua conta."
            footerText="Não tem uma conta?"
            footerActionText="Registar-se"
            onFooterAction={() => navigate("/signup")} // Vai para a rota de registo
        >
            <div className="flex flex-col gap-4">

                <Input label="Email"
                    type="email"
                    placeholder="Insira seu Email" />

                <Input label="Password"
                    type="password"
                    placeholder="Insira seu password" />

                <div className="mt-4">
                    <Button type="submit">{"Continuar"}</Button>
                </div>
            </div>
        </AuthLayout>
    );


}