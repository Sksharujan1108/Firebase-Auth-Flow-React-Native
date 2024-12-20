import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../utils/ColorSheet";
import { hp } from "../../../utils/Scaling";

const styles = StyleSheet.create({
    button: {
        height: hp(6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: Platform.OS === 'android' ? RFValue(15) : RFValue(12),
        fontWeight: 'bold',
        color: Colors.secondary,
    },
})

export default styles;