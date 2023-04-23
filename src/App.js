import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import {Outlet, createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import ChannelInfo from "./components/ChannelInfo";
import History from "./components/History";
import Subscription from "./components/Subscription";

//Have you made sure to put your head component inside the Router
const appRouter=createBrowserRouter([
  {
    path:"/",
    element: (
      <>
        <Head/>
        <Body/>
      </>
    ),
    children:[
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },
      //Dynamic Routing uding query params and hook useSearchParams()
      {
        path:"/results",
        element: <SearchResults/>,
      },
      {
        path:"/channel/:id",
        element:<ChannelInfo/>
      }
      ,{
        path:"/history",
        element: <History/>
      },
      {
        path:"/subscription",
        element:<Subscription/>
      },
      {
        path:"/shorts",
        element: <SearchResults/>
      }
    ]
  }
])



function App() {
  return (
    <Provider store={store}>
        <div className="relative top-[120px]">
          <RouterProvider router={appRouter}/>
        </div> 
    </Provider>

  );
}

export default App;

/**
       * Head
       * Body
       *  SideBar
       *    menu items
       *  Main conatiner
        *  btnList 
        *  video container
        *    video cards
       */