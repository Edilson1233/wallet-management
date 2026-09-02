import TransferScreen from "./features/transfer/TransferScreen";
import PinScreen from "./features/security/PinScreen";
import LoginScreen from "./features/login/LoginScreen";
import SignUpScreen from "./features/signUp/SignUpScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeScreen from "./features/home/HomeScreen";



function App() {
    const router = createBrowserRouter([
      {path: "/", element: <SignUpScreen />,
        errorElement: <div>404 Página não Encontrada</div>
      },
      {path:"/login", element: <LoginScreen />},
      {path: "/signup", element: <SignUpScreen />},
      {path: "home", element: <HomeScreen />},
      {path:"/transfer", element: <TransferScreen />},
      {path:"/pin", element: <PinScreen />}
    ])
  return <RouterProvider router={router} />;
  
}

export default App;
