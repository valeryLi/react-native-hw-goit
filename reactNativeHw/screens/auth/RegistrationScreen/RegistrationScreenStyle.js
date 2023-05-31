import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    color: "#212121",
    marginVertical: 32,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formBox: {
    alignItems: "center",

    paddingTop: 92,

    marginTop: 0,
    height: 549,

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarImg: {
    borderRadius: 16,
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
  },
  addBtn: {
    position: "absolute",
    top: 20,
    right: 140,
  },
});

// export const textStyle = StyleSheet.compose(styles.text);
// export const containerStyle = StyleSheet.compose(styles.container);
