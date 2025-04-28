'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

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
    <div className="w-full relative aspect-video overflow-hidden bg-black">
      {/* Animated Zoom-In Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex].url}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 overflow-hidden"
        >
          <div
            style={{
              backgroundImage: `url(${images[activeIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="w-full h-full bg-no-repeat"
          />
        </motion.div>
      </AnimatePresence>

      {/* Thumbnails - hidden on small screens */}
      <div className="absolute bottom-4 right-4 hidden md:flex gap-2 bg-black/40 p-2 rounded-lg">
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
            <img
              src={img.url}
              alt={img.alt || `Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
