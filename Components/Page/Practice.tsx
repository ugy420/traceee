import DrawingCanvas from '../DrawingCanvas';
import SideBar from '../SideBar';
import { View, StyleSheet } from 'react-native';

interface PracticeProps{
    clearCanvas: () => void;
    clear: Boolean;
}

export default function Practice({clearCanvas,clear}: PracticeProps) {
    return (
        <View style={styles.container}>
            <DrawingCanvas clear={clear}/>
            <SideBar clearCanvas={clearCanvas}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    }
})