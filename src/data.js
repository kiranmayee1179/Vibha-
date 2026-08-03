const products = [
  {
    id: 1,
    name: 'Black Suit',
    category: 'Clothing',
    price: 2500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/9d/5b/10/9d5b10ba5250913483763123317a765a.jpg',
  },
  {
    id: 2,
    name: 'Adidas Sneakers',
    category: 'Footwear',
    price: 1699,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776785637/download_4_fl7vhg.jpg',
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Watches',
    price: 1999,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776785755/homens_mulheres_1_pe%C3%A7a_preto_silicone_al%C3%A7a_desportivo_data_alarme_monitoramento_de_frequ%C3%AAncia_card%C3%ADaca_monitoramento_do_sono_multifuncional_quadrado_discar_compat%C3%ADvel_com_iphone_gye190.jpg',
  },
  {
    id: 4,
    name: 'Ring',
    category: 'Accessories',
    price: 200,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/c0/36/94/c03694a5b45a25312491c976513808d1.jpg',
  },
  {
    id: 5,
    name: 'Ray-Ban Hexagonal Mirrored Sunglasses',
    category: 'Accessories',
    price: 425,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776957812/Ray-Ban_Hexagonal_Mirrored_Sunglasses_ztoutk.jpg',
  },
  {
    id: 6,
    name: ' Sunglasses',
    category: 'Accessories',
    price: 350,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776957813/An_AI-generated_close-up_of_aviator_sunglasses_placed_on_a_sandy_surface_emphasizing_their_sleek_design_and_reflective_lenses___Perfect_for_eyewear_branding_or_summer_campaigns.Why_C_n787xx.jpg',
  },
  {
    id: 7,
    name: 'ovalmetal frame Sunglasses',
    category: 'Accessories',
    price: 690,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776957813/Oval_Metal_Frame_Sunglasses_Uv400_Lightweight_Women_s_Classic_Outdoor_Wear_ate7vg.jpg',
  },
  {
    id: 8,
    name: ' Sunglasses',
    category: 'Accessories',
    price: 250,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776957813/download_5_uze0ve.jpg',
  },
  {
    id: 9,
    name: 'pendant necklace',
    category: 'Accessories',
    price: 199,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776960149/Styled_with_intention__k0nktc.jpg',
  },
  {
    id: 10,
    name: 'Leaf stud earrings',
    category: 'Accessories',
    price: 169,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776960238/Leaf_Stud_Earrings_riceqx.jpg',
  },
  {
    id: 11,
    name: 'Black Ring',
    category: 'Accessories',
    price: 100,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776960463/12_Unique_Black_Wedding_Rings_That_Make_a_Bold_Statement_qop2dc.jpg',
  },
  {
    id: 12,
    name: 'Flower Ring',
    category: 'Accessories',
    price: 150,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776960582/Flower_Engagement_Ring_Unique_Ring_Solitaire_Engagement_Ring_Leaf_Ring_Lotus_Ring_Uni____dg3o0c.jpg',
  },
  {
    id: 13,
    name: 'Unique Bracelet',
    category: 'Accessories',
    price: 200,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776960739/NEW_In_Style_Fashion_Trends_in_Dresses_Shoes_for_Women_-_Lulus_unfwxz.jpg',
  },
  {
    id: 14,
    name: "Men's Black Bracelet",
    category: 'Accessories',
    price: 120,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776960812/Men_s_Black_Onyx_Bracelet_-_Black_Onyx___Waterproof_PVD_Rhodium_Plated_vmoeom.jpg',
  },
  {
    id: 15,
    name: 'studs earrings',
    category: 'Accessories',
    price: 299,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776960914/9pairs_Crown_Bow_Stud_Earrings_fjzsej.jpg',
  },
  {
    id: 16,
    name: 'Lightweight casual gump shoes',
    category: 'Footwear',
    price: 1500,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297117/2024_New_Autumn_Ladies_Lightweight_Casual_Gump_Shoes_Female_Student_Sports_Running_Sneakers_Retro_Wine_Red_Patchwork_Trendy_College_Style_lv9fa5.jpg',
  },
  {
    id: 17,
    name: 'Winter High heel shoes',
    category: 'Footwear',
    price: 1450,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297230/Winter_High_Heels_Sexy_Women_Luxury_Shoes_Chunky_Ankle_Chelsea_Boots_F_z2fhhh.jpg',
  },
  {
    id: 18,
    name: 'Zipper chunky classic boots',
    category: 'Footwear',
    price: 1699,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297280/Minimalist_Side_Zipper_Chunky_Classic_Boots_scvutk.jpg',
  },
  {
    id: 19,
    name: 'Wedge sandals',
    category: 'Footwear',
    price: 500,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297443/Chic_Timeless__Women_s_Fashion_Ideas_ephjlo.jpg',
  },
  {
    id: 20,
    name: 'cut shoes',
    category: 'Footwear',
    price: 300,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297540/theSkimm_-_Your_go-to_for_the_info_and_tools_you_need_to_live_your_smartest_life__byzous.jpg',
  },
  {
    id: 21,
    name: 'Jutthi',
    category: 'Footwear',
    price: 450,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297686/footwear_jutti_pjvx1v.jpg',
  },
  {
    id: 22,
    name: 'Punjabi jutthi',
    category: 'Footwear',
    price: 350,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297814/Hand_Embroidered_Punjabi_Jutti__Traditional_Khussa_Bridal_Shoes_ioi51s.jpg',
  },
  {
    id: 23,
    name: 'Kolhapuri chappal',
    category: 'Footwear',
    price: 650,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777297928/beautiful_kolapuri_chappals__gzckvx.jpg',
  },
  {
    id: 24,
    name: 'Banjara chappal',
    category: 'Footwear',
    price: 450,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777298007/The_BANJARA_Chappal_Red_az5yot.jpg',
  },
  {
    id: 25,
    name: 'Silver mosaic jutti',
    category: 'Footwear',
    price: 899,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777298127/Mirror_Glint_-_Silver_Mosaic_Jutti_bvsypr.jpg',
  },
  {
    id: 26,
    name: 'Majori jutti sandals',
    category: 'Footwear',
    price: 650,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777298185/Embroidered_Women_Mojari_Jutti_Sandals___Handmade_Indian_Ethnic_Footwear_Rajasthani_Style_Flats_Wedges_hkfwun.jpg',
  },
  {
    id: 27,
    name: 'Traditional Afghan sandals(paizar)',
    category: 'Footwear',
    price: 359,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777298127/Mirror_Glint_-_Silver_Mosaic_Jutti_bvsypr.jpg',
  },
  {
    id: 28,
    name: 'Majori jutti sandals',
    category: 'Footwear',
    price: 250,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777298545/Traditional_Afghani_Slippers_Paissare_Paizar_iuehjn.jpg',
  },
  {
    id: 29,
    name: 'Jodhpuri mojari for men',
    category: 'Footwear',
    price: 699,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777298738/Buy_Jodhpuri_Mojari_for_Mens_Online_i2dpxn.jpg',
  },
  {
    id: 30,
    name: 'Black vegan punjabi jutti-men',
    category: 'Footwear',
    price: 799,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777298841/Handmade_Black_Vegan_Leather_punjabi_Jutti_for_Men_Hand_Embroidered_Zardozi_Groom_Shoes_Indian_Ethnic_Party_Wear_loafers_Gifts_for_Grooms_qhnbh9.jpg',
  },
  {
    id: 31,
    name: 'puneri chappal',
    category: 'Footwear',
    price: 999,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1777304848/Puneri_Chappal_for_Men_fe5w5q.jpg',
  },
  {
    id: 32,
    name: 'White Elegant Saree',
    category: 'Clothing',
    price: 2000,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/55/16/94/551694da7852c31b3bd79ffeb2cae484.jpg',
  },

  {
    id: 33,
    name: 'Traditional White saree with red border',
    category: 'Clothing',
    price: 999,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1778406154/ChatGPT_Image_May_10_2026_03_12_11_PM_b25qge.png',
  },
  {
    id: 34,
    name: ' Burgundy Georgette Sharara Suit',
    category: 'Clothing',
    price: 1480,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/f5/56/8f/f5568f1247e6b9be2290c53958f67c1d.jpg',
  },
  {
    id: 35,
    name: 'Ethereal Rose & Olive Fusion Contemporary Floral Kurta Set',
    category: 'Clothing',
    price: 750,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/a6/72/40/a672401255526d4ac9142507ade77a49.jpg',
  },
  {
    id: 36,
    name: 'Burgundy Anarkali Kurti with Jeans Outfit',
    category: 'Clothing',
    price: 450,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/89/cc/2c/89cc2cea03cc1d1745cca4d09c27fd0b.jpg',
  },
  {
    id: 37,
    name: 'Kalamkari Cotton Saree',
    category: 'Clothing',
    price: 999,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/06/1a/a5/061aa566e424dbb8e50a5c922b3643b9.jpg',
  },
  {
    id: 38,
    name: 'Pink Bandhini Saree',
    category: 'Clothing',
    price: 899,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/e9/03/88/e9038800e01df6ce8648334c1804631a.jpg',
  },
  {
    id: 39,
    name: 'Soft Desi skirt Elegance in Indigo',
    category: 'Clothing',
    price: 589,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/95/75/5f/95755fa4f889cb0fc40e3df4482d06a9.jpg',
  },
  {
    id: 40,
    name: 'Full sleeve tshirt',
    category: 'Clothing',
    price: 999,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1778832108/IMG-20260512-WA0002_tjzlqv.jpg',
  },
  {
    id: 41,
    name: 'Olive outfit',
    category: 'Clothing',
    price: 1200,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/71/ad/4e/71ad4ec541c165bb91b93b8aeb7a5869.jpg',
  },
  {
    id: 42,
    name: 'Men Casual Cotton Linen T Shirt',
    category: 'Clothing',
    price: 600,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/3c/e9/d5/3ce9d5b4c694c3c87fef500a77797b75.jpg',
  },
  {
    id: 43,
    name: "Men's Black Shirt",
    category: 'Clothing',
    price: 999,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/61/07/15/610715f62f2618748a4fd9d23fbd1286.jpg',
  },
  {
    id: 44,
    name: "Men's Outfit",
    category: 'Clothing',
    price: 1300,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/7d/87/09/7d870999fa7cea86e3cac595b669bdf2.jpg',
  },
  {
    id: 45,
    name: 'Outfit-Men',
    category: 'Clothing',
    price: 1300,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/1e/ca/da/1ecada5da4597d91088c2ffcc77f0c9b.jpg',
  },
  {
    id: 46,
    name: 'check shirt',
    category: 'Clothing',
    price: 999,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1778832889/WhatsApp_Image_2026-05-15_at_13.43.38_joiiqt.jpg',
  },
  {
    id: 47,
    name: 'Dragon Print Hoodie',
    category: 'Clothing',
    price: 899,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/f6/c2/b0/f6c2b0f8c59b1f283233b32930c67c9c.jpg',
  },
  {
    id: 48,
    name: 'Black spiderman print tshirt',
    category: 'Clothing',
    price: 989,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/bb/7a/c4/bb7ac46d4f4f5961a4848c6f4d5c36cf.jpg',
  },
  {
    id: 49,
    name: 'Denim shirt',
    category: 'Clothing',
    price: 1800,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/78/16/c9/7816c9d60b6372e4979fb50faeae183b.jpg',
  },
  {
    id: 50,
    name: 'Minimal steet wear',
    category: 'Clothing',
    price: 999,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/6c/0e/66/6c0e6672245b109517cec83934e4742f.jpg',
  },
  {
    id: 51,
    name: 'Lavender Half Saree',
    category: 'Clothing',
    price: 1800,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/1d/20/83/1d20838e97f3f6bc8eb04740799cae87.jpg',
  },
  {
    id: 52,
    name: 'Casual Tops',
    category: 'Clothing',
    price: 650,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/23/1c/4e/231c4ec99a8c2cf898ab36e9d4b15027.jpg',
  },

  {
    id: 53,
    name: 'Summer Maxi dress',
    category: 'Clothing',
    price: 800,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/d1/b5/37/d1b5373b34389fec1cc87fe456aebb3a.jpg',
  },
  {
    id: 54,
    name: 'Maroon south indian gown',
    category: 'Clothing',
    price: 999,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/02/08/38/020838b4fa4bd2ea1152033b036d6a8c.jpg',
  },
  {
    id: 55,
    name: 'Shrug layer',
    category: 'Clothing',
    price: 300,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/a0/4f/f2/a04ff21a4ff20522ad3539c6a85b4e56.jpg',
  },
  {
    id: 56,
    name: 'Bengali Saree look',
    category: 'Clothing',
    price: 1200,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/d2/c9/cd/d2c9cdff0f280b4e72effdb2330b7f1c.jpg',
  },
  {
    id: 57,
    name: 'Marathi green saree',
    category: 'Clothing',
    price: 1250,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/36/15/9c/36159c514541fee9dffd1af8263b59e8.jpg',
  },
  {
    id: 58,
    name: 'Onam saree',
    category: 'Clothing',
    price: 999,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/ce/b1/b9/ceb1b979b1c734e49e62642d99f5ce07.jpg',
  },
  {
    id: 59,
    name: 'Pre draped saree',
    category: 'Clothing',
    price: 890,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/3e/2c/ff/3e2cff7be0fa8aace6439fc8a7f547ad.jpg',
  },
  {
    id: 60,
    name: 'Halter Kurti',
    category: 'Clothing',
    price: 690,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/a2/c1/51/a2c151fe662bc1f69288c61d83433d7a.jpg',
  },
  {
    id: 61,
    name: 'Bodycon casual',
    category: 'Clothing',
    price: 1000,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/8d/ad/a3/8dada3d407b03d245be9952598689252.jpg',
  },
  {
    id: 64,
    name: 'Dhothi-Onam',
    category: 'Clothing',
    price: 999,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/76/0b/d3/760bd34b44a0e27bdbae38dbcb1d3f18.jpg',
  },
  {
    id: 65,
    name: 'Sweatshirt',
    category: 'Clothing',
    price: 1100,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/49/8b/12/498b12045935984289096b523ac1dd1d.jpg',
  },
  {
    id: 66,
    name: 'Pink Shirt for men',
    category: 'Clothing',
    price: 1200,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1778405388/WhatsApp_Image_2026-05-10_at_14.57.06_hcqitq.jpg',
  },
  {
    id: 67,
    name: 'Drop shoulder fall sweater',
    category: 'Clothing',
    price: 1500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/73/34/ef/7334efefb4906daafc27422691e95a8a.jpg',
  },
  {
    id: 68,
    name: ' Festive trendy Saree',
    category: 'Clothing',
    price: 999,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/22/79/50/227950265e48fccfa96e5d82eacd8c83.jpg',
  },

  {
    id: 69,
    name: 'Brown Winter Outfit for men',
    category: 'Clothing',
    price: 1700,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/8c/b2/1e/8cb21e11edf5232dc4a7bb9fb280dc41.jpg',
  },
  {
    id: 70,
    name: 'Kurti set',
    category: 'Clothing',
    price: 790,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1778417649/WhatsApp_Image_2026-05-10_at_18.11.17_i1pxtl.jpg',
  },
  {
    id: 71,
    name: 'Full sleeve T-shirt',
    category: 'Clothing',
    price: 690,
    gender: 'Women',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1778417648/WhatsApp_Image_2026-05-10_at_18.11.17_1_sijdbc.jpg',
  },
  {
    id: 72,
    name: 'Dark Brown Bomber Jacket',
    category: 'Clothing',
    price: 1300,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/77/89/66/7789664e9bd301656b566f1d4246dcfa.jpg',
  },
  {
    id: 73,
    name: 'Red Checks Shirt',
    category: 'Clothing',
    price: 890,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/ba/c7/08/bac7084c2b07b449e4d06d158e100fc5.jpg',
  },
  {
    id: 74,
    name: 'Nike Running Shoes',
    category: 'Footwear',
    price: 1500,
    gender: 'Men',
    image:
      'https://res.cloudinary.com/dytooazwh/image/upload/v1776784537/Nike_Free_Metcon_6_Black_White_eri34y.jpg',
  },
  {
    id: 75,
    name: 'Pearl Bangles',
    category: 'Accessories',
    price: 200,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/e3/47/3f/e3473f609de8fa1621ebd0dd4829579b.jpg',
  },
  {
    id: 76,
    name: 'Navaratri Bangles',
    category: 'Accessories',
    price: 100,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/dc/4e/9a/dc4e9a4990e83ea28d6b3033c7bbe896.jpg',
  },
  {
    id: 77,
    name: 'Kashmiri Chudiyaan',
    category: 'Accessories',
    price: 250,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/49/79/80/497980827790b6dd7a157d43e95f3dcf.jpg',
  },
  {
    id: 78,
    name: 'Silver Chudiyaan',
    category: 'Accessories',
    price: 150,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/17/6f/46/176f46faec4dba5f8dc6d839e823d1db.jpg',
  },
  {
    id: 79,
    name: 'Rajasthani Stylle Kada set',
    category: 'Accessories',
    price: 300,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/36/f3/84/36f38491a0041d6043b8836b553dd14b.jpg',
  },
  {
    id: 80,
    name: 'Kada for men',
    category: 'Accessories',
    price: 400,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/35/ab/03/35ab03e1d259de0741f40c314c7d9a03.jpg',
  },
  {
    id: 81,
    name: 'earrings',
    category: 'Accessories',
    price: 480,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/3a/1c/a3/3a1ca33ab64335ff2c5bb9b5f33e06d4.jpg',
  },
  {
    id: 82,
    name: 'Temple Antique Necklace',
    category: 'Accessories',
    price: 999,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/52/6a/49/526a49764a2402eb598cbee6d3f543b9.jpg',
  },
  {
    id: 83,
    name: 'Lakshmi earrings',
    category: 'Accessories',
    price: 1200,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/1b/6f/dc/1b6fdc12e07251a00e8e4fa715700892.jpg',
  },

  {
    id: 84,
    name: 'Earchains',
    category: 'Accessories',
    price: 500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/f3/e5/ed/f3e5ed4617fab3709cacb803539a1cd7.jpg',
  },
  {
    id: 85,
    name: 'Hair accessories',
    category: 'Accessories',
    price: 500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/b8/17/61/b8176188cb8aedd65a3fe3c66876cc9c.jpg',
  },
  {
    id: 86,
    name: 'Lotus U pin Hair pin accessory',
    category: 'Accessories',
    price: 450,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/5d/cf/05/5dcf053372aa2e1e6ee2ba9704f62d48.jpg',
  },
  {
    id: 87,
    name: 'Hair Tinsel',
    category: 'Accessories',
    price: 290,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/db/02/1e/db021e3846221f719468bd365b7f5dfc.jpg',
  },
  {
    id: 88,
    name: 'Traditional Paayal',
    category: 'Accessories',
    price: 900,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/ba/67/b5/ba67b5574f68c188f39709d878250d3a.jpg',
  },

  {
    id: 89,
    name: 'Oxidised Silver plated necklace set',
    category: 'Accessories',
    price: 500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/e8/06/78/e8067832997cf20be6a0214afe362000.jpg',
  },
  {
    id: 90,
    name: 'Sun Pendant Necklace',
    category: 'Accessories',
    price: 900,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/43/58/29/435829de25b6f081c1a5d44b25b04143.jpg',
  },
  {
    id: 91,
    name: ' Floral short kurta',
    category: 'Clothing',
    price: 500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/db/8e/73/db8e73cb5be0c4b215f2da071e1b4c61.jpg',
  },
  {
    id: 92,
    name: 'Winter Outfit for men',
    category: 'Clothing',
    price: 1600,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/46/6f/a3/466fa320951b0205c8e99d57ba6f7c5f.jpg',
  },
  {
    id: 93,
    name: 'Jhumkas',
    category: 'Accessories',
    price: 400,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/0a/4d/38/0a4d384dd76f43e17c615678228e9358.jpg',
  },
  {
    id: 94,
    name: 'Waist Chain',
    category: 'Accessories',
    price: 450,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/de/8a/b8/de8ab8af778c9df1d10c7b2fb10c19fd.jpg',
  },
  {
    id: 95,
    name: 'Nose pin',
    category: 'Accessories',
    price: 300,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/38/97/a8/3897a8936893f445d790320f7c64d73d.jpg',
  },
  {
    id: 96,
    name: 'Maang Tikka',
    category: 'Accessories',
    price: 500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/61/cb/8c/61cb8c3883ce85a3d93f0e9865c77eeb.jpg',
  },

  {
    id: 97,
    name: 'Elegant Silver Lotus Anklet',
    category: 'Accessories',
    price: 700,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/4c/e6/46/4ce64664d70642ba961060abc48fc976.jpg',
  },
  {
    id: 98,
    name: 'Rolex Watch',
    category: 'Watches',
    price: 5000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/36/18/79/361879aae0ebd7e22af746d931a94979.jpg',
  },
  {
    id: 99,
    name: 'Black Watch for men',
    category: 'Watches',
    price: 2000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/a9/34/a1/a934a1b16bb76e0722be007873a4d3d9.jpg',
  },
  {
    id: 100,
    name: 'casio vintage watch',
    category: 'Watches',
    price: 1500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/9d/35/c4/9d35c40f69e3e513720a319c80038b2f.jpg',
  },
  {
    id: 101,
    name: 'Luxury vintage watch',
    category: 'Watches',
    price: 2500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/60/27/01/6027010e63865c322cd871980ee2c354.jpg',
  },
  {
    id: 102,
    name: 'Titan Watch men',
    category: 'Watches',
    price: 3000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/85/2c/5f/852c5f1733ac38805b69b8a093897799.jpg',
  },
  {
    id: 103,
    name: 'Fossil Watch men',
    category: 'Watches',
    price: 4500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/6c/30/95/6c30958dc8180a45dedfc8bb985c6e55.jpg',
  },
  {
    id: 104,
    name: 'Watch men',
    category: 'Watches',
    price: 1800,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/d1/a2/20/d1a220ec752b98f3a086bcef58b761ef.jpg',
  },
  {
    id: 105,
    name: 'Watch men',
    category: 'Watches',
    price: 1800,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/d1/a2/20/d1a220ec752b98f3a086bcef58b761ef.jpg',
  },
  {
    id: 106,
    name: 'Smart Watch men',
    category: 'Watches',
    price: 3000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/27/08/26/27082657bd4d094091300666d02b30ae.jpg',
  },
  {
    id: 107,
    name: 'Smart Watch men',
    category: 'Watches',
    price: 4500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/ea/e4/3f/eae43ffb5871992f557ec0340779a4d7.jpg',
  },
  {
    id: 108,
    name: "Black Matte G-Shock Men's Watch",
    category: 'Watches',
    price: 3500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/53/19/47/531947ad6eb85d608fdc37b5c5204401.jpg',
  },
  {
    id: 109,
    name: 'Titan Raga Analog watch for women',
    category: 'Watches',
    price: 4500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/98/a8/a6/98a8a60597a4a504ddb24e0e3854d83e.jpg',
  },
  {
    id: 110,
    name: 'Luxury watch for women',
    category: 'Watches',
    price: 4900,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/f0/90/f0/f090f095c086c1d0be733b312baa1296.jpg',
  },
  {
    id: 111,
    name: 'Titan purple Black dial metallic brown strap watch women',
    category: 'Watches',
    price: 2500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/cc/52/ce/cc52cefb3cebf98c1aa1e3675114b301.jpg',
  },
  {
    id: 112,
    name: 'Fossil watch',
    category: 'Watches',
    price: 3000,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/86/f7/c5/86f7c5e2e6251a1ac82e553e7e1f3a75.jpg',
  },
  {
    id: 113,
    name: 'chain watch',
    category: 'Watches',
    price: 1000,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/67/4d/91/674d91e2cee7fd2f16882df76b6c1a3e.jpg',
  },
  {
    id: 114,
    name: 'traditional kashmiri watch',
    category: 'Watches',
    price: 5000,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/f6/d2/96/f6d2965aa347ac1da5f5bf08d43f619e.jpg',
  },
  {
    id: 115,
    name: 'Royal green kundan style watch',
    category: 'Watches',
    price: 4500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/92/f0/67/92f067b664380e1358cd73c406d81a87.jpg',
  },
  {
    id: 116,
    name: 'Ring watch women',
    category: 'Watches',
    price: 6000,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/66/51/ed/6651ed5f812db7fe6bb98b7bfa8f14b6.jpg',
  },
  {
    id: 117,
    name: 'simple watch',
    category: 'Watches',
    price: 1200,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/c1/34/6d/c1346dda69463e1ad28ae709bee4ef53.jpg',
  },
  {
    id: 118,
    name: 'watch for women',
    category: 'Watches',
    price: 1300,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/25/29/52/2529529c75b1d0501fd087e9b7acf1c6.jpg',
  },
  {
    id: 119,
    name: 'Rolex watch for women',
    category: 'Watches',
    price: 4500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/d2/bd/7e/d2bd7eeeaf52165240efa00179feac9c.jpg',
  },
  {
    id: 120,
    name: 'Shivay Trishul Damru Rudraksha Pendant',
    category: 'Accessories',
    price: 1000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/ab/c7/a4/abc7a4932ee32c3062d4cbd096eeaaca.jpg',
  },
  {
    id: 121,
    name: "silver aquamarine stone men's bracelet",
    category: 'Accessories',
    price: 1000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/4c/fb/da/4cfbda557b99b34eabc7158c31b223eb.jpg',
  },
  {
    id: 122,
    name: 'casual chain for men',
    category: 'Accessories',
    price: 499,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/c5/69/04/c569049b3721effe29a95da53b449ddf.jpg',
  },
  {
    id: 123,
    name: 'Rudraksh chain for men',
    category: 'Accessories',
    price: 899,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/a8/fc/83/a8fc83ebe6a71bd75bfab6e3b46a92c6.jpg',
  },
  {
    id: 124,
    name: 'Rudraksh bracelet for men',
    category: 'Accessories',
    price: 599,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/88/d1/0f/88d10fe4c6d4f3f2ce3f1538307dea3b.jpg',
  },
  {
    id: 125,
    name: 'Hanuman pendent ',
    category: 'Accessories',
    price: 399,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/5e/1e/c7/5e1ec73543b25674712947b2d269c2ff.jpg',
  },
  {
    id: 126,
    name: 'Gucci perfume for women',
    category: 'Perfumes',
    price: 6500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/fe/d3/f3/fed3f3359ca555aa095defb60e7ed226.jpg',
  },
  {
    id: 127,
    name: 'COCO chanel perfume',
    category: 'Perfumes',
    price: 9800,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/6e/1e/07/6e1e07fd6418f7a2df0adc81dde6a8bc.jpg',
  },
  {
    id: 128,
    name: "victoria's secret",
    category: 'Perfumes',
    price: 1900,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/a6/38/13/a638131fa8575f94252369f81abe0de0.jpg',
  },
  {
    id: 129,
    name: 'Scandalous perfume',
    category: 'Perfumes',
    price: 3800,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/23/5b/f8/235bf88a7db93d2f1f75074059fbba70.jpg',
  },
  {
    id: 130,
    name: 'ZARA Blackberry Oud perfume',
    category: 'Perfumes',
    price: 3950,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/d7/50/af/d750af2501b9e7b384af17bcf1977771.jpg',
  },
  {
    id: 131,
    name: 'ZARA Red Vanilla',
    category: 'Perfumes',
    price: 1400,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/9c/b5/ea/9cb5eac0f93e2f1c08ced45d1da6a953.jpg',
  },
  {
    id: 132,
    name: 'Bellavitta perfume',
    category: 'Perfumes',
    price: 549,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/88/33/06/883306cdfc33375bae5ca3ca91d30bfd.jpg',
  },
  {
    id: 133,
    name: 'VANESA dream perfume',
    category: 'Perfumes',
    price: 489,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/09/5f/2a/095f2ac3a01592855eb846b97a336044.jpg',
  },
  {
    id: 134,
    name: 'AURA Garden body splash',
    category: 'Perfumes',
    price: 1200,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/d4/30/2e/d4302e5c990e73c01b695feaa8387281.jpg',
  },
  {
    id: 135,
    name: 'Yardley London Morning Dew perfume',
    category: 'Perfumes',
    price: 600,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/da/4f/54/da4f54a54d47a851d228e5400cb96b1d.jpg',
  },
  {
    id: 136,
    name: 'Wattagirl Dazzle perfume',
    category: 'Perfumes',
    price: 439,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/7c/22/64/7c22644e0fdb6878d1f052226161d543.jpg',
  },
  {
    id: 137,
    name: 'Plum BodyLove Vanilla vibes',
    category: 'Perfumes',
    price: 599,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/d5/11/e7/d511e78fdca740b769655e7d7d119813.jpg',
  },
  {
    id: 138,
    name: 'Jadore perfume',
    category: 'Perfumes',
    price: 8900,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/d3/07/7c/d3077c2621c400c795cf4dcc69f91786.jpg',
  },
  {
    id: 139,
    name: 'HIRA perfume',
    category: 'Perfumes',
    price: 999,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/e5/21/c8/e521c881e4e0c14a8b047885fb860bc0.jpg',
  },
  {
    id: 140,
    name: 'VOKKA Womania perfume',
    category: 'Perfumes',
    price: 359,
    gender: 'Women',
    image:
      'https://i.pinimg.com/736x/f9/c2/b1/f9c2b165b5dd13d99ece2bd98cd0b541.jpg',
  },
  {
    id: 141,
    name: 'Vanilla attar',
    category: 'Perfumes',
    price: 500,
    gender: 'Women',
    image:
      'https://i.pinimg.com/1200x/6c/78/e7/6c78e758821a292fddb9e592e01d542c.jpg',
  },
  {
    id: 142,
    name: "Versace Ero's ",
    category: 'Perfumes',
    price: 5000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/95/b0/02/95b002867434f04e1e145270df1ece58.jpg',
  },
  {
    id: 143,
    name: 'Coach perfume',
    category: 'Perfumes',
    price: 4000,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/56/d3/19/56d319bbdf53ec568002afc411354ccf.jpg',
  },
  {
    id: 144,
    name: 'Boss perfume',
    category: 'Perfumes',
    price: 4500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/91/ab/7b/91ab7b44a494f436bb27570de049e568.jpg',
  },
  {
    id: 145,
    name: 'Bellavita Goat men',
    category: 'Perfumes',
    price: 469,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/a2/e3/b5/a2e3b57cc26f3472fe0bf6298605802c.jpg',
  },
  {
    id: 146,
    name: 'Sauvage perfume',
    category: 'Perfumes',
    price: 7800,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/a6/be/37/a6be37a60fb3bd9fab3204b4c036c8cc.jpg',
  },
  {
    id: 147,
    name: 'Fogg Royal blue',
    category: 'Perfumes',
    price: 189,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/ed/ff/34/edff349b65ded1283256597ae33af372.jpg',
  },
  {
    id: 148,
    name: 'The Man Company OUD Regal perfume',
    category: 'Perfumes',
    price: 500,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/ad/37/2c/ad372c66a0fd07ccc3b35fe459302060.jpg',
  },
  {
    id: 149,
    name: 'Wild Stone',
    category: 'Perfumes',
    price: 450,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/ad/c0/d5/adc0d5b0eae46318a2fa06860dca96f9.jpg',
  },
  {
    id: 150,
    name: 'CODE perfume',
    category: 'Perfumes',
    price: 520,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/ad/c0/d5/adc0d5b0eae46318a2fa06860dca96f9.jpg',
  },

  {
    id: 151,
    name: 'Black Wedding Outfit',
    category: 'Clothing',
    price: 1200,
    gender: 'Men',
    image:
      'https://i.pinimg.com/1200x/55/fb/87/55fb871114fcf7f9018678f421a8fcf5.jpg',
  },
  {
    id: 152,
    name: 'Men Pink Slim Fit Cotton shirt',
    category: 'Clothing',
    price: 1600,
    gender: 'Men',
    image:
      'https://i.pinimg.com/736x/4a/49/aa/4a49aa7a22fc41073e4969c12a1e94a5.jpg',
  },
];

export default products;
