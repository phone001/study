import React, { Component } from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body content={[{ id: 1 }, { id: 2 }, { id: 3 }]}></Body>
                <Footer></Footer>
            </div>
        )
    }
}