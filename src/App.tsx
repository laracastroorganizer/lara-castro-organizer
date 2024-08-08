import "./styles/global.css";

import {
  AboutCourse,
  AboutMe,
  Benefits,
  Faq,
  Footer,
  Home,
  Investment,
  JoinUs,
} from "@pages";
import { FloatingWhatsapp, Header } from "@components";

export const App = () => {
  return (
    <>
      <Header />

      <Home />
      <AboutCourse />
      <AboutMe />
      <Benefits />
      <JoinUs />
      <Investment />
      <Faq />
      <Footer />

      <FloatingWhatsapp />
    </>
  );
};
