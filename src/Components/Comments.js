import React from "react";
import { comments } from "../Utils/constants";

const Comments = () => {
	const CommentList = ({ itemsList }) => (
		<div>
			{itemsList?.map((item, index) => {
				if (item?.comments?.length === 0) {
					return <CommentCard item={item} key={index} />;
				} else {
					return (
						<div>
							<CommentCard item={item} key={index} />
							<div className="pl-6 mt-2 border-l-2">
								<CommentList itemsList={item?.comments} />{" "}
							</div>
						</div>
					);
				}
			})}
		</div>
	);

	const CommentCard = ({ item }) => (
		<div className="w-full p-2 rounded-lg shadow-md">
			<p className="font-semibold text-lg">{item.owner}</p>
			<h1>{item.title}</h1>
		</div>
	);

	return (
		<div className="m-2 ">
			<h1 className="h1 text-2xl my-4">Comments</h1>
			<CommentList itemsList={comments} />
		</div>
	);
};

export default Comments;
