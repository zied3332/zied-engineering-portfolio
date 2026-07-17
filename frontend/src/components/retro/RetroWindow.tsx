import type { ReactNode } from "react";
import RetroTitleBar from "./RetroTitleBar";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  showControls?: boolean;
};

function RetroWindow({
  title,
  children,
  className = "",
  showControls = true,
}: RetroWindowProps) {
  return (
    <section
      className={`retro-window ${className}`.trim()}
      role="group"
      aria-label={title}
    >
      <RetroTitleBar
        title={title}
        showControls={showControls}
      />

      <div className="retro-window__body">
        {children}
      </div>
    </section>
  );
}

export default RetroWindow;
