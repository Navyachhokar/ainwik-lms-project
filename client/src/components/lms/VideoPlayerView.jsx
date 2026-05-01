"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipBack,
  SkipForward,
  CheckCircle2,
  Circle,
  ChevronLeft,
  Clock,
  BookOpen,
} from "lucide-react";
import { cn } from "../../lib/utils";

export function VideoPlayerView({
  courseTitle,
  lessons,
  currentLesson,
  onBack,
  onLessonSelect,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);

  const completedCount = lessons.filter((l) => l.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Back to Courses</span>
          </button>
          <div className="h-6 w-px bg-gray-200 hidden sm:block" />
          <h1 className="font-bold text-primary truncate">{courseTitle}</h1>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Video Player Section */}
        <div className="flex-1 lg:order-1">
          <div className="sticky top-[57px] bg-black shadow-2xl">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/40 to-blue-900 flex items-center justify-center">
              {/* Playback Overlay */}
              <div className="text-center">
                <div
                  className={cn(
                    "w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer transition-transform hover:scale-110 border border-white/20",
                    isPlaying && "animate-pulse",
                  )}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </div>
              </div>

              {/* Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 lg:p-6">
                {/* Progress Bar */}
                <div
                  className="h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = (x / rect.width) * 100;
                    setProgress(Math.min(100, Math.max(0, percentage)));
                  }}
                >
                  <div
                    className="h-full bg-secondary rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform" />
                  </div>
                </div>

                {/* Controls Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-secondary transition-colors"
                    >
                      {isPlaying ? <Pause size={26} /> : <Play size={26} />}
                    </button>
                    <div className="flex items-center gap-4">
                      <button className="text-white/80 hover:text-white transition-colors">
                        <SkipBack size={22} />
                      </button>
                      <button className="text-white/80 hover:text-white transition-colors">
                        <SkipForward size={22} />
                      </button>
                    </div>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white/80 hover:text-white transition-colors ml-2"
                    >
                      {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                    </button>
                    <span className="text-white/60 text-sm font-mono hidden sm:block">
                      04:12 / 18:45
                    </span>
                  </div>
                  <button className="text-white/80 hover:text-secondary transition-colors">
                    <Maximize size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Metadata Area */}
          <div className="p-6 lg:p-10 bg-white">
            <div className="max-w-4xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-primary px-3 py-1 rounded mb-4 inline-block">
                Currently Playing
              </span>
              <h2 className="text-2xl lg:text-3xl font-black text-primary mb-4">
                {currentLesson.title}
              </h2>
              <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-secondary" />
                  <span className="font-medium">{currentLesson.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-secondary" />
                  <span className="font-medium">
                    Lesson{" "}
                    {lessons.findIndex((l) => l.id === currentLesson.id) + 1} of{" "}
                    {lessons.length}
                  </span>
                </div>
              </div>
              <div className="mt-8 text-gray-600 leading-relaxed">
                <p>
                  Welcome to this session at <strong>Ainwik Infotech</strong>.
                  In this module, we dive deep into the industrial applications
                  of the curriculum. Ensure you have your development
                  environment ready for the hands-on section.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Lesson List */}
        <div className="w-full lg:w-96 lg:order-2 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white">
          <div className="sticky top-[57px]">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-lg text-primary">Course Content</h3>
              <div className="mt-3">
                <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 uppercase tracking-tight">
                  <span>Your Progress</span>
                  <span>
                    {Math.round((completedCount / lessons.length) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{
                      width: `${(completedCount / lessons.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="max-h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar">
              <ul className="divide-y divide-gray-50">
                {lessons.map((lesson, index) => (
                  <li key={lesson.id}>
                    <button
                      onClick={() => onLessonSelect(lesson.id)}
                      className={cn(
                        "w-full flex items-start gap-4 p-5 text-left transition-all",
                        lesson.id === currentLesson.id
                          ? "bg-primary/5 border-l-4 border-secondary"
                          : "hover:bg-gray-50 border-l-4 border-transparent",
                      )}
                    >
                      <div className="mt-1">
                        {lesson.completed ? (
                          <CheckCircle2 size={20} className="text-green-500" />
                        ) : lesson.id === currentLesson.id ? (
                          <Play
                            size={20}
                            className="text-primary fill-primary/10"
                          />
                        ) : (
                          <Circle size={20} className="text-gray-300" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={cn(
                            "font-bold text-sm",
                            lesson.id === currentLesson.id
                              ? "text-primary"
                              : "text-gray-700",
                          )}
                        >
                          {index + 1}. {lesson.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-400 font-medium">
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
