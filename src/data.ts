/*
 * ============================================================
 *  DADOS DO CURRÍCULO — edite apenas este arquivo
 * ============================================================
 *
 *  Tudo o que aparece no site e no PDF vem daqui.
 *  Campos vazios ("") ficam ocultos no site e no PDF.
 *
 *  whatsapp:    só números, com 55 + DDD. Ex.: "5588981417708"
 *  phone:       como deve aparecer.       Ex.: "(88) 9.8141-7708"
 *  linkedinUrl: cole aqui o endereço completo do perfil quando tiver,
 *               ex.: "https://www.linkedin.com/in/...". Enquanto estiver
 *               vazio, o botão "Ver LinkedIn" não aparece.
 */
export const contact = {
  whatsapp: "5588981417708",
  phone: "(88) 9.8141-7708",
  email: "werllyane.alcantara@outlook.com",
  linkedinName: "WerllyaneAlcantara",
  linkedinUrl: "",
};

// Imagens ficam na pasta /public. Se "photo" ficar vazio (ou o arquivo
// não existir), aparece um espaço reservado "Foto profissional".
export const images = {
  photo: "foto.jpg",
};

export const profile = {
  name: "Werllyane Alcantara Fernandes",
  firstName: "Werllyane",
  role: "Assistente Administrativo",
  city: "Juazeiro do Norte – CE", // naturalidade
  headline:
    "Experiência em rotinas administrativas, atendimento, organização, compras, almoxarifado e apoio às atividades de Recursos Humanos.",
  yearsBadge: "11+",
  about: [
    "Profissional natural de Juazeiro do Norte – CE, dedicada, responsável e comprometida, com interesse constante em aprender e desenvolver novas habilidades.",
    "Possui experiência em diferentes rotinas administrativas, atendimento ao público, organização, compras, almoxarifado e apoio às atividades de Recursos Humanos.",
    "Apresenta facilidade de comunicação, comprometimento e respeito, além de transitar bem entre atividades realizadas individualmente e em equipe.",
  ],
  // Resumo usado no PDF (mesmo sentido do perfil do currículo original)
  summary:
    "Sou dedicada, responsável e tenho interesse em aprender. Tenho comunicação eficaz, com comprometimento e respeito. Não gosto de rotatividade de emprego e transito muito bem entre trabalhar sozinha e em equipe.",
};

export const personal = [
  { label: "Idade", value: "30 anos" },
  { label: "Estado civil", value: "Solteira" },
  { label: "Filhos", value: "Sem filhos" },
  { label: "Naturalidade", value: "Juazeiro do Norte – CE" },
];

export const highlights = [
  { value: "+11 anos", label: "de experiência profissional" },
  { value: "Gestão de RH", label: "Formação superior" },
  { value: "Administrativo", label: "Experiência atual" },
  { value: "Atendimento", label: "Experiência profissional" },
];

export type Experience = {
  company: string;
  role: string;
  short: string; // nome curto usado na linha de evolução
  period: string;
  current?: boolean;
  description?: string;
  groups: { title: string; items: string[] }[];
};

export const experiences: Experience[] = [
  {
    company: "RJ Distribuidora",
    role: "Assistente Administrativo",
    short: "Assistente Administrativo",
    period: "10/2024 – Atual",
    current: true,
    description:
      "Atuação na organização de documentos e arquivos, cadastro e atualização de dados dos colaboradores.",
    groups: [
      {
        title: "Administrativo e RH",
        items: [
          "Confecção de crachás",
          "Auxílio nas atividades de RH",
          "Solicitação e conferência de documentos admissionais",
          "Acompanhamento dos prazos dos ASOs",
          "Participação em processos de desligamento de funcionários",
        ],
      },
      {
        title: "Almoxarifado",
        items: ["Responsabilidade pelo estoque de fardamentos", "Organização e controle do almoxarifado"],
      },
      {
        title: "Compras",
        items: [
          "Compras de materiais de uso cotidiano",
          "Compras de materiais de escritório",
          "Compras de materiais de EPI e afins",
        ],
      },
    ],
  },
  {
    company: "RJ Distribuidora",
    role: "Recepcionista",
    short: "Recepção",
    period: "05/2015 – 10/2024",
    groups: [
      {
        title: "Atendimento e rotina",
        items: [
          "Atendimento ao público em geral",
          "Organização do ambiente",
          "Conferência de comprovantes de entrega de mercadorias",
        ],
      },
      {
        title: "Compras",
        items: ["Responsabilidade pelas compras de uso geral", "Compras de materiais de escritório"],
      },
      {
        title: "Frota de veículos",
        items: [
          "Auxílio na frota de veículos",
          "Acompanhamento de revisões",
          "Acompanhamento de licenciamentos",
          "Acompanhamento de IPVA e assuntos relacionados",
        ],
      },
    ],
  },
  {
    company: "RJ Distribuidora",
    role: "Estágio – Área Financeira",
    short: "Estágio financeiro",
    period: "07/2013 – 12/2013",
    description: "Estágio realizado na área financeira da empresa.",
    groups: [],
  },
];

export const education = [
  {
    institution: "Estácio de Sá",
    course: "Gestão de Recursos Humanos – EAD",
    level: "Ensino superior",
    year: "2020",
    note: "Sem estágio e sem experiência específica na área de RH.",
  },
  {
    institution: "E.E.M. Governador Adauto Bezerra",
    course: "Ensino Médio Completo",
    level: "Ensino médio",
    year: "2013",
    note: "",
  },
];

export const skills = [
  { title: "Comunicação", text: "Facilidade em manter um bom diálogo." },
  { title: "Organização", text: "Perfil organizado e atenção às rotinas profissionais." },
  { title: "Pontualidade", text: "Compromisso com horários e responsabilidades." },
  { title: "Agilidade", text: "Agilidade na execução das atividades." },
  { title: "Proatividade e disponibilidade", text: "Perfil prestativo e disposto a contribuir com as necessidades da empresa." },
  { title: "Responsabilidade", text: "Comprometimento com as atividades e responsabilidades profissionais." },
  { title: "Trabalho em equipe", text: "Boa adaptação ao trabalho em equipe." },
  { title: "Autonomia", text: "Facilidade para trabalhar também de forma individual." },
];

// Áreas/atividades ligadas às experiências (não são cargos)
export const areas = [
  "Administração",
  "Recursos Humanos",
  "Recepção",
  "Almoxarifado",
  "Compras",
  "Atendimento",
  "Financeiro",
  "Frota",
];

export const differentials = ["Dedicação", "Responsabilidade", "Comunicação", "Aprendizado contínuo"];

export const objective = {
  short:
    "Buscar novas oportunidades profissionais que ofereçam possibilidade de crescimento, plano de carreira e boa remuneração.",
  title: "Em busca de novos desafios",
  text: "Estou em busca de novas oportunidades profissionais que ofereçam possibilidade de crescimento, plano de carreira e uma boa remuneração.",
  next: "Encontrar uma oportunidade onde minha experiência administrativa, organização, comunicação e disposição para aprender possam contribuir para os resultados da empresa.",
};

export const whatsappLink = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      "Olá, Werllyane! Vi seu currículo online e gostaria de conversar sobre uma oportunidade.",
    )}`
  : "";

export const phoneLink = contact.phone ? `tel:+55${contact.phone.replace(/\D/g, "")}` : "";

export const emailLink = contact.email
  ? `mailto:${contact.email}?subject=${encodeURIComponent("Oportunidade profissional")}`
  : "";

/** Permite quebrar o e-mail só antes do "@", nunca no meio do domínio */
export const breakableEmail = (email: string) => email.replace("@", "​@");

export const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;
