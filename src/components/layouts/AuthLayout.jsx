import { CircularProgress, Container } from "@mui/material";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
const AuthNavBar = lazy(()=>import("../templates/Sidebar"))

export default function AuthLayout() {

  return (
    <div className="Auth Layout">
      <header>
        <Suspense fallback={<CircularProgress />}>
            <AuthNavBar />
        </Suspense>
      </header>

      <main >
        <div
          style={{
            display: "flex",
            marginLeft: 10,
            paddingTop: 80,
            width:"100%"
          }}
        >
          <Container sx={{width:"100%"}} >
            <Outlet />
          </Container>
        </div>
      </main>
    </div>
  );
}
