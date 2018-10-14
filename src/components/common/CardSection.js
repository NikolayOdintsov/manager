import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    //trick to pass everything from parent
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', //horizontal direction
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
