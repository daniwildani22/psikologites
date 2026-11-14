export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export type DimensionLetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type MbtiTypeCode =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
  // positive score directs to the first letter (E, S, T, J), negative directs to second (I, N, F, P)
  direction: '+' | '-';
  contextTag: string; // e.g. "Kerja Kelompok", "Gaya Belajar", "Pengambilan Keputusan"
}

export interface StudentProfile {
  fullName: string;
  grade: string; // Kategori / Profesi (e.g., "Profesional / Karyawan", "Mahasiswa", "Wirausaha", "Umum")
  schoolName: string; // Instansi / Perusahaan / Domisili
  targetMajor?: string; // Bidang Minat / Tujuan Pengembangan
}

export interface DimensionScore {
  firstLetter: DimensionLetter;
  secondLetter: DimensionLetter;
  firstCount: number;
  secondCount: number;
  firstPercentage: number;
  secondPercentage: number;
  dominant: DimensionLetter;
}

export interface MbtiResultData {
  id: string;
  date: string;
  student: StudentProfile;
  type: MbtiTypeCode;
  dimensionScores: {
    EI: DimensionScore;
    SN: DimensionScore;
    TF: DimensionScore;
    JP: DimensionScore;
  };
}

export interface PersonalityDetails {
  code: MbtiTypeCode;
  title: string; // e.g., "Sang Arsitek Strategis"
  group: 'Analis' | 'Diplomatis' | 'Pengawal' | 'Penjelajah';
  groupColor: string;
  badge: string;
  summary: string;
  quote: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  studyTips: string[];
  recommendedMajors: {
    category: 'Teknologi & Sains' | 'Bisnis, Sosial & Humaniora' | 'Kreatif & Terapan';
    majors: string[];
    reason: string;
  }[];
  careerProspects: string[];
  classroomBehavior: string;
  friendshipAdvice: string;
}

// Learning Style (VAK)
export interface LearningStyleQuestion {
  id: number;
  question: string;
  options: {
    type: 'visual' | 'auditory' | 'kinesthetic';
    text: string;
  }[];
}

export interface LearningStyleResult {
  visual: number;
  auditory: number;
  kinesthetic: number;
  dominant: 'visual' | 'auditory' | 'kinesthetic' | 'multimodal';
  percentage: {
    visual: number;
    auditory: number;
    kinesthetic: number;
  };
}

// RIASEC Holland Test
export interface RiasecQuestion {
  id: number;
  text: string;
  category: 'R' | 'I' | 'A' | 'S' | 'E' | 'C';
}

export interface RiasecResult {
  R: number; // Realistic
  I: number; // Investigative
  A: number; // Artistic
  S: number; // Social
  E: number; // Enterprising
  C: number; // Conventional
  topThree: Array<{
    code: string;
    name: string;
    score: number;
    description: string;
    suggestedMajors: string[];
  }>;
}
