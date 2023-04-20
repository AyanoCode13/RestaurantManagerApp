import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
import AuthRoutes  from "./routes/authRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Suspense fallback={<div>...Loading</div>}><AuthLayout/></Suspense>}>
      {AuthRoutes.map(route => {
        return (
          <Route
            index={route.index}
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <route.element />
              </Suspense>
            }
            loader={async ()=> { return await route.data() }}
          />
        );
      })}
    </Route>
  )
);
export default router;
