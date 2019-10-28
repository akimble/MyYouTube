# MyYouTube
Testing react-native-youtube with react-native-music-control

Right now this app just plays a YouTube video and is able to make some logs on the current duration by clicking the Play button on
the lock screen. Not really useful since I stopped fooling with the lockscreen when I couldn't find more information on getting
the former library to play videos in the background.


I really just wanted to use react-native to play YouTube on the lockscreen so I can listen to music without the screen always on.
Unfortunately it seems pretty hard to find good information on how to do this in this framework. I tried a few things like
using react-native-video, but it can't get a stream from YouTube because there needs to be a file extension on the source (Although
YouTube does have audio-only file URLs listed on every video in the Page Source. Could probably parse through the DOM to get it 
and use it with that library.).
React-native-youtube won't play videos in the background, probably since it requires the YouTube app to be installed for Android users
so it makes sense that they would have that locked down.

Only way that seems immediately possible to me is using one of the available Java projects on GitHub that parses and plays
YouTube audio only and then using that as a Native Module that the JavaScript in React Native can call from.
