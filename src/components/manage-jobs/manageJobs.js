import React, { useState, useEffect } from "react";
import "./manageJobs.css";
import Reload from "../../assets/reload.svg";
import Search from "../../assets/search.svg";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { onValue, ref } from "firebase/database";
import { db } from "../../utils/firebase/firebase-config";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data.jobs !== null) {
        if (data.jobs !== undefined) {
          Object.entries(data.jobs).filter((item) => {
            if (item[1]?.userId === user?.id) {
              setJobs((arr) => [...arr, item[1]]);
            }
            return item;
          });
        }
      }
    });
  }, []);
  console.log(jobs);
  return (
    <div className="manage-jobs-container">
      <div className="manage-jobs-head">
        <div className="manage-jobs-search">
          <input type="text" placeholder="Search..." />
          <img src={Search} alt="search" />
        </div>
        <div className="manage-jobs-action">
          <button>
            <span>+</span> Create
          </button>
          <button>
            <span>
              <img src={Reload} alt="reload" />
            </span>
            Reload
          </button>
        </div>
      </div>
      <div className="manage-jobs-body">
        <div className="manage-jobs-table">
          <div className="manage-tables-head">
            <p>
              ID
              <span>↑↓</span>
            </p>
            <p>
              Name <span>↑↓</span>
            </p>
            <p>
              Created At <span>↑↓</span>
            </p>
            <p>
              Status <span>↑↓</span>
            </p>
            <p>
              Moderation status <span>↑↓</span>
            </p>
            <p>
              Expire date <span>↑↓</span>
            </p>
            <p>Operations</p>
          </div>
          <div className="manage-tables-body">
            {jobs?.map((e, index) => {
              return (
                <div className="manage-tables-single" key={index}>
                  <div>
                    <p>{index + 1}</p>
                  </div>
                  <div>
                    <p>{e.title}</p>
                  </div>
                  <div>
                    <p>{e.createdAt}</p>
                  </div>
                  <div>
                    <p>{e.status}</p>
                  </div>
                  <div>
                    <p>{e.moderationStatus}</p>
                  </div>
                  <div>
                    <p>{e.expiry}</p>
                  </div>
                  <div className="manage-tables-operations">
                    <p>Analytics</p>
                    <div className="manage-tables-edit">
                      <img src={Edit} alt="edit" />
                    </div>
                    <div className="manage-tables-delete">
                      <img src={Delete} alt="delete" />
                    </div>
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

export default ManageJobs;
