import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const RewardLoad = ({ previouslist, totalPoints, rewardOutput, maxPoints }) => {

    const lastitem = previouslist.length - 1
    const points_required = maxPoints - (totalPoints % maxPoints)
 
    return (
        <View style={styles.layout}>
            <Text style={styles.title}> STATUS OF NEXT REWARD </Text>
            <View style={styles.layoutcenter}>
                <Text style={styles.currentPointsTitle}>Remaining points required to claim reward</Text>
                <Text style={styles.currentPointsDisplay}> {points_required} </Text>
                <Image source={rewardOutput(previouslist[lastitem][0].state)[0]} style={styles.rewardPic} />
                <Text style={styles.messageRewardsDisplay}>{rewardOutput(previouslist[lastitem][0].state)[1]}</Text>
            </View>
        </View>
    )
};

export default RewardLoad;

const styles = StyleSheet.create({

    layout: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },

    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },

    layoutcenter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "5%",
    },

    rewardPic: {
        height: 270,
        width: 270,
        justifyContent: 'center',
        alignItems: 'center',
    },

    currentPointsDisplay: {
        fontSize: 33,
        color: '#0000c8',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
    },

    messageRewardsDisplay: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        color: '#0000c8',
    },

    currentPointsTitle: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

