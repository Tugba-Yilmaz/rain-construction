// src/components/LightboxProvider.jsx
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const LightboxCtx = createContext(null);

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, images: [], index: 0 });

  const open = useCallback((images, index = 0) => {
    setState({ open: true, images, index });
    document.body.style.overflow = "hidden"; // scroll lock
  }, []);

  const close = useCallback(() => {
    setState(s => ({ ...s, open: false }));
    document.body.style.overflow = ""; // unlock
  }, []);

  // ESC ve ok tuşları
  useEffect(() => {
    if (!state.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setState(s => ({ ...s, index: Math.min(s.index + 1, s.images.length - 1) }));
      if (e.key === "ArrowLeft")  setState(s => ({ ...s, index: Math.max(s.index - 1, 0) }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.open, close]);

  const value = useMemo(() => ({ open }), [open]);

  // Basit stiller (Tailwind yok)
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  };
  const frameStyle = {
    position: "relative",
    maxWidth: "95vw",
    maxHeight: "90vh",
  };
  const imgStyle = {
    maxWidth: "95vw",
    maxHeight: "90vh",
    objectFit: "contain",
    transition: "transform 0.3s ease",
  };
  const btnStyle = {
    position: "absolute",
    background: "rgba(255,255,255,0.9)",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    padding: "6px 10px",
    cursor: "pointer",
    userSelect: "none",
  };

  return (
    <LightboxCtx.Provider value={value}>
      {children}
      {state.open && createPortal(
        <div role="dialog" aria-modal="true" style={overlayStyle} onClick={close}>
          <div style={frameStyle} onClick={(e) => e.stopPropagation()}>
            <img src={state.images[state.index]} alt="" style={imgStyle} draggable={false} />
            {/* Kapat */}
            <button
              onClick={close}
              aria-label="Close"
              style={{ ...btnStyle, top: 8, right: 8 }}
            >
              ✕
            </button>
            {/* Önceki / Sonraki */}
            {state.images.length > 1 && (
              <>
                <button
                  onClick={() => setState(s => ({ ...s, index: Math.max(s.index - 1, 0) }))}
                  aria-label="Previous"
                  style={{ ...btnStyle, top: "50%", left: 8, transform: "translateY(-50%)" }}
                >
                  ‹
                </button>
                <button
                  onClick={() => setState(s => ({ ...s, index: Math.min(s.index + 1, s.images.length - 1) }))}
                  aria-label="Next"
                  style={{ ...btnStyle, top: "50%", right: 8, transform: "translateY(-50%)" }}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </LightboxCtx.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxCtx);
  if (!ctx) throw new Error("useLightbox must be used inside <LightboxProvider>");
  return ctx;
}
