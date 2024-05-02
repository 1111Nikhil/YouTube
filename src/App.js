import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';

const approute = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
{
  path:'/watch',
  element:<WatchVideo/>
}]
}])

function App() {
  return (
    <Provider store={appStore}>
    <div className='bg-black'>
      <Header/>
    <RouterProvider router={approute}/>  
    </div>
    </Provider>
  );
}

export default App;
