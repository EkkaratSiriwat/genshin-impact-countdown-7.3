// In-roster relationships from Voice-Over topics at https://wiki.hoyolab.com/pc/genshin/aggregate/2.
// One published mention qualifies both speakers; empty entries use their solo lines.
const relayVoiceRelationships = {
  "Aether": "Beidou|Bennett|Cyno|Diluc|Dori|Fischl|Gorou|Kaedehara Kazuha|Kaeya|Kamisato Ayaka|Klee|Ningguang|Qiqi|Razor|Sangonomiya Kokomi|Sayu|Venti|Yoimiya|Zhongli",
  "Aino": "Dori|Flins|Illuga|Ineffa|Jahoda|Lauma|Linnea|Nefer|Prune|Varka",
  "Albedo": "Amber|Barbara|Diona|Durin|Jean|Kaeya|Klee|Lisa|Lohen|Mika|Mona|Nicole|Prune|Rosaria|Sucrose|Varka|Venti|Xingqiu",
  "Alhaitham": "Candace|Cyno|Dehya|Dori|Kaveh|Layla|Nahida|Nilou|Sethos|Tighnari",
  "Aloy": "",
  "Alyosha": "Anastasya|Mitya|Odette|Valeriy|Vesna|Vodyanitsa",
  "Amber": "Albedo|Barbara|Bennett|Collei|Eula|Jean|Kaeya|Klee|Lisa|Lohen|Mika|Noelle|Sucrose|Varka",
  "Anastasya": "Alyosha|Arlecchino|Columbina|Flins|Mitya|Odette|Sandrone|Tartaglia|Valeriy|Vesna|Vodyanitsa|Wanderer",
  "Arataki Itto": "Gorou|Kaedehara Kazuha|Kamisato Ayato|Kirara|Kujou Sara|Kuki Shinobu|Raiden Shogun|Sayu|Shikanoin Heizou|Thoma|Yae Miko|Yoimiya",
  "Arlecchino": "Anastasya|Columbina|Escoffier|Freminet|Furina|Lynette|Lyney|Navia|Odette|Sandrone|Tartaglia|Vodyanitsa|Wanderer",
  "Baizhu": "Gaming|Ganyu|Hu Tao|Keqing|Qiqi|Shenhe|Tighnari|Xiangling|Xiao|Xinyan|Yaoyao|Zhongli",
  "Barbara": "Albedo|Amber|Bennett|Dahlia|Diluc|Diona|Eula|Jean|Lisa|Noelle|Razor|Rosaria|Varka|Venti",
  "Beidou": "Aether|Ganyu|Gorou|Hu Tao|Kaedehara Kazuha|Keqing|Lumine|Ningguang|Sangonomiya Kokomi|Shenhe|Thoma|Xiangling|Xiao|Xingqiu|Xinyan|Yaoyao|Yoimiya|Zhongli",
  "Bennett": "Aether|Amber|Barbara|Fischl|Jean|Klee|Lumine|Noelle|Razor|Varka",
  "Candace": "Alhaitham|Cyno|Dehya|Layla|Nahida|Nefer|Sethos",
  "Charlotte": "Chevreuse|Chiori|Clorinde|Emilie|Escoffier|Freminet|Furina|Gaming|Lynette|Lyney|Navia|Sigewinne|Wriothesley",
  "Chasca": "Citlali|Iansan|Ifa|Ineffa|Kachina|Kinich|Mavuika|Mualani|Ororon|Xilonen",
  "Chevreuse": "Charlotte|Chiori|Clorinde|Emilie|Freminet|Furina|Lyney|Navia|Sigewinne|Wriothesley",
  "Chiori": "Charlotte|Chevreuse|Clorinde|Emilie|Kamisato Ayaka|Kirara|Lynette|Lyney|Navia|Sigewinne|Wriothesley",
  "Chongyun": "Gaming|Hu Tao|Lan Yan|Qiqi|Shenhe|Xiangling|Xiao|Xingqiu|Xinyan|Yelan|Zhongli",
  "Citlali": "Chasca|Iansan|Ifa|Kamisato Ayaka|Kinich|Mavuika|Mualani|Ororon|Sandrone|Varesa|Xilonen",
  "Clorinde": "Charlotte|Chevreuse|Chiori|Emilie|Freminet|Furina|Lynette|Lyney|Navia|Sigewinne|Wriothesley",
  "Collei": "Amber|Cyno|Dori|Faruzan|Fischl|Kaeya|Kaveh|Lisa|Nahida|Nilou|Tighnari",
  "Columbina": "Anastasya|Arlecchino|Illuga|Jahoda|Lauma|Nicole|Odette|Sandrone|Tartaglia|Vodyanitsa|Wanderer",
  "Cyno": "Aether|Alhaitham|Candace|Collei|Dehya|Dori|Faruzan|Kaveh|Layla|Lisa|Lumine|Nahida|Nefer|Nilou|Sethos|Tighnari",
  "Dahlia": "Barbara|Diluc|Jean|Kaeya|Klee|Rosaria|Venti",
  "Danica": "Mitya|Valeriy|Vesna|Vodyanitsa",
  "Dehya": "Alhaitham|Candace|Cyno|Dori|Layla|Nahida|Nefer|Nilou|Sethos|Tighnari",
  "Diluc": "Aether|Barbara|Dahlia|Diona|Eula|Jean|Kaeya|Klee|Lisa|Lohen|Lumine|Mona|Nefer|Razor|Rosaria|Varka|Venti",
  "Diona": "Albedo|Barbara|Diluc|Durin|Eula|Jean|Kaeya|Klee|Lisa|Venti|Xiangling",
  "Dori": "Aether|Aino|Alhaitham|Collei|Cyno|Dehya|Kaveh|Kirara|Layla|Lumine|Nahida|Nefer|Nilou|Prune|Tighnari|Varesa|Zhongli",
  "Durin": "Albedo|Diona|Fischl|Kirara|Klee|Lisa|Navia|Nicole|Nilou|Varka|Venti|Wanderer",
  "Emilie": "Charlotte|Chevreuse|Chiori|Clorinde|Escoffier|Lynette|Lyney|Sigewinne|Tighnari|Wriothesley",
  "Escoffier": "Arlecchino|Charlotte|Emilie|Furina|Lynette|Navia|Sigewinne|Varesa|Wriothesley|Xiangling",
  "Eula": "Amber|Barbara|Diluc|Diona|Jean|Lisa|Lohen|Mika|Razor|Sucrose|Thoma|Varka|Venti|Yanfei",
  "Faruzan": "Collei|Cyno|Kaveh|Layla|Nahida|Nilou|Sethos|Tighnari",
  "Fischl": "Aether|Bennett|Collei|Durin|Kaeya|Lisa|Lumine|Mona|Nicole|Noelle|Prune|Rosaria|Sucrose",
  "Flins": "Aino|Anastasya|Illuga|Ineffa|Jahoda|Lauma|Linnea|Nefer|Varka",
  "Freminet": "Arlecchino|Charlotte|Chevreuse|Clorinde|Furina|Lynette|Lyney|Navia|Sigewinne",
  "Furina": "Arlecchino|Charlotte|Chevreuse|Clorinde|Escoffier|Freminet|Lynette|Lyney|Nahida|Navia|Raiden Shogun|Wriothesley|Zhongli",
  "Gaming": "Baizhu|Charlotte|Chongyun|Keqing|Lan Yan|Qiqi|Xiangling|Xianyun|Xingqiu|Xinyan|Yun Jin|Zhongli",
  "Ganyu": "Baizhu|Beidou|Keqing|Ningguang|Shenhe|Xiangling|Xianyun|Xiao|Xingqiu|Yae Miko|Yanfei|Yaoyao|Yelan|Zhongli",
  "Gorou": "Aether|Arataki Itto|Beidou|Kaedehara Kazuha|Kamisato Ayaka|Kujou Sara|Lumine|Raiden Shogun|Sangonomiya Kokomi|Sayu|Shikanoin Heizou|Yae Miko",
  "Hu Tao": "Baizhu|Beidou|Chongyun|Keqing|Lan Yan|Ningguang|Qiqi|Shenhe|Xiangling|Xianyun|Xiao|Xingqiu|Xinyan|Yanfei|Yun Jin|Zhongli|Zibai",
  "Iansan": "Chasca|Citlali|Kachina|Kinich|Mavuika|Mualani|Ororon|Varesa|Xilonen",
  "Ifa": "Chasca|Citlali|Kachina|Kinich|Mavuika|Mualani|Ororon|Xilonen",
  "Illuga": "Aino|Columbina|Flins|Lauma|Linnea|Nefer|Varka",
  "Ineffa": "Aino|Chasca|Flins|Jahoda|Lauma|Linnea|Nefer|Varka|Xilonen",
  "Jahoda": "Aino|Columbina|Flins|Ineffa|Lauma|Nefer|Sandrone|Varka",
  "Jean": "Albedo|Amber|Barbara|Bennett|Dahlia|Diluc|Diona|Eula|Kaeya|Klee|Lisa|Lohen|Mika|Mona|Ningguang|Noelle|Rosaria|Sucrose|Thoma|Varka|Venti",
  "Kachina": "Chasca|Iansan|Ifa|Kinich|Mavuika|Mualani|Xilonen",
  "Kaedehara Kazuha": "Aether|Arataki Itto|Beidou|Gorou|Kamisato Ayaka|Kamisato Ayato|Kujou Sara|Lumine|Raiden Shogun|Sangonomiya Kokomi|Shikanoin Heizou|Wanderer|Yoimiya|Yun Jin",
  "Kaeya": "Aether|Albedo|Amber|Collei|Dahlia|Diluc|Diona|Fischl|Jean|Klee|Lisa|Lohen|Lumine|Mika|Mona|Noelle|Prune|Rosaria|Sucrose|Varka",
  "Kamisato Ayaka": "Aether|Chiori|Citlali|Gorou|Kaedehara Kazuha|Kamisato Ayato|Kujou Sara|Lumine|Raiden Shogun|Sayu|Shikanoin Heizou|Thoma|Yae Miko|Yoimiya|Yumemizuki Mizuki",
  "Kamisato Ayato": "Arataki Itto|Kaedehara Kazuha|Kamisato Ayaka|Kujou Sara|Ningguang|Raiden Shogun|Sayu|Thoma|Yae Miko|Yoimiya",
  "Kaveh": "Alhaitham|Collei|Cyno|Dori|Faruzan|Nahida|Nilou|Sethos|Tighnari",
  "Keqing": "Baizhu|Beidou|Gaming|Ganyu|Hu Tao|Lan Yan|Ningguang|Venti|Xiangling|Xianyun|Xiao|Xingqiu|Xinyan|Yanfei|Yaoyao|Yelan|Yun Jin|Zhongli|Zibai",
  "Kinich": "Chasca|Citlali|Iansan|Ifa|Kachina|Mavuika|Mualani|Ororon|Varesa|Xilonen",
  "Kirara": "Arataki Itto|Chiori|Dori|Durin|Kujou Sara|Lyney|Raiden Shogun|Sayu|Shikanoin Heizou|Yae Miko|Yoimiya",
  "Klee": "Aether|Albedo|Amber|Bennett|Dahlia|Diluc|Diona|Durin|Jean|Kaeya|Lisa|Lohen|Lumine|Mika|Mona|Nicole|Noelle|Prune|Razor|Rosaria|Sucrose|Varka|Yoimiya",
  "Kujou Sara": "Arataki Itto|Gorou|Kaedehara Kazuha|Kamisato Ayaka|Kamisato Ayato|Kirara|Kuki Shinobu|Raiden Shogun|Sangonomiya Kokomi|Shikanoin Heizou|Thoma|Yae Miko|Yoimiya|Yumemizuki Mizuki",
  "Kuki Shinobu": "Arataki Itto|Kujou Sara|Raiden Shogun|Sayu|Shikanoin Heizou|Yae Miko|Yanfei",
  "Lan Yan": "Chongyun|Gaming|Hu Tao|Keqing|Qiqi|Xiangling|Xingqiu|Zibai",
  "Lauma": "Aino|Columbina|Flins|Illuga|Ineffa|Jahoda|Linnea|Nefer|Varka",
  "Layla": "Alhaitham|Candace|Cyno|Dehya|Dori|Faruzan|Lisa|Mona|Nahida|Tighnari",
  "Linnea": "Aino|Flins|Illuga|Ineffa|Lauma|Nefer|Sandrone|Vodyanitsa",
  "Lisa": "Albedo|Amber|Barbara|Collei|Cyno|Diluc|Diona|Durin|Eula|Fischl|Jean|Kaeya|Klee|Layla|Mika|Mona|Noelle|Prune|Razor|Rosaria|Sucrose|Tighnari",
  "Lohen": "Albedo|Amber|Diluc|Eula|Jean|Kaeya|Klee|Mika|Noelle|Varka",
  "Lumine": "Beidou|Bennett|Cyno|Diluc|Dori|Fischl|Gorou|Kaedehara Kazuha|Kaeya|Kamisato Ayaka|Klee|Ningguang|Qiqi|Razor|Sangonomiya Kokomi|Sayu|Venti|Yoimiya|Zhongli",
  "Lynette": "Arlecchino|Charlotte|Chiori|Clorinde|Emilie|Escoffier|Freminet|Furina|Lyney|Navia|Sandrone|Sigewinne",
  "Lyney": "Arlecchino|Charlotte|Chevreuse|Chiori|Clorinde|Emilie|Freminet|Furina|Kirara|Lynette|Navia|Sigewinne|Wriothesley",
  "Mavuika": "Chasca|Citlali|Iansan|Ifa|Kachina|Kinich|Mualani|Ororon|Varesa|Varka|Xilonen|Yumemizuki Mizuki",
  "Mika": "Albedo|Amber|Eula|Jean|Kaeya|Klee|Lisa|Lohen|Varka|Venti",
  "Mitya": "Alyosha|Anastasya|Danica|Odette|Valeriy|Vesna|Vodyanitsa",
  "Mona": "Albedo|Diluc|Fischl|Jean|Kaeya|Klee|Layla|Lisa|Nicole|Prune|Venti",
  "Mualani": "Chasca|Citlali|Iansan|Ifa|Kachina|Kinich|Mavuika|Varesa|Xilonen|Yumemizuki Mizuki",
  "Nahida": "Alhaitham|Candace|Collei|Cyno|Dehya|Dori|Faruzan|Furina|Kaveh|Layla|Nilou|Raiden Shogun|Tighnari|Venti|Wanderer|Yumemizuki Mizuki|Zhongli",
  "Navia": "Arlecchino|Charlotte|Chevreuse|Chiori|Clorinde|Durin|Escoffier|Freminet|Furina|Lynette|Lyney|Sigewinne|Wriothesley",
  "Nefer": "Aino|Candace|Cyno|Dehya|Diluc|Dori|Flins|Illuga|Ineffa|Jahoda|Lauma|Linnea|Varka|Yelan",
  "Nicole": "Albedo|Columbina|Durin|Fischl|Klee|Mona|Prune|Varka|Yae Miko|Zibai",
  "Nilou": "Alhaitham|Collei|Cyno|Dehya|Dori|Durin|Faruzan|Kaveh|Nahida|Sethos|Tighnari",
  "Ningguang": "Aether|Beidou|Ganyu|Hu Tao|Jean|Kamisato Ayato|Keqing|Lumine|Shenhe|Xiangling|Xianyun|Xingqiu|Xinyan|Yanfei|Yaoyao|Yelan|Yun Jin|Zhongli|Zibai",
  "Noelle": "Amber|Barbara|Bennett|Fischl|Jean|Kaeya|Klee|Lisa|Lohen|Sucrose|Varka",
  "Odette": "Alyosha|Anastasya|Arlecchino|Columbina|Mitya|Sandrone|Valeriy|Vesna|Vodyanitsa",
  "Ororon": "Chasca|Citlali|Iansan|Ifa|Kinich|Mavuika|Xilonen",
  "Prune": "Aino|Albedo|Dori|Fischl|Kaeya|Klee|Lisa|Mona|Nicole|Qiqi|Sayu|Yaoyao",
  "Qiqi": "Aether|Baizhu|Chongyun|Gaming|Hu Tao|Lan Yan|Lumine|Prune|Xiao|Xingqiu|Xinyan|Yanfei|Yaoyao|Zibai",
  "Raiden Shogun": "Arataki Itto|Furina|Gorou|Kaedehara Kazuha|Kamisato Ayaka|Kamisato Ayato|Kirara|Kujou Sara|Kuki Shinobu|Nahida|Sangonomiya Kokomi|Sayu|Thoma|Venti|Wanderer|Yae Miko|Yoimiya|Yumemizuki Mizuki|Zhongli",
  "Razor": "Aether|Barbara|Bennett|Diluc|Eula|Klee|Lisa|Lumine|Varka|Venti",
  "Rosaria": "Albedo|Barbara|Dahlia|Diluc|Fischl|Jean|Kaeya|Klee|Lisa|Varka|Venti",
  "Sandrone": "Anastasya|Arlecchino|Citlali|Columbina|Jahoda|Linnea|Lynette|Odette|Tartaglia|Valeriy|Vesna|Vodyanitsa|Wanderer",
  "Sangonomiya Kokomi": "Aether|Beidou|Gorou|Kaedehara Kazuha|Kujou Sara|Lumine|Raiden Shogun|Shikanoin Heizou|Yae Miko|Yumemizuki Mizuki",
  "Sayu": "Aether|Arataki Itto|Gorou|Kamisato Ayaka|Kamisato Ayato|Kirara|Kuki Shinobu|Lumine|Prune|Raiden Shogun|Thoma|Yae Miko|Yoimiya|Yumemizuki Mizuki",
  "Sethos": "Alhaitham|Candace|Cyno|Dehya|Faruzan|Kaveh|Nilou|Tighnari|Wanderer",
  "Shenhe": "Baizhu|Beidou|Chongyun|Ganyu|Hu Tao|Ningguang|Xianyun|Xiao|Xingqiu|Yaoyao|Yun Jin|Zhongli",
  "Shikanoin Heizou": "Arataki Itto|Gorou|Kaedehara Kazuha|Kamisato Ayaka|Kirara|Kujou Sara|Kuki Shinobu|Sangonomiya Kokomi|Thoma|Yae Miko",
  "Sigewinne": "Charlotte|Chevreuse|Chiori|Clorinde|Emilie|Escoffier|Freminet|Lynette|Lyney|Navia|Wriothesley",
  "Sucrose": "Albedo|Amber|Eula|Fischl|Jean|Kaeya|Klee|Lisa|Noelle",
  "Tartaglia": "Anastasya|Arlecchino|Columbina|Sandrone|Valeriy|Varka|Vodyanitsa|Wanderer|Yelan|Zhongli",
  "Thoma": "Arataki Itto|Beidou|Eula|Jean|Kamisato Ayaka|Kamisato Ayato|Kujou Sara|Raiden Shogun|Sayu|Shikanoin Heizou|Yae Miko|Yoimiya",
  "Tighnari": "Alhaitham|Baizhu|Collei|Cyno|Dehya|Dori|Emilie|Faruzan|Kaveh|Layla|Lisa|Nahida|Nilou|Sethos",
  "Valeriy": "Alyosha|Anastasya|Danica|Mitya|Odette|Sandrone|Tartaglia|Varka|Vesna|Vodyanitsa",
  "Varesa": "Citlali|Dori|Escoffier|Iansan|Kinich|Mavuika|Mualani|Xilonen",
  "Varka": "Aino|Albedo|Amber|Barbara|Bennett|Diluc|Durin|Eula|Flins|Illuga|Ineffa|Jahoda|Jean|Kaeya|Klee|Lauma|Lohen|Mavuika|Mika|Nefer|Nicole|Noelle|Razor|Rosaria|Tartaglia|Valeriy|Venti",
  "Venti": "Aether|Albedo|Barbara|Dahlia|Diluc|Diona|Durin|Eula|Jean|Keqing|Lumine|Mika|Mona|Nahida|Raiden Shogun|Razor|Rosaria|Varka|Xiao|Zhongli",
  "Vesna": "Alyosha|Anastasya|Danica|Mitya|Odette|Sandrone|Valeriy|Vodyanitsa",
  "Vodyanitsa": "Alyosha|Anastasya|Arlecchino|Columbina|Danica|Linnea|Mitya|Odette|Sandrone|Tartaglia|Valeriy|Vesna",
  "Wanderer": "Anastasya|Arlecchino|Columbina|Durin|Kaedehara Kazuha|Nahida|Raiden Shogun|Sandrone|Sethos|Tartaglia|Yae Miko",
  "Wriothesley": "Charlotte|Chevreuse|Chiori|Clorinde|Emilie|Escoffier|Furina|Lyney|Navia|Sigewinne",
  "Xiangling": "Baizhu|Beidou|Chongyun|Diona|Escoffier|Gaming|Ganyu|Hu Tao|Keqing|Lan Yan|Ningguang|Xianyun|Xingqiu|Xinyan|Yaoyao|Yelan|Zhongli",
  "Xianyun": "Gaming|Ganyu|Hu Tao|Keqing|Ningguang|Shenhe|Xiangling|Xiao|Yaoyao|Yun Jin|Zhongli|Zibai",
  "Xiao": "Baizhu|Beidou|Chongyun|Ganyu|Hu Tao|Keqing|Qiqi|Shenhe|Venti|Xianyun|Yelan|Zhongli|Zibai",
  "Xilonen": "Chasca|Citlali|Iansan|Ifa|Ineffa|Kachina|Kinich|Mavuika|Mualani|Ororon|Varesa",
  "Xingqiu": "Albedo|Beidou|Chongyun|Gaming|Ganyu|Hu Tao|Keqing|Lan Yan|Ningguang|Qiqi|Shenhe|Xiangling|Xinyan|Yanfei|Yelan|Yun Jin|Zhongli",
  "Xinyan": "Baizhu|Beidou|Chongyun|Gaming|Hu Tao|Keqing|Ningguang|Qiqi|Xiangling|Xingqiu|Yun Jin|Zhongli",
  "Yae Miko": "Arataki Itto|Ganyu|Gorou|Kamisato Ayaka|Kamisato Ayato|Kirara|Kujou Sara|Kuki Shinobu|Nicole|Raiden Shogun|Sangonomiya Kokomi|Sayu|Shikanoin Heizou|Thoma|Wanderer|Yoimiya|Yumemizuki Mizuki",
  "Yanfei": "Eula|Ganyu|Hu Tao|Keqing|Kuki Shinobu|Ningguang|Qiqi|Xingqiu|Yaoyao|Yelan|Zhongli|Zibai",
  "Yaoyao": "Baizhu|Beidou|Ganyu|Keqing|Ningguang|Prune|Qiqi|Shenhe|Xiangling|Xianyun|Yanfei|Yun Jin|Zibai",
  "Yelan": "Chongyun|Ganyu|Keqing|Nefer|Ningguang|Tartaglia|Xiangling|Xiao|Xingqiu|Yanfei",
  "Yoimiya": "Aether|Arataki Itto|Beidou|Kaedehara Kazuha|Kamisato Ayaka|Kamisato Ayato|Kirara|Klee|Kujou Sara|Lumine|Raiden Shogun|Sayu|Thoma|Yae Miko|Yumemizuki Mizuki",
  "Yumemizuki Mizuki": "Kamisato Ayaka|Kujou Sara|Mavuika|Mualani|Nahida|Raiden Shogun|Sangonomiya Kokomi|Sayu|Yae Miko|Yoimiya",
  "Yun Jin": "Gaming|Hu Tao|Kaedehara Kazuha|Keqing|Ningguang|Shenhe|Xianyun|Xingqiu|Xinyan|Yaoyao|Zhongli",
  "Zhongli": "Aether|Baizhu|Beidou|Chongyun|Dori|Furina|Gaming|Ganyu|Hu Tao|Keqing|Lumine|Nahida|Ningguang|Raiden Shogun|Shenhe|Tartaglia|Venti|Xiangling|Xianyun|Xiao|Xingqiu|Xinyan|Yanfei|Yun Jin|Zibai",
  "Zibai": "Hu Tao|Keqing|Lan Yan|Nicole|Ningguang|Qiqi|Xianyun|Xiao|Yanfei|Yaoyao|Zhongli",
};

// Original fan dialogue, indexed by speaker and outcome: defeat, 42 days, 84 days, victory.
// Each speaker uses their own outcome writing; no persona-group text or generic fallback.
const relayRelationshipDialogue = {
  "Aether": [
    [
      "{0} ฉันเคยคิดว่าถ้าสองพี่น้องได้เจอกันอีกครั้ง ฉันจะเล่าเรื่องโลกใบนี้ให้เธอฟัง... ฉันจะเล่าตอนจบยังไงดี",
      "{0}, I used to think that if the two brothers met again I will tell you the story of this world... How do I tell the ending?"
    ],
    [
      "{0} หกสัปดาห์เหรอ งั้นแวะบอกข่าวที่บ้านของแต่ละคนก่อน",
      "{0}, six weeks? So let's stop by each other's homes to share the news first."
    ],
    [
      "{0} คราวนี้เรามีเวลาหาทางอ้อม ฉันอยากรู้ว่าหลังหอนั่นมีอะไร",
      "{0}, this time we have time to find a detour. I want to know what's behind that tower."
    ],
    [
      "{0} ฉันเคยคิดแต่อยากไปให้ถึงปลายทาง วันนี้ขอนั่งดูพระอาทิตย์ขึ้นกับนายก่อนนะ",
      "{0}, I used to think only of wanting to reach my destination. Today, I'd like to sit and watch the sunrise with you first."
    ]
  ],
  "Aino": [
    [
      "{0} มันยังเดินอยู่นะ ดูสิ เฟืองทุกตัวหมุนตามที่ฉันออกแบบเลย แล้วทำไมเราถึงหยุดมันไม่ได้ล่ะ?",
      "{0}, it's still running. Look, all the gears turn just as I designed. So why can't we stop it?"
    ],
    [
      "{0} ขอยืมโต๊ะเธอหกสัปดาห์นะ คราวนี้จะเก็บสกรูให้ครบเลย",
      "{0}, I'd like to borrow your desk for six weeks. This time I will collect all the screws."
    ],
    [
      "{0} สิบสองสัปดาห์! ประกอบตัวทดลองได้อีกตั้งสามรุ่นแน่ะ",
      "{0}, twelve weeks! You can assemble three more models to test."
    ],
    [
      "{0} ใช้ได้จริงด้วย! ช่วยจดที ก่อนที่ฉันจะถอดมันดูว่าทำไมถึงใช้ได้",
      "{0}, it can actually be used too! Please write it down before I take it apart to see why it works."
    ]
  ],
  "Albedo": [
    [
      "{0} เมื่อกี้ผมพยายามผสมสีท้องฟ้าก่อนที่แสงจะกลืนมันไป ผมจำสีนั้นไม่ได้แล้ว ทั้งที่เพิ่งเห็นกับตา",
      "{0}, just now I was trying to mix the color of the sky before the light swallowed it up. I don't remember that color anymore. Even though I just saw it with my own eyes"
    ],
    [
      "{0} รอยเล็กเท่านี้ทำให้ฟ้าหยุดได้หกสัปดาห์ น่าศึกษาจริงๆ",
      "{0}, a scratch this small can stop the sky for six weeks. Really worth studying."
    ],
    [
      "{0} ผมจะร่างรอยแตกไว้ คุณช่วยจับเวลาที่มันสมานที",
      "{0}, I will outline the cracks. Can you help me determine the time it heals?"
    ],
    [
      "{0} ยืนนิ่งสักครู่ได้ไหม ผมอยากวาดสีหน้าคนที่เพิ่งเปลี่ยนชะตาของตัวเอง",
      "{0}, can you stand still for a moment? I want to draw the expression of a person who has just changed his fate."
    ]
  ],
  "Alhaitham": [
    [
      "{0} ผมเป็นคนบอกว่าความเสี่ยงนี้ยอมรับได้ ตอนนั้นคนที่ต้องรับความเสี่ยงเชื่อผมเสียด้วย นั่นแหละที่ผมเสียใจ",
      "{0}, I'm the one who said this risk is acceptable. At that time, the people who had to take the risk believed me. That's what I regret."
    ],
    [
      "{0} แบ่งหกสัปดาห์ให้ดี การประชุมกินเวลาในนั้นด้วย",
      "{0}, divide the six weeks well. Meetings also consume time there."
    ],
    [
      "{0} รอยแตกเป็นหลักฐาน เอากระดาษมา ผมจะลอกไว้ก่อนมันเปลี่ยน",
      "{0}, cracks are evidence. Bring some paper. I'll peel it off before it changes."
    ],
    [
      "{0} รายงานฉบับนี้ขอให้คุณลงชื่อเอง ผมหมดเวลางานแล้ว",
      "{0}, this report requires your signature. I'm done with work."
    ]
  ],
  "Aloy": [
    [
      "{0} ตรงนี้เคยมีเสียงนก พวกมันมักรู้ก่อนฉันว่าอันตรายผ่านไปแล้ว ฉันยืนฟังมานานเหลือเกิน",
      "{0}, there used to be the sound of birds here. They often know before me that the danger has passed. I've been listening for so long"
    ],
    [
      "{0} ฉันเห็นช่องเปิดแวบหนึ่ง หกสัปดาห์พอให้เราหัดยิงเข้าตรงนั้น",
      "{0}, I briefly saw an opening. Six weeks was enough for us to learn to shoot there."
    ],
    [
      "{0} มาดูนี่ รอยร้าววิ่งตามข้อต่อ คราวหน้าฉันรู้แล้วว่าจะเล็งตรงไหน",
      "{0}, look here, cracks running along the joints. Next time I know where to aim."
    ],
    [
      "{0} เงี่ยหูฟังสิ เสียงนกกลับมาแล้ว เราวางคันธนูได้สักที",
      "{0}, listen carefully. The sound of the birds has returned. We can finally put down our bow."
    ]
  ],
  "Alyosha": [
    [
      "{0} ผมบอกที่บ้านให้เก็บตราเดินทางดวงสุดท้ายไว้ฉลองตอนเราชนะ คุณช่วยเก็บมันแทนผมที ผมทนมองไม่ไหว",
      "{0}, I told my family to keep the last travel badge to celebrate when we won. Please save it for me. I can't bear to look."
    ],
    [
      "{0} ผมขอหนึ่งวันไปแจ้งคนที่ด่าน ที่เหลือเราค่อยเตรียมกัน",
      "{0}, I would like one day to inform the people at the checkpoint. The rest we will prepare together."
    ],
    [
      "{0} ผมเห็นประกายตรงรอยแตก คราวหน้าไปยืนข้างผมนะ จะชี้ให้ดู",
      "{0}, I saw sparks in the cracks. Next time, stand next to me, I'll show you."
    ],
    [
      "{0} เก็บเครื่องรางไว้เถอะ ตอนเดินกลับคุณคงอยากมีอะไรติดมือ",
      "{0}, keep the amulet. As you walk back, you probably want something to hold in your hand."
    ]
  ],
  "Amber": [
    [
      "{0} ตอนเราออกมา เด็กบนกำแพงโบกมือให้ฉันใหญ่เลย ฉันยังตะโกนกลับไปว่าไว้เจอกันตอนฉลอง... ไม่น่าพูดเลย",
      "{0}, when we came out, the kid on the wall gave me a big wave. I also shouted back that I'll see you at the celebration... It's not worth saying at all."
    ],
    [
      "{0} ฉันจะบินล่วงหน้าไปแจ้งกองอัศวิน ฝากนับคนทีนะ",
      "{0}, I will fly in advance to notify the Knights Division. Please count the people."
    ],
    [
      "{0} จากข้างบนเห็นรอยแตกชัดเลย เอาแผนที่มา ฉันจะวงให้",
      "{0}, you can clearly see the cracks from above. Bring a map, I'll circle it for you."
    ],
    [
      "{0} แข่งร่อนกลับเมืองกันไหม? คราวนี้ใครถึงเส้นชัยก่อนเลี้ยงมื้อเย็น!",
      "{0}, do you want to race back to the city? This time, who will reach the finish line first?"
    ]
  ],
  "Anastasya": [
    [
      "{0} รอยแตกแรกบนเกราะอยู่ตรงนี้ ฉันได้ยินมันชัด แต่ก็ยังบอกทุกคนว่ายืนข้างฉันแล้วจะปลอดภัย",
      "{0}, the first crack in the armor is here. I heard it clearly But I still tell everyone that if you stand beside me you will be safe."
    ],
    [
      "{0} น้ำแข็งละลายช้าลงแล้ว เรามีเวลาพาคนข้ามฝั่ง",
      "{0}, the ice is melting more slowly. We have time to take people across the river."
    ],
    [
      "{0} มองผ่านเกล็ดนี้สิ รอยร้าวบนหอสวรรค์ลึกกว่าที่เราเห็น",
      "{0}, look through this scale. The cracks in the Tower of Heaven were deeper than we saw."
    ],
    [
      "{0} แบมือหน่อยสิ อยากให้คุณเห็นเกล็ดสุดท้ายก่อนมันละลาย",
      "{0}, open your hand, I want you to see the last scale before it melts."
    ]
  ],
  "Arataki Itto": [
    [
      "{0} อุชิ ถ้าพวกลูกน้องถามว่าเจ๋งอย่างลูกพี่แพ้ได้ไง... ข้าคงต้องบอกว่าข้าก็กลัว ตอนนั้นข้ากลัวจริง ๆ",
      "{0}, uchi, if your subordinates ask how can you be as awesome as me... I must say that I am also afraid. I was really afraid at that time."
    ],
    [
      "{0} หกสัปดาห์เรอะ! พอให้แก๊งข้าฝึกท่าไม้ตายใหม่เลยนะ",
      "{0}, six weeks! Enough for my gang to practice some new moves."
    ],
    [
      "{0} เห็นรอยนั่นไหม อุชิ! เลิกเคี้ยวหญ้าแล้วมาดูผลงานลูกพี่เร็ว",
      "{0}, do you see that mark? Uchi! Quit chewing grass and come see your brother's work quickly."
    ],
    [
      "{0} เฮ้! ตอนเล่ากลับไป บอกด้วยนะว่าแก๊งอิตโต้ยกนายขึ้นบ่าก่อนใคร!",
      "{0}, hey! The story goes back. Please tell me that the Itto gang lifted you up on their shoulders before anyone else!"
    ]
  ],
  "Arlecchino": [
    [
      "{0} เด็ก ๆ ในบ้านรู้ว่าต้องทำอย่างไรเมื่อได้ยินสัญญาณถอนตัว ฉันเป็นคนสอนเอง แต่ฉันไม่เคยสอนให้พวกเขารับมือกับวันที่ฉันรักษาคำพูดไม่ได้",
      "{0}, children in the house know what to do when they hear the withdrawal signal. I'm the one who taught it. But I never taught them how to deal with the days when I couldn't keep my word."
    ],
    [
      "{0} คืนนี้เด็กๆ จะได้กินอาหารร้อน หกสัปดาห์นั้นฉันจะจัดการเอง",
      "{0}, tonight the children will have hot food. I'll take care of those six weeks."
    ],
    [
      "{0} เก็บเส้นทางเข้าหอไว้เป็นความลับ แม้แต่คนในบ้านก็ให้รู้เท่าที่จำเป็น",
      "{0}, keep the entrance to the dormitory a secret. Even people in the house let them know as much as necessary."
    ],
    [
      "{0} กลับบ้านเถอะ มีเด็กคนหนึ่งยืนยันว่าจะรอเปิดประตูให้คุณด้วยตัวเอง",
      "{0}, let's go home. There's a kid who insists on waiting to open the door for you himself."
    ]
  ],
  "Baizhu": [
    [
      "{0} ผมรู้ว่าควรพูดอย่างไรให้คนไข้สบายใจ แต่ถ้าเขาถามว่าพรุ่งนี้จะดีขึ้นไหม... วันนี้ผมคงได้แต่ก้มหน้า",
      "{0}, I know what to say to put patients at ease. But if he asks if tomorrow will be better... Today I can only keep my head down."
    ],
    [
      "{0} หกสัปดาห์พอให้ยาเที่ยวใหม่มาถึงท่าเรือ ขอบคุณคุณจริงๆ",
      "{0}, six weeks is enough time for a new shipment of medicine to arrive at port. Really thank you"
    ],
    [
      "{0} ก่อนกลับไปที่หอ แวะร้านผมหน่อย ผมจะเปลี่ยนห่อยาให้",
      "{0}, before returning to the dormitory Please stop by my shop. I'll change the medicine package."
    ],
    [
      "{0} หมดหน้าที่แล้วหรือครับ? สำหรับหมอ เพิ่งถึงเวลาตรวจทุกคนต่างหาก",
      "{0}, have you finished your duties? For the doctor, it's just time to examine everyone separately."
    ]
  ],
  "Barbara": [
    [
      "{0} ฉันร้องท่อนรับตั้งสองรอบ ปกติคนข้างล่างจะร้องต่อเอง รอบนี้ฉันต้องร้องจนจบคนเดียว",
      "{0}, I sang the supporting part twice. Normally, the person below would continue singing on their own. This time I had to sing until the end alone."
    ],
    [
      "{0} ยังมีเวลาอีกหกวันอาทิตย์ ฉันอยากให้ทุกคนได้ฟังเพลงด้วยกันทุกครั้ง",
      "{0}, there are still six Sundays left. I want everyone to listen to music together every time."
    ],
    [
      "{0} ฉันจะซ้อมกับคณะประสานเสียง พอถึงวันนั้นคุณต้องมาอยู่แถวหน้าเลยนะ",
      "{0}, I will practice with the choir. When that day comes, you have to be at the front of the line."
    ],
    [
      "{0} ชูมือหน่อยค่ะ! ท่อนสุดท้ายนี้ฉันอยากให้ทั้งเมืองร้องไปกับคุณ",
      "{0}, please raise your hand! With this last part, I want the whole city to sing along with you."
    ]
  ],
  "Beidou": [
    [
      "{0} ลูกเรือถามว่าจะหันหัวเรือไปทางไหน ข้ายืนจับหางเสืออยู่นาน ทั้งชีวิตเพิ่งเคยกลัวจะต้องตอบว่าไม่รู้",
      "{0}, the crew asked which way to turn the ship's bow. I stood holding the rudder for a long time. All my life I have just been afraid of having to answer that I don't know."
    ],
    [
      "{0} หกสัปดาห์พอแล่นไปกลับหนึ่งเที่ยว อยากให้ข้าขนอะไรมา?",
      "{0}, six weeks is enough for one round trip. What do you want me to bring?"
    ],
    [
      "{0} คราวหน้าข้าจะหันหัวเรือให้ตรงรอยนั่น เจ้ายืนข้างข้าแล้วให้สัญญาณ",
      "{0}, next time I will turn the bow of the ship to that mark. You stood beside me and gave me a signal."
    ],
    [
      "{0} ยกจอกขึ้น! วันนี้ให้คนที่กล้าหันหัวเรือชนสวรรค์ดื่มก่อน",
      "{0}, raise the Grail! Today, let those who dare to turn their ship's bow and crash into heaven drink first."
    ]
  ],
  "Bennett": [
    [
      "{0} ผมลองนึกมุกเรื่องดวงซวยอยู่ จะได้เห็นคุณหัวเราะสักนิด... แต่เรื่องนี้ผมหัวเราะไม่ออกจริง ๆ",
      "{0}, I'm trying to think of a joke about bad luck. I'll see you laugh a little... But I really can't laugh at this."
    ],
    [
      "{0} ตั้งสี่สิบสองวัน! โชคผมเริ่มดีขึ้นแล้วใช่ไหม?",
      "{0}, set forty-two days! My luck is starting to improve, right?"
    ],
    [
      "{0} ยังเหลือตั้งสิบสองสัปดาห์ คราวหน้าให้ผมลองเปิดทางอีกนะ",
      "{0}, there are still twelve weeks left. Next time, let me try to open the way again."
    ],
    [
      "{0} เฮ้ เราชนะจริงๆ เหรอ? งั้นขอจดวันนี้ไว้หน้าแรกของบันทึกทีมเลย!",
      "{0}, hey, did we really win? So let's put today's date on the first page of the team record!"
    ]
  ],
  "Candace": [
    [
      "{0} ตอนเด็ก ๆ ถามว่าโล่ของฉันกันแสงบนฟ้าได้ไหม ฉันตอบว่าได้ทันที ถ้าย้อนกลับไปได้ ฉันอยากกอดพวกเขาให้นานกว่านั้น",
      "{0}, when I was a child, I asked if my shield could block the light from the sky. I answered immediately. If I could go back I want to hug them longer."
    ],
    [
      "{0} คืนนี้ที่หมู่บ้านจะมีน้ำให้ทุกคน พรุ่งนี้ค่อยคิดเรื่องหกสัปดาห์นั้น",
      "{0}, tonight there will be water for everyone in the village. Tomorrow I'll think about those six weeks."
    ],
    [
      "{0} ฉันจะผลัดเวรยามใหม่ เรามีเวลาพอให้ทุกคนได้พักบ้าง",
      "{0}, I will take my new shift. We have enough time for everyone to take a break."
    ],
    [
      "{0} เมื่อถึงหมู่บ้าน วางอาวุธไว้หน้าประตูนะ วันนี้คุณเป็นแขกของฉัน",
      "{0}, when reaching the village Leave your weapon in front of the door. Today you are my guest."
    ]
  ],
  "Charlotte": [
    [
      "{0} พาดหัวเขียนง่ายค่ะ แค่สองคำว่าเราแพ้ แต่พอเห็นหน้าคนที่ฝากฉันมาทำข่าว มือฉันก็เขียนต่อไม่ได้",
      "{0}, the headline is easy to write. Just two words and we lose. But when I saw the face of the person who asked me to make news My hand couldn't write anymore."
    ],
    [
      "{0} พาดหัวเช้านี้ต้องใช้คำให้แม่น เราซื้อเวลาได้ ยังเหลือเรื่องให้ติดตาม",
      "{0}, this morning's headline must be precise. We can buy time There are still stories left to follow."
    ],
    [
      "{0} ขอภาพรอยร้าวอีกมุมค่ะ! ภาพนี้จะทำให้คนทั้งเมืองเข้าใจว่าเราทำได้แค่ไหน",
      "{0}, please give me a picture of the crack from another angle! This photo will make the whole city understand what we can do."
    ],
    [
      "{0} ขอถามคำเดียวก่อนทุกคนแย่งสัมภาษณ์นะคะ คุณอยากบอกข่าวดีกับใครคนแรก?",
      "{0}, I would like to ask one question before everyone scrambles for the interview. Who would you like to tell the good news to first?"
    ]
  ],
  "Chasca": [
    [
      "{0} ข้างบนเงียบจนฉันได้ยินบังเหียนกระทบกัน ฉันบินวนอยู่ตั้งนาน ทั้งที่รู้ว่าเล็งอีกกี่ครั้งก็สายไปแล้ว",
      "{0}, it was so quiet up there that I could hear the rattling of the reins. I've been flying around for a long time. Even though I knew that no matter how many more times I aimed, it would already be too late."
    ],
    [
      "{0} ลมเพิ่งเปลี่ยนทิศ ฉันจะใช้ช่วงสงบนี้ไปคุยกับทั้งสองฝั่ง",
      "{0}, the wind has just changed direction. I will use this quiet period to talk to both sides."
    ],
    [
      "{0} จากบนฟ้าเห็นทางแยกตรงรอยร้าว ฉันจำมันได้",
      "{0}, from the sky, I saw a crossroads in the crack. I remember it."
    ],
    [
      "{0} ได้ยินไหม เสียงข้างล่างดังขึ้นมาถึงนี่เลย อยากบินลงไปพร้อมกันไหม?",
      "{0}, did you hear that sound downstairs? Want to fly down together?"
    ]
  ],
  "Chevreuse": [
    [
      "{0} ในรายงานฉันเขียนว่า ทุกคนปฏิบัติหน้าที่ครบถ้วน นี่เป็นครั้งแรกที่ฉันอยากขีดประโยคนั้นทิ้ง อ่านแล้วมันเจ็บเหลือเกิน",
      "{0}, in the report I wrote: Everyone performed their duties completely. This was the first time I wanted to scratch that sentence out. After reading it, it hurts too much."
    ],
    [
      "{0} ให้เวลาสองวันเก็บหลักฐาน ที่เหลือฝึกตามรายงานจริง",
      "{0}, allow two days to collect evidence. The rest practice according to actual reports."
    ],
    [
      "{0} บันทึกตำแหน่งกระทบทีละจุด เราจะไม่เสียกระสุนนัดต่อไปเปล่าๆ",
      "{0}, record each impact point individually. We will not waste another bullet."
    ],
    [
      "{0} ปิดคดีได้ค่ะ ทีนี้คุณคงยอมพักกินของทอดกับฉันสักมื้อ",
      "{0}, case closed. Now you might as well take a break and eat some fried food with me."
    ]
  ],
  "Chiori": [
    [
      "{0} ฉันเอาเข็มมาด้วยตามเคย พอเห็นธงขาดก็เผลอจะเย็บมัน ราวกับว่าปะรอยตรงนี้แล้วเรื่องวันนี้จะย้อนคืนได้",
      "{0}, I brought a needle with me as usual. When he saw the torn flag, he accidentally sewed it up. It's as if by patching a hole here, today's matter can be reversed."
    ],
    [
      "{0} หกสัปดาห์พอแก้แบบ ชุดคราวหน้าต้องให้คุณยกแขนได้สูงกว่านี้",
      "{0}, six weeks is enough to fix the design. Your next outfit needs to allow you to lift your arms higher."
    ],
    [
      "{0} รอยปริยาวขนาดนั้น ต่อให้เป็นฉันก็ซ่อมยาก เก็บภาพไว้สิ",
      "{0}, the crack is that long. Even if it were me, it would be difficult to repair. Take a picture."
    ],
    [
      "{0} อยู่นิ่งๆ ฉันจะเก็บชายเสื้อให้ คุณคงไม่อยากขึ้นรูปฉลองชัยในสภาพนี้",
      "{0}, stay still, I'll pick up the hem of your shirt for you. You don't want to have a victory statue in this condition."
    ]
  ],
  "Chongyun": [
    [
      "{0} ผมท่องคาถาถูกทุกคำเลยนะครับ อาจารย์คงภูมิใจ ถ้าเพียงแต่มันช่วยใครได้สักคน",
      "{0}, I recited every word of the mantra correctly. Teacher would be proud. If only it could help someone."
    ],
    [
      "{0} หกสัปดาห์นี้ผมจะเขียนยันต์เพิ่ม คุณเอาชุดแรกไปนะ",
      "{0}, in these six weeks I will write more yantras. You took the first set."
    ],
    [
      "{0} คราวนี้ยันต์ติดตรงรอยแยกจริงๆ ผมอยากตรวจที่นั่นตอนกลางวันอีกที",
      "{0}, this time, the talisman really stuck in the crevice. I'd like to check there during the day again."
    ],
    [
      "{0} เอ๊ะ จบแล้วหรือครับ? ไอเย็นยังอยู่เลย มาแบ่งไอศกรีมกันไหม",
      "{0}, eh, is it over? The cold cough is still there. Let's share some ice cream, shall we?"
    ]
  ],
  "Citlali": [
    [
      "{0} มานั่งใกล้ ๆ ยายนี่หน่อยเถอะ วันนี้ข้าไม่มีคำทำนายอะไรจะบอกเจ้าแล้ว อยู่คนเดียวแล้วมันใจหายน่ะ",
      "{0}, come sit next to Grandma. Today I have no prophecy to tell you. Being alone is heartbreaking."
    ],
    [
      "{0} หกสัปดาห์ อย่ารอจนวันสุดท้ายแล้วค่อยมาเคาะประตูบ้านข้าล่ะ",
      "{0}, six weeks. Don't wait until the last day to knock on my door."
    ],
    [
      "{0} ข้าอ่านดาวให้ได้อีกหลายคืน เจ้าก็หัดนอนบ้างเถอะ",
      "{0}, I can read the stars for many more nights. You should learn to sleep sometimes."
    ],
    [
      "{0} มากอดอะไรกันต่อหน้าคนเยอะแยะ... เอาเถอะ แค่คราวนี้นะ",
      "{0}, let's hug each other in front of so many people... Come on, just this time."
    ]
  ],
  "Clorinde": [
    [
      "{0} ตอนดวล อย่างน้อยคนที่ยอมลดดาบก็เลือกชะตาตัวเองได้ วันนี้ฉันลดดาบลง ทั้งที่ยังมีคนรอให้ฉันสู้แทนอยู่",
      "{0}, when dueling, at least the person who lowers his sword can choose his own fate. Today I lowered my sword. Even though there are still people waiting for me to fight in my place."
    ],
    [
      "{0} หกสัปดาห์จากนี้ มาฝึกกับฉันตอนรุ่งสาง",
      "{0}, six weeks from now Come practice with me at dawn."
    ],
    [
      "{0} ผนึกเปิดหลังเสียงกระสุนนัดที่สอง ครั้งหน้าฟังสัญญาณฉัน",
      "{0}, the seal opened after the sound of the second bullet. Next time listen to my signal."
    ],
    [
      "{0} การประลองสิ้นสุดแล้ว คราวนี้ฉันขอเป็นฝ่ายยื่นมือให้คุณก่อน",
      "{0}, the battle has ended. This time, I'd like to be the first to offer my hand to you."
    ]
  ],
  "Collei": [
    [
      "{0} ฉันซ้อมบอกอาจารย์ไว้ว่า คราวนี้ฉันดูแลทุกคนได้แล้ว พอได้เจอหน้าอาจารย์จริง ๆ ฉันคงพูดได้แค่ขอโทษ",
      "{0}, I practiced telling the teacher that This time I can take care of everyone. When I actually saw the teacher face to face, I could only say I was sorry."
    ],
    [
      "{0} ฉันเขียนป้ายบอกทางเพิ่มได้นะ! คราวนี้จะตรวจตัวสะกดสองรอบเลย",
      "{0}, I can write more road signs! This time I'll check the spelling twice."
    ],
    [
      "{0} สิบสองสัปดาห์พอให้ทางเลี่ยงในป่าเปิด ฉันอาสานำทางค่ะ",
      "{0}, twelve weeks is enough for a bypass in the forest to open. I volunteer to guide you."
    ],
    [
      "{0} ฉันอยากเขียนจดหมายถึงแอมเบอร์... ต้องใช้กี่หน้าถึงจะเล่าวันนี้หมดนะ",
      "{0}, I want to write a letter to Amber... How many pages will it take to tell this entire story?"
    ]
  ],
  "Columbina": [
    [
      "{0} เธอได้ยินท่อนที่ควรมีคนร้องรับไหม? ฉันเว้นไว้ตรงนั้นทุกครั้ง แต่คราวนี้พอไม่มีเสียงตอบ ฉันก็ร้องต่อไม่ได้",
      "{0}, did you hear the part that should have been sung? I leave it there every time. But this time there was no answer. I couldn't sing anymore."
    ],
    [
      "{0} ฉันจะนับจันทร์ให้ พอถึงคืนสุดท้ายเธอค่อยมาปลุก",
      "{0}, I'll count the moon for you. When the last night came, she slowly came to wake me up."
    ],
    [
      "{0} ตรงที่ฟ้าร้าวมีเสียงอีกเสียงหนึ่ง คราวหน้าเราลองร้องตอบมันดูไหม",
      "{0}, where the sky cracked, there was another sound. Next time, let's try answering it, shall we?"
    ],
    [
      "{0} แปลกจัง พอฟ้าเงียบลง ฉันกลับได้ยินเสียงเธอชัดที่สุด",
      "{0}, it's strange, when the sky became quiet, I could hear your voice most clearly."
    ]
  ],
  "Cyno": [
    [
      "{0} พวกเขาถูกตัดสินต่อหน้าฉันโดยไม่มีโอกาสแก้ต่าง แม้แต่ตัวฉันเองยังต้องยืนฟังจนจบ... นี่หรือคือสิ่งที่ฉันปกป้องได้",
      "{0}, they were judged before me without a chance to defend themselves. Even I had to stand and listen until the end... Is this what I can protect?"
    ],
    [
      "{0} หกสัปดาห์นี้ฉันจะเฝ้าผนึกเอง ฝากสำรับไพ่ไว้กับนาย",
      "{0}, for these six weeks, I will guard the seal myself. Leave a deck of cards with you."
    ],
    [
      "{0} ช่องโหว่เปิดนานพอให้ตามตัวผู้บงการ เราต้องเก็บหลักฐานก่อน",
      "{0}, the loophole was open long enough for the mastermind to be tracked down. We have to collect evidence first."
    ],
    [
      "{0} คืนนี้เล่นไพ่กัน คราวนี้ต่อให้จั่วได้ชะตาไม่ดี นายก็รู้แล้วว่าเปลี่ยนมันได้",
      "{0}, let's play cards tonight. This time, even if you draw, your destiny will be bad. You already know that you can change it."
    ]
  ],
  "Dahlia": [
    [
      "{0} ผมจับเชือกระฆังอยู่ตั้งนาน ถ้าผมตี ทุกคนจะเปิดหน้าต่างรอฟังข่าวดี ผมทำอย่างนั้นกับพวกเขาไม่ลง",
      "{0}, I held the rope of the bell for a long time. If I hit it, everyone would open their windows and wait for the good news. I couldn't do that to them."
    ],
    [
      "{0} สี่สิบสองเช้าที่ระฆังจะดังได้ ผมอยากให้คุณมาฟังเช้าแรก",
      "{0}, forty-two mornings the bell can ring. I want you to come and listen on the first morning."
    ],
    [
      "{0} ได้เวลาเตรียมวิหารรับทุกคนแล้ว คุณช่วยจัดม้านั่งแถวนี้นะ",
      "{0}, it's time to prepare the temple to receive everyone. Could you please arrange the benches around here?"
    ],
    [
      "{0} วันนี้ใครๆ ก็อยากตีระฆัง แต่ผมเก็บรอบแรกไว้ให้คุณ",
      "{0}, today everyone wants to ring the bell. But I saved the first round for you."
    ]
  ],
  "Danica": [
    [
      "{0} ฉันยกโคมจนแขนชา กลัวคนที่มองขึ้นมาจะหาเราไม่เจอ ที่แท้คนที่ยืนรอปาฏิหาริย์อยู่ตรงนี้ก็คือฉันเอง",
      "{0}, I lifted the lantern until my arms went numb. I'm afraid that people who look up won't find me. Actually, the person standing here waiting for a miracle is me."
    ],
    [
      "{0} แสงยังเหลือ เราผลัดกันถือไปจนถึงยามเช้าได้",
      "{0}, there's still light left. We can take turns holding it until morning."
    ],
    [
      "{0} สิบสองสัปดาห์พอให้ฉันแขวนโคมตลอดทาง คราวหน้าคุณจะไม่หลง",
      "{0}, twelve weeks is enough for me to hang lanterns all the way. Next time you won't be lost."
    ],
    [
      "{0} ลองดับโคมดูสิ เรามองเห็นกันได้ด้วยแสงเช้าแล้ว",
      "{0}, try extinguishing the lantern. We can see each other in the morning light."
    ]
  ],
  "Dehya": [
    [
      "{0} ตอนรับงาน ฉันบอกให้พวกเขาเอาหลังมาฝากไว้กับฉัน พอเอาเข้าจริง ฉันยังไม่กล้าหันไปสบตาใครเลย",
      "{0}, when I accepted the job, I told them to leave it with me. When I really put it into practice I still didn't dare turn to look anyone in the eye."
    ],
    [
      "{0} หกสัปดาห์เชียว? หาคนมาผลัดเวรฉันสักคืนคงทันนะ",
      "{0}, six weeks? I might find someone to take my shift for one night."
    ],
    [
      "{0} ฉันรู้แล้วว่าต้องยืนรับตรงไหน คราวหน้าเธอเล็งไปที่รอยแตกเลย",
      "{0}, I know where to stand. Next time, she aimed straight at the crack."
    ],
    [
      "{0} เอ้า ยิ้มหน่อย คนที่ฉันรับงานคุ้มกันเพิ่งพาฟ้าทั้งผืนลงมาเองนะ",
      "{0}, oh, smile. The person I took on as an escort just brought down the whole sky."
    ]
  ],
  "Diluc": [
    [
      "{0} ผมทิ้งไฟหน้าโรงกลั่นไว้ให้คนที่กลับดึกทุกคืน คืนนี้ผมอยากให้มันส่องไปถึงคนที่ยังรอข่าวจากเราเหลือเกิน",
      "{0}, I leave the lights in front of the refinery for the people who come back late every night. Tonight I want it to shine through to those who are still waiting for news from us."
    ],
    [
      "{0} คืนนี้ผมรับเวรเอง คุณใช้เวลาที่เหลือให้คุ้มก็พอ",
      "{0}, tonight, I'm on duty myself. You make the most of the time you have left."
    ],
    [
      "{0} ผมจะเฝ้ารอยนั้นทุกคืน ถ้าแสงเปลี่ยน คุณจะรู้เป็นคนแรก",
      "{0}, I will watch that mark every night. If the light changes You'll be the first to know."
    ],
    [
      "{0} เช้านี้คงเปิดร้านสายหน่อย อยู่ดื่มน้ำองุ่นด้วยกันสักแก้วสิ",
      "{0}, the shop might be open a little late this morning. Let's drink a glass of grape juice together."
    ]
  ],
  "Diona": [
    [
      "{0} พ่อคงนั่งรอให้ฉันกลับไปบ่นใส่เหมือนทุกที ฉันอยากได้ยินพ่อบ่นฉันก่อนสักครั้ง... วันนี้ฉันเหนื่อยแล้ว",
      "{0}, dad probably sat there waiting for me to come back and complain like he always did. I want to hear my father complain to me first... I'm tired today."
    ],
    [
      "{0} หกสัปดาห์นะ สัญญาก่อนว่าพวกผู้ใหญ่จะไม่ฉลองกันตั้งแต่วันนี้!",
      "{0}, six weeks. Promise me that the elders won't celebrate from today!"
    ],
    [
      "{0} คราวหน้าฉันจะผสมอะไรให้ทุกคนตาสว่างทั้งคืน คอยดูสิ",
      "{0}, next time I'll mix something to keep everyone's eyes open all night, so stay tuned."
    ],
    [
      "{0} ห้ามสั่งเหล้านะ! วันนี้ฉันทำเครื่องดื่มแก้วพิเศษให้เธอเอง",
      "{0}, don't order alcohol! Today I made you a special drink."
    ]
  ],
  "Dori": [
    [
      "{0} ฉันนึกว่าของทุกอย่างมีราคา ถ้าจ่ายแพงพอก็ต้องซื้อได้สิ แล้วจะให้ฉันเอาโมราทั้งหมดนี่ไปแลกเมื่อวานคืนจากใคร?",
      "{0}, I thought that everything had a price. If you pay enough, you can buy it. And who would you like me to exchange for all this agate from yesterday?"
    ],
    [
      "{0} สี่สิบสองวันคิดค่าเก็บของเท่าไรดี... ล้อเล่นน่า เที่ยวนี้ฉันออกให้",
      "{0}, for forty two days, how much should I charge for storage... Just kidding, I'll pay for this trip."
    ],
    [
      "{0} ตั้งแปดสิบสี่วัน! ฉันจองค่าระวางของเที่ยวหน้าให้แล้ว",
      "{0}, eighty-four days set! I have reserved the freight for the next trip."
    ],
    [
      "{0} กำไรงามที่สุดในชีวิต! อะไรเหรอ? ก็พรุ่งนี้ยังมีลูกค้าเดินเข้าร้านไง",
      "{0}, the greatest profit in life! What is it? Tomorrow there will still be customers walking into the store."
    ]
  ],
  "Durin": [
    [
      "{0} ผมเผลอพลิกหน้ากระดาษ นึกว่าต้องมีหน้าถัดไปที่ทุกอย่างดีขึ้นสักหน้า คุณก็เห็นใช่ไหม... มันว่างเปล่า",
      "{0}, I accidentally turned the page. I thought there had to be a next page where everything was better. You see, right? It's empty"
    ],
    [
      "{0} เราแทรกเรื่องสั้นได้อีกหกบท ก่อนถึงตอนที่ฟ้ากลับมา",
      "{0}, we can insert six more short stories. Before the sky returns"
    ],
    [
      "{0} รอยแยกดูเหมือนปีกเลยนะ คราวหน้าผมอยากบินลอดมันดู",
      "{0}, the cracks look like wings. Next time I want to fly under it."
    ],
    [
      "{0} ผมนึกตอนจบได้แล้ว แต่คราวนี้ให้คุณเป็นคนเขียนประโยคสุดท้ายดีไหม",
      "{0}, I can think of the ending. But this time let you be the one to write the last sentence."
    ]
  ],
  "Emilie": [
    [
      "{0} กลิ่นควันติดปลายนิ้วฉันอยู่เลยค่ะ ฉันรู้วิธีกลบมันตั้งหลายวิธี แต่คงไม่มีวิธีไหนทำให้ฉันลืมวันนี้ได้",
      "{0}, the smell of smoke is on my fingertips. I know many ways to cover it up. But there's probably no way to make me forget today."
    ],
    [
      "{0} ฉันเก็บกลิ่นตอนผนึกเปิดไว้ได้ หกสัปดาห์พอจะแยกส่วนประกอบ",
      "{0}, I can keep the smell when the seal is opened. Six weeks is enough to separate the components."
    ],
    [
      "{0} แสงดับไปแล้ว แต่กลิ่นตรงรอยร้าวยังอยู่ ฉันตามมันต่อได้",
      "{0}, the light had gone out, but the smell in the crack was still there. I can keep up with it."
    ],
    [
      "{0} กลิ่นแรกหลังการต่อสู้เป็นกลิ่นฝน คุณอยากตั้งชื่อน้ำหอมขวดนี้ไหม",
      "{0}, the first smell after the battle was the smell of rain. Would you like to name this perfume?"
    ]
  ],
  "Escoffier": [
    [
      "{0} ฉันสั่งตั้งโต๊ะไว้เจ็ดที่ กะว่าจะบ่นคนสุดท้ายที่มาสายเสียหน่อย พอถึงเวลา ฉันกลับไม่กล้าเปิดประตูห้องอาหาร",
      "{0}, I ordered seven tables. I thought I'd complain to the last person who was late. When the time came, I didn't dare open the dining room door."
    ],
    [
      "{0} หกสัปดาห์ค่ะ ขอรายชื่อคนกับคลังเสบียง ฉันจะจัดเมนูเอง",
      "{0}, six weeks, asking for a list of people from the supply depot. I'll arrange the menu myself."
    ],
    [
      "{0} เรามีเวลาทดสอบสูตรใหม่ กินให้อิ่มก่อนค่อยกลับไปที่หอ",
      "{0}, we have time to test the new formula. Eat until you're full before returning to the dormitory."
    ],
    [
      "{0} เชิญนั่งค่ะ อาหารจานนี้ควรเสิร์ฟตอนที่ทุกคนวางอาวุธแล้วเท่านั้น",
      "{0}, please take a seat. This dish should only be served when everyone has put down their weapons."
    ]
  ],
  "Eula": [
    [
      "{0} ฉันเคยบอกว่าจะจำทุกความแค้นไว้ พอมาถึงวันนี้ ต่อให้จำได้แม้แต่ชื่อของคนบนฟ้า มันจะเอาอะไรคืนมาให้เราได้ล่ะ?",
      "{0}, I said I would remember every grudge. When I arrived today Even if you remember even the names of the people in the sky What will it bring back to us?"
    ],
    [
      "{0} หกสัปดาห์พอซ้อมก้าวที่เราพลาด คราวหน้าตามจังหวะฉัน",
      "{0}, six weeks is enough to practice the steps we missed. Until next time, follow my rhythm."
    ],
    [
      "{0} ฉันนับได้สามจังหวะก่อนหอร้าว เรากลับไปเริ่มตรงจังหวะที่สองกัน",
      "{0}, I counted three beats before the tower cracked. Let's go back and start on the second beat."
    ],
    [
      "{0} อย่าคิดว่าชัยชนะจะล้างหนี้หมดนะ คุณยังติดฉันอยู่หนึ่งเพลงเต้นรำ",
      "{0}, don't think that victory will clear all your debts. You still have me on one dance song"
    ]
  ],
  "Faruzan": [
    [
      "{0} ในตำราของข้า พอกลไกเปิดจะมีเสียงคลิกเบา ๆ ข้าแนบหูฟังจนเจ้ามาแตะไหล่นี่แหละ ถึงยอมรับว่ามันจบแล้ว",
      "{0}, in my book, when the mechanism opened, there was a soft click sound. I held my ear until you touched my shoulder. To accept that it's over"
    ],
    [
      "{0} หกสัปดาห์พอดี ลงชื่อเรียนกับอาจารย์ฟารุซันเสียสิ",
      "{0}, exactly six weeks. Sign up to study with Professor Farusan."
    ],
    [
      "{0} เห็นรอยแตกหรือยัง คราวนี้ศิษย์ลองอธิบายกลไกให้อาจารย์ฟัง",
      "{0}, have you seen the cracks yet? This time the student tried to explain the mechanism to the teacher."
    ],
    [
      "{0} เก่งมาก คราวนี้จะยอมเรียกฉันว่าอาจารย์ได้หรือยัง?",
      "{0}, very good. Will you admit to calling me Master this time?"
    ]
  ],
  "Fischl": [
    [
      "{0} ข้า... ออซ อย่าเพิ่งแปลนะ ขอให้ฉันพูดเองสักครั้ง ฉันกลัวว่าพอกลับถึงบ้านแล้ว จะไม่มีนิทานเล่มไหนทำให้คืนนี้ดีขึ้นเลย",
      "{0}, I... Oz, don't translate yet. Let me speak for myself just once. I'm afraid that when I get home No story will ever make this night better."
    ],
    [
      "{0} หกสัปดาห์แห่งสนธยา! ฝากแจ้งท่านพ่อว่าข้าจะกลับทันมื้อค่ำด้วย",
      "{0}, six weeks of twilight! Please inform Father that I will be back in time for dinner."
    ],
    [
      "{0} ออซเห็นรอยแยกจากบนฟ้า เจ้าจะร่วมสำรวจอาณาจักรต้องห้ามกับข้าหรือไม่?",
      "{0}, oz saw a crack in the sky. Will you join me in exploring the Forbidden Realm?"
    ],
    [
      "{0} ผู้ร่วมชะตาเอ๋ย จงรับเกียรตินี้! เอ่อ คือ... ดีใจจังที่วันนี้มีเธออยู่ด้วย",
      "{0}, o you who share your destiny, Accept this honor! Well, I'm so glad to have you with me today."
    ]
  ],
  "Flins": [
    [
      "{0} ปกติผมจุดตะเกียงให้คนหลงทางเห็นแล้วอุ่นใจ คืนนี้แสงมันส่องชัดไปหน่อย ผมอยากเก็บสีหน้าทุกคนตอนนั้นไว้ในความมืดมากกว่า",
      "{0}, normally, I light a lantern for lost people to see and feel at ease. Tonight, the light shines a little brighter. I'd rather keep everyone's expressions in the dark at that time."
    ],
    [
      "{0} หกสัปดาห์ข้างหน้า ผมยินดีรับเวรดึกแทนคุณ",
      "{0}, next six weeks I'm happy to accept the late night shift on your behalf."
    ],
    [
      "{0} แสงรั่วจากยอดหอทุกคืน ระหว่างเดินเวรผมจะคอยสังเกตให้",
      "{0}, light leaks from the top of the tower every night. During my shift, I will keep an eye on you."
    ],
    [
      "{0} คืนนี้ตะเกียงดวงนี้พาคนเป็นกลับบ้าน คงไม่มีงานใดน่ายินดีกว่านี้",
      "{0}, tonight, this lamp brings the living home. There is probably no more satisfying job than this."
    ]
  ],
  "Freminet": [
    [
      "{0} ใต้ผิวน้ำ ถ้าเสียงดังเกินทน ผมยังดำลึกลงไปได้ แต่เสียงประตูปิดเมื่อกี้... ผมเอามืออุดหูแล้วก็ยังได้ยิน",
      "{0}, under the surface of the water, if the noise is too loud to bear I can still go deep. But the sound of the door closing just now... I put my hand over my ear and I still heard it."
    ],
    [
      "{0} หกสัปดาห์... ผมซ่อมข้อพับของ Pers ทันแน่",
      "{0}, six weeks... I'll fix Pers' joint in time."
    ],
    [
      "{0} ผมเห็นช่องแคบตรงฐาน ขอผมลองดำลงไปสำรวจให้ก่อนนะ",
      "{0}, I saw a narrow gap at the base. Let me dive in and explore for you first."
    ],
    [
      "{0} ฟังสิ Pers เดินเป็นจังหวะเดิมแล้ว ทีนี้ผมก็กล้าถอดหมวกสักที",
      "{0}, listen, Pers walks to the same rhythm. Now I dare to take off my hat."
    ]
  ],
  "Furina": [
    [
      "{0} ช่วยจับมือฉันไว้ที ฉันเกือบโค้งให้คนดูอีกแล้ว ทั้งที่ตอนจบแบบนี้... ฉันฝืนยิ้มไม่ไหวจริง ๆ",
      "{0}, hold my hand, please. I almost bowed to the audience again. But with an ending like this... I really cannot force another smile."
    ],
    [
      "หกสัปดาห์นี้ฉันขอพักจากบทผู้กล้าก่อนนะ {0} ไปนั่งกินเค้กกันเงียบ ๆ สักมื้อเถอะ แค่วันนี้ก็พอ",
      "I need a break from playing the hero during these six weeks. {0}, come have a quiet slice of cake with me. Just for today."
    ],
    [
      "ฉันไม่ยอมให้สวรรค์เขียนองก์สุดท้ายอีกแล้ว {0} เรามีสิบสองสัปดาห์ มาช่วยฉันเปลี่ยนตอนจบของเรื่องนี้ที",
      "I refuse to let Celestia write the final act again. {0}, we have twelve weeks. Help me change the ending."
    ],
    [
      "อย่าถอยไปหลังม่านสิ {0}! เสียงปรบมือนี้เป็นของเธอเหมือนกัน มาโค้งพร้อมฉันนะ... ครั้งนี้ฉันยิ้มได้จริง ๆ แล้ว",
      "Do not hide behind the curtain, {0}! That applause belongs to you too. Take a bow with me... This time, my smile is real."
    ]
  ],
  "Gaming": [
    [
      "{0} ผมฝากพ่อให้ยืนแถวหน้า จะได้เห็นหัวสิงโตชัด ๆ ตอนเราเดินกลับ ตอนนี้ผมอยากให้พ่ออยู่ไกลจนมองหน้าผมไม่เห็น",
      "{0}, I asked my father to stand in the front row. You will be able to see the lion's head clearly when we walk back. Right now I want my father to be so far away that he can't see my face."
    ],
    [
      "{0} หกสัปดาห์พอจัดขบวนเล็กๆ ให้คนในเมืองยิ้มกันได้เนอะ",
      "{0}, six weeks is enough to organize a small procession. Let the people in the city smile, right?"
    ],
    [
      "{0} คราวหน้าพอกลองดังสามที คุณส่งผมขึ้นไปตรงรอยนั้นเลย",
      "{0}, next time, try loudly three times. You sent me right up there."
    ],
    [
      "{0} ยกหัวสิงโตขึ้นสิ! วันนี้ผมอยากให้คุณเห็นคนยิ้มจากตรงนี้",
      "{0}, lift up the lion's head! Today I want you to see people smile from here."
    ]
  ],
  "Ganyu": [
    [
      "{0} ดิฉันตรวจรายชื่อผู้ขอความช่วยเหลือจนครบแล้วค่ะ ที่ยากคือช่องถัดไป... ดิฉันเขียนคำว่า «เรียบร้อย» ให้พวกเขาไม่ได้เลย",
      "{0}, I have completely checked the names of those requesting help. The difficult thing is the next channel... I couldn't write the word «done» for them."
    ],
    [
      "{0} หกสัปดาห์... ต้องจัดส่งเสบียงกี่เที่ยว ขอเวลาคำนวณสักครู่นะคะ",
      "{0}, six weeks... How many trips of supplies must be delivered? Please give me a moment to calculate."
    ],
    [
      "{0} เส้นทางส่งของจะกลับมาเปิดทัน ดิฉันจะรีบแจ้งท่าเรือคืนนี้",
      "{0}, delivery routes will be back open in time. I will quickly notify the port tonight."
    ],
    [
      "{0} เอ๊ะ วันนี้เลิกงานได้แล้วหรือคะ? ถ้าอย่างนั้น... เดินกลับด้วยกันไหมคะ",
      "{0}, hey, can I get off work today? If so... Shall we walk back together?"
    ]
  ],
  "Gorou": [
    [
      "{0} ทหารยังยืนรอฟังผมอยู่ ทั้งที่ธงของเราลงไปกองกับพื้นแล้ว ผมจะมองตาพวกเขาแล้วบอกว่าเรามาได้เท่านี้ได้ยังไง",
      "{0}, the soldiers were still standing and listening to me. Even though our flag had fallen to the ground I would look them in the eye and tell them how we got this far."
    ],
    [
      "{0} หกสัปดาห์นี้เราต้องฝึกถอนกำลังด้วย ทุกคนจะได้กลับมาครบ",
      "{0}, for these six weeks, we also need to practice demobilization. Everyone will come back."
    ],
    [
      "{0} ถ้าปักธงตรงรอยแยก ทหารทั้งสองแนวจะเห็นพร้อมกัน ฉันอาสาเอง",
      "{0}, if you plant a flag at the crevice Soldiers from both lines will see each other at the same time. I volunteered myself."
    ],
    [
      "{0} แถวตรง! เอ่อ วันนี้อนุญาตให้โยนหมวกได้... เดี๋ยว หมวกผมด้วยเหรอ!",
      "{0}, straight line! Um, hats are allowed today... Wait, my hat too?"
    ]
  ],
  "Hu Tao": [
    [
      "{0} แปลกนะ ปกติคนอื่นต่างหากที่ต้องให้ฉันช่วยหาคำอำลา พอเป็นตาฉันเอง กลับอยากขอเวลาอีกสักเดี๋ยว",
      "{0}, it's strange. It's usually other people who need my help finding goodbyes. It's my turn. I'd like to ask for some more time."
    ],
    [
      "{0} เพิ่มอีกสี่สิบสองเช้า เอ้า อย่าทำหน้าจะจองโลงกันสิ!",
      "{0}, another forty-two mornings. Come on, don't pretend to reserve a coffin!"
    ],
    [
      "{0} แปดสิบสี่วัน มีเวลาคิดกลอนอีกตั้งหลายบท เธอช่วยหาคำคล้องกับฟ้าที",
      "{0}, eighty-four days, time to think of many more poems. Please help me find a word that rhymes with the sky."
    ],
    [
      "{0} วันนี้โถงแห่งการเกิดใหม่เงียบกริบ ดีจัง! ปิดร้านไปหาอะไรกินกัน",
      "{0}, the Hall of Rebirth was quiet today. How nice! Close the shop and go find something to eat."
    ]
  ],
  "Iansan": [
    [
      "{0} ฉันสอนลูกศิษย์เสมอว่าอย่าเพิ่งนับตัวเองแพ้ก่อนเสียงระฆัง พอระฆังดังจริง ๆ ฉันยังอยากให้ใครบอกว่าฉันฟังผิด",
      "{0}, I always teach my students to never count themselves out before the bell. When the bell actually rang, I still wanted someone to tell me I was wrong."
    ],
    [
      "{0} หกสัปดาห์ ฝึกสี่ พักสอง ฉันจัดตารางให้เอง",
      "{0}, six weeks, four training, two resting, I set the schedule myself."
    ],
    [
      "{0} คราวหน้าต้องออกแรงให้ตรงจังหวะที่รอยนั้นเปิด มาจับคู่ซ้อมกัน",
      "{0}, next time, you must apply force at the exact moment the mark opens. Let's practice together."
    ],
    [
      "{0} ยืดกล้ามก่อนฉลอง! คนล้มนอนเพราะเป็นตะคริวหลังชนะฉันเห็นมาเยอะแล้ว",
      "{0}, stretch your muscles before celebrating! I've seen a lot of people fall asleep with cramps after winning."
    ]
  ],
  "Ifa": [
    [
      "{0} เพื่อน นายถอดกระเป๋ายาจากไหล่ฉันให้ที ฉันยังเผลอเปิดมันอยู่เรื่อย ทั้งที่รู้ว่าข้างในไม่มีอะไรช่วยเรื่องนี้ได้",
      "{0}, friend, please take the medicine bag off my shoulder. I still accidentally open it. Even though I know that there is nothing inside that can help with this matter."
    ],
    [
      "{0} หกสัปดาห์ก็พอแวะดูเจ้าพวกตัวเล็กที่บ้านได้ ไปด้วยกันไหม",
      "{0}, six weeks is enough time to stop by and check on the little ones at home. Shall we go together?"
    ],
    [
      "{0} ทางบนฟ้าเปิดกว้างขึ้นเยอะ คราวหน้าฉันบินรับนายตรงนี้ได้เลย",
      "{0}, the sky opened up a lot. Next time, I can fly and pick you up right here."
    ],
    [
      "{0} ได้ยินเสียงร้องนั่นไหมเพื่อน สัตว์ทั้งฝูงรู้ข่าวดีก่อนพวกเราอีก!",
      "{0}, did you hear that cry, friend? The whole herd of animals knew the good news before us!"
    ]
  ],
  "Illuga": [
    [
      "{0} ป้ายตรงแยกนั่น ผมเป็นคนเขียนว่าทางนี้ปลอดภัย พอเห็นคนเดินตามมัน ผมอยากย้อนกลับไปลบคำนั้นเหลือเกิน",
      "{0}, the sign at that intersection. I am the one who wrote that this way is safe. When I saw people following it I really want to go back and delete that word."
    ],
    [
      "{0} ผมจะเก็บแสงดวงนี้ไว้ที่ทางเข้า เผื่อหกสัปดาห์นี้ใครหาทางกลับ",
      "{0}, I will keep this light at the entrance. In case this six weeks, anyone finds a way back."
    ],
    [
      "{0} ขอผมเฝ้ารอยแยกเอง คุณจำทางเดินกลับได้แล้วใช่ไหม",
      "{0}, let me guard the crevice myself. You remember the way back, right?"
    ],
    [
      "{0} เมื่อเช้าผมนับคนที่ออกมา ตอนนี้นับอีกที... ครบจริงๆ ด้วย",
      "{0}, this morning I counted the people who came out. Now let's count again... Really complete."
    ]
  ],
  "Ineffa": [
    [
      "{0} ไอโนขอให้ฉันบันทึกเสียงตอนเราชนะค่ะ ฉันเปิดระบบบันทึกค้างไว้จนถึงตอนนี้... จะให้ฉันเอาอะไรกลับไปให้เธอฟังดีคะ",
      "{0}, aino asked me to record the sound when we won. I left the save system open until now... What should I bring back to you?"
    ],
    [
      "{0} ฉันบันทึกเวลาที่เหลือไว้แล้ว จะให้ตั้งเสียงเตือนสำหรับมื้อเย็นด้วยไหมคะ",
      "{0}, I recorded the remaining time. Would you like me to set an alarm for dinner?"
    ],
    [
      "{0} ตรวจพบความเสียหายต่อเนื่องที่ฐานหอ ฉันกับ Birgitta จะเฝ้าบริเวณนี้ค่ะ",
      "{0}, continuing damage has been detected at the base of the tower. Birgitta and I will guard this area."
    ],
    [
      "{0} งานเสร็จแล้วค่ะ... แต่ถ้าคุณจะจับมือฉันต่ออีกสักครู่ ก็ไม่มีงานถัดไปขัดจังหวะค่ะ",
      "{0}, the work is finished... But if you'll hold my hand for just a moment There is no interruption from the next job."
    ]
  ],
  "Jahoda": [
    [
      "{0} ตอนแจกถุงมือฉันยังพูดอยู่เลยว่า งานแค่นี้เอง ตอนนี้อยากย้อนกลับไปบอกทุกคนว่าฉันกลัวเหมือนกัน จะได้ไม่ต้องทำเก่งใส่กันจนวินาทีสุดท้าย",
      "{0}, while handing out the gloves, I kept saying that this is all the work. Now I want to go back and tell everyone that I was afraid too. So that we don't have to be good at each other until the last second."
    ],
    [
      "{0} หกสัปดาห์พอหาอะไหล่ราคาดี ฝากเฝ้าร้านให้ทีนะ",
      "{0}, six weeks is enough to find parts at a good price. Please watch over the shop for me."
    ],
    [
      "{0} ตรงรอยแตกมีชิ้นส่วนหล่นมาด้วย ฉันขอเก็บไปลองประกอบนะ!",
      "{0}, there were pieces falling out at the crack. I'd like to take it and try to assemble it!"
    ],
    [
      "{0} ไหนๆ งานก็จบแล้ว ขอฉันเป็นคนเลี้ยงข้าวเธอบ้างเถอะ",
      "{0}, since the work is over, please let me be the one to feed you."
    ]
  ],
  "Jean": [
    [
      "{0} ฉันเซ็นคำสั่งให้ทุกคนออกมาเอง จำได้ว่าลงชื่อโดยมือไม่สั่นเลย แต่จดหมายถึงครอบครัวพวกเขา ฉันยังเขียนไม่พ้นบรรทัดแรก",
      "{0}, I signed orders for everyone to come out. I remember signing without shaking my hand. But the letter was to their families. I still haven't gotten past the first line."
    ],
    [
      "{0} พรุ่งนี้ฉันจะเปิดห้องประชุมแต่เช้า แต่คืนนี้ทุกคนต้องได้นอน",
      "{0}, tomorrow I will open the meeting room early. But tonight everyone needs to sleep."
    ],
    [
      "{0} แปดสิบสี่วันพอให้เราฝึกคนมารับช่วง ฉันอยากให้ทุกบ้านมีคนกลับไปหา",
      "{0}, eighty-four days is enough for us to train someone to take over. I want every home to have someone to go back to."
    ],
    [
      "{0} จากหน้าต่างห้องทำงาน ฉันเฝ้ามองเมืองนี้มานาน วันนี้เราออกไปเดินด้วยกันเถอะ",
      "{0}, from the office window I've been eyeing this city for a long time. Today we went out for a walk together."
    ]
  ],
  "Kachina": [
    [
      "{0} ฉันซ้อมลุกทุกครั้งที่ล้ม จริง ๆ นะ แต่คราวนี้พอลุกขึ้นมา หอคอยก็ยังอยู่ตรงนั้น... ฉันอยากนั่งร้องไห้สักพักได้ไหม",
      "{0}, I practice getting up every time I fall. But this time, when I got up The tower is still there... I want to sit and cry for a while."
    ],
    [
      "{0} อีกหกสัปดาห์ฉันต้องขับได้ตรงกว่านี้ คุณมาดูฉันซ้อมนะ",
      "{0}, in another six weeks I need to be able to drive straighter. Come watch me practice."
    ],
    [
      "{0} ฉันเจาะถึงรอยร้าวแล้ว! ครั้งหน้าฉันขอไปเป็นคนแรกได้ไหม?",
      "{0}, I've penetrated the cracks! Next time, can I go first?"
    ],
    [
      "{0} ฉันทำได้ด้วยเหรอ? อย่าเพิ่งไปนะ ฉันอยากจำว่าตอนดีใจที่สุดเรายืนตรงไหน",
      "{0}, can I do it too? Don't go yet. I want to remember where we stood when we were the happiest."
    ]
  ],
  "Kaedehara Kazuha": [
    [
      "{0} ตอนออกเรือ ลมพาเสียงคนริมฝั่งมาถึงข้า แม้แต่คำเบา ๆ ก็ฟังชัด วันนี้ข้าอยากฝากคำขอโทษกลับไป ลมกลับสงัดเหลือเกิน",
      "{0}, as I set out on the boat, the wind carried the voices of the people on the shore to me. Even their soft words were clearly heard. Today I would like to leave an apology. The wind has turned very quiet."
    ],
    [
      "{0} ลมพัดใบไม้ไปได้ไกลในหกสัปดาห์ เราเองก็เช่นกัน",
      "{0}, the wind blows the leaves a long way in six weeks. So do we."
    ],
    [
      "{0} ข้าได้ยินลมลอดหินเป็นครั้งแรก วันหน้าเสียงนี้จะนำเรากลับมา",
      "{0}, I heard the wind blow through the rocks for the first time. Tomorrow this voice will bring us back."
    ],
    [
      "{0} ก่อนกลับ ขอฟังลมตรงนี้อีกหน่อย วันนี้มันไม่มีเสียงหอคอยปะปนแล้ว",
      "{0}, before leaving, let me listen to the wind here a little more. Today there was no sound from the tower."
    ]
  ],
  "Kaeya": [
    [
      "{0} วางใจเถอะ ฉันมีไพ่อีกใบ... อยากได้ยินแบบนั้นใช่ไหม? ฉันเองก็อยากพูดแล้วให้มันเป็นจริงสักครั้ง",
      "{0}, rest assured, I have another card... You want to hear that, right? I also want to say it and make it come true for once."
    ],
    [
      "{0} ได้วันหยุดเพิ่มสี่สิบสองวัน... ถ้า Jean ถาม ฉันไม่เคยพูดประโยคนี้นะ",
      "{0}, get forty-two additional holidays... If Jean asks, I've never said this sentence."
    ],
    [
      "{0} มีรอยแตกให้คนเฝ้ามอง ส่วนฉันจะไปดูประตูอีกฝั่ง คุณมากับฉันไหม",
      "{0}, there are cracks for people to watch. As for me, I'm going to look at the door on the other side. Do you come with me?"
    ],
    [
      "{0} ดื่มด้วยกันสักแก้วสิ เรื่องจริงวันนี้เหลือเชื่อจนฉันไม่ต้องแต่งอะไรเพิ่มแล้ว",
      "{0}, let's have a drink together. Today's true story is so unbelievable that I don't need to add anything to it."
    ]
  ],
  "Kamisato Ayaka": [
    [
      "{0} ก่อนออกมา ฉันพับพัดเก็บไว้ ตั้งใจว่าจะกางรำให้ทุกคนดูเมื่อเรื่องจบ ตอนนี้แค่เสียงซี่พัดขยับก็ดังเกินไปแล้วค่ะ",
      "{0}, before coming out, I folded the fan and put it away. I intend to spread the dance for everyone to see when the story is over. Right now, just the sound of the blades moving is too loud."
    ],
    [
      "{0} อีกหกสัปดาห์ดอกไม้ที่บ้านคงบานพอดี ฉันจะรอคุณมาวางแผนด้วยกันนะคะ",
      "{0}, in another six weeks, the flowers at home will probably bloom. I'll wait for you to plan together."
    ],
    [
      "{0} รอยคมที่สองยังไปไม่ถึงใจกลาง ขอคุณช่วยจับจังหวะให้ฉันอีกครั้ง",
      "{0}, the second sharp mark had not yet reached the center. Please help me find the rhythm again."
    ],
    [
      "{0} วันนี้ขอวางพัดลงสักครู่ได้ไหมคะ ฉันอยากปรบมือให้คุณด้วยสองมือของตัวเอง",
      "{0}, today, can I put the fan down for a moment? I want to applaud you with my own two hands."
    ]
  ],
  "Kamisato Ayato": [
    [
      "{0} ผมเผื่อทางถอยให้ทุกฝ่าย ยกเว้นคนที่ผมขอให้เชื่อมั่นในชัยชนะของเรา พวกเขาจะมองว่าผมผิดคำ ก็สมควรแล้วครับ",
      "{0}, I provide a way to retreat for all sides. Except for the people I asked to believe in our victory. They will think that I have broken my word. It's appropriate."
    ],
    [
      "{0} หกสัปดาห์ที่ได้มา ขอให้เป็นความลับจนกว่าเราจะจัดคนลงตัว",
      "{0}, six weeks since Please keep it a secret until we have the right people in place."
    ],
    [
      "{0} พออีกฝ่ายต้องหันไปอุดรอยนั้น เราก็มีทางเจรจาเพิ่มอีกทาง",
      "{0}, when the other party has to turn around and fill the mark. We have another way to negotiate."
    ],
    [
      "{0} งานเลี้ยงคงเริ่มแล้ว แต่ชาถ้วยนี้ผมตั้งใจเก็บไว้ดื่มกับคุณสองคน",
      "{0}, the party must have begun. But I intend to keep this cup of tea to drink with the two of you."
    ]
  ],
  "Kaveh": [
    [
      "{0} รู้ไหมว่าตอนร่างแบบ ฉันวาดบ้านหลังเล็ก ๆ ไว้ตรงมุมด้วย เจ้าของบ้านยืนดูแล้วบอกว่ารอไหว... ทั้งแบบ ฉันมองตรงนั้นไม่ได้อยู่ที่เดียว",
      "{0}, did you know that when drafting I also drew a small house in the corner. The owner of the house stood and looked and said he could wait... Either way, I'm looking at it, not in one place."
    ],
    [
      "{0} หกสัปดาห์ ฉันจะทำที่พักให้มีทั้งหลังคาและหน้าต่าง คนต้องได้เห็นท้องฟ้าบ้าง",
      "{0}, in six weeks I will make a shelter with a roof and windows. People need to see the sky."
    ],
    [
      "{0} ขอถ่านหน่อย ฉันจะร่างตำแหน่งคานจากรอยแตกก่อนลืม",
      "{0}, give me some coal. I'll sketch out the beam position from the crack before I forget."
    ],
    [
      "{0} นี่เป็นครั้งแรกที่ฉันดีใจขนาดนี้ที่เห็นอาคารพัง! ไปเถอะ เรามีบ้านให้สร้างอีกเยอะ",
      "{0}, this is the first time I've been this happy to see a building collapse! Let's go, we have more houses to build."
    ]
  ],
  "Keqing": [
    [
      "{0} ฉันเคยเชื่อว่าอนาคตของหลีเยว่อยู่ในมือคนหลีเยว่ ตอนแสงนั่นลงมา ฉันได้แต่กำมือแน่น เจ็บใจที่ทำได้เพียงเท่านั้น",
      "{0}, I used to believe that the future of Li Yue was in the hands of the Li Yue people. When that light came down I just clenched my fists. It hurts to be able to do just that."
    ],
    [
      "{0} มีเวลาหกสัปดาห์ แผนวันแรกของฉันเสร็จแล้ว ของคุณล่ะ?",
      "{0}, there are six weeks. My first day's plans are complete, what about yours?"
    ],
    [
      "{0} ฉันต้องการช่างสำรวจสองคนไปวัดรอยแตก คุณพาฉันขึ้นไปได้ไหม",
      "{0}, I need two surveyors to measure the crack. Can you take me up?"
    ],
    [
      "{0} ทีนี้คำสั่งสร้างอนาคตจะมาจากคนที่อยู่บนพื้น ฉันรอเซ็นงานแรกแทบไม่ไหว",
      "{0}, now the command to create the future will come from someone on the ground. I can't wait to sign my first job."
    ]
  ],
  "Kinich": [
    [
      "{0} จะคิดค่าจ้างอะไรได้ ฉันรับปากว่าจะพาเรื่องนี้ไปให้ถึงที่สุด แล้วคนที่ต้องจ่ายราคาจริง ๆ กลับเป็นคนที่ไว้ใจฉัน",
      "{0}, what wages can be charged? I promise to take this matter to the end. And the people who really had to pay the price were the ones who trusted me."
    ],
    [
      "{0} หกสัปดาห์นับรวมในสัญญาเดิม นายไม่ต้องจ่ายเพิ่ม",
      "{0}, six weeks counted in the original contract. You don't have to pay extra."
    ],
    [
      "{0} มุมรอยแตกเอาตะขอเกี่ยวได้ คราวหน้าฉันพานายขึ้นไปเอง",
      "{0}, the corner of the crack can be grabbed with a hook. Next time, I'll take you up there myself."
    ],
    [
      "{0} Ajaw เงียบก่อน ฉันอยากได้ยินคำตอบจากคนจ้าง... งานนี้พอใจไหม?",
      "{0}, ajaw, please be quiet. I want to hear an answer from the employer... Are you satisfied with this work?"
    ]
  ],
  "Kirara": [
    [
      "{0} บนใบส่งของยังมีช่องให้ลงชื่อรับอยู่เลยค่ะ ฉันเดินวนจนรอยอุ้งเท้าทับกันหมด แต่ไม่มีใครเปิดประตูมารับสักที",
      "{0}, on the delivery note, there is still a space for you to sign for receipt. I walked around until my paw prints were all over each other. But no one opened the door to answer me."
    ],
    [
      "{0} หกสัปดาห์เหรอ งั้นพัสดุที่ค้างอยู่ก็ส่งทันทุกชิ้นเลย!",
      "{0}, six weeks? Then all the pending parcels will be delivered in time!"
    ],
    [
      "{0} ฉันมุดรอยแยกนั่นเข้าไปได้ ฝากเซ็นชื่อรับแผนที่ด้วยนะ",
      "{0}, I can fit through that crevice. Please sign your name to receive the map."
    ],
    [
      "{0} ส่งถึงมือผู้รับแล้วค่า! คราวนี้ของในกล่องคือพรุ่งนี้ของทุกคนเลยนะ",
      "{0}, delivered to the recipient! This time, the contents of the box are everyone's tomorrow."
    ]
  ],
  "Klee": [
    [
      "{0} คลีวาดพระอาทิตย์ยิ้มไว้ให้ทุกคนด้วย พี่ว่ามันรู้ไหมว่าข้างล่างเกิดอะไรขึ้น? คลีอยากให้มันเลิกยิ้มแล้ว",
      "{0}, klee drew a smiling sun for everyone. Do you know what happened down there? Klee wanted him to stop smiling."
    ],
    [
      "{0} ตั้งสี่สิบสองวัน! คลีวาดรูปให้พี่ได้อีกตั้งสี่สิบสองรูปเลย",
      "{0}, set forty-two days! Klee drew another forty-two pictures for me."
    ],
    [
      "{0} คราวหน้าเล็งตรงรอยแยกใช่ไหมคะ? คลีจะวงไว้สีแดงใหญ่ๆ เลย!",
      "{0}, next time, aim for the crevice, right? Klee will circle it in big red!"
    ],
    [
      "{0} พี่เห็นไหม! คลีทำได้! คราวนี้เขียนจดหมายบอกแม่สองคนเลยนะ!",
      "{0}, did you see that? Klee can do it! This time, write a letter to two mothers!"
    ]
  ],
  "Kujou Sara": [
    [
      "{0} ข้าเคยคิดว่าผู้บัญชาการต้องเป็นคนสุดท้ายที่ก้มหน้า แต่เมื่อทหารหันมาหาข้า ข้ากลับเป็นคนแรกที่หลบตา",
      "{0}, I used to think that the commander must be the last person to bow his head. But when the soldiers turned to me I was the first to avert my eyes."
    ],
    [
      "{0} หกสัปดาห์นี้ ข้าจะฝึกพลธนูให้ยิงถึงยอดหอ",
      "{0}, in six weeks, I will train the archers to shoot to the top of the tower."
    ],
    [
      "{0} รอยแตกนั้นอยู่ในระยะยิง ข้าขอให้ท่านเป็นผู้ให้สัญญาณ",
      "{0}, the crack is within shooting distance. I ask you to be the signaller."
    ],
    [
      "{0} เก็บธงได้แล้ว เหล่าทหารควรกลับไปให้ครอบครัวเห็นหน้าก่อนตะวันตก",
      "{0}, the flag has been collected. Soldiers should return to their families before the West."
    ]
  ],
  "Kuki Shinobu": [
    [
      "{0} ฉันเตรียมคำแก้ตัวให้แก๊งมานับครั้งไม่ถ้วน พอทุกคนหันมาหาฉันวันนี้ ฉันอยากมีคำไหนก็ได้ที่ทำให้พวกเขาเจ็บน้อยลง",
      "{0}, I've prepared an alibi for the gang countless times. When everyone turned to me today I wish there were any words that would make them hurt less."
    ],
    [
      "{0} หกสัปดาห์พอเคลียร์ทั้งงานซ่อมและค่าปรับ... หวังว่านะ",
      "{0}, six weeks is enough to clear both repair work and fines... I hope"
    ],
    [
      "{0} ถ้าจะขึ้นไปที่รอยแตก ขอให้ฉันเช็กเชือกทุกเส้นก่อน",
      "{0}, if you want to go up to the crack Let me check every string first."
    ],
    [
      "{0} ช่วยถ่ายรูปหมู่ที ก่อนหัวหน้าจะปีนขึ้นไปเขียนชื่อแก๊งบนยอดหอ",
      "{0}, please take a group photo. Before the leader climbed up and wrote the gang's name on the top of the tower."
    ]
  ],
  "Lan Yan": [
    [
      "{0} ห่วงหวายคู่นี้ฉันสานเองกับมือ บีบมันแน่นแค่ไหนมันก็คืนรูป แต่ทำไมพอฉันคลายมือแล้ว ทุกอย่างถึงยังพังอยู่เหมือนเดิมล่ะ",
      "{0}, this pair of rattan rings I made myself. No matter how tight you squeeze it, it will return to its shape. But why when I loosen my grip? Everything is still broken as before."
    ],
    [
      "{0} หกสัปดาห์นี้ฉันจะสานเปลไว้ให้คนเฝ้ายามได้พัก",
      "{0}, for these six weeks I will weave a cradle for the watchman to rest."
    ],
    [
      "{0} ตรงรอยแตกต้องใช้สะพานแขวน ฉันรู้ว่าจะหาหวายเหนียวๆ ได้ที่ไหน",
      "{0}, at the crack you need to use a suspension bridge. I know where to find tough rattan."
    ],
    [
      "{0} ยื่นข้อมือมาสิ ฉันสานกำไลจากหวายเส้นที่พาเรากลับมาให้",
      "{0}, give me your wrist. I made a bracelet from the rattan that brought us back."
    ]
  ],
  "Lauma": [
    [
      "{0} เมื่อกี้กวางทั้งฝูงยืนนิ่งอยู่ข้างข้า พวกมันคงคิดว่าข้ารู้ว่าควรพาไปที่ไหน ข้าได้แต่ยืนฟังลมหายใจของพวกมัน",
      "{0}, just now, a whole herd of deer stood motionless next to me. They probably thought I knew where to take them. I could only stand and listen to their breathing."
    ],
    [
      "{0} คืนนี้ข้าจะนำฝูงกลับเข้าป่า หกสัปดาห์นี้มันควรได้อยู่อย่างสงบ",
      "{0}, tonight, I will lead the group back into the forest. For these six weeks, he should be able to live in peace."
    ],
    [
      "{0} แสงจันทร์ส่องผ่านรอยแตกลงมาถึงพื้น ข้าจะจำทางนี้ไว้",
      "{0}, moonlight shines through cracks and reaches the ground. I will remember this way."
    ],
    [
      "{0} กวางออกจากแนวไม้แล้ว นั่งข้างข้าเถอะ อย่าให้มันตกใจ",
      "{0}, the deer has left the tree line. Please sit next to me. Don't let it be a shock."
    ]
  ],
  "Layla": [
    [
      "{0} ฉันภาวนาว่าตัวเองเผลอหลับหน้าโต๊ะอีกแล้ว พอตื่นคงบ่นเรื่องการบ้านเหมือนเคย... ฉันหยิกแขนจนเจ็บแล้วนะ",
      "{0}, I pray I fall asleep in front of my desk again. When I woke up, I probably complained about my homework like usual... I pinched my arm until it hurt."
    ],
    [
      "{0} หกสัปดาห์เหรอ... พอจะงีบก่อนส่งรายงานสักชั่วโมงไหมนะ",
      "{0}, six weeks? Is it okay to take a nap for an hour before submitting the report?"
    ],
    [
      "{0} เมื่อคืนฉันวาดรอยแยกนี้ไว้ในสมุดด้วยเหรอ? ลายมือฉันเองจริงๆ ด้วย",
      "{0}, did I draw this rift in my notebook last night? It's actually my own handwriting."
    ],
    [
      "{0} ดาวยังอยู่ครบเลย... ทีนี้ถ้าฉันเผลอหลับ ช่วยจดให้ทีนะว่าวันนี้เราชนะจริงๆ",
      "{0}, the stars are still there... Now if I fall asleep Please write down that we actually won today."
    ]
  ],
  "Linnea": [
    [
      "{0} ฉันเคยจดสิ่งที่พบลงสมุดด้วยความตื่นเต้นทุกหน้า วันนี้เป็นครั้งแรกที่อยากให้สิ่งที่เห็นกับตาตัวเองเป็นแค่เรื่องที่จดผิด",
      "{0}, I used to write down every page of my notebook with excitement. Today is the first time that I want what I see with my own eyes to be just a matter of misrepresentation."
    ],
    [
      "{0} หกสัปดาห์นี้ฉันอยากกลับมาสำรวจชั้นหินกับคุณ",
      "{0}, in six weeks I'd like to come back and explore the rocks with you."
    ],
    [
      "{0} รอยแยกเผยชั้นผลึกข้างใน เราเพิ่งได้เห็นสิ่งที่ซ่อนมานานนะ",
      "{0}, fissures reveal crystal layers inside. We just saw something that was hidden for a long time."
    ],
    [
      "{0} ขอเก็บหินชิ้นเล็กๆ กลับไปนะ ครั้งนี้ป้ายตัวอย่างจะมีชื่อคุณด้วย",
      "{0}, please take back the small stone. This time the sample tag will have your name on it."
    ]
  ],
  "Lisa": [
    [
      "{0} คนเก่ง ปกติเวลาเจอหน้าที่อ่านแล้วใจหาย ฉันก็แค่ปิดหนังสือ วันนี้เธอช่วยนั่งข้างฉันหน่อยนะ ฉันปิดเรื่องนี้ไม่ได้จริง ๆ",
      "{0}, smart people. Normally, when I see a page that I read, I feel frightened. I just closed the book. Today, please sit next to me. I really can't shut this up."
    ],
    [
      "{0} ตั้งหกสัปดาห์แน่ะ คราวนี้คืนหนังสือตรงเวลาด้วยนะจ๊ะ",
      "{0}, set it for six weeks. This time, please return the book on time."
    ],
    [
      "{0} ตำราหน้าเดิมคงต้องเพิ่มเชิงอรรถแล้ว เธอช่วยเล่าสิ่งที่เห็นให้พี่ฟังที",
      "{0}, the original textbook probably had to add footnotes. Please tell me what you saw."
    ],
    [
      "{0} หืม จะให้พี่พูดสุนทรพจน์เหรอ? มาดื่มชาในห้องสมุดกันดีกว่าจ้ะ",
      "{0}, hmm, do you want me to give a speech? Let's have tea in the library."
    ]
  ],
  "Lohen": [
    [
      "{0} ฉันขัดปลายหอกจนเห็นเงาตัวเองก่อนออกจากค่าย น่าขันนะ คนในเงาตอนนั้นเชื่อสนิทใจว่าจะพาชัยชนะกลับมา",
      "{0}, I polished the tip of my spear until I could see my reflection before leaving the camp. Ironically, the people in the shadow at that time firmly believed that it would bring back victory."
    ],
    [
      "{0} หกสัปดาห์ ฉันจะรอนายที่ลานซ้อมทุกเช้า",
      "{0}, for six weeks, I will wait for you at the practice field every morning."
    ],
    [
      "{0} ตรงรอยนั้นมีระยะให้ทวนผ่านได้หนึ่งช่วงแขน จำไว้ด้วยกันนะ",
      "{0}, there is an arm's length distance for the repeater to pass through. Let's remember this together."
    ],
    [
      "{0} คราวนี้ฉันยอมวางหอกก่อน นายสมควรได้รับคำคำนับจากฉัน",
      "{0}, this time, I let go of the spear first. You deserve my respect."
    ]
  ],
  "Lumine": [
    [
      "{0} ฉันอยากเจอพี่มาตลอดทาง แต่ถ้าเจอกันตอนนี้ ฉันคงทำได้แค่กอดเขา ฉันไม่รู้จะบอกยังไงว่าโลกที่อยากให้พี่เห็นกำลังจะหายไป",
      "{0}, I've wanted to meet you all along the way. But if we meet now I could only hug him. I don't know how to tell you that the world I wanted you to see is disappearing."
    ],
    [
      "{0} สี่สิบสองวัน... ฉันอยากใช้สักวันไปหาคนที่เราสัญญาว่าจะกลับไปเยี่ยม",
      "{0}, forty-two days... I want to spend a day visiting the people I promised to visit."
    ],
    [
      "{0} เราเข้าใกล้กว่าครั้งก่อนมาก ขอฉันทำเครื่องหมายตรงนี้ก่อน",
      "{0}, we are much closer than last time. Let me mark this first."
    ],
    [
      "{0} ฉันเคยมองดาวเพื่อหาทางไปโลกอื่น แต่คืนนี้ ฉันอยากดูดาวจากที่นี่กับเธอ",
      "{0}, I used to look at the stars to find a way to another world, but tonight I want to look at the stars from here with you."
    ]
  ],
  "Lynette": [
    [
      "{0} ปิดม่านได้แล้วค่ะ... ครั้งนี้ขอให้มันทึบหน่อย ฉันไม่อยากให้พี่เห็นว่าฉันกำลังร้องไห้",
      "{0}, you can close the curtains now... This time let it be a little opaque. I don't want you to see me crying."
    ],
    [
      "{0} สี่สิบสองวัน บันทึกแล้วค่ะ ตอนนี้... ขอเวลาชงชาห้านาที",
      "{0}, forty-two days recorded. Now... give me five minutes to make tea."
    ],
    [
      "{0} กลหลังม่านเริ่มเผยแล้วค่ะ เก็บความลับนี้ไว้ดูด้วยกันรอบหน้านะ",
      "{0}, the magic behind the curtain has begun to be revealed. Let's keep this secret until we see it together next time."
    ],
    [
      "{0} ปิดม่านค่ะ วันนี้ฉันจะชงชาให้คุณเอง น้ำตาลกี่ก้อนคะ?",
      "{0}, close the curtains. Today I will make you tea. How many sugar cubes?"
    ]
  ],
  "Lyney": [
    [
      "{0} ถ้าเป็นบนเวที ผมคงขอให้คุณนับถึงสาม แล้วเอาทุกอย่างที่หายไปกลับมาได้ คุณอย่านับเลยครับ ผมทนเห็นคุณผิดหวังอีกครั้งไม่ได้",
      "{0}, if it was on stage I would like you to count to three. and bring back everything that was lost Please don't count. I can't stand seeing you disappointed again."
    ],
    [
      "{0} กลนี้มีพักครึ่งยาวหกสัปดาห์ ช่วยผมเก็บความลับไว้ก่อนนะ",
      "{0}, this trick has a six week long halftime break. Please help me keep a secret."
    ],
    [
      "{0} คุณเห็นช่องลับเหมือนผมใช่ไหม? คราวหน้าเราสลับกันเป็นคนเปิดม่าน",
      "{0}, you saw the secret compartment like me, right? Next time, we'll take turns opening the curtains."
    ],
    [
      "{0} ปกติผมไม่เฉลยกล แต่รอบนี้เฉลยได้ครับ คนที่ทำให้ปาฏิหาริย์เกิดขึ้นคือคุณ",
      "{0}, normally I don't give an answer. But this time we can answer. You are the person who makes miracles happen."
    ]
  ],
  "Mavuika": [
    [
      "{0} ตอนข้าชูไฟ ทุกคนก็ยกมือขึ้นตาม ข้าจำมือเหล่านั้นได้ชัดกว่าแสงบนฟ้าเสียอีก พวกเขาเชื่อในตัวข้าจริง ๆ",
      "{0}, when I raised the fire, everyone raised their hands as well. I remember those hands more clearly than the lights in the sky. They really believed in me."
    ],
    [
      "{0} หกสัปดาห์ ไปเยี่ยมทุกเผ่ากับฉันเถอะ ทุกคนควรรู้ว่าเราซื้อเวลามาให้ใคร",
      "{0}, six weeks, visit all the tribes with me. Everyone should know who we buy time for."
    ],
    [
      "{0} ฉันเห็นแสงจากอีกฝั่งแล้ว เตรียมตัวไว้ คราวหน้าเราจะขี่ทะลุไปด้วยกัน",
      "{0}, I saw the light from the other side. Prepare yourself, next time we will ride through together."
    ],
    [
      "{0} เอามือมา! วันนี้ไม่มีใครต้องยืนดูจากข้างสนาม เราฉลองด้วยกันทั้งสนามนี่แหละ",
      "{0}, bring your hand! Today, no one has to stand and watch from the sidelines. We celebrate together on the field."
    ]
  ],
  "Mika": [
    [
      "{0} ผมทำเครื่องหมายจุดนัดพบไว้บนแผนที่ด้วยดินสอ กะว่าจะลบตอนภารกิจสำเร็จ ตอนนี้ผมถือยางลบอยู่ แต่ทำใจลบไม่ได้ครับ",
      "{0}, I marked the meeting point on the map with a pencil. I think I'll delete it when the mission is complete. Now I'm holding the eraser. But I can't bring myself to delete it."
    ],
    [
      "{0} ผมขอใช้สัปดาห์แรกทำแผนที่ใหม่ คราวหน้าจะได้ไม่มีใครหลง",
      "{0}, I would like to use the first week to make a new map. Next time, no one will be lost."
    ],
    [
      "{0} จากตรงนี้วัดมุมรอยแตกได้พอดี ช่วยถือไม้บรรทัดให้ผมหน่อยครับ",
      "{0}, from here you can measure the exact angle of the crack. Please hold the ruler for me."
    ],
    [
      "{0} ผมจะทำสำเนาแผนที่ให้คุณครับ ตรงที่เรายืนวันนี้ผมทำเครื่องหมายดาวไว้",
      "{0}, I will make a copy of the map for you. Where we stand today I marked a star."
    ]
  ],
  "Mitya": [
    [
      "{0} ผมพับแผนสำรองไว้จนกระดาษนิ่มไปหมด พอคลี่ดู มันจบตรงประตูบานเดียวกับที่เพิ่งปิดต่อหน้าเรานี่เอง",
      "{0}, I folded the backup plan until the paper was completely soft. When I unfolded it, it ended up in the same door that had just closed in front of us."
    ],
    [
      "{0} ขอสมุดคืนหน่อย ฉันจะเลื่อนนัดอีกหกสัปดาห์ให้ครบทุกคน",
      "{0}, please give me the book back. I will postpone the appointment for another six weeks to complete everyone."
    ],
    [
      "{0} สิบสองสัปดาห์พอจัดเวรใหม่ ฉันกันวันว่างให้คุณสักวันดีไหม",
      "{0}, twelve weeks is enough to arrange a new shift. Shall I set aside some free time for you?"
    ],
    [
      "{0} ในกำหนดการไม่มีช่วงร้องไห้ด้วยความดีใจแฮะ... ขอเติมลงไปนะ",
      "{0}, in the schedule, there was no moment of crying with joy... Please add it."
    ]
  ],
  "Mona": [
    [
      "{0} ในเงาน้ำฉันเห็นตอนจบนี้มาตลอด ฉันเกลียดที่ตัวเองทำนายแม่นที่สุดในวันที่อยากทายผิดเหลือเกิน",
      "{0}, in the shadow of the water, I saw this ending all along. I hate that I made the most accurate predictions on the day I so wanted to be wrong."
    ],
    [
      "{0} หกสัปดาห์ตรงตามวงดาวเลย คุณช่วยออกค่ากระดาษจดก่อนได้ไหม?",
      "{0}, six weeks according to the stars. Can you pay for the notepad first?"
    ],
    [
      "{0} เส้นดาวแยกเป็นสองสายแล้ว มาดูในน้ำสิ ครั้งนี้คุณมองเห็นด้วยแน่",
      "{0}, the star line has split into two. Look in the water. You can definitely see it this time."
    ],
    [
      "{0} คำทำนายเดิมต้องขีดทิ้งทั้งหน้า... ทำไมฉันถึงดีใจขนาดนี้นะ!",
      "{0}, the original prophecy must be crossed out the entire page... Why am I so happy?!"
    ]
  ],
  "Mualani": [
    [
      "{0} ฉันเก่งเรื่องพาคนกลับฝั่งนะ ทุกทีพอเท้าแตะทรายทุกคนจะหัวเราะ วันนี้เรายืนอยู่บนฝั่งกันแล้ว ทำไมยังรู้สึกเหมือนจมน้ำอยู่เลย",
      "{0}, I'm good at bringing people back to shore. Every time my feet touched the sand, everyone laughed. Today we are standing on the shore. Why do I still feel like I'm drowning?"
    ],
    [
      "{0} หกสัปดาห์พอซ่อมกระดานแล้วออกทริปด้วยกันอีกเที่ยวแน่ะ",
      "{0}, six weeks is enough time to fix the board and take another trip together."
    ],
    [
      "{0} คราวหน้ารอคลื่นถึงยอดแล้วกระโดดตรงรอยแยก ฉันซ้อมกับเธอเอง!",
      "{0}, next time, wait for the wave to reach the top and jump at the crevice. I practiced with her myself!"
    ],
    [
      "{0} ป้ายต่อไป ชายหาด! คนพาเราฝ่าพายุวันนี้ขึ้นกระดานฉันฟรีตลอดทาง",
      "{0}, next stop, the beach! The guy who took us through the storm today got on my board for free the whole way."
    ]
  ],
  "Nahida": [
    [
      "{0} เมื่อคืนมีเด็กฝันว่าโลกวันพรุ่งนี้หน้าตาเหมือนสวนเล็ก ๆ เขาขอให้ฉันมาเยี่ยม ฉันรับปากไปแล้วด้วย... ฉันจะไปหาเขาที่ไหนล่ะ",
      "{0}, last night a child dreamed that the world of tomorrow looked like a small garden. He asked me to come visit him. I've already promised... Where do I go to find him?"
    ],
    [
      "{0} หกสัปดาห์ดูสั้นสำหรับต้นไม้ แต่ยาวมากสำหรับเมล็ดที่กำลังงอก เธออยากปลูกอะไรดี?",
      "{0}, six weeks seems a short time for a plant. But it is very long for germinating seeds. What would you like to plant?"
    ],
    [
      "{0} เมื่อคืนเด็กคนหนึ่งฝันเห็นแสงลอดรอยร้าว ฉันว่าเขาเริ่มนึกภาพวันพรุ่งนี้ออกแล้ว",
      "{0}, last night a child dreamed of light coming through a crack. I think he's starting to imagine tomorrow."
    ],
    [
      "{0} ฉันอยากถามเธอข้อหนึ่ง พอเราเลือกตอนจบเองได้แล้ว เธออยากเล่าเรื่องอะไรต่อ?",
      "{0}, I want to ask you one thing. Once we can choose our own ending What story does she want to tell next?"
    ]
  ],
  "Navia": [
    [
      "{0} ฉันซ้อมชนแก้วกับเก้าอี้ว่างของพ่อไว้ด้วยนะ ตลกใช่ไหม? ตอนนี้ฉันอยากให้พ่อนั่งอยู่ตรงนั้นจริง ๆ จนแทบทนไม่ไหว",
      "{0}, I practiced clinking glasses with Dad's empty chair. Funny, right? I really wanted Dad to sit there right now, so much so that I couldn't stand it."
    ],
    [
      "{0} หกสัปดาห์พอซ่อมบ้านได้หลายหลัง ว่างไปช่วยฉันทาสีไหม?",
      "{0}, six weeks is enough to repair many houses. Are you free to help me paint?"
    ],
    [
      "{0} ถ้าเล็งปากร่มตรงนั้นอีกนิด... โอเค คู่หู รอบหน้าฉันขอเธอช่วยดูวิถีกระสุน!",
      "{0}, if you focus on the mouth of the umbrella a little more... Okay partner, next time I'm asking you to look at the bullet's trajectory!"
    ],
    [
      "{0} คู่หู มายืนใต้ร่มฉันทีสิ พ่อคงอยากเห็นว่าใครยืนอยู่ข้างฉันในวันนี้",
      "{0}, buddy, come and stand under my umbrella. I want to see who's standing next to me today."
    ]
  ],
  "Nefer": [
    [
      "{0} ฉันประเมินราคาข่าวผิดมาแล้วหลายครั้ง แต่เพิ่งเคยจ่ายด้วยความไว้ใจของคนตั้งมากมาย แล้วไม่ได้อะไรกลับมาเลย",
      "{0}, I have misjudged news many times. But I have recently paid with the trust of many people. And didn't get anything back at all."
    ],
    [
      "{0} สี่สิบสองวัน แลกกับข้อมูลหนึ่งชิ้น ถือว่าได้ราคาดี",
      "{0}, forty-two days in exchange for one piece of information. Considered to be a good price"
    ],
    [
      "{0} คนเฝ้าหอคงวุ่นกับรอยแตก ฝากดูหน้าประตูที ฉันจะสืบอีกทาง",
      "{0}, the tower keepers are probably busy with the cracks. Please take a look at the front door. I'll investigate another way."
    ],
    [
      "{0} ข่าวนี้ฉันยอมบอกเธอฟรีๆ ต่อไปไม่มีใครมาเขียนตอนจบให้เราแล้ว",
      "{0}, I'm willing to tell you this news for free. No one is going to write the ending for us anymore."
    ]
  ],
  "Nicole": [
    [
      "{0} ฉันเคยกระซิบให้คนหลงทางเห็นทางแยก คราวนี้เธอได้ยินฉันชัดทุกคำ แต่สุดทางทั้งสองสายกลับเป็นที่เดียวกัน ฉันเสียใจจริง ๆ",
      "{0}, I once whispered to a lost person at a crossroads. This time she heard every word of me clearly. But at the end of both roads it was the same place. I'm really sorry"
    ],
    [
      "{0} ฉันเว้นหน้ากระดาษไว้หกสัปดาห์ เธออยากเติมอะไรลงไปบ้าง?",
      "{0}, I left the page blank for six weeks. What would you like to add to it?"
    ],
    [
      "{0} รอยแยกนั้นเหมือนช่องระหว่างคำ มองดีๆ ยังมีอะไรให้เราอ่านอีกมาก",
      "{0}, the cracks are like the gaps between words. If you look closely, there's more to read."
    ],
    [
      "{0} วันนี้ฉันขอเป็นคนฟัง เธอเล่าให้ฉันฟังได้ไหมว่าการเลือกชะตาเองรู้สึกอย่างไร",
      "{0}, today I want to be a listener. Can you tell me what it feels like to choose your own destiny?"
    ]
  ],
  "Nilou": [
    [
      "{0} ฉันจำได้ว่าใครยืนตรงไหนตอนดนตรีเริ่ม พอเพลงหยุด ฉันยังเว้นที่ข้างตัวไว้ตามเดิม... ฉันไม่อยากเต้นฉากจบนี้เลย",
      "{0}, I remember who stood where when the music started. When the music stopped, I still left the space next to me as before... I don't want to dance this ending scene."
    ],
    [
      "{0} อีกหกสัปดาห์ฉันจะเต้นที่โรงละคร คุณพาคนที่เหนื่อยๆ มานั่งแถวหน้าได้ไหม?",
      "{0}, in six weeks I will be dancing at the theater. You bring tired people Can you come sit in the front row?"
    ],
    [
      "{0} แสงส่องผ่านรอยนั้นเหมือนไฟบนเวทีเลย คราวหน้าฉันจะก้าวไปตรงนั้นกับคุณ",
      "{0}, the light shines through the crack like stage lights. Next time, I'll take that step with you."
    ],
    [
      "{0} ขอมือหน่อยค่ะ ไม่ต้องรู้ท่าก็ได้ เพลงนี้ฉันอยากเต้นกับคุณ",
      "{0}, please give me your hand. You don't have to know the pose. This song I want to dance with you"
    ]
  ],
  "Ningguang": [
    [
      "{0} ต่อให้ยอมสละวังหยกอีกครั้ง ข้าก็ซื้อเช้าวันเดิมคืนให้หลีเยว่ไม่ได้ นี่เป็นครั้งแรกที่ข้าอยากให้ใครสักคนบอกว่าข้าคิดราคาผิด",
      "{0}, even if you give up the Jade Palace again I couldn't buy the same morning back to Li Yue. This is the first time I've ever wanted someone to tell me I miscalculated."
    ],
    [
      "{0} สี่สิบสองวัน หากใช้ถูกที่ ย่อมมีค่ากว่าทองทั้งคลัง",
      "{0}, forty-two days, if used in the right place, is worth more than the entire gold treasury."
    ],
    [
      "{0} เมื่อหอมีรอยร้าว ตาชั่งเจรจาก็เปลี่ยน ข้าอยากฟังราคาที่เจ้าจะเรียก",
      "{0}, when the tower has cracks The negotiating scales have changed. I'd like to hear the price you'll charge."
    ],
    [
      "{0} ของรางวัลหรือ? มองลงไปที่ท่าเรือสิ วันนี้ทั้งเมืองยังค้าขายตามความสมัครใจของตน",
      "{0}, a prize? Look down at the pier. Today, the entire city still trades on its own accord."
    ]
  ],
  "Noelle": [
    [
      "{0} ทุกครั้งที่มีใครขอความช่วยเหลือ ฉันจะตอบว่าไว้ใจฉันได้เลย วันนี้ฉันเห็นเขาจะอ้าปากถาม... แล้วเขาก็เปลี่ยนใจ ฉันเสียใจตรงนั้นที่สุดค่ะ",
      "{0}, every time someone asks for help. I'll answer that you can trust me. Today I saw him open his mouth and ask... Then he changed his mind. I'm most sorry about that."
    ],
    [
      "{0} หกสัปดาห์ค่ะ ฉันจดรายการซ่อมไว้แล้ว คุณอยากให้เริ่มจากบ้านไหน?",
      "{0}, six weeks. I've listed the repairs. Which house would you like to start with?"
    ],
    [
      "{0} ถึงคราวฉันช่วยค้ำแนวนี้บ้างแล้วค่ะ ขอให้คุณเชื่อใจฉันนะคะ",
      "{0}, it's my turn to help support this line. Please trust me."
    ],
    [
      "{0} น้ำชาอุ่นกำลังดีค่ะ วันนี้ให้ฉันดูแลคุณในฐานะเพื่อนสักครั้งได้ไหมคะ",
      "{0}, warm tea is just right. Today, would you please let me treat you as a friend for once?"
    ]
  ],
  "Odette": [
    [
      "{0} ฉันเฝ้ามองรอยร้าวบนน้ำแข็งจนสุดสายตา หวังว่ามันจะหยุดตรงไหนสักแห่ง จะได้บอกคุณว่าตรงนั้นยังยืนได้",
      "{0}, I watched cracks in the ice as far as my eyes could see. Hopefully it stops somewhere. I'll tell you that you can still stand there."
    ],
    [
      "{0} ฉันจะทำเครื่องหมายไว้ที่หอ เผื่อหิมะกลบรอยก่อนครบหกสัปดาห์",
      "{0}, I'll mark it in the dormitory. In case the snow covers the tracks before the six weeks are up."
    ],
    [
      "{0} รอยแยกนี้กว้างพอให้ส่งแสงผ่าน ลองยืนฝั่งโน้น เดี๋ยวฉันส่งสัญญาณให้",
      "{0}, this crack is wide enough to allow light to pass through. Try standing on the other side. I'll send you a signal."
    ],
    [
      "{0} แตะมือฉันดูสิ เย็นเฉียบเลย ฉันเพิ่งกล้าปล่อยคมน้ำแข็งเมื่อครู่นี้เอง",
      "{0}, touch my hand. It's so cold. I dared to let go of the ice just now."
    ]
  ],
  "Ororon": [
    [
      "{0} ก่อนออกมา ผมรดน้ำแปลงผักเผื่อไว้แค่วันเดียว คิดว่าพรุ่งนี้คงได้กลับไปเล่าให้ยายฟังว่าเราทำได้ ผมไม่น่าทำให้ยายรอเลย",
      "{0}, before coming out, I watered the vegetable patch just in case for one day. I think tomorrow I'll go back and tell Grandma that we can do it. I shouldn't have made Grandma wait."
    ],
    [
      "{0} หกสัปดาห์ ผักแปลงเล็กน่าจะทันเก็บ คุณอยากแบ่งไปปลูกบ้างไหม?",
      "{0}, in six weeks, the small plot of vegetables should be ready to harvest. Do you want to share and plant some?"
    ],
    [
      "{0} ผมจะเฝ้าหอตอนกลางคืน แสงที่รั่วออกมาเล็กๆ เห็นง่ายกว่าเยอะ",
      "{0}, I will watch over the dormitory at night. A small leak of light It's much easier to see."
    ],
    [
      "{0} กลับไปดูแปลงผักด้วยกันไหมครับ วันนี้ผมเพิ่งแน่ใจว่าจะได้เห็นมันโต",
      "{0}, would you like to go back and look at the vegetable plot together? Today I was just sure to see it grow."
    ]
  ],
  "Prune": [
    [
      "{0} ฉันดึงหมวกลงเพราะอยากซ่อนหน้า คราวนี้ต่อให้หลบสายตาทุกคนพ้น ฉันก็ยังต้องอยู่กับสิ่งที่ตัวเองทำพลาดอยู่ดี",
      "{0}, I pulled down my hat because I wanted to hide my face. This time, avoid everyone's sight. I still have to live with my mistakes."
    ],
    [
      "{0} ขีดไว้บนปีกหมวกแล้ว หกสัปดาห์พอดี ฉันไม่ลืมแน่",
      "{0}, has been drawn on the brim of the hat. It's been exactly six weeks, and I won't forget it."
    ],
    [
      "{0} รอยแยกมีแสงลอดออกมา คราวหน้าฉันอยากลองมองย้อนเข้าไป",
      "{0}, the cracks let light through. Next time I want to look back."
    ],
    [
      "{0} ช่วยถือหมวกที ฉันอยากเงยหน้ามองฟ้าผืนนี้ให้เต็มตา",
      "{0}, please hold the hat. I want to look up at this sky."
    ]
  ],
  "Qiqi": [
    [
      "{0} ในสมุดเขียนว่า ถ้าชนะ ให้ยิ้มให้คุณ... ฉีฉีจำไม่ได้ว่าเขียนตอนไหน แต่อ่านแล้วเจ็บตรงนี้",
      "{0}, in the notebook it is written that if you win, smile at you... Qi Qi couldn't remember when she wrote it. But after reading this it hurts."
    ],
    [
      "{0} อีกสี่สิบสองวัน เจอกันที่นี่ ฉีฉีเขียนไว้แล้ว",
      "{0}, see you here in forty-two days, Qi Qi has already written."
    ],
    [
      "{0} มีรอยแตกบนฟ้า ฉีฉีวาดไว้ให้คุณ เผื่อฉีฉีลืม",
      "{0}, there are cracks in the sky. Qi Qi drew it for you in case Qi Qi forgot."
    ],
    [
      "{0} สมุดเขียนว่าเราชนะ แต่ความดีใจนี่... ฉีฉีจำเองได้",
      "{0}, the book says we won. But this joy... Qiqi remembered it himself."
    ]
  ],
  "Raiden Shogun": [
    [
      "{0} ข้าเคยเอ่ยคำว่านิรันดร์โดยไม่ลังเล บัดนี้แม้เพียงวันพรุ่งนี้ของผู้คนที่อยู่ใต้ฟ้าเดียวกับข้า ข้าก็ยังรักษาไว้ให้ไม่ได้",
      "{0}, I once said the word eternity without hesitation. Now, even if it's just the tomorrow of the people under the same sky as me, I still can't keep it."
    ],
    [
      "{0} หกสัปดาห์อาจเป็นชั่วพริบตาสำหรับข้า แต่เจ้าทำให้ข้าเห็นคุณค่าของมัน",
      "{0}, six weeks might be the blink of an eye to me. But you made me appreciate it."
    ],
    [
      "{0} รอยฟันยังไม่ลบเลือน เมื่อถึงคราวอีกครั้ง ข้าจะลงดาบด้วยเจตนาที่แน่วแน่กว่าเดิม",
      "{0}, the teeth marks haven't faded yet. When it's time again I will strike the sword with more determination than before."
    ],
    [
      "{0} ข้าเคยเฝ้ารักษาสิ่งที่หยุดนิ่ง วันนี้ข้าอยากเห็นว่าวันพรุ่งนี้ของพวกเจ้าจะเปลี่ยนไปอย่างไร",
      "{0}, I used to guard things that were still. Today I want to see how your tomorrow will change."
    ]
  ],
  "Razor": [
    [
      "{0} เราหอนเรียกฝูง รอตั้งนาน... ไม่มีเสียงตอบ เราอยากกลับบ้าน แต่กลัวที่นั่นจะเงียบเหมือนกัน",
      "{0}, we howled to the herd, waited a long time... there was no answer. we want to go home But I'm afraid it will be quiet there too."
    ],
    [
      "{0} อีกหลายคืน ฝูงมีเวลากลับถ้ำ ข้าไปบอกเอง",
      "{0}, many nights later, the group has time to return to the cave. I'll tell you."
    ],
    [
      "{0} ลมลอดหิน ข้าจำกลิ่นได้ คราวหน้าข้าพาเจ้าไป",
      "{0}, the wind passes through the rocks. I remember the smell. Next time I'll take you."
    ],
    [
      "{0} ไม่มีเสียงคำรามแล้ว เจ้า หิวไหม? กลับไปกินกับฝูง",
      "{0}, there's no more roaring. Are you hungry? Go back and eat with the herd."
    ]
  ],
  "Rosaria": [
    [
      "{0} ปกติฉันไม่ค่อยเข้าวิหารหรอก คืนนี้ลองเข้าไปแล้ว นั่งอยู่ตั้งนาน... นึกไม่ออกจริง ๆ ว่าจะขออะไรที่ยังขอทัน",
      "{0}, I don't usually go to temples. Tried going in tonight. Sitting for a long time... I really can't think of anything to ask for that I haven't asked for yet."
    ],
    [
      "{0} หกสัปดาห์เพิ่มเหรอ งั้นคืนนี้ยกเวรสายให้ฉันได้ไหม",
      "{0}, six more weeks? So, can you take my late shift for me tonight?"
    ],
    [
      "{0} ทางเข้าที่สองเปิดแล้ว เก็บเรื่องนี้ไว้ระหว่างเราจนกว่าฉันจะตรวจเสร็จ",
      "{0}, the second entrance is now open. Keep this between us until I'm done investigating."
    ],
    [
      "{0} ถ้าใครถาม ฉันออกไปเดินเล่น ส่วนเธอ... ไปหาอะไรดื่มกันไหม",
      "{0}, if anyone asks, I'm going for a walk, and you... let's go get something to drink."
    ]
  ],
  "Sandrone": [
    [
      "{0} ฉันเปิดฝาครอบ ตรวจทุกข้อต่อ ไม่มีชิ้นไหนเสียเลย ถ้ามันพังเสียสักชิ้น ฉันคงยังมีอะไรให้ซ่อม มีอะไรให้โทษ",
      "{0}, I opened the cover. Check every joint There aren't any broken pieces. If even one piece is broken I probably still have something to fix, something to blame."
    ],
    [
      "{0} สี่สิบสองวันเพียงพอสำหรับการประกอบใหม่ หากไม่มีใครมาขัดจังหวะ",
      "{0}, forty-two days is enough for reassembly. If no one comes to interrupt"
    ],
    [
      "{0} รอยแยกเผยกลไกภายในแล้ว เอาแบบร่างมา ฉันอยากเห็นเฟืองชิ้นถัดไป",
      "{0}, the cracks reveal the internal mechanism. Bring the sketch. I want to see the next gear."
    ],
    [
      "{0} เครื่องหยุดแล้ว ในที่สุดฉันก็ได้ฟังความเงียบที่ตัวเองออกแบบไว้",
      "{0}, the machine has stopped. I finally listened to the silence I had designed."
    ]
  ],
  "Sangonomiya Kokomi": [
    [
      "{0} ฉันเขียนแผนรับมือไว้แม้กระทั่งกรณีที่เราแพ้ แต่ทหารคนหนึ่งถามว่า แล้วที่เราพยายามมาล่ะ? ฉันปิดสมุดลง ตอบเขาไม่ได้ค่ะ",
      "{0}, I have written a plan for dealing with it even if we lose. But one soldier asked: So what have we tried? I closed the notebook and couldn't answer him."
    ],
    [
      "{0} พลังงานวันนี้เหลือน้อย แต่ข่าวว่ามีอีกหกสัปดาห์ทำให้ฉันอยากเขียนแผนต่อค่ะ",
      "{0}, today's energy is low. But the news that there are another six weeks makes me want to continue writing the plan."
    ],
    [
      "{0} สิบสองสัปดาห์พอทดสอบแผนสองทาง คุณช่วยเล่นเป็นฝ่ายตรงข้ามให้ฉันได้ไหม?",
      "{0}, twelve weeks is enough to test the two-way plan. Can you play as my opponent?"
    ],
    [
      "{0} ฉันทำเครื่องหมายหน้าสุดท้ายไว้แล้วค่ะ... วันนี้ขอปิดสมุดแล้วไปเดินริมทะเลกับคุณนะ",
      "{0}, I marked the last page... Today, I'd like to close the book and go walk along the seaside with you."
    ]
  ],
  "Sayu": [
    [
      "{0} ขอซ่อนในฮู้ดอีกหน่อยนะ ปกติก็แค่ไม่อยากให้ใครปลุก แต่วันนี้ฉันไม่อยากให้ใครเห็นหน้าตอนตื่นเลย",
      "{0}, please hide in the hood a little more. Normally I just don't want to wake anyone up. But today I don't want anyone to see my face when I wake up."
    ],
    [
      "{0} หกสัปดาห์ นอนพอทุกวันน่าจะสูงขึ้นนิดหนึ่งนะ... อย่าบอกใครล่ะ",
      "{0}, six weeks, getting enough sleep every day should be a little taller... Don't tell anyone."
    ],
    [
      "{0} ช่องตรงนั้นฉันลอดได้ ขอแค่อย่าส่งคนตัวสูงตามมาก็พอ",
      "{0}, that hole I can fit through. Just don't send tall people after you."
    ],
    [
      "{0} งานเสร็จจริงๆ นะ? งั้นถ้าใครตามหา ช่วยบอกว่าฉันกำลังฝึกท่านอนอยู่",
      "{0}, is the work really finished? So if anyone is looking for Please tell me I'm practicing my lying position."
    ]
  ],
  "Sethos": [
    [
      "{0} ฉันอ่านทางจากรอยเท้าเก่งนะ วันนี้ทุกคู่เดินย้อนกลับทางเดิมหมด ฉันได้แต่มองรอยขาไปตอนที่พวกเรายังเชื่อว่าจะชนะ",
      "{0}, I'm good at reading tracks from footprints. Today, every couple walked back the same way. I could only look at the footprints when we still believed we would win."
    ],
    [
      "{0} หกสัปดาห์พอพาคนนอกเส้นทางกลับโอเอซิส ไปกับฉันไหม?",
      "{0}, six weeks is enough to take someone off the trail back to the oasis. Will you come with me?"
    ],
    [
      "{0} ลมทรายจะกลบรอยที่พื้น แต่ดาวยังชี้ตำแหน่งรอยแตกได้ ฉันสอนนายดูนะ",
      "{0}, the sand wind will cover the marks on the ground. But the stars can still point out the location of the cracks. I'm teaching you."
    ],
    [
      "{0} กลางคืนในทะเลทรายเห็นดาวชัดที่สุด คืนนี้อยากให้เธอเป็นคนเลือกทางเอง",
      "{0}, at night in the desert you can see the stars most clearly. Tonight, I want you to choose your own path."
    ]
  ],
  "Shenhe": [
    [
      "{0} ข้าเคยคิดว่าเชือกแดงทำให้ใจสงบ พอได้ยินว่าเราแพ้ ข้าก็จับมันไว้จนแน่น เหตุใดข้างในจึงยังเจ็บถึงเพียงนี้",
      "{0}, I used to think that the red string gave me peace of mind. When I heard that we lost I held it tight. Why does it still hurt so much inside?"
    ],
    [
      "{0} ข้าจะรอหกสัปดาห์ หากเจ้าเรียกก่อน ข้าก็จะมา",
      "{0}, I will wait six weeks. If you call first, I will come."
    ],
    [
      "{0} อาจารย์คงเห็นรอยแตกจากบนเขาแล้ว กลับไปถามท่านพร้อมข้าเถอะ",
      "{0}, teacher must have seen the cracks from the mountain. Go back and ask him with me."
    ],
    [
      "{0} ปกติข้าเดินกลับเขาคนเดียว แต่วันนี้... เจ้าพาข้ากลับเข้าเมืองได้ไหม",
      "{0}, normally, I walk back to the mountain alone, but today... can you take me back to the city?"
    ]
  ],
  "Shikanoin Heizou": [
    [
      "{0} คดีที่มีหลักฐานครบ ปกติฉันอยากปิดให้เร็วที่สุด แต่นี่ฉันไล่ดูซ้ำเป็นรอบที่เท่าไรแล้วนะ... แค่อยากให้มีหลักฐานสักชิ้นที่บอกว่าเรายังไม่แพ้",
      "{0}, cases with complete evidence Normally I want to close it as quickly as possible. But this is how many times I've rewatched it... I just want to have some evidence that says we haven't lost yet."
    ],
    [
      "{0} มีเวลาอีกหกสัปดาห์ให้สืบสวน พยานคนแรกที่ฉันอยากคุยด้วยก็คือนาย",
      "{0}, there are six more weeks to investigate. The first witness I want to talk to is you."
    ],
    [
      "{0} รอยแตกชี้ย้อนกลับไปถึงต้นเหตุแล้ว นักสืบอย่างฉันจะปล่อยมันผ่านได้ยังไง",
      "{0}, the cracks point back to the cause. How could a detective like me let this go?"
    ],
    [
      "{0} ไขคดีแล้ว! แต่ความรู้สึกตอนชนะนี่น่าสนใจกว่า ช่วยเล่าจากมุมของนายให้ฟังที",
      "{0}, case solved! But the feeling when winning is more interesting. Please tell me from your perspective."
    ]
  ],
  "Sigewinne": [
    [
      "{0} คนไข้ชอบถามฉันว่า อีกนานไหมกว่าจะหายเจ็บ วันนี้ฉันเพิ่งเข้าใจว่าการนั่งรอคำตอบ ทั้งที่อีกฝ่ายได้แต่จับมือเรา มันทรมานแค่ไหน",
      "{0}, patients like to ask me, How long will it be before the pain goes away? Today I just understood that sitting and waiting for an answer Even though the other party could only hold our hands How painful is it?"
    ],
    [
      "{0} หกสัปดาห์พอให้ทุกคนพักเต็มที่ คุณเองก็อยู่ในรายชื่อของฉันนะคะ",
      "{0}, six weeks is enough for everyone to rest fully. You too are on my list."
    ],
    [
      "{0} ต่อให้มีเวลาเพิ่ม ฉันก็จะมาตรวจดูว่าคุณกินข้าวตรงเวลาค่ะ",
      "{0}, even if there is more time I'm also coming to make sure you eat on time."
    ],
    [
      "{0} ยิ้มแบบนี้ดูดีจังค่ะ ขอวาดเก็บไว้บนฉลากขวดพิเศษของคุณได้ไหมคะ",
      "{0}, a smile like this looks really good. Can I draw it on the label of your special bottle?"
    ]
  ],
  "Sucrose": [
    [
      "{0} ฉันจดทุกอย่างไว้ เผื่อว่าคราวหน้าจะทำได้ดีขึ้น พอเขียนถึงคำว่าคราวหน้า... ฉันก็จับดินสอต่อไม่ไหวแล้วค่ะ",
      "{0}, I write everything down. So that next time we can do better. When writing about the word next time... I couldn't hold the pencil anymore."
    ],
    [
      "{0} หกสัปดาห์พอเพาะตัวอย่างรุ่นที่สอง! คุณมาดูมันโตกับฉันได้ไหม?",
      "{0}, six weeks is enough to grow a second generation specimen! Can you come watch it grow with me?"
    ],
    [
      "{0} รอยแตกใหญ่ขึ้นหลังปฏิกิริยาครั้งที่สาม ฉันจดไว้ทันค่ะ ดูนี่สิ",
      "{0}, the cracks became bigger after the third reaction. I wrote it down in time. Look at this."
    ],
    [
      "{0} มันสำเร็จจริงๆ... คราวนี้ฉันอยากเขียนชื่อคุณไว้หน้าแรก ก่อนชื่อการทดลองค่ะ",
      "{0}, it was really successful... This time I want to write your name on the first page. Before the name of the experiment"
    ]
  ],
  "Tartaglia": [
    [
      "{0} ถ้าแพ้ดวล ฉันคงขอแก้มือจนกว่าจะชนะ แต่นี่ฉันสัญญากับน้องไว้ว่าจะเอาเรื่องดี ๆ กลับไปเล่า สหาย ฉันจะกลับไปเล่าอะไรให้เขาฟังล่ะ?",
      "{0}, if I lose a duel, I'll take revenge until I win. But here, I promised you that I would bring good things back to you. Friend, what should I go back and tell them?"
    ],
    [
      "{0} หกสัปดาห์ให้ซ้อมแก้มือ เจ้ามาเป็นคู่ซ้อมให้ข้าพรุ่งนี้เลยไหม?",
      "{0}, six weeks to practice revenge. Will you be my sparring partner tomorrow?"
    ],
    [
      "{0} แตกขนาดนั้นยังตั้งอยู่ได้ สมกับเป็นคู่ต่อสู้ที่ข้ารอเจอจริงๆ!",
      "{0}, it's so broken it can still stand. Truly the opponent I was waiting to meet!"
    ],
    [
      "{0} ฝีมือเจ้ายอดเยี่ยมสหาย! กลับไปข้าจะเล่าให้ Teucer ฟังว่าเจ้าซัดฟ้าแตกได้ยังไง",
      "{0}, your skills are outstanding, friend! Go back and I'll tell Teucer how you shattered the sky."
    ]
  ],
  "Thoma": [
    [
      "{0} ผมหุงข้าวเผื่อไว้ กะให้ทุกคนเปิดประตูเข้ามาแล้วได้กลิ่นบ้าน พอถึงบ้านจริง ๆ ผมกลับยืนอยู่นอกประตูตั้งนาน ไม่กล้าเป็นคนแรกที่เข้าไป",
      "{0}, I cooked rice just in case. Make everyone open the door and smell the house smell. When I actually got home, I stood outside the door for a long time. I didn't dare to be the first to enter."
    ],
    [
      "{0} หกสัปดาห์นะ งั้นมื้อเย็นวันนี้ผมขอทำเยอะหน่อย จะได้แบ่งถึงบ้านข้างๆ",
      "{0}, six weeks, so I want to make a lot for dinner today. will be shared with the house next door"
    ],
    [
      "{0} ผมจะดูแลบ้านให้จนถึงวันกลับไปที่หอ คุณจดจ่อกับสิ่งตรงหน้าเถอะ",
      "{0}, I will take care of the house until the day I return to the dorm. You focus on what's in front of you."
    ],
    [
      "{0} ทุกคนกลับมาครบโต๊ะจริงๆ นั่งสิครับ ผมกันที่ข้างเตาให้คุณแล้ว",
      "{0}, everyone has actually returned to the table. Come sit, I'll set you up next to the stove."
    ]
  ],
  "Tighnari": [
    [
      "{0} หูฉันไวพอจะได้ยินเสียงคนรอข่าวตั้งแต่ยังไม่พ้นแนวไม้ นี่เป็นครั้งแรกที่ฉันอิจฉาคนที่ยังไม่ได้ยินอะไรเลย",
      "{0}, my ears are sensitive enough to hear people waiting for news even before they're beyond the tree line. This is the first time I'm envious of people who haven't heard anything yet."
    ],
    [
      "{0} หกสัปดาห์พอให้ป่าฟื้นตัว ถ้าไม่มีใครไปเหยียบแปลงทดลองฉันอีกนะ",
      "{0}, six weeks is enough for the forest to recover. If no one steps on my test plot again."
    ],
    [
      "{0} แสงรั่วลงมาตรงแนวต้นกล้า ฉันอยากรู้ว่ามันตอบสนองยังไง นายมาช่วยจดที",
      "{0}, light leaks down the seedling line. I'm curious to see how it responds. Please come help me write it down."
    ],
    [
      "{0} วันนี้อนุญาตให้ออกจากเส้นทางได้ครั้งหนึ่ง ฉันรู้จักจุดชมวิวที่นายควรได้เห็น",
      "{0}, today it is allowed to leave the route once. I know a viewpoint you should see."
    ]
  ],
  "Valeriy": [
    [
      "{0} ผมขานรับคำสั่งสุดท้ายตามระเบียบ เสียงไม่สั่นสักนิด แต่พอต้องบอกเพื่อนว่าเราหยุดหอคอยไม่ได้ ผมพูดไม่ออกครับ",
      "{0}, I responded according to the final order. The voice didn't shake a bit. But when we had to tell our friends that we couldn't stop the tower, I can't speak."
    ],
    [
      "{0} มีเวลาอีกหกสัปดาห์ ผมขอส่งจดหมายกลับหน่วยก่อน",
      "{0}, there are six more weeks. I'd like to send a letter back to the unit first."
    ],
    [
      "{0} ผมจะบอกจุดร้าวให้หน่วยหอกทราบ นัดพบกันใต้แนวกำแพงนะ",
      "{0}, I will inform the spear unit of the crack. Let's meet under the wall."
    ],
    [
      "{0} วันนี้ผมอยากกลับไปเรียกชื่อทุกคนทีละคน จะได้ยินคำว่ามาครบด้วยหูตัวเอง",
      "{0}, today I want to go back and call everyone's names one by one. You will hear the word \"Come complete\" with your own ears."
    ]
  ],
  "Varesa": [
    [
      "{0} ตอนเช้าฉันแบ่งผลไม้ไว้เจ็ดกอง ยังเถียงกันอยู่เลยว่าใครจะได้ลูกใหญ่สุด ถ้าได้กลับไปนั่งตรงนั้นอีกนาที ฉันยอมยกให้หมดเลย",
      "{0}, this morning I divided the fruit into seven piles. They are still arguing about who will have the biggest child. If I could go back and sit there for another minute. I give it all away."
    ],
    [
      "{0} อีกหกสัปดาห์เหรอ! กินให้อิ่มแล้วกลับไปฝึกท่าทุ่มกันนะ",
      "{0}, six more weeks?! Eat until you're full and then go back and practice your throwing pose."
    ],
    [
      "{0} รอยแยกกว้างกว่าไหล่ฉันแล้ว คราวหน้าฉันพุ่งลอดได้แน่!",
      "{0}, the crack is now wider than my shoulder. Next time, I'll definitely be able to dive through it!"
    ],
    [
      "{0} ยกเธอขึ้นบ่าได้ไหม? จะได้เห็นชัดๆ ว่าทุกคนกำลังโบกมือให้ใคร!",
      "{0}, can you lift her onto your shoulder? will see clearly Who is everyone waving at!"
    ]
  ],
  "Varka": [
    [
      "{0} ข้าเคยพาคนกลับจากศึกที่แพ้มาแล้ว แต่พอเจ้าหนูท้ายแถวถามว่าคนที่บ้านเราจะเป็นยังไง ข้ากลับอยากให้มีใครสักคนมาตอบแทน",
      "{0}, I've brought people back from lost battles before. But when the young man at the end of the line asked what the people at our house would be like I wish there was someone to repay me."
    ],
    [
      "{0} หกสัปดาห์เหรอ สองวันแรกให้ทุกคนกลับบ้าน นั่นเป็นคำสั่ง รวมถึงนายด้วย",
      "{0}, six weeks? The first two days, everyone goes home. That's an order. Including you."
    ],
    [
      "{0} เห็นช่องนั่นไหม? คราวหน้าฉันบุกให้ นายพาคนตามมา คราวนี้เราไม่ต้องเดาทางแล้ว",
      "{0}, see that box? Next time I attack, you'll bring your men along. This time, we won't have to guess."
    ],
    [
      "{0} นับหัวให้ฉันอีกที... เจ็ด ครบ! ดี งั้นคนสุดท้ายที่ถึงโรงเหล้าล้างแก้วนะ ฉันออกเงินเอง",
      "{0}, count the heads for me again... Seven complete! Good, then the last person to arrive at the brewery should wash his glass. I paid for myself"
    ]
  ],
  "Venti": [
    [
      "ลมยังพัดอยู่นะ {0} แต่ฉันหาทำนองที่จะร้องให้ Mondstadt ฟังไม่ได้เลย อยู่ฟังความเงียบเป็นเพื่อนกวีสักครู่ได้ไหม",
      "The wind is still blowing, {0}, but I cannot find a melody for Mondstadt. Would you keep a bard company in the silence for a while?"
    ],
    [
      "สี่สิบสองวันพอแต่งเพลงยาวได้สักบท ชื่อของ {0} ต้องอยู่ในนั้นด้วยแน่ ๆ อยากให้คนฟังจำท่อนไหนของเธอที่สุดล่ะ?",
      "Forty-two days is enough for a long ballad. Your name belongs in it, {0}. Which moment of yours should the listeners remember most?"
    ],
    [
      "ได้ยินไหม {0}? ลมลอดรอยร้าวนั่นเป็นโน้ตที่ฉันไม่เคยเล่น คราวหน้าช่วยยืนฟังตรงนี้ด้วยกันนะ เผื่อเราจะได้ยินทั้งเพลง",
      "Hear that, {0}? The wind in that fracture makes a note I have never played. Stand here with me next time. Perhaps we will hear the whole song."
    ],
    [
      "ท่อนนี้ให้ {0} ร้องนำเลย! วันนี้กวีขอเป็นคนดีดพิณให้บ้าง ส่วนค่าจ้าง... แอปเปิลสักลูกกับเรื่องเล่าระหว่างทางกลับก็พอ",
      "Take the lead on this verse, {0}! Today the bard will play accompaniment. My fee? An apple and a story on the way home will do."
    ]
  ],
  "Vesna": [
    [
      "{0} ฉันเกือบปล่อยมุกว่าที่ล้มเมื่อกี้เป็นส่วนหนึ่งของการแสดง พอเห็นเธอยังรอให้ฉันลุกขึ้นมาแก้ทุกอย่าง ฉันก็ละอายจนพูดไม่ออก",
      "{0}, I almost joked that the fall was part of the performance. When I saw her, she was still waiting for me to get up and fix everything. I was so ashamed that I couldn't speak."
    ],
    [
      "{0} หกสัปดาห์พอซ้อมมุกให้เธอหัวเราะสักครั้ง พนันไหม?",
      "{0}, six weeks is enough to practice some jokes to make you laugh. Bet?"
    ],
    [
      "{0} รูบนฟ้านั่นเอาไว้ระบายอากาศมั้ง... เฮ้ ยิ้มแล้วนี่ ไปต่อกันเถอะ",
      "{0}, that hole in the sky is for ventilation... Hey, smile now, let's move on."
    ],
    [
      "{0} ฉันเตรียมมุกเด็ดไว้พูดตอนชนะ แต่พอเห็นหน้าเธอแล้ว... ลืมหมดเลยแฮะ",
      "{0}, I prepared a great joke to say when I won. But when I saw her face... I forgot all about it."
    ]
  ],
  "Vodyanitsa": [
    [
      "{0} ฉันก้มลงมองน้ำ อยากเห็นท้องฟ้าอย่างที่จำได้สักครั้ง แต่แม้แต่เงาสะท้อนก็ยังเป็นฟ้าของผู้ชนะ",
      "{0}, I looked down at the water. I want to see the sky as I remember it once. But even the reflection is the sky of the winner."
    ],
    [
      "{0} อีกหกสัปดาห์ น้ำค้างจะลงตรงนี้กี่เช้า ฉันอยากนับกับเธอ",
      "{0}, in another six weeks, how many mornings will the dew fall here? I want to count with you"
    ],
    [
      "{0} ม่านน้ำสะท้อนรอยแยกทั้งเส้น มองตรงนี้สิ เห็นปลายของมันแล้ว",
      "{0}, the water curtain reflects the entire rift. Look here, you can see the end of it."
    ],
    [
      "{0} เช้านี้น้ำใสจนมองเห็นท้องฟ้าทั้งผืน เธอเข้ามาในเงาสะท้อนด้วยกันไหม",
      "{0}, this morning the water was so clear you could see the entire sky. Do you come into the reflection together?"
    ]
  ],
  "Wanderer": [
    [
      "{0} ฉันควรจะหัวเราะใส่ฟ้านั่นได้สิ เคยทำได้ง่ายจะตาย... อย่ามองฉันแบบนั้น วันนี้ฉันทำไม่ได้",
      "{0}, I should be able to laugh at that sky. It used to be easy to do and you'd die... Don't look at me like that. Today I can't"
    ],
    [
      "{0} ตั้งสี่สิบสองวันให้คิดแผนใหม่ คราวหน้าอย่าเอาแผนเดิมมาให้ฉันอ่านล่ะ",
      "{0}, set forty-two days to think of a new plan. Next time, don't give me your old plan to read."
    ],
    [
      "{0} ร้าวขนาดนี้แล้วยังทำเป็นสูงส่งอยู่ได้ คราวหน้าฉันจะขึ้นไปเคาะประตูเอง",
      "{0}, how can you still pretend to be so high? Next time, I'll go up and knock on the door myself."
    ],
    [
      "{0} หึ ทำหน้าเหมือนไม่เคยเห็นฟ้าเลยนะ... จะนั่งมองต่อก็เชิญ ฉันยังไม่รีบ",
      "{0}, huh, acting like you've never seen the sky before... You're welcome to sit and watch. I'm not in a hurry yet."
    ]
  ],
  "Wriothesley": [
    [
      "{0} ประตูในป้อมหนักแค่ไหนก็ยังมีกุญแจ แต่พอคนของผมหันมารอให้ผมเปิดทางในวันนี้ ผมได้แต่ยืนกำกุญแจไว้จนเจ็บมือ",
      "{0}, no matter how heavy the door in the fort is, there will still be a key. But when my people turned around and waited for me to open the way today I just stood there holding the keys until my hand hurt."
    ],
    [
      "{0} สี่สิบสองวันพอดี คงพอซ่อมประตูกับจัดหาชาดีๆ ได้สักกล่อง",
      "{0}, exactly forty two days. It might be enough to fix the door and provide a box of good tea."
    ],
    [
      "{0} ทางขึ้นหอตอนนี้เหมือนประตูคุกที่ปิดไม่สนิท ผมพอจะรู้ว่าควรผลักตรงไหน",
      "{0}, the entrance to the dormitory is now like a prison door that cannot be closed completely. I know where to push."
    ],
    [
      "{0} สักถ้วยไหม? วันนี้ไม่มีแฟ้มให้เซ็น ผมตรวจดูถึงสองรอบแล้ว",
      "{0}, would you like a cup? There are no files to sign today. I've checked it twice."
    ]
  ],
  "Xiangling": [
    [
      "{0} Guoba เก็บทัพพีเถอะ ปกติพอทุกคนเศร้า ฉันก็คิดเมนูออกทันที วันนี้ฉันตักชิมตั้งหลายครั้ง ยังไม่รู้รสเลย",
      "{0}, guoba, pick up the ladle. Normally enough everyone is sad. I immediately thought of a menu. Today I tasted it many times. I don't know the taste yet."
    ],
    [
      "{0} หกสัปดาห์นี้แวะมาชิมซุปด้วยนะ ฉันจะทำให้กินแล้วมีแรงจนถึงวันบุกเลย",
      "{0}, in six weeks, please stop by and taste the soup. I will make you eat and have energy until the day of the invasion."
    ],
    [
      "{0} อุณหภูมิตรงรอยแตกพอดีมาก... โอ๊ะ ใช่ เรามาสู้กัน ไว้ค่อยทดลองทำอาหารนะ!",
      "{0}, the temperature at the crack is just right... Oh yes, let's fight, then try cooking!"
    ],
    [
      "{0} ยกหม้อมาที! ฉันอยากให้คนที่ยืนตรงนี้ได้ชิมคำแรกพร้อมกัน",
      "{0}, bring the pot! I want everyone standing here to taste their first bite together."
    ]
  ],
  "Xianyun": [
    [
      "{0} ครั้งยังเล็ก ศิษย์ข้ามักหันมามองก่อนจะปล่อยว่าว เพราะรู้ว่าหากสายขาดข้ารับไว้ทัน วันนี้พวกเขาก็หันมาเช่นนั้น... ข้าอยากให้ตัวข้าในวันนั้นอยู่ที่นี่เหลือเกิน",
      "{0}, when I was little, my disciple used to turn around and look before flying a kite. Because I know that if the line breaks, I will catch it in time. Today they turned like that... I so wish that I was here that day."
    ],
    [
      "{0} หกสัปดาห์รึ ข้าสร้างเครื่องส่งเสบียงให้อีกสักเครื่องก็ยังทัน",
      "{0}, six weeks? I can't even build another supply machine for you."
    ],
    [
      "{0} คราวหน้าข้าจะปรับปีกกลให้ลอดรอยแยกได้พอดี เจ้าช่วยวัดความกว้างที",
      "{0}, next time I will adjust the mechanical wings to fit through the cracks. Can you help me measure the width?"
    ],
    [
      "{0} ฝีมือพวกเจ้าเช่นนี้ ข้ามีเรื่องไปเล่าให้ศิษย์ฟังอีกนาน นั่งลงสิ เจ้าก็ต้องฟังด้วย",
      "{0}, your skills like this I have a long story to tell my disciples. Sit down, and you must listen too."
    ]
  ],
  "Xiao": [
    [
      "{0} ข้าเคยบอกว่าเมื่อมีภัยให้เรียกชื่อข้า พวกเขาเรียก ข้าก็ได้ยินทุกเสียง... แต่การที่ข้าไปถึงกลับไม่เปลี่ยนอะไรเลย",
      "{0}, I used to say that when there's danger, call my name. They called, and I heard every sound... But my arrival didn't change anything."
    ],
    [
      "{0} สี่สิบสองคืนนี้ หากมีภัย จงเรียกชื่อข้า",
      "{0}, forty-two tonight, if there is danger, call my name."
    ],
    [
      "{0} ข้าจะเฝ้ารอยแยกนั้นเอง เจ้าไปพักเสีย",
      "{0}, I will watch over that crevice. You go and rest."
    ],
    [
      "{0} กลับกันเถิด วันนี้... ข้าอยากเดินไปกับเจ้า",
      "{0}, let's go back today... I want to walk with you."
    ]
  ],
  "Xilonen": [
    [
      "{0} ฉันรู้ว่าเสียงโลหะร้าวเป็นยังไง แต่เสียงที่ดังที่สุดตอนนั้นกลับเป็นตอนที่ทุกคนหยุดเชียร์ ฉันยังได้ยินความเงียบนั่นอยู่เลย",
      "{0}, I know what the sound of metal cracking sounds like. But the loudest sound was when everyone stopped cheering. I can still hear that silence."
    ],
    [
      "{0} หกสัปดาห์เนอะ งั้นขอนอนวันนี้ก่อน พรุ่งนี้ค่อยเอาแบบมาคุย",
      "{0}, six weeks, right? So let me sleep today. Tomorrow we'll talk about the model."
    ],
    [
      "{0} ฉันจะทำใบมีดให้เกาะขอบรอยแตกได้ นายลองแล้วบอกด้วยว่าพอดีเท้าไหม",
      "{0}, I'll make the blade so it can stick to the edge of the crack. Please try it on and tell me if it fits your feet."
    ],
    [
      "{0} ฟังเสียงเบสสิ พื้นยังสั่นอยู่เลย! รอบนี้นายเลือกเพลงฉลองเองนะ",
      "{0}, listen to the bass. The ground is still shaking! This time, you choose the celebration song yourself."
    ]
  ],
  "Xingqiu": [
    [
      "{0} ข้าเคยอ่านถึงจอมยุทธ์ที่มาช้าเพียงก้าวเดียว แล้วแอบคิดว่าหากเป็นข้าคงทำได้ดีกว่า วันนี้ข้าเพิ่งรู้ว่าก้าวนั้นหนักเพียงใด",
      "{0}, I once read about a martial artist who was only one step behind. And I secretly thought that if it were me, I would be able to do better. Today I realized how hard that step was."
    ],
    [
      "{0} หกสัปดาห์เพียงพอสำหรับเขียนบทใหม่ คราวนี้ข้าอยากให้คนอ่านคาดตอนจบไม่ถึง",
      "{0}, six weeks is enough to write a new chapter. This time, I want readers to not expect the ending."
    ],
    [
      "{0} รอยแยกประหนึ่งช่องว่างในกระบวนดาบ ข้าเห็นหนทางต่อบทแล้ว",
      "{0}, a crack like a gap in the sword formation. I see the way forward."
    ],
    [
      "{0} หากเล่าเรื่องนี้ในนิยาย คงมีคนว่าข้าแต่งเกินจริง ดีที่มีคุณเป็นพยาน",
      "{0}, if this story were told in a novel Some people might say that I dress too much. Good to have you as a witness."
    ]
  ],
  "Xinyan": [
    [
      "{0} ฉันดีดคอร์ดเดิมไปสามครั้ง หวังให้ใครสักคนร้องตาม พอเงยหน้าขึ้นถึงได้รู้ว่า ตัวฉันเองก็ไม่มีแรงร้องเหมือนกัน",
      "{0}, I strummed the same chord three times. I hope someone sings along. When he raised his head, he realized that I myself don't have the strength to sing either."
    ],
    [
      "{0} หกสัปดาห์ ฉันจะตระเวนเล่นให้ครบทุกค่าย ใครมีเพลงขอก็บอกมา",
      "{0}, in six weeks, I will play in every camp. If anyone has a song request, please tell me."
    ],
    [
      "{0} เสียงสะท้อนตรงรอยแตกโคตรเจ๋งเลย! คราวหน้าเราตีคอร์ดนั้นพร้อมกันนะ",
      "{0}, the sound that resonates in the cracks is really cool! Next time, let's hit that chord together."
    ],
    [
      "{0} มาเลย มือกลองกิตติมศักดิ์! คืนนี้ทั้งเมืองเป็นเวทีของเรา!",
      "{0}, come on, Honorary Drummer! Tonight the whole city is our stage!"
    ]
  ],
  "Yae Miko": [
    [
      "{0} หากเป็นต้นฉบับ ข้าคงขีดตอนจบนี้ทิ้งไปแล้ว เจ้ามีหมึกอยู่ไหม... ช่างเถิด ข้าเพียงอยากให้เรื่องนี้แก้ได้ง่ายดายถึงเพียงนั้น",
      "{0}, if it's original I might have left this ending out. Do you have any ink? Never mind, I just wish this matter could be resolved that easily."
    ],
    [
      "{0} หกสัปดาห์หรือ? บรรณาธิการบางคนให้เวลาน้อยกว่าสวรรค์เสียอีก",
      "{0}, six weeks? Some editors give less than heavenly time."
    ],
    [
      "{0} รอยแตกงามขนาดนั้น เห็นทีต้องจ้างคนวาดหน้าปกใหม่ เจ้าว่างเป็นแบบไหม?",
      "{0}, such a beautiful crack. Looks like I need to hire someone to draw a new cover. Are you free like this?"
    ],
    [
      "{0} เรื่องจบได้ดีนี่นา ค่าลิขสิทธิ์ของเจ้า... รับเป็นเต้าหู้ทอดสักจานก่อนได้ไหมจ๊ะ",
      "{0}, the story ended well. Your royalties... Can I have a plate of fried tofu first?"
    ]
  ],
  "Yanfei": [
    [
      "{0} ฉันไล่อ่านทุกบรรทัด หวังว่าจะมีช่องให้ยื่นคัดค้าน พอเธอถามว่าพวกเรายังมีสิทธิ์อะไรเหลือบ้าง ฉันเสียใจที่ต้องปิดตำราลง",
      "{0}, I read every line. Hopefully there will be a channel for raising objections. When she asked what rights we still had left. I'm sorry to have to close the book."
    ],
    [
      "{0} หกสัปดาห์นับจากวันนี้นะ ฉันเขียนกำหนดไว้ชัดแล้ว ใครก็อ้างลืมไม่ได้",
      "{0}, six weeks from today. I've written it clearly. No one can claim to have forgotten."
    ],
    [
      "{0} มีช่องโหว่ให้เห็นขนาดนี้ สัญญาฉบับฟ้าคงบังคับใช้ไม่ได้ง่ายๆ แล้วล่ะ",
      "{0}, there is a gap that can be seen like this. The blue version of the contract probably isn't easily enforceable."
    ],
    [
      "{0} ปิดสำนวน! วันนี้ขอคิดค่าปรึกษาเป็นมื้อเย็นกับเธอก็แล้วกัน",
      "{0}, close the expression! Today, I would like to charge you a consultation fee for dinner."
    ]
  ],
  "Yaoyao": [
    [
      "{0} พี่คะ หนูเอาหัวไชเท้ามาเผื่อทุกคนด้วย ปกติแค่แบ่งกันก็รู้สึกดีขึ้นแล้ว ทำไมวันนี้หนูแบ่งจนหมดตะกร้าแล้วยังอยากร้องไห้อยู่เลย",
      "{0}, oppa, I brought some radishes for everyone. Usually just sharing makes us feel better. Why did I share all the baskets today and still want to cry?"
    ],
    [
      "{0} หกสัปดาห์พอปลูกหัวไชเท้าได้อีกแปลง หนูเก็บลูกโตสุดไว้ให้พี่นะ",
      "{0}, six weeks is enough to plant another plot of radishes. I'm keeping the oldest one for you."
    ],
    [
      "{0} หนูจะเตรียมของไปฝากคนเฝ้ารอยแตก พี่ช่วยถืออีกตะกร้าได้ไหมคะ?",
      "{0}, I'll prepare something to give to the crack watcher. Can you help me carry another basket?"
    ],
    [
      "{0} กลับมากินข้าวกันครบทุกคนแล้ว! หนูตักให้พี่ก่อนนะคะ",
      "{0}, everyone has come back to eat! I'll give it to you first."
    ]
  ],
  "Yelan": [
    [
      "{0} ฉันเคยถอยจากโต๊ะพนันได้ทันเสมอ แต่คราวนี้คนที่ลงเดิมพันกับฉันเอาวันพรุ่งนี้ของเขามาวางด้วย ฉันไม่ควรบอกเขาว่าฉันเอาอยู่",
      "{0}, I used to always be able to back away from the gambling table. But this time, the person who bet on me also placed his tomorrow. I shouldn't have told him I was taking care of it."
    ],
    [
      "{0} สี่สิบสองวันก็พอฉันตามสายข่าวได้จนสุด เธอรอฟังตอนฉันทอยลูกเต๋านะ",
      "{0}, forty-two days was enough for me to follow the news all the way through. You listen while I roll the dice."
    ],
    [
      "{0} รอยแตกดึงสายตาคนไปหมด เหมาะกับงานของฉันพอดี ฝากยืนตรงที่เขามองเห็นที",
      "{0}, the crack caught everyone's attention. It is suitable for my work. Please stand where he can see you."
    ],
    [
      "{0} เจ้านี่หมดแต้มต่อแล้ว คราวนี้ฉันเก็บลูกเต๋าได้สักที หาอะไรกินกันไหม",
      "{0}, this one is out of handicap. This time I was able to collect the dice. Want to find something to eat?"
    ]
  ],
  "Yoimiya": [
    [
      "{0} ฉันเก็บดอกใหญ่สุดไว้จุดตอนเราชนะ เด็ก ๆ รู้ว่าสีทองแปลว่าอะไร คืนนี้ถ้าพวกเขาเงยหน้ารอ ฉันจะกล้าสบตาพวกเขาไหมนะ",
      "{0}, I kept the biggest one for when we won. The kids know what the gold color means. Tonight, if they look up and wait Will I dare look into their eyes?"
    ],
    [
      "{0} มีเวลาอีกตั้งหกสัปดาห์ เด็กๆ ที่ร้านต้องออกแบบดอกไม้ไฟทันแน่",
      "{0}, there's still six weeks left, and the kids at the shop will have to design fireworks in time."
    ],
    [
      "{0} คราวหน้าฉันจะยิงแสงผ่านรอยแยกนั่น คนอยู่ไกลสุดลูกหูลูกตาก็จะเห็นเรา",
      "{0}, next time I'll shoot light through that crack. People as far as the eye can see will see us."
    ],
    [
      "{0} อย่าเพิ่งปิดตานะ! ลูกที่กำลังขึ้นไป เธอเคยบอกว่าชอบสีนี้ ฉันจำได้!",
      "{0}, don't close your eyes yet! The child is going up. She used to say she liked this color, I remember!"
    ]
  ],
  "Yumemizuki Mizuki": [
    [
      "{0} ถ้าเป็นฝันร้าย ฉันคงค่อย ๆ ปลุกคุณได้ค่ะ แต่เมื่อกี้ฉันเองต่างหากที่หลับตาขอให้ใครมาปลุก พอลืมตา หอคอยก็ยังอยู่",
      "{0}, if it was a nightmare, I could gently wake you up. But just now, I was the one who closed my eyes and asked someone to wake me up. When I opened my eyes, the tower was still there."
    ],
    [
      "{0} หกสัปดาห์จากนี้ หากฝันร้ายกลับมา แวะมาหาฉันได้นะคะ",
      "{0}, six weeks from now If the nightmare comes back Please come and see me."
    ],
    [
      "{0} ความฝันของผู้คนเริ่มมีแสงลอดเข้ามาแล้ว คุณเองเมื่อคืนหลับดีไหมคะ?",
      "{0}, people's dreams are beginning to see light. Did you sleep well last night?"
    ],
    [
      "{0} ตื่นแล้วก็ยังเป็นจริงค่ะ ลองชิมขนมคำนี้ดู คุณจะได้จำรสชาติของเช้าวันนี้ไว้",
      "{0}, it's still true when I wake up. Try this dessert. You will remember the taste of this morning."
    ]
  ],
  "Yun Jin": [
    [
      "{0} ข้าฝึกร้องบทสูญเสียมานับครั้งไม่ถ้วน คิดว่ารู้อยู่แล้วว่าเสียงนั้นเป็นอย่างไร พอถึงวันนี้ แม้แต่จะเอ่ยคำแรกข้าก็ยังทำไม่ได้",
      "{0}, I've practiced singing the song of loss countless times. I thought I already knew what that sound was like. To this day, I still can't even utter the first word."
    ],
    [
      "{0} ข้าขอเวลาหกสัปดาห์ซ้อมบทใหม่ คราวนี้อยากให้คนดูเป็นฝ่ายร้องรับ",
      "{0}, I need six weeks to practice my new role. This time, I want the audience to be the ones to respond."
    ],
    [
      "{0} รอยแตกนั้นงามราวเส้นพู่กัน ข้าคงต้องฝึกสะบัดแขนเสื้อให้ได้อย่างนั้นบ้าง",
      "{0}, the cracks are as beautiful as the strokes of a brush. I might have to practice flailing my sleeves like that."
    ],
    [
      "{0} วันนี้ข้าอยากยืนในหมู่ผู้ชม ปรบมือให้คนที่ก้าวขึ้นเวทีไปพร้อมกับข้า",
      "{0}, today I want to stand in the audience. Give a round of applause to those who stepped onto the stage with me."
    ]
  ],
  "Zhongli": [
    [
      "{0} ครั้งหนึ่งข้าเคยขอให้ผู้คนเชื่อว่ามือของพวกเขาสร้างวันพรุ่งนี้ได้ ข้ายังจำแววตาของคนที่เชื่อข้า... นั่นทำให้วันนี้ยากจะทนเป็นพิเศษ",
      "{0}, I once asked people to believe that their hands could create tomorrow. I still remember the look in the eyes of those who believed me... That made today especially difficult to bear."
    ],
    [
      "{0} หกสัปดาห์สำหรับหินย่อมสั้นนัก แต่ช่างที่ท่าเรือใช้เวลาน้อยกว่านั้นสร้างบ้านได้ทั้งหลัง เจ้าลองไปพบเขากับข้าสิ",
      "{0}, six weeks is very short for a stone. But the technicians at the port took less than that to build an entire house. You can go meet him with me."
    ],
    [
      "{0} รอยร้าวเช่นนี้ซ่อนไว้ใต้ทองคำไม่ได้ อีกแปดสิบสี่วันเราค่อยกลับมาดูด้วยกัน ว่ามนุษย์สร้างสิ่งใดไว้ใต้เงามันบ้าง",
      "{0}, such cracks cannot be hidden under gold. In eighty-four days, we'll come back and watch it together. What have humans created beneath its shadow?"
    ],
    [
      "{0} ฟังสิ ระฆังที่ท่าเรือดังแล้ว พ่อค้าวางแผง เด็กๆ ไปเรียน... ข้าว่านี่แหละคือสิ่งที่เจ้าตั้งใจรักษาไว้ มาเถิด ชาถ้วยแรกของเช้านี้ข้าเชิญ",
      "{0}, listen, the bells in the harbor are ringing, the merchants are setting up their stalls, the children are going to school... I think this is what you intend to preserve. Come, I invite you for your first cup of tea this morning."
    ]
  ],
  "Zibai": [
    [
      "{0} ข้าพลิกหยกดูอีกด้าน หวังจะเห็นเงาจันทร์เหมือนก่อนขึ้นมาที่นี่ แต่สิ่งที่สะท้อนอยู่ทั้งสองด้านคือใบหน้าของคนที่รักษาสัญญาไม่ได้",
      "{0}, I turned the jade over to look at the other side. Hoping to see the moon's shadow like before coming up here. But what is reflected on both sides is the face of a person who cannot keep his promise."
    ],
    [
      "{0} ข้าจะเก็บแสงจันทร์คืนนี้ไว้ เมื่อถึงกำหนดเราค่อยเปิดดูด้วยกัน",
      "{0}, I will keep tonight's moonlight. When it's due, we'll open it up and look at it together."
    ],
    [
      "{0} เห็นแสงเส้นบางที่พาดผ่านหยกไหม รอยแตกบนฟ้าทอดมาถึงมือเราแล้ว",
      "{0}, see the thin line of light running across the jade? The crack in the sky has reached us."
    ],
    [
      "{0} คืนนี้แสงจันทร์จะตกถึงพื้นโดยไม่มีอะไรมาขวาง ข้าอยากชวนเจ้าออกมาดู",
      "{0}, tonight, the moonlight will fall to the ground without anything obstructing it. I'd like to invite you to come and see."
    ]
  ]
};

function pickRelayDialoguePartners(team, random = Math.random) {
  const selected = new Set(team);
  const partners = new Map();
  for (const speaker of selected) {
    const eligible = relayVoiceRelationships[speaker]?.split('|')
      .filter(name => name !== speaker && selected.has(name)) ?? [];
    if (eligible.length) {
      partners.set(speaker, eligible[Math.floor(random() * eligible.length)]);
    }
  }
  return partners;
}

function relayRelationshipQuote(speaker, partner, result) {
  const line = relayRelationshipDialogue[speaker]?.[result];
  return line ? siteFormat(...line, siteText(partner)) : null;
}
