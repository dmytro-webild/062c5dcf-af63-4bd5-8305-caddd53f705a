"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "コンセプト",          id: "#concept"},
        {
          name: "シェフ",          id: "#chef"},
        {
          name: "料理",          id: "#cuisine"},
        {
          name: "コース",          id: "#courses"},
        {
          name: "ワイン",          id: "#wine"},
        {
          name: "店内",          id: "#interior"},
        {
          name: "ご予約",          id: "#reservation"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/restaurant-retro-logo-collection_23-2148359162.jpg"
      logoAlt="un giorno logo"
      brandName="un giorno"
      bottomLeftText="LINE RESERVE"
      bottomRightText="TEL: 000-0000-0000"
      button={{
        text: "RESERVE",        href: "#reservation"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static-grid"}}
      title="忘れがたい一日を、一皿から。"
      description="熊本の夜に、静かに灯る一皿。季節の素材と、たしかな手仕事が紡ぐ記念日のためのモダンイタリアン。"
      buttons={[
        {
          text: "LINEで予約する",          href: "#reservation"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/tuna-salad-with-eggs-glass-wine_140725-6858.jpg",          videoSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081849.jpg",          imageAlt: "Luxurious restaurant interior",          videoAriaLabel: "Cinematic video of restaurant interior"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/baker-hands-pouring-oil-dough-composition_23-2148302923.jpg",          videoSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-fusion-food-with-sushi-seasonings-plate-wooden-surface_181624-42994.jpg",          imageAlt: "Gourmet dish being prepared",          videoAriaLabel: "Cinematic video of a gourmet dish"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/chef-filling-orange-peel-with-salad_23-2148491320.jpg",          videoSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-food-concept_23-2148510918.jpg",          imageAlt: "Chef working in the kitchen",          videoAriaLabel: "Cinematic video of the chef"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/valentines-day-table-setting-romantic-dinner-marry-me-wedding-engagement-ring-box_114579-459.jpg",          videoSrc: "http://img.b2bpic.net/free-photo/delicious-high-quality-wine-still-life_23-2149710973.jpg",          imageAlt: "Elegant table setting",          videoAriaLabel: "Cinematic video of an elegant table setting"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/glass-red-wine_1204-449.jpg",          videoSrc: "http://img.b2bpic.net/free-photo/delicious-high-quality-wine-still-life_23-2149710892.jpg",          imageAlt: "Wine pouring and cellar view",          videoAriaLabel: "Cinematic video of wine and cellar"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/exterior-modern-buildings_1127-2941.jpg",          videoSrc: "http://img.b2bpic.net/free-photo/french-restaurant-scene-with-menu-board_1147-448.jpg",          imageAlt: "Restaurant exterior at night",          videoAriaLabel: "Cinematic video of the restaurant exterior"},
      ]}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  </div>

  <div id="concept" data-section="concept">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "空間へのこだわり",          description: "静けさを味わう12席のテーブルと7席のカウンター。小さな空間だからこそ、息づく時間があります。洗練された調度品と柔らかな照明が織りなす、大人のための隠れ家です。",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-dessert-with-drink_23-2148322801.jpg",          imageAlt: "Elegant restaurant interior with soft lighting"},
        {
          title: "時間という贅沢",          description: "お客様の大切な一日を彩るために、ゆったりと流れる時間を提供します。一皿一皿に込められた想いを五感で感じ、会話が弾むひとときを心ゆくまでお楽しみください。",          imageSrc: "http://img.b2bpic.net/free-photo/table-assortment-with-plant-flat-lay_23-2148914892.jpg",          imageAlt: "Delicately plated gourmet dish"},
      ]}
      title="un giorno の哲学: 一日を、特別な記憶に。"
      description="un giorno（ウン ジョルノ）は、イタリア語で「一日」を意味します。熊本の地に根ざしながら、季節の素材を丁寧に扱い、訪れた方の「忘れがたい一日」を一皿に込めてご用意しております。落ち着いた灯りに包まれた静謐な空間で、大切な方との時間が、ゆっくりと深まっていきますように。"
    />
  </div>

  <div id="chef" data-section="chef">
      <TeamCardSix
      textboxLayout="default"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      members={[
        {
          id: "chef-hidetaka",          name: "松岡 秀貴",          role: "エグゼクティブシェフ",          imageSrc: "http://img.b2bpic.net/free-photo/female-chef-holding-bacon-dish_23-2148491275.jpg",          imageAlt: "シェフ 松岡 秀貴"},
      ]}
      title="シェフ 松岡 秀貴の世界"
      description="熊本の地に育ち、イタリアの食文化に魅せられた料理人。生産者と語らい、素材の声に耳を澄ます日々のなかで、「皿の上に、誰かの一日を残したい」という想いを、un giorno のすべての一皿に込めています。確かな技術と革新的な感性で、現代イタリアンの真髄を追求します。"
      animationType="depth-3d"
    />
  </div>

  <div id="cuisine" data-section="cuisine">
      <ProductCardThree
      animationType="blur-reveal"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      carouselMode="auto"
      products={[
        {
          id: "antipasto-1",          name: "季節のAntipasto",          price: "価格はお問い合わせください",          imageSrc: "http://img.b2bpic.net/free-photo/cheese-set-sausages-set-salty-snacks-wooden-table_8353-9835.jpg",          imageAlt: "Seasonal antipasto dish"},
        {
          id: "primo-1",          name: "手打ちPrimo",          price: "価格はお問い合わせください",          imageSrc: "http://img.b2bpic.net/free-photo/crop-hand-taking-pasta-from-plate_23-2147749507.jpg",          imageAlt: "Handmade pasta dish"},
        {
          id: "dolce-1",          name: "特製Dolce",          price: "価格はお問い合わせください",          imageSrc: "http://img.b2bpic.net/free-photo/berry-cake-with-milk-souffle-cherry-strawberry-chocolate-sauce-tea-side-view_141793-3071.jpg",          imageAlt: "Special dessert"},
        {
          id: "secondi-1",          name: "メインコース",          price: "価格はお問い合わせください",          imageSrc: "http://img.b2bpic.net/free-photo/beef-steak-with-leaf_181624-808.jpg",          imageAlt: "Main course dish"},
        {
          id: "seafood-1",          name: "本日の魚料理",          price: "価格はお問い合わせください",          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-breast-with-vegetables-mashed-potatoes_140725-2085.jpg",          imageAlt: "Seafood dish"},
        {
          id: "vegetable-1",          name: "旬野菜の一皿",          price: "価格はお問い合わせください",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cow-tongue-salad-with-mayonnaise-lettuce-arugula-plate_141793-2879.jpg",          imageAlt: "Seasonal vegetable dish"},
      ]}
      title="手仕事という、誠実。"
      description="生地を打つ手のリズム、火と素材との対話。派手さよりも、心に残る一皿を。熊本の恵みと、イタリアの伝統を、シェフの手のなかで、静かに結びます。一皿一皿が芸術品。"
    />
  </div>

  <div id="courses" data-section="courses">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      plans={[
        {
          id: "course-a",          badge: "Standard",          badgeIcon: Sparkles,
          price: "¥15,000",          subtitle: "アニバーサリーコース",          features: [
            "季節のアンティパスト",            "シェフ特製パスタ",            "メインディッシュ(肉 or 魚)",            "特製ドルチェ",            "カフェ"],
        },
        {
          id: "course-b",          badge: "Signature",          badgeIcon: Sparkles,
          price: "¥20,000",          subtitle: "un giorno スペシャルコース",          features: [
            "厳選素材のアンティパスト2種",            "シェフのおまかせパスタ",            "国産牛のメインディッシュ",            "魚介のセコンド",            "スペシャルドルチェ",            "ペアリングオプション"],
        },
        {
          id: "course-c",          badge: "Premium",          badgeIcon: Sparkles,
          price: "¥25,000",          subtitle: "エグゼクティブコース",          features: [
            "キャビアとオマール海老のアンティパスト",            "高級食材パスタ",            "厳選和牛フィレ肉のメイン",            "季節の魚介ポワレ",            "パティシエ特製ドルチェ",            "ソムリエ厳選ペアリング"],
        },
      ]}
      title="コース紹介"
      description="un giornoでしか味わえない、特別な体験をコースでご提供いたします。季節の移ろいを感じる食材とシェフの感性が織りなす一皿一皿が、忘れられない記念日を演出します。"
    />
  </div>

  <div id="wine" data-section="wine">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "ソムリエ厳選ワイン",          description: "イタリア各地から厳選された希少なワインの数々。お客様の好みや料理に合わせて、最適な一本をご提案いたします。特別な夜にふさわしい銘柄を取り揃えております。",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bottle-wine-with-empty-glass-black-background_140725-94851.jpg",          imageAlt: "Elegant wine cellar with many bottles"},
        {
          title: "パーフェクトペアリング",          description: "一皿一皿の料理が持つ深い味わいを、ワインとのマリアージュでさらに高めます。ソムリエが織りなす完璧なペアリングが、あなたの五感を刺激し、忘れがたい食体験を創造します。",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-clinking-glasses_23-2148893893.jpg",          imageAlt: "Red wine glass with a gourmet dish"},
      ]}
      title="ワインとペアリング"
      description="料理の魅力を最大限に引き出す、ソムリエ厳選のワインコレクション。シェフの料理に合わせた完璧なペアリングをご提案いたします。特別な夜を彩る一本を、静かなセラーから。"
    />
  </div>

  <div id="interior" data-section="interior">
      <ProductCardThree
      animationType="blur-reveal"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      carouselMode="auto"
      products={[
        {
          id: "interior-1",          name: "テーブル席",          price: "プライベートな空間",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629583.jpg",          imageAlt: "Private table seating in the restaurant"},
        {
          id: "interior-2",          name: "カウンター席",          price: "シェフとの距離",          imageSrc: "http://img.b2bpic.net/free-photo/full-length-stock-photo-extremely-trendy-luxurious-brunette-model-crop-top-silver-sparkling-jacket-black-trousers-high-heels-model-trendy-outfit-sitting-bar-stool-club-bar_132075-8992.jpg",          imageAlt: "Elegant counter seating"},
        {
          id: "interior-3",          name: "内装デザイン",          price: "洗練された調度品",          imageSrc: "http://img.b2bpic.net/free-photo/wooden-vintage-texture-close-up-shooting_482257-34508.jpg",          imageAlt: "Artistic decor and lighting"},
      ]}
      title="静けさを、味わう。"
      description="テーブル12席、カウンター7席。小さな空間だからこそ、息づく時間があります。熊本の喧騒を忘れさせる、静かで洗練された空間で、特別なひとときをお過ごしください。"
    />
  </div>

  <div id="instagram" data-section="instagram">
      <BlogCardOne
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      title="un giorno の日常を Instagram で"
      description="最新の料理や店内の雰囲気、シェフのこだわりなど、un giorno の日常をInstagramで発信しています。ぜひフォローして、私たちの世界観をお楽しみください。"
      blogs={[
        {
          id: "ig-1",          category: "Cuisine",          title: "旬の食材で彩る一皿",          excerpt: "シェフが厳選した旬の食材を使った、目にも美しい最新の料理をご紹介。細部までこだわり抜いた逸品です。",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pasta-plate_23-2150690841.jpg",          imageAlt: "Latest gourmet dish from Instagram",          authorName: "un giorno",          authorAvatar: "http://img.b2bpic.net/free-vector/restaurant-retro-logo-collection_23-2148359162.jpg",          date: "2023-10-27"},
        {
          id: "ig-2",          category: "Chef's Work",          title: "厨房の舞台裏",          excerpt: "シェフ松岡の、料理への情熱と集中。手仕事の温かさが伝わる厨房の風景を、少しだけお見せします。",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hand-pouring-honey-apple-slices_23-2149452281.jpg",          imageAlt: "Chef working in the kitchen (Instagram)",          authorName: "un giorno",          authorAvatar: "http://img.b2bpic.net/free-photo/various-types-pasta-black_23-2147772035.jpg",          date: "2023-10-26"},
        {
          id: "ig-3",          category: "Atmosphere",          title: "静謐な空間の魅力",          excerpt: "落ち着いた灯りに包まれた、un giornoの店内。大切な方との語らいが深まる、特別な時間をお届けします。",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-taking-food-photos_23-2149250124.jpg",          imageAlt: "Restaurant ambiance (Instagram)",          authorName: "un giorno",          authorAvatar: "http://img.b2bpic.net/free-vector/italian-restaurant-landing-page-template_23-2150212373.jpg",          date: "2023-10-25"},
        {
          id: "ig-4",          category: "Seasonal",          title: "季節のコース更新",          excerpt: "秋の味覚を存分にお楽しみいただける、新しいコースがスタートしました。旬の恵みを是非ご堪能ください。",          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-photo-bowl-ramen-sliced-lemon_23-2149277951.jpg",          imageAlt: "Seasonal course update (Instagram)",          authorName: "un giorno",          authorAvatar: "http://img.b2bpic.net/free-vector/two-colors-minimal-logo-set_23-2148382173.jpg",          date: "2023-10-24"},
      ]}
      animationType="blur-reveal"
    />
  </div>

  <div id="reservation" data-section="reservation">
      <ContactSplitForm
      useInvertedBackground={false}
      title="静かな一日を、ご予約ください。"
      description="ご予約・お問い合わせは、LINE公式アカウントより承っております。当日のご予約・ご相談も、お気軽にお問い合わせください。お客様の大切な日を、un giornoが彩ります。"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "お名前",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "電話番号",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "メールアドレス",          required: false,
        },
        {
          name: "date",          type: "date",          placeholder: "ご予約希望日",          required: true,
        },
        {
          name: "time",          type: "time",          placeholder: "ご予約希望時間",          required: true,
        },
        {
          name: "guests",          type: "number",          placeholder: "人数",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "特別なご要望やアレルギーなどございましたらご記入ください。",        rows: 4,
        required: false,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/grey-painted-fancy-restaurant-with-empty-dinner-table_140725-8729.jpg"
      imageAlt="Elegant dining table awaiting guests"
      mediaPosition="right"
      buttonText="LINEで予約する"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "un giorno",          items: [
            {
              label: "熊本市 / Kumamoto",              href: "#"},
            {
              label: "忘れがたい一日を、一皿から。",              href: "#"},
            {
              label: "una giornata indimenticabile",              href: "#"},
          ],
        },
        {
          title: "営業時間",          items: [
            {
              label: "Lunch 12:00 – 15:00",              href: "#"},
            {
              label: "Dinner 18:00 – 23:00",              href: "#"},
            {
              label: "定休日 / 毎週木曜日",              href: "#"},
          ],
        },
        {
          title: "ご予約 & フォロー",          items: [
            {
              label: "LINEで予約する",              href: "#reservation"},
            {
              label: "Instagram @ungiorno_kumamoto",              href: "https://www.instagram.com/ungiorno_kumamoto"},
          ],
        },
      ]}
      bottomLeftText="© 2026 un giorno"
      bottomRightText="ungiorno-kumamoto.net | 熊本のイタリアン · デート · 記念日"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
