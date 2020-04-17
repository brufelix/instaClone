import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

const HeaderProfile = props => {
    const options = { email: props.email, secure: true }
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Gravatar options={options} style={styles.avatar} />
                <View style={{padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.textInfo}>Post</Text>
                    <Text style={styles.textInfo}>{props.amountFollowers}</Text>
                </View>
                <View style={{padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.textInfo}>Followers</Text>
                    <Text style={styles.textInfo}>0</Text>
                </View>
                <View style={{padding: 5, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.textInfo}>Following</Text>
                    <Text style={styles.textInfo}>0</Text>
                </View>
            </View>
            <View style={styles.infoUser}>
                <Text style={styles.textInfo}>{props.name}</Text>
                <Text style={styles.textInfo}>{props.email}</Text>
            </View>
                <TouchableOpacity >
                    <View style={styles.buttomEditProfile}>
                        <Text>Editar Perfil</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container:  {
        flex: 2,
        width: '100%',
        borderWidth: 1,
        borderColor: '#e6e6fa'
    },
    containerHeader:{
        flex: 1,
        margin: 25,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    infoUser: {
        flex: 2,
        marginTop: 20,
        marginLeft: 10
    },
    textInfo: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222'
    },
    buttomEditProfile: {
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 3, 
        width: '90%',
        height: 30,
        marginLeft: 17,
        marginBottom: 18,
    }
})

export default HeaderProfile