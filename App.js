/**
 * MyYouTube app
 * Created in React-Native
 * Andrew Kimble
 */

import React, {Component} from 'react';
import MusicControl from 'react-native-music-control';
import YouTube from 'react-native-youtube';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
    state: {isReady: boolean,
            currentTime: int};

    constructor(props: Props) {
        super(props);
        this.state = {isReady: false};
        MusicControl.enableControl('play', true);
        console.log('constructed');
    }

    componentDidMount() {
        console.log('component mounted, currentTime: ' + this.state.currentTime);
        MusicControl.on('play', ()=> {
            console.log('Play pushed');
            console.log(this.state.currentTime);
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <YouTube ref={(ref) => this.myTextInput = ref}
                    apiKey='YourAPIKey'
                    playlistId='PLCe9NP4MayN3GaU5xAtxNDLB9we9afEhx'
                    play={true}
                    resumePlayAndroid={true}
                    onReady={e => {
                        this.setState({ isReady: true })
                        MusicControl.setNowPlaying({
                            title: 'Music',
                            artwork: 'https://i.imgur.com/e1cpwdo.png',
                            duration: e.duration,
                            color: 0xf57842,
                        })
                    }}
                    onChangeState={e => {
                        console.log('YouTube onChangeState e.state: ' + e.state);
                        let test = this.myTextInput.getCurrentTime().then(currentTime => {
                            this.setState({ currentTime: currentTime })
                            console.log('YouTube onChangeState currentTime: ' + currentTime);
                        });
                    }}
                    onError={e => console.log('YouTube error: ' + e.error)}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
                <Text style={{color: 'white'}}>Is Ready: {this.state.isReady.toString()}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
  },
});
