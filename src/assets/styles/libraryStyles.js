import { Color } from "../../assets/styles/Color";
export const libraryStyles = {
  libraryWrapper: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.black
  },
  libraryContainer: {
    margin: 5,
    position: "relative",
    height: 50,
    zIndex: 1,
    width: "80%",
    alignSelf: "center",
    top: 30
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  list: {
    flexDirection: "row",
    alignItems: "center"
  },
  artwork: {
    width: 50,
    height: 50,
    margin: 10
  },
  titleSong: {
    color: "#e6e6e6",
    fontSize: 16,
    fontWeight: "500"
  },
  artist: {
    color: "#9a9a9a",
    fontSize: 14,
    fontWeight: "300"
  }
};
