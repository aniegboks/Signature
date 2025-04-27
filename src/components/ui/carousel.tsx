'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

type CarouselImage = {
  url: string
  alt?: string
}

type CarouselProps = {
  images: CarouselImage[]
  autoSlideDelay?: number // milliseconds
}

export default function Carousel({ images, autoSlideDelay = 4000 }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, autoSlideDelay)

    return () => clearInterval(interval)
  }, [images.length, autoSlideDelay])

  return (
    <div className="w-full relative aspect-video overflow-hidden">
      {/* Big display image */}
      <Image
        src={images[activeIndex].url}
        alt={images[activeIndex].alt || `Slide ${activeIndex + 1}`}
        fill
        className="object-cover transition-all duration-700 ease-in-out"
      />

      {/* Thumbnails - bottom right overlay */}
      <div className="absolute bottom-4 right-4 flex gap-2 bg-black/40 p-2 rounded-lg">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={clsx(
              'relative w-12 h-12 rounded-md overflow-hidden border transition-all duration-300',
              {
                'border-white scale-105 shadow-md': index === activeIndex,
                'opacity-60 hover:opacity-100 border-gray-300': index !== activeIndex,
              }
            )}
          >
            <Image
              src={img.url}
              alt={img.alt || `Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
