import { Link } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

interface arrowBackProps {
    color: string
}

export default function ArrowBack({ color }: arrowBackProps) {
    return(
        <Link href='/home' asChild>
            <TouchableOpacity style={{position: 'absolute', top: 20, left: 20}}>
                <CaretLeft size={36} color={color} />
            </TouchableOpacity>
        </Link>
    )
}
