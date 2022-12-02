import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowseTasks from "./components/BrowserTask/BrowseTask";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import About from "./pages/about/About";
import BrowseTask from "./pages/browse-task/BrowseTask";
import ChangePass from "./pages/change-pass/ChangePass";
import ExpertSingle from "./pages/find-expert/ExpertSingle";
import FindExpert from "./pages/find-expert/FindExpert";
import FindJob from "./pages/find-job/FindJob";
import Home from "./pages/home/Home";
import PostTask from "./pages/post-task/PostTask";
import ViewPost from "./pages/post-task/ViewPost";
import DetailedOverview from "./pages/profile/DetailedOverview";
import Profile from "./pages/profile/Profile";
import ProfileEarning from "./pages/profile/ProfileEarning";
import ProfileSetting from "./pages/profile/ProfileSetting";
import AcademicInformation from "./pages/profile/update-profile/AcademicInformation";
import CertificationAndSkills from "./pages/profile/update-profile/CertificationAndSkills";
import ContactInformation from "./pages/profile/update-profile/ContactInformation";
import PersonalInformation from "./pages/profile/update-profile/PersonalInformation";
import WorkHistory from "./pages/profile/WorkHistory";
import TermsOfService from "./pages/tems-of-service/TermsOfService";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import PrivateRoute from "./Routes/PrivateRoute";
import ScrollToTop from "./ScrollToTop";

function App() {
	const [userModal, setUserModal] = useState(false);
	const [notifiOpen, setNotifiOpen] = useState(false);
	const [messagesOpen, setMessagesOpen] = useState(false);

	return (
		<AuthProvider>
			<BrowserRouter>
				<ScrollToTop />
				<Header
					userModal={userModal}
					setUserModal={setUserModal}
					setNotifiOpen={setNotifiOpen}
					notifiOpen={notifiOpen}
					setMessagesOpen={setMessagesOpen}
					messagesOpen={messagesOpen}
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile">
						<Route
							index
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<Profile />
								</PrivateRoute>
							}
						/>
						<Route
							path="general-overview"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<Profile />
								</PrivateRoute>
							}
						/>
						<Route
							path="detailed-overview"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<DetailedOverview />
								</PrivateRoute>
							}
						/>
						<Route
							path="settings"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<ProfileSetting />
								</PrivateRoute>
							}
						/>
						<Route
							path="earnings"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<ProfileEarning />
								</PrivateRoute>
							}
						/>
						<Route
							path="work-history"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<WorkHistory />
								</PrivateRoute>
							}
						/>
					</Route>
					<Route path="/profile/update-profile">
						<Route
							index
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<PersonalInformation />
								</PrivateRoute>
							}
						/>
						<Route
							path="personal-info"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<PersonalInformation />
								</PrivateRoute>
							}
						/>
						<Route
							path="contact-info"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<ContactInformation />
								</PrivateRoute>
							}
						/>
						<Route
							path="academic-info"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<AcademicInformation />
								</PrivateRoute>
							}
						/>
						<Route
							path="certification-skill"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<CertificationAndSkills />
								</PrivateRoute>
							}
						/>
					</Route>
					<Route path="/task">
						<Route
							index
							path="new-post"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<PostTask />
								</PrivateRoute>
							}
						/>
						<Route
							index
							path="view-post"
							element={
								<PrivateRoute setUserModal={setUserModal}>
									<ViewPost />
								</PrivateRoute>
							}
						/>
					</Route>
					<Route path="/browse-task/:id" element={<BrowseTask />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/terms-of-service" element={<TermsOfService />} />
					<Route path="/verify-email" element={<VerifyEmail />} />
					<Route path="/find-job" element={<FindJob />} />
					<Route path="/browse-tasks" element={<BrowseTasks />} />
					<Route path="/find-expert" element={<FindExpert />} />
					<Route path="/find-expert/:paramId" element={<ExpertSingle />} />
					<Route path="/reset-password" element={<ChangePass />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
