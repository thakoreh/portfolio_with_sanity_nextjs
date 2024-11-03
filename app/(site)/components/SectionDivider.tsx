export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-full max-w-sm flex items-center gap-4">
        <span className="h-px bg-gray-200 flex-grow"></span>
        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
        <span className="h-px bg-gray-200 flex-grow"></span>
      </div>
    </div>
  );
} 