import {
  PersonalInfo,
  ArcadeParticipant,
  WorkExperience,
  PersonalArchiveItem,
} from '../types/portfolio';
import {
  DEFAULT_PERSONAL_INFO,
  DEFAULT_ARCADE_RANKING,
  DEFAULT_EXPERIENCES,
  DEFAULT_PERSONAL_ARCHIVE,
} from '../data/defaultProfile';

const KEYS = {
  PROFILE: 'andre_macedo_profile_v8',
  LEADERBOARD: 'andre_macedo_leaderboard_v8',
  EXPERIENCES: 'andre_macedo_experiences_v8',
  ARCHIVE: 'andre_macedo_archive_v8',
  PET_CLICKS: 'andre_macedo_pet_clicks_v8',
  AUDIO_MUTED: 'andre_macedo_audio_muted_v8',
  THEME: 'andre_macedo_theme_v3',
};

export function loadTheme(): 'dark' | 'light' {
  try {
    const saved = localStorage.getItem(KEYS.THEME);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // fallback
  }
  return 'dark'; // Defaults to sleek dark mode
}

export function saveTheme(theme: 'dark' | 'light'): void {
  try {
    localStorage.setItem(KEYS.THEME, theme);
  } catch {
    // ignore
  }
}

export function loadProfile(): PersonalInfo {
  try {
    const raw = localStorage.getItem(KEYS.PROFILE);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  return DEFAULT_PERSONAL_INFO;
}

export function saveProfile(profile: PersonalInfo): void {
  try {
    localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
  } catch {
    // ignore
  }
}

export function loadLeaderboard(): ArcadeParticipant[] {
  try {
    const raw = localStorage.getItem(KEYS.LEADERBOARD);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  return DEFAULT_ARCADE_RANKING;
}

export function saveLeaderboard(list: ArcadeParticipant[]): void {
  try {
    localStorage.setItem(KEYS.LEADERBOARD, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export function loadExperiences(): WorkExperience[] {
  try {
    const raw = localStorage.getItem(KEYS.EXPERIENCES);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  return DEFAULT_EXPERIENCES;
}

export function saveExperiences(experiences: WorkExperience[]): void {
  try {
    localStorage.setItem(KEYS.EXPERIENCES, JSON.stringify(experiences));
  } catch {
    // ignore
  }
}

export function loadArchiveItems(): PersonalArchiveItem[] {
  try {
    const raw = localStorage.getItem(KEYS.ARCHIVE);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  return DEFAULT_PERSONAL_ARCHIVE;
}

export function loadPetClicks(): number {
  try {
    const raw = localStorage.getItem(KEYS.PET_CLICKS);
    if (raw) return parseInt(raw, 10) || 1284;
  } catch {
    // fallback
  }
  return 1284;
}

export function savePetClicks(count: number): void {
  try {
    localStorage.setItem(KEYS.PET_CLICKS, count.toString());
  } catch {
    // ignore
  }
}
