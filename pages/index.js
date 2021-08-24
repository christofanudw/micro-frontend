import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BWAMICRO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container text-center mt-4">Saya halaman utama</div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
