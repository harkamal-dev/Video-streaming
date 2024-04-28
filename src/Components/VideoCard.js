import React from "react";
import {Link} from "react-router-dom"

const VideoCard = ({ item }) => {
	return (
		<Link to={"/watch?v=" + item?.id}>
			<div className="w-72 shadow-lg m-1 p-2 rounded-lg">
				<div>
					<img className="rounded-lg" src={item?.snippet?.thumbnails?.medium?.url} />
				</div>
				<h1 className="font-semibold">{item?.snippet?.title}</h1>
				<p className="text-sm font-semibold text-gray-500">{item?.snippet?.channelTitle}</p>
				<h1 className="text-sm font-semibold text-gray-500">{item?.statistics?.viewCount} Views </h1>
			</div>
		</Link>
	);
};

export default VideoCard;
