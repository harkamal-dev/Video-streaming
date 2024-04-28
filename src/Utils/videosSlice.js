import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "videoSlice",
	initialState: [],
	reducers: {
		setVideos: (state, action) => (state = action.payload),
	},
});

export const { setVideos } = videoSlice.actions;
export default videoSlice.reducer;