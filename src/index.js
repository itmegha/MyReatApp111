import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Component/App';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
// import About from './Pages/About';
import ProductDetail from './Pages/ProductDetail';
import ContactUs from './Pages/ContactUs1';
import ContextProvider from './Contexts/ThemeContext';

const About = React.lazy(()=>import('./Pages/About'));

const router  = createBrowserRouter([
     {
        path:"/",
        element:<App />,
        errorElement:<Error />,
        

        children:[
            { path:"/home",
                element:<Home />},

                { path:"/contact",
                    element:<Contact />},

                    { path:"/about",
                        element:
                        <React.Suspense>
                            <About />
                        </React.Suspense>
                        },

                        { path:"/product",
                            element:<Product />}
                            ,
                            { path:"/products/:pid",
                                element:<ProductDetail />},

                                { path:"/contactus",
                                    element:<ContactUs />},

                                    { path:"*",//wild card path
                                        element:<About />}
        ]
     }
     
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ContextProvider>
         <RouterProvider router = {router}/>
    </ContextProvider>
    
);


