import React from "react";
import "./manageApplicants.css";
import Reload from "../../assets/reload.svg";
import Search from "../../assets/search.svg";
import Edit from "../../assets/edit.svg";
// import Delete from "../../assets/delete.svg";
import Download from "../../assets/download.svg";
import { applicants } from "../../utils/data/data";

const ManageApplicants = () => {
  return (
    <div className="manage-applicants-container">
      <div className="manage-applicants-head">
        <div className="manage-applicants-search">
          <input type="text" placeholder="Search..." />
          <img src={Search} alt="search" />
        </div>
        <div className="manage-applicants-action">
          <button>
            <span>
              <img src={Download} alt="download" />
            </span>
            Create
          </button>
          <button>
            <span>
              <img src={Reload} alt="reload" />
            </span>
            Reload
          </button>
        </div>
      </div>
      <div className="manage-applicants-body">
        <div className="manage-applicants-table">
          <div className="applicants-tables-head">
            <p>
              ID
              <span>↑↓</span>
            </p>
            <p>
              Email <span>↑↓</span>
            </p>
            <p>
              Job Name <span>↑↓</span>
            </p>
            <p>
              Type <span>↑↓</span>
            </p>
            <p>
              Company <span>↑↓</span>
            </p>
            <p>
              Created At <span>↑↓</span>
            </p>
            <p>Status</p>
            <p>Operations</p>
          </div>
          <div className="applicants-tables-body">
            {applicants?.map((e, index) => {
              return (
                <div className="applicants-tables-single" key={index}>
                  <div>
                    <p>{index + 1}</p>
                  </div>
                  <div>
                    <p>chadrick.corkery@hotmail.com</p>
                  </div>
                  <div>
                    <p>Senior Laravel Developer (TALL Stack)</p>
                  </div>
                  <div>
                    <p>Internal</p>
                  </div>
                  <div>
                    <p>Envato</p>
                  </div>
                  <div>
                    <p>2023-05-31</p>
                  </div>
                  <div>
                    <p>Checked</p>
                  </div>
                  <div className="applicants-tables-operations">
                    {/* <p>Analytics</p> */}
                    <div className="applicants-tables-edit">
                      <img src={Edit} alt="edit" />
                    </div>
                    {/* <div className="applicants-tables-delete">
                      <img src={Delete} alt="delete" />
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageApplicants;
