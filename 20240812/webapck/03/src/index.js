import React from "react";
import { createRoot } from 'react-dom/client';
import Main from "./Main.jsx";
import "./style.css"

const root = createRoot(document.querySelector("#root"));
root.render(
    <Main></Main>
);