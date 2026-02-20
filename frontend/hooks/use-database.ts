import { useContext } from "react"
import { DatabaseContext } from "@/contexts/DatabaseProvider"

export function useDatabase(){
  const ctx = useContext(DatabaseContext);

  if(!ctx){
    throw new Error("Error: useDatabase should be used within a DatabaseProvider")
  }

  return ctx;
}

