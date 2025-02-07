import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TradePage1 from "./pages/TradePage";
import UsingMaterialUIKits from "./pages/UsingMaterialUIKits";
import TradePageTestDev from "./pages/TradePageTestDev";
import TradePage from "./pages/TradePage1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/using-material-ui-kits":
        title = "";
        metaDescription = "";
        break;
      case "/trade-page-test-dev":
        title = "";
        metaDescription = "";
        break;
      case "/trade-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TradePage1 />} />
      <Route path="/using-material-ui-kits" element={<UsingMaterialUIKits />} />
      <Route path="/trade-page-test-dev" element={<TradePageTestDev />} />
      <Route path="/trade-page" element={<TradePage />} />
    </Routes>
  );
}
export default App;
