import {createRoot} from "react-dom/client";
import Product from "./pages/Product";
import "./app.css";

createRoot(document.getElementById("app") as HTMLElement)
.render(<Product />);
