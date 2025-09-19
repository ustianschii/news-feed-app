import { useParams, Link } from "react-router-dom";

import { mockNews } from "../../utils/mocks/mockNews";
import Button from "../shared/Button";

const FullArticle = () => {
	const { id } = useParams<{ id: string }>();
	const article = mockNews.find((item) => item.id === id);

	if (!article) {
		return (
			<p className="text-center mt-10 text-text-base">Article not found</p>
		);
	}

	return (
		<div className="max-w-3xl mx-auto p-6 bg-background-gray rounded-xl">
			<Link to="/news" className="inline-block mb-4">
				<Button variant="secondary">Back to News Feed</Button>
			</Link>
			<img
				className="w-full h-64 object-contain rounded-lg mb-6"
				loading="lazy"
				src={article.imageUrl}
				alt={article.title}
			/>
			<h1 className="text-3xl font-bold mb-4 text-text-light">
				{article.title}
			</h1>
			<p className="leading-relaxed text-text-light">{article.content}</p>
		</div>
	);
};

export default FullArticle;
