import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*Les importation de page*/
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Grid from "./pages/Grid.tsx"

const router = createBrowserRouter([
    {
     element: <App />,
     children: [
       {
         path: "/",
         element: <Home/>,
       },
       {
         path: "/about",
         element: <About/>,
       },
       {
         path: "/grid",
         element: <Grid/>,
       },
      ]
    },
  ]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
