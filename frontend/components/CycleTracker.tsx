import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Text } from "react-native-paper";

const MONTHS = [
  "Janurary",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const DIAMETER = 300;
const RADIUS = DIAMETER / 2;
const SIZE = 30;
const DAYS_IN_MONTH = 30;
const MOOD_DAYS = Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({
  dom: i,
  
}))
const DAYS = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
const DISTANCE_FROM_EDGE = 15;
const CENTER_SIZE = 240;

export default function CycleTracker() {
  const [mood, setMood] = useState<'ovulating' | 'mensturating' | "">("")
    const moodText = 
      mood === "ovulating" ? `Ovulation predicted today` :
      mood === "mensturating" ? `Menstruation predicted today` : ``
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {DAYS.map((dom, index) => {
          const angle = (2 * Math.PI * index) / DAYS.length;
          const x = (RADIUS - DISTANCE_FROM_EDGE) * Math.cos(angle) + RADIUS - SIZE / 2;
          const y = (RADIUS - DISTANCE_FROM_EDGE) * Math.sin(angle) + RADIUS - SIZE / 2;
          return (
            <View
              key={index}
              style={[
                styles.item,
                {
                  left: x,
                  top: y,
                }
              ]}
            >
              { /* 
                we need conditionally rendered content here, based on if this Day-of-the-Month is a predicted
                ovulation day or a predicted menstruation day.
                for now just a static image
              */ }
              
              {
                index % 2 === 0 ? 
                <MaterialCommunityIcons name="google-circles" size={24} color="pink" /> :
                <Entypo name="drop" size={24} color="red" />
              }
            </View>
          )
        })}

        <View style={styles.centerContent}>

          <Text style={styles.monthText}>{MONTHS[new Date().getMonth()]}</Text>
          <Text style={styles.dateText}>{new Date().getDay().toString()}</Text>
          <Text style={styles.moodText}>
            {moodText}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: DIAMETER,
    height: DIAMETER,
    borderRadius: DIAMETER / 2,
    backgroundColor: "#c98bb9",
    position: "relative",
  },
  item: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    //backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    position: "absolute",
    width: CENTER_SIZE,
    height: CENTER_SIZE,
    borderRadius: CENTER_SIZE / 2,
backgroundColor: "#683257",
    justifyContent: "center",
    alignItems: "center",

    left: RADIUS - CENTER_SIZE / 2,
    top: RADIUS - CENTER_SIZE / 2,
  },
  moodText: {
    fontFamily: "Sans serif",
    color: "#f0f0f0"
  },
  monthText: {
    fontFamily: "Sans serif",
    fontSize: 12,
    color: "#f0f0f0"
  },
  dateText: {
    fontFamily: "Sans serif",
    fontSize: 64,
    color: "#f0f0f0"

  }
});
