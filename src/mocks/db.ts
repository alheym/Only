export interface DataItem {
  id: number
  years: number[]
  category: string
  details: DetailItem[]
}

export interface DetailItem {
  year: number
  description: string
}

export const Data = [
  {
    id: 1,
    years: [1980, 1986],
    category: 'Технологии',
    details: [
      {
        year: 1980,
        description: 'Sinclair Research выпускает домашний компьютер ZX80',
      },
      {
        year: 1982,
        description: 'Появился домашний компьютер ZX Spectrum, ставший последователем модели ZX81',
      },
      {
        year: 1983,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1984,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1985,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1986,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
    ],
  },
  {
    id: 2,
    years: [1987, 1991],
    category: 'Кино',
    details: [
      {
        year: 1987,
        description: 'Появился домашний компьютер ZX Spectrum, ставший последователем модели ZX81',
      },
      {
        year: 1988,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1989,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1990,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1991,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
    ],
  },
  {
    id: 3,
    years: [1992, 1997],
    category: 'Литература',
    details: [
      {
        year: 1992,
        description: 'Sinclair Research выпускает домашний компьютер ZX80',
      },
      {
        year: 1993,
        description: 'Появился домашний компьютер ZX Spectrum, ставший последователем модели ZX81',
      },
      {
        year: 1994,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1995,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1996,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1997,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
    ],
  },
  {
    id: 4,
    years: [1998, 2005],
    category: '',
    details: [
      {
        year: 1998,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 1999,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2001,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2002,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2003,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2004,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2005,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
    ],
  },
  {
    id: 5,
    years: [2006, 2014],
    category: 'Спорт',
    details: [
      {
        year: 2006,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2008,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2010,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2012,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2014,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
    ],
  },
  {
    id: 6,
    years: [2015, 2022],
    category: 'Наука',
    details: [
      {
        year: 2015,
        description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2017,
        description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2018,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2019,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2021,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
      {
        year: 2022,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus, eos libero odit sunt.',
      },
    ],
  },
]
