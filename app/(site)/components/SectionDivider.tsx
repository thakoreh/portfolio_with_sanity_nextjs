export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-full max-w-sm flex items-center gap-4">
        <span className="h-px bg-white/10 flex-grow"></span>
        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
        <span className="h-px bg-white/10 flex-grow"></span>
      </div>
    </div>
  );
} 