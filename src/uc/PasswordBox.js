import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const PasswordBox = ({ title, placeholder, keyboard, onFocus = ()=>{{}} }) => {

    const [show, setShow] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{
                color: "gray",
                fontWeight: 'normal',
                fontSize: 12
            }}>
                {title}
            </Text>

            <View style={[styles.passwordContainer, { borderColor: isFocused ? "#2B71F5" : "#B3B4B7" }]}>

                <TextInput placeholder={placeholder}
                    placeholderTextColor='gray'
                    style={{
                        backgroundColor: "transparent",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        fontSize: 16,
                        width: '90%',
                    }}
                    onFocus={
                        () => {
                            onFocus();
                            setIsFocused(true);
                        }}
                    onBlur={() => {setIsFocused(false)}}
                    keyboardType={keyboard}
                    secureTextEntry={visible}
                >
                </TextInput>
                <TouchableOpacity style={styles.searchIcon} onPress={
                    () => {
                        setShow(!show)
                        setVisible(!visible)                        
                    }
                }>
                    <Icon name={show === false ? 'eye-outline' : 'eye-off-outline'} size={20} color={isFocused ? "#2B71F5" : "#000" } />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F7F9',
        height: 50,
        borderRadius: 10,
        marginTop: 5,
        paddingHorizontal: 10,
        borderWidth: 2,        
    },
    searchIcon: {
        padding: 10,
    },
    inputStyle: {
        flex: 1,
    },
})

export default PasswordBox