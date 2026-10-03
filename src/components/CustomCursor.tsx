import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.body.classList.add('custom-cursor-active');

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement;
      const isProjectLink = target.closest('[data-cursor="view"]');
      setHovering(!!isProjectLink);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="flex items-center justify-center rounded-full border transition-all duration-300 ease-premium"
        style={{
          width: hovering ? '80px' : '24px',
          height: hovering ? '80px' : '24px',
          borderColor: hovering ? '#A8865B' : 'rgba(28,27,25,0.4)',
          backgroundColor: hovering ? 'rgba(168,134,91,0.1)' : 'transparent',
        }}
      >
        {hovering && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-bronze">
            View
          </span>
        )}
      </div>
    </div>
  );
}
