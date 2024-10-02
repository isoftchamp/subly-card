import { MediumStatus } from '@/enums';

export type MediumStatusType = `${MediumStatus}`;

// TODO: fake data structure: need to change according real data structure.
export interface Medium {
  id: string;
  status: MediumStatusType;
  image: string;
  title: string;
  languages: string[];
  updated: string;
  errorMessage?: string;
}
