import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { logout } from '../store/actionsType/actionsUser'
import HeaderProfile from '../components/HeaderProfile' 

class Profile extends Component {
    logout = () => {
        this.props.onLogout({ ...this.state })
        this.props.navigation.navigate('Auth')
    }
    render() {
        const options = { email : this.props.email, secure: true }
        return(
            <View style={styles.container}>
                <HeaderProfile {...this.props}/>
                <View style={styles.containerFeedProfile}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerFeedProfile:{
        flex: 2
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 20,
        fontSize: 25,
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        email: user.email,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)