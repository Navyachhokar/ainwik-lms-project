"use client";

import { useState } from "react";
import { CourseCard } from "./CourseCard";
import { Search, Filter, Grid3X3, List } from "lucide-react";
import { cn } from "../../lib/utils"; 

const categories = ["All", "Web Development", "Backend", "Database", "DevOps"];

export function CoursesView({ courses, onContinueCourse }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); 

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-primary">
          My Courses
        </h1>
        <p className="text-gray-500 mt-1">
          Track your progress and continue learning with Ainwik Infotech
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* View Toggle (Grid/List) */}
        <div className="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-lg">
          <button
            onClick={() => setViewMode("grid")}
            className={cn(
              "p-2 rounded-md transition-colors",
              viewMode === "grid"
                ? "bg-primary text-white"
                : "text-gray-400 hover:text-primary",
            )}
          >
            <Grid3X3 size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={cn(
              "p-2 rounded-md transition-colors",
              viewMode === "list"
                ? "bg-primary text-white"
                : "text-gray-400 hover:text-primary",
            )}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-500 font-medium">
        Showing {filteredCourses.length} of {courses.length} courses
      </div>

      {/* Main Course Display */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500 font-medium">
            No courses found matching your search.
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onContinue={onContinueCourse}
            />
          ))}
        </div>
      ) : (
        /* List View Mode */
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-full sm:w-48 h-32 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">
                  {course.category}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex-1 max-w-xs">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {course.progress}% Completed
                    </span>
                  </div>

                  <button
                    onClick={() => onContinueCourse(course.id)}
                    className="ml-4 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-sm"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
