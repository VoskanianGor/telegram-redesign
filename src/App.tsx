import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import style from "./App.module.scss";
import { Chat } from "./components/Messages/Dialogs/Chat/Chat";
import { Messages } from "./components/Messages/Messages";
import { NavBar } from "./components/Messages/NavBar/NavBar";
import { StatusBar } from "./components/StatusBar/StatusBar";

function App() {
	return (
		<BrowserRouter>
			<RecoilRoot>
				<div className={style.app}>
					<StatusBar />

					<Routes>
						<Route
							path={"/*"}
							element={
								<>
									<Messages />
									<NavBar />
								</>
							}
						/>

						<Route
							path={"/calls/*"}
							element={
								<>
									<h1>calls</h1>
									<NavBar />
								</>
							}
						/>

						<Route
							path={"/saved/*"}
							element={
								<>
									<h1>saved</h1>
									<NavBar />
								</>
							}
						/>

						<Route
							path={"/contacts/*"}
							element={
								<>
									<h1>contacts</h1>
									<NavBar />
								</>
							}
						/>

						<Route
							path={"/settings/*"}
							element={
								<>
									<h1>settings</h1>
									<NavBar />
								</>
							}
						/>

						<Route path={"chats/dialogs/*"} element={<Chat />}>
							'
						</Route>
					</Routes>
				</div>
			</RecoilRoot>
		</BrowserRouter>
	);
}

export default App;
