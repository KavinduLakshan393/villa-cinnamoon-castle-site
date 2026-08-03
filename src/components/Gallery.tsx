"use client";

import { KeyboardEvent, MouseEvent, TouchEvent, useEffect, useMemo, useRef, useState } from "react";
import { propertyImages, type MediaCategory } from "@/content/media";
import { ResponsivePicture } from "@/components/ResponsivePicture";

type Filter = "all" | MediaCategory;

const filters: Array<[Filter, string]> = [
  ["all", "All"], ["arrival", "Arrival & exterior"], ["setting", "Tropical setting"],
  ["shared", "Shared spaces"], ["kitchen", "Kitchen & amenities"], ["rooms", "Bedrooms & bathroom"]
];

const categoryNames: Record<MediaCategory, string> = {
  arrival: "Arrival & exterior",
  setting: "Tropical setting",
  shared: "Shared spaces",
  kitchen: "Kitchen & amenities",
  rooms: "Bedrooms & bathroom"
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const visible = useMemo(() => filter === "all" ? propertyImages : propertyImages.filter((image) => image.category === filter), [filter]);
  const visibleRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < visible.length; i += 3) {
      rows.push(visible.slice(i, i + 3));
    }
    return rows;
  }, [visible]);
  const current = visible[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function show(next: number) {
    setIndex((next + visible.length) % visible.length);
  }

  function openImage(button: HTMLButtonElement, imageIndex: number) {
    lastTrigger.current = button;
    setIndex(imageIndex);
    setOpen(true);
  }

  function close() {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
      window.requestAnimationFrame(() => lastTrigger.current?.focus());
    }, 300);
  }

  function handleCancel(event: React.SyntheticEvent<HTMLDialogElement, Event>) {
    event.preventDefault();
    close();
  }

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  }

  function handleTouchStart(event: TouchEvent<HTMLDialogElement>) {
    touchStart.current = event.changedTouches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDialogElement>) {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) show(index + (delta < 0 ? 1 : -1));
    touchStart.current = null;
  }

  return <>
    <section className="section section--paper"><div className="container">
      <div className="gallery-toolbar">
        <div className="filter-list" role="group" aria-label="Gallery filters">
          {filters.map(([value, label]) => <button className="filter-button" type="button" key={value} aria-pressed={filter === value} onClick={() => { setFilter(value); setIndex(0); }}>{label}</button>)}
        </div>
        <span className="gallery-count">{visible.length} photograph{visible.length === 1 ? "" : "s"}</span>
      </div>
      <div className="gallery-grid">
        {visibleRows.map((row, rowIndex) => (
          <div className="gallery-row" key={rowIndex} data-brick-row={rowIndex % 2 === 0 ? "even" : "odd"}>
            {row.map((image) => {
              const visibleIndex = visible.findIndex((item) => item.name === image.name);
              const sourceIndex = propertyImages.findIndex((item) => item.name === image.name);
              return (
                <button
                  className="gallery-item"
                  type="button"
                  key={image.name}
                  aria-label={`Open image: ${image.caption}`}
                  data-cursor="view"
                  onClick={(event: MouseEvent<HTMLButtonElement>) => openImage(event.currentTarget, visibleIndex)}
                >
                  <div className="gallery-item__image-wrap">
                    <ResponsivePicture image={image} sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 34vw" />
                    <div className="gallery-item__shade" aria-hidden="true"></div>
                    <span className="gallery-item__meta">
                      <span>{String(sourceIndex + 1).padStart(2, "0")}</span>
                      <strong>{categoryNames[image.category]}</strong>
                      <span>{image.caption}</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div></section>
    <dialog ref={dialogRef} className={`lightbox${isClosing ? " is-closing" : ""}`} aria-label="Property photograph viewer" onCancel={handleCancel} onClose={() => setOpen(false)} onClick={handleDialogClick} onKeyDown={handleKeyDown} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="lightbox-layout">
        <div className="lightbox-top"><span>{index + 1} / {visible.length}</span><button className="lightbox-close" type="button" aria-label="Close gallery" onClick={close}><CloseIcon /></button></div>
        <div className="lightbox-stage">
          <button className="lightbox-nav lightbox-prev" type="button" aria-label="Previous image" onClick={() => show(index - 1)}><ArrowIcon direction="left" /></button>
          <div className="lightbox-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lightbox-image" src={open ? current?.full : undefined} alt={open ? current?.alt : ""} />
          </div>
          <button className="lightbox-nav lightbox-next" type="button" aria-label="Next image" onClick={() => show(index + 1)}><ArrowIcon direction="right" /></button>
        </div>
        <div className="lightbox-caption"><span>{current ? categoryNames[current.category] : ""}</span><p>{current?.caption}</p></div>
      </div>
    </dialog>
  </>;
}
