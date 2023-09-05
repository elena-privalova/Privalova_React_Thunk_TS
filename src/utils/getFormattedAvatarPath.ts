export const getFormattedAvatarPath = (avatarPath: string | null): string => {
  if (avatarPath != null) {
    return `${import.meta.env.VITE_APP_API_URL}${avatarPath}`;
  }
  return '';
};

