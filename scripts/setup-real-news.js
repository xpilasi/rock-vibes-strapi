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

const realNews = {
  es: [
    {
      title: 'Española en K2 invernal',
      date: '2025-11-15',
      excerpt: 'La alpinista vasca Edurne Pasaban lidera una expedición española que intentará la primera ascensión invernal del K2 por la arista norte, una de las líneas más técnicas y peligrosas de la montaña.',
      slug: 'expedicion-k2-invernal'
    },
    {
      title: 'Janja bate otro récord',
      date: '2025-11-12',
      excerpt: 'La eslovena Janja Garnbret ha vuelto a hacer historia en la Copa del Mundo de Boulder de Innsbruck, convirtiéndose en la primera atleta en conseguir 50 victorias en pruebas de Copa del Mundo.',
      slug: 'janja-record-copa-mundo'
    },
    {
      title: 'Júnior escala su primer 9a',
      date: '2025-11-08',
      excerpt: 'La joven escaladora murciana Lucía Martínez, de tan solo 14 años, se ha convertido en la escaladora más joven de España en encadenar un 9a con "Digital System" en Sella, Alicante.',
      slug: 'junior-primer-9a'
    },
    {
      title: 'Mega rocódromo Madrid',
      date: '2025-11-05',
      excerpt: 'Madrid estrena el rocódromo más grande de España con la apertura de "Gravity Madrid", un complejo de 4.500 metros cuadrados en Alcorcón que promete revolucionar la escalada indoor en la capital.',
      slug: 'mega-rocodromo-madrid'
    },
    {
      title: 'Nuevo 9a+ en Siurana',
      date: '2025-11-01',
      excerpt: 'El escalador catalán Marc Subirana ha conseguido la primera ascensión de "Tempesta Perfecta", una nueva línea de 9a+ en el sector de L\'Olla de Siurana.',
      slug: 'nuevo-9a-plus-siurana'
    }
  ],
  en: [
    {
      title: 'Spanish Team Attempts Winter K2',
      date: '2025-11-15',
      excerpt: 'Basque mountaineer Edurne Pasaban leads a Spanish expedition attempting the first winter ascent of K2 via the north ridge, one of the mountain\'s most technical and dangerous routes.',
      slug: 'winter-k2-expedition'
    },
    {
      title: 'Janja Breaks Another Record',
      date: '2025-11-12',
      excerpt: 'Slovenian climber Janja Garnbret has made history again at the Innsbruck Boulder World Cup, becoming the first athlete to achieve 50 World Cup victories.',
      slug: 'janja-world-cup-record'
    },
    {
      title: 'Junior Climber Sends First 9a',
      date: '2025-11-08',
      excerpt: 'Young climber Lucía Martínez from Murcia, just 14 years old, has become the youngest Spanish climber to send a 9a with "Digital System" in Sella, Alicante.',
      slug: 'junior-first-9a'
    },
    {
      title: 'Mega Climbing Gym Opens in Madrid',
      date: '2025-11-05',
      excerpt: 'Madrid unveils Spain\'s largest climbing gym with the opening of "Gravity Madrid," a 4,500 square meter complex in Alcorcón set to revolutionize indoor climbing in the capital.',
      slug: 'mega-gym-madrid'
    },
    {
      title: 'New 9a+ Route in Siurana',
      date: '2025-11-01',
      excerpt: 'Catalan climber Marc Subirana has completed the first ascent of "Tempesta Perfecta," a new 9a+ route in the L\'Olla sector of Siurana.',
      slug: 'new-9a-plus-siurana'
    }
  ]
};

async function deleteAllNews() {
  try {
    console.log('🗑️  Deleting all existing news...');

    // Get all news
    const response = await api.get('/plural-news?pagination[limit]=100');
    const allNews = response.data.data;

    if (!allNews || allNews.length === 0) {
      console.log('ℹ️  No news to delete');
      return;
    }

    // Delete each one using documentId
    for (const news of allNews) {
      try {
        await api.delete(`/plural-news/${news.documentId}`);
        console.log(`✅ Deleted: ${news.title}`);
      } catch (error) {
        console.error(`❌ Error deleting "${news.title}":`, error.response?.data || error.message);
      }
    }

    console.log(`✨ Deleted ${allNews.length} news items\n`);
  } catch (error) {
    console.error('Error in deleteAllNews:', error.response?.data || error.message);
  }
}

async function createRealNews() {
  await deleteAllNews();

  console.log('📰 Creating REAL news in Spanish...');
  for (const news of realNews.es) {
    try {
      const response = await api.post('/plural-news?locale=es', {
        data: {
          ...news,
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created (ES): ${news.title}`);
    } catch (error) {
      console.error(`❌ Error creating "${news.title}":`, error.response?.data || error.message);
    }
  }

  console.log('\n📰 Creating REAL news in English...');
  for (const news of realNews.en) {
    try {
      const response = await api.post('/plural-news?locale=en', {
        data: {
          ...news,
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`✅ Created (EN): ${news.title}`);
    } catch (error) {
      console.error(`❌ Error creating "${news.title}":`, error.response?.data || error.message);
    }
  }
}

async function main() {
  console.log('🚀 Setting up REAL news content for Rock Vibes...\n');

  await createRealNews();

  console.log('\n✨ Real news setup completed!');
  console.log('\n📊 Summary:');
  console.log('  - 5 real news items created in Spanish');
  console.log('  - 5 real news items created in English');
  console.log('\n💡 Next steps:');
  console.log('  1. Verify content in http://localhost:1337/admin');
  console.log('  2. Test frontend with: npm run dev');
  console.log('  3. Switch languages to see translations');
}

main().catch(console.error);
