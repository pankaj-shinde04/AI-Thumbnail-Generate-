import React from 'react';
import SoftDrop from '../components/SoftDrop';

export default function MyGeneration() {
  const [generations, setGenerations] = React.useState([
    {
      id: 1,
      title: '10 Tips for Better Sleep',
      thumbnail: null,
      aspectRatio: '16:9',
      style: 'Bold & Graphic',
      colorScheme: 'Vibrant',
      createdAt: new Date().toISOString()
    }
  ]);

  return (
    <>
      <SoftDrop />
      <div className="pt-24 min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-zinc-100 mb-2">My Generations</h1>
            <p className="text-zinc-400">View and manage all your generated thumbnails</p>
          </div>

          {generations.length === 0 ? (
            <div className="p-12 rounded-2xl bg-white/8 border border-white/12 shadow-xl text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">No generations yet</h3>
              <p className="text-zinc-400 mb-6">Start creating your first thumbnail</p>
              <button className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white hover:opacity-90 transition-opacity">
                Create Thumbnail
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generations.map((gen) => (
                <div key={gen.id} className="p-4 rounded-2xl bg-white/8 border border-white/12 shadow-xl hover:border-white/20 transition-colors">
                  <div className="aspect-video rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5 mb-4 overflow-hidden">
                    {gen.thumbnail ? (
                      <img 
                        src={gen.thumbnail} 
                        alt={gen.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <svg className="w-12 h-12 text-zinc-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-zinc-500 text-sm">No preview</p>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-zinc-100 mb-2 truncate">{gen.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
                    <span className="px-2 py-1 rounded-full bg-white/10">{gen.aspectRatio}</span>
                    <span className="px-2 py-1 rounded-full bg-white/10">{gen.style}</span>
                    <span className="px-2 py-1 rounded-full bg-white/10">{gen.colorScheme}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-white/10 text-zinc-300 hover:bg-white/20 transition-colors">
                      Download
                    </button>
                    <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white hover:opacity-90 transition-opacity">
                      Regenerate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
