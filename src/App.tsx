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
            Explorar Servicios
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
            
  )
}