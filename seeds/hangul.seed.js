const mongoose = require('mongoose')
const Seed = require('../models/Seed')
const connectDB = require('./../config/db')

require('dotenv').config()

connectDB()

const hangul = [
  {
    name: 'a',
    soundsLike: 'a',
    character: 'ㅏ',
    imageUrl: 'https://i.ibb.co/2nmdMms/a.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-a.mp3',
    level: 1
  },
  {
    name: 'ae',
    soundsLike: 'ae',
    character: 'ㅐ',
    imageUrl: 'https://i.ibb.co/kx2hf5q/ae.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ae.mp3',
    level: 5
  },
  {
    name: 'ya',
    soundsLike: 'ya',
    character: 'ㅑ',
    imageUrl: 'https://i.ibb.co/ZM1LSsC/ya.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ya.mp3',
    level: 3
  },
  {
    name: 'yae',
    soundsLike: 'yae',
    character: 'ㅒ',
    imageUrl: 'https://i.ibb.co/FsVX727/yae.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-yae.mp3',
    level: 7
  },
  {
    name: 'eo',
    soundsLike: 'eo',
    character: 'ㅓ',
    imageUrl: 'https://i.ibb.co/C15qNhf/eo.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-eo.mp3',
    level: 1
  },
  {
    name: 'e',
    soundsLike: 'e',
    character: 'ㅔ',
    imageUrl: 'https://i.ibb.co/LSkBhCd/e.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-e.mp3',
    level: 5
  },
  {
    name: 'yeo',
    soundsLike: 'yeo',
    character: 'ㅕ',
    imageUrl: 'https://i.ibb.co/FnGZRH1/yeo.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-yeo.mp3',
    level: 3
  },
  {
    name: 'ye',
    soundsLike: 'ye',
    character: 'ㅖ',
    imageUrl: 'https://i.ibb.co/0QD8gRP/ye.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ye.mp3',
    level: 7
  },
  {
    name: 'o',
    soundsLike: 'o',
    character: 'ㅗ',
    imageUrl: 'https://i.ibb.co/thtsx5V/o.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-o.mp3',
    level: 1
  },
  {
    name: 'wa',
    soundsLike: 'wa',
    character: 'ㅘ',
    imageUrl: 'https://i.ibb.co/2ydwdMM/wa.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-wa.mp3',
    level: 5
  },
  {
    name: 'wae',
    soundsLike: 'wae',
    character: 'ㅙ',
    imageUrl: 'https://i.ibb.co/qJ98PLg/wae.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-wae.mp3',
    level: 7
  },
  {
    name: 'oe',
    soundsLike: 'oe',
    character: 'ㅚ',
    imageUrl: 'https://i.ibb.co/HNw3bjx/oe.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-oe.mp3',
    level: 7
  },
  {
    name: 'yo',
    soundsLike: 'yo',
    character: 'ㅛ',
    imageUrl: 'https://i.ibb.co/TBnr779/yo.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-yo.mp3',
    level: 3
  },
  {
    name: 'u',
    soundsLike: 'u',
    character: 'ㅜ',
    imageUrl: 'https://i.ibb.co/VJhXPD8/u.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-u.mp3',
    level: 1
  },
  {
    name: 'wo',
    soundsLike: 'wo',
    character: 'ㅝ',
    imageUrl: 'https://i.ibb.co/jHTtJZc/wo.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-wo.mp3',
    level: 5
  },
  {
    name: 'we',
    soundsLike: 'we',
    character: 'ㅞ',
    imageUrl: 'https://i.ibb.co/y6BTC15/we.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-we.mp3',
    level: 7
  },
  {
    name: 'wi',
    soundsLike: 'wi',
    character: 'ㅟ',
    imageUrl: 'https://i.ibb.co/rsc5tvV/wi.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-wi.mp3',
    level: 5
  },
  {
    name: 'yu',
    soundsLike: 'yu',
    character: 'ㅠ',
    imageUrl: 'https://i.ibb.co/KFWTYzV/yu.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-yu.mp3',
    level: 3
  },
  {
    name: 'eu',
    soundsLike: 'eu',
    character: 'ㅡ',
    imageUrl: 'https://i.ibb.co/m6syDnp/eu.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-eu.mp3',
    level: 1
  },
  {
    name: 'ui',
    soundsLike: 'ui',
    character: 'ㅢ',
    imageUrl: 'https://i.ibb.co/ggJC00y/ui.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ui.mp3',
    level: 3
  },
  {
    name: 'i',
    soundsLike: 'i',
    character: 'ㅣ',
    imageUrl: 'https://i.ibb.co/q1LGF0Z/i.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-i.mp3',
    level: 1
  },
  {
    name: 'giyeok',
    soundsLike: 'g',
    character: 'ㄱ',
    imageUrl: 'https://i.ibb.co/SNVPQqv/giyeok.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-giyeok.mp3',
    level: 4
  },
  {
    name: 'ssanggiyeok',
    soundsLike: 'kk',
    character: 'ㄲ',
    imageUrl: 'https://i.ibb.co/6PGkHVS/ssanggiyeok.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ssanggiyeok.mp3',
    level: 8
  },
  {
    name: 'nieun',
    soundsLike: 'n',
    character: 'ㄴ',
    imageUrl: 'https://i.ibb.co/CQzJf7n/nieun.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-nieun-new.mp3',
    level: 2
  },
  {
    name: 'digeut',
    soundsLike: 'd',
    character: 'ㄷ',
    imageUrl: 'https://i.ibb.co/fQrrcvX/digeut.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-digeut.mp3',
    level: 4
  },
  {
    name: 'ssangdigeut',
    soundsLike: 'tt',
    character: 'ㄸ',
    imageUrl: 'https://i.ibb.co/s2NdnC5/ssangdigeut.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ssangdigeut.mp3',
    level: 8
  },
  {
    name: 'rieul',
    soundsLike: 'r',
    character: 'ㄹ',
    imageUrl: 'https://i.ibb.co/rwzWf9Z/rieul.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-rieul.mp3',
    level: 2
  },
  {
    name: 'mieum',
    soundsLike: 'm',
    character: 'ㅁ',
    imageUrl: 'https://i.ibb.co/sgHmwF8/mieum.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-mieum.mp3',
    level: 2
  },
  {
    name: 'bieup',
    soundsLike: 'b',
    character: 'ㅂ',
    imageUrl: 'https://i.ibb.co/kgJ9DTk/bieup.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-bieup.mp3',
    level: 4
  },
  {
    name: 'ssangbieup',
    soundsLike: 'pp',
    character: 'ㅃ',
    imageUrl: 'https://i.ibb.co/SyJJRcr/ssangbieup.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ssangbieup.mp3',
    level: 8
  },
  {
    name: 'siot',
    soundsLike: 's',
    character: 'ㅅ',
    imageUrl: 'https://i.ibb.co/GFV8tjL/siot.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-siot.mp3',
    level: 4
  },
  {
    name: 'ssangsiot',
    soundsLike: 'ss',
    character: 'ㅆ',
    imageUrl: 'https://i.ibb.co/wr7WHRw/ssangsiot.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ssangsiot.mp3',
    level: 8
  },
  {
    name: 'ieung',
    soundsLike: 'ng',
    character: 'ㅇ',
    imageUrl: 'https://i.ibb.co/vZGYphw/ieung.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/ieung.mp3',
    level: 2
  },
  {
    name: 'jieut',
    soundsLike: 'j',
    character: 'ㅈ',
    imageUrl: 'https://i.ibb.co/0GmVdpr/jieut.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-jieut.mp3',
    level: 4
  },
  {
    name: 'ssangjieut',
    soundsLike: 'jj',
    character: 'ㅉ',
    imageUrl: 'https://i.ibb.co/SvG9DBG/ssangjieut.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-ssangjieut.mp3',
    level: 8
  },
  {
    name: 'chieut',
    soundsLike: 'ch',
    character: 'ㅊ',
    imageUrl: 'https://i.ibb.co/3M7f9WX/chieut.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-chieut.mp3',
    level: 6
  },
  {
    name: 'kieuk',
    soundsLike: 'k',
    character: 'ㅋ',
    imageUrl: 'https://i.ibb.co/1X0jw02/kieuk.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-kieuk.mp3',
    level: 6
  },
  {
    name: 'tieut',
    soundsLike: 't',
    character: 'ㅌ',
    imageUrl: 'https://i.ibb.co/zrxtjR3/tieut.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-tieut-new.mp3',
    level: 6
  },
  {
    name: 'pieup',
    soundsLike: 'p',
    character: 'ㅍ',
    imageUrl: 'https://i.ibb.co/Vjg359F/pieup.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-pieup-new.mp3',
    level: 6
  },
  {
    name: 'hieut',
    soundsLike: 'h',
    character: 'ㅎ',
    imageUrl: 'https://i.ibb.co/pdrqgsC/hieut.png',
    audioUrl: 'https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-hieut.mp3',
    level: 6
  }
];

const createSeed = async (data) => {
  try {
    const createdSeed = await Seed.create(data);
    console.log(createdSeed);
    return mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

createSeed(hangul)

//node seeds\hangul.seed.js