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
  return (
    <>
     <SoftDrop />
     <div className= "pt-24 min-h-screen">
     <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
      <div className="grid lg:grid-cols-[400px-1fr] gap-8">
          {/* left side  */}
            <div className={`space-y-6 w-full max-w-[450px]  ${id && 'pointer-events-none'}`}>
             <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
               <div>
                <h2 className="text-xl font-bold text-zinc-100 mb-1">Create Your Thumbnail</h2>
                <p className="text-sm text-zinc-400">Describe your vision and let AI bring it to life</p>
               </div>
               <div className="space-y-5">

               </div>
               {/* Button */}
               {!id && (
                <button className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-[#ff0080] to-[#7928ca] text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed">
                  {loading ? 'Generating...' : 'Generate Thumbnail'}
                </button>
               )}
             </div>
            </div>
            {/* right side  */}
            <div>

            </div>
      </div>

     </main>
     </div>
    </>
      );
}
