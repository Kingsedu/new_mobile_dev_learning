import { Client, Avatars, Account, Databases } from "react-native-appwrite";

import { projectId, appEndPoint } from "./config";

export const client = new Client()
  .setProject("69299c910001ba8133de")
  .setEndpoint("https://fra.cloud.appwrite.io/v1");

export const account = new Account(client);

export const avatars = new Avatars(client);

export const databases = new Databases(client);
