import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../components/App';
import FilesList from '../components/FilesList';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <div className="main-content">
                <Routes>
                    <Route element={<App />} path="/" />
                    <Route element={<FilesList />} path="/list" />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;
