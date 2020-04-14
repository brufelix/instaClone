import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

const HeaderProfile = props => {
    const options = { email: props.email, secure: true }
    return(
        <View style={styles.container}>
            <View style={styles.containerAvatar}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.textInfo} >Post</Text>
                <Text style={styles.textInfo} >Followers</Text>
                <Text style={styles.textInfo} >Followed</Text>
            </View>
            <View style={styles.infoUser}>
                <Text style={styles.textInfo}>{props.name}</Text>
                <Text style={styles.textInfo}>{props.email}</Text>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: '#222'
    },containerAvatar:{
        flex: 1,
        margin: 25,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    infoUser: {
        flex: 2,
        marginTop: 30,
        marginLeft: 10
    },
    textInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222'
    },
    avatar: {}
})

export default HeaderProfile