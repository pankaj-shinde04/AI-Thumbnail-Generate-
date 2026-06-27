import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import SoftDrop from '../components/SoftDrop';

export default function Generate() {

  const {id} = useParams();
  const [title, setTitle] = useState('');
  const [addtionaldetails, setAdditionalDetails] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [thumbnailStyle, setThumbnailStyle] = useState('Bold & Graphic');
  const [colorScheme, setColorScheme] = useState('Vibrant');
  return (
    <>
     <SoftDrop />
     <div className= "pt-24 min-h-screen">
     <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
      <div className="flex flex-row gap-8">
          {/* left side - Form */}
            <div className={`space-y-6 w-full max-w-[450px]  ${id && 'pointer-events-none'}`}>
             <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
               <div>
                <h2 className="text-xl font-bold text-zinc-100 mb-1">Create Your Thumbnail</h2>
                <p className="text-sm text-zinc-400">Describe your vision and let AI bring it to life</p>
               </div>
               <div className="space-y-5">
                  {/* Title/Topic Input */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Title or Topic</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., 10 Tips for Better Sleep"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    />
                    <div className="text-right text-xs text-zinc-500 mt-1">{title.length}/100</div>
                  </div>

                  {/* Aspect Ratio */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Aspect Ratio</label>
                    <div className="flex gap-2">
                      {['16:9', '1:1', '9:16'].map((ratio) => (
                        <button
                          key={ratio}
                          onClick={() => setAspectRatio(ratio)}
                          className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                            aspectRatio === ratio
                              ? 'bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white'
                              : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                          }`}
                        >
                          {ratio}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail Style */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Thumbnail Style</label>
                    <select
                      value={thumbnailStyle}
                      onChange={(e) => setThumbnailStyle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    >
                      <option value="Bold & Graphic">Bold & Graphic</option>
                      <option value="Minimalist">Minimalist</option>
                      <option value="Professional">Professional</option>
                      <option value="Playful">Playful</option>
                    </select>
                    <p className="text-xs text-zinc-500 mt-1">High contrast, bold typography, striking visuals</p>
                  </div>

                  {/* Color Scheme */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Color Scheme</label>
                    <div className="flex gap-2 flex-wrap">
                      {[
                        { name: 'Vibrant', colors: ['#ff0080', '#7928ca', '#ff6b6b'] },
                        { name: 'Ocean', colors: ['#0077b6', '#00b4d8', '#90e0ef'] },
                        { name: 'Sunset', colors: ['#ff7e5f', '#feb47b', '#ffcc70'] },
                        { name: 'Forest', colors: ['#2d6a4f', '#40916c', '#74c69d'] },
                        { name: 'Monochrome', colors: ['#1a1a1a', '#4a4a4a', '#808080'] },
                      ].map((scheme) => (
                        <button
                          key={scheme.name}
                          onClick={() => setColorScheme(scheme.name)}
                          className={`relative p-2 rounded-lg border-2 transition-all ${
                            colorScheme === scheme.name
                              ? 'border-purple-500'
                              : 'border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex gap-1">
                            {scheme.colors.map((color, idx) => (
                              <div
                                key={idx}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">Selected: {colorScheme}</p>
                  </div>

                  {/* Additional Prompts */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Additional Prompts (optional)</label>
                    <textarea
                      value={addtionaldetails}
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      placeholder="Add any specific details or preferences..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none"
                    />
                  </div>
               </div>
               {/* Button */}
               {!id && (
                <button className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-gradient-to-b from-[#3b82f6] to-[#06b6d4] text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed">
                  {loading ? 'Generating...' : 'Generate Thumbnail'}
                </button>
               )}
             </div>
            </div>
          {/* right side - Preview */}
            <div>
              <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-zinc-100 mb-1">Preview</h2>
                  <p className="text-sm text-zinc-400">See your thumbnail come to life</p>
                </div>
                
                <div className="relative aspect-video rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center bg-white/5 min-h-[300px]">
                  {thumbnail ? (
                    <img 
                      src={thumbnail} 
                      alt="Generated thumbnail" 
                      className="w-full h-full object-contain rounded-xl"
                    />
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-zinc-400 font-medium">Generate your first thumbnail</p>
                      <p className="text-zinc-500 text-sm mt-1">Fill out the form and click Generate</p>
                    </>
                  )}
                </div>
              </div>
            </div>
      </div>

     </main>
     </div>
    </>
      );
}
