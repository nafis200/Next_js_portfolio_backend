import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendresponse";
import httpStatus from "http-status";
import { ExperienceServices } from "./eexperience_services";



const createExperience = catchAsync(async (req, res) => {
  const experienceData = req.body;
  const result = await ExperienceServices.createExperienceIntoDB(experienceData);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience created successfully",
    data: result,
  });
});


const getAllExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getAllExperienceFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experiences retrieved successfully",
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceServices.deleteExperienceFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience deleted successfully",
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperience,
  deleteExperience,
};
