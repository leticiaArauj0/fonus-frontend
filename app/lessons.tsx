import { useLocalSearchParams } from "expo-router";
import Exercise from "./exercise";
import { useState } from "react";

export default function Lessons() {
  const { lessons, title } = useLocalSearchParams();
  const parsedLessons = JSON.parse(lessons as string);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attemptsData, setAttemptsData] = useState<number[]>(Array(parsedLessons.length).fill(0));
  const getAttemptsForLesson = (index: number) => attemptsData[index];

  const updateLessonState = (index: number, attempts: number) => {
    const newAttempts = [...attemptsData];
    newAttempts[index] = attempts;
    setAttemptsData(newAttempts);
  };

  const handleComplete = (attempts: number) => {
    updateLessonState(currentIndex, attempts);
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <Exercise
      key={currentIndex}
      currentLesson={parsedLessons[currentIndex]}
      allLessons={parsedLessons}
      onComplete={handleComplete}
      title={title as string}
      currentIndex={currentIndex}
      updateLessonState={updateLessonState}
      getAttemptsForLesson={getAttemptsForLesson}
    />
  );
}