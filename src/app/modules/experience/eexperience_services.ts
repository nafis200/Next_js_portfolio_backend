import Querybuilders from '../../builders/Querybuilders';
import type { Texperience } from './experience_interface';
import { Experience } from './experience_model';

// Create new experience
const createExperienceIntoDB = async (payload: Texperience) => {
  const { subject, body } = payload;

  if (!subject || !body) {
    throw new Error('Subject and Body are required.');
  }

  const result = await Experience.create(payload);
  return result;
};

const getAllExperienceFromDB = async () => {
  const Query = new Querybuilders(Experience.find(), {});
  const result = await Query.sort().exec();

  return result;
};

const deleteExperienceFromDB = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  if (!result) {
    throw new Error('Experience not found or already deleted.');
  }
  return result;
};

export const ExperienceServices = {
  createExperienceIntoDB,
  getAllExperienceFromDB,
  deleteExperienceFromDB,
};
