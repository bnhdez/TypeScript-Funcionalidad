


interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Vultures",
    details: {
        author: 'Kanye',
        year: 2024
    }
}

const song = 'New Song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details ;

//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Author: ', author);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Personaje 3: ', dbz[3] || 'No hay personaje');


export {};