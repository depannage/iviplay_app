import { RouterProvider } from 'react-router-dom';
import rootsApp from './roots';
// import { Toaster } from 'react-hot-toast';
// import AppContexProvider from './contexts/AppContext';
import {Providers} from './config/providers/providers'

const App = () => {
    return (
        <Providers>
            <div>
                <RouterProvider router={rootsApp} />
                {/*<Toaster />*/}
            </div>
        </Providers>
    )
}

export default App