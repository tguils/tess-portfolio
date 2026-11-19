
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
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = selectedIndex !== null;

  // Main screenshot + up to four thumbnails
  const thumbnailCount = Math.min(images.length - 1, 4);
  const hiddenCount = Math.max(images.length - 5, 0);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
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

  function openLightbox(index: number) {
    lastTriggerRef.current = imageButtonsRef.current[index];
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);

    requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }

  if (images.length === 0) return null;

  return (
    <>
      <div className="space-y-3">
        {/* Main featured screenshot */}
        <button
          ref={(element) => {
            imageButtonsRef.current[0] = element;
          }}
          type="button"
          onClick={() => openLightbox(0)}
          className="group relative block aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
          aria-label={`View ${title} screenshot 1`}
        >
          <Image
            src={images[0]}
            alt={`${title} screenshot 1`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Thumbnail gallery */}
        {thumbnailCount > 0 && (
          <div className="grid grid-cols-4 gap-2">
            {images.slice(1, 5).map((image, index) => {
              const imageIndex = index + 1;
              const isLastThumbnail =
                hiddenCount > 0 && index === thumbnailCount - 1;

              return (
                <button
                  key={`${image}-${imageIndex}`}
                  ref={(element) => {
                    imageButtonsRef.current[imageIndex] = element;
                  }}
                  type="button"
                  onClick={() => openLightbox(imageIndex)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  aria-label={
                    isLastThumbnail
                      ? `View ${title} screenshot ${imageIndex} and ${hiddenCount} more`
                      : `View ${title} screenshot ${imageIndex}`
                  }
                >
                  <Image
                    src={image}
                    alt={`${title} screenshot ${imageIndex}`}
                    fill
                    sizes="(max-width: 640px) 25vw, 12vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />

                  {isLastThumbnail && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/65 text-sm font-semibold text-white transition-colors group-hover:bg-black/75">
                      +{hiddenCount} more
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        <p className="text-xs text-gray-500">
          Click an image to view the full gallery
        </p>
      </div>

      {/* Full-screen lightbox */}
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
