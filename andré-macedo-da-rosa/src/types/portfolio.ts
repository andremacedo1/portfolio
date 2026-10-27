export interface PersonalInfo {
  name: string;
  initials: string;
  roleBadge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroBio: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  whatsappUrl?: string;
  location: string;
  yearsExperience: string;
}

export interface ArcadeParticipant {
  id: string;
  name: string;
  avatar: string;
  score: number;
  date: string;
}

export interface PersonalArchiveItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  description: string;
  meta: string;
  image: string;
  category: 'pet' | 'coop' | 'family' | 'games' | 'media' | 'craft' | 'setup' | 'study';
  details?: string;
  highlights?: string[];
  extraActionLabel?: string;
}

export interface JourneyMilestone {
  year: number;
  title: string;
  company: string;
  description: string;
  tags: string[];
  roleType: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  workType: string;
  description: string;
  tags: string[];
  achievements: string[];
}

export interface TechTool {
  id: string;
  name: string;
  category: string;
  abbr: string;
  iconBg?: string;
  description: string;
}

export interface MetricPillar {
  id: string;
  shortKey: string;
  name: string;
  badge: string;
  value: string;
  trend: string;
  howIAct: string;
  bars: number[];
}
