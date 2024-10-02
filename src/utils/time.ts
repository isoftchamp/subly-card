export const formatTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const updatedDate = date instanceof Date ? date : new Date(date);
  const secondsAgo = Math.floor((now.getTime() - updatedDate.getTime()) / 1000);

  if (secondsAgo < 60) return 'now';
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} min ago`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} hr ago`;
  if (secondsAgo < 604800) return `${Math.floor(secondsAgo / 86400)} day ago`;
  if (secondsAgo < 2419200) return `${Math.floor(secondsAgo / 604800)} week ago`;
  if (secondsAgo < 31536000) return `${Math.floor(secondsAgo / 2628000)} month ago`;

  return updatedDate.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
};
