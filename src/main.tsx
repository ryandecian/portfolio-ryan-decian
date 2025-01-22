import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from './contexts/DataContexte.tsx';
import { HelmetProvider } from 'react-helmet-async';

/*Les importation de page*/
import HomePage from './pages/HomePage.tsx';
import Projets from "./pages/Projets.tsx"
import Grid from "./pages/Grid.tsx"
import BilleM2 from './components/CanvasRoot/BilleM2/BilleM2.tsx';
import Style_fond from './pages/Style_fond.tsx';

const router = createBrowserRouter([
    {
     element: <App />,
     children: [
       {
         path: "/",
         element: <HomePage />,
       },
       {
         path: "/home",
         element: <HomePage />,
       },
       {
         path: "/projets",
         element: <Projets />,
       },
       {
         path: "/experiences",
         element: <Grid />,
       },
       {
         path: "/canvas",
         element: <Style_fond />,
       },
      ]
    },
  ]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <DataProvider>
      <RouterProvider router={router}/>
    </DataProvider>
  </HelmetProvider>
)
