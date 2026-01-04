"use client";

import { useRouter } from 'next/navigation';
import { ImageWithFallback } from '../components/figma/ImageWithFallback'

interface VideoCardProps {
  id: number;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  duration: string;
  uploadTime: string;
  onVideoClick?: () => void;
}

export function VideoCard({
  id,
  thumbnail,
  title,
  channel,
  views,
  duration,
  uploadTime,
  onVideoClick,
}: VideoCardProps) {
  const router = useRouter();
  const handleClick = () => {
    if (onVideoClick) onVideoClick();
    router.push(`/video/${id}`);
  };

  return (
    <article className="cursor-pointer group" onClick={handleClick}>
      {/* Thumbnail */}
      <div className="relative aspect-video bg-[#181818] rounded-xl overflow-hidden mb-3">
        <ImageWithFallback
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-white text-xs" aria-label={`Duración: ${duration}`}>
          {duration}
        </div>
      </div>

      {/* Info */}
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0" aria-hidden="true"></div>
        <div className="flex-1 min-w-0">
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }}>
            <h3 className="text-white line-clamp-2 mb-1 font-bold group-hover:text-[#aaa] transition-colors">
              {title}
            </h3>
          </a>
          <p className="text-[#aaa] text-sm" aria-label={`Canal: ${channel}`}>{channel}</p>
          <div className="text-[#aaa] text-sm">
            <span aria-label={`Visualizaciones: ${views}`}>{views}</span> • <span aria-label={`Subido: ${uploadTime}`}>{uploadTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
