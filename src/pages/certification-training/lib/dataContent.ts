// zaverucha
import img_z_1 from '@/assets/qualification/zaverucha/01.jpg'
import img_z_2 from '@/assets/qualification/zaverucha/02.jpg'
import img_z_3 from '@/assets/qualification/zaverucha/03.jpg'
import img_z_4 from '@/assets/qualification/zaverucha/04.jpg'
import img_z_5 from '@/assets/qualification/zaverucha/05.jpg'
import img_z_6 from '@/assets/qualification/zaverucha/06.jpg'
import img_z_7 from '@/assets/qualification/zaverucha/07.jpg'
import img_z_8 from '@/assets/qualification/zaverucha/08.jpg'
import img_z_9 from '@/assets/qualification/zaverucha/09.jpg'
import img_z_10 from '@/assets/qualification/zaverucha/10.jpg'
import img_z_11 from '@/assets/qualification/zaverucha/11.jpg'
import img_z_12 from '@/assets/qualification/zaverucha/12.jpg'
import img_z_13 from '@/assets/qualification/zaverucha/13.jpg'
import img_z_14 from '@/assets/qualification/zaverucha/14.jpg'
import img_z_15 from '@/assets/qualification/zaverucha/15.jpg'
import img_z_16 from '@/assets/qualification/zaverucha/16.jpg'
import img_z_17 from '@/assets/qualification/zaverucha/17.jpg'
// kotyk
import img_k_1 from '@/assets/qualification/kotyk/01.jpg'
import img_k_2_1 from '@/assets/qualification/kotyk/02/0001.jpg'
import img_k_2_2 from '@/assets/qualification/kotyk/02/0001.jpg'
import img_k_3_1 from '@/assets/qualification/kotyk/03/0001.jpg'
import img_k_3_2 from '@/assets/qualification/kotyk/03/0001.jpg'
import img_k_4_1 from '@/assets/qualification/kotyk/04/0001.jpg'
import img_k_4_2 from '@/assets/qualification/kotyk/04/0001.jpg'
import img_k_5_1 from '@/assets/qualification/kotyk/05/0001.jpg'
import img_k_5_2 from '@/assets/qualification/kotyk/05/0001.jpg'
import img_k_6 from '@/assets/qualification/kotyk/06.jpg'
import img_k_7 from '@/assets/qualification/kotyk/07.jpg'
import img_k_8 from '@/assets/qualification/kotyk/08.jpg'
import img_k_9 from '@/assets/qualification/kotyk/09.jpg'
import img_k_10 from '@/assets/qualification/kotyk/10.jpg'
import img_k_11 from '@/assets/qualification/kotyk/11.jpg'
import img_k_12 from '@/assets/qualification/kotyk/12.jpg'
import img_k_13 from '@/assets/qualification/kotyk/13.jpg'
import img_k_14 from '@/assets/qualification/kotyk/14.jpg'
import img_k_15 from '@/assets/qualification/kotyk/15.jpg'
import img_k_16 from '@/assets/qualification/kotyk/16.jpg'
import img_k_17 from '@/assets/qualification/kotyk/17.jpg'
import img_k_18 from '@/assets/qualification/kotyk/18.jpg'
import img_k_19 from '@/assets/qualification/kotyk/19.jpg'
import img_k_20 from '@/assets/qualification/kotyk/20.jpg'
import img_chap_01 from '@/assets/qualification/chaply/01.png'
import img_chap_02 from '@/assets/qualification/chaply/02.jpg'
import img_chap_03 from '@/assets/qualification/chaply/03.jpg'
import img_chap_04 from '@/assets/qualification/chaply/04.jpg'
import img_chap_05 from '@/assets/qualification/chaply/04.jpg'
import img_chap_06 from '@/assets/qualification/chaply/06.jpg'
import img_vrb_01 from '@/assets/qualification/vorobets/01.jpg'
import img_vrb_02 from '@/assets/qualification/vorobets/02.jpg'
import img_vrb_03 from '@/assets/qualification/vorobets/03.jpg'


export interface ICertItem {
  type: 'image' | 'text' | 'pdf'
  src?: string
  text?: string
}

export interface ICertification {
  name: string
  items: ICertItem[]
}

export const dataContent: ICertification[] = [
  {
    name: 'Заверуха Руслан Романович',
    items: [
      { type: 'text', text: 'Співорганізатор навчально-методичних конференцій «Прикладні аспекти автомобільної галузі та сучасні педагогічні прийоми досягнення результату». ТК ТНТУ. 2015.' },
      { type: 'text', text: 'Міжнародна конференція екологічного спрямування TEMPUS IV Eco BRU у м. Надвірна. 2016.' },
      { type: 'text', text: '«Методи та засоби побудови інтегрованої освіти фахівця автомобільної галузі». ТК ТНТУ. 2017.' },
      { type: 'text', text: 'ТНТУ ім. І.Пулюя, кафедра автомобілів, стажування, довідка № 2/28-318 від 29.03.2018р.' },
      { type: 'text', text: 'Стажування на базі ТОВ «Кристал Моторс», напрям: «Діагностика, ремонт і обслуговування електричних та електронних систем автомобілів», 4.10.21–4.11.21, 60 год., довідка № 109 від 04.11.2021р.' },
      { type: 'image', src: img_z_1 },
      { type: 'image', src: img_z_2 },
      { type: 'image', src: img_z_3 },
      { type: 'image', src: img_z_4 },
      { type: 'image', src: img_z_5 },
      { type: 'image', src: img_z_6 },
      { type: 'image', src: img_z_7 },
      { type: 'image', src: img_z_8 },
      { type: 'image', src: img_z_9 },
      { type: 'image', src: img_z_10 },
      { type: 'image', src: img_z_11 },
      { type: 'image', src: img_z_12 },
      { type: 'image', src: img_z_13 },
      { type: 'image', src: img_z_14 },
      { type: 'image', src: img_z_15 },
      { type: 'image', src: img_z_16 },
      { type: 'image', src: img_z_17 },
    ],
  },
  {
    name: 'Котик Марія Іванівна',
    items: [
      { type: 'image', src: img_k_1 },
      { type: 'image', src: img_k_2_1 },
      { type: 'image', src: img_k_2_2 },
      { type: 'image', src: img_k_3_1 },
      { type: 'image', src: img_k_3_2 },
      { type: 'image', src: img_k_4_1 },
      { type: 'image', src: img_k_4_2 },
      { type: 'image', src: img_k_5_1 },
      { type: 'image', src: img_k_5_2 },
      { type: 'image', src: img_k_6 },
      { type: 'image', src: img_k_7 },
      { type: 'image', src: img_k_8 },
      { type: 'image', src: img_k_9 },
      { type: 'image', src: img_k_10 },
      { type: 'image', src: img_k_11 },
      { type: 'image', src: img_k_12 },
      { type: 'image', src: img_k_13 },
      { type: 'image', src: img_k_14 },
      { type: 'image', src: img_k_15 },
      { type: 'image', src: img_k_16 },
      { type: 'image', src: img_k_17 },
      { type: 'image', src: img_k_18 },
      { type: 'image', src: img_k_19 },
      { type: 'image', src: img_k_20 },
    ],
  },
  {
    name: 'Чаплій Дмитро Володимирович',
    items: [
      { type: 'image', src: img_chap_01 },
      { type: 'image', src: img_chap_02 },
      { type: 'image', src: img_chap_03 },
      { type: 'image', src: img_chap_04 },
      { type: 'image', src: img_chap_05 },
      { type: 'image', src: img_chap_06 },
      
    ],
  },
  {
    name: 'Воробець Володимир Юрійович',
    items: [
      { type: 'image', src: img_vrb_01 },
      { type: 'image', src: img_vrb_02 },
      { type: 'image', src: img_vrb_03 },
    ],
  },
]