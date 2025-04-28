import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Layout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
