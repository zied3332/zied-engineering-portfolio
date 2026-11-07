import type { KeyboardEvent } from "react";

/** Keep tab navigation usable with a keyboard as well as a pointer. */
export function handleTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
  const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const currentIndex = tabs.indexOf(event.target as HTMLButtonElement);
  if (currentIndex < 0) return;

  let nextIndex: number;
  switch (event.key) {
    case "ArrowRight": nextIndex = (currentIndex + 1) % tabs.length; break;
    case "ArrowLeft": nextIndex = (currentIndex - 1 + tabs.length) % tabs.length; break;
    case "Home": nextIndex = 0; break;
    case "End": nextIndex = tabs.length - 1; break;
    default: return;
  }

  event.preventDefault();
  tabs[nextIndex].focus();
  tabs[nextIndex].click();
}
