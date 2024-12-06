import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AllCampaign from "../Components/AllCampaign/AllCampaign";
import MyCampaign from "../Components/MyCampaign/MyCampaign";
import AddNewCamp from "../Components/AddNewCamp/AddNewCamp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import Signin from "../Components/SignIn/Signin";
import RegisterPage from "../Components/RegisterPage/RegisterPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/campaigns",
                element: <AllCampaign />,
                loader: () => fetch('https://b10-a10-server-side-noorjahan220.vercel.app/addCampaign')
            },
            {
                path: "/myCampaign",
                element: <MyCampaign />
            },
            {
                path: "/addCampaign",
                element: <AddNewCamp />,
               
            },
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: "/campaign/:id",
                element: <DetailsPage/>,
                loader:({params}) => fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/${params.id}`)
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },

        ]

    }
])


export default router;