import { StyleSheet } from "react-native";

export default
    StyleSheet.create({
        view: {
            height: '100%',
            width: '100%'
        },
        title: {
            fontSize: 18.5,
            textAlign: 'center',
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { height: 0, width: 2 },
            textShadowRadius: 4,
        },
});
