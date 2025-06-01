import { useLocalSearchParams } from "expo-router";
import Exercise from "./exercise";
import { useState } from "react";

export default function Lessons() {
  const { lessons, title } = useLocalSearchParams();
  const parsedLessons = typeof lessons === "string" ? JSON.parse(lessons) : [];
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const handleLessonComplete = () => {
    if (currentLessonIndex < parsedLessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  return (
    <Exercise 
      currentLesson={parsedLessons[currentLessonIndex]}
      allLessons={parsedLessons}
      onComplete={handleLessonComplete}
      title={title as string}
    />
  );
}