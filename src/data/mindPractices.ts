export interface MindPractice {
    id: string;
    title: string;
    category: 'meditation' | 'breathwork';
    description: string;
    benefits: string[];
    duration: string;
    level: string;
    image: string;
    icon: string;
}

export const mindPractices: MindPractice[] = [
    // Meditation Practices
    {
        id: 'mindfulness-meditation',
        title: 'Mindfulness Meditation',
        category: 'meditation',
        description: 'Learn to be fully present in the moment through guided mindfulness practice. This foundational meditation technique helps you observe your thoughts without judgment, cultivating awareness and inner peace. Perfect for reducing stress and improving focus in daily life.',
        benefits: [
            'Reduces stress and anxiety significantly',
            'Improves focus and concentration',
            'Enhances emotional regulation',
            'Promotes better sleep quality',
            'Increases self-awareness and presence'
        ],
        duration: '20-30 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
        icon: '🧘'
    },
    {
        id: 'loving-kindness-meditation',
        title: 'Loving-Kindness Meditation (Metta)',
        category: 'meditation',
        description: 'Cultivate compassion and love for yourself and others through this heart-opening meditation practice. Metta meditation systematically develops feelings of goodwill, kindness, and warmth towards all beings, starting with yourself and radiating outward.',
        benefits: [
            'Increases compassion and empathy',
            'Reduces self-criticism and negative thoughts',
            'Improves relationships and social connections',
            'Enhances positive emotions and well-being',
            'Reduces symptoms of depression and PTSD'
        ],
        duration: '15-25 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
        icon: '💖'
    },
    {
        id: 'body-scan-meditation',
        title: 'Body Scan Meditation',
        category: 'meditation',
        description: 'A systematic practice of bringing awareness to different parts of your body, releasing tension and promoting deep relaxation. This meditation helps you reconnect with physical sensations and identify areas of stress or discomfort.',
        benefits: [
            'Releases physical tension and stress',
            'Improves body awareness and mind-body connection',
            'Aids in pain management',
            'Promotes deep relaxation and better sleep',
            'Reduces symptoms of chronic illness'
        ],
        duration: '20-40 minutes',
        level: 'Beginner to Intermediate',
        image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
        icon: '🔍'
    },
    {
        id: 'guided-visualization',
        title: 'Guided Visualization',
        category: 'meditation',
        description: 'Use the power of your imagination to create positive mental states and achieve your goals. Through guided imagery, you\'ll journey to peaceful places or visualize desired outcomes, harnessing your mind\'s creative potential for healing and transformation.',
        benefits: [
            'Reduces stress and promotes relaxation',
            'Enhances creativity and problem-solving',
            'Supports goal achievement and manifestation',
            'Improves mental clarity and focus',
            'Aids in healing and recovery processes'
        ],
        duration: '15-30 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=800&q=80',
        icon: '✨'
    },
    {
        id: 'walking-meditation',
        title: 'Walking Meditation',
        category: 'meditation',
        description: 'Combine mindful movement with meditation practice. This active form of meditation transforms ordinary walking into a profound spiritual practice, helping you cultivate presence through each step and breath.',
        benefits: [
            'Combines physical activity with mindfulness',
            'Improves balance and body awareness',
            'Energizes mind and body',
            'Makes meditation accessible for active individuals',
            'Enhances connection with the present moment'
        ],
        duration: '20-45 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80',
        icon: '🚶‍♀️'
    },

    // Breathwork Practices
    {
        id: 'pranayama-basics',
        title: 'Pranayama (Yogic Breathing)',
        category: 'breathwork',
        description: 'Master the ancient art of breath control through traditional pranayama techniques. Learn foundational practices like Nadi Shodhana (alternate nostril breathing), Ujjayi (victorious breath), and Kapalabhati (skull shining breath) to balance your energy and calm your mind.',
        benefits: [
            'Balances the nervous system',
            'Increases lung capacity and respiratory health',
            'Reduces stress and anxiety',
            'Enhances energy and vitality',
            'Improves mental clarity and focus'
        ],
        duration: '15-30 minutes',
        level: 'Beginner to Advanced',
        image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
        icon: '🌬️'
    },
    {
        id: 'box-breathing',
        title: 'Box Breathing (Square Breathing)',
        category: 'breathwork',
        description: 'A powerful technique used by Navy SEALs and athletes to enhance focus and manage stress. This simple yet effective practice involves breathing in four equal parts, creating a "box" pattern that calms the nervous system and improves concentration.',
        benefits: [
            'Rapidly reduces stress and anxiety',
            'Improves focus and mental clarity',
            'Enhances emotional regulation',
            'Lowers blood pressure and heart rate',
            'Easy to practice anywhere, anytime'
        ],
        duration: '5-15 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
        icon: '⬜'
    },
    {
        id: 'breath-of-fire',
        title: 'Breath of Fire (Agni Prana)',
        category: 'breathwork',
        description: 'An energizing and detoxifying breathing technique from Kundalini Yoga. This rapid, rhythmic breath generates internal heat, cleanses the bloodstream, and awakens your inner power and vitality.',
        benefits: [
            'Increases energy and vitality',
            'Strengthens nervous system',
            'Detoxifies the body',
            'Improves lung capacity',
            'Builds core strength and discipline'
        ],
        duration: '5-15 minutes',
        level: 'Intermediate to Advanced',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
        icon: '🔥'
    },
    {
        id: '4-7-8-breathing',
        title: '4-7-8 Breathing Technique',
        category: 'breathwork',
        description: 'Dr. Andrew Weil\'s natural tranquilizer for the nervous system. This simple breathing pattern (inhale for 4, hold for 7, exhale for 8) can help you fall asleep in minutes and manage anxiety throughout the day.',
        benefits: [
            'Promotes deep relaxation and sleep',
            'Reduces anxiety and racing thoughts',
            'Lowers blood pressure',
            'Manages stress responses',
            'Simple and effective technique for beginners'
        ],
        duration: '5-10 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
        icon: '😴'
    },
    {
        id: 'wim-hof-method',
        title: 'Wim Hof Breathing Method',
        category: 'breathwork',
        description: 'A powerful breathing technique developed by "The Iceman" combining controlled hyperventilation with breath retention. This practice strengthens your immune system, increases energy, and enhances mental resilience.',
        benefits: [
            'Boosts immune system function',
            'Increases energy and reduces fatigue',
            'Enhances physical performance',
            'Improves stress resilience',
            'Alkalizes the body and increases oxygen levels'
        ],
        duration: '15-30 minutes',
        level: 'Intermediate to Advanced',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
        icon: '💨'
    }
];

export const getCategoryTitle = (category: string): string => {
    switch (category) {
        case 'meditation':
            return 'Meditation Practices';
        case 'breathwork':
            return 'Breathwork Techniques';
        default:
            return '';
    }
};

export const getPracticesByCategory = (category: 'meditation' | 'breathwork') => {
    return mindPractices.filter(practice => practice.category === category);
};

export const getPracticeById = (id: string) => {
    return mindPractices.find(practice => practice.id === id);
};
