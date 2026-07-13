type RetroTitleBarProps = {
  title: string;
  showControls?: boolean;
};

function RetroTitleBar({
  title,
  showControls = true,
}: RetroTitleBarProps) {
  return (
    <div className="retro-window__titlebar">
      <div className="retro-window__title">
        <span>{title}</span>
      </div>

      {showControls && (
        <div className="retro-window__controls" aria-hidden="true">
          <button type="button" tabIndex={-1}>
            _
          </button>

          <button type="button" tabIndex={-1}>
            □
          </button>

          <button type="button" tabIndex={-1}>
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default RetroTitleBar;