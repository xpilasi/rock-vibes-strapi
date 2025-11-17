const axios = require('axios');

const API_URL = 'http://localhost:1337/api';
const API_TOKEN = 'fe9bce7cfd29953af619b4b6a08cc96c2346e3bab3099ef39052026f42f6f6fcc2e2378aec96d8fa8b5776de91537a4a2d4cbfbc6b0f639cac4f6f9b66baa61e437842942e486598b3dc854910f73d868835492ae59da414def69cb8bcac64979fdfc102d38c8e7f607e5bc8b0b5fb94560c918b5750d3bb1788fe4429b23724';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

async function addSpanishLocale() {
  try {
    console.log('Adding Spanish locale...');
    const response = await api.post('/i18n/locales', {
      name: 'Spanish (es)',
      code: 'es'
    });
    console.log('✅ Spanish locale added:', response.data);
  } catch (error) {
    if (error.response?.status === 400 && error.response?.data?.error?.message?.includes('already exists')) {
      console.log('ℹ️  Spanish locale already exists');
    } else {
      console.error('Error adding Spanish locale:', error.response?.data || error.message);
    }
  }
}

async function createNews() {
  const newsData = {
    en: [
      {
        title: 'New Climbing Routes Opened',
        date: '2025-11-15',
        excerpt: 'Explore our brand new challenging routes designed for intermediate and advanced climbers.',
        slug: 'new-climbing-routes-opened'
      },
      {
        title: 'Monthly Climbing Competition',
        date: '2025-11-10',
        excerpt: 'Join us for our monthly competition! Test your skills and win amazing prizes.',
        slug: 'monthly-climbing-competition'
      },
      {
        title: 'New Training Program Available',
        date: '2025-11-05',
        excerpt: 'Our new structured training program helps you improve your climbing technique step by step.',
        slug: 'new-training-program-available'
      },
      {
        title: 'Kids Climbing Camp This Summer',
        date: '2025-10-28',
        excerpt: 'Sign up your kids for an amazing week of climbing, games, and outdoor adventures.',
        slug: 'kids-climbing-camp-summer'
      },
      {
        title: 'New Climbing Gear in Our Shop',
        date: '2025-10-20',
        excerpt: 'Check out the latest climbing shoes, harnesses, and equipment from top brands.',
        slug: 'new-climbing-gear-shop'
      },
      {
        title: 'Beginner Workshops Every Weekend',
        date: '2025-10-15',
        excerpt: 'Never climbed before? Join our beginner-friendly workshops held every Saturday and Sunday.',
        slug: 'beginner-workshops-weekend'
      }
    ],
    es: [
      {
        title: 'Nuevas Rutas de Escalada Abiertas',
        date: '2025-11-15',
        excerpt: 'Explora nuestras nuevas rutas desafiantes diseñadas para escaladores intermedios y avanzados.',
        slug: 'nuevas-rutas-escalada-abiertas'
      },
      {
        title: 'Competición Mensual de Escalada',
        date: '2025-11-10',
        excerpt: '¡Únete a nuestra competición mensual! Pon a prueba tus habilidades y gana premios increíbles.',
        slug: 'competicion-mensual-escalada'
      },
      {
        title: 'Nuevo Programa de Entrenamiento Disponible',
        date: '2025-11-05',
        excerpt: 'Nuestro nuevo programa de entrenamiento estructurado te ayuda a mejorar tu técnica paso a paso.',
        slug: 'nuevo-programa-entrenamiento-disponible'
      },
      {
        title: 'Campamento de Escalada para Niños Este Verano',
        date: '2025-10-28',
        excerpt: 'Apunta a tus hijos para una semana increíble de escalada, juegos y aventuras al aire libre.',
        slug: 'campamento-escalada-ninos-verano'
      },
      {
        title: 'Nuevo Equipo de Escalada en Nuestra Tienda',
        date: '2025-10-20',
        excerpt: 'Descubre los últimos zapatos de escalada, arneses y equipamiento de las mejores marcas.',
        slug: 'nuevo-equipo-escalada-tienda'
      },
      {
        title: 'Talleres para Principiantes Cada Fin de Semana',
        date: '2025-10-15',
        excerpt: '¿Nunca has escalado? Únete a nuestros talleres para principiantes todos los sábados y domingos.',
        slug: 'talleres-principiantes-fin-semana'
      }
    ]
  };

  console.log('\n📰 Creating news in English...');
  for (const news of newsData.en) {
    try {
      const response = await api.post('/plural-news', {
        data: {
          ...news,
          locale: 'en',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${news.title}`);
    } catch (error) {
      console.error(`❌ Error creating "${news.title}":`, error.response?.data || error.message);
    }
  }

  console.log('\n📰 Creating news in Spanish...');
  for (const news of newsData.es) {
    try {
      const response = await api.post('/plural-news', {
        data: {
          ...news,
          locale: 'es',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${news.title}`);
    } catch (error) {
      console.error(`❌ Error creating "${news.title}":`, error.response?.data || error.message);
    }
  }
}

async function createClimbingServices() {
  const servicesData = {
    en: [
      { name: 'Lead Climbing', description: 'Experience the thrill of lead climbing on our high walls with certified instructors.', icon: 'climb', order: 1 },
      { name: 'Bouldering', description: 'Challenge yourself on our diverse boulder problems suitable for all skill levels.', icon: 'boulder', order: 2 },
      { name: 'Training Gym', description: 'Access our fully equipped training gym to build strength and endurance.', icon: 'gym', order: 3 },
      { name: 'Professional Instruction', description: 'Learn from experienced climbers and improve your technique.', icon: 'instructor', order: 4 },
      { name: 'Yoga & Flexibility', description: 'Complement your climbing with yoga classes focused on flexibility and recovery.', icon: 'yoga', order: 5 }
    ],
    es: [
      { name: 'Escalada Deportiva', description: 'Experimenta la emoción de la escalada deportiva en nuestros muros altos con instructores certificados.', icon: 'climb', order: 1 },
      { name: 'Boulder', description: 'Desafíate con nuestros diversos problemas de boulder adecuados para todos los niveles.', icon: 'boulder', order: 2 },
      { name: 'Gimnasio de Entrenamiento', description: 'Accede a nuestro gimnasio completamente equipado para desarrollar fuerza y resistencia.', icon: 'gym', order: 3 },
      { name: 'Instrucción Profesional', description: 'Aprende de escaladores experimentados y mejora tu técnica.', icon: 'instructor', order: 4 },
      { name: 'Yoga y Flexibilidad', description: 'Complementa tu escalada con clases de yoga enfocadas en flexibilidad y recuperación.', icon: 'yoga', order: 5 }
    ]
  };

  console.log('\n🧗 Creating climbing services in English...');
  for (const service of servicesData.en) {
    try {
      const response = await api.post('/climbing-services', {
        data: {
          ...service,
          locale: 'en',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${service.name}`);
    } catch (error) {
      console.error(`❌ Error creating "${service.name}":`, error.response?.data || error.message);
    }
  }

  console.log('\n🧗 Creating climbing services in Spanish...');
  for (const service of servicesData.es) {
    try {
      const response = await api.post('/climbing-services', {
        data: {
          ...service,
          locale: 'es',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${service.name}`);
    } catch (error) {
      console.error(`❌ Error creating "${service.name}":`, error.response?.data || error.message);
    }
  }
}

async function createOfferings() {
  const offeringsData = {
    en: [
      { name: 'Monthly Memberships', description: 'Unlimited access to all facilities with flexible monthly plans.', icon: 'memberships', link: '#', order: 1 },
      { name: 'Day Passes', description: 'Try us out with a single day pass including equipment rental.', icon: 'day-passes', link: '#', order: 2 },
      { name: 'Equipment Rental', description: 'Rent high-quality climbing gear for your session.', icon: 'equipment', link: '#', order: 3 },
      { name: 'Personal Training', description: 'One-on-one coaching to reach your climbing goals faster.', icon: 'personal-training', link: '#', order: 4 },
      { name: 'Private Events', description: 'Book our facility for birthday parties, team building, or special events.', icon: 'private-events', link: '#', order: 5 }
    ],
    es: [
      { name: 'Membresías Mensuales', description: 'Acceso ilimitado a todas las instalaciones con planes mensuales flexibles.', icon: 'memberships', link: '#', order: 1 },
      { name: 'Pases Diarios', description: 'Pruébanos con un pase de un día que incluye alquiler de equipo.', icon: 'day-passes', link: '#', order: 2 },
      { name: 'Alquiler de Equipo', description: 'Alquila equipo de escalada de alta calidad para tu sesión.', icon: 'equipment', link: '#', order: 3 },
      { name: 'Entrenamiento Personal', description: 'Coaching individual para alcanzar tus objetivos de escalada más rápido.', icon: 'personal-training', link: '#', order: 4 },
      { name: 'Eventos Privados', description: 'Reserva nuestras instalaciones para cumpleaños, team building o eventos especiales.', icon: 'private-events', link: '#', order: 5 }
    ]
  };

  console.log('\n🎯 Creating offerings in English...');
  for (const offering of offeringsData.en) {
    try {
      const response = await api.post('/offerings', {
        data: {
          ...offering,
          locale: 'en',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${offering.name}`);
    } catch (error) {
      console.error(`❌ Error creating "${offering.name}":`, error.response?.data || error.message);
    }
  }

  console.log('\n🎯 Creating offerings in Spanish...');
  for (const offering of offeringsData.es) {
    try {
      const response = await api.post('/offerings', {
        data: {
          ...offering,
          locale: 'es',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${offering.name}`);
    } catch (error) {
      console.error(`❌ Error creating "${offering.name}":`, error.response?.data || error.message);
    }
  }
}

async function createServices() {
  const servicesData = {
    en: [
      { name: 'Beginner Classes', description: 'Perfect for those new to climbing. Learn the basics in a supportive environment.', icon: 'beginner', order: 1 },
      { name: 'Advanced Training', description: 'Push your limits with advanced techniques and personalized coaching.', icon: 'pro-training', order: 2 },
      { name: 'Kids Programs', description: 'Safe and fun climbing activities designed specifically for children.', icon: 'kids', order: 3 },
      { name: 'Group Sessions', description: 'Climb with friends or join our community group sessions.', icon: 'groups', order: 4 },
      { name: 'Pro Shop', description: 'Get all your climbing gear from our well-stocked pro shop.', icon: 'shop', order: 5 },
      { name: 'Events & Competitions', description: 'Participate in regular events, competitions, and social gatherings.', icon: 'events', order: 6 }
    ],
    es: [
      { name: 'Clases para Principiantes', description: 'Perfecto para los nuevos en la escalada. Aprende lo básico en un ambiente de apoyo.', icon: 'beginner', order: 1 },
      { name: 'Entrenamiento Avanzado', description: 'Lleva tus límites más allá con técnicas avanzadas y coaching personalizado.', icon: 'pro-training', order: 2 },
      { name: 'Programas Infantiles', description: 'Actividades de escalada seguras y divertidas diseñadas específicamente para niños.', icon: 'kids', order: 3 },
      { name: 'Sesiones Grupales', description: 'Escala con amigos o únete a nuestras sesiones grupales de la comunidad.', icon: 'groups', order: 4 },
      { name: 'Tienda Pro', description: 'Consigue todo tu equipo de escalada en nuestra tienda bien surtida.', icon: 'shop', order: 5 },
      { name: 'Eventos y Competiciones', description: 'Participa en eventos regulares, competiciones y reuniones sociales.', icon: 'events', order: 6 }
    ]
  };

  console.log('\n⚙️  Creating services in English...');
  for (const service of servicesData.en) {
    try {
      const response = await api.post('/services', {
        data: {
          ...service,
          locale: 'en',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${service.name}`);
    } catch (error) {
      console.error(`❌ Error creating "${service.name}":`, error.response?.data || error.message);
    }
  }

  console.log('\n⚙️  Creating services in Spanish...');
  for (const service of servicesData.es) {
    try {
      const response = await api.post('/services', {
        data: {
          ...service,
          locale: 'es',
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created: ${service.name}`);
    } catch (error) {
      console.error(`❌ Error creating "${service.name}":`, error.response?.data || error.message);
    }
  }
}

async function main() {
  console.log('🚀 Starting content setup for Rock Vibes Strapi...\n');

  await addSpanishLocale();
  await createNews();
  await createClimbingServices();
  await createOfferings();
  await createServices();

  console.log('\n✨ Content setup completed!');
  console.log('\n📊 Summary:');
  console.log('  - Spanish locale added');
  console.log('  - 6 news items created (EN + ES)');
  console.log('  - 5 climbing services created (EN + ES)');
  console.log('  - 5 offerings created (EN + ES)');
  console.log('  - 6 services created (EN + ES)');
}

main().catch(console.error);
