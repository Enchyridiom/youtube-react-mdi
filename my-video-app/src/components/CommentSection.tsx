"use client";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  text: string;
  likes: string;
  time: string;
}

interface CommentSectionProps {
  commentCount: string;
}

export function CommentSection({ commentCount }: CommentSectionProps) {
  const comments: Comment[] = [
    {
      id: 1,
      author: 'Ana García',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: '¡Excelente contenido! Me ha ayudado mucho a entender el tema. Gracias por compartir.',
      likes: '234',
      time: 'hace 2 días',
    },
    {
      id: 2,
      author: 'Carlos Rodríguez',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      text: 'Muy bien explicado. ¿Podrías hacer una segunda parte?',
      likes: '89',
      time: 'hace 1 semana',
    },
    {
      id: 3,
      author: 'María López',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'Llevo siguiendo tu canal desde hace meses y cada video es mejor que el anterior. ¡Sigue así!',
      likes: '156',
      time: 'hace 3 días',
    },
  ];

  return (
    <div className="mt-6">
      <div className="mb-6">
        <h3 className="text-white mb-4">{commentCount} comentarios</h3>
        
        {/* Añadir comentario */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Tu perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Añade un comentario..."
              className="w-full bg-transparent border-b border-[#303030] pb-2 text-white placeholder-[#aaa] outline-none focus:border-white transition-colors"
            />
            <div className="flex justify-end gap-2 mt-3">
              <button className="px-4 py-2 text-[#aaa] hover:bg-[#272727] rounded-full transition-colors">
                Cancelar
              </button>
              <button className="px-4 py-2 bg-[#ff0000] text-white rounded-full hover:bg-[#cc0000] transition-colors">
                Comentar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de comentarios */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={comment.avatar}
                alt={comment.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white">{comment.author}</span>
                <span className="text-[#aaa] text-sm">{comment.time}</span>
              </div>
              <p className="text-white mb-2">{comment.text}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-[#aaa] hover:text-white transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{comment.likes}</span>
                </button>
                <button className="text-[#aaa] hover:text-white transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                </button>
                <button className="text-[#aaa] hover:text-white transition-colors text-sm">
                  Responder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
