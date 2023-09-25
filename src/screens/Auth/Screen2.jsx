import { StatusBar } from 'react-native'
import { useEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


export default function Screen2({ navigation }) {
  return (
    <>
      <ScrollView>
      <StatusBar backgroundColor = "#022677"/>
        <View style={{ backgroundColor: "#022677", padding: 20, paddingTop:60 }}>
          <View style={{ alignItems: "center" }}>
            <Image style={styles.image_janus} source={require('../../../assets/janus.png')} />
            <Text style={{ color: "white", marginTop: 20 }}>My Janus Standard</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ width: "25%", aspectRatio: 1, backgroundColor: '#214daf', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, borderRightWidth: 0.3, borderColor: 'white', padding: 10, alignItems: 'center' }}>
              <AntDesign name="creditcard" size={30} color="white" />
              <Text style={{ color: "white", marginTop: 10, fontSize: 12, textAlign: 'center' }}>Bảo hành và bảo trì</Text>
            </View>
            <View style={{ width: "25%", aspectRatio: 1, backgroundColor: '#214daf', borderRightWidth: 0.3, borderColor: 'white', padding: 10, alignItems: 'center' }}>
              <AntDesign name="creditcard" size={30} color="white" />
              <Text style={{ color: "white", marginTop: 10, fontSize: 12, textAlign: 'center' }}>Lịch sử sửa chữa</Text>
            </View>
            <View style={{ width: "25%", aspectRatio: 1, backgroundColor: '#214daf', borderRightWidth: 0.3, borderColor: 'white', padding: 10, alignItems: 'center' }}>
              <MaterialIcons name="settings-phone" size={30} color="white" />
              <Text style={{ color: "white", marginTop: 10, fontSize: 12, textAlign: 'center' }}>Tình trạng phụ tùng</Text>
            </View>
            <View style={{ width: "25%", aspectRatio: 1, backgroundColor: '#214daf', borderTopRightRadius: 8, borderBottomRightRadius: 8, padding: 10, alignItems: 'center' }}>
              <MaterialIcons name="settings-phone" size={30} color="white" />
              <Text style={{ color: "white", marginTop: 10, fontSize: 12, textAlign: 'center' }}>Hỗ trợ</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 15 }}>
          <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 18, marginTop: 10, marginBottom: 10 }}>Thông tin chương trình & sự kiện</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={styles.image_event} source={require('../../../assets/janus-event1.jpg')} />
            <Image style={styles.image_event} source={require('../../../assets/R74-MEDIA.jpg')} />
          </View>
          <TouchableHighlight style={[{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 5,
            backgroundColor: "white",
            width: "100%", 
            marginTop:15
          }]} onPress={() => console.log('Pressed!')}>
            <Button
              title="+ Thêm"
              color="#000"
            />
          </TouchableHighlight>
          <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 18, marginTop: 10, marginBottom: 10 }}>Ứng dụng khác</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap', gap:10}}>
            <View style={{ paddingVertical: 6,paddingHorizontal:7, backgroundColor: '#d1d2d5', width: '48%', borderRadius: 7, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Image style={styles.image_app_other} source={require('../../../assets/janus-event1.jpg')} />
              <Text style={{width:"60%", fontWeight:'bold'}}>Sản phẩm</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
            </View>
            <View style={{ paddingVertical: 6,paddingHorizontal:7, backgroundColor: '#d1d2d5', width: '48%', borderRadius: 7, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Image style={styles.image_app_other} source={require('../../../assets/janus-event1.jpg')} />
              <Text style={{width:"60%", fontWeight:'bold'}}>Đồ trang trí & phụ kiện</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
            </View>
            <View style={{ paddingVertical: 6,paddingHorizontal:7, backgroundColor: '#d1d2d5', width: '48%', borderRadius: 7, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Image style={styles.image_app_other} source={require('../../../assets/janus-event1.jpg')} />
              <Text style={{width:"60%", fontWeight:'bold'}}>Sản phẩm</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
            </View>
            <View style={{ paddingVertical: 6,paddingHorizontal:7, backgroundColor: '#d1d2d5', width: '48%', borderRadius: 7, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Image style={styles.image_app_other} source={require('../../../assets/janus-event1.jpg')} />
              <Text style={{width:"60%", fontWeight:'bold'}}>Sản phẩm</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
            </View>
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
  backgrTop: {
    height: 200,
    flex: 1,
    backgroundColor: '#e8f0fe',
  },
  image_janus: {
    height: 150,
    width: 250,
    resizeMode: 'cover',
  },
  image_event: {
    width: '49%',
    height: 120,
    borderRadius: 11
  },
  image_app_other: {
    width: 38,
    height: 38,
    borderRadius:5
  }
});
