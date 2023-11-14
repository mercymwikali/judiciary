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
import Login from "./pages/Login";
import FuelReq from "./pages/FuelReq";
import FuelRecharge from "./pages/FuelRecharge";
import Service from "./pages/Service";
import ExamsPayment from "./pages/ExamsPay";
import TrainingPayment from "./pages/TrainingPayment";
import CertiicationPayment from "./pages/CertificationPayment";
import ExitInterview from "./pages/ExitInterview";
import StaffClearance from "./pages/StaffClearance";
import StaffInduction from "./pages/StaffInduction";
import UserSupport from "./pages/UserSupport";
import ICTAssetReq from "./pages/ICTAssetReq";
import AssignedICTReq from "./pages/AssignedICTReq";
import ICTMaintenance from "./pages/ICTMaintenance";

function AppRoutes() {
    return (
        <Router>
            <Routes>
            <Route path="/login" element={<Login />} />

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
                    <Route path="/Fuel-Requisition" element={<FuelReq />} />
                    <Route path="/Fuel-card-recharge" element={<FuelRecharge />} />
                    <Route path="/Service/Maintenance" element={<Service />} />
                    <Route path="/ExamsPayment" element={<ExamsPayment />} />
                    <Route path="/Training-payment" element={<TrainingPayment />} />
                    <Route path="/CertificationPayment" element={<CertiicationPayment />} />
                    <Route path="/exit-interview" element={<ExitInterview />} />
                    <Route path="/Staff-clearance" element={<StaffClearance />} />
                    <Route path="/staffInduction" element={<StaffInduction />} />
                    <Route path="/user-support-req" element={<UserSupport />} />
                    <Route path="/ICT-Asset-Req" element={<ICTAssetReq />} />
                    <Route path="/Assigned-ICT-Req" element={<AssignedICTReq />} />
                    <Route path="/ICT-services-Maintenance" element={<ICTMaintenance />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
