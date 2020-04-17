import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actionsType/actionsUser'
import { fecthPosts } from '../store/actionsType/actionsPost'
import { View, StyleSheet, ScrollView } from 'react-native'
import HeaderProfile from '../components/HeaderProfile'
import FeedProfile from '../components/FeedProfile'

class Profile extends Component { 
    componentDidMount = () => {
        this.props.onFetchPosts()
    }

    logout = () => {
        this.props.onLogout({ ...this.state })
        this.props.navigation.navigate('Auth')
    }
    render() {
        return(
            <View style={styles.container}>
                <HeaderProfile amountFollowers={this.props.posts.length} {...this.props} />
                <View style={styles.containerImage}>
                    <ScrollView>
                         <FeedProfile posts={this.props.posts}/>
                    </ScrollView>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
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
    },
    containerImage: {
        flex: 3,
    }
})

const mapStateToProps = ({ user, posts }) => {
    return {
        name: user.name,
        email: user.email,
        posts: posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
        onFetchPosts: () => dispatch(fecthPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)