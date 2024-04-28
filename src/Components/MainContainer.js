import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import AdCard from "./AdCard";
import Button from "./Button";
import VideoCard from "./VideoCard";
import { setVideos } from "../Utils/videosSlice";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
	const dispatch = useDispatch();
	const videos = useSelector((store) => store.video);

	useEffect(() => {
		GetVideos();
	}, []);

	const GetVideos = async () => {
		const data = await fetch(YOUTUBE_API);
		const jsonData = await data.json();
		dispatch(setVideos(jsonData?.items));
    };
    
	return (
		<div className="p-4 w-full">
			<div className="flex">
				{["All", "Gaming", "Top 10", "Live"].map((item, index) => (
					<Button key={index} item={item}></Button>
				))}
			</div>
			<div className="flex flex-wrap justify-center">
				<AdCard item={videos[0]} />
				{videos?.map((item, index) => (
					<VideoCard item={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default MainContainer;
