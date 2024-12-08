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
import PrivateRoute from "../routes/PrivateRoute";
import MyDonations from './../Components/MyDonations/MyDonations';
import Update from "../Components/Update/Update";



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
                element: <PrivateRoute><MyCampaign /></PrivateRoute>
            },
            {
                path: "/addCampaign",
                element: <PrivateRoute><AddNewCamp /></PrivateRoute>,

            },
            {
                path: "/donation",
                element: <PrivateRoute><MyDonations /></PrivateRoute>,

            },
            {
                path: "*",
                element: <ErrorPage />
            },
          
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
           
            {
                path: "/campaign/:id",
                element: <PrivateRoute><DetailsPage /></PrivateRoute>,
                loader: ({ params }) =>
                  fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignById/${params.id}`)
              },
              {
                path: "/update/:id",
                element: <PrivateRoute><Update /></PrivateRoute>,
                loader: ({ params }) =>
                  fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignById/${params.id}`)
              },


        ]

    }
])


export default router;