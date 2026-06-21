# macOS Web Clone

An interactive, browser-based recreation of the macOS desktop experience — built with React, Vite, and SCSS. Drag windows around, resize them, open real embedded apps, and explore a fully working terminal, all running entirely in the browser.

🔗 **Live Demo:** https://RAKIB-ALI-018.github.io/macOS-Web-Clone/
📦 **Repo:** https://github.com/RAKIB-ALI-018/macOS-Web-Clone

---

## Features

- **Draggable, resizable windows** — powered by `react-rnd`, with custom boundary logic so windows stay reachable but can extend past screen edges like real macOS
- **Magnifying dock** — hover-scale animation on dock icons, inspired by macOS's signature dock physics
- **Live system menu bar** — real-time clock, Wi-Fi icon, and app menu, styled to match macOS's native look
- **Custom-built terminal** — a typeable CLI window supporting custom commands (`whoami`, `skills`, `projects`, `clear`, etc.), built from scratch in React (no external terminal library)
- **Embedded apps inside windows**, including:
  - GitHub projects gallery (dynamic card grid)
  - Spotify playlist player (embedded)
  - Resume viewer (PDF)
  - Notes app
- **macOS-accurate UI details** — traffic-light window controls, frosted-glass blur effects, rounded "dock" pill, and authentic spacing/typography

## Tech Stack

- **React 19** — component architecture and state management
- **Vite 8** — build tooling and dev server
- **SCSS** — styling, using BEM-influenced structure for maintainability
- **react-rnd** — drag-and-resize window behavior



## Project Structure

```
src/
├── Components/
│   ├── Dock.jsx          # macOS-style dock with hover magnification
│   ├── Nav.jsx            # Top menu bar with live clock
│   └── Windows/
│       ├── MacWindow.jsx  # Shared draggable/resizable window wrapper
│       ├── Github.jsx     # GitHub projects window
│       ├── Spotify.jsx    # Spotify embed window
│       ├── Resume.jsx     # Resume PDF viewer window
│       ├── Note.jsx       # Notes window
│       └── Cli.jsx        # Custom terminal window
├── App.jsx
└── main.jsx
```

## Notable Engineering Challenges

A few non-trivial problems solved while building this:

- **Vite/Node global incompatibility** — `react-rnd`'s drag functionality silently failed due to a `process is not defined` error caused by Vite 8 not polyfilling Node globals; fixed via a custom `define` block in `vite.config.js`.
- **Window boundary physics** — implemented asymmetric drag constraints so windows are blocked from moving above the menu bar, while remaining free to move off-screen on other edges (matching real macOS behavior), with a safety clamp to keep windows always reachable.
- **Custom terminal component** — replaced an unmaintained, React-19-incompatible terminal library with a fully custom-built command interpreter and history renderer.

## Author

**Rakib Ali**
B.Tech Computer Science, Netaji Subhas University of Technology
[LinkedIn](https://www.linkedin.com/in/rakib-ali-a3366032a/) · [GitHub](https://github.com/RAKIB-ALI-018)
