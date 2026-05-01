"use client";

import { cn } from "../../lib/utils";
import DashboardView from "../../components/lms/DashboardView"
import {
  LayoutDashboard,
  BookOpen,
  User,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "My Courses", icon: BookOpen },
  { id: "profile", label: "Profile", icon: User },
];

export function Sidebar({ activeView, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-white lg:hidden"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-white border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-primary">
                  Ainwik Infotech
                </h1>
                <p className="text-xs text-gray-500">Learning Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onNavigate(item.id);
                        setMobileOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                        isActive
                          ? "bg-primary text-white shadow-md"
                          : "text-gray-600 hover:bg-gray-100",
                      )}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Card */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-primary font-semibold">JS</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-gray-900 truncate">
                  John Smith
                </p>
                <p className="text-xs text-gray-500 truncate">
                  john@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
