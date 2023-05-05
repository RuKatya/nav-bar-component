import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../View/Main/Main';
import About from '../View/About/About';
import More from '../View/More/More';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "more",
                element: <More />
            }
        ]
    }
]);

const RouterPage: FC = () => {
    return <RouterProvider router={router} />
}

export default RouterPage
