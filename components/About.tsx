const About = () => (
    <section id="about" className="mb-16 scroll-mt-20">
      {/* Increase heading size */}
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      {/* Widen the container and increase text size */}
      <div className="max-w-5xl mx-auto text-xl text-center">
        <p className="mb-4">
        I'm an AI Engineer and Full-Stack Developer passionate about building intelligent, scalable systems that bridge the gap between machine learning and real-world applications. With experience in Python, FastAPI, ReactJS, SQL, and cloud platforms like AWS, I’ve designed microservices, GPT-powered chatbots, and document parsers. I’ve built end-to-end ETL pipelines using Apache NiFi, optimized relational databases for performance, and deployed robust solutions using tools like NGINX, PM2, and Git. My work spans across AI model development, backend engineering, and front-end UI design — backed by a strong foundation in software engineering principles.
        </p>
        <p className="mb-4">
        I’ve contributed to open-source projects like SLEAP at the Salk Institute, worked on BPM systems at Cognizant, and developed cutting-edge AI applications at NLitenData.
        </p>
        <p className="mb-4">
        Outside of work, I love learning about new AI tools, playing tennis, watching soccer (Go Liverpool!), and building side projects that push my technical and creative boundaries. Whether it's parsing documents, generating recommendations, or optimizing control systems with reinforcement learning, I’m always exploring new ways to solve meaningful problems with code.
        </p>
      </div>
    </section>
  );
  
  export default About;