import { Platform, StyleSheet } from "react-native";
import { hp } from "../../utils/Scaling";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../utils/ColorSheet";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? hp(5) : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: hp(2)
    },
    headerText: {
        fontSize: Platform.OS === 'android' ? RFValue(20) : RFValue(12),
        fontWeight: '800',
        color: '#001520'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 5,
        width: '100%',
        marginTop: hp(5),
        padding: hp(2),
        gap: 15,
        borderTopWidth: 1,
        borderTopColor: Colors.grey,
        // alignItems: 'center',
    }
})

export default styles;