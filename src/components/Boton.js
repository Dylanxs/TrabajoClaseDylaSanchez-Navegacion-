import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const CustomButton = ({ buttonText, buttonAction }) => {
    return (
        <TouchableOpacity onPress={buttonAction} style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#3498db', // Cambié el color para un tono más moderno
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 8,
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        textTransform: 'uppercase',
    },
});
