import React from 'react';
import GlobalStyle from "./theme/GlobalStyle";
import ContextWrapper from "./components/ConextWrapper/ContextWrapper";
import Layout from "./components/Layout/Layout";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";


const Root = () => (
    <ContextWrapper>
        <DarkModeSwitch/>
        <Layout>
            <GlobalStyle />
            <ListWrapper />
        </Layout>
    </ContextWrapper>
);

export default Root;
