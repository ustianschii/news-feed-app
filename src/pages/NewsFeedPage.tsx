import { useQuery } from "@tanstack/react-query";

import NewsCard from "../components/newsfeed/NewsCard";
import Loading from "../components/shared/Loading";
import { fetchNews } from "../api/newsService";
import type { NewsArticle } from "../types/news";

export default function NewsFeedPage() {
	const { data, isLoading, isError } = useQuery<NewsArticle[]>({
		queryKey: ["news-feed"],
		queryFn: fetchNews,
	});

	if (isLoading) return <Loading />;
	if (isError) return <div>Error fetching data.</div>;

	return (
		<div className="p-12">
			<h1 className="text-4xl font-bold mb-10 text-center text-text-light">
				News Feed
			</h1>

			<div className="grid gap-8 max-w-4xl mx-auto">
				{data?.map((article) => (
					<NewsCard
						key={article.id}
						id={article.id}
						title={article.title}
						imageUrl={article.imageUrl}
						summary={article.summary}
						author={article.author}
						date={article.date}
					/>
				))}
			</div>
		</div>
	);
}
