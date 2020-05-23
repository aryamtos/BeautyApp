import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { View, ImageBackground, AsyncStorage,Platform, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

import background from '../assets/back.png';


export default function Login({navigation}) {

    const[email,setEmail] = useState('');
    const[categoria, setCategoria] = useState('');

    //useEffect(() => {

       /* AsyncStorage.getItem('user').then(user =>{
         
            if(user){

                navigation.navigate('list');
            }
        })
    }, []);*/
    async function handleSubmit(){

        const response = await api.post('/User',{
            email
        })
        const {_id } = response.data;

        await AsyncStorage.setItem('user',_id);
        await AsyncStorage.setItem('title',categoria);

        navigation.navigate('list');
        
    }


    return (

        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground source={background} style={styles.background}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.form}>
                    <Text style={styles.label}>SEU E-MAIL *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor='#999'
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.label}> CATEGORIAS *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Categorias de Interesse"
                        placeholderTextColor='#999'
                        autoCapitalize="words"
                        autoCorrect={false}
                        value={categoria}
                        onChangeText={setCategoria}
                    />
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>Buscar Serviços</Text>

                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {

        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2

    },
    button: {
        height: 42,
        backgroundColor: '#483D8B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 16,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo:{
        height: 100,
        resizeMode: "contain",
        alignSelf: 'center',
    }

});