import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actionsType/actionsUser'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import HeaderProfile from '../components/HeaderProfile'

class Profile extends Component {
    logout = () => {
        this.props.onLogout({ ...this.state })
        this.props.navigation.navigate('Auth')
    }
    render() {
        return(
            <View style={styles.container}>
                <HeaderProfile {...this.props} />
                <View style={{flex: 3}}>
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