import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import { FloatingAction } from "react-native-floating-action";
import Share from "react-native-share";
import ViewShot from "react-native-view-shot";

function HomeScreen() {
  
  // const clicked = useCallback(() => {
  //   ref.current.capture().then(uri => {
  //     console.log("do something with ", uri);
  //   })
  // }, []);
  return (
    <>
      <ViewShot ref={ref}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
      </ViewShot>
      <View style={styles.ButtonView}>
        <Icon.Button
          name="facebook"
          backgroundColor="pink"
          style={styles.AddButton}
          // onPress={clicked}
        >
          Take Screenshot
        </Icon.Button>
      </View>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  AddButton: {
    width: "70%",
    height: "70%",
    marginLeft: "20%",
  },
  ButtonView: {
    width: "40%",
    height: "15%",
    position: "absolute",
    bottom: 30,
    right: 40,
    borderRadius: "100%",
  },
});
