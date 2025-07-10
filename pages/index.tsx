import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience'; // Import the new component
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>Shrivaths Shyam - AI & Software Engineer</title>
        <meta name="description" content="Personal portfolio of Shrivaths Shyam, an AI and Software Engineer specializing in machine learning and scalable software." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="w-full px-6 sm:px-8 md:px-12">
        <Hero />
        <hr className="my-16 border-gray-200 dark:border-gray-700" />
        <About />
        <hr className="my-16 border-gray-200 dark:border-gray-700" />
        <Experience />
        <hr className="my-16 border-gray-200 dark:border-gray-700" />
        <Projects />
        <hr className="my-16 border-gray-200 dark:border-gray-700" />
        <Skills />
        <hr className="my-16 border-gray-200 dark:border-gray-700" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}