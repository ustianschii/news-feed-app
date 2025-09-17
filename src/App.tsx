import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import AuthPage from "./pages/AuthPage";
import NewsFeedPage from "./pages/NewsFeedPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/auth" element={<AuthPage />} />
				<Route path="/news" element={<NewsFeedPage />} />
			</Routes>
		</Router>
	);
}

export default App;
