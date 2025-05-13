import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import Exercise from "./exercise";
import ExerciseLink from "./exerciseLink";

export default function Lessons() {
  const { lessons } = useLocalSearchParams();
  const parsedLessons = typeof lessons === "string" ? JSON.parse(lessons) : [];

  return (
    <View>
      {parsedLessons.map((lesson: any, idx: any) => (
        <View key={idx}>
          {lesson.type === "ouca-repita" ? (
            <Exercise number={lesson.number} phonetic={lesson.phonetic} imgUrl={lesson.imageUrl} />
          ) : (
            <ExerciseLink number={lesson.number}/>
          )}
        </View>
      ))}
    </View>
  );
}
