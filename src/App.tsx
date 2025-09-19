import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Loading from "./components/shared/Loading";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const NewsFeedPage = lazy(() => import("./pages/NewsFeedPage"));
const FullArticle = lazy(() => import("./components/newsfeed/FullArticle"));

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Suspense fallback={<Loading />} />
				<Routes>
					<Route path="/" element={<AuthPage />} />
					<Route path="/news" element={<NewsFeedPage />} />
					<Route path="/news/:id" element={<FullArticle />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
