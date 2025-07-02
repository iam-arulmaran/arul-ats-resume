import { useEffect, useState } from 'react';
import { API_RESUME_URL } from '../constants/common';

const RESUME_CACHE_KEY = 'resumeData';
const CACHE_EXPIRY_MS = 1000 * 60 * 60; // 1 hour

export default function useResumeData() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(RESUME_CACHE_KEY);

    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const isExpired = Date.now() - parsed.timestamp > CACHE_EXPIRY_MS;

        if (!isExpired && parsed.data) {
          setResumeData(parsed.data);
          setLoading(false);
          return;
        } else {
          localStorage.removeItem(RESUME_CACHE_KEY);
        }
      } catch (err) {
        console.error('Failed to parse cached data:', err);
        localStorage.removeItem(RESUME_CACHE_KEY);
      }
    }

    // Fetch fresh data if no cache or expired
    fetch(API_RESUME_URL)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem(
          RESUME_CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), data })
        );
        setResumeData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch resume data:', err);
        setLoading(false);
      });
  }, []);

  return { resumeData, loading };
}
