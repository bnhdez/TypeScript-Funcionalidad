


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




export {};