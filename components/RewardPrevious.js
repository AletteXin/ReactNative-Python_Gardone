import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, Dimensions } from 'react-native';

const FlowerPrevious = ({ previouslist, rewardOutput }) => {

    return (
        <View style={styles.layout}>

            <View>
                <Text style={styles.title}>HISTORY OF REWARDS</Text>
            </View>

            <ScrollView horizontal >
                {previouslist.map((reward, index) => {
                    return <View key={index} style={styles.previousRewardCard}>
                        <Text>+ {reward[0].points} points</Text>
                        <Image source={rewardOutput(reward[0].state)[0]} style={styles.previousRewardImage} />
                        <Text>{reward[0].task_completed}</Text>
                    </View>

                }).reverse()}
            </ScrollView>
        </View>

    )
};

export default FlowerPrevious;

const styles = StyleSheet.create({

    layout: {
        flex: 1,
        height: "50%",
        width: Dimensions.get('window').width,
        marginBottom: "15%",
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 20,
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

    previousRewardCard: {
        width: 150,
        overflow: 'scroll',
        backgroundColor: '#fdb913',
        margin: 16,
        alignItems: 'center',
        textAlignVertical: 'top',
        padding: 10,
        paddingVertical: 15,
        borderRadius: 20,
    },

    previousRewardImage: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 },
    },

});

