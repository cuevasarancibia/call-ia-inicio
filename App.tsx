import React from 'react';
import { DottedSurface } from './components/ui/dotted-surface';
import { CallIALogin } from './components/auth/login-modal';

export default function App() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black selection:bg-white selection:text-black">
      
      {/* 1. Fondo 3D: z-[1] */}
      <DottedSurface />

      {/* 2. Overlay Gradiente: z-[10] para dar profundidad sobre las partículas */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />

      {/* 3. Elemento Central: z-[20] */}
      <div className="z-20 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-1000 [animation-timing-function:cubic-bezier(0.4,0,0.2,1)]">
        <CallIALogin />
        
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono mt-4 animate-pulse-slow">
          Secure System Access Layer
        </p>
      </div>

    </main>
  );
}