import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Checkbox } from 'galio-framework';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Screen1({ navigation }) {
  useEffect(() => {
    console.log("load");
  }, [])
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ]
  return (
    <>
      <ScrollView style={{ backgroundColor: "#e8f0fe", padding: 15, paddingTop:50}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <MaterialCommunityIcons name="menu-open" size={24} color="black" />
          <FontAwesome name="user-circle" size={24} color="#2196F3" />
        </View>
        <View >
          <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 10 }}>Hello World!!</Text>

          <View style={{ position: "relative" }}>
            <TextInput style={[styles.textInput, styles.mt20]} placeholder="Search" />
            <TouchableHighlight style={[{
              position: "absolute",
              width: 30,
              height: 30,
              backgroundColor: "green",
              right: 10,
              top: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5
            }, styles.mt20]} onPress={() => console.log('Pressed!')}>
              <AntDesign name="search1" size={20} color="white" />
            </TouchableHighlight>
          </View>

        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", gap: 15, marginTop: 20 }}>
          <View style={styles.blockView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
              <Image style={styles.image_folder} source={require('../../../assets/6329.png')} />
              <Feather name="more-vertical" size={24} color="white" />
            </View>
            <Text style={styles.textBlock}>Photos</Text>
            <Text style={{ color: '#dcd9df', marginTop: 3}}>1000</Text>
            <Text style={{ fontSize: 12, color: '#dcd9df', marginTop: 15 }}>last update 24 hours ago</Text>
          </View>
          <View style={styles.blockView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
              <Image style={styles.image_folder} source={require('../../../assets/6329.png')} />
              <Feather name="more-vertical" size={24} color="white" />
            </View>
            <Text style={styles.textBlock}>Files</Text>
            <Text style={{ color: '#dcd9df', marginTop: 3,  }}>1024</Text>
            <Text style={{ fontSize: 12, color: '#dcd9df', marginTop: 15 }}>last update 22 hours ago</Text>
          </View>
          <View style={styles.blockView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
              <Image style={styles.image_folder} source={require('../../../assets/6329.png')} />
              <Feather name="more-vertical" size={24} color="white" />
            </View>
            <Text style={styles.textBlock}>Songs</Text>
            <Text style={{ color: '#dcd9df', marginTop: 3}}>1023</Text>
            <Text style={{ fontSize: 12, color: '#dcd9df', marginTop: 15 }}>last update 23 hours ago</Text>
          </View>
          <View style={styles.blockView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
              <Image style={styles.image_folder} source={require('../../../assets/6329.png')} />
              <Feather name="more-vertical" size={24} color="white" />
            </View>
            <Text style={styles.textBlock}>Documents</Text>
            <Text style={{ color: '#dcd9df', marginTop: 3}}>100</Text>
            <Text style={{ fontSize: 12, color: '#dcd9df', marginTop: 15}}>last update 24 hours ago</Text>
          </View>
        </View>
        <View style={styles.mt20}>
          <Text style={{ fontWeight: 'bold' }}>Recent Uploads</Text>
          <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',padding: 15, backgroundColor: 'white', borderRadius: 15, marginTop:10,shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3 }}>
            <Image style={styles.image_folder} source={require('../../../assets/6822424.jpg')} />
            <View style={{width:'70%', alignItems:'flex-start',justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', marginBottom:5}}>wqeqwehwggeuwqe.png</Text>
              <Text>125 kb</Text>
            </View>
            <AntDesign name="download" size={24} color="#939095" />
          </View>
          <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',padding: 15, backgroundColor: 'white', borderRadius: 15, marginTop:10,shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3}}>
            <Image style={styles.image_folder} source={require('../../../assets/31799966_7850916.jpg')} />
            <View style={{width:'70%', alignItems:'flex-start',justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', marginBottom:5}}>wqeqwehwggeuwqe.png</Text>
              <Text>125 kb</Text>
            </View>
            <AntDesign name="download" size={24} color="#939095" />
          </View>
          <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',padding: 15, backgroundColor: 'white', borderRadius: 15, marginTop:10,shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3 }}>
            <Image style={styles.image_folder} source={require('../../../assets/6329.png')} />
            <View style={{width:'70%', alignItems:'flex-start',justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', marginBottom:5}}>wqeqwehwggeuwqe.png</Text>
              <Text>125 kb</Text>
            </View>
            <AntDesign name="download" size={24} color="#939095" />
          </View>
          <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',padding: 15, backgroundColor: 'white', borderRadius: 15, marginTop:10,shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3}}>
            <Image style={styles.image_folder} source={require('../../../assets/6329.png')} />
            <View style={{width:'70%', alignItems:'flex-start',justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', marginBottom:5}}>wqeqwehwggeuwqe.png</Text>
              <Text>125 kb</Text>
            </View>
            <AntDesign name="download" size={24} color="#939095" />
          </View>
          <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',padding: 15, backgroundColor: 'white', borderRadius: 15, marginTop:10,shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3 }}>
            <Image style={[styles.image_folder, {borderRadius:5}]} source={require('../../../assets/6329.png')} />
            <View style={{width:'70%', alignItems:'flex-start',justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', marginBottom:5}}>wqeqwehwggeuwqe.png</Text>
              <Text>125 kb</Text>
            </View>
            <AntDesign name="download" size={24} color="#939095" />
          </View>
        </View>
      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#e8f0fe',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20
  },
  textInput: {
    width: "100%",
    height: 40,
    // borderColor:"#841584",
    // borderWidth:1,
    borderRadius: 8,
    paddingLeft: 5,
    backgroundColor: "#fff",
    elevation: 5
  },
  backgrTop: {
    height: 200,
    flex: 1,
    backgroundColor: '#e8f0fe',
  },
  bgTop: {
    flex: 1,
    backgroundColor: 'powderblue',
    borderEndStartRadius: 400,
    alignItems: 'center',
    justifyContent: "center"
  },
  mt20: {
    marginTop: 20
  },

  blockView: {
    aspectRatio: 1,
    width: '46%',
    borderRadius: 18,
    backgroundColor: '#724c9f',
    padding: 15,
    paddingRight:10,
    paddingTop:20,
    shadowColor: '#724c9f',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  textBlock: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 10
  },
  image_folder: {
    height: 38,
    width: 45,
    resizeMode: 'cover',
  },
});
