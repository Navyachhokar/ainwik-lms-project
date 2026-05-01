"use client";

import { PlayCircle, Clock, BookOpen } from "lucide-react";

export function CourseCard({ course, onContinue }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      <div className="relative h-40 bg-gray-50 overflow-hidden flex items-center justify-center p-6">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-secondary text-primary text-[10px] font-bold rounded-full shadow-sm uppercase tracking-tighter">
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

        {/* Course Meta */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{course.totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-400 text-xs uppercase font-medium">
              Progress
            </span>
            <span className="font-bold text-primary">{course.progress}%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => onContinue(course.id)}
          className="w-full py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
        >
          <PlayCircle size={18} />
          Continue Learning
        </button>
      </div>
    </div>
  );
}
