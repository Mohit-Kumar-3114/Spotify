import axios from "axios";
import { useState, useEffect } from "react";
const url=import.meta.env.VITE_BACKEND_URL
interface Song {
    title: string;
    url: string;
    id:string
}

const Song = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get(`${url}/api/song/all`); 
                console.log(response.data.songs)
                setSongs(response.data.songs);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };
        fetchSongs();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-6 p-6">
            {songs.map((song, index) => (
                <div key={index} className="flex flex-col items-center">
                    <span className="text-2xl text-white">{(song.title).toUpperCase()}</span>
                    <video width="300" height="300" src={song.url} title={song.title} controls ></video>
                </div>
            ))}
        </div>
    );
};

export default Song;
