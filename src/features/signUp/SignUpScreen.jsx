import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/ui/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function SignUpScreen() {
    const navigate = useNavigate();


    return (
        <AuthLayout
            title="Registar-se"
            subtitle="Por favor, preencha o formulário abaixo para criar uma conta."
            footerText="Já tem uma conta?"
            footerActionText="Login"
            onFooterAction={() => navigate("/login")}
        >
            <form action="" method="POST" className="flex flex-col gap-4">

                <Input label="Nome"
                    type="text"
                    placeholder="Insira seu nome completo" />

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Insira o seu Email"

                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="******"
                    minlength="8"

                />


                <div className="mt-4">
                    <Button type="submit">
                        {"Continuar"}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
