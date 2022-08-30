import { Theme } from "@emotion/react";
import { makeStyles } from "tss-react/mui";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About/About";

const useStyles = makeStyles()((theme: Theme) => {
    return {
        content: {
            flexGrow:1,
        }
    }
})

function MainRouting () {
    const {classes} = useStyles();
return (
        <main className={classes.content}>
            <Routes>
                <Route path={`Home`} element={<Main/>}/>
                <Route path={`Kontakt`} element={<Main/>}/>
                <Route path={`Über`} element={<About/>}/>
            </Routes>
        </main>
    )
}

export default MainRouting;