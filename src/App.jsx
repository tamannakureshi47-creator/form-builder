
import React from "react";
import {
  FiBell,
  FiChevronDown,
  FiCommand,
  FiSearch,
} from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import FormValidation from "./components/FormValidation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f4f7ff] text-slate-800">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-extrabold text-white shadow-lg shadow-blue-500/25">
              F
            </div>

            <div>
              <h1 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                FormApp
              </h1>
              <p className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-400 sm:text-xs">
                SIMPLE FORM VALIDATION
              </p>
            </div>
          </a>

          {/* Search */}
          <div className="hidden max-w-sm flex-1 lg:block">
            <div className="flex h-10 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-blue-300 focus-within:bg-white">
              <FiSearch size={17} className="text-slate-400" />
              <input
                type="search"
                placeholder="Search anything..."
                aria-label="Search"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <span className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-1 text-[10px] text-slate-400">
                <FiCommand size={11} /> K
              </span>
            </div>
          </div>

          {/* Profile */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600"
            >
              <FiBell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
            </button>

            <div className="h-8 w-px bg-slate-200" />

            <button
              type="button"
              className="flex items-center gap-2.5 rounded-xl py-1 pl-1 pr-1 transition hover:bg-slate-50 sm:pl-2 sm:pr-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-xs font-bold text-white shadow-md shadow-blue-500/20">
                JD
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-bold text-slate-800">John Doe</p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Administrator
                </p>
              </div>

              <FiChevronDown
                size={15}
                className="hidden text-slate-400 sm:block"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex min-h-[calc(100vh-72px)]">
        <Sidebar />

        <main className="min-w-0 flex-1">
          {/* Page Heading */}
          <div className="mx-auto max-w-7xl px-4 pb-0 pt-8 sm:px-6 lg:px-10 lg:pt-10">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-blue-600">Registration</span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Registration Workspace
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Manage registration details with a clean, secure and
                  easy-to-use form experience.
                </p>
              </div>

             
            </div>

            {/* Info Cards */}
            <div className="mb-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FiSearch size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Validation
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-slate-800">
                      Real-time Feedback
                    </h3>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-900/5 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <FiCommand size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Experience
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-slate-800">
                      Simple & Responsive
                    </h3>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                    <FiBell size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Account
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-slate-800">
                      Secure Registration
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <FormValidation />
        </main>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default App;
