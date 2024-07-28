import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from "../../../Constant/Images";
import { normalizeFont, scaleHeight, scaleWidth } from "../../../Constant/Dimension";
import { FontFamilies, fontFamilies } from "../../../Constant/FontFamilies";

const Splash = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            id: '1', image: Images.frame1,
            level: 'Spot a wrongly parked car? Take action easily with our app.'
        },
        {
            id: '2', image: Images.frame3,
            level: 'Scan QR to connect Instantly with Car Owner.'
        },
        {
            id: '3', image: Images.frame2,
            level: 'Effortlessly reach car owner and clear the way with a quick call.'
        },
    ];

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    };

    const handleSkip = () => {
        navigation.navigate('Signin');
    };

    const handleDone = () => {
        navigation.navigate('Signin');
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const renderItem = ({ item, index }) => (
        <View style={style.imageContainer}>
            {index === 1 && <Text style={style.levelTextRight}>{item.level}</Text>}
            <Image source={item.image} style={style.image} />
            {(index === 0 || index === 2) && <Text style={style.levelTextLeft}>{item.level}</Text>}
        </View>
    );

    return (
        <SafeAreaView style={style.mainSection}>
            <TouchableOpacity onPress={handleSkip}>
                <Text style={style.skipText}>Skip</Text>
            </TouchableOpacity>
            <FlatList
                data={slides}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                keyExtractor={(item) => item.id}
            />
            <View style={style.bottomBar}>
                <View style={style.dotsContainer}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                style.dot,
                                currentIndex === index ? style.activeDot : style.inactiveDot,
                            ]}
                        />
                    ))}
                </View>
                <TouchableOpacity
                    onPress={currentIndex === slides.length - 1 ? handleDone : handleSkip}
                    style={style.skipButton}
                >
                    <Text style={style.skipText}>
                        {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Splash;

const style = StyleSheet.create({
    mainSection: {
        backgroundColor: '#3A3A3A',
        flex: 1
    },
    skipText: {
        color: 'white',
        alignSelf: 'flex-end',
        fontSize: normalizeFont(16),
        fontFamily: FontFamilies.Poppins.Medium,
        marginHorizontal: scaleWidth(10)
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: scaleWidth(393),
    },
    image: {
        height: scaleHeight(430),
        width: scaleWidth(393),
        resizeMode: 'contain'
    },
    skipButtonText: {
        color: 'white'
    },
    activeDot: {
        height: scaleHeight(6),
        width: scaleWidth(39),
        backgroundColor: '#F5AF2B',
        borderRadius: scaleWidth(44)
    },
    inactiveDot: {
        height: scaleHeight(6),
        width: scaleWidth(20),
        backgroundColor: 'white',
        marginHorizontal: scaleHeight(2),
        borderRadius: scaleWidth(44)
    },
    dotsContainer: {
        flexDirection: 'row'
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(15)
    },
    levelTextLeft: {
        fontSize: normalizeFont(28),
        fontFamily: FontFamilies.Poppins.bold,
        color: 'white',
        marginHorizontal: scaleWidth(15),
        marginBottom: scaleHeight(10)
    },
    levelTextRight: {
        fontSize: normalizeFont(28),
        fontFamily: FontFamilies.Poppins.bold,
        color: 'white',
        alignSelf: 'flex-end',
        marginHorizontal: scaleWidth(15)
    }
});
