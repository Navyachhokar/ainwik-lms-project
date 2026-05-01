"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardView } from "./DashboardView";
import { CoursesView } from "./CoursesView";
import { ProfileView } from "./ProfileView";
import { VideoPlayerView } from "./VideoPlayerView";


const sampleCourses = [
  {
    id: "1",
    title: "MERN Stack Development",
    description:
      "Master MongoDB, Express.js, React, and Node.js with hands-on industrial projects.",
    progress: 75,
    totalLessons: 48,
    completedLessons: 36,
    duration: "6 Months",
    thumbnail: "https://skillicons.dev/icons?i=mongodb,express,react,nodejs",
    category: "Web Development",
  },
  {
    id: "2",
    title: "Java Expert Program",
    description:
      "Deep dive into Core Java, Advanced Java, and Spring Boot framework.",
    progress: 45,
    totalLessons: 60,
    completedLessons: 27,
    duration: "4 Months",
    thumbnail: "https://skillicons.dev/icons?i=java,spring",
    category: "Backend",
  },
  {
    id: "3",
    title: "Python for Data Science",
    description:
      "Learn Python basics to advanced analytics and machine learning fundamentals.",
    progress: 30,
    totalLessons: 42,
    completedLessons: 13,
    duration: "3 Months",
    thumbnail: "https://skillicons.dev/icons?i=python",
    category: "Data Science",
  },
];

const sampleLessons = [
  {
    id: "1",
    title: "Introduction to MERN Stack",
    duration: "12:30",
    completed: true,
  },
  { id: "2", title: "Environment Setup", duration: "18:45", completed: true },
  {
    id: "3",
    title: "MongoDB Schema Design",
    duration: "24:15",
    completed: true,
  },
  {
    id: "4",
    title: "Express Server Architecture",
    duration: "20:00",
    completed: true,
  },
  {
    id: "5",
    title: "React State Management",
    duration: "28:30",
    completed: false,
    current: true,
  },
];

export default function LmsDashboard() {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(sampleLessons[4]);

  const handleContinueCourse = (courseId) => {
    const course = sampleCourses.find((c) => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setActiveView("video");
    }
  };

  const handleLessonSelect = (lessonId) => {
    const lesson = sampleLessons.find((l) => l.id === lessonId);
    if (lesson) {
      setCurrentLesson(lesson);
    }
  };

  const handleBackFromVideo = () => {
    setActiveView("courses");
    setSelectedCourse(null);
  };


  if (activeView === "video" && selectedCourse) {
    return (
      <VideoPlayerView
        courseTitle={selectedCourse.title}
        lessons={sampleLessons}
        currentLesson={currentLesson}
        onBack={handleBackFromVideo}
        onLessonSelect={handleLessonSelect}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        activeView={activeView}
        onNavigate={(view) => setActiveView(view)}
      />

      {/* Main Content Area */}
      <main className="lg:ml-72 min-h-screen">
        <div className="p-4 pt-16 lg:pt-6 lg:p-8">
          {activeView === "dashboard" && (
            <DashboardView
              courses={sampleCourses}
              onContinueCourse={handleContinueCourse}
            />
          )}
          {activeView === "courses" && (
            <CoursesView
              courses={sampleCourses}
              onContinueCourse={handleContinueCourse}
            />
          )}
          {activeView === "profile" && <ProfileView />}
        </div>
      </main>
    </div>
  );
}
