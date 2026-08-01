"use client";

import { KeyboardEvent, MouseEvent, TouchEvent, useEffect, useMemo, useRef, useState } from "react";
import { propertyImages, type MediaCategory } from "@/content/media";
import { ResponsivePicture } from "@/components/ResponsivePicture";

type Filter = "all" | MediaCategory;

const filters: Array<[Filter, string]> = [
  ["all", "All"], ["arrival", "Arrival & exterior"], ["setting", "Tropical setting"],
  ["shared", "Shared spaces"], ["kitchen", "Kitchen & amenities"], ["rooms", "Bedrooms & bathroom"]
];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const visible = useMemo(() => filter === "all" ? propertyImages : propertyImages.filter((image) => image.category === filter), [filter]);
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
    setOpen(false);
    window.requestAnimationFrame(() => lastTrigger.current?.focus());
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
      <div className="gallery-toolbar"><div className="filter-list" role="group" aria-label="Gallery filters">{filters.map(([value, label]) => <button className="filter-button" type="button" key={value} aria-pressed={filter === value} onClick={() => { setFilter(value); setIndex(0); }}>{label}</button>)}</div><span className="gallery-count">{visible.length} photograph{visible.length === 1 ? "" : "s"}</span></div>
      <div className="gallery-grid">{propertyImages.map((image) => {
        const visibleIndex = visible.findIndex((item) => item.name === image.name);
        const hidden = visibleIndex < 0;
        return <button className="gallery-item" type="button" key={image.name} hidden={hidden} aria-label={`Open image: ${image.caption}`} data-caption={image.caption} onClick={(event) => openImage(event.currentTarget, visibleIndex)}><ResponsivePicture image={image} sizes="(max-width: 620px) 50vw, (max-width: 1100px) 33vw, 25vw" /></button>;
      })}</div>
    </div></section>
    <dialog ref={dialogRef} className="lightbox" aria-label="Property photograph viewer" onClose={() => setOpen(false)} onClick={handleDialogClick} onKeyDown={handleKeyDown} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="lightbox-layout"><div className="lightbox-top"><span>{index + 1} / {visible.length}</span><button className="lightbox-close" type="button" aria-label="Close gallery" onClick={close}>×</button></div><div className="lightbox-stage"><button className="lightbox-nav lightbox-prev" type="button" aria-label="Previous image" onClick={() => show(index - 1)}>‹</button><div className="lightbox-image-wrap">
        {/* The lightbox deliberately serves the selected pre-generated derivative directly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lightbox-image" src={open ? current?.full : undefined} alt={open ? current?.alt : ""} />
      </div><button className="lightbox-nav lightbox-next" type="button" aria-label="Next image" onClick={() => show(index + 1)}>›</button></div><p className="lightbox-caption">{current?.caption}</p></div>
    </dialog>
  </>;
}
