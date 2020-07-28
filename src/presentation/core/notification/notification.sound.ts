import Sound from "react-native-sound";
import {SoundResources} from "resources/sounds/soundResources";


export class NotificationSound {
    static Default() {
        const sound = new Sound(SoundResources.definite, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            sound.play();
        });
    }
}