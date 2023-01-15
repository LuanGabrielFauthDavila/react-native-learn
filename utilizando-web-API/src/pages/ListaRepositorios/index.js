import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, TouchableOpacity, View, Dimensions, TextInput, Alert } from 'react-native';
import { Modal, Portal, Text, Button, Provider, IconButton, MD3Colors } from 'react-native-paper';

//IMPORT API REQUEST
import buscaRepos from '../../hooks/buscaRepos';
import deleteRepos from '../../hooks/deleteRepos';

//COMPONENTS
import TopBar from '../../components/TopBar';

//ASSETS
import IconDelete from '../../assets/icons/delete.svg'


const { width, height } = Dimensions.get('screen')

export default function ListaRepositorios () {
    const [repos, setRepos] = useState([])
    const [visible, setVisible] = useState(false)
    const [modal, setModal] = useState({
        id: null, name: null, data: null, postId: null
    })

    const { params } = useRoute();
    const navigation = useNavigation();

    
    async function deleteRepo (id) {
        const dr = await deleteRepos(id=`${id}`)
        console.log(dr)
        initRepos()
        setVisible(false)
    }
    async function initRepos () {
        const br = await buscaRepos(id=`${params.id}`)
        setRepos(br)
    }
    useEffect(() => {
        initRepos()
    }, [])


    const Header = () =>
        <View style={styles.view}>
            <Text style={styles.title}>{ repos.length } Repositórios</Text>
            <View style={styles.TopButton}>
                <Button 
                mode="contained"
                onPress={initRepos} >
                    Atualizar
                </Button>
                <Button
                mode='elevated'
                onPress={() => navigation.navigate('NovoRepositorio', { id: `${params.id}` })} >
                    Criar Repositório
                </Button>
            </View>
            <TopBar title={'Repositórios'} />
        </View> 
    
    return (<>
        <Provider>
            <Portal>
                <Modal 
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                visible={visible}
                onDismiss={() => setVisible(false)} >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Deseja realmente remover { modal.name }?</Text>
                        <View style={styles.modalButtons}>
                            <Button style={{ 
                                height: 40, 
                                alignSelf: 'center',
                                backgroundColor: 'red',
                            }} textColor="#FFFFFF" mode="elevated"
                            onPress={() => {
                                deleteRepo(modal.id)
                            }}>Remover</Button>
                            <Button style={{ 
                                height: 40, 
                                alignSelf: 'center' 
                            }} mode="elevated"
                            onPress={() => setVisible(false)}>Manter</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>
            <FlatList
                data={repos}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={Header} 
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={{
                            width: '70%'
                        }}>
                            <Text style={styles.cardTitle}>{ item.name }</Text>
                            <Text style={styles.cardSubTitle}>Atualizado em { item.data }</Text>
                        </View>
                        <IconButton 
                            icon={require('../../assets/icons/delete.png')} 
                            iconColor={MD3Colors.primary0}
                            size={35}
                            onPress={() => {
                                setModal({
                                    id: item.id, 
                                    name: item.name, 
                                    data: item.data, 
                                    postId: item.postId
                                })
                                setVisible(true) 
                            }} />
                    </View> 
                )} />
        </Provider>
    </>)
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: 64,
        marginBottom: 16,
        fontSize: 26,
        lineHeight: 36,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopButton: { 
        flexDirection: 'row', 
        justifyContent: "space-evenly",
        alignItems: "center",
        width: '90%',
        padding: 12
    },
    modal: {
        backgroundColor: '#F6F6F6',
        width: width*0.8,
        height: height*0.2,
        borderRadius: 8,
        padding: 8
    },
    modalTitle: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    },
    modalButtons: {
        flex: 1, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
    },
    modalButtons: {
        flex: 1, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
    },
    card: {
        padding: 12,
        borderTopColor: '#D7D7D7',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardTitle: {
        padding: 5,
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        color: '#566B76'
    },
    cardSubTitle: {
        padding: 5,
        fontSize: 16,
        lineHeight: 26,
        color: '#9CA6AB'
    },
})