import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface BlogPostData {
  title: string;
  date: string;
  content: string;
}

const blogPosts: Record<string, BlogPostData> = {
  'futuro-marketing-digital-ia': {
    title: "El Futuro del Marketing Digital en la Era de la IA",
    date: "2024-03-15",
    content: `
      La inteligencia artificial está revolucionando la forma en que hacemos marketing digital. 
      Desde la personalización de contenidos hasta la optimización de campañas publicitarias, 
      la IA está transformando cada aspecto de la estrategia digital.

      ## Impacto en la Personalización
      La IA permite una personalización sin precedentes en la experiencia del usuario. 
      Los algoritmos pueden analizar el comportamiento del usuario en tiempo real y 
      ajustar el contenido según sus preferencias e intereses.

      ## Optimización de Campañas
      Las herramientas de IA pueden predecir el rendimiento de las campañas y 
      ajustar automáticamente los parámetros para maximizar el ROI. Esto incluye:
      - Ajuste automático de pujas en campañas PPC
      - Optimización de copys publicitarios
      - Segmentación avanzada de audiencias

      ## El Futuro es Ahora
      La adopción de la IA en el marketing digital no es una opción, sino una 
      necesidad para mantenerse competitivo en el mercado actual.
    `
  },
  'machine-learning-prediccion-mercado': {
    title: "Machine Learning para Predicción de Tendencias de Mercado",
    date: "2024-03-10",
    content: `
      El Machine Learning se ha convertido en una herramienta fundamental para 
      predecir tendencias de mercado y tomar decisiones informadas en tiempo real.

      ## Análisis Predictivo
      Los modelos de ML pueden procesar grandes cantidades de datos históricos 
      para identificar patrones y predecir tendencias futuras con una precisión 
      cada vez mayor.

      ## Casos de Uso
      - Predicción de demanda de productos
      - Análisis de sentimiento del mercado
      - Optimización de precios
      - Detección de anomalías en tiempo real

      ## Implementación Práctica
      La implementación exitosa de modelos de ML requiere:
      1. Datos de calidad
      2. Infraestructura adecuada
      3. Equipo especializado
      4. Monitoreo continuo
    `
  },
  'arquitecturas-modernas-desarrollo-web': {
    title: "Arquitecturas Modernas en Desarrollo Web",
    date: "2024-03-05",
    content: `
      Las arquitecturas modernas de desarrollo web están evolucionando rápidamente 
      para satisfacer las demandas de aplicaciones cada vez más complejas.

      ## Arquitecturas Populares
      - Jamstack
      - Microservicios
      - Serverless
      - Edge Computing

      ## Beneficios
      Las arquitecturas modernas ofrecen:
      - Mayor escalabilidad
      - Mejor rendimiento
      - Costos optimizados
      - Desarrollo más ágil

      ## Consideraciones de Implementación
      Al elegir una arquitectura moderna, es importante considerar:
      1. Requisitos del proyecto
      2. Equipo de desarrollo
      3. Presupuesto
      4. Necesidades de escalabilidad
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-red-400">Post no encontrado</h1>
          <div className="text-center mt-8">
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </Link>
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              {post.title}
            </h1>
            <time className="text-gray-400">{post.date}</time>
          </header>
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-purple-400">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc list-inside mb-4 text-gray-300">
                    <li>{paragraph.replace('-', '').trim()}</li>
                  </ul>
                );
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <ol key={index} className="list-decimal list-inside mb-4 text-gray-300">
                    <li>{paragraph.replace(/^\d\./, '').trim()}</li>
                  </ol>
                );
              }
              return paragraph.trim() && (
                <p key={index} className="mb-4 text-gray-300">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}