import { Language, MediumStatus } from '@/enums';

export type MediumStatusType = `${MediumStatus}`;
export type LanguageType = `${Language}`;

// TODO: fake data structure: need to change according real data structure.
export interface Medium {
  id: string;
  status: MediumStatusType;
  image: string;
  title: string;
  languages: LanguageType[];
  updated: string;
  errorMessage?: string;
}
