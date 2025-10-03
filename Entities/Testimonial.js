// --- IMPORTANT ---
// This is a MOCK data file. It simulates fetching testimonials from a database.
// In a real application, this function would make an API call to a backend.

const mockTestimonials = [
  {
    id: 't1',
    customer_name: 'The Sharma Family',
    review_text:
      'The Griha Pravesh puja was conducted beautifully. The pandit was very knowledgeable and patient, explaining all the rituals. Everything was handled professionally.',
    rating: 5,
    puja_performed: 'Griha Pravesh Puja',
  },
  {
    id: 't2',
    customer_name: 'Anjali P.',
    review_text:
      'We booked the Diwali Puja package, and it was a divine experience. All the samagri was provided, and the setup was authentic. Highly recommended!',
    rating: 5,
    puja_performed: 'Diwali Puja',
  },
  {
    id: 't3',
    customer_name: 'Rajesh Kumar',
    review_text:
      'A very professional and authentic service for our son\'s Mundan ceremony. The team made sure everything went smoothly. Thank you for making it so memorable.',
    rating: 5,
    puja_performed: 'Mundan Ceremony',
  },
  {
    id: 't4',
    customer_name: 'Priya & Mohan',
    review_text:
      'The Satyanarayan Puja at our home was wonderful. The pandit arrived on time, and the whole process was seamless. We felt truly blessed.',
    rating: 4,
    puja_performed: 'Satyanarayan Puja',
  },
  {
    id: 't5',
    customer_name: 'Vikram Singh',
    review_text:
      'Booking was easy, and the service was excellent. The Ganesh Puja for our new office brought such positive energy. Will definitely use their services again.',
    rating: 5,
    puja_performed: 'Ganesh Puja',
  },
];

export const Testimonial = {
  // Simulates fetching all testimonials
  list: async (orderBy = '', limit = null) => {
    console.log('MOCK: Fetching all testimonials...');
    let results = mockTestimonials;
    if (limit) {
      results = results.slice(0, limit);
    }
    return Promise.resolve(results);
  },
};