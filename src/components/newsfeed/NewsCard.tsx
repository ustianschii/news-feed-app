import { Link } from "react-router-dom";

type NewsCardProps = {
	id: string;
	title: string;
	summary: string;
	author: string;
	date: string;
	imageUrl: string;
};

export default function NewsCard({
	id,
	title,
	summary,
	author,
	date,
	imageUrl,
}: NewsCardProps) {
	return (
		<Link to={`/news/${id}`}>
			<div className="border rounded-xl overflow-hidden bg-background-light shadow hover:shadow-lg transition">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-48 object-contain mt-5"
				/>

				<div className="p-6">
					<h2 className="text-2xl font-bold mb-2 text-text-base">{title}</h2>
					<p className="text-text-base mb-4">{summary}</p>

					<div className="text-sm text-text-gray mt-10">
						<span>{author}</span> •{" "}
						<span>{new Date(date).toLocaleDateString()}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
