import { ingredients } from "../tapes/ingredient";
export type Recipe = {
  id: string;
  name: string;
  slug: ingredients;
  cardname: string;
  cardImage: string;
  popupImage: string;
  ingredients: string[];
  instructions: string[];
};
export const recipes: Recipe[] = [
  {
    id: 'nasu',
    name: 'ナス',
    slug:'nasu',
    cardname: 'マーボーナス',
    cardImage: 'nasu.png',
    popupImage: 'ma-bo-nasu.png', // ファイル名のみ
    ingredients: [
      'ナス: 2本',
      '豚バラ肉: 100g',
      'ごま油: 大さじ1',
      '味噌: 大さじ2',
      'みりん: 大さじ2',
    ],
    instructions: [
      'ナスは乱切りにする。',
      'フライパンにごま油を熱し、豚肉を炒める。',
      '豚肉に火が通ったらナスを加え、さらに炒める。',
      'ナスがしんなりしたら、味噌とみりんを混ぜた調味料を加え、全体に絡める。',
    ],
  },

  {
    id: 'nasu2',
    name: 'ナス',
    slug:'nasu',
    cardname: 'ナスの揚げびたし',
    cardImage: 'nasu.png',
    popupImage: 'nasunoagebitasi.png', // ファイル名のみ
    ingredients: [
      'ナス: 3~4本',
      'めんつゆ(4倍濃縮): 100cc',
      '水: 500cc',
      '生姜: 小さじ1/2',
      '油: 大さじ3',
    ],
    instructions: [
      'ナスを好きな形に切る。',
      'フライパンに油を熱し、ナスを揚げ焼きする。',
      'めんつゆ、生姜、水を混ぜる。',
      'ナスに火が通ったら③に浸す。',
    ],
  },


  
  
  {
    id: 'kabotya',
    name: 'かぼちゃ',
    slug:'kabocha',
    cardname: 'かぼちゃの煮物',
    cardImage: 'kabotya.png',
    popupImage: 'kabotyanonimono.png', // ファイル名のみ
    ingredients: [
      'かぼちゃ: 大1/4個・小1/2個',
      '水: 200cc',
      '醤油: 大さじ2',
      '酒: 大さじ2',
      'みりん: 大さじ2',
      '砂糖: 大さじ2'
    ],
    instructions: [
      'かぼちゃを好きなサイズに切ります。',
      '煮汁を入れ強火にかけ沸騰したら大きめに切ったかぼちゃを入れ強めの中火にし、アルミ箔で落とし蓋をします。'
    ],
  },

  {
    id: 'kabotya2',
    name: 'かぼちゃ',
    slug:'kabocha',
    cardname: 'かぼちゃの煮物',
    cardImage: 'kabotya.png',
    popupImage: 'kabotyanonimono.png', // ファイル名のみ
    ingredients: [
      'かぼちゃ: 大1/4個・小1/2個',
      '水: 200cc',
      '醤油: 大さじ2',
      '酒: 大さじ2',
      'みりん: 大さじ2',
      '砂糖: 大さじ2'
    ],
    instructions: [
      'かぼちゃを好きなサイズに切ります。',
      '煮汁を入れ強火にかけ沸騰したら大きめに切ったかぼちゃを入れ強めの中火にし、アルミ箔で落とし蓋をします。'
    ],
  },{
    id: 'kabotya3',
    name: 'かぼちゃ',
    slug:'kabocha',
    cardname: 'かぼちゃの煮物',
    cardImage: 'kabotya.png',
    popupImage: 'kabotyanonimono.png', // ファイル名のみ
    ingredients: [
      'かぼちゃ: 大1/4個・小1/2個',
      '水: 200cc',
      '醤油: 大さじ2',
      '酒: 大さじ2',
      'みりん: 大さじ2',
      '砂糖: 大さじ2'
    ],
    instructions: [
      'かぼちゃを好きなサイズに切ります。',
      '煮汁を入れ強火にかけ沸騰したら大きめに切ったかぼちゃを入れ強めの中火にし、アルミ箔で落とし蓋をします。'
    ],
  },
  // 他のレシピもここに追加
];