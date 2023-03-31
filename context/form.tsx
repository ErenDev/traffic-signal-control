import { createContext, Dispatch, FC, ReactNode, useContext, useState } from 'react'

type errorType = string
type greenLightDurationType = number | null

interface IContext {
  error: errorType
  greenLightDuration: greenLightDurationType
  setGreenLightDuration: Dispatch<number | null>
  setError: Dispatch<string>
}

const defaultContext:IContext = {
  error: '',
  greenLightDuration: null,
  setGreenLightDuration: () => {},
  setError: () => {}
}

const FormContext = createContext(defaultContext)

export const FormProvider:FC<{ children: ReactNode }> = ({ children }) => {
  const [greenLightDuration, setGreenLightDuration] = useState<greenLightDurationType>(null)
  const [error, setError] = useState<errorType>('')

  const contextValues = {
    error,
    greenLightDuration,
    setError,
    setGreenLightDuration
  }

  return (
    <FormContext.Provider value={contextValues}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)