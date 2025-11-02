const About = () => (
    <section id="about" className="mb-16 scroll-mt-20">
      {/* Increase heading size */}
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      {/* Widen the container and increase text size */}
      <div className="max-w-5xl mx-auto text-xl text-center">
        <p className="mb-4">
        I'm an AI Engineer and Full-Stack Developer passionate about building intelligent, scalable systems that bridge the gap between machine learning and real-world applications.
        </p>
        <p className="mb-4">
        With hands-on experience in Python, FastAPI, Node.js, and LangChain, I specialize in creating end-to-end, AI-driven solutions. My recent work involves designing scalable microservices, building AI agents for email classification, and developing context-aware GPT-4o chatbots and document parsers.
        I manage the full-stack and cloud infrastructure. This includes building end-to-end ETL pipelines with Apache NiFi, designing optimized database schemas for Azure, and deploying on cloud VMs using Terraform (IaC), NGINX, and PM2. I integrate solutions with Cloudflare for security and performance and lead Scrum sprints to ensure our team delivers.
        This practical application is built on a strong foundation of ML research from my time at the Salk Institute, where I contributed to the open-source SLEAP project, and enterprise-scale software engineering at Cognizant.
        </p>
        <p className="mb-4">
        Outside of work, I love learning new AI tools, playing soccer (huge Liverpool fan!), cricket, and tennis, and building side projects that push my technical and creative boundaries.
        </p>
      </div>
    </section>
  );
  
  export default About;