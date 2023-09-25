import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, Keyboard, Modal, Pressable, SectionList, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Checkbox } from 'galio-framework';

export default function Login({ navigation }) {
    Keyboard.addListener('keyboardDidShow', () => {
        console.log('show')
    })
    Keyboard.addListener('keyboardDidHide', () => {
        console.log('hide')
    })
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={styles.backgrTop} >
                <View style={styles.bgTop}>
                    <Image style={styles.image_login} source={require('../../../assets/img-login.png')} />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Đăng nhập</Text>
                <TextInput style={[styles.textInput, styles.mt20]} placeholder="Tên đăng nhập" onSubmitEditing={Keyboard.dismiss} />
                <TextInput style={[styles.textInput, styles.mt20]} placeholder="Mật khẩu" />
                <View style={styles.checkBox}>
                    <Checkbox color="info" label="Nhớ đăng nhập" />
                    <Text onPress={() => setModalVisible(true)} style={{
                        fontWeight: "bold",
                        color: "blue",
                    }}>Quên mật khẩu</Text>
                </View>
                <TouchableHighlight style={[{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 5,
                    backgroundColor: "green",
                    width: "100%"
                }, styles.mt20]} onPress={() => console.log('Pressed!')}>
                    <Button
                        title="Đăng nhập"
                        color="#fff"
                    />
                </TouchableHighlight>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "flex-end", width: "100%" }}>
                    <Text>Bạn chưa có tài khoản?</Text>
                    <TouchableHighlight onPress={() => navigation.navigate('Register')}>
                        <Text style={{
                            fontWeight: "bold",
                            color: "blue",
                        }}>Đăng ký ngay</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, width: "100%", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{ height: 1, backgroundColor: "black", width: "30%" }}></View>
                    <Text>
                        Đăng nhập bằng
                    </Text>
                    <View style={{ height: 1, backgroundColor: "black", width: "30%" }}></View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, width: "100%", alignItems:"center",justifyContent:"center"}}>
                <Image style={styles.image_icon} source={require('../../../assets/facebook.png')} />
                <Image style={styles.image_icon} source={require('../../../assets/google.png')} />
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Reset mật khẩu</Text>
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
        paddingLeft: 30,
        paddingRight: 30
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
    image_login: {
        height: 200,
        resizeMode: 'contain'
    },
    label: {
        margin: 8,
    },
    checkBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 10,
        width: "100%"
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    image_icon:{
        width:40,
        height:40,
        marginRight:10
    }
});
