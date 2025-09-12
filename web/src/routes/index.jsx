import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from '../components/NotFound';
import Layout from '../components/Layout';
import Analyzer from '../pages/analyzer';
import Home from "../pages/home";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/competitors-analyzer' element={<Analyzer />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
