import type { TProject } from './project.interface';
import { Project } from './project.model';
import { ObjectId } from 'mongodb';
import { Request } from 'express';
import type { IFile } from '../../interface/file';

const createProjectIntoDB = async (req:Request) => {
  const result="hellow"
  const file = req.file as IFile;


  let profilePhoto = null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (file) profilePhoto = file.path;

  const payload = {
    image: profilePhoto,
    title: req.body.title,
    description: req.body.description,
    github_link:req.body.github_link,
    project_link:req.body.project_link,
    technologies:req.body.technologies
  };
  console.log(payload)
  // const result = await Project.create(payload);
  return result;
};

const getAllProjectIntoDB = async () => {
  const result = await Project.find();
  return result;
};

const deleteProjectFromDB = async (carId: string) => {
  const result = await Project.updateOne(
    { _id: new ObjectId(carId) },
    {
      isDeleted: true,
    },
  );
  return result;
};

const UpdateCarFromDB = async (
  projectId: string,
  ProjectData: Partial<TProject>,
) => {

  const {technologies,description,...remainingData} = ProjectData
  
  if (ProjectData.technologies) {
    await Project.findByIdAndUpdate(
      projectId,
      {
        $addToSet: { technologies: { $each: technologies } },
      },
      {
        new: true,
        runValidators: true,
      },
    );
  }
  if (ProjectData.description) {
    await Project.findByIdAndUpdate(
      projectId,
      {
        $addToSet: { description: { $each: description } },
      },
      {
        new: true,
        runValidators: true,
      },
    );
  }

  const result = await Project.findByIdAndUpdate(
    projectId,
    {
      $set: {
        ...remainingData,
      },
    },
    {
      new: true,
      runValidators: true,
    },
  );
  return result
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectIntoDB,
  deleteProjectFromDB,
  UpdateCarFromDB,
};
