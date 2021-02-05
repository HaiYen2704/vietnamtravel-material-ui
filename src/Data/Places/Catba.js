const CatbaJSON = {
  pageInfo: {
    title: "Cat Ba",
    keywords: ["伝統", "文化", "食べ物", "トーへ"],
    description:
      "日本の飴細工をご存知でしょうか？ベトナムにも飴細工みたいなものがありますよ。但し、 飴細工と違う点のはこれが麦粉で作られます(笑笑)。それでは、この記事はベトナムのトーへを紹介させて頂きます。",
  },
  header: {
    title: "カットバ島へようこそ",
    subtitle: "Vietnamese Place",
    text: "June 06, 2020" ,
    image: { src: "catba1.jpg", alt: "" },
  },
  sections: [
    // TODO: p and image are in diffent sections?
    {
      type: "Description",
      paragraphs: [
        "グローバルにエコナセイカツを過ごせる、ベトナムでハノイから一番近いビーチリゾートLAN HA（ランハー）湾とCAT BA（カットバ島）ハノイだってビーチに行きたい。",
      ],
    },
    {
      type: "Description",
      heading: "ハノイからカットバエクスプレスが便利",
      paragraphs: [
        "ハノイからの「カットバエクスプレス」はハノイからハイフォンを通り、カットバに近いカットハイ島からフェリーに乗り換えてカットバ島につき、そこで再び別のバスに乗り換えてカットバタウンにつきます。それだけに、ハロン湾のように簡単にはいけないところが、まだ観光客が多くなく、静かなビーチを楽しめます。「欧米のバックパッカー」たちはさすがに情報が早く多く来ています。誰でも行くところではなく、「欧米のバックパッカー」が多いところはやっぱり魅力があります。",
      ],
    },

    {
      type: "Images",
      images: [
        { src: "catba2.jpg", alt: "" },
        { src: "catba3.jpg", alt: "" },
        { src: "catba4.jpg", alt: "" },
        { src: "catba5.jpg", alt: "" },
      ],
    },
    {
      type: "List",
      heading: "カットバ島はハロン湾の横にあります",
      items: [
        "フェリーから再びバスに乗り換えて「カットバタウン」につけば、そこがベースになります。地図でカットバ島の位置を見てもらうとわかるのですが、有名な2000を超える島や岩が存在する絶景、世界自然遺産のハロン湾のすぐ横、南側に位置することがわかります。",
        "ハロン湾は有名で、皆さんもよく知っていると思います。それだけに、観光客がたくさん訪れ、せっかく絶景世界自然遺産を楽しみに行ったのに、人だらけで、がっかりされた方は多いと思います。",
        "しかも、せっかくの海なのに海で泳いで楽しむ場所は少なく、とりあえず回ったという感想の方がおおいのではないかと思います。ハロン湾クルーズについては他でもかいていますので、ご覧ください。",
      ],
    },
    {
      type: "List",
      heading: "カヤックで石灰岩の洞窟を抜けラグーンに入れる",
      items: [
        "入江になっているところは長い年月で石灰岩が雨水で溶けた場所で、その場所が沈んだ地形です。そこでカヤックを楽しむこともできます。",
        "ホテル船で過ごす人以外は、まずカットバタウンに行けばいいです。 楽しみ方は、カットバタウンで、ホテルを探し、そこから周りの島にボートで遊びに行ったり、カットバタウンで、レンタルバイクを借りて、静かな入江にあるビーチリゾートに向うこともできます。",
        "国立公園でのトレッキングツアーとか、ともかく、カットバタウンにつけば、ツアーディスクもいくつもあるので、自由に選べます。 カットバの地ビールもあります。",
      ],
    },
    {
      type: "Article",
      heading: "人気の食べ物",
      paragraphs: [
        { image: { src: "catba10.png", alt: "" }, text: "カブトガニ" },
        { image: { src: "catba11.jpg", alt: "" }, text: "ジオダック" },
        { image: { src: "catba12.jpg", alt: "" }, text: "ハタ" },
        { image: { src: "catba13.jpg", alt: "" }, text: "ロブスター" },
        { image: { src: "catba14.jpg", alt: "" }, text: "Cat Hai しょっつる" },
      ],
    },
  ],
};

export default CatbaJSON;
