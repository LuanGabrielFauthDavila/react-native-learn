import React, { useEffect, useState } from 'react';
import { 
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

//HOOKS
import buscaUsers from '../../hooks/buscaUsers';


export default function Home () {
    const [users, setUsers] = useState([])
    const navigation = useNavigation();

    
    async function initUsers () {
        setUsers(await buscaUsers())
    }
    useEffect(() => {
        initUsers()
    }, [])

    return <>
        <FlatList 
            data={users}
            renderItem={({ item }) =>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('Perfil', item) } >
                        <Text style={styles.btnTxt}>{ item.name }</Text>
                </TouchableOpacity>
            }
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => 
                <TouchableOpacity 
                    onPress={initUsers}
                    style={styles.buscar} >
                    <Text style={{ color: '#ffffff' }}>Buscar</Text>
                </TouchableOpacity>
            } />

    </>
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#363636',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    btnTxt: {
        color: 'white'
    },
    buscar: {
        widht: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8A07DA',
        marginVertical: 18,
        borderRadius: 6
    }
})