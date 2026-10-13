
import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const linkStyle =
    "group flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white";

  return (
    <footer className="relative overflow-hidden bg-[#101827] text-slate-300">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-14 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="mb-5 inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-xl font-extrabold text-white shadow-lg shadow-blue-500/20">
                F
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  Form Builder
                </h3>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                  Create with confidence
                </p>
              </div>
            </a>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Create powerful, secure and beautiful forms with simple
              validation and effortless customization.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: FiFacebook, label: "Facebook" },
                { Icon: FiTwitter, label: "Twitter" },
                { Icon: FiInstagram, label: "Instagram" },
                { Icon: FiLinkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className={linkStyle}>
                    <FiArrowUpRight className="text-blue-400 opacity-0 transition group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm font-bold text-white">Our Services</h4>
            <ul className="space-y-4">
              {["Form Builder", "Form Validation", "Templates", "Support"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className={linkStyle}>
                      <FiArrowUpRight className="text-blue-400 opacity-0 transition group-hover:opacity-100" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-bold text-white">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@formbuilder.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <FiMail size={16} />
                </span>
                <span className="break-all pt-2">contact@formbuilder.com</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <FiPhone size={16} />
                </span>
                <span className="pt-2">+91 9876543210</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FiMapPin size={16} />
                </span>
                <span className="pt-2">123 Street, City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Form Builder. All rights reserved.</p>
          <p>
            Crafted with <span className="text-rose-400">♥</span> for better
            forms.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
