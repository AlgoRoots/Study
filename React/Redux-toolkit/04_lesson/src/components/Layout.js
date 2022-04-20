import { Outlet } from "react-router-dom";
import Header from "./Header";

// outlet은 모든 자식요소들을 대표한다.
const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
