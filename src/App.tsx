import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutSale from "./projectSaleTechnology/LayoutSale";
import FlashSale from "./projectSaleTechnology/FlashSale";
import Mall from "./projectSaleTechnology/Mall";
import JustForYou from "./projectSaleTechnology/JustForYou";
import ProductsManager from "./projectSaleTechnology/Compoments/ProductsManager";
import Desktop from './projectSaleTechnology/Computers/Desktop';
import GamingPC from './projectSaleTechnology/Computers/GamingPC';
import OfficePC from './projectSaleTechnology/Computers/OfficePC';
import MiniPC from './projectSaleTechnology/Computers/MiniPC';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutSale />} />
            <Route path="FlashSale" element={<FlashSale />} />
            <Route path="Mall" element={<Mall />} />
            <Route path="JustForYou" element={<JustForYou />} />
            <Route path="ProductsManager" element={<ProductsManager />} />

            {/* Bổ sung đường dẫn cho danh mục máy tính */}
            <Route path="desktop" element={<Desktop />}>
              <Route path="gaming" element={<GamingPC />} />
              <Route path="office" element={<OfficePC />} />
              <Route path="mini" element={<MiniPC />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
