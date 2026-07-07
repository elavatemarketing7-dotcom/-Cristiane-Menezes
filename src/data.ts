/**
 * Dados de configuração da Dra. Cristiane Menezes
 * Use este arquivo para alterar informações e facilmente adicionar ou remover links de imagens na galeria.
 */

export interface ExpertInfo {
  name: string;
  role: string;
  location: string;
  city: string;
  whatsappUrl: string;
  instagramUrl: string;
  photos: {
    primary: string;
    secondary: string;
  };
}

export const expertInfo: ExpertInfo = {
  name: "Dra. Cristiane Menezes",
  role: "Harmonização Facial",
  location: "Belo Horizonte",
  city: "Belo Horizonte - MG",
  // URL do WhatsApp fornecida pelo usuário
  whatsappUrl: "https://api.whatsapp.com/message/DDMUGGETQ3GIN1?autoload=1&app_absent=0&utm_source=ig",
  instagramUrl: "https://www.instagram.com/dra.cristianemenezes/reels/",
  photos: {
    primary: "https://i.imgur.com/2drrAQ8.png", // Foto principal
    secondary: "https://i.imgur.com/9rOErMM.png", // Foto de trabalho/bastidor
  },
};

// Perguntas para o Quiz interativo e personalizado
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o seu principal desejo ao buscar a Harmonização Facial?",
    options: [
      "Realçar minha beleza de forma natural e sutil",
      "Suavizar linhas de expressão e sinais do tempo",
      "Corrigir pequenas assimetrias ou proporções",
      "Recuperar a sustentação, firmeza e contorno do rosto"
    ]
  },
  {
    id: 2,
    question: "O que você considera mais importante ao realizar um procedimento estético?",
    options: [
      "Garantia absoluta de que o resultado será natural e elegante",
      "Segurança médica com acompanhamento personalizado",
      "Profissional com olhar artístico que entenda minha beleza única",
      "Um método claro, seguro e sem exageros artificiais"
    ]
  },
  {
    id: 3,
    question: "Você já realizou algum procedimento injetável (Ex: Botox, Preenchimento)?",
    options: [
      "Sim, realizo regularmente e amo me cuidar",
      "Sim, mas tenho receio de exageros ou resultados artificiais",
      "Nunca fiz nenhum procedimento, seria a minha primeira vez"
    ]
  },
  {
    id: 4,
    question: "Qual é o seu principal receio em relação à Harmonização?",
    options: [
      "Ficar com aparência artificial ou 'com cara de todo mundo'",
      "Sentir dor ou desconforto durante a aplicação",
      "Não saber se o procedimento é indicado para o meu rosto",
      "Não possuo medos, estou decidida a iniciar minha transformação"
    ]
  }
];

// GALERIA 1: ANTES E DEPOIS / PROVAS SOCIAIS DE RESULTADOS
// Você pode adicionar mais links de imagens aqui seguindo a mesma estrutura.
export const antesDepoisImages: string[] = [
  "https://i.imgur.com/889yzMq.png",
  "https://i.imgur.com/eJQpjns.png",
  "https://i.imgur.com/exjASGF.png",
  "https://i.imgur.com/CYtNl9I.png",
  "https://i.imgur.com/Nqz7tJu.png",
  "https://i.imgur.com/mIu6E1k.png"
  // Adicione novas fotos de antes e depois abaixo usando aspas e vírgulas:
  // "https://i.imgur.com/exemplo.png",
];

// GALERIA 2: HARMONIZAÇÃO DE CORAÇÃO (de 💚)
// Você pode adicionar mais links de imagens aqui seguindo a mesma estrutura.
export const deCoracaoImages: string[] = [
  "https://i.imgur.com/mFrSccp.png",
  "https://i.imgur.com/HChVjhR.png",
  "https://i.imgur.com/e4fa7zO.png",
  "https://i.imgur.com/GGDSJvY.png"
  // Adicione novas fotos de harmonização com amor abaixo:
  // "https://i.imgur.com/exemplo.png",
];

// GALERIA 3: REVIEWS / COMENTÁRIOS DE PACIENTES (prints de WhatsApp/Instagram)
// Você pode adicionar mais links de imagens aqui seguindo a mesma estrutura.
export const reviewsImages: string[] = [
  "https://i.imgur.com/7OKF2Ja.png",
  "https://i.imgur.com/hK1E8OS.png",
  "https://i.imgur.com/RO1UUDt.png",
  "https://i.imgur.com/wTZJbQu.png",
  "https://i.imgur.com/FmxSrbe.png"
  // Adicione novos prints de reviews abaixo:
  // "https://i.imgur.com/exemplo.png",
];
