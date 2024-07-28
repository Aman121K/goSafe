import React from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import MainHeader from "../../../Component/MainHeader";
import CustomInput from "../../../Component/CustomInput";
import CustomButton from "../../../Component/CustomButton";
import { normalizeFont, scaleHeight } from "../../../Constant/Dimension";
import { FontFamilies } from "../../../Constant/FontFamilies";
const OtpScreen = () => {
    return (
        <SafeAreaView style={style.mainSection}>
            <MainHeader />
            <ScrollView style={style.subSection}>
                <View>
                    <Text style={style.mainText}>We have sent a verification
                        code to +91 9857521186</Text>
                </View>
                <CustomInput  level="Enter OTP" placeholderText="Enter OTP" />
            </ScrollView>

        </SafeAreaView>
    )
}
export default OtpScreen;
const style = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: '#3A3A3A',
    },
    subSection: {
        marginHorizontal: scaleHeight(15)
    },
    mainText: {
        fontSize: normalizeFont(26),
        color: 'white',
        fontFamily: FontFamilies.Poppins.Medium,
        marginTop: scaleHeight(39)

    }
})