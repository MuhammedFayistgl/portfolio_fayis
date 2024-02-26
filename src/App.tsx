import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const About = lazy(() => import("./components/Main/About Section/About"));
const Services = lazy(() => import("./components/Main/Services Section/Services"));
const Portfolio = lazy(() => import("./components/Main/Portfolio Section/Portfolio"));
const Blog = lazy(() => import("./components/Main/Blog Section/Blog"));
const Contact = lazy(() => import("./components/Main/Contact Section/Contact"));
const BlogSingle = lazy(() => import("./components/Routers/Blog Single/BlogSingle"));
const Portfoliodetails = lazy(() => import("./components/Routers/portfolio-details/Portfoliodetails"));

import Loader from "./components/sm_Componet/Loader";
import Signup from "./Pages/Login";
import Login from "./Pages/Sigiup";
import axios from "axios";

axios.defaults.withCredentials = true;
const App: React.FunctionComponent = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="App-main-container">
                <Header />

                <Routes>
                    <Route
                        path={"/"}
                        element={
                            <>
                                <Hero />
                                <Main />
                            </>
                        }
                    />
                    <Route path={"/Sigin"} element={<Login />} />
                    <Route path={"/Login"} element={<Signup />} />
                    <Route path={"/about"} element={<About />} />

                    <Route path={"/services"} element={<Services />} />
                    <Route path={"/work"} element={<Portfolio />}></Route>
                    <Route path={"/blog"} element={<Blog />} />
                    <Route path={"/contact"} element={<Contact />} />

                    {/* extra coponents */}
                    <Route path={"/portfolio-details/:id"} element={<Portfoliodetails />} />
                    <Route path={"/Blog-Single-details/:id"} element={<BlogSingle />} />
                </Routes>
                <Footer />
            </div>
        </Suspense>
    );
};

export default App;
