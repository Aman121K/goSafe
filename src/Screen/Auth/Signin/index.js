import React from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from "../../../Constant/Dimension";
import CustomInput from "../../../Component/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { FontFamilies } from "../../../Constant/FontFamilies";
import Images from "../../../Constant/Images";
import CustomButton from "../../../Component/CustomButton";

const Signin = () => {
    const navigation = useNavigation();
    const linkingData = ['Terms of Services', 'Privacy Policy', 'Content Policy'];

    const onButtonClick = () => {
        navigation.navigate('OtpScreen');
    }

    return (
        <SafeAreaView style={Styles.mainSection}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={Styles.subSection}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: scaleHeight(45.13), marginBottom: scaleHeight(45) }}>
                            <Image source={Images.parkingIcon} />
                            <Image style={{ top: scaleHeight(-40) }} source={Images.scanQrCode} />
                            <Image source={Images.callingPerson} />
                        </View>
                        <View style={Styles.logoSection}>
                            <Image style={{ alignSelf: 'center' }} source={Images.logo} />
                        </View>
                    </View>
                    <Text style={Styles.mainText}>India's #1 Scan App where vehicle owners meet</Text>
                    <CustomInput isCountry={true} level="Mobile Number" placeholderText="Enter Mobile Number" />
                    <CustomButton level="Get OTP" onButtonClick={onButtonClick} />
                    <View>
                        <Text style={Styles.linkingHeader}>By continuing, you agree to our</Text>
                        <View style={Styles.linkingSection}>
                            {linkingData.map((item, index) => (
                                <Text key={index} style={Styles.linkingText}>{item}</Text>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Signin;

const Styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: '#3A3A3A',
        paddingHorizontal: scaleWidth(18)
    },
    subSection: {
        marginHorizontal: scaleHeight(16),
        flexGrow: 1,
        justifyContent: 'center'
    },
    mainText: {
        fontSize: normalizeFont(26),
        fontFamily: FontFamilies.Poppins.Medium,
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: scaleHeight(20)
    },
    linkingSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    linkingHeader: {
        fontSize: normalizeFont(12),
        color: 'white',
        fontFamily: FontFamilies.Poppins.regular,
        alignSelf: 'center',
        marginTop: scaleHeight(59)
    },
    linkingText: {
        fontSize: normalizeFont(12),
        color: 'white',
        fontFamily: FontFamilies.Poppins.regular,
        textDecorationLine: 'underline',
        marginTop: scaleHeight(8)
    },
    logoSection: {
        backgroundColor: 'white',
        borderRadius: scaleWidth(99),
        alignSelf: 'center',
        paddingHorizontal: scaleWidth(20),
        marginBottom: scaleHeight(160)
    }
});
