import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, Modal, Pressable, SectionList, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'galio-framework';

export default function Register({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.backgrTop} >
        <View style={styles.bgTop}>
        <Image style={styles.image_login} source={require('../../../assets/img-login.png')} />
        </View>
      </View>
      <View style={styles.container}>
      <Text style={styles.title}>Đăng Ký</Text>
      <TextInput style={[styles.textInput, styles.mt20]}  placeholder="Enter text here"
      />
       <TextInput style={[styles.textInput, styles.mt20]}  placeholder="Enter text here"
      />
      <TouchableHighlight  style={[{
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
            backgroundColor:"green",
          },styles.mt20]} onPress={() => console.log('Pressed!')}>
        <Button
          title="Đăng ký"
          color="#fff"
          onPress={() => navigation.navigate('Login')}
/>
      </TouchableHighlight>
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Vui lòng đăng nhập</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Đóng</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#e8f0fe',
    alignItems: 'center',
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    marginTop:20
  },
  textInput:{
    width: 250,
    height:40,
    // borderColor:"#841584",
    // borderWidth:1,
    borderRadius:8,
    paddingLeft:5,
    backgroundColor:"#fff",
    elevation: 5
  },
  backgrTop:{
    height:200,
    flex:1,
    backgroundColor: '#e8f0fe',
  },
  bgTop:{
    flex:1,
    backgroundColor:'powderblue',
    borderEndStartRadius:400,
    alignItems: 'center',
    justifyContent:"center"
  },
  mt20:{
    marginTop:20
  },
  image_login:{
    height:200,
    resizeMode: 'contain'
  },
  label: {
    margin: 8,
  },
  checkBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
    marginTop:10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
