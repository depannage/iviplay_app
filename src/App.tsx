import { RouterProvider } from 'react-router-dom';
import rootsApp from './roots';

const App = () => {
    return (
        <div>
            <RouterProvider router={rootsApp} />
        </div>
    )
}

export default App