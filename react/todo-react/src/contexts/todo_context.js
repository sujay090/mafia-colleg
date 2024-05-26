import { useContext,createContext } from "react";


export const todoContext = createContext({})

export const useTodo = useContext(todoContext)

export const todoProvider = todoContext.Provider
  