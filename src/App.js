import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoSteam from "./Components/VideoSteam";
import Body from "./Components/Body";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "watch",
				element: <VideoSteam />,
			},
		],
	},
]);

function App() {
	
	return (
		<Provider store={store}>
			<div className="App">
					<Header />
				<RouterProvider router={router} />
			</div>
		</Provider>
	);
}

export default App;
