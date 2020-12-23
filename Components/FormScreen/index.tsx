import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const GENDER = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
];
const STANDERDS = [
  { label: "8th", value: 8 },
  { label: "9th", value: 9 },
  { label: "10th", value: 10 },
];

export default function TopHeader({ navigation }: { navigation: any }) {
  const [formData, setformData] = useState({});

  const setFormValue = (valueName: String, value: any) => {
    console.log("formData", formData);
  };

  const gotoList = () => {
    navigation.navigate("list-screen");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>First Name</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(val) => setFormValue("firstname", val)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Last Name</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(val) => setFormValue("lastname", val)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(val) => setFormValue("email", val)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Mobile Number</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(val) => setFormValue("mobilenumber", val)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Address</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(val) => setFormValue("Address", val)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Gender</Text>
          <RadioForm formHorizontal={true} animation={true}>
            {GENDER.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={obj.value == "F"} // Todo
                  onPress={(obj: String) => console.log(obj)}
                  borderWidth={1}
                  buttonInnerColor={
                    obj.value == "F" ? "rgb(70, 48, 235)" : "#fff"
                  }
                  buttonOuterColor={"rgb(70, 48, 235)"}
                  buttonSize={25}
                  buttonOuterSize={30}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(obj: String) => console.log(obj)}
                  labelStyle={{ color: "#000", marginRight: 20 }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))}
          </RadioForm>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Gender</Text>
          <RadioForm formHorizontal={true} animation={true}>
            {STANDERDS.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={obj.value == 8} // Todo
                  onPress={(obj: String) => console.log(obj)}
                  borderWidth={1}
                  buttonInnerColor={
                    obj.value == 8 ? "rgb(70, 48, 235)" : "#fff"
                  }
                  buttonOuterColor={"rgb(70, 48, 235)"}
                  buttonSize={25}
                  buttonOuterSize={30}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(obj: String) => console.log(obj)}
                  labelStyle={{ color: "#000", marginRight: 20 }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))}
          </RadioForm>
        </View>
      </ScrollView>
      <View style={styles.buttonsList}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("clicked")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={gotoList}>
          <Text style={styles.buttonText}> Go to List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginVertical: 10,
  },
  buttonsList: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgb(70, 48, 235)",
    borderRadius: 20,
    minWidth: 100,
    display: "flex",
    alignItems: "center",
  },
  buttonText: { color: "#fff" },
  formRow: {
    marginVertical: 10,
  },
  formLabel: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  formInput: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
