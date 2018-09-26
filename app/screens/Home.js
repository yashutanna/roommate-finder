import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import colors from './../resources/styles/colors'
import cards from './../data/home'

const { width, height } = Dimensions.get('window')
const imgHeight = height - 200
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeOpacity: new Animated.Value(0),
            nopeOpacity: new Animated.Value(0)
        }
    }

    render() {
        return (
            <Container>
                { this.renderSwiper() }
                { this.renderButtons() }
                { this.renderLabelResults() }
            </Container>
        )
    }

    renderSwiper() {
        return (
            <View style={{ paddingHorizontal: 5 }}>
                <DeckSwiper
                    ref={(c) => this._deckSwiper = c}
                    dataSource={cards}
                    renderEmpty={() =>
                        <View style={{ alignSelf: "center" }}>
                            <Text>Over</Text>
                        </View>
                    }
                    onSwipeRight={this.onSwipeRight.bind(this)}
                    onSwipeLeft={this.onSwipeLeft.bind(this)}
                    renderItem={item =>
                        <Card style={{ elevation: 3 }} >
                            <CardItem cardBody button onPress={ this.onSelectProfile.bind(this) }>
                                <Image style={{ height: imgHeight, flex: 1 }} source={{ uri: item.imageUrl }} />
                            </CardItem>
                            <CardItem>
                                <Text style={{ fontSize: 20, color: '#484848'}}>{ item.name + ', ' + item.age}</Text>
                            </CardItem>
                        </Card>
                    }
                />
            </View>
        )
    }

    renderButtons() {
        return (
            <View style={ styles.buttonHolder }>
                <TouchableOpacity style={ styles.circleButton } onPress={this.swipeLeft}>
                    <Icon name="md-thumbs-down" style={{ color: '#fd496b', fontSize: 34 }} />
                </TouchableOpacity>
                <TouchableOpacity style={ styles.circleButtonSmall }>
                    <Icon style={{ color: '#a550e1', fontSize: 34 }} name="ios-flash" />
                </TouchableOpacity>
                <TouchableOpacity style={ styles.circleButton } onPress={this.swipeRight}>
                    <Icon style={{ color: '#3ce8bd', fontSize: 34, marginTop: 5 }} name="md-thumbs-up" />
                </TouchableOpacity>
            </View>
        )
    }

    renderLabelResults() {
        return (
            <View>
                <Animated.View style={[styles.lblLikeHolder,
                    {
                        opacity: this.state.likeOpacity.interpolate({
                            inputRange: [0, 0.1, 0.9, 1],
                            outputRange: [0, 1, 1, 0]
                        })
                    }
                ]}>
                    <Text style={styles.lblLike}>YUP</Text>
                </Animated.View>
                <Animated.View style={[styles.lblNopeHolder,
                    {
                        opacity: this.state.nopeOpacity.interpolate({
                            inputRange: [0, 0.1, 0.9, 1],
                            outputRange: [0, 1, 1, 0]
                        })
                    }
                ]}>
                    <Text style={styles.lblNope}>NOPE</Text>
                </Animated.View>
            </View>
        )
    }

    onSelectProfile(e) {
        console.log(e);
        this.props.navigation.navigate('UserProfile')
    }

    onSwipeRight() {
        this.setState({
            likeOpacity: new Animated.Value(0)
        })
        setTimeout(() => {
            Animated.timing(this.state.likeOpacity, {
                toValue: 1,
                duration: 1000
            }).start()
        })
    }

    onSwipeLeft() {
        this.setState({
            nopeOpacity: new Animated.Value(0)
        })
        setTimeout(() => {
            Animated.timing(this.state.nopeOpacity, {
                toValue: 1,
                duration: 1000
            }).start()
        })
    }

    swipeLeft = () => {
        this._deckSwiper._root.swipeLeft()
        this.onSwipeLeft()
    }

    swipeRight = () => {
        this._deckSwiper._root.swipeRight()
        this.onSwipeRight()
    }
}
const btnStyle = {
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { height: 0, width:0 },
    shadowRadius: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
}

const lblSwipeHolder = {
    width: 100,
    height: 70,
    borderRadius: 5,
    borderWidth: 3,
    position: 'absolute',
    top: imgHeight - 65,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center'
}

const lblSwipe = {
    fontSize: 20,
    backgroundColor: 'transparent',
    fontWeight: '700'
}
const styles = StyleSheet.create({
    buttonHolder: {
        flexDirection: "row",
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems:'center',
        justifyContent: 'center',
        padding: 15
    },
    circleButton: {
        ...btnStyle,
        width: 60,
        height: 60,
        borderRadius: 30
    },
    circleButtonSmall: {
        ...btnStyle,
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: 10,
        marginHorizontal: 10
    },
    lblLikeHolder: {
        ...lblSwipeHolder,
        borderColor: colors.txtSuccess,
        right: 15
    },
    lblLike: {
        ...lblSwipe,
        color: colors.txtSuccess
    },
    lblNopeHolder: {
        ...lblSwipeHolder,
        borderColor: colors.txtError,
        left: 15
    },
    lblNope: {
        ...lblSwipe,
        color: colors.txtError
    }
})
