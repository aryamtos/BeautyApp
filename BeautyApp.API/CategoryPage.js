import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Image, AsyncStorage, StyleSheet } from 'react-native';
//import logo from '../assets/blogoh.png'
//import GlobalStyles from '../assets/GlobalStyles'
import SpotList from '../components/SpotList'

export default function List(){
    const[categorias, setCategorias]=useState([]);

    useEffect(() =>{
        AsyncStorage.getItem('categoriaServico').then(storagedTechs => {
            const categoryArray = storagedTechs.split(',').map(categoriaServico=>categoriaServico.trim());
            setCategorias(categoryArray);
        })
    }, []);
    return (
        <SafeAreaView >
        
        <ScrollView>
            {categorias.map(categoriaServico =><SpotList key={categoriaServico} categoriaServico={categoriaServico}/>)}
        </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10,
    },
});