import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Book() {
  return (
    <>
      <Head>
        <title>Happy Birthday Kenza</title>
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
        <h1 className="text-4xl font-bold mb-8">Happy Birthday Kenza 🎉</h1>

        <div className="w-full max-w-xl">
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <img src="/img1.jpg" alt="Image 1" />
              <p className="mt-2 text-center">🎂 أول ذكرى ديالنا ❤️</p>
            </SwiperSlide>

            <SwiperSlide>
              <img src="/img2.jpg" alt="Image 2" />
              <p className="mt-2 text-center">🌟 لحظة ديما تبقى 💫</p>
            </SwiperSlide>

            <SwiperSlide>
              <img src="/img3.jpg" alt="Image 3" />
              <p className="mt-2 text-center">👑 كنزة ديما منوّرة حياتي ✨</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  )
}
