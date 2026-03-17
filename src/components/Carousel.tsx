'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import { useState } from 'react'

const carouselImages = [
  { src: '/images/096A0522.jpg', alt: 'NWRFHP Event 1' },
  { src: '/images/096A0583.jpg', alt: 'NWRFHP Event 2' },
  { src: '/images/096A0599.png', alt: 'NWRFHP Event 3' },
  { src: '/images/rock.jpg', alt: 'NWRFHP Rock Event' },
  { src: '/images/head-office.jpg', alt: 'NWRFHP Head Office' },
  { src: '/images/nnfca.jpg', alt: 'NNFCA' },
  { src: '/images/vanca.jpg', alt: 'VANCA' },
  { src: '/images/nkca.jpg', alt: 'NKCA' },
  { src: '/images/csmu1.jpg', alt: 'CSMU' },
  { src: '/images/fondoh1.jpg', alt: 'Fondoh' },
  { src: '/images/yembe1.jpg', alt: 'Yembe' },
  { src: '/images/comca.jpg', alt: 'COMCA' },
  { src: '/images/odrana1.jpg', alt: 'Odrana' },
  { src: '/images/mbakong1.jpg', alt: 'Mbakong' },
  { src: '/images/management1.jpg', alt: 'Management' },
  { src: '/images/fonca.jpg', alt: 'FONCA' },
  { src: '/images/ndehca.jpg', alt: 'NDEHCA' },
  { src: '/images/intenship.jpg', alt: 'Internship' },
  { src: '/images/fon3.jpg', alt: 'Fon Event' },
  { src: '/images/medalists.jpg', alt: 'Medalists' },
  { src: '/images/medalists2.jpg', alt: 'Medalists 2' },
]

export default function DefaultCarousel() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      className="w-full h-80 rounded-lg overflow-hidden"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-80">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}
