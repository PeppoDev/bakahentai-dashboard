import React from "react";
//components
import DropZoneContainer from "../DropZoneContainer";
import MainInput from "../Input";
import InputVideo from "../InputVideo";
import * as Radio from "../Radio";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";
import exclamationIcon from "../../assets/icons/exclamation.svg";

export default function EpisodeItem({ id, name }) {
  const [showItens, setShowItens] = React.useState(true);
  const [files, setFiles] = React.useState([]);
  const [hour, setHour] = React.useState(0);
  const [, setVisibility] = React.useState("");

  let hentais_list = [
    {
      id: 1,
      name: "Otome Dori",
      link: "otome-dori",
      original_name: "オトメドリ",
      release_year: "2012",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/1/poiaf.png",
        "https://bakahentai.org/storage/1/ljsxt.png",
      ],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:35.000000Z",
      updated_at: "2020-07-11T12:34:35.000000Z",
    },
    {
      id: 2,
      name: "Succuba Mist Story The Animation",
      link: "succuba-mist-story-the-animation",
      original_name: "さきゅばみすと・すとーりー The Animation",
      release_year: "2017",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/2/kdkbx.png",
        "https://bakahentai.org/storage/2/ifylj.png",
      ],
      studios: [
        {
          id: 2,
          name: "Bootleg",
        },
      ],
      genders: [
        {
          id: 9,
          name: "Anal",
        },
      ],
      created_at: "2020-07-11T12:34:35.000000Z",
      updated_at: "2020-07-11T12:34:35.000000Z",
    },
    {
      id: 3,
      name: "Furueru Kuchibiru",
      link: "furueru-kuchibiru",
      original_name: "フルエルクチビル",
      release_year: "2014",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/3/nmzhz.png",
        "https://bakahentai.org/storage/3/jblmy.png",
      ],
      studios: [
        {
          id: 6,
          name: "PashminaA",
        },
      ],
      genders: [
        {
          id: 2,
          name: "Escolar",
        },
      ],
      created_at: "2020-07-11T12:34:35.000000Z",
      updated_at: "2020-07-11T12:34:35.000000Z",
    },
    {
      id: 4,
      name: "Ikoku na Retro",
      link: "ikoku-na-retro",
      original_name: "異国なレトロ",
      release_year: "2015",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/4/omypv.png"],
      studios: [
        {
          id: 6,
          name: "PashminaA",
        },
      ],
      genders: [
        {
          id: 14,
          name: "Empregadas",
        },
      ],
      created_at: "2020-07-11T12:34:35.000000Z",
      updated_at: "2020-07-11T12:34:35.000000Z",
    },
    {
      id: 5,
      name: "Koi Maguwai",
      link: "koi-maguwai",
      original_name: "恋まぐわい",
      release_year: "2014",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/5/vnwuz.png"],
      studios: [
        {
          id: 6,
          name: "PashminaA",
        },
      ],
      genders: [
        {
          id: 15,
          name: "Paizuri",
        },
      ],
      created_at: "2020-07-11T12:34:35.000000Z",
      updated_at: "2020-07-11T12:34:35.000000Z",
    },
    {
      id: 6,
      name: "Shoujo-tachi no Sadism The Animation",
      link: "shoujo-tachi-no-sadism-the-animation",
      original_name: "少女達の茶道ism THE ANIMATION",
      release_year: "2016",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/6/jfono.png",
        "https://bakahentai.org/storage/6/ctcmv.png",
      ],
      studios: [
        {
          id: 7,
          name: "Chippai",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
      ],
      created_at: "2020-07-11T12:34:35.000000Z",
      updated_at: "2020-07-11T12:34:35.000000Z",
    },
    {
      id: 7,
      name: "Hitou Meguri Kakure Yu: Mao Hen",
      link: "hitou-meguri-kakure-yu-mao-hen",
      original_name: "秘湯めぐり 隠れ湯 舞桜編",
      release_year: "2013",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/7/pfmjj.png",
        "https://bakahentai.org/storage/7/lpsbp.png",
      ],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 8,
      name: "Daraku Reijou The Animation",
      link: "daraku-reijou-the-animation",
      original_name: "堕落令嬢 THE ANIMATION",
      release_year: "2017",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/8/widoo.png"],
      studios: [
        {
          id: 2,
          name: "Bootleg",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 9,
      name: "Oide yo! Mizuryuu Kei Land",
      link: "oide-yo-mizuryuu-kei-land",
      original_name: "おいでよ！水龍敬ランド",
      release_year: "2017",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/9/iadma.png",
        "https://bakahentai.org/storage/9/bhdpm.png",
      ],
      studios: [
        {
          id: 3,
          name: "Bunnywalker",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 10,
      name: "Imouto Bitch ni Shiboraretai",
      link: "imouto-bitch-ni-shiboraretai",
      original_name: "妹ビッチに搾られたい",
      release_year: "2017",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/10/sebys.png",
        "https://bakahentai.org/storage/10/upzmy.png",
        "https://bakahentai.org/storage/10/buiqv.png",
      ],
      studios: [
        {
          id: 3,
          name: "Bunnywalker",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 11,
      name: "Baka Dakedo Chinchin Shaburu no Dake wa Jouzu na Chii-chan",
      link: "baka-dakedo-chinchin-shaburu-no-dake-wa-jouzu-na-chii-chan",
      original_name: "バカだけどチンチンしゃぶるのだけはじょうずなちーちゃん",
      release_year: "2017",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/11/qnyna.png",
        "https://bakahentai.org/storage/11/kclel.png",
      ],
      studios: [
        {
          id: 3,
          name: "Bunnywalker",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 12,
      name: "Amanee!",
      link: "amanee",
      original_name: "アマネェ!",
      release_year: "2013",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/12/hdlrv.png"],
      studios: [
        {
          id: 6,
          name: "PashminaA",
        },
      ],
      genders: [
        {
          id: 6,
          name: "Milf",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 13,
      name: "Bi-chiku Beach",
      link: "bi-chiku-beach",
      original_name: "ビーチクビーチ",
      release_year: "2011",
      censure: "1",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/13/sgupk.png"],
      studios: [
        {
          id: 4,
          name: "Pink Pineapple",
        },
      ],
      genders: [
        {
          id: 17,
          name: "Harém",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 14,
      name: "Idol Sister",
      link: "idol-sister",
      original_name: "アイドル☆シスター",
      release_year: "2012",
      censure: "1",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/14/cztsf.png"],
      studios: [
        {
          id: 5,
          name: "Union Cho",
        },
      ],
      genders: [
        {
          id: 17,
          name: "Harém",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 15,
      name: "Youkoso! Sukebe Elf no Mori e",
      link: "youkoso-sukebe-elf-no-mori-e",
      original_name: "ようこそ! スケベエルフの森へ",
      release_year: "2018",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/15/mgqjs.png",
        "https://bakahentai.org/storage/15/ehllh.png",
        "https://bakahentai.org/storage/15/bthgh.png",
      ],
      studios: [
        {
          id: 3,
          name: "Bunnywalker",
        },
      ],
      genders: [
        {
          id: 17,
          name: "Harém",
        },
      ],
      created_at: "2020-07-11T12:34:36.000000Z",
      updated_at: "2020-07-11T12:34:36.000000Z",
    },
    {
      id: 16,
      name: "Muttsuri Do Sukebe Ro Gibo Shimai no Honshitsu Minuite Sex Zanmai",
      link: "muttsuri-do-sukebe-ro-gibo-shimai-no-honshitsu-minuite-sex-zanmai",
      original_name: "むっつりドスケベ露義母姉妹の本質見抜いてセックス三昧",
      release_year: "2018",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/16/vpmxr.png",
        "https://bakahentai.org/storage/16/wsraf.png",
        "https://bakahentai.org/storage/16/ktjrg.png",
      ],
      studios: [
        {
          id: 3,
          name: "Bunnywalker",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:37.000000Z",
      updated_at: "2020-07-11T12:34:37.000000Z",
    },
    {
      id: 17,
      name: "JK Bitch ni Shiboraretai",
      link: "jk-bitch-ni-shiboraretai",
      original_name: "JKビッチに搾られたい♥",
      release_year: "2016",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/17/gdiuc.png",
        "https://bakahentai.org/storage/17/ugjed.png",
        "https://bakahentai.org/storage/17/kuuaz.png",
      ],
      studios: [
        {
          id: 3,
          name: "Bunnywalker",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:37.000000Z",
      updated_at: "2020-07-11T12:34:37.000000Z",
    },
    {
      id: 18,
      name:
        "Pakomane: Watashi, Kyou kara Meimon Yakyuubu no Seishorigakari ni Narimasu... The Animation",
      link:
        "pakomane-watashi-kyou-kara-meimon-yakyuubu-no-seishorigakari-ni-narimasu...-the-animation",
      original_name:
        "パコマネ わたし、今日から名門野球部の性処理係になります… THE ANIMATION",
      release_year: "2017",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/18/usrvo.png",
        "https://bakahentai.org/storage/18/bojaa.png",
      ],
      studios: [
        {
          id: 4,
          name: "Pink Pineapple",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
      ],
      created_at: "2020-07-11T12:34:37.000000Z",
      updated_at: "2020-07-11T12:34:37.000000Z",
    },
    {
      id: 19,
      name: "Saimin Seishidou",
      link: "saimin-seishidou",
      original_name: "催眠性指導",
      release_year: "2019",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/19/nwbrj.png",
        "https://bakahentai.org/storage/19/ygnzh.png",
        "https://bakahentai.org/storage/19/otpis.png",
      ],
      studios: [
        {
          id: 3,
          name: "Bunnywalker",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
      ],
      created_at: "2020-07-11T12:34:37.000000Z",
      updated_at: "2020-07-11T12:34:37.000000Z",
    },
    {
      id: 20,
      name: "Brandish",
      link: "brandish",
      original_name: "Ｂｒａｎｄｉｓｈ",
      release_year: "2012",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/20/nnupw.png",
        "https://bakahentai.org/storage/20/hzkiv.png",
      ],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:37.000000Z",
      updated_at: "2020-07-11T12:34:37.000000Z",
    },
    {
      id: 21,
      name: "Sagurare Otome The Animation",
      link: "sagurare-otome-the-animation",
      original_name: "サグラレ堕メ THE ANIMATION",
      release_year: "2017",
      censure: "0",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/21/nfcbt.png",
        "https://bakahentai.org/storage/21/mfllv.png",
        "https://bakahentai.org/storage/21/ntpxp.png",
      ],
      studios: [
        {
          id: 2,
          name: "Bootleg",
        },
      ],
      genders: [
        {
          id: 5,
          name: "Peitões",
        },
      ],
      created_at: "2020-07-11T12:34:38.000000Z",
      updated_at: "2020-07-11T12:34:38.000000Z",
    },
    {
      id: 22,
      name: "Tsun Tsun Maid wa Ero Ero Desu",
      link: "tsun-tsun-maid-wa-ero-ero-desu",
      original_name: "ツンツンメイドはエロエロです",
      release_year: "2013",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/22/krfwy.png",
        "https://bakahentai.org/storage/22/hmtye.png",
      ],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:38.000000Z",
      updated_at: "2020-07-11T12:34:38.000000Z",
    },
    {
      id: 23,
      name: "Anoko to Iikoto",
      link: "anoko-to-iikoto",
      original_name: "アノコトイイコト",
      release_year: "2015",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/23/tohcv.png",
        "https://bakahentai.org/storage/23/wadjw.png",
        "https://bakahentai.org/storage/23/byzsv.png",
      ],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:38.000000Z",
      updated_at: "2020-07-11T12:34:38.000000Z",
    },
    {
      id: 24,
      name: "Ane Kyun! Joshi ga Ie ni Kita!",
      link: "ane-kyun-joshi-ga-ie-ni-kita",
      original_name: "姉キュン! ~女子が家に来た!~",
      release_year: "2014",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/24/gpqfa.png"],
      studios: [
        {
          id: 6,
          name: "PashminaA",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
      ],
      created_at: "2020-07-11T12:34:38.000000Z",
      updated_at: "2020-07-11T12:34:38.000000Z",
    },
    {
      id: 25,
      name: "Pet Life",
      link: "pet-life",
      original_name: "ペットライフ",
      release_year: "2015",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/25/pzijk.png"],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 22,
          name: "Bondage",
        },
      ],
      created_at: "2020-07-11T12:34:38.000000Z",
      updated_at: "2020-07-11T12:34:38.000000Z",
    },
    {
      id: 26,
      name: "Nee Summer!",
      link: "nee-summer",
      original_name: "姉SUMMER!",
      release_year: "2011",
      censure: "1",
      quality: "1080P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/26/ajwva.png",
        "https://bakahentai.org/storage/26/quths.png",
      ],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
      ],
      created_at: "2020-07-11T12:34:38.000000Z",
      updated_at: "2020-07-11T12:34:38.000000Z",
    },
    {
      id: 27,
      name: "Dainiji Ura Nyuugakushiken The Animation",
      link: "dainiji-ura-nyuugakushiken-the-animation",
      original_name: "第二次裏入学試験 THE ANIMATION",
      release_year: "2017",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/27/oblvh.png"],
      studios: [
        {
          id: 2,
          name: "Bootleg",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:39.000000Z",
      updated_at: "2020-07-11T12:34:39.000000Z",
    },
    {
      id: 28,
      name: "Zutto Suki Datta",
      link: "zutto-suki-datta",
      original_name: "ずっと好きだった",
      release_year: "2017",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/28/srwab.png",
        "https://bakahentai.org/storage/28/eqzkv.png",
      ],
      studios: [
        {
          id: 8,
          name: "Queen Bee",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:39.000000Z",
      updated_at: "2020-07-11T12:34:39.000000Z",
    },
    {
      id: 29,
      name: "Watashi ga Toriko ni Natte Yaru",
      link: "watashi-ga-toriko-ni-natte-yaru",
      original_name: "私が虜になって犯る",
      release_year: "2015",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/29/nwlmu.png",
        "https://bakahentai.org/storage/29/igrlk.png",
      ],
      studios: [
        {
          id: 8,
          name: "Queen Bee",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:39.000000Z",
      updated_at: "2020-07-11T12:34:39.000000Z",
    },
    {
      id: 30,
      name: "Tsunpuri",
      link: "tsunpuri",
      original_name: "ツンプリ",
      release_year: "2015",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/30/rdtrr.png"],
      studios: [
        {
          id: 9,
          name: "Erozuki",
        },
      ],
      genders: [
        {
          id: 14,
          name: "Empregadas",
        },
      ],
      created_at: "2020-07-11T12:34:39.000000Z",
      updated_at: "2020-07-11T12:34:39.000000Z",
    },
    {
      id: 31,
      name:
        "Seiso de Majime na Kanojo ga, Saikyou Yaricir ni Kanyuu Saretara...?",
      link:
        "seiso-de-majime-na-kanojo-ga-saikyou-yaricir-ni-kanyuu-saretara...",
      original_name:
        "清楚で真面目な彼女が, 最凶ヤリサーに勧誘されたら...? THE ANIMATION",
      release_year: "2017",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/31/gkqxd.png"],
      studios: [
        {
          id: 4,
          name: "Pink Pineapple",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:39.000000Z",
      updated_at: "2020-07-11T12:34:39.000000Z",
    },
    {
      id: 32,
      name: "Shoujo Ramune",
      link: "shoujo-ramune",
      original_name: "小女ラムネ",
      release_year: "2016",
      censure: "1",
      quality: "1080P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/32/vzvxm.png",
        "https://bakahentai.org/storage/32/ycbte.png",
      ],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:39.000000Z",
      updated_at: "2020-07-11T12:34:39.000000Z",
    },
    {
      id: 33,
      name: "Fela Pure: Mitarashi-san Chi no Jijou The Animation",
      link: "fela-pure-mitarashi-san-chi-no-jijou-the-animation",
      original_name: "フェラピュア ~御手洗さん家の事情~ THE ANIMATION",
      release_year: "2014",
      censure: "1",
      quality: "720P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/33/mzngq.png"],
      studios: [
        {
          id: 4,
          name: "Pink Pineapple",
        },
      ],
      genders: [
        {
          id: 18,
          name: "Ahegao",
        },
      ],
      created_at: "2020-07-11T12:34:39.000000Z",
      updated_at: "2020-07-11T12:34:39.000000Z",
    },
    {
      id: 34,
      name: "Kanojo ga Nekomimi ni Kigaetara",
      link: "kanojo-ga-nekomimi-ni-kigaetara",
      original_name: "彼女がネコミミに着替えたら",
      release_year: "2015",
      censure: "0",
      quality: "1080P",
      status: "Completo",
      covers: [
        "https://bakahentai.org/storage/34/bakahentai_c01_kanojo_ga_nekomimi_ni_kiagetara.png",
      ],
      studios: [
        {
          id: 6,
          name: "PashminaA",
        },
      ],
      genders: [
        {
          id: 5,
          name: "Peitões",
        },
        {
          id: 8,
          name: "Stockings",
        },
        {
          id: 9,
          name: "Anal",
        },
        {
          id: 12,
          name: "Romance",
        },
      ],
      created_at: "2020-07-13T19:53:45.000000Z",
      updated_at: "2020-07-13T19:53:45.000000Z",
    },
    {
      id: 35,
      name: "Kanojo ga",
      link: "kanojo-ga",
      original_name: "鬼父",
      release_year: "2015",
      censure: "0",
      quality: "720P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/35/Sem-Título-2.jpg"],
      studios: [
        {
          id: 1,
          name: "Mary Jane",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
        {
          id: 8,
          name: "Stockings",
        },
      ],
      created_at: "2020-07-13T20:23:30.000000Z",
      updated_at: "2020-07-13T20:23:30.000000Z",
    },
    {
      id: 36,
      name: "Kanojo ga 2",
      link: "kanojo-ga-2",
      original_name: "鬼父",
      release_year: "2015",
      censure: "0",
      quality: "720P",
      status: "Completo",
      covers: ["https://bakahentai.org/storage/36/vnwuz.jpg"],
      studios: [
        {
          id: 4,
          name: "Pink Pineapple",
        },
      ],
      genders: [
        {
          id: 7,
          name: "Colegial",
        },
        {
          id: 8,
          name: "Stockings",
        },
      ],
      created_at: "2020-07-13T20:25:50.000000Z",
      updated_at: "2020-07-13T20:25:50.000000Z",
    },
  ];
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
  const radioRef = React.useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPop = open ? "simple-popover" : undefined;

  const radioClick = () => {
    radioRef.current.click();
  };

  return (
    <article className="register-episodes-container">
      <div
        className={`episode-banner ${
          showItens ? "animation-img" : "animation-img-close"
        }`}
        onClick={() => setShowItens(showItens ? false : true)}
      >
        <img src={playIcon} alt="" />
        <p>{`Episódio ${id}`}</p>
      </div>

      {showItens ? (
        <>
          <article className="grid-episode-item">
            <article className="main-left">
              {/* <MainInput
                valueName={name}
                className="input-episodes"
                label="Título do Hentai Selecionado"
                placeholder="Ex. Algum anime"
                list="data_hentai"
              />
              <datalist id="data_hentai">
                {hentais_list.map((item, key) => (
                  <option key={key} value={item.name} />
                ))}
              </datalist> */}
              {/* <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ backgroundColor: "white" }}
                fullWidth={true}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=""
                    variant="outlined"
                    style={{
                      outline: 0,
                      fontSize: "72px",
                      fontFamily: "Source Sans Pro",
                    }}
                  />
                )}
              /> */}

              <div className="autocomplete">
                <Autocomplete
                  id="combo-box-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 700 }}
                  renderInput={(params) => (
                    <div>
                      <TextField
                        {...params}
                        label=""
                        variant="outlined"
                        placeholder="Ex:Alguma coisa"
                      />
                    </div>
                  )}
                />

                <label htmlFor="text">
                  Título do Hentai Selecionado <span>*</span>
                </label>
              </div>
              <MainInput
                className="input-episodes"
                label="Número de Episódios"
                placeholder="Ex. Algum anime"
              />
              <MainInput
                className="input-episodes"
                label="M3U8"
                placeholder="Ex. Algum anime"
              />
            </article>
            <article className="main-right">
              <DropZoneContainer
                poptext="É necessário um total de 9 imagens para o cadastro ser
                    concluído, a imagem favoritada será usada como thumbnail e
                    as demais como previews"
                text="Clique ou arraste uma imagem de até 1280x720"
                limit={9}
                setFiles={setFiles}
                files={files}
              />
            </article>
          </article>
          <InputVideo />
          <div className="radio-form">
            <Radio.RadioForm
              text="Opções de visibilidade"
              onChange={setVisibility}
            >
              <Radio.RadioInput
                value="all"
                name="visibility"
                text="Visível a todos"
              />
              <Radio.RadioInput
                value="premiums"
                name="visibility"
                text="Visível a Premiums"
              />
              <Radio.RadioInput
                value={hour}
                name="visibility"
                text="Liberar a todos em:"
                refInput={radioRef}
              />
              <input
                htmlFor="visbility-input"
                className="hour-input"
                type="number"
                onChange={(e) => setHour(e.target.value)}
                onClick={radioClick}
              />
              <label htmlFor="visbility-input" className="hour-label">
                Hora(s)
              </label>
              <img src={exclamationIcon} alt="" onClick={handleClick} />
              <Popover
                id={idPop}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <span className="popover">
                  <p>
                    Esta opção deixará o episódio bloqueado apenas para usuários
                    Premiums de acordo com o "X" de horas que for estabelecido.
                  </p>
                  <p>Logo após este período de será liberado a todos.</p>
                </span>
              </Popover>
            </Radio.RadioForm>
          </div>
        </>
      ) : null}
    </article>
  );
}
