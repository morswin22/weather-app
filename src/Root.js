import React from 'react';
import GlobalStyle from "./theme/GlobalStyle";
import ContextWrapper from "./components/ContextWrapper/ContextWrapper";
import Layout from "./components/Layout/Layout";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";

const Root = () => (
    <ContextWrapper>
        <GlobalStyle />
        <DarkModeSwitch/>
        <Layout>
            <ListWrapper />
        </Layout>
    </ContextWrapper>
);

export default Root;