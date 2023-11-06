import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./components/Mainlayout";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Dashboard";
import Payslip from "./pages/Payslip";
import P9 from "./pages/P9";
import PayChange from "./pages/PayChange";
import AppraisalReq from "./pages/AppraisalReq";
import SupervisorRev from "./pages/SupervisorRev";
import AssetTransfer from "./pages/AssetTransfer";
import AssignedAssets from "./pages/AssignedAssets";
import PurchaseReq from "./pages/PurchaseReq";
import StoreReq from "./pages/StoreReq";
import AssetRequisition from "./pages/AssetRequisition";
import TravelReq from "./pages/TravelReq";
import TravelAdvanceLiq from "./pages/TravelAdvanceLiq";
import WorkshopAdvance from "./pages/WorkshopAdvance";
import Pettycashreq from "./pages/Pettycashreq";
import StaffClaimreq from "./pages/StaffClaimreq";
import LeaveReq from "./pages/LeaveReq";
import LeaveReimbursement from "./pages/LeaveReimbursement";
import TimeOff from "./pages/TimeOff";
import CarryForward from "./pages/CarryForward";
import ApplicationHist from "./pages/ApplicationHist";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Mainlayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="/User-profile" element={<UserProfile />} />
                    <Route path="/payslip" element={<Payslip />} />
                    <Route path="/p9" element={<P9/>} />
                    <Route path="/pay-change" element={<PayChange />} />
                    <Route path="/Appraisal-requsition" element={<AppraisalReq />} />
                    <Route path="/Supervisor-Review" element={<SupervisorRev />} />
                    <Route path="/Assigned-Assets" element={<AssignedAssets />} />
                    <Route path="/Asset-Transfer" element={<AssetTransfer />} />
                    <Route path="/purchase-req" element={<PurchaseReq />} />
                    <Route path="/store-req" element={<StoreReq />} />
                    <Route path="/Asset-requisition" element={<AssetRequisition />} />
                    <Route path="/Travel-requsition" element={<TravelReq />} />
                    <Route path="/Travel-Liquidation" element={<TravelAdvanceLiq />} />
                    <Route path="/WorkShop-Requisition" element={<WorkshopAdvance />} />
                    <Route path="/Pettycash-Requsition" element={<Pettycashreq />} />
                    <Route path="/Staff-Claim-Requisition" element={<StaffClaimreq />} />
                    <Route path="/leave-requsition" element={<LeaveReq />} />
                    <Route path="/leave-reimbursement" element={<LeaveReimbursement />} />
                    <Route path="/time-off" element={<TimeOff />} />
                    <Route path="/carry-forward" element={<CarryForward />} />
                    <Route path="/applications-history" element={<ApplicationHist />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;