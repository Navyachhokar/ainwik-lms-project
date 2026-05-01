"use client";

import { PlayCircle, Clock, BookOpen } from "lucide-react";

export function CourseCard({ course, onContinue }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail Area */}
      <div className="relative h-40 bg-gray-100 overflow-hidden group">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full shadow-sm">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Course Meta Data */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{course.totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-500">Progress</span>
            <span className="font-bold text-primary">{course.progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider font-semibold">
            {course.completedLessons} / {course.totalLessons} LESSONS DONE
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onContinue(course.id)}
          className="w-full py-2.5 px-4 bg-primary text-white rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <PlayCircle size={18} />
          Continue Learning
        </button>
      </div>
    </div>
  );
}
