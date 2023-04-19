import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = lazy(() => import("./AuthLayout"));
const GuestLayout = lazy(() => import("./GuestLayout"));
const auth = true;
export default function Layout() {
  if (auth) {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        </Suspense>
      </div>
    );
  } 
  else {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <GuestLayout>
            <Outlet />
          </GuestLayout>
        </Suspense>
      </div>
    );
  }
}
