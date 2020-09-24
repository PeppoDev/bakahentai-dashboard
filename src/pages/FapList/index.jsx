import React from "react";
//services
import api from "../../services/api/axios";
//components
import TitlePage from "../../components/TitlePage";
import SearchInput from "../../components/SearchInput";
import HentaiList from "../../components/HentaiList";
import FapLister from "../../components/FapList";
import * as ComboBox from "../../components/ComboBox";
import ShowMore from "../../components/ShowMore";
//css
import "./styles.scss";
import { Link } from "react-router-dom";
//css
import "./styles.scss";
//assets
import backIcon from "../../assets/icons/back.png";

function TitlePageFapList(props) {
  return (
    <section className="page-title">
      <article>
        <article className="header-left">
          <Link to="/">
            <img className="backicon" src={backIcon} alt="" />
          </Link>
          <div>
            <p>Minha Lista de Fap</p>
            <span>15</span>
          </div>
          <div>
            <p>Favoritos</p>
            <span>0</span>
          </div>
        </article>
        <div className="select-container">{props.children}</div>
      </article>

      <hr />
    </section>
  );
}

function FapList() {
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
  const [hentais, setHentais] = React.useState(hentais_list);
  const [query, setQuery] = React.useState("");
  const [hentaisPerPage, setHentaisPerPage] = React.useState(15);
  const [order, setOrder] = React.useState("Alfabética");

  React.useEffect(() => {
    async function getHentais() {
      const response = await api.get("api/admin/hentais");
      setHentais(response.data);
      hentais_list = Array.from(hentais);
    }
    getHentais();
  }, []);
  const filter = (hentais, query) => {
    hentais_list = Array.from(
      hentais.filter((hentai) =>
        hentai.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  React.useMemo(() => filter(hentais_list, query), [hentais_list, query]);

  const sorter = (hentais, order) => {
    if (order === "Alfabética") {
      hentais_list = Array.from(
        hentais.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      );
    } else if (order === "Últimos") {
      hentais_list = Array.from(
        hentais.sort(function (a, b) {
          if (a.created_at > b.created_at) {
            return 1;
          }
          if (a.created_at < b.created_at) {
            return -1;
          }
          return 0;
        })
      );
    } else if (order === "Postagem") {
      hentais_list = Array.from(
        hentais.sort(function (a, b) {
          if (a.release_year > b.release_year) {
            return 1;
          }
          if (a.release_year < b.release_year) {
            return -1;
          }
          return 0;
        })
      );
    } else {
      hentais_list = Array.from(
        hentais.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      );
    }
  };

  const sorted = React.useMemo(() => sorter(hentais_list, order), [
    hentais_list,
    order,
  ]);

  const currentHentais = hentais_list.slice(0, hentaisPerPage);
  console.log(currentHentais);

  return (
    <section className="page-container all-hentais">
      <TitlePageFapList>
        <SearchInput onChange={setQuery} value={query} />
        <ComboBox.ComboSelect onChange={setOrder} defaultValue="Alfabética">
          <ComboBox.ComboItem value="Últimos" text="Últimos" />
          <ComboBox.ComboItem value="Favoritos" text="Favoritos" />
        </ComboBox.ComboSelect>
      </TitlePageFapList>
      <article className="hentai-list">
        <FapLister data={currentHentais} />
      </article>

      {query === "" && currentHentais.length < hentais_list.length ? (
        <div className="button-show-more">
          <ShowMore setValue={() => setHentaisPerPage((prev) => prev + 15)} />
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </section>
  );
}

export default FapList;
