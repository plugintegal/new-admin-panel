import React, { Component } from "react";
import logoPlugin from "../../../../Assets/Images/logo-plugin.png";
import { BiTachometer, BiGroup, BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const SidebarComponent = (props) => {
  return (
    
    <>
      <div
        className={
          (props.toggle === false ? "w-60" : "w-20") +
          " z-50 top-16 bottom-0 mt-0 fixed shadow "
        }
      >
        <div className="h-full bg-gray-700 rounded-br-xl">
          <div className="pt-2.5 pb-7">
            <ul>
              <li className="py-3 px-5 text-gray-400 block">Menu</li>
              <li className="block">
                <Link
                  to="/"
                  className="py-3 px-7 text-gray-400 text-lg font-regular font-poppins flex items-center gap-4"
                >
                  <div className="">
                    <span>
                      <BiTachometer style={{ fontSize: 24 }} />
                    </span>
                  </div>
                  <span
                    style={{ display: props.toggle === false ? "" : "none" }}
                    className="inline-block relative"
                  >
                    Dashboard
                  </span>
                </Link>
              </li>

              <li className="block">
                <Link
                  to="/squad"
                  className="py-3 px-7 text-gray-400 text-lg font-regular font-poppins flex items-center gap-4"
                >
                  <div className="">
                    <span>
                      <BiGroup style={{ fontSize: 24 }} />
                    </span>
                  </div>
                  <span
                    style={{ display: props.toggle === false ? "" : "none" }}
                    className="inline-block relative"
                  >
                    Squad
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
