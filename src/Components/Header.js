import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH, YOUTUBE_SUGGESTIONS_API } from "../Utils/constants";
import { debounce } from "../Utils/helpers";
import { useOutsideClick } from "../Utils/hooks/useOutsideClick";
import { setVideos } from "../Utils/videosSlice";

const Header = () => {
	const dispatch = useDispatch();
	const [suggestions, setSuggestions] = useState([]);
	const searchRef = useRef(null);
	const { open, setOpen } = useOutsideClick(searchRef);

	const menuToggleHandler = () => {
		dispatch(toggleMenu());
	};

	const getSearchedResults = async (item) => {
		const data = await fetch(YOUTUBE_SEARCH + item);
		const json = await data.json();
		dispatch(setVideos(json?.items));
	};

	const getSuggestions = async (e) => {
		const data = await fetch(YOUTUBE_SUGGESTIONS_API + e);
		const json = await data.json();
		setSuggestions(json[1]);
	};
	const betterGetSuggestions = debounce(getSuggestions, 300);

	return (
		<div className="grid grid-flow-col align-middle shadow-lg">
			<div className="flex col-span-1 align-middle p-3">
				<img
					className="h-8 ml-2 cursor-pointer"
					src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
					alt=""
					onClick={menuToggleHandler}
				/>
				<a href="/">
					<img
						className="h-8"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
					/>
				</a>
			</div>

			<div className="col-span-10 relative" ref={searchRef}>
				<div className="flex  align-middle py-3">
					<input
						className="h-9 border-2 rounded-full w-1/2 rounded-tr-none rounded-br-none pl-4"
						onChange={(e) => betterGetSuggestions(e.target.value)}
					></input>
					<button className="border-2 rounded-tr-full rounded-br-full w-20 bg-gray-100 font-semibold flex justify-center items-center">
						<img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-10.png" className="h-6" />
					</button>
				</div>
				<div className="absolute bg-white w-[35rem] shadow-2xl rounded-xl rounded-t-none">
					<ul>
						{open &&
							suggestions?.map((item) => (
								<li
									onClick={() => {
										getSearchedResults(item);
										setOpen(false);
									}}
									key={item?.id?.videoId}
									className="py-2 px-5 hover:bg-gray-200 shadow-sm"
								>
									<div className="flex items-center">
										<img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-10.png" className="h-5" />
										<p className="pl-3 cursor-default">{item}</p>
									</div>
								</li>
							))}
					</ul>
				</div>
			</div>

			<div className="col-span-1 p-3">
				<img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
			</div>
		</div>
	);
};

export default Header;
