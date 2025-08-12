import React, { useState, useRef, useEffect } from 'react';
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
  Linkedin,
  Globe,
  ChevronDown,
  Mail,
} from 'lucide-react';
import BlogPost from './components/BlogPost';
import GoogleAdsChecklist from './components/GoogleAdsChecklist';

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
    company: 'Smartmuscle Lab',
    position: 'Coord. de Marketing Digital',
    period: '2025',
    description:
      'Lideré la creación del ecosistema digital de Smart Muscle: desarrollamos un e‑commerce enfocado en conversión, activamos redes sociales con enfoque comercial, automatizamos procesos con IA, usamos analítica de datos para decisiones estratégicas y abrimos nuevos canales como marketplaces para diversificar ingresos.',
    icon: <Globe className="w-12 h-12 text-cyan-400" />,
  },
  {
    company: 'Telefónica Hispam',
    position: 'Paid Media Specialist',
    period: '2022 - 2025',
    description:
      'Optimizé medios pagados en las operaciones de la región Hispanoamérica, maximizando ROI con modelos de atribución, automatización y audiencias first-party.',
    icon: <Globe className="w-12 h-12 text-cyan-400" />,
  },
  {
    company: 'UNICEF Colombia',
    position: 'Paid Media Specialist',
    period: '2020 - 2022',
    description:
      'Ejecuté la estrategia de adquisición de donantes por el canal digital, superando metas con CRO, A/B testing y segmentación data-driven.',
    icon: <Globe className="w-12 h-12 text-cyan-400" />,
  },
  {
    company: 'Digital57 - Digital Agency',
    position: 'Sr. Performance Strategist',
    period: '2019 - 2020',
    description:
      'Escalé campañas de performance para grandes marcas, optimizando CAC y ROAS con automatización y segmentación avanzada.',
    icon: <Globe className="w-12 h-12 text-cyan-400" />,
  },
  {
    company: 'Banco de Occidente',
    position: 'CRO Growth Hacker',
    period: '2018 - 2019',
    description:
      'Mejoré la conversión en Occiauto Digital con Growth Hacking, A/B testing y optimización UX/UI, reduciendo drop-off y aumentando aprobaciones digitales del producto.',
    icon: <Code2 className="w-12 h-12 text-cyan-400" />,
  },
  {
    company: 'Freelance',
    position: 'Full Stack Digital Marketer',
    period: '2012 - Actualidad',
    description:
      'Fusiono Marketing, Data & Code para crear estrategias digitales integrales, optimizando adquisición, automatización y analítica avanzada.',
    icon: <Globe className="w-12 h-12 text-cyan-400" />,
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
  {
    slug: 'astrologia-y-estrategia-empresarial',
    title: 'Astrología, Estrategia y Poder: Lo Que No Te Cuentan los CEO',
    date: '2025-02-20',
    excerpt:
      'La historia del poder siempre ha estado ligada al dominio del tiempo. Desde las antiguas civilizaciones hasta los magnates modernos, quienes logran adelantarse a los ciclos han mantenido el control. (...)',
  },
];

const companies = [
  {
    name: "Smartmuscle Lab",
    logo: "/OIP.webp",
  },{
    name: "Telefonica Hispam",
    logo: "/Telefonica-Logo-500x281.png",
  },
  {
    name: "UNICEF",
    logo: "/logo-UNICEF-500x281.png",
  },
  {
    name: "Applebees",
    logo: "/applebees-png-logo-6501.png",
  },
  {
    name: "CarSync",
    logo: "/logo_black.svg",
  },
  {
    name: "Banco de Occidente",
    logo: "/Banco_de_Occidente_logo.png",
  },
  {
    name: "El Bardo Bogotá",
    logo: "/el_bardo.webp",
  },
  {
    name: "Learn English",
    logo: "/learn_english_international_logo.jpg",
  },
  {
    name: "Tres Cuatro Cinco Bogotá",
    logo: "/tres_cuatro_cinco.webp",
  },
  {
    name: "Tay Beach",
    logo: "/tay_beach.jpg",
  },

  
];

function HomePage() {
  const [currentService, setCurrentService] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({
    message: '',
    type: null,
  });

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
    setAutoPlay(false); // Detener el autoplay cuando el usuario interactúa
    setTimeout(() => setAutoPlay(true), 10000); // Reiniciar el autoplay después de 10 segundos
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
    setAutoPlay(false); // Detener el autoplay cuando el usuario interactúa
    setTimeout(() => setAutoPlay(true), 10000); // Reiniciar el autoplay después de 10 segundos
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
      }, 3000); // Cambiar cada 3 segundos
    }
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [autoPlay]);

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
            Data | Marketing | Code
          </p><br/><br/>
          <button
            onClick={scrollToServices}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:gap-3"
          >
            Conoce cómo te puedo aportar
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Sobre Mí Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Foto */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="/samuel-perfil.6836711e.jpg" 
                alt="Samuel González"
                className="w-64 h-64 rounded-full object-cover border-4 border-cyan-400/50 shadow-lg"
              />
            </div>
            {/* Texto */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Sobre Mí
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Soy un profesional apasionado por la intersección entre el marketing digital, la ciencia de datos y el desarrollo web. Con más de 10 años de experiencia en estrategias data-driven, he trabajado en proyectos que van desde la optimización de medios pagados hasta la implementación de soluciones de Machine Learning.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-800/50 scroll-mt-16">
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
</div><br/>
<div className="flex justify-center text-center items-center max-w-2xl mx-auto">
  <div className="bg-gray-900/50 border border-cyan-400 rounded-lg p-6 shadow-lg">
    <h4 className="text-2xl font-light text-white mb-4">
      💡 ¿Quieres escalar tu negocio con <span className="text-cyan-400">marketing digital basado en datos</span>, automatización y optimización real?
    </h4>
    <p className="text-gray-300">  
  Si eres una <strong>agencia</strong>, <strong>emprendedor</strong> o <strong>empresa</strong>, hablemos y diseñemos una estrategia que maximice tu crecimiento.  
</p>

    <a 
      href="#contacto"
      className="mt-4 inline-block bg-cyan-400 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all hover:bg-cyan-300"
    >
      Hablemos 🚀
    </a>
  </div>
</div>

        </div>
        

      </section>


      {/* Experience Carousel */}
<section id="experiencia" className="py-16 bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
      Experiencia Reciente
    </h2>
    <div className="grid gap-8 items-center max-w-6xl mx-auto">
      {/* Experiencia */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 hover:border-cyan-500 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-cyan-400 text-3xl">{exp.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                  <span className="text-purple-400">{exp.company}</span>
                  <span className="text-gray-500">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-sm text-gray-400 leading-tight">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Logos de empresas */}
      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
      <h2 className="text-2xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
      Marcas que han confiado en mí
    </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="w-full h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <img
                src={company.logo}
                alt={`Logo de ${company.name}`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
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
      <section className="py-16 bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
      Blog
    </h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {blogPosts.map((post, index) => (
        <article
          key={index}
          className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 hover:border-cyan-500 transition-all hover:bg-gray-800"
        >
          <time className="text-xs text-gray-400">{post.date}</time>
          <h3 className="text-lg font-semibold mt-1 mb-3 text-white">
            {post.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>
          <Link
            to={`/blog/${post.slug}`}
            className="text-cyan-400 hover:text-cyan-300 inline-flex items-center mt-3 font-medium"
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
      <section id="contacto" className="py-20 bg-gray-800/50">
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
            <a
              href="https://www.linkedin.com/in/samuelgonzalez/" // Reemplaza con tu enlace de LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
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
      <Route path="/google-ads-checklist" element={<GoogleAdsChecklist />} />
    </Routes>
  );
}

export default App;
