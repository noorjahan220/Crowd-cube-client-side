import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AllCampaign from "../Components/AllCampaign/AllCampaign";
import MyCampaign from "../Components/MyCampaign/MyCampaign";
import AddNewCamp from "../Components/AddNewCamp/AddNewCamp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DetailsPage from "../Components/DetailsPage/DetailsPage";



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
                loader:() => fetch('http://localhost:5000/addCampaign')
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
                loader:({params}) => fetch(`http://localhost:5000/addCampaign/${params.id}`)
            },


        ]

    }
])


export default router;