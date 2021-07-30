import React, { useState, useContext } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import RewardLoad from '../components/RewardLoad';
import RewardPrevious from '../components/RewardPrevious';
import RewardTotal from '../components/RewardTotal';
import { LoginContext } from '../LoginContext';
import { useFocusEffect } from '@react-navigation/native';

const Rewards = () => {

    const [token, setToken] = useContext(LoginContext)
    const [previouslist, setPreviouslist] = useState([[{ points: 100, state: "Seedling", task_completed: "Testing", user_id: 1 }]])

    useFocusEffect(
        React.useCallback(() => {
            fetch("https://whispering-wildwood-06588.herokuapp.com/rewardslist", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,
                })
            }).then(response => response.json().then(data => {
                setPreviouslist(data.rewardslist);
            }));
            return () => { };
        }, []));

    const [totalPoints, setTotalpoints] = useState(0)

    useFocusEffect(
        React.useCallback(() => {
            fetch("https://whispering-wildwood-06588.herokuapp.com/rewardslist_totalpoints", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: token,

            })
        }).then(response => response.json().then(data => {
            setTotalpoints(data.total_points);
        }));
            return () => { };
        }, []));


    const maxPoints = 500

    const [rewardInfo, setRewardinfo] = useState({ rewardImage: require('../assets/PacketofSeeds.png'), rewardMessage: 'Plant your first flower by completing a task.' });

    function rewardOutput(state) {

        const output = []

        if (state == "Seedling") {
            output.push(data[0][0].image)
            output.push(data[0][0].message)
        }

        else if (state == "Germination") {
            output.push(data[1][0].image)
            output.push(data[1][0].message)
        }

        else if (state == "Shoots") {
            output.push(data[2][0].image)
            output.push(data[2][0].message)
        }

        else if (state == "Budding") {
            output.push(data[3][0].image)
            output.push(data[3][0].message)
        }

        else if (state == "Blooming") {
            output.push(data[4][0].image)
            output.push(data[4][0].message)
        }

        else {
            output.push(data[5][0].image)
            output.push(data[5][0].message)

        }

        return output
    }


    let data = [
        [{ image: require('../assets/Seedling.png'), message: "You have just planted a new seed. Complete another task and watch your plant grow." }],
        [{ image: require('../assets/Germination.png'), message: "Your plant is growing well. Keep going!" }],
        [{ image: require('../assets/Shoots.png'), message: "Look at those green leaves." }],
        [{ image: require('../assets/Budding.png'), message: "One more task and your flower will bloom!" }],
        [{ image: require('../assets/Blooming.png'), message: "Congratulations! You have harvested a new flower. When you're ready, complete another task to plant a new seed!" }],
        [{ image: require('../assets/PacketofSeeds.png'), message: 'Plant your first flower by completing a task or a Pomodoro timer.' }],
    ]

    return (
        <ScrollView contentContainerStyle={styles.layout}>
            <Text style={styles.header}>REWARDS</Text>
            <RewardTotal totalPoints={totalPoints} />
            <RewardLoad rewardOutput={rewardOutput} previouslist={previouslist} totalPoints={totalPoints} maxPoints={maxPoints} />
            <RewardPrevious previouslist={previouslist} rewardOutput={rewardOutput} />
        </ScrollView>
    )
}

export default Rewards;

const styles = StyleSheet.create({
    
    layout: {
        flexGrow: 3,
        marginTop: "15%",
        margin: "5%",
    },

    header: {
        height: 30,
        width: '100%',
        paddingHorizontal: 20,
        fontSize: 25,
        fontWeight: '500',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '5%',
    },

});

