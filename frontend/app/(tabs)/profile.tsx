import React from 'react';
import { View, StyleSheet } from "react-native";
import { Button, Divider, Text, Card, List } from 'react-native-paper';

export default function Profile() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Profile</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.groupTitle}>Settings</Text>
          <Divider style={styles.divider} />
          
          <Button 
            icon="camera" 
            mode="contained" 
            style={styles.button}
            onPress={() => console.log("Settings Clicked")}
          >
            Edit Profile
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.groupTitle}>Security</Text>
          <Divider style={styles.divider} />

          <Button 
            icon="lock" 
            mode="contained" 
            style={styles.button}
            onPress={() => console.log("Edit Pin")}
          >
            Edit Pin
          </Button>

          <Button 
            icon="cloud" 
            mode="contained" 
            style={styles.button}
            onPress={() => console.log("Edit Pin")}
          >
            Setup Face ID
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.groupTitle}>Export</Text>
          <Divider style={styles.divider} />

          <Button 
            icon="download" 
            mode="contained" 
            style={styles.button}
            onPress={() => console.log("Export")}
          >
            Export Data as PDF
          </Button>

          <Button 
            icon="qrcode" 
            mode="contained" 
            style={styles.button}
            onPress={() => console.log("Export")}
          >
            Export Data as QR Code
          </Button>
        </Card.Content>
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f6f6f6"
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 25,
  },
  card: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 4
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10
  },
  divider: {
    marginBottom: 15
  },
  button: {
    borderRadius: 30,
    marginBottom: 10
  }
});

