import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';

import {Alert, SafeAreaView, Text, Image, AsyncStorage, StyleSheet, ScrollView, View } from 'react-native';

import logo from '../assets/logo.png'


import SpotList from '../components/SpotList';


export default function list() {


    const [nomes, setTipos] = useState([]);

    useEffect(() => {

        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.1.106:3000',{
                query:{user_id}
            })
            socket.on('booking_response', booking =>{
                Alert.alert(`Sua reserva em ${booking.category.title} em ${booking.date} foi ${booking.approved ?  'APROVADA' : 'REJEITADA'}`);
            })
        })
    }, []);
    useEffect(() => {
        AsyncStorage.getItem('title').then(storageCategoria => {
            const categoriaArray = storageCategoria.split(',').map(title=> title.trim());
            setTipos(categoriaArray);
        })
    }, []);
    return (

        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {title.map(nome => <SpotList key={title} nome={title} />)}
            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {

        flex: 1,


    },
    logo: {

        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10
    }
});
