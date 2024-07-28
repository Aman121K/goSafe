import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from "../../Constant/Dimension";
import { FontFamilies } from "../../Constant/FontFamilies";
const CustomInput = ({ level, placeholderText, isCountry }) => {
    return (
        <SafeAreaView style={Styles.mainSection}>
            <Text style={Styles.level}>{level}</Text>
            <View style={Styles.borderSection}>
                {isCountry && (
                    <>
                        <Text style={Styles.countryCode}>+91</Text>
                        <View style={Styles.borderHeight} />
                    </>
                )
                }
                <TextInput
                    style={Styles.InputText}
                    placeholder={placeholderText}
                    placeholderTextColor='#FFFFFF'
                    selectionColor='#FFFFFF'
                />
            </View>
        </SafeAreaView>

    )
}
export default CustomInput;
const Styles = StyleSheet.create({
    mainSection: {
        marginTop: scaleHeight(8)
    },
    borderSection: {
        borderWidth: .5,
        borderColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: scaleWidth(10),
        alignItems: 'center'
    },
    borderHeight: {
        height: scaleHeight(20),
        backgroundColor: '#FFFFFF',
        width: scaleWidth(1)
    },
    countryCode: {
        color: 'white',
        marginHorizontal: scaleWidth(10),
        marginVertical: scaleHeight(8.5)
    },
    level: {
        color: '#FFFFFF',
        fontSize: normalizeFont(14),
        fontFamily: FontFamilies.Poppins.regular,
        marginBottom: scaleHeight(2)
    },
    InputText: {
        marginHorizontal: scaleWidth(10),
        color: 'white',
        marginVertical: scaleHeight(8.5)
    }
})