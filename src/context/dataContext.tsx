import { FC, createContext, useState } from 'react'

import { Data, DataItem } from '@mocks/db'

type Props = {
  children: React.ReactNode
}

interface DataContextProps {
  data: DataItem[]
  slide: number
  setSlide: (slide: number) => void
}

export const DataContext = createContext<DataContextProps | undefined>(undefined)

export const DataProvider: FC<Props> = ({ children }) => {
  const [data, setData] = useState<DataItem[]>(Data)
  const [slide, setSlide] = useState<number>(1)

  const handleSetSlide = (slide: number) => {
    setSlide(slide)
  }

  return <DataContext.Provider value={{ slide, data, setSlide: handleSetSlide }}>{children}</DataContext.Provider>
}
