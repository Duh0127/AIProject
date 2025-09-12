import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from '../components/NotFound';
import Layout from '../components/Layout';
import Analyzer from '../pages/analyzer';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='/competitors-analyzer' element={<Analyzer />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
