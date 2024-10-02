import { Language, MediumStatus } from '@/enums';

export type MediumStatusType = `${MediumStatus}`;
export type LanguageType = `${Language}`;

export interface Medium {
  id: string;
  name: string;
  cover: string;
  languages: LanguageType[];
  status: MediumStatusType;
  createdAt: string;
  updatedAt?: string;
  errorMessage?: string;
}
