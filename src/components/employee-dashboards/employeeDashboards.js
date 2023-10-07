import React, { useEffect, useState } from "react";
import "./employeeDashboards.css";
import DashboardSingle from "../dashboard-single/dashboardSingle";
import NewApplicants from "../new-applicants/newApplicants";
import RecentActivities from "../recent-activities/recentActivities";
import Clock from "../../assets/clock.svg";
import User from "../../assets/user.svg";
import Envelope from "../../assets/envelope.svg";
import Packages from "../packages/packages";
import { onValue, ref } from "firebase/database";
import { auth, db } from "../../utils/firebase/firebase-config";

const EmployeeDashboards = () => {
  const user = auth.currentUser;
  const [data, setData] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data.employers !== null) {
        Object.entries(data.employers).filter((item) => {
          if (item[1]?.email === user?.email) {
            setData(item[1]);
          }
          return item;
        });
      }
    });
  }, [user?.email]);

  return (
    <div className="employee-dashboards-container">
      <div className="employee-dashboards-header">
        <div className="employee-dashboards-head">
          <DashboardSingle number={data.currentJobs} text="Open Jobs" img={Clock} />
          <DashboardSingle number={0} text="Followers" img={User} />
          <DashboardSingle number={0} text="Messages" img={Envelope} />
        </div>
        <div className="employee-dashboards-package">
          <p>
            Your Package is: <span> {data.package} Package</span>
          </p>
          <p>
            Package Duration : <span>30 Aug, 2023 - 09 Sep, 2023</span>
          </p>
          <p>
            Available quota :{" "}
            <span>
              {data.currentJobs} / {data.totalJobs}
            </span>
          </p>
        </div>
        <Packages />
      </div>
      <div className="employee-dashboards-body">
        <div className="employee-dashboards-activity">
          <NewApplicants />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboards;
