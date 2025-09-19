import { mockNews } from "../utils/mocks/mockNews";
import type { NewsArticle } from "../types/news";

export const fetchNews = async (): Promise<NewsArticle[]> => {
	await new Promise((resolve) => setTimeout(resolve, 500));

	return mockNews;
};
