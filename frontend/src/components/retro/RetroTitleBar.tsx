
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
        <span className="retro-window__title-text">{title}</span>
      </div>

      {showControls && (
        <div
          className="retro-window__controls"
          aria-hidden="true"
          role="presentation"
        >
          <button
            className="retro-window__control retro-window__control--minimize"
            type="button"
            tabIndex={-1}
            aria-label="Minimize window"
          >
            <span className="retro-window__control-icon" />
          </button>

          <button
            className="retro-window__control retro-window__control--maximize"
            type="button"
            tabIndex={-1}
            aria-label="Maximize window"
          >
            <span className="retro-window__control-icon" />
          </button>

          <button
            className="retro-window__control retro-window__control--close"
            type="button"
            tabIndex={-1}
            aria-label="Close window"
          >
            <span className="retro-window__control-icon" />
          </button>
        </div>
      )}
    </div>
  );
}

export default RetroTitleBar;
