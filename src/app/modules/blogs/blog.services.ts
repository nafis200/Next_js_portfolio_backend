import { ObjectId } from 'mongodb';
import { Blogs } from './blogs.model';
// import type { TBlogs } from './blogs.interface';
import { Request } from 'express';
import type { IFile } from '../../interface/file';
import Querybuilders from '../../builders/Querybuilders';

const createBlogsIntoDB = async (req: Request) => {
  const file = req.file as IFile;

  let profilePhoto = null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (file) profilePhoto = file.path;

  const payload = {
    image: profilePhoto,
    title: req.body.title,
    description: req.body.description,
  };

  const result = await Blogs.create(payload);

  return result;
};

const getAllBlogsIntoDB = async () => {
  const Query = new Querybuilders(Blogs.find(), {});
  const result = await Query.sort().exec();

  return result;
};

const deleteBlogsFromDB = async (carId: string) => {
  const result = await Blogs.updateOne(
    { _id: new ObjectId(carId) },
    {
      isDeleted: true,
    },
  );
  return result;
};

const UpdateBlogsFromDB = async (projectId: string, req: Partial<Request>) => {
  const file = req.file as IFile;

  let profilePhoto = null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (file) profilePhoto = file.path;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const payload: Record<string, any> = {};

  if (profilePhoto) payload.image = profilePhoto;
  if (req.body?.title) payload.title = req.body.title;
  if (req.body?.description) payload.description = req.body.description;

  const result = await Blogs.findByIdAndUpdate(
    projectId,
    { $set: payload },
    { new: true, runValidators: true },
  );

  return result;
};

export const BlogServices = {
  createBlogsIntoDB,
  getAllBlogsIntoDB,
  deleteBlogsFromDB,
  UpdateBlogsFromDB,
};
