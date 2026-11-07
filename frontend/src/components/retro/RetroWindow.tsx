import type { ReactNode } from "react";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

function RetroWindow({
  title,
  children,
  className = "",
}: RetroWindowProps) {
  return (
    <section
      className={`retro-window ${className}`.trim()}
      role="group"
      aria-label={title}
    >
      <div className="retro-window__body">
        {children}
      </div>
    </section>
  );
}

export default RetroWindow;
