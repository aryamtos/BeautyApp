import React, {useState, useEffect} from 'react'
import { withNavigation } from 'react-navigation';
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import api from '../services/api';

export default function SpotList({categoriaServico, navigation}){
    const [categories,setCategories] = useState([]);

    useEffect(() =>{
        async function loadCategories(){
            const response = await api.get('/CategoriaModel', {
                params: {categoriaServico}
            })
            setCategories(response.data);
        }
        loadCategories();
    },[]);

    /*function handleNavigate(id ){
        navigation.navigate('Book', {id});
    }*/

    return (
        <View style = {StyleSheet.container}>
            <Text style={styles.tittle}>Empresas que usam <Text style={styles.bold}>{categoriaServico}</Text></Text>
        
        <FlatList
        style={styles.list}
        data={categories}
        keyExtractor={category=> category._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=> (
            <View style={styles.listItem}>
            <Image style={styles.thumbmail} source={{uri:item.foto_url}}/> 
            <Text style={styles.company}>{item.description}</Text>
            <Text style={styles.price}>{item.price ?`R$${item.price}/dia`: 'GRATUITO'}</Text>
            
            </View>
        )}
        />

        </View>
    )
}

/*

            <TouchableOpacity onPress={() =>handleNavigate(item._id)} style={styles.button}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
        
*/
const styles = StyleSheet.create({
    container:{
        marginTop: 30,
    },
    tittle:{
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold:{
      fontWeight: 'bold',  
    },

    list:{
        paddingHorizontal: 20,
    },
    listItem:{
       marginRight:15, 
    },
    thumbmail:{
        width:200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },

    company:{
       fontSize:24,
       fontWeight: 'bold',
       color: '#333',
       marginTop:10, 
    },
    price:{
        fontSize:15,
        color: '#999',
        marginTop:5,
    },

    button:{
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    
});

//export default withNavigation(SpotList);