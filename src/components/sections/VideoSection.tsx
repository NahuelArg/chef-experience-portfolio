import React from 'react';

interface VideoSectionProps {
    video: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ video }) => (
    <section className="w-full h-screen flex items-center justify-center px-2 md:px-4">
        <div className="max-w-3xl w-full">
            <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-3/4 md:w-1/2 mx-auto aspect-[1096/1280] object-cover pointer-events-none"
            />
        </div>
    </section>
);

export default VideoSection;