
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + images.length) % images.length
        );
      }

      if (event.key === "Tab") {
        const dialog = document.getElementById("project-lightbox");
        if (!dialog) return;

        const buttons = Array.from(
          dialog.querySelectorAll<HTMLButtonElement>(
            "button:not(:disabled)"
          )
        );

        const first = buttons[0];
        const last = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  function closeLightbox() {
    const previousIndex = selectedIndex;
    setSelectedIndex(null);

    if (previousIndex !== null) {
      requestAnimationFrame(() => {
        imageButtonsRef.current[previousIndex]?.focus();
      });
    }
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            ref={(element) => {
              imageButtonsRef.current[index] = element;
            }}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100"
            aria-label={`View ${title} screenshot ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          id="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot gallery`}
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
        >
          <div className="flex items-center justify-between px-6 py-4 text-white">
            <p className="text-sm">
              {selectedIndex + 1} / {images.length}
            </p>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="rounded-lg px-3 py-1 text-2xl hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Close gallery"
            >
              ×
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center gap-3 px-4 pb-4">
            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + images.length) % images.length
                  )
                }
                className="shrink-0 rounded-lg px-3 py-2 text-2xl text-white hover:bg-white/20"
                aria-label="Previous screenshot"
              >
                ←
              </button>
            )}

            <div
              key={selectedIndex}
              className="h-full min-w-0 flex-1 overflow-y-auto rounded-lg"
            >
              <Image
                src={images[selectedIndex]}
                alt={`${title} screenshot ${selectedIndex + 1}`}
                width={1440}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex + 1) % images.length
                  )
                }
                className="shrink-0 rounded-lg px-3 py-2 text-2xl text-white hover:bg-white/20"
                aria-label="Next screenshot"
              >
                →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
