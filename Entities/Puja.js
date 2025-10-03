// --- IMPORTANT ---
// This is a MOCK data file. It simulates fetching data from a database.
// It allows the website to run and display content without a real backend connection.
// In a real application, these functions would make API calls to Supabase or another backend.

const mockPujas = [
  {
    id: '1',
    name: 'Satyanarayan Puja',
    sanskrit_name: 'सत्यनारायण पूजा',
    description:
      'A ritual to worship Lord Vishnu for truth, happiness, and prosperity.',
    price: 151,
    duration: '2-3 Hours',
    popular: true,
    category: 'personal',
    inclusions: ['Pandit Ji', 'Puja Samagri', 'Havan', 'Aarti'],
    benefits:
      'Promotes overall well-being and success in life. Removes obstacles and brings peace to the household.',
    importance:
      'Performed to seek blessings from Lord Vishnu, this puja is often conducted on special occasions or to fulfill vows.',
  },
  {
    id: '2',
    name: 'Griha Pravesh Puja',
    sanskrit_name: 'गृह प्रवेश पूजा',
    description: 'A housewarming ceremony to purify the new home and invite blessings.',
    price: 201,
    duration: '3-4 Hours',
    popular: true,
    category: 'personal',
    inclusions: ['Vastu Shanti', 'Ganesh Puja', 'Navagraha Homa', 'Kalash Sthapana'],
    benefits: 'Cleanses the new space of negative energies and protects the home and its occupants.',
    importance: 'Ensures the new home is blessed by the deities, bringing prosperity, peace, and happiness to the family.',
  },
  {
    id: '3',
    name: 'Ganesh Puja',
    sanskrit_name: 'गणेश पूजा',
    description: 'Worship of Lord Ganesha to remove obstacles and ensure success.',
    price: 101,
    duration: '1-2 Hours',
    popular: true,
    category: 'festival',
    inclusions: ['Ganesh Idol', 'Modak Offering', 'Durva Grass', 'Aarti'],
    benefits: 'Brings good fortune, wisdom, and prosperity. Ideal for starting new ventures.',
    importance: 'Lord Ganesha is the remover of obstacles and the first deity to be worshipped in any Hindu ritual.',
  },
  {
    id: '4',
    name: 'Diwali Puja',
    sanskrit_name: 'दिवाली पूजा',
    description: 'Worship of Goddess Lakshmi and Lord Ganesha for wealth and prosperity.',
    price: 251,
    duration: '2-3 Hours',
    popular: true,
    category: 'festival',
    inclusions: ['Lakshmi-Ganesh Idols', 'All Puja Samagri', 'Diya Lighting', 'Prasad'],
    benefits: 'Invites wealth, prosperity, and success into the home and business.',
    importance: 'The most important ritual of the Diwali festival, celebrating the victory of light over darkness.',
  },
  {
    id: '5',
    name: 'Navagraha Shanti Puja',
    sanskrit_name: 'नवग्रह शांति पूजा',
    description: 'A puja to pacify the nine celestial bodies and mitigate their negative effects.',
    price: 301,
    duration: '4-5 Hours',
    popular: false,
    category: 'healing',
    inclusions: ['Navagraha Homa', 'Samagri for all 9 planets', 'Pandit Ji'],
    benefits: 'Reduces malefic effects of planets, improves health, and brings peace.',
    importance: 'The planets (Grahas) are believed to influence human lives. This puja helps balance their energies.',
  },
    {
    id: '6',
    name: 'Mundan Ceremony',
    sanskrit_name: 'मुण्डन संस्कार',
    description: 'The first haircut ceremony for a child, a sacred Hindu tradition.',
    price: 121,
    duration: '1.5-2 Hours',
    popular: false,
    category: 'personal',
    inclusions: ['Pandit Ji for rituals', 'Samagri for Havan', 'Blessings ceremony'],
    benefits: 'Believed to rid the child of past life negativity and promote a long, healthy life.',
    importance: 'One of the sixteen "samskaras" or sacraments in Hinduism, marking an important milestone.',
  },
];

export const Puja = {
  // Simulates fetching all pujas
  list: async (orderBy = '', limit = null) => {
    console.log('MOCK: Fetching all pujas...');
    return Promise.resolve(mockPujas);
  },

  // Simulates fetching a single puja by its ID
  get: async (id) => {
    console.log(`MOCK: Fetching puja with id: ${id}`);
    const puja = mockPujas.find((p) => p.id == id);
    return Promise.resolve(puja);
  },

  // Simulates filtering pujas based on criteria (e.g., popular)
  filter: async (criteria = {}, orderBy = '', limit = 4) => {
    console.log('MOCK: Filtering pujas with criteria:', criteria);
    let results = mockPujas;
    if (criteria.popular) {
      results = mockPujas.filter((p) => p.popular === true);
    }
    // Apply limit if provided
    if (limit) {
      results = results.slice(0, limit);
    }
    return Promise.resolve(results);
  },
};