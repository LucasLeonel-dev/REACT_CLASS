import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskPage from './pages/taskPage.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/", //oque fica na url como pagina inicial 
    element: <App />, //aqui vc tira o hello world e coloca isso, pois é a pagina incial
    //oq vc colocar no elemente vai aparecer como pagina inicial  
  },
  {
    path: "/task",
    element: <TaskPage />, //deu erro pq tava com letra minuscula, n pode
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/*aqui antes era o App*/}
  </StrictMode>,
)
