// Tour Packages Data
import kedarnathImg from '../assets/tour_images/kedarnath.jpg';
import kashmirImg from '../assets/tour_images/kashmir.jpg';

export const packagesData = [
    // Featured Packages - Top Priority
    {
        id: 101,
        title: "Kedarnath Dham Yatra",

        destination: "Kedarnath, Uttarakhand",
        duration: "5 Days / 4 Nights",
        days: 5,
        nights: 4,
        price: 18999, // Base price (Semi-Sleeper)
        sleeperPrice: 22999,
        semiSleeperPrice: 18999,
        image: kedarnathImg,
        highlights: [
            "Kedarnath Temple darshan",
            "Helicopter service available",
            "Comfortable accommodation",
            "Experienced tour guide"
        ],
        meals: {
            breakfast: "Chai & Fresh Nashta",
            lunch: "Pure Veg Meal",
            dinner: "Pure Veg Meal",
            description: "2 Times Pure Veg Meals + Morning Chai-Nashta"
        },
        accommodation: {
            type: "Premium Hotels/Guesthouses",
            description: "Clean, comfortable & well-maintained premium accommodations",
            amenities: ["Clean Rooms", "Hot Water", "Comfortable Beds", "Safe Location"]
        },
        description: "Embark on a spiritual journey to the sacred Kedarnath temple in the Himalayas.",
        inclusions: ["Premium Accommodation", "All Veg Meals", "Transfers", "Guide"],
        exclusions: ["Helicopter charges", "Personal expenses", "Donations"]
    },
    {
        id: 102,
        title: "Kashmir - Heaven on Earth",

        destination: "Srinagar, Gulmarg, Pahalgam",
        duration: "6 Days / 5 Nights",
        days: 6,
        nights: 5,
        price: 28999, // Base price (Semi-Sleeper)
        sleeperPrice: 32999,
        semiSleeperPrice: 28999,
        image: kashmirImg,
        highlights: [
            "Houseboat stay on Dal Lake",
            "Shikara ride experience",
            "Gulmarg gondola ride",
            "Mughal Gardens tour"
        ],
        meals: {
            breakfast: "Chai & Fresh Nashta",
            lunch: "Pure Veg Meal",
            dinner: "Pure Veg Meal",
            description: "2 Times Pure Veg Meals + Morning Chai-Nashta"
        },
        accommodation: {
            type: "Premium Hotels & Houseboats",
            description: "Luxury houseboats on Dal Lake & premium hotels",
            amenities: ["Lake View Rooms", "Hot Water", "Comfortable Beds", "Premium Facilities"]
        },
        description: "Experience the breathtaking beauty of Kashmir with snow-capped mountains and serene valleys.",
        inclusions: ["Premium Accommodation", "All Veg Meals", "Transfers", "Sightseeing"],
        exclusions: ["Lunch", "Adventure activities", "Personal expenses"]
    },
    {
        id: 103,
        title: "South India Temple Tour",

        destination: "Tamil Nadu & Karnataka",
        duration: "8 Days / 7 Nights",
        days: 8,
        nights: 7,
        price: 26999, // Base price (Semi-Sleeper)
        sleeperPrice: 30999,
        semiSleeperPrice: 26999,
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
        highlights: [
            "Madurai Meenakshi Temple",
            "Rameshwaram & Kanyakumari",
            "Mysore Palace visit",
            "Traditional South Indian meals"
        ],
        meals: {
            breakfast: "Chai & Fresh Nashta",
            lunch: "Pure Veg Meal",
            dinner: "Pure Veg Meal",
            description: "2 Times Pure Veg Meals + Morning Chai-Nashta"
        },
        accommodation: {
            type: "Premium Hotels",
            description: "Well-maintained premium hotels near temples",
            amenities: ["Clean Rooms", "Hot Water", "Comfortable Beds", "Temple Proximity"]
        },
        description: "Discover the rich temple heritage and culture of South India.",
        inclusions: ["Premium Accommodation", "All Veg Meals", "Transfers", "Guide"],
        exclusions: ["Entry fees", "Personal expenses", "Tips"]
    },

    // Domestic Packages
    {
        id: 1,
        title: "Goa Beach Paradise",

        destination: "Goa",
        duration: "4 Days / 3 Nights",
        days: 4,
        nights: 3,
        price: 12999,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
        highlights: [
            "Beach hopping & water sports",
            "Visit famous churches & forts",
            "Sunset cruise on Mandovi River",
            "Complimentary breakfast"
        ],
        description: "Experience the vibrant beaches, Portuguese heritage, and nightlife of Goa.",
        inclusions: ["Accommodation", "Breakfast", "Sightseeing", "Transfers"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Entry fees"]
    },
    {
        id: 2,
        title: "Kerala Backwaters",

        destination: "Kerala",
        duration: "6 Days / 5 Nights",
        days: 6,
        nights: 5,
        price: 18999,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
        highlights: [
            "Houseboat stay in Alleppey",
            "Tea plantation visit in Munnar",
            "Kathakali dance performance",
            "Ayurvedic spa session"
        ],
        description: "Explore God's Own Country with serene backwaters, lush greenery, and rich culture.",
        inclusions: ["Accommodation", "All meals", "Houseboat", "Sightseeing"],
        exclusions: ["Flight tickets", "Personal expenses"]
    },
    {
        id: 3,
        title: "Rajasthan Heritage Tour",

        destination: "Rajasthan",
        duration: "7 Days / 6 Nights",
        days: 7,
        nights: 6,
        price: 24999,
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
        highlights: [
            "Explore Jaipur, Udaipur & Jodhpur",
            "Visit majestic forts & palaces",
            "Camel safari in desert",
            "Traditional Rajasthani dinner"
        ],
        description: "Journey through the royal heritage, colorful culture, and magnificent architecture of Rajasthan.",
        inclusions: ["Accommodation", "Breakfast & Dinner", "Transfers", "Sightseeing"],
        exclusions: ["Lunch", "Entry fees", "Personal expenses"]
    },
    {
        id: 4,
        title: "Shimla Manali Delight",

        destination: "Himachal Pradesh",
        duration: "5 Days / 4 Nights",
        days: 5,
        nights: 4,
        price: 15999,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
        highlights: [
            "Scenic mountain views",
            "Visit Rohtang Pass (seasonal)",
            "Mall Road shopping",
            "Adventure activities in Solang Valley"
        ],
        description: "Enjoy the cool climate, snow-capped mountains, and adventure in Himachal Pradesh.",
        inclusions: ["Accommodation", "Breakfast", "Transfers", "Sightseeing"],
        exclusions: ["Lunch & Dinner", "Adventure activities", "Personal expenses"]
    },
    {
        id: 5,
        title: "Ladakh Adventure",

        destination: "Ladakh",
        duration: "8 Days / 7 Nights",
        days: 8,
        nights: 7,
        price: 32999,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        highlights: [
            "Visit Pangong Lake & Nubra Valley",
            "Magnetic Hill experience",
            "Monastery tours",
            "Khardung La Pass adventure"
        ],
        description: "Experience the breathtaking landscapes and unique culture of the Himalayas.",
        inclusions: ["Accommodation", "All meals", "Transfers", "Permits"],
        exclusions: ["Flight tickets", "Personal expenses", "Tips"]
    },

    // International Packages (Removed as per request)
    /*
    {
        id: 6,
        title: "Dubai Extravaganza",
        
        destination: "Dubai, UAE",
        duration: "5 Days / 4 Nights",
        days: 5,
        nights: 4,
        price: 45999,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
        highlights: [
            "Burj Khalifa visit",
            "Desert safari with BBQ dinner",
            "Dubai Mall shopping",
            "Dhow cruise on Dubai Creek"
        ],
        description: "Experience luxury, modern architecture, and Arabian culture in Dubai.",
        inclusions: ["Accommodation", "Breakfast", "Visa", "Transfers", "Sightseeing"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Entry fees"]
    },
    */
    /*
    {
        id: 7,
        title: "Thailand Paradise",
        
        destination: "Bangkok & Pattaya",
        duration: "6 Days / 5 Nights",
        days: 6,
        nights: 5,
        price: 38999,
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
        highlights: [
            "Visit Grand Palace & temples",
            "Coral Island tour with water sports",
            "Alcazar show in Pattaya",
            "Thai massage session"
        ],
        description: "Discover the vibrant culture, beautiful beaches, and delicious cuisine of Thailand.",
        inclusions: ["Accommodation", "Breakfast", "Visa", "Transfers", "Tours"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Tips"]
    },
    {
        id: 8,
        title: "Singapore Malaysia",
        
        destination: "Singapore & Kuala Lumpur",
        duration: "7 Days / 6 Nights",
        days: 7,
        nights: 6,
        price: 52999,
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
        highlights: [
            "Universal Studios Singapore",
            "Gardens by the Bay",
            "Petronas Twin Towers",
            "Genting Highlands day trip"
        ],
        description: "Explore two amazing countries with modern attractions and diverse cultures.",
        inclusions: ["Accommodation", "Breakfast", "Visa", "Transfers", "Tours"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Entry fees"]
    },
    {
        id: 9,
        title: "Bali Retreat",
        
        destination: "Bali, Indonesia",
        duration: "5 Days / 4 Nights",
        days: 5,
        nights: 4,
        price: 42999,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
        highlights: [
            "Ubud rice terraces & temples",
            "Beach clubs in Seminyak",
            "Traditional Balinese spa",
            "Tanah Lot sunset tour"
        ],
        description: "Relax in the tropical paradise with stunning beaches, temples, and culture.",
        inclusions: ["Accommodation", "Breakfast", "Visa", "Transfers", "Tours"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Activities"]
    },
    */

    // Honeymoon Packages
    {
        id: 10,
        title: "Maldives Romance",

        destination: "Maldives",
        duration: "5 Days / 4 Nights",
        days: 5,
        nights: 4,
        price: 89999,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
        highlights: [
            "Overwater villa stay",
            "Private candlelight dinner",
            "Snorkeling & diving",
            "Couple spa treatment"
        ],
        description: "Create unforgettable memories in the pristine beaches and crystal-clear waters.",
        inclusions: ["Accommodation", "All meals", "Transfers", "Water sports", "Spa"],
        exclusions: ["Flight tickets", "Personal expenses", "Premium activities"]
    },
    {
        id: 11,
        title: "Kashmir Paradise",

        destination: "Kashmir",
        duration: "6 Days / 5 Nights",
        days: 6,
        nights: 5,
        price: 28999,
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop",
        highlights: [
            "Houseboat stay on Dal Lake",
            "Shikara ride",
            "Gulmarg gondola ride",
            "Mughal Gardens visit"
        ],
        description: "Experience heaven on earth with snow-capped mountains and beautiful valleys.",
        inclusions: ["Accommodation", "Breakfast & Dinner", "Transfers", "Sightseeing"],
        exclusions: ["Lunch", "Adventure activities", "Personal expenses"]
    },
    {
        id: 12,
        title: "Mauritius Bliss",

        destination: "Mauritius",
        duration: "7 Days / 6 Nights",
        days: 7,
        nights: 6,
        price: 79999,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        highlights: [
            "Beach resort stay",
            "Ile aux Cerfs island tour",
            "Underwater sea walk",
            "Romantic sunset cruise"
        ],
        description: "Enjoy the perfect blend of beaches, culture, and adventure in this island paradise.",
        inclusions: ["Accommodation", "All meals", "Visa", "Transfers", "Tours"],
        exclusions: ["Flight tickets", "Personal expenses", "Premium activities"]
    },

    // Pilgrimage Packages
    {
        id: 13,
        title: "Char Dham Yatra",

        destination: "Uttarakhand",
        duration: "10 Days / 9 Nights",
        days: 10,
        nights: 9,
        price: 35999,
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
        highlights: [
            "Visit Yamunotri, Gangotri, Kedarnath & Badrinath",
            "Helicopter service available",
            "Comfortable accommodation",
            "Experienced tour guide"
        ],
        description: "Embark on a spiritual journey to the four sacred shrines in the Himalayas.",
        inclusions: ["Accommodation", "All meals", "Transfers", "Guide"],
        exclusions: ["Helicopter charges", "Personal expenses", "Donations"]
    },
    {
        id: 14,
        title: "Vaishno Devi Darshan",

        destination: "Jammu & Kashmir",
        duration: "3 Days / 2 Nights",
        days: 3,
        nights: 2,
        price: 8999,
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
        highlights: [
            "Mata Vaishno Devi temple visit",
            "Helicopter service option",
            "Bhairon temple darshan",
            "Comfortable hotel stay"
        ],
        description: "Seek blessings at one of India's most revered pilgrimage sites.",
        inclusions: ["Accommodation", "Breakfast", "Transfers", "Guide"],
        exclusions: ["Lunch & Dinner", "Helicopter charges", "Personal expenses"]
    },
    {
        id: 15,
        title: "Tirupati Balaji",

        destination: "Andhra Pradesh",
        duration: "2 Days / 1 Night",
        days: 2,
        nights: 1,
        price: 6999,
        image: "https://images.unsplash.com/photo-1609952048912-0a91f3e1c3a5?w=800&h=600&fit=crop",
        highlights: [
            "Special darshan at Tirumala temple",
            "Visit to other local temples",
            "Comfortable accommodation",
            "Prasadam included"
        ],
        description: "Visit the richest temple in the world and seek divine blessings.",
        inclusions: ["Accommodation", "Breakfast", "Transfers", "Darshan tickets"],
        exclusions: ["Lunch & Dinner", "Personal expenses", "Donations"]
    },

    // Group Tour Packages
    {
        id: 16,
        title: "Golden Triangle Tour",

        destination: "Delhi, Agra, Jaipur",
        duration: "6 Days / 5 Nights",
        days: 6,
        nights: 5,
        price: 19999,
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
        highlights: [
            "Taj Mahal sunrise visit",
            "Amber Fort elephant ride",
            "Red Fort & Qutub Minar",
            "Group discount available"
        ],
        description: "Explore India's most iconic destinations with a fun group.",
        inclusions: ["Accommodation", "Breakfast & Dinner", "Transfers", "Sightseeing"],
        exclusions: ["Lunch", "Entry fees", "Personal expenses"]
    },
    {
        id: 17,
        title: "South India Temple Tour",

        destination: "Tamil Nadu & Karnataka",
        duration: "8 Days / 7 Nights",
        days: 8,
        nights: 7,
        price: 26999,
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
        highlights: [
            "Madurai Meenakshi Temple",
            "Rameshwaram & Kanyakumari",
            "Mysore Palace",
            "Traditional South Indian meals"
        ],
        description: "Discover the rich temple heritage and culture of South India.",
        inclusions: ["Accommodation", "All meals", "Transfers", "Guide"],
        exclusions: ["Entry fees", "Personal expenses", "Tips"]
    },
    {
        id: 18,
        title: "Northeast Explorer",

        destination: "Assam, Meghalaya, Sikkim",
        duration: "9 Days / 8 Nights",
        days: 9,
        nights: 8,
        price: 34999,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
        highlights: [
            "Kaziranga National Park safari",
            "Living root bridges in Meghalaya",
            "Tsomgo Lake in Sikkim",
            "Tea garden visits"
        ],
        description: "Explore the unexplored beauty and diverse culture of Northeast India.",
        inclusions: ["Accommodation", "All meals", "Transfers", "Permits", "Guide"],
        exclusions: ["Flight tickets", "Personal expenses", "Safari charges"]
    }
];
