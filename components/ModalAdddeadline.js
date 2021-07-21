import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Adddeadline from './Adddeadline';

const ModalAdddeadline = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <View>
            <Button title="Add Deadline" onPress={toggleModal} />
            <Modal
                isVisible={isModalVisible}>
                <View style={styles.container}>
                    <Adddeadline />
                    <View>
                        <Button title="Hide modal" onPress={toggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdb913',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 30,
        borderRadius: 20,
    },
});
export default ModalAdddeadline;