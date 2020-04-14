import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native'
import Post from '../components/Post'
import Header from '../components/Header'
import { fecthPosts } from '../store/actionsType/actionsPost'

class Feed extends Component {
    componentDidMount = () => {
        this.props.onFetchPosts()
    }
    render () {
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList data={this.props.posts} keyExtractor={ item => `${item.id}` }
                renderItem={ ({ item }) => <Post key={item.id} {...item}/> } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

const mapDisparchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(fecthPosts())
    }
}

export default connect(mapStateToProps, mapDisparchToProps)(Feed)