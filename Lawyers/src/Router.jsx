import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import { Home } from "./pages/home/Home"
import { Service } from "./pages/service/Service"
import { CriminalDefense } from "./pages/сriminalDefense/CriminalDefense"
import { Practice } from "./pages/practice/Practice"
import { CostServices } from "./pages/CostServices/CostServices"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/criminalDefense" element={<CriminalDefense />} />
                    <Route path="/costServices" element={<CostServices />} />
                    <Route path="*" element={<>Страница не найдена</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}