'use strict'
import React, { Component } from 'react'
import {
    Image, View, StyleSheet, TouchableOpacity, Dimensions, Text
} from 'react-native'

import { Icon, Container, Content } from 'native-base'

import Swiper                       from 'react-native-swiper'
import MySwiper                     from './../components/Swiper'
import colors                       from './../resources/styles/colors'
import NavBar                       from './../components/NavBar'

const images = [
    'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/e15/19425314_261720977642296_3471414103040327680_n.jpg',
    'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18381891_291086784673292_4220828678638010368_n.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/9b/cd/22/9bcd2272d45857a1af48a83b8069c943.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/84/87/77/8487773b5898a93f1b1512660fb0e75c.jpg'
]

const interests = [
    'Drink', 'Cats', 'Dogs', 'Gym', 'ReactAZ', 'Guitar'
]

const {width} = Dimensions.get('window')
const imgHeight = 400
export default class UserProfile extends Component {
    static navigationOptions = {
        tabBarVisible: false
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <NavBar title='Celine Farach, 20' navigator={ this.props.navigation } />
                    { this.renderSwiper() }
                    { this.renderInfo() }
                    { this.renderDescription() }
                    { this.renderInstagramPhotos() }
                    { this.renderInterest() }
                </Content>
            </Container>
        )
    }

    renderSwiper() {
        return (
            <Swiper width={width} height={imgHeight}
                removeClippedSubviews={false}
                dotColor='#848288'
                activeDotColor={colors.txtMainRed}
                paginationStyle={{
                    top: -330, left: null, right: (width / 2) - 20
                }} loop={true}>
                    {
                        images.map((uri, idx) => {
                           return (
                               <Image key={idx} style={{ width: width, height: imgHeight }} source={{ uri: uri }} />
                           )
                        })
                    }
            </Swiper>
        )
    }

    renderInfo() {
        return (
            <View style={styles.holder}>
                <Text style={styles.username}>Celine Farach, 20</Text>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-briefcase-outline" />
                    <Text style={styles.info}>Job description</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-school-outline" />
                    <Text style={styles.info}>Education description</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-locate-outline" />
                    <Text style={styles.info}>Location description</Text>
                </View>
            </View>
        )
    }

    renderDescription() {
        return (
            <View style={styles.holder}>
                <Text style={styles.info}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Text>
            </View>
        )
    }

    renderInstagramPhotos() {
        return (
            <View style={[styles.holder, { paddingRight: 5 }]}>
                <Text style={styles.headerTitle}>10 Instagram Photos</Text>
                <MySwiper contentContainerStyle={{marginTop: 5}}>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/20184329_1786684514705779_4027869279931072512_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.48.1080.1080/20181020_277936509279004_6121417119469928448_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c23.0.1033.1033/20181477_1595470463799234_3991898915942170624_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/e15/19534852_1375906055839470_1853943317880897536_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/e15/19425314_261720977642296_3471414103040327680_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/19228596_1742478359383734_6570009312322650112_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/19120913_1075552059211222_1114070823880097792_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18949955_240343086451469_1318011521955004416_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18947353_268474323560359_502601329290510336_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18381891_291086784673292_4220828678638010368_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                </MySwiper>
            </View>
        )
    }

    renderInterest() {
        const items = interests.map((item, idx) => {
            return (
                <View key={idx} style={styles.interest}>
                    <Text style={styles.interestLabel}>{item}</Text>
                </View>
            )
        })
        return (
            <View style={styles.holder}>
                <Text style={styles.headerTitle}>{interests.length} Interests</Text>
                <View style={ styles.interestHolder }>
                    {items}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff'
    },
    holder: {
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    username: {
        fontSize: 20,
        marginBottom: 10
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoIcon: {
        color: colors.txtDescription,
        fontSize: 20,
        marginRight: 10
    },
    info: {
        fontSize: 16,
        color: colors.txtDescription
    },
    headerTitle: {
        fontSize: 16
    },
    instagramColumn: {
        paddingRight: 10
    },
    instagramPhoto: {
        width: 110,
        height: 110,
        borderRadius: 5,
        marginTop: 10
    },
    interestHolder: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    interest: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdMainRed,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10
    },
    interestLabel: {
        color: colors.txtMainRed
    }
})
