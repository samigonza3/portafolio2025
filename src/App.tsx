import React, { useState, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  Brain,
  Code2,
  Megaphone,
  GraduationCap,
  Briefcase,
  Send,
  ChevronLeft,
  ChevronRight,
  Database,
  BarChart3,
  Globe,
  Mail,
} from 'lucide-react';
import BlogPost from './components/BlogPost';

const services = [
  {
    title: 'Data Science',
    icon: <Database className="w-12 h-12 text-cyan-400" />,
    description:
      'Análisis predictivo, Machine Learning y visualización de datos para impulsar decisiones basadas en datos.',
  },
  {
    title: 'Marketing Digital',
    icon: <Megaphone className="w-12 h-12 text-purple-400" />,
    description:
      'Estrategias SEM, Social Media Marketing, Growth CRO y análisis de métricas para maximizar tu presencia digital.',
  },
  {
    title: 'Full Stack Development',
    icon: <Code2 className="w-12 h-12 text-green-400" />,
    description:
      'Desarrollo web end-to-end con las últimas tecnologías, integrando Web3 y blockchain para soluciones innovadoras y descentralizadas.',
  },
];

const experiences = [
  {
    company: 'Telefónica Hispam',
    position: 'Paid Media Specialist',
    period: '2022 - 2025',
    description:
      'Optimización de medios pagados y estrategias data-driven para maximizar ROI en la región.',
    icon: <Globe className="w-12 h-12 text-blue-400" />,
  },
  {
    company: 'UNICEF Colombia',
    position: 'Paid Media Specialist',
    period: '2020 - 2022',
    description:
      'Responsable de las metas mensuales de donación mediante la optimización de medios pagados, analítica y CRO.',
    icon: <Globe className="w-12 h-12 text-cyan-400" />,
  },
  {
    company: 'Digital57 - Digital Agency',
    position: 'Sr. Performance Strategist',
    period: '2019 - 2020',
    description:
      'Lideré estrategias digitales de performance para marcas como UNICEF, Carsync Location y Universidad del Rosario.',
    icon: <Globe className="w-12 h-12 text-green-400" />,
  },
  {
    company: 'Banco de Occidente',
    position: 'CRO Growth Hacker',
    period: '2018 - 2019',
    description:
      'Optimización de conversión y crecimiento para un producto digital de crédito vehicular mediante estrategias data-driven y A/B testing.',
    icon: <Code2 className="w-12 h-12 text-blue-400" />,
  },
];

const blogPosts = [
  {
    slug: 'futuro-marketing-digital-ia',
    title: 'El Futuro del Marketing Digital en la Era de la IA',
    date: '2025-02-10',
    excerpt:
      'Explorando cómo la inteligencia artificial está transformando las estrategias de marketing digital...',
  },
  {
    slug: 'machine-learning-prediccion-mercado',
    title: 'Machine Learning para Predicción de Tendencias de Mercado',
    date: '2025-02-10',
    excerpt:
      'Un análisis profundo sobre cómo utilizar algoritmos de ML para anticipar cambios en el mercado...',
  },
  {
    slug: 'arquitecturas-modernas-desarrollo-web',
    title: 'Arquitecturas Modernas en Desarrollo Web',
    date: '2025-02-10',
    excerpt:
      'Guía completa sobre las últimas tendencias en arquitecturas de desarrollo web...',
  },
];

function HomePage() {
  const [currentService, setCurrentService] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({
    message: '',
    type: null,
  });

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error('Faltan las credenciales de EmailJS');
      }

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        message:
          '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.',
        type: 'success',
      });

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setFormStatus({
        message:
          'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
        type: 'error',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50"></div>
        <div className="relative z-10 text-center px-4">
          <Brain className="w-24 h-24 mx-auto mb-8 text-cyan-400 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Samuel González S.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Data. Marketing. Code. | Transformando datos en conocimiento, ideas en estrategias y código
            en soluciones.
          </p>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            ¿Cómo te puedo aportar valor?
          </h2>
          <div className="relative max-w-4xl mx-auto">
  <div className="flex items-center justify-between">
    <button
      onClick={prevService}
      className="p-2 hover:text-cyan-400 transition-colors z-10"
    >
      <ChevronLeft className="w-8 h-8" />
    </button>
    
    <div className="flex-1 px-8 overflow-hidden relative h-64">
      <div
        className="flex transition-transform duration-500 ease-in-out absolute inset-0"
        style={{ transform: `translateX(-${currentService * 100}%)` }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 px-4 h-full flex items-center justify-center"
          >
            <div className="text-center flex flex-col items-center max-w-md">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <button
      onClick={nextService}
      className="p-2 hover:text-cyan-400 transition-colors z-10"
    >
      <ChevronRight className="w-8 h-8" />
    </button>
  </div>
</div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Experiencia Reciente
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.position}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-purple-400">{exp.company}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Educación
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 mb-8">
              <GraduationCap className="w-12 h-12 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">
                  Profesional en Mercadeo Internacional y Publicidad
                </h3>
                <p className="text-gray-400">Universidad Icesi, 2016</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-8">
              <GraduationCap className="w-12 h-12 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Master en Data Science</h3>
                <p className="text-gray-400">
                  Universidad de San Buenaventura, 2024
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Briefcase className="w-12 h-12 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">
                  Certificado "Digital Marketing Expert"
                </h3>
                <p className="text-gray-400">
                  Instituto Tecnológico de Buenos Aires, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
              >
                <time className="text-sm text-gray-400">{post.date}</time>
                <h3 className="text-xl font-bold mt-2 mb-4">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center"
                >
                  Leer más
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Pongámonos en Contacto
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            <div className="mb-6">
              <input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Mensaje"
                required
                rows={4}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>
            {formStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.type === 'success'
                    ? 'bg-green-900/50 text-green-400'
                    : 'bg-red-900/50 text-red-400'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="mailto:samuelgonzalezs94@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500">© 2025 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
