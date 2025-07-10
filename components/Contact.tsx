import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

const Contact = () => (
  <section id="contact" className="text-center scroll-mt-20">
    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
    <p className="max-w-2xl mx-auto text-lg mb-8">
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
    </p>
    <div className="flex justify-center space-x-6 text-3xl">
      <a href="https://github.com/shrivaths16" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/shrivaths-shyam/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
      <a href="mailto:shrivaths1998@gmail.com" className="hover:text-blue-500"><FaEnvelope /></a>
    </div>
  </section>
);

export default Contact;