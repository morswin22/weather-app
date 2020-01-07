import React from 'react';
import GlobalStyle from "./theme/GlobalStyle";
import ContextWrapper from "./components/ContextWrapper/ContextWrapper";
import Layout from "./components/Layout/Layout";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import CurrentCity from "./components/CurrentCity/CurrentCity";

const Root = () => (
    <ContextWrapper>
        <GlobalStyle />
        <DarkModeSwitch/>
        <Layout>
            <ListWrapper />
            <CurrentCity/>
        </Layout>
    </ContextWrapper>
);

export default Root;