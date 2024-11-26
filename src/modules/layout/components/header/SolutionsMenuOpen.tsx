import React from "react";
import { IconType } from "react-icons"; // Use react-icons for illustrative icons
import {
  FaBuilding,
  FaUsers,
  FaBalanceScale,
  FaClipboardList,
} from "react-icons/fa";

interface SolutionsMenuOpenProps {
  closeMenu: () => void; // Function to close the menu
}

const menuData = {
  byIndustry: [
    { icon: FaBuilding, label: "Finance Services" },
    { icon: FaUsers, label: "Manufacturing" },
    { icon: FaUsers, label: "Manufacturing" },
    { icon: FaUsers, label: "Manufacturing" },
    { icon: FaUsers, label: "Manufacturing" },
    { icon: FaUsers, label: "Manufacturing" },
  ],
  byDepartment: [
    { icon: FaClipboardList, label: "Human Resources" },
    { icon: FaBalanceScale, label: "Legal & Compliance" },
    { icon: FaBalanceScale, label: "Legal & Compliance" },
    { icon: FaBalanceScale, label: "Legal & Compliance" },
    { icon: FaBalanceScale, label: "Legal & Compliance" },
    { icon: FaBalanceScale, label: "Legal & Compliance" },
  ],
  useCases: [
    { icon: FaClipboardList, label: "Employee Onboarding" },
    { icon: FaBuilding, label: "Vendor Onboarding" },
  ],
};

const SolutionsMenuOpen: React.FC<SolutionsMenuOpenProps> = ({ closeMenu }) => {
  return (
    <div
      className="fixed left-0 right-0 top-[72px] z-50 bg-white w-[1006px] mx-auto"
      style={{ boxShadow: "0px 10px 13.3px 0px #3C3C3C1F" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full max-w-[1006px] mx-auto pl-8 h-full">
        <div className="flex items-start h-[504px] overflow-y-auto">
          <div className="flex flex-col w-[657px] min-h-full">
            {/* By Industry Section */}
            <div>
              <div className="font-bold text-lg mb-4 border-b border-[#6C849D2E]">
                <h2 className="pt-6 pb-3 text-[#58728D] text-[14px] font-bold leading-[19.07px]">
                  By Industry
                </h2>
              </div>
                <ul className="grid grid-cols-2 w-full">
                  {menuData.byIndustry.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 pl-4 h-[56px] hover:text-[#F2400A] text-[#2F4256] text-[16px] font-semibold leading-[21.79px] cursor-pointer"
                      onClick={closeMenu}
                    >
                      <item.icon className="text-[#F2400A] w-6 h-6" />
                      {item.label}
                    </li>
                  ))}
                </ul>
            </div>

            {/* By Department Section */}
            <div>
              <div className="font-bold text-lg mt-4 mb-4 border-b border-[#6C849D2E]">
                <h2 className="text-[#58728D] text-[14px] font-bold leading-[19.07px] pb-3">
                  By Department
                </h2>
              </div>
              <ul className="grid grid-cols-2 w-full">
                {menuData.byDepartment.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 pl-4 h-[56px] hover:text-[#F2400A] text-[#2F4256] text-[16px] font-semibold leading-[21.79px] cursor-pointer"
                    onClick={closeMenu}
                  >
                    <item.icon className="text-[#F2400A] w-6 h-6" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="bg-[#F1F5FA] min-w-[350px] h-full min-h-full">
            <div className="font-bold text-lg border-b border-[#6C849D2E] px-8">
              <h2 className="pt-6 pb-3 text-[#58728D] text-[14px] font-bold leading-[19.07px]">
                {" "}
                Use Cases
              </h2>
            </div>
            <ul className="py-4 px-8">
              {menuData.useCases.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 h-[56px] hover:text-[#F2400A] text-[#2F4256] text-[16px] font-semibold leading-[21.79px] cursor-pointer"
                  onClick={closeMenu}
                >
                  <item.icon className="text-[#F2400A] w-6 h-6" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMenuOpen;
