import { Injectable } from '@angular/core';
import { Breed } from '../interfaces/breed';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  public breeds: Breed[] = [
    {
      id: '1',
      position: 3,
      title: 'Abyssinian',
      description_short:
        'The Abyssinian is one of the oldest and most elegant cat breeds. Known for its sleek, ticked coat and playful personality, this breed is highly active and social. Abyssinians are intelligent, curious, and form strong bonds with their owners, making them wonderful companions.',
      description:
        'The Abyssinian is a stunning and ancient breed, often referred to as the "cat of the Nile" due to its resemblance to the sacred felines depicted in Egyptian art. Its origins are believed to trace back to Ethiopia, once known as Abyssinia, which inspired the breed\'s name. Characterized by its lithe and muscular body, the Abyssinian is most famous for its unique ticked coat, where each hair is banded with different colors, creating a warm and glowing appearance. Their coat colors range from the classic ruddy to cinnamon, blue, and fawn. Their almond-shaped eyes, often golden or green, radiate intelligence and curiosity. Abyssinians are incredibly active and playful, earning them the nickname "clowns of the cat kingdom." They thrive in environments where they can explore, climb, and engage in interactive play. These cats are highly intelligent and can be taught tricks or stimulated with puzzle toys. Despite their lively nature, Abyssinians are also deeply affectionate and loyal. They form strong bonds with their families and enjoy being involved in daily activities, whether it\'s lounging nearby or chasing a toy across the room. They are not typically lap cats but love being close to their humans, often following them around the house. The breed is generally healthy, though they can be predisposed to certain genetic conditions like periodontal disease or pyruvate kinase deficiency. Regular vet checkups and proper care can help ensure a long, happy life. Overall, the Abyssinian is a perfect choice for those seeking an energetic, intelligent, and loving companion. Their blend of beauty, personality, and historical charm makes them a truly unique and cherished breed.',
      temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
      origin: 'Egypt',
      life_span_from: 14,
      life_span_to: 15,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 3,
      grooming: 1,
      intelligence: 5,
      health_issues: 2,
      social_needs: 5,
      stranger_friendly: 5,
      img: '../../../../assets/images/cats/abyssinian/abyssinian-photo-0.jpg',
    },
    {
      id: '2',
      position: 1,
      title: 'American Shorthair',
      description_short:
        'The American Shorthair is a versatile and affectionate breed known for its robust build and striking coat patterns. These cats are friendly, easygoing, and adaptable, making them perfect companions for families, singles, and seniors alike.',
      description:
        'The American Shorthair is a beloved breed with roots tracing back to the early settlers of North America. Originally prized for their exceptional hunting skills, these cats were brought aboard ships to protect valuable cargo from rodents. Over time, they evolved into the well-rounded and adaptable companions we know today. Renowned for their sturdy, muscular bodies, American Shorthairs come in a wide variety of colors and patterns, including the iconic silver tabby. Their short, dense coat requires minimal grooming, making them a low-maintenance option for busy owners. These cats are known for their calm and friendly nature, making them an excellent choice for families with children or other pets. They are affectionate without being overly demanding, striking the perfect balance between independence and companionship. The American Shorthair is also a healthy and long-lived breed, often enjoying a lifespan of 15 years or more with proper care. Their playful and intelligent personalities make them entertaining and engaging pets, whether they’re chasing a toy or lounging by your side. Overall, the American Shorthair is a versatile and dependable breed that brings joy, charm, and warmth to any household.',
      temperament: 'Active, Curious, Easy Going, Playful, Calm',
      origin: 'United States',
      life_span_from: 15,
      life_span_to: 17,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      grooming: 1,
      intelligence: 3,
      health_issues: 3,
      social_needs: 4,
      stranger_friendly: 3,
      img: '../../../../assets/images/cats/american-shorthair/american-shorthair-0.jpg',
    },
    {
      id: '3',
      position: 2,
      title: 'Bambino',
      description_short:
        'The Bambino is a unique and rare breed known for its hairless body and short legs. Playful, affectionate, and full of charm, these cats are perfect companions for those seeking an outgoing and loving pet.',
      description:
        'The Bambino is a distinctive and relatively new breed, created by crossing the Sphynx and Munchkin breeds. This combination results in a cat with a hairless body, like the Sphynx, and short legs, characteristic of the Munchkin. Despite their small stature, Bambinos are energetic, agile, and surprisingly capable climbers. Known for their affectionate and social nature, Bambinos form close bonds with their families and thrive on attention. They are playful, curious, and love to be involved in household activities. Their unique appearance, featuring large ears and expressive eyes, makes them stand out and captures the hearts of cat enthusiasts worldwide. Although they lack fur, Bambinos require regular skincare to keep their skin healthy and free from oil buildup. Weekly baths and moisturizing are essential parts of their grooming routine. Their short legs do not hinder their movement, but they often use their cleverness to adapt to their surroundings. The Bambino is an excellent choice for those seeking a rare and loving companion. Their combination of charm, intelligence, and devotion makes them a truly unforgettable breed.',
      temperament: 'Affectionate, Lively, Friendly, Intelligent',
      origin: 'United States',
      life_span_from: 12,
      life_span_to: 14,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 3,
      grooming: 1,
      intelligence: 5,
      health_issues: 1,
      social_needs: 3,
      stranger_friendly: 3,
      img: '../../../../assets/images/cats/bambino/bambino-0.jpg',
    },
    {
      id: '4',
      position: 21,
      title: 'Aegean',
      description_short:
        'The Aegean is a rare and natural breed originating from the Greek Cycladic Islands. Known for its friendly and social nature, this medium-sized cat has a striking bicolor or tricolor coat and enjoys being around people, making it a wonderful companion.',
      description:
        'The Aegean cat is a rare and ancient breed that hails from the Cycladic Islands in Greece. Believed to have developed naturally over centuries, it is one of the few breeds to originate without human intervention. These cats are medium-sized with a muscular build, almond-shaped eyes, and a beautiful bicolor or tricolor coat, often featuring white paired with shades of black, gray, or red. Aegeans are renowned for their friendly and social personalities. They form strong bonds with their families and are known to be highly affectionate and interactive. These cats thrive on attention and enjoy being part of daily household activities. Their playful and curious nature makes them a joy to have around, and they often get along well with other pets and children. As descendants of seafaring cats, Aegeans are excellent hunters and have a natural affinity for water, which is unusual among felines. They are relatively low-maintenance, with their semi-long fur requiring only occasional brushing to stay in top condition. The Aegean cat is a healthy and robust breed, well-suited for both indoor and outdoor living. Their adaptability and charm make them an ideal choice for families and individuals seeking a loving and engaging companion with a rich history.',
      temperament: 'Affectionate, Social, Intelligent, Playful, Active',
      origin: 'Greece',
      life_span_from: 9,
      life_span_to: 12,
      adaptability: 5,
      affection_level: 4,
      child_friendly: 4,
      grooming: 3,
      intelligence: 3,
      health_issues: 1,
      social_needs: 4,
      stranger_friendly: 4,
      img: '../../../../assets/images/cats/aegean/aegean-0.jpg',
    },
    {
      id: '5',
      position: 12,
      title: 'American Bobtail',
      description_short:
        'The American Bobtail is a playful and intelligent breed, recognized for its distinctive short tail and wild appearance. Known for their friendly and adaptable nature, these cats are devoted companions that bond deeply with their families.',
      description:
        'The American Bobtail is a unique and versatile breed, renowned for its striking appearance and distinctive short tail, which is the result of a natural genetic mutation. Their robust, muscular build and wild, lynx-like features give them a rugged charm that captivates cat enthusiasts worldwide. This breed is not only beautiful but also highly intelligent and playful. American Bobtails are known for their dog-like personalities; they are loyal, affectionate, and enjoy interactive play, such as fetching toys or solving puzzles. They are also excellent travel companions, as they adapt well to new environments and are generally calm under stress. American Bobtails are social cats that form strong bonds with their families. They get along well with children, other pets, and even strangers, making them a great choice for households of all sizes. Despite their energetic and playful nature, they also enjoy lounging and cuddling, striking a perfect balance between activity and relaxation. Their coat can vary in length and comes in a wide range of colors and patterns. Regular grooming helps keep their fur in great condition. As a healthy and resilient breed, American Bobtails are relatively low-maintenance, with a lifespan of 13–15 years or more. Whether you’re looking for a loyal companion or an interactive playmate, the American Bobtail’s charm, intelligence, and affectionate nature make it an exceptional choice for any cat lover.',
      temperament: 'Intelligent, Interactive, Lively, Playful, Sensitive',
      origin: 'United States',
      life_span_from: 13,
      life_span_to: 15,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      grooming: 1,
      intelligence: 5,
      health_issues: 1,
      social_needs: 3,
      stranger_friendly: 3,
      img: '../../../../assets/images/cats/american-bobtail/american-bobtail-0.jpg',
    },
    {
      id: '6',
      position: 8,
      title: 'American Curl',
      description_short:
        'The American Curl is a unique and affectionate breed known for its distinctive curled-back ears. Friendly and playful, they adapt well to families and other pets, making them ideal companions with a touch of elegance and charm.',
      description:
        'The American Curl is a remarkable breed, instantly recognizable by its signature curled-back ears. This unique feature is the result of a natural genetic mutation, first observed in California in the 1980s. Their ears, which curl backward in a graceful arc, give them a perpetually alert and curious expression, adding to their distinctive appeal. American Curls come in both long-haired and short-haired varieties, with silky coats that are low-maintenance and come in a wide range of colors and patterns. Their medium-sized, well-proportioned bodies and expressive almond-shaped eyes add to their overall elegance. Beyond their striking appearance, American Curls are known for their affectionate and sociable nature. They are gentle, playful, and form deep bonds with their families. This breed is highly adaptable and gets along well with children, other pets, and even strangers, making them a great choice for any household. American Curls retain their kitten-like playfulness well into adulthood, often engaging in games and interactive activities. They are curious and intelligent, often exploring their surroundings and seeking out attention from their owners. As a generally healthy breed with minimal grooming needs, American Curls are relatively easy to care for. Regular ear checks are important to ensure cleanliness and health, given their unique ear structure. With their blend of elegance, intelligence, and affectionate nature, the American Curl is a delightful companion that brings joy and charm to any home.',
      temperament: 'Affectionate, Lively, Friendly, Intelligent',
      origin: 'United States',
      life_span_from: 12,
      life_span_to: 16,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      grooming: 2,
      intelligence: 3,
      health_issues: 1,
      social_needs: 3,
      stranger_friendly: 3,
      img: '../../../../assets/images/cats/american-curl/american-curl-0.jpg',
    },
    {
      id: '7',
      position: 2,
      title: 'American Wirehair',
      description_short:
        'The American Wirehair is a rare and resilient breed known for its distinctive wiry coat. Friendly, adaptable, and playful, these cats are low-maintenance companions that easily fit into any household, offering a perfect mix of charm and independence.',
      description:
        "The American Wirehair is a unique and rare breed, originating in the United States in the 1960s. This breed is most famous for its springy, wiry coat, which sets it apart from other cats. The wiry texture is the result of a natural genetic mutation and can vary in density, giving each American Wirehair a one-of-a-kind look. Their coat comes in a variety of colors and patterns, adding to their distinctive charm. These cats have a medium-sized, muscular build with a round face and expressive eyes. They are highly adaptable and thrive in a variety of environments, from bustling families to quiet single-person homes. The American Wirehair is known for its friendly and easygoing personality. They are affectionate without being overly demanding and enjoy spending time with their families, whether it's playing or relaxing. Playful and curious, American Wirehairs have a strong hunting instinct, which makes them great at interactive games and exploring their surroundings. Despite their active nature, they are also independent and content to entertain themselves when needed. One of the highlights of this breed is its low-maintenance grooming requirements. Their wiry coat does not mat easily and needs only occasional brushing. Additionally, American Wirehairs are known for being a healthy and hardy breed, with few genetic health concerns. With their unique appearance, friendly disposition, and low-maintenance care, the American Wirehair is a wonderful choice for those seeking a charming and adaptable feline companion.",
      temperament:
        'Affectionate, Curious, Gentle, Intelligent, Interactive, Lively, Loyal, Playful, Sensible, Social',
      origin: 'United States',
      life_span_from: 14,
      life_span_to: 18,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      grooming: 1,
      intelligence: 3,
      health_issues: 3,
      social_needs: 3,
      stranger_friendly: 3,
      img: '../../../../assets/images/cats/american-wirehair/american-wirehair-0.jpg',
    },
    {
      id: '8',
      position: 23,
      title: 'Arabian Mau',
      description_short:
        'The Arabian Mau is a natural breed from the Arabian Peninsula, known for its athletic build and short, sleek coat. These cats are independent, intelligent, and affectionate, making them loyal companions with a touch of wild elegance.',
      description:
        'The Arabian Mau is a natural and ancient breed that originated in the deserts of the Arabian Peninsula. Adapted to thrive in harsh climates, these cats have evolved into strong, athletic, and resilient animals. Their sleek, short coats come in a variety of colors and patterns, including white, black, tabby, and calico. Their medium-to-large build, almond-shaped eyes, and expressive faces give them a regal yet approachable appearance. Known for their intelligence and independence, Arabian Maus are highly curious and energetic cats. They are excellent hunters, a trait that reflects their wild ancestry. Despite their independence, they form strong bonds with their families and enjoy spending time with their human companions. They are affectionate, playful, and get along well with children and other pets, making them ideal for family homes. Arabian Maus are low-maintenance cats, requiring minimal grooming due to their short coats. Regular playtime is essential to keep them mentally and physically stimulated, as they have a high energy level and love interactive activities. As a generally healthy and robust breed, the Arabian Mau is well-suited to both indoor and outdoor lifestyles. Their adaptability and loyalty make them a popular choice among cat enthusiasts who appreciate a mix of wild elegance and affectionate companionship.',
      temperament: 'Affectionate, Agile, Curious, Independent, Playful, Loyal',
      origin: 'United Arab Emirates',
      life_span_from: 12,
      life_span_to: 14,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      grooming: 1,
      intelligence: 3,
      health_issues: 1,
      social_needs: 3,
      stranger_friendly: 3,
      img: '../../../../assets/images/cats/arabian-mau/arabian-mau-0.jpg',
    },
    {
      id: '9',
      position: 29,
      title: 'Australian Mist',
      description_short:
        'The Australian Mist is a friendly and adaptable cat breed with a stunning spotted or marbled coat. Known for their affectionate and calm temperament, they thrive as indoor companions and are great with families and other pets.',
      description:
        'The Australian Mist is a unique and charming breed that originated in Australia during the 1970s. Developed by crossing Burmese, Abyssinian, and domestic short-haired cats, this breed boasts a distinctive spotted or marbled coat with a soft, misty appearance. Their coats come in various colors, including brown, blue, chocolate, lilac, and gold. Australian Mists are renowned for their affectionate, friendly, and gentle nature. They are social cats that love being around their human companions and adapt well to indoor living, making them an excellent choice for families or individuals with limited outdoor space. Their calm and playful demeanor makes them wonderful with children and compatible with other pets. As low-maintenance cats, Australian Mists require minimal grooming due to their short coats. They enjoy interactive play and mental stimulation, thriving in environments where they can engage with toys or spend quality time with their owners. Overall, the Australian Mist is a loving and adaptable breed, perfect for anyone seeking a loyal and easygoing feline friend.',
      temperament: 'Lively, Social, Fun-loving, Relaxed, Affectionate',
      origin: 'Australia',
      life_span_from: 12,
      life_span_to: 16,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      grooming: 3,
      intelligence: 4,
      health_issues: 1,
      social_needs: 4,
      stranger_friendly: 4,
      img: '../../../../assets/images/cats/australian-mist/australian-mist-0.jpg',
    },
    {
      id: '10',
      position: 13,
      title: 'Balinese',
      description_short:
        'The Balinese is an elegant and affectionate cat breed known for its silky, medium-length coat and striking blue eyes. Playful, intelligent, and social, they form strong bonds with their families and are perfect companions for those seeking an interactive pet.',
      description:
        'The Balinese is a graceful and highly intelligent cat breed, often admired for its sleek, medium-length coat and vibrant blue almond-shaped eyes. Originating as a naturally occurring mutation of the Siamese, the Balinese shares the Siamese’s elegance but with a softer, flowing coat. Their fur is fine and silky, and they come in a variety of pointed colors, including seal, blue, chocolate, and lilac. Known for their affectionate and outgoing personalities, Balinese cats are incredibly social and thrive on interaction with their human companions. They are playful and curious, often engaging in activities or games that challenge their intelligence. Their vocal nature and melodious meows make them great communicators, ensuring they’re always part of the family’s activities. Balinese cats are excellent for families, singles, or households with other pets, as they adapt well to a variety of environments. Despite their luxurious coats, they require minimal grooming due to their lack of an undercoat. With their blend of beauty, brains, and charm, the Balinese is an ideal choice for anyone seeking a devoted and interactive feline companion.',
      temperament: 'Affectionate, Intelligent, Playful',
      origin: 'United States',
      life_span_from: 10,
      life_span_to: 15,
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      grooming: 3,
      intelligence: 4,
      health_issues: 3,
      social_needs: 4,
      stranger_friendly: 4,
      img: '../../../../assets/images/cats/balinese/balinese-0.jpg',
    },
  ];

  constructor() {}

  public getBreeds(): Breed[] {
    return this.breeds;
  }

  public getBreed(id: string): Breed | null {
    const breed = this.getBreeds().find((item) => item.id === id) || null;
    return breed;
  }
}
