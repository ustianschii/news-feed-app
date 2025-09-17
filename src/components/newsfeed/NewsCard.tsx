type NewsCardProps = {
	title: string;
	summary: string;
	author: string;
	date: string;
	imageUrl: string;
};

export default function NewsCard({
	title,
	summary,
	author,
	date,
	imageUrl,
}: NewsCardProps) {
	return (
		<div className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition">
			<img
				src={imageUrl}
				alt={title}
				className="w-full h-48 object-contain mt-5"
			/>

			<div className="p-10">
				<h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
				<p className="text-gray-700 mb-4">{summary}</p>

				<div className="text-sm text-gray-500 mt-10">
					<span>{author}</span> •{" "}
					<span>{new Date(date).toLocaleDateString()}</span>
				</div>
			</div>
		</div>
	);
}
