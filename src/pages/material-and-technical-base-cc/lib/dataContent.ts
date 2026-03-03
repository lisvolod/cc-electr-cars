// 211
import img_211_1 from '@/assets/material-base/211/1.png'
import img_211_2 from '@/assets/material-base/211/2.png'
import img_211_3 from '@/assets/material-base/211/3.png'
import img_211_4 from '@/assets/material-base/211/4.png'
import img_211_5 from '@/assets/material-base/211/5.png'
import img_211_6 from '@/assets/material-base/211/6.png'
import img_211_7 from '@/assets/material-base/211/7.png'
import img_211_8 from '@/assets/material-base/211/8.png'
import img_211_9 from '@/assets/material-base/211/9.png'
import img_211_10 from '@/assets/material-base/211/10.png'
import img_211_11 from '@/assets/material-base/211/11.png'
import img_211_12 from '@/assets/material-base/211/12.png'
import img_211_13 from '@/assets/material-base/211/13.jpg'
// 217
import img_217_1 from '@/assets/material-base/217/1.png'
import img_217_2 from '@/assets/material-base/217/2.png'
import img_217_3 from '@/assets/material-base/217/3.png'
import img_217_4 from '@/assets/material-base/217/4.png'
import img_217_5 from '@/assets/material-base/217/5.png'
import img_217_6 from '@/assets/material-base/217/6.png'
import img_217_7 from '@/assets/material-base/217/7.png'
import img_217_8 from '@/assets/material-base/217/8.png'
import img_217_9 from '@/assets/material-base/217/9.png'
import img_217_10 from '@/assets/material-base/217/10.png'
// 308
import img_308_1 from '@/assets/material-base/308/01.png'
import img_308_2 from '@/assets/material-base/308/02.png'
import img_308_3 from '@/assets/material-base/308/03.png'
import img_308_4 from '@/assets/material-base/308/04.png'
import img_308_5 from '@/assets/material-base/308/05.png'
import img_308_6 from '@/assets/material-base/308/06.png'
import img_308_7 from '@/assets/material-base/308/07.png'
import img_308_8 from '@/assets/material-base/308/08.png'
// import img_308_9 from '@/assets/material-base/308/09.png'
import img_308_10 from '@/assets/material-base/308/10.png'
import img_308_11 from '@/assets/material-base/308/11.png'
import img_308_12 from '@/assets/material-base/308/12.png'
import img_308_13 from '@/assets/material-base/308/13.png'
import img_308_14 from '@/assets/material-base/308/14.png'
import img_308_15 from '@/assets/material-base/308/15.png'
import img_308_16 from '@/assets/material-base/308/16.png'
import img_308_17 from '@/assets/material-base/308/17.png'
import img_308_18 from '@/assets/material-base/308/18.png'
import img_308_19 from '@/assets/material-base/308/19.png'
import img_308_20 from '@/assets/material-base/308/20.png'
import img_308_21 from '@/assets/material-base/308/21.png'
import img_308_22 from '@/assets/material-base/308/22.png'
import img_308_23 from '@/assets/material-base/308/23.png'
import img_308_24 from '@/assets/material-base/308/24.png'
import img_308_25 from '@/assets/material-base/308/25.jpg'
import img_308_26 from '@/assets/material-base/308/26.jpg'
import img_308_27 from '@/assets/material-base/308/27.jpg'
import img_308_28 from '@/assets/material-base/308/28.jpg'
import img_308_29 from '@/assets/material-base/308/29.jpg'
import img_308_30 from '@/assets/material-base/308/30.jpg'
import img_308_31 from '@/assets/material-base/308/31.jpg'
import img_310_01 from '@/assets/material-base/310/01.jpg'
import img_310_02 from '@/assets/material-base/310/02.jpg'
import img_310_03 from '@/assets/material-base/310/03.jpg'
import img_310_04 from '@/assets/material-base/310/04.jpg'
import img_310_05 from '@/assets/material-base/310/05.jpg'
import img_310_06 from '@/assets/material-base/310/06.jpg'
import img_310_07 from '@/assets/material-base/310/07.jpg'
import img_310_08 from '@/assets/material-base/310/08.jpg'
import img_310_09 from '@/assets/material-base/310/09.jpg'
import img_310_10 from '@/assets/material-base/310/10.jpg'
import img_310_13 from '@/assets/material-base/310/13.jpg'
// import img_310_12 from '@/assets/material-base/310/12.jpg'

export interface ICabinet {
  title: string
  subtitle: string
  images: IImageItem[]
}

export interface IImageItem {
  src: string
  caption?: string
}

export const dataContent: ICabinet[] = [
  {
    title: 'Кабінет 211В',
    subtitle: 'Електрообладнання автомобільних систем',
    images: [
      { src: img_211_1 },
      { src: img_211_2 },
      { src: img_211_3 },
      { src: img_211_4 },
      { src: img_211_5,  caption: 'Стенд для дослідження параметрів, характеристик і принципу роботи системи електропостачання' },
      { src: img_211_6,  caption: 'Стенд для дослідження принципу роботи системи освітлення і світлової сигналізації' },
      { src: img_211_7,  caption: 'Стенд для дослідження параметрів і принципу роботи електронної системи запалювання' },
      { src: img_211_8,  caption: 'Стенд для дослідження параметрів і принципу роботи системи вприску палива' },
      { src: img_211_9,  caption: 'Стенд для дослідження параметрів системи електростартерного пуску двигуна' },
      { src: img_211_10, caption: 'Стенд для дослідження параметрів і характеристик електробензопомпи' },
      { src: img_211_11, caption: 'Стенд для дослідження параметрів і характеристик автомобільної протикрадіжної безпеки' },
      { src: img_211_12, caption: 'Стенд для дослідження стартера в різних режимах роботи' },
      { src: img_211_13 },
    ],
  },
  {
    title: 'Кабінет 308',
    subtitle: 'Електронних та мікропроцесорних систем автотранспортних засобів. Мехатронних систем автомобілів',
    images: [
      { src: img_308_1 },
      { src: img_308_2 },
      { src: img_308_3 },
      { src: img_308_4 },
      { src: img_308_5 },
      { src: img_308_6 },
      { src: img_308_10 },
      { src: img_308_25 },
      { src: img_308_26 },
      { src: img_308_27 },
      { src: img_308_28 },
      { src: img_308_29 },
      { src: img_308_30 },
      { src: img_308_31 },
    //   { src: img_308_32 },
    //   { src: img_308_33 },
    //   { src: img_308_34 },
    //   { src: img_308_35 },
    //   { src: img_308_36 },
    //   { src: img_308_37 },
    //   { src: img_308_38 },
    //   { src: img_308_39 },
    //   { src: img_308_40 },
    //   { src: img_308_41 },
    //   { src: img_308_42 },
      { src: img_308_7,  caption: 'Стенд для дослідження робочих параметрів і характеристик автомобільного парктроніка' },
      { src: img_308_8,  caption: 'Стенд для дослідження робочих параметрів і характеристик автомобільного сидіння з підігрівом' },
    //   { src: img_308_9 },
      { src: img_308_11, caption: 'Стенд для дослідження робочих параметрів і характеристик склопідіймача та центрального замка' },
      { src: img_308_12, caption: 'Стенд для дослідження робочих параметрів і характеристик автомобільної панелі приладів та органів комутації' },
      { src: img_308_13, caption: 'Стенд для дослідження параметрів та характеристик акустичної системи автомобіля' },
      { src: img_308_14, caption: 'Стенд для дослідження параметрів та характеристик системи активної та пасивної безпеки' },
      { src: img_308_15, caption: 'Стенд для дослідження параметрів та характеристик регуляторів напруги автомобільних генераторів' },
      { src: img_308_16, caption: 'Лабораторне місце для дослідження параметрів давачів автомобільних та кабельної в\'язки' },
      { src: img_308_17, caption: 'Лабораторне місце для дослідження параметрів та характеристик електронних блоків керування' },
      { src: img_308_18, caption: 'Лабораторне місце для дослідження параметрів та характеристик виконавчих пристроїв автомобільних систем' },
      { src: img_308_19, caption: 'Лабораторне місце для дослідження параметрів та характеристик обладнання автомобільних систем' },
      { src: img_308_20, caption: 'Лабораторне місце для дослідження параметрів та характеристик обладнання автомобільних систем' },
      { src: img_308_21, caption: 'Лабораторне місце для дослідження параметрів та характеристик обладнання автомобільних систем' },
      { src: img_308_22, caption: 'Лабораторне місце для дослідження параметрів та характеристик обладнання автомобільних систем' },
      { src: img_308_23, caption: 'Лабораторне місце для дослідження параметрів та характеристик обладнання автомобільних систем' },
      { src: img_308_24, caption: 'Лабораторне місце для дослідження параметрів та характеристик давачів електронних систем' },
    ],
  },
  {
    title: 'Кабінет 310',
    subtitle: 'Електроустаткування гібридних та електричних транспортних засобів',
    images: [
      { src: img_310_01 },
      { src: img_310_02 },
      { src: img_310_03 },
      { src: img_310_04 },
      { src: img_310_05 },
      { src: img_310_06 },
      { src: img_310_07 },
      { src: img_310_08 },
      { src: img_310_09 },
      { src: img_310_10 },
      { src: img_310_13 },
    //   { src: img_310_12 },
    ]
  },
  {
    title: 'Кабінет 217',
    subtitle: 'Електричних машин та основ електроприводу',
    images: [
      { src: img_217_1, caption: 'Лабораторні стенди К4826 для проведення лабораторних робіт з дисциплін Теоретичні основи електротехніки та Електроматеріалознавство' },
      { src: img_217_2, caption: 'Лабораторна установка для проведення лабораторних робіт з дисципліни Електричні машини та основи електроприводу' },
      { src: img_217_3, caption: 'Навчальні стенди з дисципліни Електроматеріалознавство' },
      { src: img_217_4, caption: 'Вимірювальні прилади, навчальні макети і розробки' },
      { src: img_217_5, caption: 'Лабораторна установка для проведення лабораторних робіт з дисципліни Електричні машини та основи електроприводу' },
      { src: img_217_6, caption: 'Діючий макет цифрового тахометра — лабораторні роботи з дисципліни Електричні машини та основи електроприводу' },
      { src: img_217_7 },
      { src: img_217_8 },
      { src: img_217_9 },
      { src: img_217_10 },
    ],
  },
]