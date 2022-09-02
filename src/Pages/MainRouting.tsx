import { Theme } from "@emotion/react";
import { makeStyles } from "tss-react/mui";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./About/AboutPage";
import HomeLayout from "./Home/HomeLayout";
import ImpressumPage from "../Impressum/ImpressumPage";
import ContactPage from "./Contact/ContactPage";

const useStyles = makeStyles()((theme: Theme) => {
  return {
    content: {
      flexGrow: 1,
    },
  };
});

function MainRouting() {
  const { classes } = useStyles();
  return (
    <main className={classes.content}>
      <Routes>
        <Route path={`Home`} element={<HomeLayout />} />
        <Route path={`Kontakt`} element={<ContactPage />} />
        <Route path={`Ueber`} element={<AboutPage />} />
        <Route path={`Impressum`} element={<ImpressumPage />} />
        <Route path={``} element={<HomeLayout />} />
      </Routes>
    </main>
  );
}

export default MainRouting;
