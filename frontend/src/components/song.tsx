const Song = () => {
    const songs = [
        <iframe width="300" height="300" src="https://www.youtube.com/embed/5VubhvUQaD8?si=t6RO9X8Gu98-3NvT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>,
        <iframe width="300" height="300" src="https://www.youtube.com/embed/3s1jfsOrwx8?si=huYNWFcTH70c1bNQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>,
        <iframe width="300" height="300" src="https://www.youtube.com/embed/BEI63kGhWaE?si=b5qTdkqaokFs7fDl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>,
        <iframe width="300" height="300" src="https://www.youtube.com/embed/Mk132xeCnMQ?si=Y0HPgZKwkv6wAhzT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>,
    ];

    return (
        <div className="grid grid-cols-3 gap-6 p-6">
            {songs.map((song, index) => (
                <div key={index} className="flex justify-center ">
                    {song}
                </div>
            ))}
        </div>
    );
}

export default Song;
