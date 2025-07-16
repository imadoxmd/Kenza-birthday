import Head from "next/head";
import HTMLFlipBook from "react-pageflip";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center">
      <Head>
        <title>Happy Birthday Kenza</title>
      </Head>

      <h1 className="text-4xl font-bold mb-10">Happy Birthday Kenza 🎉</h1>

      <div className="w-full max-w-xl">
        <HTMLFlipBook width={300} height={400} className="mx-auto">
          <div className="page">
            <img src="/img1.jpg" alt="Page 1" className="w-full h-full object-cover"/>
            <p className="text-center">من طفولة ديالك ❤️</p>
          </div>
          <div className="page">
            <img src="/img2.jpg" alt="Page 2" className="w-full h-full object-cover"/>
            <p className="text-center">ذكريات حلوة 💫</p>
          </div>
          <div className="page">
            <img src="/img3.jpg" alt="Page 3" className="w-full h-full object-cover"/>
            <p className="text-center">و المستقبل أجمل إن شاء الله ✨</p>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
