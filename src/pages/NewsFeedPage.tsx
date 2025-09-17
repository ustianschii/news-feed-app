import NewsCard from "../components/newsfeed/NewsCard";
import { mockNews } from "../utils/mocks/mockNews";

export default function NewsFeedPage() {
	return (
		<div className="p-12">
			<h1 className="text-4xl font-bold mb-10 text-center text-text-light">
				News Feed
			</h1>

			<div className="grid gap-8 max-w-4xl mx-auto">
				{mockNews.map((news) => (
					<NewsCard
						key={news.id}
						id={news.id}
						title={news.title}
						imageUrl={news.imageUrl}
						summary={news.summary}
						author={news.author}
						date={news.date}
					/>
				))}
			</div>
		</div>
	);
}
