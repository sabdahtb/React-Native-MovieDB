import React, { useContext, useState } from 'react'

import { ITheme, IUseData, light } from '../../constants'

const DataContext = React.createContext({})

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>(light)

  const contextValue = {
    theme,
    setTheme,
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}

const UseData = () => useContext(DataContext) as IUseData

const GetContext = () => {
  return {
    DataContext,
    DataProvider,
    UseData,
  }
}

export default GetContext
