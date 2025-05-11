import { router } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

interface arrowBackProps {
    color: string
}

export default function ArrowBack({ color }: arrowBackProps) {
    return(
        <TouchableOpacity style={{position: 'absolute', top: 20, left: 20}} onPress={() => router.back()}>
            <CaretLeft size={36} color={color} />
        </TouchableOpacity>
    )
}
