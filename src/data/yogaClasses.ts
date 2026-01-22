export interface YogaClass {
    id: string;
    title: string;
    category: 'ladies' | 'children' | 'special';
    ageRange?: string;
    description: string;
    benefits: string[];
    duration: string;
    level: string;
    image: string;
    icon: string;
}

export const yogaClasses: YogaClass[] = [
    // For Ladies
    {
        id: 'hatha-yoga',
        title: 'Classical Hatha Yoga',
        category: 'ladies',
        description: 'A comprehensive approach to physical, mental, and spiritual well-being rooted in ancient Indian wisdom. Classical Hatha Yoga combines physical postures (asanas) with breath control (pranayama), meditation, and philosophical teachings from the Yoga Sutras of Patanjali. This practice builds strength, awareness, and harmony between Mind, Body & Soul, helping you discover your body\'s natural tendency to seek healthy habits and self-heal.',
        benefits: [
            'Develops self-awareness and self-discipline',
            'Achieves harmony between mind, body, and spirit',
            'Builds foundational strength and flexibility',
            'Activates the body\'s natural healing tendencies',
            'Perfect foundation for beginners and deepening for advanced practitioners'
        ],
        duration: '60-75 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
        icon: '🧘‍♀️'
    },
    {
        id: 'vinyasa-flow',
        title: 'Vinyasa Flow',
        category: 'ladies',
        description: 'A contemporary and dynamic style of yoga characterized by smooth, flowing transitions where poses seamlessly run together. Vinyasa synchronizes breath with movement in a rhythmic sequence, creating a moving meditation that builds both physical strength and mental focus. Each flow is thoughtfully designed to enhance the connection between body and breath while building heat and energy throughout your practice.',
        benefits: [
            'Builds cardiovascular endurance and stamina',
            'Increases full-body strength and flexibility',
            'Enhances mental focus and mindfulness',
            'Improves coordination and balance',
            'Creates a seamless flow between movement and breath'
        ],
        duration: '60-75 minutes',
        level: 'Intermediate to Advanced',
        image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80',
        icon: '🌊'
    },
    {
        id: 'yin-yoga',
        title: 'Yin Yoga',
        category: 'ladies',
        description: 'A slow-paced, meditative practice based on the ancient concept of energy pathways (Qi) flowing through the body. Yin Yoga targets deep connective tissues, fascia, and joints by holding poses for extended periods, typically 3-5 minutes. This practice opens energy blockages and stretches rarely-used muscles and ligaments, while teaching you how to breathe through both physical and mental discomfort with grace and patience.',
        benefits: [
            'Opens energy blockages and improves Qi flow',
            'Deeply stretches connective tissues and fascia',
            'Increases flexibility in joints and ligaments',
            'Teaches mindful breathing through discomfort',
            'Promotes deep relaxation and stress relief'
        ],
        duration: '75-90 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
        icon: '🌙'
    },
    {
        id: 'restorative-yoga',
        title: 'Restorative Yoga',
        category: 'ladies',
        description: 'A deeply nurturing practice entirely focused on rest, recovery, and restoration. Using supportive props and gentle positions, combined with simple breathwork techniques, Restorative Yoga helps your body and mind switch off from daily stress and tension. This is not a luxury—it\'s a necessity for modern life. Each pose is designed to create a safe space for your nervous system to deeply relax and rejuvenate.',
        benefits: [
            'Activates the parasympathetic nervous system',
            'Releases deep-seated physical and emotional tension',
            'Helps you feel balanced, centered, and calm',
            'Improves sleep quality and reduces insomnia',
            'Supports healing and recovery from illness or injury'
        ],
        duration: '60-90 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
        icon: '💆‍♀️'
    },
    {
        id: 'power-yoga',
        title: 'Power Yoga',
        category: 'ladies',
        description: 'An energetic and physically demanding style inspired by Ashtanga and Vinyasa traditions, often called "Gym Yoga" for its intense, athletic approach. Power Yoga is a vigorous full-body workout designed to create internal heat, increase heart rate, and build exceptional strength and endurance. This dynamic practice burns calories, builds muscle, and promotes detoxification through sweat while challenging both body and mind.',
        benefits: [
            'Builds exceptional strength and muscular endurance',
            'Burns calories and supports weight management',
            'Increases heart rate and cardiovascular fitness',
            'Promotes detoxification through internal heat',
            'Develops mental resilience and determination'
        ],
        duration: '60-75 minutes',
        level: 'Intermediate to Advanced',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
        icon: '💪'
    },
    {
        id: 'prenatal-postnatal',
        title: 'Prenatal & Postnatal Yoga',
        category: 'ladies',
        description: 'Specially designed therapeutic yoga for pregnant women and new mothers. Gentle, safe poses support your changing body throughout pregnancy, prepare you physically and mentally for childbirth, and aid in postpartum recovery. This nurturing practice focuses on strengthening the pelvic floor, relieving pregnancy discomfort, and creating a peaceful space for bonding with your baby.',
        benefits: [
            'Eases common pregnancy discomforts',
            'Prepares body and mind for childbirth',
            'Strengthens pelvic floor muscles',
            'Supports faster postpartum recovery',
            'Reduces anxiety and promotes mother-baby bonding'
        ],
        duration: '60 minutes',
        level: 'Beginner to Intermediate',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
        icon: '🤰'
    },
    {
        id: 'hormonal-balance',
        title: 'Yoga for Hormonal Balance',
        category: 'ladies',
        description: 'A therapeutic yoga practice specifically designed to support women\'s hormonal health through targeted asanas, breathing techniques, and relaxation practices. This specialized sequence helps regulate hormonal imbalances, reduces symptoms of PMS and menopause, and supports thyroid function through specific poses and breathwork.',
        benefits: [
            'Helps regulate hormonal imbalances naturally',
            'Reduces PMS and menopause symptoms',
            'Supports healthy thyroid function',
            'Improves mood and emotional balance',
            'Enhances overall reproductive health and well-being'
        ],
        duration: '60-75 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
        icon: '⚖️'
    },

    // For Children & Teens
    {
        id: 'kids-yoga',
        title: 'Kids Yoga',
        category: 'children',
        ageRange: 'Ages 4-8',
        description: 'A fun, playful, and imaginative introduction to yoga designed specifically for young children. Using games, stories, animal poses, and creative movement, Kids Yoga introduces the fundamentals of yoga in an engaging way that captures children\'s natural energy and curiosity. This practice helps develop body awareness, coordination, and healthy habits from an early age.',
        benefits: [
            'Develops body awareness and coordination',
            'Improves concentration and focus',
            'Builds confidence and self-esteem',
            'Enhances creativity and imagination',
            'Establishes healthy movement habits early in life'
        ],
        duration: '30-45 minutes',
        level: 'Beginner',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
        icon: '🧒'
    },
    {
        id: 'tween-yoga',
        title: 'Tween/Youth Yoga',
        category: 'children',
        ageRange: 'Ages 9-12',
        description: 'Age-appropriate yoga practice designed to help tweens navigate the challenges of pre-adolescence. This class combines physical practice with mindfulness techniques to help manage academic stress, build physical strength and flexibility, and develop healthy coping mechanisms for emotional changes during this important developmental stage.',
        benefits: [
            'Manages academic stress and pressure',
            'Builds physical strength and confidence',
            'Develops emotional regulation skills',
            'Improves focus and academic performance',
            'Enhances social skills and peer relationships'
        ],
        duration: '45-60 minutes',
        level: 'Beginner to Intermediate',
        image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80',
        icon: '👦'
    },
    {
        id: 'teen-yoga',
        title: 'Teen Yoga',
        category: 'children',
        ageRange: 'Ages 13+',
        description: 'Yoga specifically tailored for teenagers, addressing their unique physical and emotional needs during this transformative time. This practice combines dynamic movement with mindfulness and breathing techniques to help teens manage stress, develop positive body image, build resilience, and cultivate tools for lifelong well-being during this crucial developmental period.',
        benefits: [
            'Manages stress, anxiety, and academic pressure',
            'Develops positive body image and self-acceptance',
            'Builds emotional resilience and coping skills',
            'Enhances athletic performance and prevents injuries',
            'Provides tools for lifelong mental wellness'
        ],
        duration: '60 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80',
        icon: '🎓'
    },
    {
        id: 'family-yoga',
        title: 'Family Yoga',
        category: 'children',
        ageRange: 'All Ages',
        description: 'A joyful, interactive class where families practice yoga together, creating meaningful connections and building healthy habits as a unit. Through partner poses, group activities, and playful sequences suitable for all ages and abilities, Family Yoga strengthens family bonds while introducing everyone to the benefits of yoga in a fun, inclusive environment.',
        benefits: [
            'Strengthens family bonds and communication',
            'Creates quality time and shared experiences',
            'Promotes healthy lifestyle for the whole family',
            'Builds trust through partner poses',
            'Fun and inclusive for all ages and abilities'
        ],
        duration: '45-60 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
        icon: '👨‍👩‍👧‍👦'
    },

    // By Special Focus
    {
        id: 'beginners-yoga',
        title: "Beginner's Yoga",
        category: 'special',
        description: 'A welcoming, comprehensive introduction to yoga designed for those new to the practice. This foundational class teaches fundamental poses, proper alignment, basic breathing techniques, and yoga philosophy in a supportive, non-judgmental environment. Learn at your own pace with clear instructions and modifications to build confidence and create a sustainable personal practice.',
        benefits: [
            'Learn yoga basics in a safe, supportive environment',
            'Build strength and flexibility gradually',
            'Understand proper alignment to prevent injury',
            'Develop confidence in your practice',
            'Create a strong foundation for advancement'
        ],
        duration: '60 minutes',
        level: 'Beginner',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
        icon: '🌱'
    },
    {
        id: 'stress-relief',
        title: 'Stress Relief & Relaxation Yoga',
        category: 'special',
        description: 'A gentle, therapeutic practice specifically focused on releasing tension and promoting deep relaxation through calming breathwork, gentle stretches, and guided meditation. This class activates your body\'s relaxation response, helping you switch off from daily pressures and restore balance to your nervous system. Perfect for anyone experiencing stress, anxiety, or overwhelm.',
        benefits: [
            'Reduces stress and anxiety significantly',
            'Lowers blood pressure and heart rate',
            'Improves sleep quality and duration',
            'Calms the mind and nervous system',
            'Enhances overall sense of well-being and peace'
        ],
        duration: '60-75 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
        icon: '🕊️'
    },
    {
        id: 'strength-tone',
        title: 'Strength & Tone Yoga',
        category: 'special',
        description: 'A power-focused practice that builds lean muscle, increases stamina, and sculpts the entire body. This challenging class combines sustained holds, dynamic sequences, and core-strengthening exercises to create definition and build functional strength. Using your body weight as resistance, you\'ll develop long, lean muscles while improving endurance and boosting metabolism.',
        benefits: [
            'Builds lean muscle mass throughout the body',
            'Increases core strength and stability',
            'Tones and sculpts with functional movement',
            'Boosts metabolism and energy levels',
            'Improves muscular endurance and stamina'
        ],
        duration: '60-75 minutes',
        level: 'Intermediate to Advanced',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        icon: '🏋️‍♀️'
    },
    {
        id: 'flexibility-mobility',
        title: 'Flexibility & Mobility Yoga',
        category: 'special',
        description: 'A focused practice designed to improve range of motion, increase flexibility, and enhance joint health through targeted stretching and mindful movement. This class systematically works through the entire body, releasing muscular tension, improving joint mobility, and helping you move with greater ease and freedom in daily life and athletic pursuits.',
        benefits: [
            'Significantly increases overall flexibility',
            'Improves joint mobility and health',
            'Reduces risk of injury in sports and daily activities',
            'Enhances athletic and yoga performance',
            'Relieves chronic muscle tension and stiffness'
        ],
        duration: '60 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&q=80',
        icon: '🤸‍♀️'
    },
    {
        id: 'sound-therapy',
        title: 'Sound Therapy & Meditation',
        category: 'special',
        description: 'An immersive healing experience using specific sound frequencies that impact the mind and body on a cellular level. Through singing bowls, gongs, and other therapeutic instruments, sound vibrations promote deep relaxation, release blocked energy, and restore emotional balance. This practice assists in healing major organs and tissues while cultivating profound states of meditation and inner peace.',
        benefits: [
            'Promotes deep relaxation and stress relief',
            'Enhances mental alertness and clarity',
            'Assists in healing organs and tissues',
            'Releases blocked energy and trauma',
            'Restores emotional balance and inner peace'
        ],
        duration: '45-60 minutes',
        level: 'All Levels',
        image: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&q=80',
        icon: '🔔'
    }
];

export const getCategoryTitle = (category: string): string => {
    switch (category) {
        case 'ladies':
            return 'For Ladies';
        case 'children':
            return 'For Children & Teens';
        case 'special':
            return 'By Special Focus';
        default:
            return '';
    }
};

export const getClassesByCategory = (category: 'ladies' | 'children' | 'special') => {
    return yogaClasses.filter(yogaClass => yogaClass.category === category);
};

export const getClassById = (id: string) => {
    return yogaClasses.find(yogaClass => yogaClass.id === id);
};
