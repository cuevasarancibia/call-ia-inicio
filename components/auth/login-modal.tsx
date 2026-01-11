'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export function CallIALogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation of auth delay
    setTimeout(() => {
      setIsLoading(false);
      setOpen(false);
      alert("System Access Granted. Welcome.");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className={cn(
            "group relative text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60",
            "transition-all duration-1000 hover:scale-105 hover:tracking-wide focus:outline-none",
            "cursor-pointer select-none font-mono z-20 animate-glow"
          )}
        >
          {/* Main Text */}
          CALL IA
          
          {/* Hover Glow Effect */}
          <span className="absolute inset-0 -z-10 hidden blur-3xl group-hover:block bg-white/10 transition-all duration-1000" />
        </button>
      </DialogTrigger>
      
      {/* 
         MODAL CRISTALINO:
         - bg-black/40: Mucho más transparente.
         - backdrop-blur-md: Blur medio, permite ver el movimiento de fondo.
         - border-white/20: Borde un poco más visible.
      */}
      <DialogContent className="sm:max-w-md border border-white/20 bg-black/40 backdrop-blur-md text-white shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-center font-mono text-xl tracking-[0.2em] text-white/90">
            SYSTEM ACCESS
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-6 py-6 px-2">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/60 font-mono">Identity</Label>
            <Input 
              id="email" 
              placeholder="ID_7701" 
              autoComplete="off"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/40 focus:bg-white/10 focus:ring-0 transition-all duration-500 font-mono text-sm h-12 backdrop-blur-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[10px] uppercase tracking-widest text-white/60 font-mono">Key</Label>
            <Input 
              id="password" 
              type="password"
              placeholder="••••••••"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/40 focus:bg-white/10 focus:ring-0 transition-all duration-500 font-mono text-sm h-12 backdrop-blur-sm"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-white/80 font-mono tracking-widest text-xs h-12 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'INITIALIZE'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}