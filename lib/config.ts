import { config } from "dotenv";
config();

export const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
export const appEndPoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
