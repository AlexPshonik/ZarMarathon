import React from 'react';
import Header from './components/HeaderComponent';
import Layout from './components/LayoutComponent';
import Footer from './components/FooterComponent';

import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg3.jpg';

function App() {
    return (
        <React.Fragment>
            <Header title='This is title' descr='This is a description'/>
            <Layout id='1' title='This is title' descr='This is a description' urlBg={bg1}/>
            <Layout id='2' title='This is title' descr='This is a description' colorBg='cadetblue'/>
            <Layout id='3' title='This is title' descr='This is a description' urlBg={bg2}/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
