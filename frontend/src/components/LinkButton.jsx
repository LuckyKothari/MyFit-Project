import React from 'react'

/**
 * External link styled as a small outline button.
 * Uses a real <a> so it opens in a new tab and works with keyboard/screen readers.
 */
export function LinkButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="btn-outline link-btn"
    >
      {children}
    </a>
  )
}
