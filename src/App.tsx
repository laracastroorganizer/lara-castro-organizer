import "./styles/global.css";

import {
  AboutCourse,
  AboutMe,
  Benefits,
  Faq,
  Footer,
  Guarantee,
  Home,
  Investment,
} from "@pages";
import { FloatingWhatsapp } from "@components";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <Navbar /> */}
      <Home />
      <AboutCourse />
      <AboutMe />
      <Benefits />
      <Investment />
      <Guarantee />
      <Faq />

      <Footer />

      <FloatingWhatsapp />
    </div>
  );
};
