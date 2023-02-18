import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import RootLayout from "./layouts/RootLayout";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import BlocksList from "./pages/BlockList";
import BlockInfo from "./pages/BlockInfo";
import Error from "./pages/Error";
import TransactionInfo from "./pages/TransactionInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={
        <>
          <Navbar />
        </>
      }
    >
      <Route index element={<Index />} />
      <Route path="blocks" element={<BlocksList />} />
      <Route path="blocks/:id" element={<BlockInfo />} />
      <Route path="transactions/:tx" element={<TransactionInfo />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
