import { VideoCard } from "./VideoCard";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface HomePageProps {
  onVideoClick?: () => void;
}

export default function HomePage({ onVideoClick }: HomePageProps) {

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1762329370654-c4952d7d7cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdHV0b3JpYWx8ZW58MXx8fHwxNzYyODY0NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tutorial Completo de React 2025 - Desde Cero hasta Avanzado',
      channel: 'CodeMaster',
      views: '245K visualizaciones',
      duration: '45:32',
      uploadTime: 'hace 2 días',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1610041321024-0dff35bf9923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW18ZW58MXx8fHwxNzYyODQ2OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Los Mejores Momentos del Stream - Gameplay Épico',
      channel: 'GamerPro',
      views: '1.2M visualizaciones',
      duration: '1:23:45',
      uploadTime: 'hace 1 semana',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1591951314140-7b6eef23edf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwcmVjaXBlfGVufDF8fHx8MTc2MjgwNjk5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Receta Fácil de Pasta Italiana - Cocina en 20 Minutos',
      channel: 'Chef en Casa',
      views: '567K visualizaciones',
      duration: '18:22',
      uploadTime: 'hace 3 días',
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjI3ODA4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Rutina de Ejercicios en Casa - Sin Equipo Necesario',
      channel: 'FitLife',
      views: '892K visualizaciones',
      duration: '35:15',
      uploadTime: 'hace 5 días',
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnR8ZW58MXx8fHwxNzYyODQwMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Concierto en Vivo - Las Mejores Canciones del Año',
      channel: 'Music Live',
      views: '3.4M visualizaciones',
      duration: '2:15:30',
      uploadTime: 'hace 2 semanas',
    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzYyODM5MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Aventura por Islandia - Los Paisajes Más Increíbles',
      channel: 'Travel World',
      views: '678K visualizaciones',
      duration: '28:47',
      uploadTime: 'hace 4 días',
    },
    {
      id: 7,
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjI3OTkzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cómo Crear una Presentación de Negocios Exitosa',
      channel: 'Business Pro',
      views: '234K visualizaciones',
      duration: '22:10',
      uploadTime: 'hace 1 semana',
    },
    {
      id: 8,
      thumbnail: 'https://images.unsplash.com/photo-1603016129004-c7539f86b53f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBkb2N1bWVudGFyeXxlbnwxfHx8fDE3NjI4MDIwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Documental: La Vida Salvaje en África',
      channel: 'Nature Films',
      views: '1.8M visualizaciones',
      duration: '52:33',
      uploadTime: 'hace 3 días',
    },
    {
      id: 9,
      thumbnail: 'https://images.unsplash.com/photo-1762329370654-c4952d7d7cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdHV0b3JpYWx8ZW58MXx8fHwxNzYyODY0NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Inteligencia Artificial: El Futuro de la Tecnología',
      channel: 'Tech Talk',
      views: '445K visualizaciones',
      duration: '31:25',
      uploadTime: 'hace 6 días',
    },
    {
      id: 10,
      thumbnail: 'https://images.unsplash.com/photo-1610041321024-0dff35bf9923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzdHJlYW18ZW58MXx8fHwxNzYyODQ2OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Torneo Internacional - Final Emocionante',
      channel: 'eSports Channel',
      views: '2.1M visualizaciones',
      duration: '3:45:20',
      uploadTime: 'hace 1 día',
    },
    {
      id: 11,
      thumbnail: 'https://images.unsplash.com/photo-1591951314140-7b6eef23edf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwcmVjaXBlfGVufDF8fHx8MTc2MjgwNjk5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Postres Saludables sin Azúcar - 5 Recetas',
      channel: 'Healthy Kitchen',
      views: '389K visualizaciones',
      duration: '25:18',
      uploadTime: 'hace 2 semanas',
    },
    {
      id: 12,
      thumbnail: 'https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjI3ODA4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Yoga para Principiantes - Sesión Completa',
      channel: 'Zen & Fitness',
      views: '712K visualizaciones',
      duration: '40:05',
      uploadTime: 'hace 1 semana',
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="pt-14 pl-20 lg:pl-56">
          <div className="p-6">
            {/* Chips de categorías */}
            <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {['Todo', 'Música', 'Gaming', 'Noticias', 'En vivo', 'Tecnología', 'Cocina', 'Fitness'].map(
                (category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                      index === 0
                        ? 'bg-white text-black'
                        : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            {/* Grid de videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  duration={video.duration}
                  uploadTime={video.uploadTime}
                  onVideoClick={onVideoClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
