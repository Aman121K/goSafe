import React from "react";
import {  StyleSheet, Text, TouchableOpacity } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from "../../Constant/Dimension";
import { FontFamilies } from "../../Constant/FontFamilies";
const CustomButton=({level,onButtonClick})=>{
    return(
        <TouchableOpacity onPress={onButtonClick} activeOpacity={.5} style={style.mainSection}>
            <Text style={style.levelText}>{level}</Text>
        </TouchableOpacity>

    )
}
export default CustomButton;
const style=StyleSheet.create({
    mainSection:{
        backgroundColor:'#F5AF2B',
        paddingVertical:scaleHeight(11),
        alignItems:'center',
        marginTop:scaleHeight(21),
        borderRadius:scaleWidth(10)
    },
    levelText:{
        fontSize:normalizeFont(16),
        color:'white',
        fontFamily:FontFamilies.Poppins.Medium
    }
})