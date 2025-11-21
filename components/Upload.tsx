import React, { useState } from 'react';
import { Upload as UploadIcon, AlertTriangle } from 'lucide-react';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black relative py-20 px-4 border-t border-red-900">
      <div className="max-w-3xl w-full border border-neutral-800 p-8 md:p-16 relative overflow-hidden">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 -z-10"></div>

        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="text-red-600 w-12 h-12 mb-6 animate-pulse" />
          
          <h2 className="text-4xl md:text-6xl font-['Oswald'] font-bold uppercase mb-2">
            Submit Raw Data
          </h2>
          <p className="font-mono text-sm md:text-base text-neutral-400 mb-12 max-w-md">
            The algorithm requires entropy. Upload your visual essence to the collective stream. Do not hide.
          </p>

          <div className="relative group w-full max-w-md">
            <input 
              type="file" 
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              accept="image/*"
            />
            
            <div className={`
              border-2 border-dashed transition-all duration-300 p-12 flex flex-col items-center justify-center gap-4
              ${file ? 'border-red-600 bg-red-900/10' : 'border-neutral-700 hover:border-white bg-neutral-900/50'}
            `}>
              <UploadIcon className={`w-8 h-8 ${file ? 'text-red-500' : 'text-neutral-500 group-hover:text-white'}`} />
              <span className="font-mono text-sm uppercase tracking-widest">
                {file ? file.name : "DRAG & DROP OR CLICK TO UPLOAD"}
              </span>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
          </div>

          {file && (
            <button className="mt-8 bg-red-600 text-black font-bold font-mono px-8 py-4 uppercase hover:bg-white transition-colors w-full max-w-md">
              Initiate Transfer
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Upload;