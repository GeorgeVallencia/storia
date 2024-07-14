import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root';
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ProductsPage from "./pages/ProductsPage";
import SignInPage from "./pages/SignInPage";
import PackagesPage from "./pages/PackagesPage";
import Headline1Page from "./pages/Headline1Page";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/articles',
        element: <ProtectedRoute><ArticlesPage /></ProtectedRoute>
      },
      {
        path: '/packages',
        element: <PackagesPage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/headline1',
        element: <Headline1Page />
      }
    ]
  }
]);

function App() {
  return(
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App
