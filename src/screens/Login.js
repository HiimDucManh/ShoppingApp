import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import * as React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Input from '../uc/Input'
import PasswordBox from '../uc/PasswordBox'
import * as font from 'expo-font';

const img = "https://img.freepik.com/free-vector/discount-concept-illustration_114360-2301.jpg?w=826&t=st=1684950014~exp=1684950614~hmac=fa9f3262a769754773084fbac1bc65dada51363b2f3faad2f403c8fb91811ade"

const Login = () => {
    return (
        <ScrollView style = {{
            backgroundColor: "white",
                flex: 1 }}>
            <View style={{
                backgroundColor: "white",
                flex: 1
            }}>
                <View style={{
                    alignItems: "center",
                    backgroundColor: "white"
                }}>
                    <Image source={{ uri: img }}
                        style={{
                            width: 150,
                            aspectRatio: 1,
                            alignContent: "center",
                            marginTop: 40,
                        }}
                        resizeMode="cover"
                    />
                </View>

                <View style={{
                    elevation: 10,
                    backgroundColor: "white",
                    margin: 15,
                    marginTop: -10,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    borderRadius: 10
                }}>
                    <Text style={[styles.textFormat]}>
                        Welcome back!
                    </Text>

                    <Input
                        title='E-mail address'
                        icon='email-outline'
                        placeholder='Enter your e-mail address'
                        keyboard='default'
                    />
                    <PasswordBox
                        title='Password'
                        placeholder='Enter your password'
                        keyboard='default'
                    />
                </View>

                <View>
                    <Text style={styles.forgot}>
                        Forgot password?
                    </Text>
                </View>
            </View>
        </ScrollView>        
    )
}

export default Login

const styles = StyleSheet.create({
    textFormat: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "center",
        marginBottom: 20,
    },
    forgot: {
        textDecorationLine: 'underline',
        position: 'absolute',
        right: 40,
        top: '50%',
        marginTop: -35        
    }
}) 