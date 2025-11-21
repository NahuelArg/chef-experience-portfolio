import React from 'react';

interface VideoSectionProps {
    video: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ video }) => (
    <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl w-full">
            <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dyiiztnx4&public_id=IMG_4492_1_gkjl9s&profile=cld-looping"
                className="w-3/4 md:w-1/2 mx-auto aspect-[1096/1280] object-cover"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            ></iframe>
        </div>
    </section>
);

export default VideoSection;