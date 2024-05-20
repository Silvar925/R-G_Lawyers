import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Service } from "./pages/service/Service"
import { Layout } from "./Layout/Layout"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="*" element={<>Страница не найдена</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}