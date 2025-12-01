import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }: any) => {
  const { user, authChecked } = useUser();
  const router = useRouter();
  console.log("this is the user from the UserOnlu hook", user);
  console.log("this is the authentication from the useOnly", authChecked);

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }
  return children;
};
export default UserOnly;
