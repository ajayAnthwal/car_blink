export const formatApiUrl = (rawUrl?: string): string => {
  if (!rawUrl) return '';
  let cleanUrl = rawUrl.trim().replace(/^["']|["']$/g, '');
  if (cleanUrl && !cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `http://${cleanUrl}`;
  }
  return cleanUrl;
};
