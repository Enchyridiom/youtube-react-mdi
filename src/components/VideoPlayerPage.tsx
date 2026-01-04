"use client";

import { ThumbsUp, ThumbsDown, Share2, ListPlus, MoreHorizontal, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CommentSection } from './CommentSection';
import { useState } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface VideoPlayerPageProps {
  videoId?: string | string[];
  onVideoClick?: () => void;
}

export function VideoPlayerPage({ videoId, onVideoClick }: VideoPlayerPageProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const normalizedVideoId = Array.isArray(videoId) ? videoId[0] : videoId;

  const relatedVideos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1610041321024-0dff35bf9923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW18ZW58MXx8fHwxNzYyODQ2OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Los Mejores Momentos del Stream',
      channel: 'GamerPro',
      views: '1.2M visualizaciones',
      duration: '1:23:45',
      uploadTime: 'hace 1 semana',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1591951314140-7b6eef23edf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwcmVjaXBlfGVufDF8fHx8MTc2MjgwNjk5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Receta Fácil de Pasta Italiana',
      channel: 'Chef en Casa',
      views: '567K visualizaciones',
      duration: '18:22',
      uploadTime: 'hace 3 días',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjI3ODA4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Rutina de Ejercicios en Casa',
      channel: 'FitLife',
      views: '892K visualizaciones',
      duration: '35:15',
      uploadTime: 'hace 5 días',
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnR8ZW58MXx8fHwxNzYyODQwMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Concierto en Vivo - Las Mejores Canciones',
      channel: 'Music Live',
      views: '3.4M visualizaciones',
      duration: '2:15:30',
      uploadTime: 'hace 2 semanas',
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzYyODM5MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Aventura por Islandia - Paisajes Increíbles',
      channel: 'Travel World',
      views: '678K visualizaciones',
      duration: '28:47',
      uploadTime: 'hace 4 días',
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-14 pl-20 lg:pl-56">
        <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Columna principal del video */}
        <article className="flex-1 min-w-0">
          {/* Video player */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762329370654-c4952d7d7cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdHV0b3JpYWx8ZW58MXx8fHwxNzYyODY0NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#ff0000] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#cc0000] transition-colors">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          {/* Título del video */}
          <div className="mb-3">
            <h1 className="text-white font-bold text-xl">
              Tutorial Completo de React 2025 - Desde Cero hasta Avanzado
            </h1>
          </div>

          {/* Info y botones de acción */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
              <div>
                <p className="text-white">CodeMaster</p>
                <p className="text-[#aaa] text-sm">1.2M suscriptores</p>
              </div>
              <button className="ml-4 px-5 py-2 bg-[#ff0000] text-white rounded-full hover:bg-[#cc0000] transition-colors">
                Suscribirse
              </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] transition-colors border-r border-[#3f3f3f]">
                  <ThumbsUp className="w-5 h-5 text-white" />
                  <span className="text-white">12K</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] transition-colors">
                  <ThumbsDown className="w-5 h-5 text-white" />
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors">
                <Share2 className="w-5 h-5 text-white" />
                <span className="text-white">Compartir</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors">
                <ListPlus className="w-5 h-5 text-white" />
                <span className="text-white">Guardar</span>
              </button>

              <button className="p-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors">
                <MoreHorizontal className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-[#272727] rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-2 text-white">
              <span>245K visualizaciones</span>
              <span>hace 2 días</span>
            </div>
            <div className={`text-white ${!showFullDescription ? 'line-clamp-3' : ''}`}>
              <p className="mb-2">
                En este tutorial completo aprenderás React desde cero hasta nivel avanzado. 
                Cubriremos todos los conceptos fundamentales incluyendo componentes, hooks, 
                state management, routing y mucho más.
              </p>
              <p className="mb-2">
                📚 Contenido del video:
                <br />
                00:00 - Introducción
                <br />
                05:30 - Setup del proyecto
                <br />
                15:20 - Componentes básicos
                <br />
                28:45 - Hooks (useState, useEffect)
                <br />
                42:10 - Manejo de formularios
              </p>
              <p>
                🔗 Enlaces útiles:
                <br />
                - Código en GitHub: github.com/example
                <br />
                - Documentación oficial: react.dev
              </p>
            </div>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="flex items-center gap-1 mt-2 text-white hover:text-[#aaa] transition-colors"
            >
              <span>{showFullDescription ? 'Mostrar menos' : 'Mostrar más'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFullDescription ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Sección de comentarios */}
          <CommentSection commentCount="1,234" />
        </article>

        {/* Columna lateral de videos relacionados */}
        <aside className="w-full lg:w-[400px] xl:w-[450px] space-y-3" aria-labelledby="related-videos-heading">
          <h2 id="related-videos-heading" className="sr-only">Videos relacionados</h2>
          {relatedVideos.map((video) => (
            <article key={video.id} className="flex gap-2 cursor-pointer group" onClick={onVideoClick}>
              <div className="relative w-40 aspect-video bg-[#181818] rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-white text-xs" aria-label={`Duración: ${video.duration}`}>
                  {video.duration}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm line-clamp-2 mb-1 font-bold group-hover:text-[#aaa] transition-colors">
                  {video.title}
                </h3>
                <p className="text-[#aaa] text-xs">{video.channel}</p>
                <div className="text-[#aaa] text-xs">
                  {video.views} • {video.uploadTime}
                </div>
              </div>
            </article>
          ))}
        </aside>
        </div>
      </main>
    </>
  );
}
