// Web Worker for YouTube video initialization
self.onmessage = (e) => {
    if (e.data.type === "INIT_YOUTUBE") {
        // Send back the encoded video ID array
        self.postMessage({
            type: "YOUTUBE_READY",
            encodedId: [100, 81, 119, 52, 119, 57, 87, 103, 88, 99, 81]
        });
    }
};

export {};
