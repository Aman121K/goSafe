import React from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Images from "../../Constant/Images";
import { useNavigation } from "@react-navigation/native";
const MainHeader = () => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={Styles.mainSection}>
            <TouchableOpacity onPress={() => goBack()}>
                <Image source={Images.backIcon} />
            </TouchableOpacity>
        </SafeAreaView>

    )
}
export default MainHeader;
const Styles = StyleSheet.create({
    mainSection: {
    margin
    }
})