import {Text, View, StyleSheet} from "react-native";
import {Link} from "expo-router";

export default function Index(){
  return(
    <View
      style={{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
      }}
    >
    <Text>bbbbbbbbbbbbbbbb</Text>
    <Link href="/login" style={{width:200, height:50, backgroundColor:"coral", boarderRadius:8,textAlign:"center"}}>{" "}Login Page</Link>

  );
}