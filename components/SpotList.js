import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


import api from '../services/api';

function SpotList({ title, navigation }) {
    const [spots, setSpots] = useState([]);

    useEffect(() => {

        async function loadSpots() {
            const response = await api.get('/CategoriaModel', {
                params: { title }
            })
            setSpots(response.data);
        }
        loadSpots();

    }, []);

    function handleNavigate(id) {
        navigation.navigate('Book', { id });
    }
    <FlatList

        style={styles.list}
        data={spots}
        keyExtractor={category => category._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <View style={styles.listItem}>
                <Image style={styles.thumbnail} source={{ uri: item.foto_url }} />

                <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>

                    <Text style={styles.buttonText}>Solicitar Serviço</Text>
                </TouchableOpacity>

            </View>
        )}
    />


    return (

        <View style={styles.container}>
            <Text style={styles.title}><Text style={styles.bold}>{title}</Text></Text>
            <FlatList

                style={styles.list}
                data={spots}
                keyExtractor={category => category._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumbnail} source={{ uri: item.foto_url }} />

                        <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>

                            <Text style={styles.buttonText}>Solicitar Serviço</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,

    },
    bold: {
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,

    },
    listItem: {
        marginRight: 15,
    },
    thumbnail: {
        width: 320,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },

    button: {
        height: 32,
        backgroundColor: '#483D8B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    }
});
export default withNavigation(SpotList);