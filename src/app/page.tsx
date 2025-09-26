"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaCode, FaCloud, FaBrain, FaRocket, FaServer, FaAws } from "react-icons/fa6";
import { jobs } from '@/data/jobs';
import { JobHeader } from '@/components/jobs/JobHeader';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
      
      // Here you would send the token along with form data to your backend


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white py-20 md:py-32">
        <div className="container-max mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Mohammad Hassan
              </h1>
              <p className="text-2xl md:text-3xl font-light opacity-90">
                Senior Software Engineer / Tech Lead
              </p>
              <p className="text-lg md:text-xl opacity-80 max-w-2xl">
                Building scalable solutions at the intersection of engineering leadership, problem-solving, and product-driven development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="btn-secondary flex items-center gap-2" href="https://github.com/rekursed" target="_blank" rel="noreferrer">
                  <FaGithub /> <span>GitHub</span>
                </a>
                <a className="btn-secondary flex items-center gap-2" href="https://linkedin.com/in/mr-hassan" target="_blank" rel="noreferrer">
                  <FaLinkedin /> <span>LinkedIn</span>
                </a>
                <a className="btn-secondary flex items-center gap-2" href="mailto:hello@mhassan.info">
                  <FaEnvelope /> <span>Email</span>
                </a>
                <a className="btn-primary flex items-center gap-2" href="/Resume of Mohammad Rakibul Hassan 2025.pdf" download="Mohammad_Hassan_Resume_2025.pdf">
                  <span>📄 Download Resume</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl backdrop-blur-sm">
                  <Image 
                    src="/profile.jpg" 
                    alt="Profile photo of Mohammad Hassan" 
                    fill 
                    className="object-cover rounded-full hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg backdrop-blur-sm">
                  <FaCode />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg backdrop-blur-sm">
                  <FaCloud />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container-max mx-auto px-6">
          <h2 className="section-title text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{color: 'var(--muted)'}}>
                Mohammad Hassan is a hands-on, backend-focused full-stack Software Engineer and Tech Lead with a Computer Science degree and deep experience delivering scalable solutions in e-commerce, SaaS, and enterprise environments.
              </p>
              <p className="text-lg leading-relaxed" style={{color: 'var(--muted)'}}>
                He specializes in Node.js, TypeScript, React, Python, Docker, and cloud-native systems, with strong expertise in Infrastructure as Code, CI/CD, and AI/ML integration. He thrives at the intersection of engineering leadership, technical problem-solving, and product-driven development while mentoring teams and collaborating with clients.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: 'var(--primary)'}}>10+</div>
                  <div className="text-sm" style={{color: 'var(--muted)'}}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: 'var(--secondary)'}}>50+</div>
                  <div className="text-sm" style={{color: 'var(--muted)'}}>Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: 'var(--accent)'}}>15+</div>
                  <div className="text-sm" style={{color: 'var(--muted)'}}>Teams Led</div>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 pl-4" style={{borderColor: 'var(--primary)'}}>
                  <h4 className="font-semibold text-lg" style={{color: 'var(--foreground)'}}>BSc in Computer Science & Engineering</h4>
                  <p style={{color: 'var(--muted)'}}>International Islamic University Chittagong</p>
                  <p className="text-sm" style={{color: 'var(--muted)', opacity: 0.7}}>2009 – 2013</p>
                </div>
                <div className="border-l-4 pl-4" style={{borderColor: 'var(--secondary)'}}>
                  <h4 className="font-semibold text-lg" style={{color: 'var(--foreground)'}}>MSc in Computer Vision</h4>
                  <p style={{color: 'var(--muted)'}}>Queen Mary University of London</p>
                  <p className="text-sm" style={{color: 'var(--muted)', opacity: 0.7}}>2014 – 2015 (unfinished)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container-max mx-auto px-6">
          <h2 className="section-title text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Backend Development",
                icon: <FaServer className="text-3xl" style={{color: 'var(--primary)'}} />,
                skills: ["Node.js", "Python", "PHP", "TypeScript", "Express.js", "Django"]
              },
              {
                title: "Frontend Development",
                icon: <FaCode className="text-3xl" style={{color: 'var(--accent)'}} />,
                skills: ["React.js", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
              },
              {
                title: "DevOps & Cloud",
                icon: <FaCloud className="text-3xl" style={{color: 'var(--secondary)'}} />,
                skills: ["AWS", "Docker", "CI/CD", "Terraform", "CDK", "GitLab"]
              },
              {
                title: "AI/ML & Data",
                icon: <FaBrain className="text-3xl" style={{color: 'var(--accent)'}} />,
                skills: ["Machine Learning", "LLM Integration", "Data Pipelines", "DBT", "Snowflake"]
              }
            ].map((category) => (
              <div key={category.title} className="card p-6 text-center card-hover">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="card p-6 inline-block">
              <h3 className="text-xl font-bold mb-2">Certifications</h3>
              <div className="flex items-center justify-center gap-2">
                <FaAws className="text-2xl" style={{color: 'var(--accent)'}} />
                <span className="font-semibold" style={{color: 'var(--foreground)'}}>AWS Certified Solutions Architect – Associate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container-max mx-auto px-6">
          <h2 className="section-title text-center">Professional Experience</h2>
          <div className="timeline">
              {jobs.map((job) => (
                <div key={job.company} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <JobHeader job={job} />
                    <ul className="space-y-2 mb-4">
                      {job.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start" style={{color: 'var(--muted)'}}>
                          <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: 'var(--primary)'}}></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container-max mx-auto px-6">
          <h2 className="section-title text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "In-house LLM Project",
                company: "Crosstide",
                description: "Leveraged internal datasets for generative AI use cases, implementing custom fine-tuning and deployment pipelines.",
                tech: ["Python", "LLM", "AWS", "MLOps"]
              },
              {
                title: "AWS CDK Migration",
                company: "Dunelm",
                description: "Migrated legacy infrastructure to AWS CDK, enabling scalability and efficiency with Infrastructure as Code.",
                tech: ["AWS CDK", "TypeScript", "CloudFormation", "CI/CD"]
              },
              {
                title: "Data Pipeline Architecture",
                company: "Friisbee",
                description: "Built robust data flow between Fivetran and Snowflake with DBT for analytics and reporting.",
                tech: ["DBT", "Snowflake", "Fivetran", "Python"]
              },
              {
                title: "Serverless Microservices",
                company: "Checkatrade",
                description: "Orchestrated migration from REST to AWS EventBridge for event-driven serverless microservices.",
                tech: ["AWS EventBridge", "Lambda", "Serverless", "Node.js"]
              },
              {
                title: "GPU Server Framework",
                company: "HEXR",
                description: "Developed GPU-based serverless framework for 3D modeling workloads with auto-scaling capabilities.",
                tech: ["Python", "GPU Computing", "Docker", "Kubernetes"]
              }
            ].map((project) => (
              <div key={project.title} className="project-card">
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>{project.title}</h3>
                <p className="font-semibold mb-3" style={{color: 'var(--primary)'}}>{project.company}</p>
                <p className="mb-4" style={{color: 'var(--muted)'}}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container-max mx-auto px-6">
          <h2 className="section-title text-center">Services I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Software Engineering Consulting",
                description: "Strategic technical guidance and architecture design for scalable software solutions.",
                icon: <FaCode className="text-4xl" style={{color: 'var(--primary)'}} />
              },
              {
                title: "Backend & Distributed Systems",
                description: "Design and implementation of robust, scalable backend architectures and microservices.",
                icon: <FaServer className="text-4xl" style={{color: 'var(--accent)'}} />
              },
              {
                title: "Cloud-Native Solutions",
                description: "AWS, serverless architectures, CI/CD pipelines, and Infrastructure as Code implementation.",
                icon: <FaCloud className="text-4xl" style={{color: 'var(--secondary)'}} />
              },
              {
                title: "AI/ML Integration",
                description: "Custom AI/ML solutions, LLM integration, and automation for business processes.",
                icon: <FaBrain className="text-4xl" style={{color: 'var(--accent)'}} />
              },
              {
                title: "Technical Leadership",
                description: "Team mentoring, code reviews, and technical decision-making for engineering teams.",
                icon: <FaRocket className="text-4xl" style={{color: 'var(--primary)'}} />
              }
            ].map((service) => (
              <div key={service.title} className="card p-8 text-center card-hover">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--foreground)'}}>{service.title}</h3>
                <p style={{color: 'var(--muted)'}}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container-max mx-auto px-6">
          <h2 className="section-title text-center">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Let&apos;s work together</h3>
                <p className="text-lg mb-8" style={{color: 'var(--muted)'}}>
                  I&apos;m always interested in new opportunities and exciting projects. Whether you need consulting, development, or technical leadership, let&apos;s discuss how I can help your team succeed.
                </p>
              </div>
              
              <div className="space-y-4">
                <a href="https://linkedin.com/in/mr-hassan" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition-all duration-300 card">
                  <FaLinkedin className="text-2xl" style={{color: 'var(--primary)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--foreground)'}}>LinkedIn</p>
                    <p style={{color: 'var(--muted)'}}>linkedin.com/in/mr-hassan</p>
                  </div>
                </a>
                <a href="https://github.com/rekursed" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition-all duration-300 card">
                  <FaGithub className="text-2xl" style={{color: 'var(--foreground)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--foreground)'}}>GitHub</p>
                    <p style={{color: 'var(--muted)'}}>github.com/rekursed</p>
                  </div>
                </a>
                <a href="https://mhassan.info" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition-all duration-300 card">
                  <FaGlobe className="text-2xl" style={{color: 'var(--accent)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--foreground)'}}>Personal Website</p>
                    <p style={{color: 'var(--muted)'}}>mhassan.info</p>
                  </div>
                </a>
                <a href="mailto:hello@mhassan.info" className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition-all duration-300 card">
                  <FaEnvelope className="text-2xl" style={{color: 'var(--secondary)'}} />
                  <div>
                    <p className="font-semibold" style={{color: 'var(--foreground)'}}>Email</p>
                    <p style={{color: 'var(--muted)'}}>hello@mhassan.info</p>
                  </div>
                </a>
                <a href="/Resume of Mohammad Rakibul Hassan 2025.pdf" download="Mohammad_Hassan_Resume_2025.pdf" className="flex items-center gap-4 p-4 rounded-xl hover:shadow-md transition-all duration-300 card" style={{background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 212, 255, 0.1))', border: '1px solid rgba(255, 107, 53, 0.3)'}}>
                  <div className="text-2xl">📄</div>
                  <div>
                    <p className="font-semibold" style={{color: 'var(--foreground)'}}>Download Resume</p>
                    <p style={{color: 'var(--muted)'}}>PDF Format</p>
                  </div>
          </a>
        </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}