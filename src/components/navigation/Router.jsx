import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense } from "react";
import AuthLayout from "../layouts/AuthLayout";
import AuthRoutes  from "./routes/authRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />}>
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
            action={({request})=>route.action(request)}
          />
        );
      })}
    </Route>
  )
);
export default router;
