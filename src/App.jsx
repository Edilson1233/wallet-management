import TransferScreen from "./features/transfer/TransferScreen";
import PinScreen from "./features/security/PinScreen";
import LoginScreen from "./features/login/LoginScreen";
import TransferSuccessScreen from "./features/transfer/TransferSuccessScreen";
import TransferReviewScreen from "./features/transfer/TransferReviewScreen";
import InputAmountScreen from "./features/transfer/InputAmountScreen";
import ContactListScreen from "./features/transfer/ContactListScreen";
import ActivityScreen from "./features/activity/ActivityScreen";
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
      {path:"/transfer/success", element: <TransferSuccessScreen />},
      {path:"/transfer/review", element: <TransferReviewScreen />},
      {path:"/transfer/amount", element: <InputAmountScreen />},
      {path:"/transfer/contacts", element: <ContactListScreen />},
      {path:"/transfer/activity", element: <ActivityScreen />},
      {path:"/pin", element: <PinScreen />}
    ])
  return <RouterProvider router={router} />;
  
}

export default App;
