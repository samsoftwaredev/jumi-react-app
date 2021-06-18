import { Footer } from "../../components";
import { TopNav } from "../../components/Navigation";
import { MainLayoutStyle } from "./MainLayout.style";

const MainLayout = ({ children, showFooter = true }) => (
  <div className="static-background">
    <TopNav />
    <MainLayoutStyle id="container" className="pt-2">
      {children}
    </MainLayoutStyle>
    {showFooter && <Footer />}
  </div>
);

export default MainLayout;
