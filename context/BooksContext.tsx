// import { StyleSheet, Text, View } from "react-native";
import { useUser } from "@/hooks/useUser";
import { databases } from "@/lib/appwrite";
import { createContext, useState } from "react";
import { ID, Permission } from "react-native-appwrite";

const DATABASE_ID = "692d7c7100330d8beb5b";
const TABLE_ID = "books";
export const BooksContext = createContext();

export function BooksProvider({ children }: any) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async function fetchBookById(id: string) {
    try {
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async function createBook(data: any) {
    try {
      const newBooks = await databases.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [Permission.read()]
      );
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async function deleteBook(id: string) {
    try {
    } catch (e: any) {
      console.log(e.message);
    }
  }
  const value = { books, fetchBookById, fetchBooks, createBook, deleteBook };
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}
