import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import { HERO_POSTER_IMAGE } from '../data/biotechData';

// =========================================================================
// HERO VIDEO URL PLACEHOLDER
// Replace 'hero-video.mp4' below with your hosted video URL or local file path
// e.g., '/videos/hero-video.mp4' or 'https://your-domain.com/biotech-loop.mp4'
// =========================================================================
export const HERO_VIDEO_URL = "hero-video.mp4";

interface HeroVideoProps {
  onExplorePipeline: () => void;
  onPartnerManufacturing: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  onExplorePipeline,
  onPartnerManufacturing
}) => {
  const [videoSrc] = useState<string>(HERO_VIDEO_URL);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background Interactive 3D Molecular Lattice Canvas in Royal / Electric Blue
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface NodePoint {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      baseRadius: number;
      color: string;
    }

    const nodes: NodePoint[] = [];
    const nodeCount = 42;
    // High-contrast Royal and Electric Blue palette
    const colors = ['#3B82F6', '#2563EB', '#60A5FA', '#1D4ED8', '#93C5FD'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 800 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        baseRadius: Math.random() * 3 + 2.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep Navy Blue atmospheric background
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, 50,
        width / 2, height / 2, width * 0.8
      );
      grad.addColorStop(0, 'rgba(15, 32, 67, 0.45)');
      grad.addColorStop(0.5, 'rgba(10, 25, 47, 0.8)');
      grad.addColorStop(1, 'rgba(6, 17, 34, 0.98)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      angle += 0.0015;
      const fov = 450;
      const cx = width / 2;
      const cy = height / 2;

      const projected = nodes.map(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        if (node.z < 150) node.z = 900;
        if (node.z > 950) node.z = 200;

        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const rx = node.x * cosA - (node.z - 500) * sinA;
        const rz = node.x * sinA + (node.z - 500) * cosA + 500;

        const scale = fov / (fov + rz);
        const px = cx + rx * scale;
        const py = cy + node.y * scale;
        const radius = Math.max(1, node.baseRadius * scale * 1.5);

        return { px, py, rz, radius, color: node.color, scale };
      });

      // Filaments in Royal Electric Blue
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.45 * (projected[i].scale + projected[j].scale) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      projected.forEach(p => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12 * p.scale;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A192F]">
      
      {/* 1. Full-Bleed Ambient Background Video Loop Tag & Fallbacks */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Canvas Molecular Lattice Underlay */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />

        {/* HTML5 Video Tag with autoplay, loop, muted, playsinline */}
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER_IMAGE}
          onError={() => setHasVideoError(true)}
          onLoadedData={() => setHasVideoError(false)}
          className={`absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-1000 ${
            hasVideoError ? 'opacity-0' : 'opacity-85'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
          <img 
            src={HERO_POSTER_IMAGE} 
            alt="Bedfordshire Biotech Molecular Lattice" 
            className="w-full h-full object-cover"
          />
        </video>

        {/* High-Resolution Poster Fallback Layer */}
        {hasVideoError && (
          <img 
            src={HERO_POSTER_IMAGE} 
            alt="Bedfordshire Biotech Quantum Lattice" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
          />
        )}

        {/* Dark Navy Vignette and Measured Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/85 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.2),rgba(255,255,255,0))]" />
      </div>

      {/* 2. Hero Core Content & Typography (Deep Navy & Crisp White) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 flex-1 flex flex-col justify-center">
        
        {/* Bold Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] text-balance">
          Pioneering Cellular Therapeutics &{' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Precision Pharmaceutical
          </span>{' '}
          Manufacturing.
        </h1>

        {/* Subtitle Statement */}
        <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed font-normal">
          From advanced CRISPR gene modulation and recombinant biochemistry to high-throughput cGMP CDMO manufacturing. Bedfordshire Biotech delivers end-to-end biopharmaceutical acceleration across the UK Golden Triangle.
        </p>

        {/* Dual Action CTAs in Royal Blue & Crisp Outline */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
          <button
            onClick={onExplorePipeline}
            className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm tracking-wide uppercase shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 transition-all flex items-center gap-3 group active:scale-[0.98]"
          >
            <span>Explore Our Pipeline</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onPartnerManufacturing}
            className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide uppercase border border-white/25 hover:border-white/50 backdrop-blur-md transition-all flex items-center gap-2.5 active:scale-[0.98]"
          >
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Partner / Third-Party Manufacturing</span>
          </button>
        </div>

        {/* Real-Time Facility Metrics Overview (Crisp White & Blue) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-700/80 max-w-4xl">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              45,000 <span className="text-xs font-normal text-blue-400">m²</span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">UK Cleanroom & Lab Footprint</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              99.85 <span className="text-xs font-normal text-blue-400">%</span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">Average Monomeric Batch Purity</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              2,000 <span className="text-xs font-normal text-blue-400">L</span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">Single-Use S.U.B. Trains</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              14 <span className="text-xs font-normal text-blue-400">+</span>
            </div>
            <div className="text-xs text-slate-300 mt-0.5">Clinical Pipeline Programs</div>
          </div>
        </div>

      </div>

      {/* 3. Subtle Trust Ticker Banner at Bottom of Hero */}
      <div className="relative z-20 w-full border-t border-slate-700/80 bg-[#061122]/95 backdrop-blur-xl py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2 text-blue-400 font-mono uppercase tracking-wider text-[11px] shrink-0">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Accredited Standards:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-200 font-medium text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              GMP Certified
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              UK Manufacturing
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              ISO 13485
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Full DNA-to-Fill/Finish Capabilities
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-slate-300">
            <span>MHRA Licenced Site:</span>
            <span className="text-blue-400 font-semibold">UK-GMP-48201</span>
          </div>
        </div>
      </div>

    </section>
  );
};
