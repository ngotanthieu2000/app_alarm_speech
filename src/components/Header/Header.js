import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
export default function Header({handleFocusView}) {
  const [currenButton, setCurrentButton] = useState('taxi')
  let color = {
    default: "#555d6e",
    onPress: "#00d9f6"
  };
  useEffect(() => {
    handleFocusView(currenButton);
  }, [currenButton]);
  function changeFocusView(nameView){
    setCurrentButton(nameView);
  }
  function openViewAlarm(){
    changeFocusView('alarm');
  };
  function openViewClock(){
    changeFocusView('clock');

  };
  function openViewTaxi(){
    changeFocusView('taxi');

  };
  function openViewTimer(){
    changeFocusView('timer');

  };
  function openViewHourglass(){
    changeFocusView('hourglass');

  };
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={()=>openViewAlarm()}>
          <IconMaterialIcons name="access-alarm" size={24} color={currenButton === 'alarm' ? color.onPress : color.default} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=>openViewClock()}>
          <IconOcticons name="clock" size={20} color={currenButton === 'clock' ? color.onPress : color.default} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=>openViewTaxi()}>
          <IconFontisto name="taxi" size={20} color={currenButton === 'taxi' ? color.onPress : color.default} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=>openViewTimer()}>
          <IconMaterialCommunityIcons name="timer-outline" size={24} color={currenButton === 'timer' ? color.onPress : color.default} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=>openViewHourglass()}>
          <IconAntDesign name="hourglass" size={24} color={currenButton === 'hourglass' ? color.onPress : color.default} />
        </TouchableOpacity>
      </View>
    );
  }
const styles = StyleSheet.create({
  headerContainer: {
    minHeight: '10%',
    minWidth: 300,
    maxWidth: '100%',
    width: '100%',
    borderColor: 'black',
    backgroundColor: '#141d2b',
    // paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconButton:{
    // backgroundColor: 'red',
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500'
  }
});
