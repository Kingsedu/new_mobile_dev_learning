import { Client, Avatars, Account } from "react-native-appwrite";

import { projectId, appEndPoint } from "./config";

export const client = new Client()
  .setProject(projectId as string)
  .setEndpoint(appEndPoint as string);

export const account = new Account(client);

export const avatars = new Avatars(client);
