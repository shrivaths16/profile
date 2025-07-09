import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <Head>
        <title>Shrivaths Shyam - AI & Software Engineer</title>
      </Head>
      <main>
        <h1 className="text-4xl font-bold">Hi, I'm Shrivaths 👋</h1>
        <p className="mt-4 text-xl">AI Engineer & Software Developer passionate about building intelligent systems and scalable software.</p>
      </main>
    </div>
  )
}
