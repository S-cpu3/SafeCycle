import { StyleSheet, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
const DIAMETER = 300;
const RADIUS = DIAMETER / 2;
const SIZE = 30;
const DAYS = Array.from({ length: 30 }, (_, i) => i + 1);

export default function CycleTracker() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {DAYS.map((dom, index) => {
          const angle = (2 * Math.PI * index) / DAYS.length;
          const x = RADIUS * Math.cos(angle) + RADIUS - SIZE / 2;
          const y = RADIUS * Math.sin(angle) + RADIUS - SIZE / 2;
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
              <Entypo name="drop" size={24} color="red" />
            </View>
          )
        })}
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
    backgroundColor: "#f0f0f0",
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
});
