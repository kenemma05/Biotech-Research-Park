import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  Layers, 
  Compass, 
  ShieldCheck, 
  Sparkles,
  Settings,
  Check,
  Video,
  Eye
} from 'lucide-react';
import { BENTO_MANUFACTURING_IMAGE } from '../data/biotechData';

export interface CleanroomTourVideoPlayerProps {
  onScheduleAudit?: () => void;
  className?: string;
}

interface TourChapter {
  id: string;
  title: string;
  timestamp: number;
  durationLabel: string;
  zone: string;
  isoClass: string;
}

const TOUR_CHAPTERS: TourChapter[] = [
  {
    id: 'isolator',
    title: 'Grade A Robotic Isolator',
    timestamp: 0,
    durationLabel: '0:00',
    zone: 'Aseptic Filling Line 1',
    isoClass: 'ISO Class 5 / Grade A'
  },
  {
    id: 'bioreactor',
    title: '2,000L Bioreactor Hall',
    timestamp: 35,
    durationLabel: '0:35',
    zone: 'Upstream Fermentation',
    isoClass: 'ISO Class 7 / Grade C'
  },
  {
    id: 'fill-finish',
    title: 'Automated Vial Capping',
    timestamp: 72,
    durationLabel: '1:12',
    zone: 'Downstream Lyophilization',
    isoClass: 'ISO Class 6 / Grade B'
  },
  {
    id: 'cryo',
    title: 'Cryogenic Vault (-196°C)',
    timestamp: 110,
    durationLabel: '1:50',
    zone: 'LN2 Cold Storage & Release',
    isoClass: 'ISO Class 8 / Grade D'
  }
];

export const CleanroomTourVideoPlayer: React.FC<CleanroomTourVideoPlayerProps> = ({
  onScheduleAudit,
  className = ''
}) => {
  // Configurable video source (placeholder or user-provided URL)
  const [videoSrc, setVideoSrc] = useState<string>('cleanroom-tour-3d.mp4');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(145); // ~2m25s demo timeline
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  const [resolution, setResolution] = useState<'4K' | '1080p' | '3D-Sim'>('4K');

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated 3D Cleanroom Particle Simulation for the Canvas Fallback / Ambient Layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 640);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 360);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 640;
      height = canvas.height = canvas.parentElement?.clientHeight || 360;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing HEPA laminar airflow and cleanroom sensor grid
    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: Math.random() * 0.8 + 0.3, // laminar downward flow
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2
    }));

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Cleanroom floor perspective grid lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;
      const horizonY = height * 0.55;
      for (let i = -width; i < width * 2; i += 40) {
        ctx.beginPath();
        ctx.moveTo(width / 2, horizonY);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      // Horizontal depth lines
      for (let y = horizonY; y < height; y += (y - horizonY) * 0.25 + 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render HEPA downward laminar particles
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = `rgba(147, 197, 253, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle dynamic scanline sweep
      const scanY = (frame * 1.5) % height;
      const grad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      grad.addColorStop(0, 'rgba(37, 99, 235, 0)');
      grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
      grad.addColorStop(1, 'rgba(37, 99, 235, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 30, width, 60);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update timer tick when playing simulated video if native video is fallback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 1;
          // Synchronize chapter
          const matchingChapterIndex = TOUR_CHAPTERS.findIndex(
            (c, i) => next >= c.timestamp && (!TOUR_CHAPTERS[i + 1] || next < TOUR_CHAPTERS[i + 1].timestamp)
          );
          if (matchingChapterIndex !== -1 && matchingChapterIndex !== selectedChapterIndex) {
            setSelectedChapterIndex(matchingChapterIndex);
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, selectedChapterIndex]);

  const togglePlay = () => {
    if (videoRef.current && !hasVideoError) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Native play blocked or source unplayable; run simulated preview tour
          setIsPlaying(true);
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (videoRef.current && !hasVideoError) {
      videoRef.current.currentTime = val;
    }
  };

  const jumpToChapter = (index: number) => {
    const target = TOUR_CHAPTERS[index];
    if (!target) return;
    setSelectedChapterIndex(index);
    setCurrentTime(target.timestamp);
    if (videoRef.current && !hasVideoError) {
      videoRef.current.currentTime = target.timestamp;
    }
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      setVideoSrc(customUrlInput.trim());
      setHasVideoError(false);
      setShowConfig(false);
      setIsPlaying(true);
    }
  };

  const currentChapter = TOUR_CHAPTERS[selectedChapterIndex] || TOUR_CHAPTERS[0];

  return (
    <div className={`relative flex flex-col ${className}`} ref={containerRef}>
      {/* Main Video Preview Player Container */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0A192F] border-2 border-slate-700/80 shadow-2xl group/player">
        
        {/* Top Floating HUD Bar */}
        <div className="absolute top-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between text-white pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-mono uppercase tracking-wider font-bold shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
              <span>3D Tour Feed</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/80 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
              <Compass className="w-3 h-3" />
              <span>{currentChapter.isoClass}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <div className="hidden md:flex items-center gap-1 text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded border border-slate-700">
              <span className="text-emerald-400 font-bold">+15 Pa</span>
              <span>·</span>
              <span>HEPA H14</span>
              <span>·</span>
              <span className="text-blue-300">{resolution}</span>
            </div>
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/80"
              title="Configure Video URL"
              aria-label="Configure Video URL"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Video Area / Fallback Canvas Stage */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#050D1A] flex items-center justify-center">
          
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={BENTO_MANUFACTURING_IMAGE}
            muted={isMuted}
            playsInline
            loop
            onTimeUpdate={() => {
              if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
                if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
                  setDuration(videoRef.current.duration);
                }
              }
            }}
            onError={() => {
              // Gracefully handle missing local video file; fallback to interactive visual stage
              setHasVideoError(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              hasVideoError ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'
            }`}
          />

          {/* High-Fidelity Simulation / Poster Layer (Active when video is paused or fallback) */}
          {(hasVideoError || !isPlaying) && (
            <div className="absolute inset-0 z-10 overflow-hidden">
              <img
                src={BENTO_MANUFACTURING_IMAGE}
                alt="Bedfordshire Biotech Cleanroom Facility"
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isPlaying ? 'scale-105 filter blur-xs' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-[#0A192F]/30" />
            </div>
          )}

          {/* Interactive HEPA Airflow & 3D Walkthrough Grid Canvas Overlay */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-15 pointer-events-none transition-opacity duration-500 ${
              isPlaying ? 'opacity-85' : 'opacity-40'
            }`}
          />

          {/* 3D Waypoint Spatial Overlay (Holographic Cleanroom Target) */}
          <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center p-6 text-center">
            {/* Center Reticle & Status */}
            <div className={`transition-all duration-500 transform ${isPlaying ? 'scale-90 opacity-60' : 'scale-100 opacity-100'}`}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-blue-400/40 flex items-center justify-center relative mx-auto mb-3">
                <div className="absolute inset-1 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-3 rounded-full border border-dashed border-blue-300/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
                
                {/* Play Button Trigger */}
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/50 hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto"
                  aria-label={isPlaying ? 'Pause tour' : 'Play tour'}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-xl inline-block max-w-sm shadow-xl">
                <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  Active Cleanroom Suite · {currentChapter.zone}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {currentChapter.title}
                </h4>
                <div className="text-[11px] text-slate-300 font-mono mt-0.5 flex items-center justify-center gap-2">
                  <span className="text-emerald-400 font-semibold">{currentChapter.isoClass}</span>
                  <span>·</span>
                  <span>Continuous Particle Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Config URL Modal Popover */}
          {showConfig && (
            <div className="absolute inset-4 z-40 bg-[#0A192F]/95 backdrop-blur-xl border border-slate-700 rounded-xl p-5 flex flex-col justify-between text-white shadow-2xl animate-in fade-in-0">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono uppercase font-bold text-white">Cleanroom Video Source Setup</span>
                  </div>
                  <button 
                    onClick={() => setShowConfig(false)}
                    className="text-xs text-slate-400 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Point this player to your self-hosted 3D walkthrough MP4 file or CDN stream URL:
                </p>
                <form onSubmit={handleApplyCustomUrl} className="mt-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. /videos/cleanroom.mp4 or https://..."
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono uppercase tracking-wider cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </form>
                
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Stream Quality:</span>
                  <div className="flex gap-1.5">
                    {(['4K', '1080p', '3D-Sim'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setResolution(mode)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          resolution === mode 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        } cursor-pointer`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Currently using high-fidelity 3D particle HUD overlay fallback</span>
              </div>
            </div>
          )}

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2">
            
            {/* Scrubber Progress Slider */}
            <div className="flex items-center gap-2 group/scrub">
              <span className="text-[10px] font-mono text-slate-300 w-9 text-right shrink-0">
                {formatTime(currentTime)}
              </span>
              <div className="relative flex-1 flex items-center">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  step="0.5"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
                />
              </div>
              <span className="text-[10px] font-mono text-slate-400 w-9 shrink-0">
                {formatTime(duration)}
              </span>
            </div>

            {/* Bottom Actions Row */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-blue-600 text-white transition-colors cursor-pointer border border-slate-700/60"
                  title={isPlaying ? 'Pause' : 'Play'}
                  aria-label={isPlaying ? 'Pause tour' : 'Play tour'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => {
                    setCurrentTime(0);
                    if (videoRef.current) videoRef.current.currentTime = 0;
                  }}
                  className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
                  title="Rewind to start"
                  aria-label="Rewind"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
                  title={isMuted ? 'Unmute' : 'Mute'}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Suite: <strong className="text-white font-semibold">{currentChapter.title}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
                  title="Fullscreen"
                  aria-label="Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tour Chapters Selector Ribbon */}
        <div className="p-3 bg-[#0B172B] border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TOUR_CHAPTERS.map((chapter, idx) => {
            const isActive = selectedChapterIndex === idx;
            return (
              <button
                key={chapter.id}
                onClick={() => jumpToChapter(idx)}
                className={`p-2 rounded-xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500/80 text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-0.5">
                  <span className={isActive ? 'text-blue-300 font-bold' : 'text-slate-500'}>
                    Part {idx + 1}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-black/40 text-slate-300">
                    {chapter.durationLabel}
                  </span>
                </div>
                <div className="text-xs font-semibold leading-tight line-clamp-1">
                  {chapter.title}
                </div>
                <div className="text-[10px] font-mono text-slate-400 line-clamp-1 mt-0.5">
                  {chapter.isoClass}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Player Meta & Inspection Disclaimer */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="font-medium text-slate-700">MHRA / ISO 13485:2016 Compliant Cleanrooms</span>
          <span className="text-slate-400 hidden sm:inline">·</span>
          <span className="hidden sm:inline text-slate-500">45,000 m² Active Production Footprint</span>
        </div>
        {onScheduleAudit && (
          <button
            onClick={onScheduleAudit}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Book In-Person Walkthrough</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};
