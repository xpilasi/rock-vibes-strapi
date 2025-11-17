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

// ============ CLIMBING SERVICES ============
const climbingServices = {
  es: [
    {
      name: 'Escalada Deportiva',
      description: 'Experimenta la emoción de la escalada deportiva en nuestros muros altos con instructores certificados. Rutas para todos los niveles.',
      icon: 'climb',
      order: 1
    },
    {
      name: 'Boulder',
      description: 'Desafíate con nuestros diversos problemas de boulder adecuados para todos los niveles. Sin arnés, solo tú y la roca.',
      icon: 'boulder',
      order: 2
    },
    {
      name: 'Gimnasio de Entrenamiento',
      description: 'Accede a nuestro gimnasio completamente equipado para desarrollar fuerza, resistencia y técnica específica para escalada.',
      icon: 'gym',
      order: 3
    },
    {
      name: 'Instrucción Profesional',
      description: 'Aprende de escaladores experimentados y mejora tu técnica con clases personalizadas y grupales.',
      icon: 'instructor',
      order: 4
    },
    {
      name: 'Yoga y Flexibilidad',
      description: 'Complementa tu escalada con clases de yoga enfocadas en flexibilidad, equilibrio y recuperación muscular.',
      icon: 'yoga',
      order: 5
    }
  ],
  en: [
    {
      name: 'Lead Climbing',
      description: 'Experience the thrill of lead climbing on our high walls with certified instructors. Routes for all skill levels.',
      icon: 'climb',
      order: 1
    },
    {
      name: 'Bouldering',
      description: 'Challenge yourself on our diverse boulder problems suitable for all levels. No harness, just you and the rock.',
      icon: 'boulder',
      order: 2
    },
    {
      name: 'Training Gym',
      description: 'Access our fully equipped training gym to build strength, endurance and climbing-specific technique.',
      icon: 'gym',
      order: 3
    },
    {
      name: 'Professional Instruction',
      description: 'Learn from experienced climbers and improve your technique with personalized and group classes.',
      icon: 'instructor',
      order: 4
    },
    {
      name: 'Yoga & Flexibility',
      description: 'Complement your climbing with yoga classes focused on flexibility, balance and muscle recovery.',
      icon: 'yoga',
      order: 5
    }
  ]
};

// ============ OFFERINGS ============
const offerings = {
  es: [
    {
      name: 'Membresías Mensuales',
      description: 'Acceso ilimitado a todas las instalaciones con planes mensuales flexibles. Incluye boulder, vías y gimnasio.',
      icon: 'memberships',
      link: '#',
      order: 1
    },
    {
      name: 'Pases Diarios',
      description: 'Pruébanos con un pase de un día que incluye alquiler de equipo básico. Perfecto para visitantes.',
      icon: 'day-passes',
      link: '#',
      order: 2
    },
    {
      name: 'Alquiler de Equipo',
      description: 'Alquila equipo de escalada de alta calidad: pies de gato, arneses, magnesio y más.',
      icon: 'equipment',
      link: '#',
      order: 3
    },
    {
      name: 'Entrenamiento Personal',
      description: 'Coaching individual personalizado para alcanzar tus objetivos de escalada más rápido.',
      icon: 'personal-training',
      link: '#',
      order: 4
    },
    {
      name: 'Eventos Privados',
      description: 'Reserva nuestras instalaciones para cumpleaños, team building o eventos corporativos especiales.',
      icon: 'private-events',
      link: '#',
      order: 5
    }
  ],
  en: [
    {
      name: 'Monthly Memberships',
      description: 'Unlimited access to all facilities with flexible monthly plans. Includes bouldering, routes and gym.',
      icon: 'memberships',
      link: '#',
      order: 1
    },
    {
      name: 'Day Passes',
      description: 'Try us out with a single day pass including basic equipment rental. Perfect for visitors.',
      icon: 'day-passes',
      link: '#',
      order: 2
    },
    {
      name: 'Equipment Rental',
      description: 'Rent high-quality climbing gear: shoes, harnesses, chalk and more.',
      icon: 'equipment',
      link: '#',
      order: 3
    },
    {
      name: 'Personal Training',
      description: 'Personalized one-on-one coaching to reach your climbing goals faster.',
      icon: 'personal-training',
      link: '#',
      order: 4
    },
    {
      name: 'Private Events',
      description: 'Book our facility for birthdays, team building, or special corporate events.',
      icon: 'private-events',
      link: '#',
      order: 5
    }
  ]
};

// ============ SERVICES ============
const services = {
  es: [
    {
      name: 'Clases para Principiantes',
      description: 'Perfecto para los nuevos en la escalada. Aprende lo básico en un ambiente de apoyo con instructores experimentados.',
      icon: 'beginner',
      order: 1
    },
    {
      name: 'Entrenamiento Avanzado',
      description: 'Lleva tus límites más allá con técnicas avanzadas, coaching personalizado y planes de entrenamiento estructurados.',
      icon: 'pro-training',
      order: 2
    },
    {
      name: 'Programas Infantiles',
      description: 'Actividades de escalada seguras y divertidas diseñadas específicamente para niños de 4 a 14 años.',
      icon: 'kids',
      order: 3
    },
    {
      name: 'Sesiones Grupales',
      description: 'Escala con amigos o únete a nuestras sesiones grupales de la comunidad. Ambiente social y motivador.',
      icon: 'groups',
      order: 4
    },
    {
      name: 'Tienda Pro',
      description: 'Consigue todo tu equipo de escalada en nuestra tienda: pies de gato, arneses, cuerdas y accesorios de las mejores marcas.',
      icon: 'shop',
      order: 5
    },
    {
      name: 'Eventos y Competiciones',
      description: 'Participa en eventos regulares, competiciones amistosas y reuniones sociales de la comunidad escaladora.',
      icon: 'events',
      order: 6
    }
  ],
  en: [
    {
      name: 'Beginner Classes',
      description: 'Perfect for those new to climbing. Learn the basics in a supportive environment with experienced instructors.',
      icon: 'beginner',
      order: 1
    },
    {
      name: 'Advanced Training',
      description: 'Push your limits with advanced techniques, personalized coaching and structured training plans.',
      icon: 'pro-training',
      order: 2
    },
    {
      name: 'Kids Programs',
      description: 'Safe and fun climbing activities designed specifically for children ages 4 to 14.',
      icon: 'kids',
      order: 3
    },
    {
      name: 'Group Sessions',
      description: 'Climb with friends or join our community group sessions. Social and motivating atmosphere.',
      icon: 'groups',
      order: 4
    },
    {
      name: 'Pro Shop',
      description: 'Get all your climbing gear at our shop: shoes, harnesses, ropes and accessories from top brands.',
      icon: 'shop',
      order: 5
    },
    {
      name: 'Events & Competitions',
      description: 'Participate in regular events, friendly competitions and social gatherings of the climbing community.',
      icon: 'events',
      order: 6
    }
  ]
};

// ============ HELPER FUNCTIONS ============
async function deleteAllFromEndpoint(endpoint, itemName) {
  try {
    console.log(`🗑️  Deleting all ${itemName}...`);
    const response = await api.get(`${endpoint}?pagination[limit]=100`);
    const items = response.data.data;

    if (!items || items.length === 0) {
      console.log(`ℹ️  No ${itemName} to delete`);
      return;
    }

    for (const item of items) {
      try {
        await api.delete(`${endpoint}/${item.documentId}`);
        console.log(`✅ Deleted: ${item.name || item.title}`);
      } catch (error) {
        console.error(`❌ Error deleting "${item.name || item.title}":`, error.response?.data || error.message);
      }
    }

    console.log(`✨ Deleted ${items.length} ${itemName}\n`);
  } catch (error) {
    console.error(`Error in deleteAll ${itemName}:`, error.response?.data || error.message);
  }
}

async function createItems(endpoint, items, locale, itemType) {
  console.log(`\n📦 Creating ${itemType} in ${locale === 'es' ? 'Spanish' : 'English'}...`);

  for (const item of items) {
    try {
      await api.post(`${endpoint}?locale=${locale}`, {
        data: {
          ...item,
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created (${locale.toUpperCase()}): ${item.name}`);
    } catch (error) {
      console.error(`❌ Error creating "${item.name}":`, error.response?.data?.error?.message || error.message);
    }
  }
}

// ============ MAIN FUNCTION ============
async function main() {
  console.log('🚀 Setting up ALL content for Rock Vibes Strapi...\n');
  console.log('═══════════════════════════════════════════════════\n');

  // Clean up existing content
  await deleteAllFromEndpoint('/climbing-services', 'climbing services');
  await deleteAllFromEndpoint('/offerings', 'offerings');
  await deleteAllFromEndpoint('/services', 'services');

  console.log('\n═══════════════════════════════════════════════════');
  console.log('🧗 CLIMBING SERVICES');
  console.log('═══════════════════════════════════════════════════');

  await createItems('/climbing-services', climbingServices.es, 'es', 'Climbing Services');
  await createItems('/climbing-services', climbingServices.en, 'en', 'Climbing Services');

  console.log('\n═══════════════════════════════════════════════════');
  console.log('🎯 OFFERINGS');
  console.log('═══════════════════════════════════════════════════');

  await createItems('/offerings', offerings.es, 'es', 'Offerings');
  await createItems('/offerings', offerings.en, 'en', 'Offerings');

  console.log('\n═══════════════════════════════════════════════════');
  console.log('⚙️  SERVICES');
  console.log('═══════════════════════════════════════════════════');

  await createItems('/services', services.es, 'es', 'Services');
  await createItems('/services', services.en, 'en', 'Services');

  console.log('\n═══════════════════════════════════════════════════');
  console.log('✨ ALL CONTENT SETUP COMPLETED!');
  console.log('═══════════════════════════════════════════════════\n');

  console.log('📊 Summary:');
  console.log('  ✅ 5 Climbing Services (ES + EN)');
  console.log('  ✅ 5 Offerings (ES + EN)');
  console.log('  ✅ 6 Services (ES + EN)');
  console.log('  ✅ 5 Real News already created (ES + EN)');
  console.log('\n💡 Next steps:');
  console.log('  1. Verify content in http://localhost:1337/admin');
  console.log('  2. Test frontend: npm run dev');
  console.log('  3. Switch languages to see translations');
  console.log('  4. Deploy to production when ready');
}

main().catch(console.error);
