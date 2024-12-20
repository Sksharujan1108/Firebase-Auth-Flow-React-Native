import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../utils/ColorSheet";
import { hp } from "../../../utils/Scaling";

const styles = StyleSheet.create({
    button: {
        height: hp(6),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: Colors.grey,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: RFValue(12),
        fontWeight: 'bold',
        color: Colors.black,
    },
})

export default styles;