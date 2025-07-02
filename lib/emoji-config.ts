export interface EmojiConfig {
  [category: string]: string[];
}

export interface EmojiSettings {
  useEmojis: boolean;
  intensity: number; // 1-3
  categorySpecific: boolean;
}

export const CATEGORY_EMOJIS: EmojiConfig = {
  electronics: ['⚡', '💡', '🔋', '📱', '💻', '⌚', '🎧', '📺', '🔌', '💾', '🖥️', '📟'],
  clothing: ['👗', '👔', '👕', '👖', '👟', '👑', '💎', '✨', '👠', '🧥', '👜', '🕶️'],
  home: ['🏠', '🛏️', '🪑', '🛋️', '💡', '🌿', '🧹', '🔧', '🏡', '🚪', '🪟', '🛁'],
  beauty: ['💄', '💅', '✨', '🌟', '💖', '👸', '💆', '🌸', '💋', '🧴', '🪞', '🌺'],
  sports: ['⚽', '🏀', '🎾', '🏃', '💪', '🏆', '🥇', '⭐', '🏋️', '🚴', '🏊', '⛹️'],
  automotive: ['🚗', '🏎️', '⚡', '🔧', '⛽', '🛞', '💨', '🚀', '🛣️', '🚙', '🏁', '🔩'],
  books: ['📚', '📖', '✍️', '🖊️', '📝', '🎓', '💡', '🌟', '📄', '📑', '🔖', '📰'],
  toys: ['🧸', '🎮', '🎲', '🎯', '🎪', '🎨', '⭐', '🌈', '🪀', '🎭', '🎪', '🎠'],
  health: ['💊', '🏥', '💚', '🌿', '💪', '❤️', '✨', '🌟', '🩺', '💉', '🧘', '🏃'],
  business: ['💼', '📊', '💰', '📈', '🎯', '⭐', '💡', '🚀', '📋', '💳', '🏢', '📞'],
  food: ['🍕', '🍔', '🍰', '☕', '🍷', '🥘', '🍯', '⭐', '🍎', '🥗', '🍜', '🧁'],
  travel: ['✈️', '🧳', '🗺️', '🏖️', '🏔️', '🎒', '📸', '🌟', '🚢', '🏨', '🎫', '🌍'],
  pets: ['🐕', '🐱', '🐾', '❤️', '🥰', '🎾', '🦴', '✨', '🐶', '🐈', '🏠', '🥎'],
  jewelry: ['💎', '👑', '✨', '💍', '⭐', '🌟', '💫', '💖', '👸', '💄', '🔮', '💝'],
  art: ['🎨', '🖌️', '🖼️', '✨', '🌈', '💫', '⭐', '🎭', '🖍️', '🎪', '🌟', '💡'],
  music: ['🎵', '🎶', '🎸', '🎤', '🔊', '🎧', '⭐', '🌟', '🎹', '🥁', '🎺', '🎻'],
  other: ['⭐', '✨', '🌟', '💫', '🔥', '💯', '👍', '💖', '🎉', '🚀', '💎', '🏆']
};

export const EMOJI_INTENSITY_CONFIGS = {
  1: { // Minimal
    count: { min: 3, max: 5 },
    description: 'Мінімум (3-5)',
    pattern: 'Only key benefits with ✅ and quality indicators ⭐'
  },
  2: { // Standard
    count: { min: 8, max: 12 },
    description: 'Стандарт (8-12)',
    pattern: 'Structured: ✅ Features, 💰 Price, 🚚 Delivery, ⭐ Quality'
  },
  3: { // Maximum
    count: { min: 15, max: 20 },
    description: 'Максимум (15-20+)',
    pattern: 'High visual impact with category-specific emojis throughout'
  }
};

export function generateEmojiInstruction(
  useEmojis: boolean, 
  intensity: number, 
  category: string
): string {
  if (!useEmojis) {
    return `
EMOJI INSTRUCTION: NO EMOJIS
- Generate clean text without any emoji symbols
- Focus on compelling copy without visual elements
- Use strong action words and persuasive language instead
`;
  }

  const categoryEmojis = CATEGORY_EMOJIS[category?.toLowerCase()] || CATEGORY_EMOJIS.other;
  const config = EMOJI_INTENSITY_CONFIGS[intensity as keyof typeof EMOJI_INTENSITY_CONFIGS] || EMOJI_INTENSITY_CONFIGS[2];

  return `
EMOJI INSTRUCTION: Use ${config.description} emojis strategically
- Target: ${config.count.min}-${config.count.max} emojis total
- Pattern: ${config.pattern}
- Category-specific emojis: ${categoryEmojis.slice(0, 8).join(' ')}

STANDARD EMOJI PATTERNS:
- ✅ for each key benefit/feature
- 💰 for pricing/value propositions  
- 🚚 for delivery/shipping
- ⭐ for quality/ratings
- 🔥 for urgency/popularity
- 💯 for guarantees/trust
- ${categoryEmojis.slice(0, 4).join(' ')} for category-specific appeal

INTENSITY LEVEL ${intensity} GUIDELINES:
${intensity === 1 ? '- Use sparingly, only for most important points\n- Focus on ✅ and ⭐ primarily' : ''}
${intensity === 2 ? '- Balanced approach with structured emoji placement\n- Use standard patterns consistently' : ''}
${intensity === 3 ? '- High visual impact with emojis throughout\n- Use category-specific emojis liberally\n- Create scannable, engaging content' : ''}

Make content visually appealing and conversion-focused!
`;
}

export function getEmojiPreview(useEmojis: boolean, intensity: number, category: string): string {
  if (!useEmojis) return 'Без емодзі (тільки текст)';
  
  const categoryEmojis = CATEGORY_EMOJIS[category?.toLowerCase()] || CATEGORY_EMOJIS.other;
  
  switch (intensity) {
    case 1:
      return `Мінімум (3-5): ✅ Якість ${categoryEmojis[0] || '⭐'}`;
    case 2:
      return `Стандарт (8-12): ✅ Якість 💰 Ціна 🚚 Доставка ${categoryEmojis[0] || '⭐'}`;
    case 3:
      return `Максимум (15-20+): ✅ Якість 💰 Ціна 🚚 Доставка ${categoryEmojis[0] || '⭐'} 🔥 Топ 💯 Гарантія 🎯 ${categoryEmojis[1] || '💎'}`;
    default:
      return 'Стандартні емодзі';
  }
}