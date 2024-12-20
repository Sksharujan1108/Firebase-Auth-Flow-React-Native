import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../utils/ColorSheet";
import { hp, wp } from "../../../utils/Scaling";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: hp(2),
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    height: hp(6),
    paddingHorizontal: wp(3),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  textInput: {
    flex: 1,
    height: '100%',
    // backgroundColor: 'red'
  },
  label: {
    fontSize: Platform.OS === "android" ? RFValue(14) : RFValue(12),
    color: Colors.black,
    fontWeight: "600",
    marginBottom: hp(1),
  },
  activeInputFocused: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // elevation: 3,
  },
  errorInputContainer: {
    borderColor: Colors.danger,
  },
  error: {
    color: Colors.danger,
    fontSize: RFValue(12),
    marginTop: hp(0.5),
  },
});

export default styles;
