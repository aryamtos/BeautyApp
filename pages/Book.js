import React, { useState } from 'react';
import { SafeAreaView, AsyncStorage,Alert, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';


import api from '../services/api';
export default function Book({ navigation }) {

    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

async function handleSubmit(){

    const user_id = await AsyncStorage.getItem('user');

    await api.post(`/CategoriaModel/${id}/bookings`,{

        date
    },{
        headers:{user_id}
    })
    Alert.alert('Solicitação de serviço enviada;');

    navigation.navigate('list');

}

function handleCancel(){

    navigation.navigate('list');
}

    return (

        < SafeAreaView style = {styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data você quer reservar?"
                placeholderTextColor='#999'
                autoCapitalize="none"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Solicitar Serviço</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancelar </Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    container:{

        margin : 30,
        marginTop: 50,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 30,
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
    cancelButton: {

        height: 42,
        backgroundColor: '#ccc',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2

    }


});