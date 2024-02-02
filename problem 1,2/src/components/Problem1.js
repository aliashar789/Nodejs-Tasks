import React, { useState, useEffect } from "react";

const Problem1 = () => {
	const [downloadedImages, setDownloadedImages] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const imageUrls = [
			"https://picsum.photos/200/300",
			"https://picsum.photos/400/600",
			"https://picsum.photos/800/1200",
			"https://picsum.photos/500/700",
			"https://picsum.photos/600/900",
		];

		const downloadImages = async (urls) => {
			try {
				setLoading(true);
				const downloadedData = await Promise.all(
					urls.map(async (url) => {
						const response = await fetch(url);
						const data = await response.blob();
						return URL.createObjectURL(data);
					})
				);

				setDownloadedImages(downloadedData);
				setLoading(false);
			} catch (error) {
				console.error("Error downloading contents:", error);
				setLoading(false);
			}
		};
		downloadImages(imageUrls);
	}, []);

	return (
		<div>
			<h1>{loading ? "Fetching data, please wait..." : "Downloaded Contents:"}</h1>
			<ul>
				{downloadedImages.map((content, index) => (
					<li key={index}>
						<img src={content} alt={`Img ${index + 1}`} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Problem1;
