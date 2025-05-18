import { sendEmail } from "../../utils/sendEmail";
import type { TEmail } from "./message.interface";
import { Email } from "./message.model";

const createMessageIntoDB = async (payload: TEmail) => {
  
  const {email ,name ,message} = payload;
    if (!email || !name || !message) {
    throw new Error("Email Subject Message is required to send a message.");
  }

  console.log(payload)

  await sendEmail(email,name,message);
  const result = await Email.create(payload);
  return result;
};

const getAllMessageIntoDB = async () => {
  const result = await Email.find();
  return result;
};

export const MessageServices = {
    createMessageIntoDB,
    getAllMessageIntoDB
}