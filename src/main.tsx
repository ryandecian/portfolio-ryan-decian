import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*Les importation de page*/
import HomePage from './pages/HomePage.tsx';
import About from "./pages/About.tsx"
import Grid from "./pages/Grid.tsx"

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

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
