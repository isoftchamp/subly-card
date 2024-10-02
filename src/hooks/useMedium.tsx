import { useEffect, useState } from 'react';

import { Medium } from '@/interfaces';

export const useMedium = () => {
  const [mediums, setMediums] = useState<Medium[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediums = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_MEDIUM_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch mediums');
        }
        const data: Medium[] = await response.json();
        setMediums(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMediums();
  }, []);

  return { mediums, loading, error };
};
