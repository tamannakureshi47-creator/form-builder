
import React from "react";
import {
  FiGrid,
  FiFileText,
  FiUsers,
  FiSettings,
  FiHelpCircle,
  FiChevronRight,
  FiHardDrive,
  FiZap,
} from "react-icons/fi";

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", Icon: FiGrid, active: false },
    { label: "Forms", Icon: FiFileText, active: true },
    { label: "Users", Icon: FiUsers, active: false },
    { label: "Settings", Icon: FiSettings, active: false },
  ];

  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-64 shrink-0 flex-col border-r border-slate-200/80 bg-white md:flex">
      {/* Workspace */}
      <div className="border-b border-slate-100 p-5">
        <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20">
            <FiZap size={21} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-slate-800">
              Form Builder
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">Workspace</p>
          </div>
          <FiChevronRight className="text-slate-400" size={16} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Main Menu
        </p>

        <div className="space-y-2">
          {navItems.map(({ label, Icon, active }) => (
            <button
              key={label}
              type="button"
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 font-semibold text-white shadow-lg shadow-blue-500/20"
                  : "font-medium text-slate-500 hover:translate-x-1 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon
                size={19}
                className={
                  active
                    ? "text-white"
                    : "text-slate-400 transition group-hover:text-blue-600"
                }
              />
              <span className="flex-1">{label}</span>
              {active && <FiChevronRight size={16} />}
            </button>
          ))}
        </div>

        <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Resources
        </p>

        <button
          type="button"
          className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
        >
          <FiHelpCircle
            size={19}
            className="text-slate-400 transition group-hover:text-blue-600"
          />
          <span className="flex-1 text-left">Help & Support</span>
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-100 px-1.5 text-[10px] font-bold text-rose-600">
            3
          </span>
        </button>
      </nav>

      {/* Storage */}
      <div className="p-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <FiHardDrive size={17} />
              </div>
              <span className="text-sm font-bold text-slate-800">Storage</span>
            </div>
            <span className="text-xs font-bold text-blue-600">25%</span>
          </div>

          <div className="mb-2 flex justify-between text-[11px] text-slate-500">
            <span>25 GB used</span>
            <span>100 GB</span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full bg-slate-200"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Storage used"
          >
            <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
          </div>

          <p className="mt-3 text-[11px] leading-5 text-slate-500">
            Your workspace is running smoothly.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
