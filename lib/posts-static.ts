// Static posts data for export build
export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readingTime: number
}

const postsData = {
  en: [
    {
      slug: "how-to-pray-like-jesus",
      title: "How to Pray Like Jesus",
      date: "2024-01-15",
      excerpt: "Learn to pray as Jesus taught, with simplicity and power.",
      tags: ["prayer", "jesus", "faith"],
      readingTime: 5,
      content: `Praying is an essential practice to strengthen your connection with God. Jesus left us a clear model of prayer in the Lord's Prayer.

## How to Pray Like Jesus

1. **Start with Gratitude:** Thank God for daily blessings.
2. **Be Sincere:** Talk to God as you would talk to a close friend.
3. **Ask with Faith:** Trust that God will hear and answer your prayers.

Share this post with your friends and family!`,
    },
    {
      slug: "importance-of-bible-reading",
      title: "The Importance of Bible Reading",
      date: "2024-01-14",
      excerpt: "Discover how Bible reading can transform your spiritual life.",
      tags: ["bible", "spirituality", "faith"],
      readingTime: 4,
      content: `The Bible is an inexhaustible source of wisdom and guidance.

## Tips for Better Bible Reading

1. **Establish a Routine:** Read the Bible daily, even if it's just a few verses.
2. **Reflection:** Meditate on the meaning of the texts.
3. **Practical Application:** Try to apply the teachings in your daily life.

Share this post with your friends and family!`,
    },
    {
      slug: "finding-peace-in-chaos",
      title: "Finding Peace in a Chaotic World",
      date: "2024-01-13",
      excerpt: "Practical strategies to find inner peace in today's hectic world.",
      tags: ["peace", "mindfulness", "spirituality"],
      readingTime: 6,
      content: `In today's fast-paced world, finding peace can seem like an impossible task.

## Finding Inner Peace

1. **Daily Prayer:** Set aside time each day for quiet prayer and reflection.
2. **Scripture Meditation:** Focus on verses about peace and God's promises.
3. **Gratitude Practice:** Regularly count your blessings and express thanks to God.

Remember, Jesus said: "Peace I leave with you; my peace I give you." (John 14:27)`,
    },
  ],
  pt: [
    {
      slug: "how-to-pray-like-jesus",
      title: "Como Orar Como Jesus",
      date: "2024-01-15",
      excerpt: "Aprenda a orar como Jesus ensinou, com simplicidade e poder.",
      tags: ["oração", "jesus", "fé"],
      readingTime: 5,
      content: `Orar é uma prática essencial para fortalecer sua conexão com Deus. Jesus nos deixou um modelo claro de oração no Pai Nosso.

## Como Orar Como Jesus

1. **Comece com Gratidão:** Agradeça a Deus pelas bênçãos diárias.
2. **Seja Sincero:** Fale com Deus como falaria com um amigo próximo.
3. **Peça com Fé:** Confie que Deus ouvirá e responderá suas orações.

Compartilhe este post com seus amigos e familiares!`,
    },
    {
      slug: "importance-of-bible-reading",
      title: "A Importância da Leitura Bíblica",
      date: "2024-01-14",
      excerpt: "Descubra como a leitura bíblica pode transformar sua vida espiritual.",
      tags: ["bíblia", "espiritualidade", "fé"],
      readingTime: 4,
      content: `A Bíblia é uma fonte inesgotável de sabedoria e orientação.

## Dicas para uma Melhor Leitura Bíblica

1. **Estabeleça uma Rotina:** Leia a Bíblia diariamente, mesmo que sejam poucos versículos.
2. **Reflexão:** Medite sobre o significado dos textos.
3. **Aplicação Prática:** Tente aplicar os ensinamentos no seu dia a dia.

Compartilhe este post com seus amigos e familiares!`,
    },
    {
      slug: "finding-peace-in-chaos",
      title: "Encontrando Paz em um Mundo Caótico",
      date: "2024-01-13",
      excerpt: "Estratégias práticas para encontrar paz interior no mundo agitado de hoje.",
      tags: ["paz", "atenção plena", "espiritualidade"],
      readingTime: 6,
      content: `No mundo acelerado de hoje, encontrar paz pode parecer uma tarefa impossível.

## Encontrando Paz Interior

1. **Oração Diária:** Reserve um tempo todos os dias para oração silenciosa e reflexão.
2. **Meditação nas Escrituras:** Concentre-se em versículos sobre paz e promessas de Deus.
3. **Prática de Gratidão:** Regularmente conte suas bênçãos e expresse gratidão a Deus.

Lembre-se, Jesus disse: "Deixo-vos a paz, a minha paz vos dou." (João 14:27)`,
    },
  ],
  es: [
    {
      slug: "how-to-pray-like-jesus",
      title: "Cómo Orar Como Jesús",
      date: "2024-01-15",
      excerpt: "Aprende a orar como Jesús enseñó, con simplicidad y poder.",
      tags: ["oración", "jesús", "fe"],
      readingTime: 5,
      content: `Orar es una práctica esencial para fortalecer tu conexión con Dios. Jesús nos dejó un modelo claro de oración en el Padre Nuestro.

## Cómo Orar Como Jesús

1. **Comienza con Gratitud:** Agradece a Dios por las bendiciones diarias.
2. **Sé Sincero:** Habla con Dios como hablarías con un amigo cercano.
3. **Pide con Fe:** Confía en que Dios escuchará y responderá tus oraciones.

¡Comparte esta publicación con tus amigos y familiares!`,
    },
    {
      slug: "importance-of-bible-reading",
      title: "La Importancia de la Lectura Bíblica",
      date: "2024-01-14",
      excerpt: "Descubre cómo la lectura bíblica puede transformar tu vida espiritual.",
      tags: ["biblia", "espiritualidad", "fe"],
      readingTime: 4,
      content: `La Biblia es una fuente inagotable de sabiduría y orientación.

## Consejos para una Mejor Lectura Bíblica

1. **Establece una Rutina:** Lee la Biblia diariamente, aunque sean solo unos pocos versículos.
2. **Reflexión:** Medita sobre el significado de los textos.
3. **Aplicación Práctica:** Intenta aplicar las enseñanzas en tu vida diaria.

¡Comparte esta publicación con tus amigos y familiares!`,
    },
    {
      slug: "finding-peace-in-chaos",
      title: "Encontrando Paz en un Mundo Caótico",
      date: "2024-01-13",
      excerpt: "Estrategias prácticas para encontrar paz interior en el agitado mundo de hoy.",
      tags: ["paz", "atención plena", "espiritualidad"],
      readingTime: 6,
      content: `En el mundo acelerado de hoy, encontrar paz puede parecer una tarea imposible.

## Encontrando Paz Interior

1. **Oración Diaria:** Reserva tiempo cada día para la oración silenciosa y la reflexión.
2. **Meditación en las Escrituras:** Concéntrate en versículos sobre la paz y las promesas de Dios.
3. **Práctica de Gratitud:** Regularmente cuenta tus bendiciones y expresa gratitud a Dios.

Recuerda, Jesús dijo: "La paz os dejo, mi paz os doy." (Juan 14:27)`,
    },
  ],
  de: [
    {
      slug: "how-to-pray-like-jesus",
      title: "Wie man wie Jesus betet",
      date: "2024-01-15",
      excerpt: "Lernen Sie zu beten, wie Jesus es lehrte, mit Einfachheit und Kraft.",
      tags: ["gebet", "jesus", "glaube"],
      readingTime: 5,
      content: `Beten ist eine wesentliche Praxis, um Ihre Verbindung mit Gott zu stärken. Jesus hat uns im Vaterunser ein klares Gebetsmodell hinterlassen.

## Wie man wie Jesus betet

1. **Beginnen Sie mit Dankbarkeit:** Danken Sie Gott für tägliche Segnungen.
2. **Seien Sie aufrichtig:** Sprechen Sie mit Gott, wie Sie mit einem engen Freund sprechen würden.
3. **Bitten Sie mit Glauben:** Vertrauen Sie darauf, dass Gott Ihre Gebete hört und beantwortet.

Teilen Sie diesen Beitrag mit Ihren Freunden und Ihrer Familie!`,
    },
    {
      slug: "importance-of-bible-reading",
      title: "Die Bedeutung des Bibellesens",
      date: "2024-01-14",
      excerpt: "Entdecken Sie, wie Bibellesen Ihr spirituelles Leben verändern kann.",
      tags: ["bibel", "spiritualität", "glaube"],
      readingTime: 4,
      content: `Die Bibel ist eine unerschöpfliche Quelle der Weisheit und Führung.

## Tipps für besseres Bibellesen

1. **Etablieren Sie eine Routine:** Lesen Sie täglich in der Bibel, auch wenn es nur wenige Verse sind.
2. **Reflexion:** Meditieren Sie über die Bedeutung der Texte.
3. **Praktische Anwendung:** Versuchen Sie, die Lehren in Ihrem täglichen Leben anzuwenden.

Teilen Sie diesen Beitrag mit Ihren Freunden und Ihrer Familie!`,
    },
    {
      slug: "finding-peace-in-chaos",
      title: "Frieden finden in einer chaotischen Welt",
      date: "2024-01-13",
      excerpt: "Praktische Strategien, um inneren Frieden in der hektischen Welt von heute zu finden.",
      tags: ["frieden", "achtsamkeit", "spiritualität"],
      readingTime: 6,
      content: `In der heutigen schnelllebigen Welt kann es wie eine unmögliche Aufgabe erscheinen, Frieden zu finden.

## Inneren Frieden finden

1. **Tägliches Gebet:** Nehmen Sie sich jeden Tag Zeit für stilles Gebet und Reflexion.
2. **Schriftmeditation:** Konzentrieren Sie sich auf Verse über Frieden und Gottes Verheißungen.
3. **Dankbarkeitspraxis:** Zählen Sie regelmäßig Ihre Segnungen und danken Sie Gott.

Denken Sie daran, Jesus sagte: "Frieden lasse ich euch, meinen Frieden gebe ich euch." (Johannes 14:27)`,
    },
  ],
  fr: [
    {
      slug: "how-to-pray-like-jesus",
      title: "Comment prier comme Jésus",
      date: "2024-01-15",
      excerpt: "Apprenez à prier comme Jésus l'a enseigné, avec simplicité et puissance.",
      tags: ["prière", "jésus", "foi"],
      readingTime: 5,
      content: `Prier est une pratique essentielle pour renforcer votre connexion avec Dieu. Jésus nous a laissé un modèle clair de prière dans le Notre Père.

## Comment prier comme Jésus

1. **Commencez par la Gratitude:** Remerciez Dieu pour les bénédictions quotidiennes.
2. **Soyez Sincère:** Parlez à Dieu comme vous parleriez à un ami proche.
3. **Demandez avec Foi:** Ayez confiance que Dieu entendra et répondra à vos prières.

Partagez ce post avec vos amis et votre famille!`,
    },
    {
      slug: "importance-of-bible-reading",
      title: "L'importance de la lecture biblique",
      date: "2024-01-14",
      excerpt: "Découvrez comment la lecture biblique peut transformer votre vie spirituelle.",
      tags: ["bible", "spiritualité", "foi"],
      readingTime: 4,
      content: `La Bible est une source inépuisable de sagesse et de guidance.

## Conseils pour une meilleure lecture biblique

1. **Établissez une Routine:** Lisez la Bible quotidiennement, même si ce n'est que quelques versets.
2. **Réflexion:** Méditez sur la signification des textes.
3. **Application Pratique:** Essayez d'appliquer les enseignements dans votre vie quotidienne.

Partagez ce post avec vos amis et votre famille!`,
    },
    {
      slug: "finding-peace-in-chaos",
      title: "Trouver la paix dans un monde chaotique",
      date: "2024-01-13",
      excerpt: "Stratégies pratiques pour trouver la paix intérieure dans le monde trépidant d'aujourd'hui.",
      tags: ["paix", "pleine conscience", "spiritualité"],
      readingTime: 6,
      content: `Dans le monde trépidant d'aujourd'hui, trouver la paix peut sembler une tâche impossible.

## Trouver la paix intérieure

1. **Prière Quotidienne:** Réservez du temps chaque jour pour la prière silencieuse et la réflexion.
2. **Méditation des Écritures:** Concentrez-vous sur les versets concernant la paix et les promesses de Dieu.
3. **Pratique de la Gratitude:** Comptez régulièrement vos bénédictions et exprimez votre gratitude à Dieu.

Souvenez-vous, Jésus a dit: "Je vous laisse la paix, je vous donne ma paix." (Jean 14:27)`,
    },
  ],
  it: [
    {
      slug: "how-to-pray-like-jesus",
      title: "Come pregare come Gesù",
      date: "2024-01-15",
      excerpt: "Impara a pregare come ha insegnato Gesù, con semplicità e potenza.",
      tags: ["preghiera", "gesù", "fede"],
      readingTime: 5,
      content: `Pregare è una pratica essenziale per rafforzare la tua connessione con Dio. Gesù ci ha lasciato un chiaro modello di preghiera nel Padre Nostro.

## Come pregare come Gesù

1. **Inizia con Gratitudine:** Ringrazia Dio per le benedizioni quotidiane.
2. **Sii Sincero:** Parla con Dio come parleresti con un amico stretto.
3. **Chiedi con Fede:** Confida che Dio ascolterà e risponderà alle tue preghiere.

Condividi questo post con i tuoi amici e familiari!`,
    },
    {
      slug: "importance-of-bible-reading",
      title: "L'importanza della lettura biblica",
      date: "2024-01-14",
      excerpt: "Scopri come la lettura biblica può trasformare la tua vita spirituale.",
      tags: ["bibbia", "spiritualità", "fede"],
      readingTime: 4,
      content: `La Bibbia è una fonte inesauribile di saggezza e guida.

## Consigli per una migliore lettura biblica

1. **Stabilisci una Routine:** Leggi la Bibbia quotidianamente, anche se sono solo pochi versetti.
2. **Riflessione:** Medita sul significato dei testi.
3. **Applicazione Pratica:** Cerca di applicare gli insegnamenti nella tua vita quotidiana.

Condividi questo post con i tuoi amici e familiari!`,
    },
    {
      slug: "finding-peace-in-chaos",
      title: "Trovare pace in un mondo caotico",
      date: "2024-01-13",
      excerpt: "Strategie pratiche per trovare la pace interiore nel frenetico mondo di oggi.",
      tags: ["pace", "mindfulness", "spiritualità"],
      readingTime: 6,
      content: `Nel mondo frenetico di oggi, trovare la pace può sembrare un compito impossibile.

## Trovare la pace interiore

1. **Preghiera Quotidiana:** Dedica del tempo ogni giorno alla preghiera silenziosa e alla riflessione.
2. **Meditazione delle Scritture:** Concentrati sui versetti riguardanti la pace e le promesse di Dio.
3. **Pratica della Gratitudine:** Conta regolarmente le tue benedizioni ed esprimi gratitudine a Dio.

Ricorda, Gesù ha detto: "Vi lascio la pace, vi do la mia pace." (Giovanni 14:27)`,
    },
  ],
  fil: [
    {
      slug: "how-to-pray-like-jesus",
      title: "Paano Manalangin Tulad ni Hesus",
      date: "2024-01-15",
      excerpt: "Matuto kung paano manalangin tulad ng itinuro ni Hesus, nang may kasimplehan at kapangyarihan.",
      tags: ["panalangin", "hesus", "pananampalataya"],
      readingTime: 5,
      content: `Ang pananalangin ay isang mahalagang kasanayan upang palakasin ang inyong koneksyon sa Diyos. Iniwan sa atin ni Hesus ang isang malinaw na modelo ng panalangin sa Panalangin ng Panginoon.

## Paano Manalangin Tulad ni Hesus

1. **Magsimula sa Pasasalamat:** Pasalamatan ang Diyos para sa pang-araw-araw na mga pagpapala.
2. **Maging Tapat:** Makipag-usap sa Diyos tulad ng pakikipag-usap mo sa isang malapit na kaibigan.
3. **Humiling nang may Pananampalataya:** Magtiwala na maririnig at sasagutin ng Diyos ang inyong mga panalangin.

Ibahagi ang post na ito sa inyong mga kaibigan at pamilya!`,
    },
    {
      slug: "importance-of-bible-reading",
      title: "Ang Kahalagahan ng Pagbabasa ng Bibliya",
      date: "2024-01-14",
      excerpt: "Tuklasin kung paano mababago ng pagbabasa ng Bibliya ang inyong espirituwal na buhay.",
      tags: ["bibliya", "espiritwalidad", "pananampalataya"],
      readingTime: 4,
      content: `Ang Bibliya ay isang hindi mauubos na pinagmumulan ng karunungan at patnubay.

## Mga Tip para sa Mas Mahusay na Pagbabasa ng Bibliya

1. **Magtatag ng Rutina:** Magbasa ng Bibliya araw-araw, kahit na ilang talata lamang.
2. **Pagninilay:** Pagbulay-bulayin ang kahulugan ng mga teksto.
3. **Praktikal na Aplikasyon:** Subukang ilapat ang mga turo sa inyong pang-araw-araw na buhay.

Ibahagi ang post na ito sa inyong mga kaibigan at pamilya!`,
    },
    {
      slug: "finding-peace-in-chaos",
      title: "Paghahanap ng Kapayapaan sa isang Magulo na Mundo",
      date: "2024-01-13",
      excerpt: "Mga praktikal na estratehiya upang makahanap ng panloob na kapayapaan sa abalang mundo ngayon.",
      tags: ["kapayapaan", "mindfulness", "espiritwalidad"],
      readingTime: 6,
      content: `Sa mabilis na mundo ngayon, ang paghahanap ng kapayapaan ay tila imposibleng gawain.

## Paghahanap ng Panloob na Kapayapaan

1. **Pang-araw-araw na Panalangin:** Maglaan ng oras bawat araw para sa tahimik na panalangin at pagninilay.
2. **Pagninilay sa Kasulatan:** Magtuon sa mga talata tungkol sa kapayapaan at mga pangako ng Diyos.
3. **Pagsasanay ng Pasasalamat:** Regular na bilangin ang inyong mga pagpapala at ipahayag ang pasasalamat sa Diyos.

Tandaan, sinabi ni Hesus: "Ang kapayapaan ay iniiwan ko sa inyo, ang aking kapayapaan ay ibinibigay ko sa inyo." (Juan 14:27)`,
    },
  ],
}

export async function getAllPosts(lang: string): Promise<Post[]> {
  try {
    const posts = postsData[lang as keyof typeof postsData] || postsData.en
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error(`Error getting posts for language ${lang}:`, error)
    return []
  }
}

export async function getPostBySlug(lang: string, slug: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts(lang)
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error(`Error getting post ${slug} for language ${lang}:`, error)
    return null
  }
}

export async function getPostsByTag(lang: string, tag: string): Promise<Post[]> {
  try {
    const posts = await getAllPosts(lang)
    return posts.filter((post) => post.tags.includes(tag))
  } catch (error) {
    console.error(`Error getting posts by tag ${tag} for language ${lang}:`, error)
    return []
  }
}

export async function getRelatedPosts(
  lang: string,
  currentSlug: string,
  tags: string[],
  limit: number,
): Promise<Post[]> {
  try {
    const allPosts = await getAllPosts(lang)
    const otherPosts = allPosts.filter((post) => post.slug !== currentSlug)
    const relatedPosts = otherPosts.filter((post) => post.tags.some((tag) => tags.includes(tag)))

    if (relatedPosts.length < limit) {
      const recentPosts = otherPosts
        .filter((post) => !relatedPosts.includes(post))
        .slice(0, limit - relatedPosts.length)
      return [...relatedPosts, ...recentPosts].slice(0, limit)
    }

    return relatedPosts.sort(() => 0.5 - Math.random()).slice(0, limit)
  } catch (error) {
    console.error(`Error getting related posts for ${currentSlug} in language ${lang}:`, error)
    return []
  }
}
