// Importing React hooks
import { useRef } from "react";

// Importing Redux Provider and store creation function
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";

// StoreProvider component
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Creating a mutable ref to store the Redux store
  const storeRef = useRef<AppStore>();

  // If the store doesn't exist in the ref, create a new one
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  // Providing the Redux store to the component tree
  return <Provider store={storeRef.current}>{children}</Provider>;
}
