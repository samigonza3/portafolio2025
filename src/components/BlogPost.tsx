import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Calendar, Share2, BookmarkPlus, ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPostData {
  title: string;
  date: string;
  content: string;
  author: string;
  readTime: string;
  metaDescription: string;
  tags: string[];
  relatedPosts: string[];
}

const blogPosts: Record<string, BlogPostData> = {
  'futuro-marketing-digital-ia': {
    title: "El Futuro del Marketing Digital en la Era de la IA: ¿Los algoritmos reemplazarán la creatividad humana?",
    date: "2025-02-10",
    author: "Marketing Specialist",
    readTime: "5 min",
    metaDescription: "Descubre cómo la inteligencia artificial está transformando el marketing digital y qué significa esto para el futuro de la industria.",
    tags: ["Marketing Digital", "IA", "Tecnología", "Innovación"],
    relatedPosts: ["machine-learning-prediccion-mercado", "arquitecturas-modernas-desarrollo-web"],
    content: `
      <p>Ya vivimos en un mundo donde las campañas de <strong>Google Ads</strong> se optimizan en tiempo real sin que pongamos un dedo, los mensajes de <strong>Meta</strong> se personalizan automáticamente según el usuario, y las estrategias de <em>performance</em> las diseñan algoritmos que analizan billones de datos en segundos. No es ciencia ficción, es el <strong>presente</strong>. Pero…</p>
      <br />
      <div class="section">
        <h2>🔮 1. La IA ya no es solo una herramienta, es tu nueva colega de trabajo</h2>
        <br />
        <p><strong>El PPC tradicional está muerto.</strong> Las plataformas ya no quieren que ajustes manualmente los bids o las keywords. Google y Meta están diseñando sus sistemas para que dependas de sus algoritmos, no de tu capacidad de optimización. Si insistes en la microgestión, te castigan con costos más altos y menos alcance.</p>
        <br />
        <p><strong>La clave ya no es controlar la campaña, sino alimentar el algoritmo.</strong> La diferencia entre ganar y perder no está en toquetear presupuestos, sino en dominar el <strong>feed de datos</strong>: aprovechar <em>first-party data</em>, personalizar eventos, y darle a la IA lo que necesita para tomar mejores decisiones.</p>
        <br />
        <p><strong>La creatividad ya no es opcional.</strong> Herramientas como <em>ChatGPT-4o, MidJourney y Adobe Firefly</em> permiten generar variaciones de anuncios en minutos, pero el verdadero valor sigue siendo humano. Los mejores resultados los logran quienes combinan insights culturales, contexto local y el conocimiento profundo de su audiencia.</p>
        <br />
        <p><em>Ejemplo real:</em> Un ecommerce de moda usa DALL·E 3 para crear 50 versiones de un banner, prueba tres inspirados en tendencias de TikTok y, en minutos, la IA identifica cuáles funcionan mejor y los escala automáticamente.</p>
      </div>
      <br />
      <div class="section">
        <h2>🌐 2. Web3: La descentralización está cambiando las reglas del juego</h2>
        <br />
        <p><strong>Los intermediarios están desapareciendo.</strong> En el ecosistema Web3, los usuarios pueden compartir sus datos de manera segura a cambio de tokens, eliminando la necesidad de plataformas como Google o Meta. Esto abre la puerta a una publicidad sin monopolios, donde los datos ya no son controlados por gigantes tecnológicos.</p>
        <br />
        <p><strong>Los NFTs están redefiniendo el marketing.</strong> Más allá de ser simples coleccionables digitales, los NFTs pueden usarse como cupones rastreables, acceso a experiencias exclusivas y sistemas de fidelización que funcionan en cualquier plataforma. Empresas innovadoras ya los están integrando como una nueva forma de conectar con sus audiencias.</p>
        <br />
        <p><strong>Las DAOs están tomando decisiones.</strong> En los ecosistemas descentralizados, las comunidades tienen el poder de elegir qué marcas pueden anunciarse en sus espacios. Si una campaña de cripto no convence a la DAO de Ethereum, simplemente no entra. No es solo un nuevo modelo publicitario, es un cambio en quién tiene el control.</p>
        <br />
        <p><em>Ejemplo disruptivo:</em> Un influencer lanza su propia red de anuncios en una dApp. Sus seguidores votan qué patrocinadores pueden participar y, a cambio, reciben criptomonedas.</p>
      </div>
      <br />
      <div class="section">
        <h2>🚀 3. El marketer del futuro: ¿ingeniero de prompts o psicólogo de datos?</h2>
        <br />
        <p><strong>El nuevo marketing necesita nuevas habilidades.</strong> Ya no basta con entender audiencias y diseñar anuncios. La nueva era exige dominar <em>prompt engineering</em>, análisis de datos con <em>Python o R</em>, e incluso smart contracts para campañas en Web3.</p>
        <br />
        <p><strong>Pero la técnica no lo es todo.</strong> En un mundo dominado por algoritmos, el pensamiento crítico y el storytelling se vuelven más valiosos que nunca. ¿Cómo detectar sesgos en la IA? ¿Cómo asegurarse de que la automatización no pierda la conexión humana? El marketer del futuro no solo optimiza anuncios, diseña experiencias.</p>
        <br />
        <p><strong>La pregunta incómoda:</strong> ¿Estamos construyendo campañas o momentos memorables? Menos obsesión por los clics, más obsesión por crear conexiones que importen.</p>
      </div>
      <br />
      <div class="cta">
        <p>El futuro no es solo IA. Es <em>humano + máquina + blockchain</em>. El juego cambió. La pregunta es: ¿vas a adaptarte o quedarte atrás?</p>
      </div>
    `,
  },
  'machine-learning-prediccion-mercado': {
    title: "Machine Learning para Predicción de Tendencias de Mercado",
    date: "2025-02-10",
    author: "Data Scientist",
    readTime: "7 min",
    metaDescription: "Aprende cómo el Machine Learning está revolucionando la predicción de tendencias de mercado y la toma de decisiones empresariales.",
    tags: ["Machine Learning", "Data Science", "Predicción", "Análisis"],
    relatedPosts: ["futuro-marketing-digital-ia", "arquitecturas-modernas-desarrollo-web"],
    content: `
      <p>Imagina poder <strong>predecir la próxima tendencia viral</strong> antes de que explote en TikTok, o anticipar qué producto será un <em>best-seller</em> seis meses antes del Black Friday. No es magia: es <strong>Machine Learning</strong>. Y mientras lees esto, tus competidores ya están entrenando modelos con los mismos datos que tú generas cada día…</p>
      <br />
      <div class="section">
        <h2>🔍 1. El ML es el arma secreta del marketing moderno</h2>
        <br />
        <p>Olvídate de las encuestas y las corazonadas. Los modelos de Machine Learning analizan <strong>datos en tiempo real</strong>, desde redes sociales hasta sensores IoT, identificando patrones que los humanos jamás notaríamos. No se trata solo de análisis predictivo, sino de decisiones automatizadas con precisión quirúrgica.</p>
        <br />
        <p>Empresas como <em>Starbucks</em> ya usan estos modelos para predecir ventas por ubicación con un 95% de exactitud, combinando datos de clima y tráfico. No es coincidencia que sus promociones aparezcan justo cuando más las necesitas.</p>
      </div>
      <br />
      <div class="section">
        <h2>⚙️ 2. Los tres modelos esenciales que todo marketer debe conocer</h2>
        <br />
        <p>Para sacarle provecho al ML, no necesitas ser un científico de datos, pero sí entender cómo funcionan los modelos clave.</p>
        <br />
        <p><strong>a) Series temporales (ARIMA, Prophet)</strong>: Estos modelos permiten predecir ventas estacionales y anticipar la demanda de productos con precisión. Con herramientas como <strong>Python + Pandas</strong> o Facebook Prophet, puedes ajustar tu inventario antes de que la competencia reaccione.</p>
        <br />
        <p><strong>b) Análisis de sentimiento con NLP</strong>: Más que medir "likes", estos modelos detectan cambios en la percepción de tu marca antes de que una crisis explote. Algoritmos como <strong>BERT</strong> y <strong>GPT-4</strong> analizan comentarios, reseñas y menciones en tiempo real, permitiéndote actuar antes de que un escándalo viral te cueste millones.</p>
        <br />
        <p><strong>c) Clustering para segmentación</strong>: Olvídate de segmentar solo por edad o género. Modelos como <strong>K-Means</strong> y DBSCAN agrupan clientes según patrones de comportamiento ocultos. Un ecommerce de lujo, por ejemplo, aumentó un 300% sus conversiones segmentando clientes por su <strong>forma de navegar</strong> en la app, no por datos demográficos tradicionales.</p>
      </div>
      <br />
      <div class="section">
        <h2>💥 3. Caso práctico: Cómo Zara predice tendencias con ML</h2>
        <br />
        <p>Zara no sigue tendencias, las anticipa. Su estrategia combina datos de diversas fuentes: imágenes de street style captadas en tiendas, búsquedas en Pinterest y ventas históricas cruzadas con el clima local. Con esta información, entrenan un modelo de <em>Computer Vision</em> que clasifica prendas en "tendencia ascendente" o "en declive".</p>
        <br />
        <p>¿El resultado? Redujeron en un 40% el stock obsoleto y lanzaron colecciones dos meses más rápido que sus competidores.</p>
      </div>
      <br />
      <div class="cta">
        <h2>📈 ¿Cómo empezar? (sin ser un PhD en Data Science)</h2>
        <br />
        <p>No necesitas programar desde cero. Plataformas como <strong>Google AutoML</strong> y <strong>Azure Machine Learning Studio</strong> permiten entrenar modelos sin escribir una línea de código. BigQuery ML incluso ofrece plantillas preconfiguradas para forecasting y segmentación.</p>
        <br />
        <p>Tu rol es definir <strong>KPIs claros</strong> y validar los resultados. El verdadero poder del ML no está en la tecnología, sino en cómo la usas para tomar mejores decisiones.</p>
      </div>
      <br />
      <div class="conclusion">
        <p>La pregunta ya no es <em>"¿funciona el ML?"</em>, sino <strong>"¿cuánto mercado perderás mientras otros lo implementan?"</strong>.</p>
      </div>
    `,
  },
  'arquitecturas-modernas-desarrollo-web': {
    title: "Arquitecturas Modernas en Desarrollo Web",
    date: "2025-02-10",
    author: "Tech Lead",
    readTime: "6 min",
    metaDescription: "Explora las últimas tendencias en arquitecturas de desarrollo web y cómo pueden beneficiar a tu próximo proyecto.",
    tags: ["Desarrollo Web", "Arquitectura", "Frontend", "Backend"],
    relatedPosts: ["futuro-marketing-digital-ia", "machine-learning-prediccion-mercado"],
    content: `
      <p>Imagina un sitio web que se auto-repara, escala ilimitadamente durante el Black Friday, y carga más rápido que un TikTok. <br><br> 
      No es utopía: es lo que ofrecen las <strong>arquitecturas modernas</strong>. <br> 
      Y si tu stack sigue corriendo sobre un monolito PHP de 2012... <em>tenemos que hablar</em>. 🔥</p>
      <br />
      <div class="section">
        <h2>🌐 1. El trío revolucionario: Jamstack, Microservicios y Serverless</h2>
        <br />
        <p><strong>a) Jamstack (JavaScript + APIs + Markup):</strong></p>
        <ul>
          <li><em>Velocidad:</em> Sitios estáticos pre-renderizados (0ms de Time to First Byte)</li>
          <li><em>Seguridad:</em> Sin bases de datos expuestas → imposible hackear</li>
          <li>🛠️ Herramientas: <strong>Next.js, Gatsby, Contentful</strong></li>
          <li>💼 Caso: <em>Lego</em> redujo un 60% su tiempo de carga migrando a Jamstack</li>
        </ul>
        <br />
        <p><strong>b) Microservicios:</strong></p>
        <ul>
          <li>Divide tu app en módulos independientes (ej: carrito de compras, login, recomendaciones)</li>
          <li><em>Beneficio clave:</em> Si falla el servicio de pagos, ¡el resto sigue funcionando!</li>
          <li>🛠️ Herramientas: <strong>Docker, Kubernetes, AWS Lambda</strong></li>
        </ul>
        <br />
        <p><strong>c) Serverless:</strong></p>
        <ul>
          <li>Paga solo por milisegundos de ejecución (adiós a servidores sobrecargados)</li>
          <li>Escala automáticamente de 1 a 1M de usuarios en segundos</li>
          <li>🛠️ Herramientas: <strong>Vercel, Netlify, Cloudflare Workers</strong></li>
        </ul>
        <br />
        <blockquote>
          "Un ecommerce de viajes procesó 8M de solicitudes durante el Cyber Monday <strong>sin caídas</strong> usando AWS Lambda + API Gateway."
        </blockquote>
      </div>
      <br />
      <div class="section">
        <h2>⚡ 2. Edge Computing: Cuando la velocidad es la nueva moneda</h2>
        <br />
        <p><strong>¿Qué es?</strong> Ejecutar código en servidores cercanos al usuario (no en una nube central).<br><br></p>
        <p><strong>Impacto real:</strong></p>
        <ul>
          <li>Contenido dinámico entregado en <strong>20ms</strong> (vs 300ms tradicional)</li>
          <li>Ejemplo: <em>Spotify</em> usa edge para recomendar música en tiempo real basada en ubicación</li>
          <li>🛠️ Herramientas: <strong>Cloudflare Workers, Deno Deploy</strong></li>
        </ul>
        <br />
        <p><strong>Dato clave:</strong> El 40% del tráfico web ya se maneja en el edge (Gartner, 2024).</p>
      </div>
      <br />
      <div class="section">
        <h2>💼 3. Caso práctico: Cómo Netflix migró de monolito a microservicios</h2>
        <br />
        <p><strong>Problema inicial:</strong> Un solo fallo tumbaba toda la plataforma durante estrenos masivos.<br><br></p>
        <p><strong>Solución:</strong></p>
        <ol>
          <li>Dividieron la app en 500+ microservicios (reproductor, perfiles, billing)</li>
          <li>Implementaron <em>auto-scaling</em> con Kubernetes</li>
          <li>Resultado: <strong>99.99% uptime</strong> durante el estreno de <em>Stranger Things 5</em></li>
        </ol>
      </div>
      <br />
      <div class="cta">
        <h2>🚀 ¿Por dónde empezar? (sin volverse loco)</h2>
        <ul>
          <li><strong>Paso 1:</strong> Mapea cuellos de botella en tu arquitectura actual</li>
          <li><strong>Paso 2:</strong> Prioriza módulos para migrar (empieza por el más crítico)</li>
          <li><strong>Recurso:</strong> <em>Descarga mi checklist</em> "5 señales de que tu arquitectura necesita un upgrade"</li>
        </ul>
        <button>Descargar Checklist Gratis 📋</button>
      </div>
    `,
  },
  'astrologia-y-estrategia-empresarial': {
    title: "Astrología, Estrategia y Poder: Lo Que No Te Cuentan los CEO",
    date: "2025-02-20",
    author: "Samuel González",
    readTime: "6 min",
    metaDescription: "La historia del poder siempre ha estado ligada al dominio del tiempo. Desde las antiguas civilizaciones hasta los magnates modernos, quienes logran adelantarse a los ciclos han mantenido el control. Mientras la mayoría de los empresarios se enfocan exclusivamente en datos y proyecciones financieras,(...)",
    tags: ["Astrologia", "Estrategia"],
    relatedPosts: ["futuro-marketing-digital-ia", "machine-learning-prediccion-mercado"],
    content: `
    <p>El tiempo no es solo un recurso: es una ventaja estratégica. <br><br>  
    Desde los emperadores hasta los titanes de Wall Street, quienes dominan los ciclos han mantenido el poder. <br>  
    Mientras la mayoría se enfoca en métricas financieras, hay quienes miran más allá: <em>los que entienden que el éxito sigue patrones más grandes</em>. 🔥</p>  
    <br />  
    
    <div class="section">  
      <h2>🌌 1. El tiempo como estrategia: Astrología y negocios</h2>  
      <br />  
      <p>JP Morgan lo dijo sin rodeos: <strong>"Los millonarios no usan astrología, los billonarios sí."</strong></p>  
      <br />  
      <p>¿Por qué? Porque los mercados, la innovación y las crisis siguen patrones cíclicos. Así como la Luna afecta las mareas,  
      los movimientos planetarios parecen resonar con cambios históricos, económicos y empresariales.</p>  
      <br />  
      <p><strong>Ejemplos de uso:</strong></p>  
      <ul>  
        <li>📈 <em>JP Morgan</em>: Usaba astrólogos personales para tomar decisiones financieras.</li>  
        <li>🏦 <em>Hong Kong Stock Exchange</em>: Ha recurrido a análisis astrológicos en fechas clave.</li>  
        <li>🚀 <em>Silicon Valley</em>: Algunos fundadores han utilizado astrología para lanzamientos estratégicos.</li>  
        <li>🀄 <em>China y el I Ching</em>: Empresas asiáticas usan ciclos astrológicos para definir movimientos corporativos.</li>  
      </ul>  
    </div>  
    <br />  
    
    <div class="section">  
      <h2>🔄 2. Los ritmos del poder: Jung, ciclos y mercados</h2>  
      <br />  
      <p><strong>Carl Jung</strong> introdujo el concepto de <em>inconsciente colectivo</em>: patrones simbólicos que afectan el comportamiento humano.  
      Esto se extiende a la economía, las tendencias de consumo y los cambios culturales.</p>  
      <br />  
      <p><strong>Ejemplo:</strong> Así como Saturno tarda 29 años en dar la vuelta al Sol, su retorno coincide con crisis y reestructuraciones  
      en la vida de líderes y empresas. Coincidencia… ¿o patrón?</p>  
    </div>  
    <br />  
    
    <div class="section">  
      <h2>⚡ 3. Claves astrológicas para la estrategia empresarial</h2>  
      <br />  
      <p>Si los mercados son cíclicos, <strong>¿por qué no anticiparlos?</strong> Aquí algunas claves usadas por empresarios estratégicos:</p>  
      <ul>  
        <li>🪐 <strong>Júpiter:</strong> Expansión y crecimiento. Ideal para escalar o lanzar un proyecto.</li>  
        <li>⚔️ <strong>Saturno:</strong> Pruebas y estructura. Su retorno suele traer crisis y redefiniciones.</li>  
        <li>📉 <strong>Mercurio retrógrado:</strong> Más fallos en contratos y sistemas. Mejor para revisar, no para lanzar.</li>  
        <li>🌘 <strong>Eclipses:</strong> Cambios abruptos en la economía y reestructuraciones empresariales.</li>  
      </ul>  
      <br />  
      <blockquote>  
        “Las tendencias no surgen de la nada; son parte de un flujo más grande que ha sido observado por milenios.”  
      </blockquote>  
    </div>  
    <br />  
    
    <div class="cta">  
      <h2>🚀 ¿Quieres anticiparte a los ciclos del éxito?</h2>  
      <ul>  
        <li><strong>🔍 Paso 1:</strong> Identifica cómo los ciclos han afectado tu negocio o carrera.</li>  
        <li><strong>📊 Paso 2:</strong> Aprende a interpretar los ritmos del mercado con herramientas astrológicas.</li>  
        <li><strong>🔮 Consulta personalizada:</strong> Explora cómo usar estos ciclos a tu favor.</li>  
      </ul>  
      <button>Explorar mi consulta astrológica 🔥</button>  
    </div>  
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? blogPosts[slug] : null;

  useEffect(() => {
    if (post) {
      // Actualizar el título y la meta descripción para SEO
      document.title = `${post.title} | Tu Nombre`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.metaDescription;
        document.head.appendChild(meta);
      }

      // Scroll to top on new post
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-8">Post no encontrado</h1>
            <p className="text-gray-400 mb-8">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
            <Link to="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post.title,
        text: post.metaDescription,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header con imagen de fondo */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-4">
                <ChevronLeft className="w-5 h-5 mr-2" />
                Volver al inicio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="inline-flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </span>
                <span className="inline-flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime} de lectura
                </span>
                <span className="text-purple-400">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Acciones del artículo */}
          <div className="flex justify-between items-center mb-8 p-4 bg-gray-800/50 rounded-lg">
            <div className="flex gap-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-sm px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={handleShare} className="p-2 hover:text-cyan-400 transition-colors" title="Compartir">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-purple-400 transition-colors" title="Guardar">
                <BookmarkPlus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contenido del artículo */}
          <article className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Artículos relacionados */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Artículos Relacionados
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {post.relatedPosts.map((relatedSlug, index) => {
                const relatedPost = blogPosts[relatedSlug];
                return (
                  <article key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                    <time className="text-sm text-gray-400">{relatedPost.date}</time>
                    <h4 className="text-xl font-bold mt-2 mb-4">{relatedPost.title}</h4>
                    <Link
                      to={`/blog/${relatedSlug}`}
                      className="text-cyan-400 hover:text-cyan-300 inline-flex items-center"
                    >
                      Leer más
                      <ChevronLeft className="w-4 h-4 ml-2" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Navegación entre posts */}
          <nav className="mt-12 flex justify-between items-center pt-8 border-t border-gray-800">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Anterior
            </button>
            <button
              onClick={() => navigate(1)}
              className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Siguiente
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}