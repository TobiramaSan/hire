import React from "react";
import "./userMulti.css";
import LayoutAdmin from "../layout-admin/layoutAdmin";
import Menu from "../../components/menu/menu";

const UserMulti = ({ img, page, children, fullStep, minus, add }) => {
  return (
    <LayoutAdmin>
      <Menu />
      <div className="user-multi-cont">
        {fullStep === false ? null : (
          <>
            <div className="user-multi-img">
              <img src={img} alt="step" />
            </div>
            {page === null ? null : (
              <div className="user-multi-personal">
                <h2>{page}</h2>
              </div>
            )}
          </>
        )}
        {children}
        <div className="action">
          <button onClick={minus}>BACK</button>
          <button onClick={add}>NEXT</button>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default UserMulti;
