import { ProfileData } from '../type/profileData.types';

export const getUserProfileData = (
  profileData: ProfileData[],
  userId: string
): ProfileData | undefined => {
  return profileData.find(data => data.id === userId);
};