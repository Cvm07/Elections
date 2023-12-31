import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"

//Route Protection routes
import UserProtectedRoute from './Pages/Global/Auth/UserProtectedRoute'
import AdminProtectedRoute from './Pages/Admin/Auth/AdminProtectedRoute'
import AdminAccessRoute from './Pages/Admin/Auth/AdminAccessRoute'

//Home routes
import Home from './Pages/Home/Home'
import ErrorPage from './Pages/Home/Error'

//User routes
import Signup from './Pages/Global/Auth/UserSignup'
import Login from './Pages/Global/Auth/UserLogin'
import ForgotPassword from './Pages/Global/Auth/Forgot'
import UserOTPVerify from './Pages/Global/Auth/VerifyOTP'
import UserDashboard from "./Pages/Global/Userpage/UserDashboard"
import OngoingElections from "./Pages/Global/Userpage/SelectViewElection"
import ViewClosedElectionsUser from './Pages/Global/Userpage/ViewClosedElections'
import ViewOpenElectionsUser from './Pages/Global/Userpage/ViewOpenElections'
import CandidateListUser from './Pages/Global/Userpage/CandidateList'
import ElectionDetails from './Pages/Global/Userpage/ElectionDetails'
import VoterRegistration from './Pages/Global/Userpage/RegisterVoter'
import Voting from './Pages/Global/Userpage/Vote'
import ViewResults from "./Pages/Global/Userpage/Results"
import UserProfile from "./Pages/Global/Userpage/Profile"
import CompletedElection from "./Pages/Global/Userpage/CompletedElections"

//Admin Routes
import AdminLogin from './Pages/Admin/Auth/AdminLogin'
import AdminDashboard from "./Pages/Admin/AdminPage/AdminDashboard"
import CompletedElections from "./Pages/Admin/AdminPage/CompletedElections"
import SelectAddElection from './Pages/Admin/AdminPage/SelectAddElection'
import SelectViewElection from './Pages/Admin/AdminPage/SelectViewElection'
import Results from './Pages/Admin/AdminPage/Results'
import AdminProfile from "./Pages/Admin/AdminPage/Profile"
import ChangePhase from "./Pages/Admin/AdminPage/ChangePhase"
import CandidateList from './Pages/Admin/AdminPage/CandidateList'
import VoterList from './Pages/Admin/AdminPage/VoterList'

//Open Election Routes
import AddOpenElection from "./Pages/Admin/AdminPage/Open_Elections/AddOpenElection"
import ViewOpenElections from "./Pages/Admin/AdminPage/Open_Elections/ViewOpenElections"
import EditOpenElection from './Pages/Admin/AdminPage/Open_Elections/EditOpenElection'

//Closed Election Routes
import AddClosedElection from './Pages/Admin/AdminPage/Closed_Elections/AddClosedElection'
import ViewClosedElections from "./Pages/Admin/AdminPage/Closed_Elections/ViewClosedElections"
import EditClosedElection from './Pages/Admin/AdminPage/Closed_Elections/EditClosedElection'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/user/*">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-otp" element={<UserOTPVerify />} />
          <Route
            path="dashboard"
            element={<UserProtectedRoute Component={UserDashboard} />}
          />
          <Route
            path="elections/view"
            element={<UserProtectedRoute Component={OngoingElections} />}
          />
          <Route
            path="elections/results"
            element={<UserProtectedRoute Component={CompletedElection} />}
          />
          <Route
            path="elections/view/open"
            element={<UserProtectedRoute Component={ViewOpenElectionsUser} />}
          />
          <Route
            path="elections/view/closed"
            element={<UserProtectedRoute Component={ViewClosedElectionsUser} />}
          />
          <Route
            path="elections/:_id/candidates"
            element={<UserProtectedRoute Component={CandidateListUser} />}
          />
          <Route
            path="elections/:_id/details"
            element={<UserProtectedRoute Component={ElectionDetails} />}
          />
          <Route
            path="elections/:_id/registration"
            element={<UserProtectedRoute Component={VoterRegistration} />}
          />
          <Route
            path="elections/:_id/vote"
            element={<UserProtectedRoute Component={Voting} />}
          />
          <Route
            path="elections/:_id/results"
            element={<UserProtectedRoute Component={ViewResults} />}
          />
          <Route
            path="profile"
            element={<UserProtectedRoute Component={UserProfile} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="/admin/*">
          <Route path="login" element={<AdminLogin />} />
          <Route
            path="dashboard"
            element={<AdminProtectedRoute Component={AdminDashboard} />}
          />
          <Route
            path="elections/add"
            element={<AdminAccessRoute Component={SelectAddElection} />}
          />
          <Route
            path="elections/add/open"
            element={<AdminAccessRoute Component={AddOpenElection} />}
          />
          <Route
            path="elections/add/closed"
            element={<AdminAccessRoute Component={AddClosedElection} />}
          />
          <Route
            path="elections/view"
            element={<AdminProtectedRoute Component={SelectViewElection} />}
          />
          <Route
            path="elections/view/open"
            element={<AdminProtectedRoute Component={ViewOpenElections} />}
          />
          <Route
            path="elections/view/closed"
            element={<AdminProtectedRoute Component={ViewClosedElections} />}
          />
          <Route
            path="elections/edit/open/:_id"
            element={<AdminAccessRoute Component={EditOpenElection} />}
          />
          <Route
            path="elections/edit/closed/:_id"
            element={<AdminAccessRoute Component={EditClosedElection} />}
          />
          <Route
            path="elections/:_id/candidates"
            element={<AdminProtectedRoute Component={CandidateList} />}
          />
          <Route
            path="elections/:_id/voters"
            element={<AdminProtectedRoute Component={VoterList} />}
          />
          <Route
            path="elections/:_id/results"
            element={<AdminProtectedRoute Component={Results} />}
          />
          <Route
            path="elections/:_id/phase"
            element={<AdminAccessRoute Component={ChangePhase} />}
          />
          <Route
            path="results"
            element={<AdminProtectedRoute Component={CompletedElections} />}
          />
          <Route
            path="profile"
            element={<AdminProtectedRoute Component={AdminProfile} />}
          />
          <Route
            path="*"
            element={<AdminProtectedRoute Component={ErrorPage} />}
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router