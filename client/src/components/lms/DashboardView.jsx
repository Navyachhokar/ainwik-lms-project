"use client";

import { CourseCard } from "./CourseCard";
import {
  BookOpen,
  Trophy,
  Clock,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    label: "Enrolled Courses",
    value: "6",
    icon: BookOpen,
    trend: "+2 this month",
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Completed",
    value: "3",
    icon: Trophy,
    trend: "50% completion rate",
    color: "bg-secondary/20 text-primary",
  },
  {
    label: "Hours Learned",
    value: "47",
    icon: Clock,
    trend: "+12 this week",
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Certificates",
    value: "2",
    icon: TrendingUp,
    trend: "1 pending",
    color: "bg-secondary/20 text-primary",
  },
];

export default function DashboardView({ courses, onContinueCourse }) {
  const inProgressCourses = courses.filter(
    (c) => c.progress > 0 && c.progress < 100,
  );

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-6 lg:p-8 text-white shadow-xl">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">
          Welcome back, Learner! 👋
        </h1>
        <p className="text-blue-100 max-w-xl">
          You are doing great at Ainwik Infotech. Continue your MERN Stack or
          Java journey and reach your career goals.
        </p>
        {inProgressCourses.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onContinueCourse(inProgressCourses[0].id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-primary rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-md"
            >
              Continue Learning
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}
              >
                <Icon size={20} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              <p className="text-xs text-primary font-semibold mt-2">
                {stat.trend}
              </p>
            </div>
          );
        })}
      </div>

      {/* Sections for Courses */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          In-Progress Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {inProgressCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onContinue={onContinueCourse}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

