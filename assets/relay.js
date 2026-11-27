(() => {
  const gnoses = [
    ['ไฟ',1.6489,'#ffa47d','หอกเพลิงทะลวงผนึก',[4,1,1],'คบไฟรวมพล',[1,2,6]],
    ['หิน',17.8723,'#f7ce82','แนวผาศิลา',[1,4,1],'ฝนหอกศิลา',[6,3,1]],
    ['ไม้',33.883,'#95d99b','เถาวัลย์ตรึงฟ้า',[3,3,1],'รากไม้แห่งความหวัง',[1,3,6]],
    ['ลม',50.0532,'#80e1d5','พายุฉีกม่านเมฆ',[4,1,2],'สายลมส่งเสียงระฆัง',[1,3,6]],
    ['น้ำแข็ง',65.9574,'#b6eaff','ปราการเหมันต์',[1,4,2],'คมหอกเกล็ดน้ำแข็ง',[6,2,1]],
    ['น้ำ',81.9681,'#89bfff','เกราะคลื่นสะท้อนแสง',[2,4,1],'ธารน้ำคืนกำลัง',[1,2,6]],
    ['สายฟ้า',98.1915,'#d0a9ff','สายฟ้าผ่าบัลลังก์',[4,1,1],'ม่านอัสนีคุ้มทัพ',[2,5,3]]
  ].map(([element,sprite,color,first,a,second,b], index)=>({
    get name() {
      return siteFormat('ธาตุ{0}', '{1}', element,
        ['Pyro', 'Geo', 'Dendro', 'Anemo', 'Cryo', 'Hydro', 'Electro'][index]);
    },
    sprite,color,items:[{label:first,stats:a},{label:second,stats:b}]
  }));
  const artists=[{"items":["Dull Blade ฟ้าประทาน","ขนนกจากต่างฟ้า"],"name":"Aether","icon":"b975440a1ea06e378d525c68c67a3fae","element":1,"art":"aether-full.png"},{"items":["Dull Blade ฟ้าประทาน","ขนนกจากต่างฟ้า"],"name":"Aether","icon":"b975440a1ea06e378d525c68c67a3fae","element":2,"art":"aether-full.png"},{"items":["Dull Blade ฟ้าประทาน","ขนนกจากต่างฟ้า"],"name":"Aether","icon":"b975440a1ea06e378d525c68c67a3fae","element":7,"art":"aether-full.png"},{"items":["Dull Blade ฟ้าประทาน","ขนนกจากต่างฟ้า"],"name":"Aether","icon":"b975440a1ea06e378d525c68c67a3fae","element":5,"art":"aether-full.png"},{"items":["Dull Blade ฟ้าประทาน","ขนนกจากต่างฟ้า"],"name":"Aether","icon":"b975440a1ea06e378d525c68c67a3fae","element":8,"art":"aether-full.png"},{"items":["Dull Blade ฟ้าประทาน","ขนนกจากต่างฟ้า"],"name":"Aether","icon":"b975440a1ea06e378d525c68c67a3fae","element":4,"art":"aether-full.png"},{"items":["Dull Blade ฟ้าประทาน","ขนนกจากต่างฟ้า"],"name":"Aether","icon":"b975440a1ea06e378d525c68c67a3fae","element":3,"art":"aether-full.png"},{"items":["เครื่องกำเนิดน้ำ","กล่องเครื่องมือ"],"name":"Aino","icon":"a546e138386207a469665543a976064a","element":2,"art":"231c88ca0af3368429889d5244e6f1e5.webp"},{"items":["ดอกไม้แปรธาตุ","ลิฟต์หิน"],"name":"Albedo","icon":"9e80de34871edcc116f21670e9196153","element":8,"art":"92f25995c686fd889ef901e7da9a82e2.webp"},{"items":["กระจกสลักแสง","หนังสือภาษาศาสตร์"],"name":"Alhaitham","icon":"893f9fb93ba900600020b3ad0ad79015","element":3,"art":"7b4b33758940f57f0ea9b673332027e8.webp"},{"items":["กับดักเยือกแข็ง","ธนูนักล่า"],"name":"Aloy","icon":"cb5cddfb0c8dc0d959bac94c7a4f0337","element":5,"art":"465d679373e9db2b442bda7f575bf0a4.webp"},{"items":["คมอัสนี","เครื่องรางเดินทาง"],"name":"Alyosha","icon":"aebdd40d2ccdecf25bbfe9a7b8da9b06","element":4,"art":"cdc8923cdff647bb1acdfc6a08bdffcc.webp"},{"items":["ลูกศรเพลิง","ตุ๊กตา Baron Bunny"],"name":"Amber","icon":"11a50b0ac0b21cc36cc50646ab5d20c5","element":1,"art":"c52ffe0344bc5ccce4af0be75fd712ec.webp"},{"items":["คมหอกเหมันต์","คมเกล็ดหิมะ","ตุ๊กตาแม่ลูกดก"],"name":"Anastasya","icon":"e5337e123927ed861e5863dcaf027702","element":5,"art":"anastasya-portrait.png","featherArt":true},{"items":["วัว Ushi","กระบองโอนิ"],"name":"Arataki Itto","icon":"d6429728dc64d53118c4a93b9d387e99","element":8,"art":"12b72cccc13dfc2001578fc9e42bf930.webp"},{"items":["เคียวจันทราแดง","ข่าวกรองบ้านแสนอบอุ่น"],"name":"Arlecchino","icon":"f7faaaa3a6722483d84a39b0fde402a8","element":1,"art":"a84179c522c722f480c322dd155b1c90.webp"},{"items":["เขี้ยว Changsheng","ห่อยาสมุนไพร"],"name":"Baizhu","icon":"98105886ec95f94592010a7e7a890f13","element":3,"art":"468b47fa28b44da9d5801bca713fc001.webp"},{"items":["วงแหวนน้ำ","โน้ตเพลงประสานเสียง"],"name":"Barbara","icon":"d690017cf3871d16861837597d56402c","element":2,"art":"2209dc6c7eda6942dc62d646caf49b96.webp"},{"items":["ดาบผ่าคลื่น","ธงกองเรือ"],"name":"Beidou","icon":"ee41d4446a1e6ce2bbb6df163b30dfd9","element":4,"art":"7da4beb15d3e27edbbeb835ac6452a78.webp"},{"items":["ดาบวงแหวนไฟ","ผ้าพันแผลนักผจญภัย"],"name":"Bennett","icon":"8d3cfc558dd1eb14368774751519b3af","element":1,"art":"265613568f0fe15a30cce32ce2e39fbf.webp"},{"items":["โล่จันทร์เสี้ยว","เหยือกน้ำโอเอซิส"],"name":"Candace","icon":"b331f74419fb5164af17f77b8b523cc1","element":2,"art":"0df9f0503f0bf1fe74ee4d43a0b55dac.webp"},{"items":["ภาพข่าวแนวหน้า","กล้อง Monsieur Verite"],"name":"Charlotte","icon":"73a973925c974c8995e0aa857851bedd","element":5,"art":"e95d541d398433b8d08cac6772c04646.webp"},{"items":["กระสุนวิญญาณ","บังเหียนบิน"],"name":"Chasca","icon":"980764869d5ec95ad36fdc7340858712","element":7,"art":"af29e7153e983296e71b29b672e239b9.webp"},{"items":["กระสุนปืนคาบศิลา","นกหวีดหน่วยลาดตระเวน"],"name":"Chevreuse","icon":"54287f20d20b1614a963f9df2b695d83","element":1,"art":"3cb4850bdb17961b41b74160d342f425.webp"},{"items":["ตุ๊กตา Tamoto","ดาบคู่ช่างตัดเสื้อ"],"name":"Chiori","icon":"e4b7bf68459c46c1f98f1b8e6f024272","element":8,"art":"854c0db163c9948fb8eadd2c76500835.webp"},{"items":["ยันต์ขับไล่ภูต","ดาบน้ำแข็ง"],"name":"Chongyun","icon":"66680e97e0fd238372b9d9844c150cec","element":5,"art":"03c6509de6d5eaa352c98d2580b1d94b.webp"},{"items":["หมอน Itzpapa","ดาวราตรี"],"name":"Citlali","icon":"77170c0e23dca3c0f3d20961bf21c37e","element":5,"art":"666defe2ef37b01f0b7b7a9c69e66072.webp"},{"items":["ปืนดวล","ตรานักประลอง"],"name":"Clorinde","icon":"b5fd12aeb068c49e2f2b3d80222edc1f","element":4,"art":"3bdff6349b777a8fd6da44b6aa265c2d.webp"},{"items":["บูมเมอแรงใบไม้","ตุ๊กตา Cuilein-Anbar"],"name":"Collei","icon":"81c977ea85b332a69b215a43753de307","element":3,"art":"0cf1944815df1d6aa25ac166bfc3ce4d.webp"},{"items":["ม่านแสงจันทร์","กล่องเพลงจันทรา","ฮัมร้องคืนเต็มดวง"],"name":"Columbina","icon":"5923697771179ff746614be63c61821b","element":2,"art":"7cd2c23ae798292779e96c96c309f3c1.webp"},{"items":["หอกพิพากษา","ไพ่ Genius Invokation TCG"],"name":"Cyno","icon":"c47c5e1a5f73834a2f72e7b27913d610","element":4,"art":"4a2ba15d77e116402602600982da2f42.webp"},{"items":["หยดน้ำแห่งพร","ระฆังวิหาร"],"name":"Dahlia","icon":"de1bf953d128be55051e2155ed8b7415","element":2,"art":"5ec412f71e1b160b1307cf071048b281.webp"},{"items":["ประกายอัสนี","โคมไฟนำทาง"],"name":"Danica","icon":"86c4cbe06ed7831ea555f4545fd62413","element":4,"art":"danica-portrait.png","featherArt":true},{"items":["ดาบทหารรับจ้าง","เครื่องรางสิงโต"],"name":"Dehya","icon":"9aade853d43808255b7305ffaf99f2fc","element":1,"art":"6c9fac98b3ed59d9aef06580798ea865.webp"},{"items":["เหยี่ยวเพลิง","ตะเกียงรุ่งอรุณ"],"name":"Diluc","icon":"799a9c50a2b4849ff346cff02b2f3653","element":1,"art":"050ec4150e9cafb3a10c0945ad66a787.webp"},{"items":["โล่อุ้งเท้าแมว","ขวดเครื่องดื่มเย็น"],"name":"Diona","icon":"5eecedb6e8e542b1602f283fb4824f1a","element":5,"art":"2a9f92529be74f8bf56cf78307632678.webp"},{"items":["ตะเกียงจินน์","ถุง Mora"],"name":"Dori","icon":"97cc9ff2f8da61adf3bb6d2d4cf6938c","element":4,"art":"5048ba969d080d079bf4122028c566c5.webp"},{"items":["ปีกมังกรเพลิง","หนังสือนิทาน"],"name":"Durin","icon":"db8c9b5cd4b2bf432f950aa1e30620d2","element":1,"art":"b530466f809c87039c4a7dde48cdb40f.webp"},{"items":["ขวดน้ำหอม","ดอกไม้กลั่นกลิ่น"],"name":"Emilie","icon":"76668f2eb3ed2410df833a2fcbcdfc8b","element":3,"art":"467cc7a3cdb8fd11d5c937b3f6cfd772.webp"},{"items":["หม้อปรุงอาหาร","มีดเชฟ"],"name":"Escoffier","icon":"5f075987f83a290fc059ae18cd167f94","element":5,"art":"3c5b78af2b5cdc5831579ae0b702f6be.webp"},{"items":["รอยเท้าร่ายรำ","ดาบแห่งแสง"],"name":"Eula","icon":"f68c6ff36bb24e82547ead3c2aec4ea8","element":5,"art":"75073cb31552e482934ba75e2e2c0001.webp"},{"items":["กลไกพายุ","ตำราจักรกล"],"name":"Faruzan","icon":"de258beef931732f33536a86f9c6bc13","element":7,"art":"6b7751f4ad1ea14570e356f58f4b271d.webp"},{"items":["ปีกของ Oz","ดวงตาของ Oz"],"name":"Fischl","icon":"6c6b4b40a120e9b6e0dffe24313fc802","element":4,"art":"b0c217a6992a7011ddb032587da273b7.webp"},{"items":["หอกวิญญาณ","ตะเกียงผู้เฝ้าสุสาน"],"name":"Flins","icon":"9efa822fbf062ba1e013f94ccd953cd0","element":4,"art":"0e1ce45edac22c516e582c0313fb97b8.webp"},{"items":["หมวกนักดำน้ำ","เพนกวิน Pers"],"name":"Freminet","icon":"606cd6a1f4bf51fa41b7c472a2f66271","element":5,"art":"b5755aaa1adb7ea96dd87f244d36ce4f.webp"},{"items":["เวทีสายน้ำ","บทละครโอเปรา","ทำนองสิ้นหวัง"],"name":"Furina","icon":"f112999e1c2a371f11cb162fa97dd67d","element":2,"art":"215bb9a5f77391a7834ff950afc006a8.webp"},{"items":["หัวสิงโตวูซู","กลองเชิดสิงโต"],"name":"Gaming","icon":"e76de9ab492c7de8f963a1ebf2a1360c","element":1,"art":"e0718f729f00dee8bf1957ec43e504da.webp"},{"items":["ดอกบัวน้ำแข็ง","ลูกศรเกล็ดหิมะ"],"name":"Ganyu","icon":"298b511471311ef3cfee8e65e14c017f","element":5,"art":"c16c04ff66ba586ce49af1db36369598.webp"},{"items":["ธงแม่ทัพ","ธนูทัพ Watatsumi"],"name":"Gorou","icon":"2f8d5e6dfc0f8db4a36171dcc3c0c445","element":8,"art":"5e9f521770ec804d9fb771e8239cbb42.webp"},{"items":["หอกผีเสื้อ","โคมวิญญาณ"],"name":"Hu Tao","icon":"a38b6e8409527edd799672a26fe610f6","element":1,"art":"8eb0cce79ab76c26b3ad864479270dff.webp"},{"items":["หมัดสายฟ้า","อุปกรณ์ฝึกกำลัง"],"name":"Iansan","icon":"631b5707d1857bbd3de4990594c00f96","element":4,"art":"9bbef74f85aaa7b3776bf04489ca917a.webp"},{"items":["ปืนลม","กระเป๋าสัตวแพทย์"],"name":"Ifa","icon":"c66efae2e66989bd32f7210e2cecf8d9","element":7,"art":"7e65d0e105d97f8f53f4c0a926ec22f1.webp"},{"items":["โคมไฟประภาคาร","Aedon ผู้เฝ้าแสงประภาคาร"],"name":"Illuga","icon":"9d91b2895834ae2dab59bb8045009be4","element":8,"art":"eefbcbc87bfc7e8142564d167393eb54.webp"},{"items":["แขนกล","หุ่น Birgitta"],"name":"Ineffa","icon":"43b0d0c23d86c889aae11bdeb8e5bfd5","element":4,"art":"73a5ab8b1d77f429c0877402537306a1.webp"},{"items":["กลไกลม","ถุงมือทำงาน"],"name":"Jahoda","icon":"c94f69f2df7ae215f9c8a77ebfb03896","element":7,"art":"029461ecc23082659d04f769ca5bae95.webp"},{"items":["ดาบเขี้ยวสิงโต","เมล็ดแดนดิไลออน"],"name":"Jean","icon":"c0325d28aa7e0e0f19c0b4bd69ecda15","element":7,"art":"7936fdb27ff90ea2b0ae68b2c9ab3580.webp"},{"items":["สว่าน Turbo Twirly","เกล็ดผลึก"],"name":"Kachina","icon":"86647f6e046b5eac533358657797e799","element":8,"art":"89103462b133ea9cfcf0e4b788157f39.webp"},{"items":["คมดาบสายลม","ใบเมเปิล"],"name":"Kaedehara Kazuha","icon":"2268d7a8859be8ee186eae0e0ddeacba","element":7,"art":"9efc12c5fc64022dff0f6616f299e3b2.webp"},{"items":["สะพานน้ำแข็ง","คมดาบน้ำแข็ง"],"name":"Kaeya","icon":"a2dbd4a96ccbd206f302f85f637ee9db","element":5,"art":"f685581ed79ee5a71e8d192d21cdb70e.webp"},{"items":["พัดกระเรียน","ดาบหิมะ"],"name":"Kamisato Ayaka","icon":"01bd1655584d890ceffd290891f24380","element":5,"art":"213b2d2981c6ceb5a4c256f3b345b887.webp"},{"items":["ดาบเงาวารี","ถ้วยชาของเจ้าสำนัก"],"name":"Kamisato Ayato","icon":"b6159a135c6789b906cb99d1f405da97","element":2,"art":"c43280fd9e1c4b04f1aaad48ce11d2c9.webp"},{"items":["กระเป๋า Mehrak","พิมพ์เขียวที่พักพิง"],"name":"Kaveh","icon":"060f3485f377c49aebdb66838c9b5228","element":3,"art":"e622bdc2a96da9a1adf85f6b3772295b.webp"},{"items":["ปิ่นสายฟ้า","แผนผังเมือง"],"name":"Keqing","icon":"338eacfa72dd31a450fc76efd9d94ef6","element":4,"art":"7ae22cc270aa03322dc80f09171551d6.webp"},{"items":["ตะขอเกี่ยว","ภาพ Ajaw"],"name":"Kinich","icon":"d6950a854d5130492f84a551bdfce55b","element":3,"art":"6f1b53cd775e66af29046026ade3297b.webp"},{"items":["กรงเล็บเนโกะ","กล่องพัสดุ"],"name":"Kirara","icon":"ae55937f905d5888ade8b3c75e234b84","element":3,"art":"380e2467334d50a40574b52656eb4f61.webp"},{"items":["ระเบิด Dodoco","ใบโคลเวอร์นำโชค"],"name":"Klee","icon":"cd653c87fea3815f44edcb71db110647","element":1,"art":"dc5d65b2fbce18ce62efb0031aa6464d.webp"},{"items":["ขนนกเท็งงู","ธงแม่ทัพ"],"name":"Kujou Sara","icon":"5cde6d06b72e99e8b3c48ea47eb1d919","element":4,"art":"e5df85d9484d88a760a6ea5311ea28b4.webp"},{"items":["แส้สายฟ้า","วงแหวน Naku Weed"],"name":"Kuki Shinobu","icon":"33f26c448a00e68210e073187b996a79","element":4,"art":"f2f8648d2b043009e9dceb4b81552d56.webp"},{"items":["วงแหวนหวาย","ตะกร้าสาน"],"name":"Lan Yan","icon":"d97909b68e6f8bfe4584a15262b8fbbe","element":7,"art":"78d4e1fbb4c1e8224fdc5a455890ff2d.webp"},{"items":["สรรพสัตว์แดนเหนือ","คำอธิษฐานจันทรา"],"name":"Lauma","icon":"42c646d9ff4960b4522e3cb1b86e6c27","element":3,"art":"c949feb9af537c0f5f59b7da4667e18e.webp"},{"items":["ม่านดาวหลับใหล","ดาวตก"],"name":"Layla","icon":"155f840948bc37aba33d27dd41bf1690","element":5,"art":"f3159d1cefee502898502ef08bc85bdc.webp"},{"items":["เครื่องมือสำรวจ","ผลึกหิน"],"name":"Linnea","icon":"ba7bd044b7a67c92189abbf73587dd1a","element":8,"art":"85c1945e9cfbec68b08af3281f8f9934.webp"},{"items":["กุหลาบสายฟ้า","ตำราค่ายกล"],"name":"Lisa","icon":"56f7a290a7bdc85efcd70871f0710f0d","element":4,"art":"38ef9e4e8bc4cf9d89da87b890d2c43f.webp"},{"items":["ตรากองอัศวิน","หอกท้าประลอง"],"name":"Lohen","icon":"a2d466b12c8542f1b6d8871baebc1ab5","element":5,"art":"5430d0685ce6d84fb6a9a4bcbe8c29c6.webp"},{"items":["Dull Blade ฟ้าประทาน","ดอก Inteyvat"],"name":"Lumine","icon":"1222e1d08252962c17c921d789879977","element":7,"art":"lumine-full.png"},{"items":["Dull Blade ฟ้าประทาน","ดอก Inteyvat"],"name":"Lumine","icon":"1222e1d08252962c17c921d789879977","element":2,"art":"lumine-full.png"},{"items":["Dull Blade ฟ้าประทาน","ดอก Inteyvat"],"name":"Lumine","icon":"1222e1d08252962c17c921d789879977","element":1,"art":"lumine-full.png"},{"items":["Dull Blade ฟ้าประทาน","ดอก Inteyvat"],"name":"Lumine","icon":"1222e1d08252962c17c921d789879977","element":5,"art":"lumine-full.png"},{"items":["Dull Blade ฟ้าประทาน","ดอก Inteyvat"],"name":"Lumine","icon":"1222e1d08252962c17c921d789879977","element":4,"art":"lumine-full.png"},{"items":["Dull Blade ฟ้าประทาน","ดอก Inteyvat"],"name":"Lumine","icon":"1222e1d08252962c17c921d789879977","element":8,"art":"lumine-full.png"},{"items":["Dull Blade ฟ้าประทาน","ดอก Inteyvat"],"name":"Lumine","icon":"1222e1d08252962c17c921d789879977","element":3,"art":"lumine-full.png"},{"items":["กล่องแมววิเศษ","นิ้วเพชรแมวมายา"],"name":"Lynette","icon":"0514a776ec048ef4297d62dc7bf95c9e","element":7,"art":"0d4469aef04facd9b479c0c730b78517.webp"},{"items":["ไพ่กล","หมวกนักมายากล"],"name":"Lyney","icon":"ff2d1d21568ba441b844b8f2dc550ebc","element":1,"art":"80cad918be4f658e214adfdbd2a8bd61.webp"},{"items":["วงล้อเพลิง","เปลวไฟศักดิ์สิทธิ์","โลกันล้อเดียว"],"name":"Mavuika","icon":"dc852c2f79f480f36fd9f05cfc5d5614","element":1,"art":"effb2bc40edcf17d27641dd0bb21e648.webp"},{"items":["แผนที่สำรวจ","หน้าไม้พลสำรวจ"],"name":"Mika","icon":"3cd2d8b36a536442b9173e72051121e1","element":5,"art":"bbb487eb35833848a8d6f4513a5b3793.webp"},{"items":["ประกายไฟฟ้า","สมุดจัดงาน"],"name":"Mitya","icon":"55316264625932aec26f2789e3065af5","element":4,"art":"4ec27ea406265269b013af811aea6097.webp"},{"items":["วงดาวสะท้อนน้ำ","แผนภูมิดวงดาว"],"name":"Mona","icon":"0fa4c59c1028ac78c14d567c3aafee0e","element":2,"art":"40159aa5804d78a7678d88ee7b2caa5b.webp"},{"items":["กระดานฉลาม","ลูกบอลชายหาด"],"name":"Mualani","icon":"0b2be6f46cda5fa7e2582857b3f7e619","element":2,"art":"63063d849c7591c98d6ebb005a278248.webp"},{"items":["นิมิตพฤกษา Aranara","เมล็ดพันธุ์ปัญญา","ฝันตลกไม่รู้จบ"],"name":"Nahida","icon":"e86b940e2a1b156607a76601c10e9f9b","element":3,"art":"6e4686efd57f3b2e9e1e95df2f25030a.webp"},{"items":["ร่มกันปืน","กระสุนผลึก"],"name":"Navia","icon":"a6387a0860c270ce9b1d2a41503cb3b4","element":8,"art":"513b324e2af2f170e69c5845bd0c95ac.webp"},{"items":["มีดเงา","ม้วนข่าวกรอง"],"name":"Nefer","icon":"e81f91fc7c32cfc1bda5081eb4f4ea2a","element":3,"art":"055b0874a9528bd5b82650c9c6f2a31e.webp"},{"items":["อักษรรูนแม่มด","ขนนกนำทาง"],"name":"Nicole","icon":"833692cb4e6ce9947f542124487dc04f","element":1,"art":"4b630764b8bca96ac2a0b6334b1d7b68.webp"},{"items":["ผ้าคลุมระบำ","ดอกบัวโรงละคร"],"name":"Nilou","icon":"962205780471379857eea4e82cbdeddd","element":2,"art":"d6357b36649831f96e8194b8d2801b0a.webp"},{"items":["ฉากหยก","อัญมณีดาว"],"name":"Ningguang","icon":"4170d1625b9740a71052030297527639","element":8,"art":"781861788b619b2b6624adadeee7ac9a.webp"},{"items":["เกราะกุหลาบ","ดาบใหญ่"],"name":"Noelle","icon":"6adf6bebd61db037c8990cf2a925be94","element":8,"art":"1d4a8e4d3c61438190a85c7b69d57582.webp"},{"items":["ม่านเกล็ดหิมะ","คมน้ำแข็ง"],"name":"Odette","icon":"4edcfaa343fb70b2b6ec162f583389d0","element":5,"art":"e8772b892364e4f12a8cc896a824fcaa.webp"},{"items":["ลูกศรยามค่ำ","เมล็ดผัก"],"name":"Ororon","icon":"fbc5826159a5fa593819c076b58de639","element":4,"art":"3b85efd21a8e4e3f0791d71ac1e35913.webp"},{"items":["ตรานักล่าแม่มด","หมวกแม่มด"],"name":"Prune","icon":"08f1bb1047faccb1fef6c98eb3ad1ef8","element":7,"art":"ff8119d75245d72bddec92659cc3dba1.webp"},{"items":["ยันต์คุ้มภัย","ดาบพิธีกรรม"],"name":"Qiqi","icon":"68b9e869712b02ff116a99d62c4873d4","element":5,"art":"04ae7f19ded0d41a35142c4714c5085c.webp"},{"items":["ดาบแห่งนิรันดร์","ตรามิตสึโดโมเอะ","เสน่ห์อาหารพิษ"],"name":"Raiden Shogun","icon":"ec1e5cb4edd2aee8c1ffb16fd0e494cd","element":4,"art":"da8a392c34fa440b9f2876cb2b73a3d5.webp"},{"items":["กรงเล็บสายฟ้า","รอยเท้าฝูงหมาป่า"],"name":"Razor","icon":"9df5679f6bc44e8560d7fceed5732818","element":4,"art":"7d72ff9db538f27b4951894a4904e915.webp"},{"items":["เงาไม้กางเขน","หอกน้ำแข็ง"],"name":"Rosaria","icon":"94b95d328ff72167358405eb5d38e239","element":5,"art":"31dfa71af4daf1d5ffccf9858838fcc9.webp"},{"items":["ชิ้นส่วนหุ่นกล","แขนจักรกล"],"name":"Sandrone","icon":"01d114df1f18f71a75763b1f27ea2a81","element":5,"art":"d27dbdd677e0b2a6f3060c6a2ee907d5.webp"},{"items":["แมงกะพรุนน้ำ","สมุดแผนกลศึก"],"name":"Sangonomiya Kokomi","icon":"f25319fda509e043a6fba7211ab92845","element":2,"art":"dfd67db309c80a3ad5ebfb6c42a903e9.webp"},{"items":["ดาวกระจายนินจา","ตุ๊กตา Muji-Muji Daruma"],"name":"Sayu","icon":"7d2632f2e9c4d13fde72f5a90cd4551e","element":7,"art":"25ee0083be2dad495a5b472bc5fd8eda.webp"},{"items":["ลูกศรทราย","แผนที่ทะเลทราย"],"name":"Sethos","icon":"9c2493f2aedbe499185dd90c44b45724","element":4,"art":"4facd5c84dfd5db3c10395584e1ee104.webp"},{"items":["เชือกแดงผนึกวิญญาณ","หอกสะกดภูต"],"name":"Shenhe","icon":"5e53b80e0145b8bb0d5ce75163424851","element":5,"art":"2a72b1a1dd0231223f9c48de50058db0.webp"},{"items":["หมัดพายุ","สมุดสืบสวน"],"name":"Shikanoin Heizou","icon":"b1c2e4c7655d919ebdc3b8d81eddc654","element":7,"art":"62f3bd37bf83a6dead7ea02e9ef681c2.webp"},{"items":["ปืนฟองน้ำ","ชุดปฐมพยาบาล"],"name":"Sigewinne","icon":"0f51b6607e926c5d598e638bcd9da5e2","element":2,"art":"243c3557129c8bef1e47518d6864c1b7.webp"},{"items":["ผีเสื้อลมแปรธาตุ","ขวดทดลอง"],"name":"Sucrose","icon":"efe38ee19c398b2440c3b8a2471f91e7","element":7,"art":"b370715b6695ce35b7426efd2dcc05f8.webp"},{"items":["ดาบคู่วารี","ของเล่นให้ Teucer"],"name":"Tartaglia","icon":"4c79e19610d2659a303c61cc0d1eb69e","element":2,"art":"5ef6b9a77059dc0a27bd2dd37fa5da2f.webp"},{"items":["หอกเพลิง","เครื่องรางคุ้มครอง"],"name":"Thoma","icon":"20ff2eba5ce6f155848e7823a2d1746c","element":1,"art":"5f4da6709843b1429893c604e76bc0a2.webp"},{"items":["ลูกศรพฤกษา","คู่มือเจ้าหน้าที่พิทักษ์ป่า"],"name":"Tighnari","icon":"49015403586b9188e4c40e03cf975ae1","element":3,"art":"cb4509079568f5fcfdcc6238500152ff.webp"},{"items":["หอกอัสนี","เครื่องหมายหน่วย"],"name":"Valeriy","icon":"30b7be483206b877a88677c31e25a9bb","element":4,"art":"72aee06522e6ccd1e9ec0e1def021a1d.webp"},{"items":["หน้ากากนักมวยปล้ำ","ตะกร้าผลไม้"],"name":"Varesa","icon":"1531ed5375271187daf71a7e06986fd8","element":4,"art":"bdcdd3722590ff84bad1492f7d84d4fd.webp"},{"items":["ดาบคู่ลมเหนือ","ธงกองสำรวจ"],"name":"Varka","icon":"3b9cefb01ad79ac65edd444a0a413c2e","element":7,"art":"d001a79576e3fb75cd72c166defba778.webp"},{"items":["ไวน์แห่งอิสรภาพ","พิณนักกวี","บทเพลงแห่งเสรีภาพ"],"name":"Venti","icon":"d15fb2b55d19526020703ced81f85f7d","element":7,"art":"1e2e4a28b1ff81542690067520e6a759.webp"},{"items":["ดาบสายลม","ผีเสื้อพเนจร"],"name":"Vesna","icon":"673f828e16f466cb3fffa5dac8b9f8a5","element":7,"art":"ab884768a04a3960b428cf079e76e8c7.webp"},{"items":["ม่านธารน้ำ","หยดน้ำค้าง"],"name":"Vodyanitsa","icon":"940dbabba932ce86461b16150c846335","element":2,"art":"48ebd3a7044431ca257ba4ae299aef48.webp"},{"items":["วงแหวนลม","หมวกพเนจร"],"name":"Wanderer","icon":"8ca70815f72a5b273d27d30ac13dbd45","element":7,"art":"0cce6d14eaf979dae4ae5d2b9fa8d2ec.webp"},{"items":["ตรา Fortress of Meropide","นวมจักรกล"],"name":"Wriothesley","icon":"163a7355cca82dc5b3c9a36c70b7dedd","element":5,"art":"833b709c7e4de694016881b35ed86143.webp"},{"items":["พริกของ Guoba","หม้อซุป Wanmin Restaurant"],"name":"Xiangling","icon":"ab2f94b2b8410db31c18b0501f01302b","element":1,"art":"0caef73a93e509e6a11803224e0e3941.webp"},{"items":["กลไกกระเรียน","ว่าวเหินฟ้า"],"name":"Xianyun","icon":"426d23d0277d63d652c0f8390d713eb4","element":7,"art":"88c6eb8925a7f1d049ee2268a1a9f740.webp"},{"items":["หอกหยก","หน้ากากยักษา"],"name":"Xiao","icon":"a78a380ad0ee9d2be1b6b684c21c2527","element":7,"art":"568309f88942d1596dd197a30c7c0403.webp"},{"items":["เครื่องผสมเสียง","ใบมีดโรลเลอร์"],"name":"Xilonen","icon":"4142693e6b710818f8da1757bb8abe26","element":8,"art":"eea13ef45099786f97f247eb17f14443.webp"},{"items":["ดาบพิรุณ","นิยายกำลังภายใน"],"name":"Xingqiu","icon":"132649d7a199f717fce6c7a6ab22caef","element":2,"art":"5ec26e0c117717ccd2cf8135e7fc21ee.webp"},{"items":["กีตาร์ไฟ","กลองร็อก"],"name":"Xinyan","icon":"a87b7d0ea3bca4e5e4fbf1b4e74a5a49","element":1,"art":"f782a2b5dcca6de0fecabdb4eeb66ede.webp"},{"items":["กิ่งซากุระสายฟ้า","นิยายจาก Yae Publishing House"],"name":"Yae Miko","icon":"9af3a07a5100bc9b1401fad7ac1d71cc","element":4,"art":"dfa6086559d8d046d16b187429df2337.webp"},{"items":["ตราพิพากษา","ตำรากฎหมาย"],"name":"Yanfei","icon":"f7160bf8a60d8b3c702a02314e74300c","element":1,"art":"6930dc9dd2dd189cef58cf8c679a8a97.webp"},{"items":["หัวไชเท้าลูกขาว","ตุ๊กตา Yuegui"],"name":"Yaoyao","icon":"aa70751d15f29ce548523e8659c89c10","element":3,"art":"ff98c616272ebea367d53c107f848353.webp"},{"items":["สายไหมวารี","ลูกเต๋าหยก"],"name":"Yelan","icon":"85548926dc60f5706038db74d916b6fd","element":2,"art":"12469685aef0cde4659300d1c5d976af.webp"},{"items":["จรวดดอกไม้ไฟ","ดอกไม้ไฟงานเทศกาล"],"name":"Yoimiya","icon":"87c16170d2f965e17475efb5ef02da2e","element":1,"art":"ff4b5ffe15b918c026ea4c17ed11b9b2.webp"},{"items":["พัดแห่งฝัน","ขนมบำบัดฝัน"],"name":"Yumemizuki Mizuki","icon":"b4331429163935d4d908b690aff9ba77","element":7,"art":"06e93291e1018a6eb442520fd134fbd2.webp"},{"items":["ธงงิ้ว","ทวนละครเวที"],"name":"Yun Jin","icon":"14d7b4e597225cbb1363358d89006c2a","element":8,"art":"66103c48f0da25cb08c3079ab4c866bd.webp"},{"items":["เสาหินหยก","ลูกชิ้นกุ้งเทพอสูร","กระเป๋าเงินที่ปรึกษา"],"name":"Zhongli","icon":"37de10beba5ba9b67d9fcc44d5de6574","element":8,"art":"28c2c4258b503cdb6a592e27d2f7bb71.webp"},{"items":["ม่านแสงหยก","ดาบแสงจันทร์"],"name":"Zibai","icon":"34a19ba96316e4711d8f5cc9b0588643","element":8,"art":"d6c0e1a137f7ab1003c73f72b8471cea.webp"}];
  const game=document.querySelector('.relay');
  const body=game.querySelector('.relay-body'), heading=game.querySelector('h3');
  const status=game.querySelector('.relay-step'), orbit=game.querySelector('.globe-orbit'), history=game.querySelector('.relay-history');
  const hall=game.closest('#successors'), art=hall.querySelector('.successor-hall-art');
  function setupVerdictAtmosphere(hall) {
    const hallCanvas = hall.querySelector('.successor-hall-atmosphere');
    const atmosphere = hallCanvas.getContext('2d');


    // Lamp centers and radii in the coordinates of the background image.
    const wallLamps = [
      [410,13,1.6], [93,15,2.3], [303,15,2], [207,20,1.6], [209,23,2], [396,39,1.6], [272,44,2.3], [276,48,2.3],
      [442,57,1.6], [152,79,4.1], [323,95,2], [379,113,2], [461,117,3], [1368,121,1.6], [207,135,3.7], [365,138,3.4],
      [415,153,2], [491,153,2], [535,161,2.3], [1581,166,3.6], [1295,170,1.6], [401,176,2.8], [260,181,4.2], [566,188,3.6],
      [1260,189,1.6], [1223,190,1.6], [1591,196,1.6], [1589,199,2], [697,207,2], [1225,206,1.6], [555,208,1.6], [558,212,2.3],
      [596,214,2.3], [484,217,3], [93,225,4.2], [307,223,2.8], [586,237,2.5], [626,237,2.5], [1474,239,2.3], [472,244,2.8],
      [518,246,3], [1227,244,1.6], [1638,249,2.3], [655,257,2], [617,259,2], [59,267,4.2], [1160,266,2.3], [1421,267,2.3],
      [506,270,3], [550,270,2.8], [686,276,2.8], [648,278,2.3], [693,282,2.3], [1578,285,4.9], [1375,288,3.4], [584,292,2.3],
      [397,294,1.6], [542,295,2.5], [1427,294,1.6], [679,297,2.3], [129,309,4.1], [1329,308,3.4], [27,310,1.6], [615,312,1.6],
      [708,313,2.5], [1377,315,3.7], [618,315,1.6], [1517,317,4.7], [574,317,2.5], [439,321,3.7], [1285,323,2], [721,330,1.6],
      [1330,335,3.4], [1244,337,4.2], [606,337,2.5], [274,342,2.3], [1460,343,4.5], [426,347,3.6], [479,346,3.6], [1205,347,3.6],
      [1287,350,1.6], [1524,352,3], [101,352,1.6], [639,355,2.3], [1166,356,2], [1244,361,3.4], [1129,362,3.4], [710,364,3],
      [1093,366,3.4], [516,368,2.3], [520,370,2.3], [1204,371,2.8], [467,372,1.6], [1466,376,3.2], [35,379,2], [1165,379,2],
      [1128,383,2.5], [1359,383,2.5], [702,385,2.5], [1090,387,2.5], [557,391,2], [508,395,2.8], [735,397,3], [1313,397,2],
      [1413,397,2.8], [1310,399,1.6], [373,402,1.6], [594,408,2.3], [1266,409,3.6], [305,408,1.6], [590,409,1.6], [106,414,3.2],
      [1362,412,2.3], [229,416,1.6], [1223,417,3], [415,423,2.3], [628,425,3.2], [1183,424,3.4], [1312,423,2.8], [1143,430,3.2],
      [1648,432,5.9], [354,434,3.6], [584,433,2.8], [1033,434,3.4], [1106,433,2.8], [1267,436,3.4], [664,441,3], [285,442,3.6],
      [173,444,3.4], [1225,443,2.5], [1220,445,1.6], [620,450,3], [1182,449,2.5], [699,454,3], [1143,454,3.2], [1572,455,4.4],
      [399,456,2.5], [996,456,3.2], [1031,457,3.6], [1104,458,3.4], [1067,459,2], [79,460,1.6], [502,465,3], [336,465,2.3],
      [656,465,2.5], [1508,475,3.4], [768,476,3], [610,477,2.5], [692,478,3], [1660,478,3], [541,483,2], [384,487,1.6],
      [149,488,1.6], [648,491,2.5], [1579,493,2.3], [489,495,2.3], [582,499,3], [761,501,2.3], [684,503,2.5], [530,512,2],
      [622,514,3.2], [948,516,3.4], [982,520,3.4], [1019,522,3.4], [1229,522,3.6], [1182,525,3.4], [476,525,2.5], [1057,525,3],
      [1096,526,2.8], [1138,526,3], [365,526,1.6], [571,527,2], [755,526,1.6], [695,537,2.3], [945,539,2], [519,541,2.3],
      [612,541,3], [978,545,3], [1228,550,3.7], [1016,550,3], [443,550,1.6], [1054,552,3.2], [1181,553,3.9], [649,553,2.3],
      [1095,554,3.4], [1136,554,3.2], [561,556,1.6], [686,565,3], [602,570,3], [939,568,1.6], [974,572,2], [1010,575,1.6],
      [725,577,2], [1050,580,2.3], [639,581,3], [1093,582,1.6], [1228,584,3.2], [1135,584,1.6], [555,589,2], [676,593,2.3],
      [1559,598,3.4], [592,599,2.5], [951,599,2.3], [989,603,2.3], [1028,608,3], [1071,612,3.2], [1122,615,2.5], [1174,617,1.6],
      [1306,617,1.6], [1227,618,1.6], [1255,619,2], [912,623,1.6], [946,628,3], [985,633,2.3], [599,634,1.6], [1024,638,3.2],
      [1068,642,3], [1120,646,3.2], [1569,644,1.6], [1570,648,2.3], [1173,650,3.4], [1255,654,1.6], [941,657,2.3], [1307,656,1.6],
      [979,661,2], [981,663,2], [1021,667,2], [1067,673,2], [1119,677,2], [1173,682,1.6], [1307,695,2], [1309,697,2],
      [1098,707,1.6], [1160,713,1.6], [1634,750,2.3], [1646,809,2.5]
    ].map(([x, y, radius], index) => ({
      x, y, radius,
      frequency: .58 + (index % 13) * .085,
      phase: index * 2.39996
    }));

    function makeGlow(stops) {
      const sprite = document.createElement('canvas');
      sprite.width = sprite.height = 128;
      const paint = sprite.getContext('2d');
      const gradient = paint.createRadialGradient(64, 64, 0, 64, 64, 64);
      stops.forEach(([offset, color]) => gradient.addColorStop(offset, color));
      paint.fillStyle = gradient;
      paint.fillRect(0, 0, 128, 128);
      return sprite;
    }


      if (!atmosphere) return () => {};
      const lampGlow = makeGlow([[0, '#fff3c6'], [.27, '#ffbd69d9'], [.6, '#f37a3740'], [1, '#f37a3700']]);
      const lampShade = makeGlow([[0, '#171727'], [.4, '#332334be'], [1, '#33233400']]);
      const sunGlow = makeGlow([[0, '#ffe8b4'], [.37, '#ffd19583'], [1, '#ffd19500']]);
      const fogGlow = makeGlow([[0, '#8e9ed8a8'], [.4, '#778bc573'], [1, '#778bc500']]);

      function paintGlow(sprite, x, y, width, height, angle, opacity) {
        atmosphere.save();
        atmosphere.translate(x, y);
        atmosphere.rotate(angle);
        atmosphere.globalAlpha = opacity;
        atmosphere.drawImage(sprite, -width / 2, -height / 2, width, height);
        atmosphere.restore();
      }

      function paintWallLamps(time) {
        for (const {x, y, radius, frequency, phase} of wallLamps) {
          const pulse = Math.sin(time * frequency + phase);
          const bright = pulse >= 0;
          const size = radius * (bright ? 5.5 : 3.6);
          atmosphere.globalAlpha = Math.abs(pulse) * (bright ? .78 : .64);
          atmosphere.drawImage(bright ? lampGlow : lampShade, x - size/2, y - size/2, size, size);
        }
        atmosphere.globalAlpha = 1;
      }

      function paintTowerLight(time) {
        const sourceX = 925;
        const sourceY = 68;
        const motionTime = time * 1.3;
        const sway = Math.sin(motionTime * .24);
        paintGlow(sunGlow, sourceX + 22.4 * sway, 140, 580, 420, 0, .13 + .05 * Math.sin(time * .24));
        for (let i = 0; i < 4; i++) {
          const angle = .1 + i * .16 + .182 * Math.sin(motionTime * (.19 + i * .03) + i * 1.7);
          const reach = 230 + 25 * i;
          paintGlow(sunGlow,
            sourceX - Math.sin(angle) * reach,
            sourceY + Math.cos(angle) * reach,
            92 + i * 23, 580 + i * 44, angle,
            .17 + .09 * Math.sin(time * .43 + i * 1.13));
        }
      }

      function paintFloorMist(time) {
        const plumeCount = 5;
        const edgePadding = 380;
        const span = hallCanvas.width + 2 * edgePadding;
        for (let i = 0; i < plumeCount; i++) {
          // Wrap outside the image so a plume never jumps across the visible floor.
          const travel = time * 42 + i * span / plumeCount + 35 * Math.sin(time * .27 + i);
          const distance = travel % span;
          const x = hallCanvas.width + edgePadding - distance;
          const y = 716 + x * .104 + 13 * Math.sin(time * .28 + i);
          paintGlow(fogGlow, x, y, 730 - i * 35, 105 - i * 7, .116, (.27 + .07 * Math.sin(time * .5 + i)) * 1.25);
        }
      }


    const ash = Array.from({length: 86}, (_, i) => ({
      x: (i * 193 + 37) % hallCanvas.width,
      y: (i * 137 + 41) % hallCanvas.height,
      speed: 23 + i % 31,
      radius: 2 + i % 4,
      phase: i * 2.4
    }));
    function paintRuins(time, particleCount = ash.length) {
      atmosphere.save();
      for (let i=0;i<particleCount;i++) {
        const p=ash[i];
        const cinder = i % 3 !== 0;
        const travel = (p.y + time * p.speed) % (hallCanvas.height + 50);
        const y = cinder ? hallCanvas.height + 25 - travel : travel - 25;
        const x = p.x + 38 * Math.sin(time * .52 + p.phase);
        if (cinder) {
          paintGlow(lampGlow,x,y,p.radius*5,p.radius*3,-.6,.70);
        } else {
          atmosphere.save();
          atmosphere.translate(x,y);
          atmosphere.rotate(time*.5+p.phase);
          atmosphere.fillStyle = '#463546';
          atmosphere.beginPath();
          atmosphere.moveTo(-p.radius*1.6,-p.radius);
          atmosphere.lineTo(p.radius*1.4,-p.radius*.55);
          atmosphere.lineTo(p.radius*.35,p.radius*1.7);
          atmosphere.closePath();
          atmosphere.fill();
          atmosphere.restore();
        }
      }
      paintGlow(sunGlow,835,480,360,200,-.4,.17+.10*Math.sin(time*1.6));
      atmosphere.restore();
      paintFloorMist(time);
    }
    let visible=false, frame=0, previous=0;
    const calm=matchMedia('(prefers-reduced-motion: reduce)');
    function render(now) {
      frame=requestAnimationFrame(render);
      if(now-previous<32 || document.documentElement.hasAttribute('data-celestia-scrolling'))return;
      previous=now;
      const time=now/1000*(calm.matches ? .45 : 1);
      atmosphere.clearRect(0,0,hallCanvas.width,hallCanvas.height);
      if(hall.dataset.verdict==='win')paintRuins(time);
      else if(hall.dataset.verdict==='scarred'){paintTowerLight(time);paintRuins(time,12);}
      else if(hall.dataset.verdict==='fractured')paintRuins(time,52);
      else {paintWallLamps(time);paintTowerLight(time);paintFloorMist(time);}
    }
    function sync(){
      hall.toggleAttribute('data-motion-paused', !visible || document.hidden);
      if(visible && !document.hidden && !hall.querySelector('dialog[open]:not(.is-revealing)')){
        if(!frame)frame=requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(frame);frame=0;
        if(!visible) atmosphere.clearRect(0,0,hallCanvas.width,hallCanvas.height);
      }
    }
    new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();}).observe(hall);
    document.addEventListener('visibilitychange',sync);
    return sync;
  }
  const syncAtmosphere=setupVerdictAtmosphere(hall);
  const intact=art.getAttribute('src');
  const statNames=['โจมตี','คุ้มกัน','ขวัญกำลังใจ'];
  const encounters=[
    {name:'ผนึกปิดฟ้า',need:[20,17,16]},
    {name:'หอกแสงถล่มเมือง',need:[18,19,18]},
    {name:'คืนที่ระฆังไร้เสียง',need:[18,17,20]}
  ];
  let encounter;
  let renderPicker;
  const marks=[];
  let dialoguePartners;
  const node=(tag,text)=>{const el=document.createElement(tag);el.textContent=siteText(text);return el;};
  function button(label,handler,cls='relay-next'){
    const el=node('button',label);el.type='button';el.className=cls;el.onclick=handler;return el;
  }
  // Items of the same family share an ink drawing.
  const sketchByItem = {
    "ตุ๊กตาแม่ลูกดก": 133,
    "คมดาบน้ำแข็ง": 0,
    "คมดาบสายลม": 0,
    "คมน้ำแข็ง": 0,
    "คมอัสนี": 0,
    "ดาบเงาวารี": 0,
    "ดาบทหารรับจ้าง": 0,
    "Dull Blade ฟ้าประทาน": 0,
    "ดาบน้ำแข็ง": 0,
    "ดาบผ่าคลื่น": 0,
    "ดาบพิธีกรรม": 0,
    "ดาบพิรุณ": 0,
    "ดาบสายลม": 0,
    "ดาบแสงจันทร์": 0,
    "ดาบหิมะ": 0,
    "ดาบแห่งนิรันดร์": 0,
    "ดาบแห่งแสง": 0,
    "ขนนกจากต่างฟ้า": 1,
    "ขนนกเท็งงู": 1,
    "ขนนกนำทาง": 1,
    "ดอก Inteyvat": 2,
    "ระเบิด Dodoco": 3,
    "ใบโคลเวอร์นำโชค": 4,
    "ตุ๊กตา Baron Bunny": 5,
    "ลูกศรทราย": 6,
    "ลูกศรพฤกษา": 6,
    "ลูกศรเพลิง": 6,
    "ลูกศรยามค่ำ": 6,
    "ไวน์แห่งอิสรภาพ": 128,
    "หอกท้าประลอง": 7,
    "หอกน้ำแข็ง": 7,
    "Aedon ผู้เฝ้าแสงประภาคาร": 70,
    "หอกพิพากษา": 7,
    "หอกเพลิง": 7,
    "หอกวิญญาณ": 7,
    "ลูกชิ้นกุ้งเทพอสูร": 125,
    "หอกสะกดภูต": 7,
    "หอกหยก": 7,
    "หอกอัสนี": 7,
    "ธนูทัพ Watatsumi": 8,
    "ธนูนักล่า": 8,
    "หน้าไม้พลสำรวจ": 9,
    "เคียวจันทราแดง": 10,
    "ใบมีดโรลเลอร์": 11,
    "มีดเงา": 11,
    "มีดเชฟ": 11,
    "ดาบคู่ช่างตัดเสื้อ": 12,
    "ดาบคู่ลมเหนือ": 12,
    "ดาบคู่วารี": 12,
    "ดาบใหญ่": 13,
    "กระบองโอนิ": 14,
    "ปืนดวล": 15,
    "ปืนฟองน้ำ": 15,
    "ปืนลม": 15,
    "ร่มกันปืน": 15,
    "กระสุนปืนคาบศิลา": 16,
    "กระสุนผลึก": 16,
    "กระสุนวิญญาณ": 16,
    "แส้สายฟ้า": 17,
    "บูมเมอแรงใบไม้": 18,
    "ดาวกระจายนินจา": 19,
    "จรวดดอกไม้ไฟ": 20,
    "โล่จันทร์เสี้ยว": 21,
    "โล่อุ้งเท้าแมว": 21,
    "คมหอกเหมันต์": 132,
    "นวมจักรกล": 23,
    "หมัดพายุ": 23,
    "หมัดสายฟ้า": 23,
    "กรงเล็บเนโกะ": 24,
    "กรงเล็บสายฟ้า": 24,
    "คู่มือเจ้าหน้าที่พิทักษ์ป่า": 25,
    "ตำรากฎหมาย": 25,
    "ตำราค่ายกล": 25,
    "ตำราจักรกล": 25,
    "นิยายกำลังภายใน": 25,
    "นิยายจาก Yae Publishing House": 25,
    "บทละครโอเปรา": 25,
    "สมุดจัดงาน": 25,
    "สมุดแผนกลศึก": 25,
    "สมุดสืบสวน": 25,
    "หนังสือนิทาน": 25,
    "หนังสือภาษาศาสตร์": 25,
    "ม้วนข่าวกรอง": 26,
    "ยันต์ขับไล่ภูต": 26,
    "ยันต์คุ้มภัย": 26,
    "อักษรรูนแม่มด": 26,
    "แผนที่ทะเลทราย": 27,
    "แผนที่สำรวจ": 27,
    "แผนภูมิดวงดาว": 27,
    "แผนผังเมือง": 28,
    "พิมพ์เขียวที่พักพิง": 28,
    "เครื่องหมายหน่วย": 29,
    "ตรากองอัศวิน": 29,
    "ตรานักประลอง": 29,
    "ตรานักล่าแม่มด": 29,
    "โคมไฟประภาคาร": 32,
    "ข่าวกรองบ้านแสนอบอุ่น": 26,
    "ตรา Fortress of Meropide": 29,
    "ตราพิพากษา": 29,
    "เครื่องรางคุ้มครอง": 30,
    "เครื่องรางเดินทาง": 30,
    "เครื่องรางสิงโต": 30,
    "ธงกองเรือ": 31,
    "ธงกองสำรวจ": 31,
    "ธงงิ้ว": 31,
    "ธงแม่ทัพ": 31,
    "คำอธิษฐานจันทรา": 127,
    "โคมไฟนำทาง": 32,
    "โคมวิญญาณ": 32,
    "ตะเกียงผู้เฝ้าสุสาน": 32,
    "ตะเกียงรุ่งอรุณ": 32,
    "ตะเกียงจินน์": 33,
    "เปลวไฟศักดิ์สิทธิ์": 34,
    "ระฆังวิหาร": 35,
    "พิณนักกวี": 36,
    "กีตาร์ไฟ": 37,
    "กลองเชิดสิงโต": 38,
    "กลองร็อก": 38,
    "โน้ตเพลงประสานเสียง": 39,
    "กล่องเพลงจันทรา": 40,
    "ฮัมร้องคืนเต็มดวง": 39,
    "เครื่องผสมเสียง": 40,
    "ไพ่กล": 41,
    "ไพ่ Genius Invokation TCG": 41,
    "ลูกเต๋าหยก": 42,
    "ฉากหยก": 43,
    "ทวนละครเวที": 43,
    "เวทีสายน้ำ": 43,
    "หมวกนักมายากล": 44,
    "หมวกแม่มด": 44,
    "หมวกนักดำน้ำ": 45,
    "หมวกพเนจร": 45,
    "หน้ากากนักมวยปล้ำ": 46,
    "หน้ากากยักษา": 46,
    "หัวสิงโตวูซู": 46,
    "พัดแห่งฝัน": 47,
    "ตะกร้าผลไม้": 48,
    "ตะกร้าสาน": 48,
    "ถ้วยชาของเจ้าสำนัก": 49,
    "นิ้วเพชรแมวมายา": 136,
    "ถุง Mora": 50,
    "ห่อยาสมุนไพร": 50,
    "กล่องเครื่องมือ": 51,
    "เครื่องมือสำรวจ": 51,
    "อุปกรณ์ฝึกกำลัง": 51,
    "กล่องพัสดุ": 52,
    "ขวดเครื่องดื่มเย็น": 53,
    "ขวดทดลอง": 53,
    "ขวดน้ำหอม": 54,
    "หม้อซุป Wanmin Restaurant": 55,
    "หม้อปรุงอาหาร": 55,
    "เหยือกน้ำโอเอซิส": 56,
    "หยดน้ำค้าง": 57,
    "หยดน้ำแห่งพร": 57,
    "ดาบวงแหวนไฟ": 58,
    "วงล้อเพลิง": 58,
    "วงแหวนน้ำ": 58,
    "วงแหวนลม": 58,
    "วงแหวน Naku Weed": 58,
    "วงแหวนหวาย": 58,
    "ดาวตก": 59,
    "ดาวราตรี": 59,
    "ประกายไฟฟ้า": 60,
    "ประกายอัสนี": 60,
    "คมเกล็ดหิมะ": 61,
    "ม่านเกล็ดหิมะ": 61,
    "ลูกศรเกล็ดหิมะ": 61,
    "สะพานน้ำแข็ง": 61,
    "เกล็ดผลึก": 62,
    "ผลึกหิน": 62,
    "อัญมณีดาว": 62,
    "ใบเมเปิล": 63,
    "กุหลาบสายฟ้า": 64,
    "เกราะกุหลาบ": 64,
    "ดอกไม้กลั่นกลิ่น": 64,
    "ดอกไม้แปรธาตุ": 64,
    "ดอกบัวน้ำแข็ง": 65,
    "ดอกบัวโรงละคร": 65,
    "เมล็ดผัก": 66,
    "เมล็ดพันธุ์ปัญญา": 66,
    "กิ่งซากุระสายฟ้า": 67,
    "นิมิตพฤกษา Aranara": 130,
    "ผีเสื้อพเนจร": 68,
    "ผีเสื้อลมแปรธาตุ": 68,
    "หอกผีเสื้อ": 68,
    "ปีกของ Oz": 69,
    "ปีกมังกรเพลิง": 69,
    "กลไกกระเรียน": 70,
    "พัดกระเรียน": 70,
    "เหยี่ยวเพลิง": 70,
    "สรรพสัตว์แดนเหนือ": 120,
    "เขี้ยว Changsheng": 72,
    "ดาบเขี้ยวสิงโต": 72,
    "รอยเท้าร่ายรำ": 73,
    "ตุ๊กตา Tamoto": 74,
    "ตุ๊กตา Yuegui": 74,
    "กลไกพายุ": 75,
    "กลไกลม": 75,
    "ชิ้นส่วนหุ่นกล": 75,
    "แขนกล": 76,
    "แขนจักรกล": 76,
    "หุ่น Birgitta": 77,
    "ของเล่นให้ Teucer": 78,
    "ภาพ Ajaw": 78,
    "กล้อง Monsieur Verite": 79,
    "ภาพข่าวแนวหน้า": 79,
    "กระจกสลักแสง": 80,
    "กับดักเยือกแข็ง": 81,
    "บังเหียนบิน": 126,
    "สายไหมวารี": 82,
    "เชือกแดงผนึกวิญญาณ": 83,
    "ผ้าพันแผลนักผจญภัย": 84,
    "กระเป๋าสัตวแพทย์": 85,
    "ชุดปฐมพยาบาล": 85,
    "นกหวีดหน่วยลาดตระเวน": 86,
    "ผ้าคลุมระบำ": 88,
    "ม่านดาวหลับใหล": 88,
    "ม่านธารน้ำ": 88,
    "ม่านแสงจันทร์": 88,
    "ม่านแสงหยก": 88,
    "ว่าวเหินฟ้า": 89,
    "สว่าน Turbo Twirly": 90,
    "ลูกบอลชายหาด": 91,
    "กระดานฉลาม": 92,
    "วัว Ushi": 93,
    "เพนกวิน Pers": 94,
    "พริกของ Guoba": 95,
    "หัวไชเท้าลูกขาว": 96,
    "ขนมบำบัดฝัน": 97,
    "ลิฟต์หิน": 98,
    "เสาหินหยก": 98,
    "เงาไม้กางเขน": 100,
    "ดวงตาของ Oz": 101,
    "ปิ่นสายฟ้า": 102,
    "แมงกะพรุนน้ำ": 103,
    "หมอน Itzpapa": 104,
    "ตุ๊กตา Cuilein-Anbar": 106,
    "ตุ๊กตา Muji-Muji Daruma": 108,
    "เมล็ดแดนดิไลออน": 113,
    "ตะขอเกี่ยว": 115,
    "กล่องแมววิเศษ": 116,
    "ดอกไม้ไฟงานเทศกาล": 117,
    "ถุงมือทำงาน": 118,
    "กระเป๋า Mehrak": 119,
    "รอยเท้าฝูงหมาป่า": 120,
    "ตรามิตสึโดโมเอะ": 122,
    "วงดาวสะท้อนน้ำ": 123,
    "เครื่องกำเนิดน้ำ": 124,
    "บทเพลงแห่งเสรีภาพ": 26,
    "กระเป๋าเงินที่ปรึกษา": 129,
    "เสน่ห์อาหารพิษ": 135,
    "ฝันตลกไม่รู้จบ": 25,
    "ทำนองสิ้นหวัง": 134,
    "โลกันล้อเดียว": 131,
  };
  // Ink outlines in a 32-unit sketchbook grid, indexed by sketchByItem.
  const inkDrawings = [
    'M5 27l6-8m-4-3 9 7m-6-6L24 5l4-2-1 6-14 12m1-6 9-8', // sword
    'M5 29Q10 15 26 3q2 8-3 13l-5 1 3 2q-6 6-13 5m3-4 10-10', // feather
    'M16 24Q5 23 5 13l8 4Q8 10 11 5l6 9 5-11q4 7-1 14l8-6q0 11-13 13v5', // lily
    'M8 16Q4 3 8 3q4 0 6 10m3-1q0-10 4-10 4 3 0 12m-7-1q12-2 13 8 0 8-11 8Q4 29 5 21q0-5 9-8m-3 8h1m6-1h1m-5 3 2 1 2-2', // bunny bomb
    'M16 17C1 16 4 5 11 9c0-10 12-9 10 2 11-6 13 7 0 8 7 10-3 14-6 4-7 8-15-1-1-6m2 1q-1 8-7 12', // clover
    'M8 18Q3 3 7 2q4 0 6 12m4 0q2-12 6-12 3 3-2 13 9 9 1 13-10 5-16-3-2-4 2-7m3 3h1m6-1h1m-6 4 3 1 2-2', // rabbit
    'M4 28 25 6m-8 2 11-5-4 11-2-5Zm-9 10-5 1-3 6 6-2 2-5', // arrow
    'M5 29 21 11m-4 1L27 2l-3 13-7-3m1 4 4 2', // spear
    'M5 26Q5 10 26 4L5 26Zm0-1Q12 13 24 6m-9 10 11 8', // bow
    'M5 28 24 6m-18 4q13 0 19 16L6 10Zm6 9 3 3', // crossbow
    'M5 29 20 7m-6-2q12-5 15 12-6-7-16-8', // scythe
    'M5 27l7-9m-4-2 8 6m-5-6q10-3 16-13 2 11-12 17', // knife
    'M4 28 23 6l3-2-1 5-14 15m-4-5 7 6m11 3L8 9 5 4l6 3 14 16m-4 2 7-6', // twin blades
    'M4 29l6-8m-3-5 10 8m-7-6L22 4l7-2-1 9-13 11m1-7 9-9', // greatsword
    'M5 28l7-11q2-8 10-13 5-3 6 3 0 7-12 14L8 30Zm14-15 3-4', // club
    'M4 12l23-4 1 6-13 2-5 11-6-1 5-11-4 1Zm10 4q4 6 6-1', // pistol
    'M6 22 19 8q5-5 9-5 0 5-5 10L11 27Zm-2 1 7 6m4-17 6 5', // bullet
    'M3 28l8-8c-6-14 16-22 17-9 0 8-13 11-10 4 1-2 3-2 4-2', // whip
    'M4 8q1-3 4-2l10 9 11-2q4 2-1 4l-13 5Z', // boomerang
    'M16 2l4 10 10 3-10 5-5 10-3-11-10-4 11-4Zm-1 12 3 1-2 3-2-2Z', // shuriken
    'M5 27l9-12m-4-2 9-9 8 6-9 10Zm8-9 9-2 1 8m-17 8-5 1 3-6m8 6-2 6 5-4', // rocket
    'M5 7q7 1 11-4 5 4 11 4 0 15-11 22Q5 23 5 7Zm4 3q5 0 7-3v17', // shield
    'M8 5l5-2q3 5 7 0l5 2 3 8-5 1-1 13-14-1-1-12-5-2Zm5 7 4 3 5-4', // armor
    'M7 20l-2-7q0-4 4-2l1-6q2-3 4 1 3-5 5 0 4-3 5 2 4-1 3 5l-2 8-4 3v5l-12-1v-6Zm3-9 2 6 7-3', // fist
    'M4 25q8-8 10-20 4 10-6 22m6-3q7-8 8-18 4 9-5 20m5-2q4-5 6-12', // claw
    'M3 7q8-3 13 2 7-5 13-3l-1 19q-7-2-12 2-6-4-13-2Zm13 3v14m-9-12 5 1m8-1 5-1', // book
    'M6 6q0-4 5-3l15 1q4 1 2 6h-6l-2 15q-1 5-6 4L4 27q-4-1-2-6l7 1 2-16q0-3-3-3m5 11 6 1m-7 3 5 1', // scroll
    'M3 7l9-3 9 3 8-4-1 22-8 4-9-4-8 3Zm9-1-1 17m10-15-1 18m-14-8 3-4 6 3 8-6', // map
    'M4 5l24 1-1 22-24-2Zm4 5h15v12h-7v-5H8Zm7 1v5', // blueprint
    'M6 22l3-5 5-1q-6-10 1-12 7-1 5 7l-2 5 6 2 2 5Zm-1 3 21 1', // seal
    'M15 9q-6-8 0-8 7 1 3 8l8 8-10 11L6 18Zm1 4 5 4-5 6-5-5Zm0 14v4', // charm
    'M6 29 8 3m0 3q6-5 12-1l8-1-4 7 4 4q-6 4-13 0l-8 2', // flag
    'M11 8q-2-6 4-6 7 0 6 6M5 12l11-5 11 5-3 2-2 12-12 1-3-14Zm4 2 14-1m-12 13-3 3 17-1-3-3m-7-2q-4-2 1-9 0 4 3 6 0 3-4 3', // lantern
    'M3 16q7 4 11-1l1-4h6l2 5q6-1 6 3-1 4-7 3-6 7-13-1Zm11 10-3 3h12l-4-4m-4-17q-4-3 1-7', // lamp
    'M16 29C1 26 4 16 11 11q-1 5 2 6 5-7 4-15 11 9 9 17l3-4q1 11-13 14Zm0-3q-5-4 1-11 0 5 3 7', // flame
    'M5 23q5-3 5-12 1-7 8-6 6 1 6 9l3 8Zm8 3q4 6 7-1M16 5V2', // bell
    'M8 4q-8 19 7 23 16-3 10-24l-4 2q5 15-5 18Q6 21 11 6Zm3 4 10-1m-8 1v12m4-12v13', // lyre
    'M16 15 24 4l4 2-9 12q5 5 1 9-6 6-13 0-6-7 2-12 2-1 7 0Zm-3 4q-4 2-1 4 4 1 4-3Z', // guitar
    'M4 12q1-7 13-7 13 0 12 6-2 7-16 6-9-1-9-5Zm0 1 2 11q9 8 21-1l2-11M8 16l4 8 4-7 5 7 4-9', // drum
    'M10 23V8l15-4v15m-15 3q-5-3-7 2-1 5 4 4 4-1 3-6Zm15-4q-6-2-7 3 1 4 5 2 3-1 2-5Zm-14-7 13-4', // notes
    'M5 18l10-5 13 4-9 5Zm0 1 1 7 13 4 9-7v-6m-9 5v8M6 16 3 7l13-5 5 10m-10-3 4-2', // musicbox
    'M5 6l17-3 5 23-18 3Zm9 5 5 4-3 6-5-4Z', // card
    'M3 10l12-6 14 5-2 15-12 5-12-6Zm0 0 13 6 13-7m-13 7-1 13m-8-14 1 1m2 4 1 1m10-3 1 1m-7-11 1 1', // dice
    'M3 5h26v23l-6-2-1-10q-5-2-6-9-2 7-7 10l-1 9-5 2Zm3 2 3 7m15-7-2 6', // stage
    'M2 24q8-3 10-8l6-13 7 4-6 1 4 11 7 3q-10 8-28 2Zm9-7q5 4 12 1', // witch hat
    'M2 22l7-4 4-11q5-3 8 0l5 11 4 3q-11 7-28 1Zm7-4q8 3 17 0', // hat
    'M4 8l7 2 5-5 6 5 7-3-3 13-10 9L6 21Zm4 6 6 2-2 3Zm11 2 6-3-3 6Zm-6 8 3-2 4 1', // mask
    'M16 28 2 12Q15-5 30 12Zm0-3L8 10m8 14V7m2 17 6-14', // fan
    'M3 16l25-1-4 12-16 1Zm5-1Q15-8 24 15M8 20l16-1m-14-3 3 10m6-11-2 12', // basket
    'M4 12h19l-2 9q-8 8-15-1Zm19 1q9-3 5 4l-6 2M4 26q9 4 21-1M12 9q-4-3 1-7', // cup
    'M10 3l6 3 7-3-4 8q14 13 4 17-8 3-16-1-8-5 6-16Zm1 9 11-2', // pouch
    'M3 11l26-1v16l-26 1Zm7-1 1-5h10l1 5M4 17h24m-15-2h5v5h-5Z', // toolbox
    'M3 10l12-6 14 5-1 16-12 5-13-6Zm0 0 13 6 13-7m-13 7v14M9 7l14 6v6', // parcel
    'M12 3h8v3h-1v6q10 12 4 15-8 5-16 0-4-4 6-15V6h-1Zm-3 17q7-3 14 0', // bottle
    'M12 3h8v5h-8Zm2 5v4q-12 2-9 12 2 6 12 5 12 0 11-9-1-7-10-8V8m-8 11q5-5 12 0-5 7-12 0', // perfume
    'M5 13h22l-2 10q-2 6-10 5-9-1-10-15Zm-2-2q12-10 26 0Zm11-6q0-4 4-2l1 2M4 16H1m26-1h4', // pot
    'M9 4h13l-4 6q11 11 4 17-8 6-15-2-3-6 6-15Zm12 8q11-2 6 7l-4 2', // jar
    'M16 2Q13 10 7 17 1 27 14 29q12 2 12-9-1-7-10-18Zm-7 18q-1 5 4 6', // drop
    'M4 17Q6 4 19 5q14 1 9 14-5 11-17 9-9-2-7-11Zm5 0q-1 8 7 7 9-1 9-10-1-7-9-5-6 2-7 8', // ring
    'M16 2l4 10 10 2-8 7 1 9-8-6-10 5 3-10-7-7 11-1Z', // star
    'M17 2 6 18h9l-4 13 16-20-10 1Z', // bolt
    'M16 2v28M4 9l24 14M4 23 28 9M12 5l4 4 4-4M7 14l4-1-1-5m13 11 3-1', // snow
    'M3 14l8-9 12-1 7 10-15 15Zm0 0h26M11 6l4 22 7-23', // crystal
    'M4 29 18 15m-6 5L3 12l7 1-1-9 7 7 5-10 1 12 8-2-6 8 4 2-15 3Z', // leaf
    'M14 13C4 4 0 16 11 18 0 24 12 32 16 21c3 12 16 5 7-3 12-1 6-14-3-8 1-11-11-8-6 3Zm0 3q4-4 6 0-1 6-6 3Z', // flower
    'M3 14q6 0 9 4l4-14 6 13 8-6q-1 12-14 16Q5 23 3 14Zm6-6 5 7m9-1 2-9', // lotus
    'M4 23Q5 14 15 9q3 11-5 16-5 3-6-2Zm14-6q1-9 9-13 3 10-4 14-5 3-5-1', // seeds
    'M5 29 23 6m-10 13q-10-1-9-9 9 1 9 9Zm4-6q0-9 5-11 3 6-5 11Zm-1 4q7-8 14-5-4 8-14 5', // branch
    'M15 16Q5-2 2 9q-1 8 9 11-10 0-5 7 4 4 10-7 5 11 10 6 4-6-5-7 12-6 7-13-5-6-12 10Zm0 1 1 8m0-11-3-5m4 5 3-5', // butterfly
    'M4 26Q8 11 29 3l-4 10-7 3 5 1-5 5-6 1 2 2q-6 4-10 1Zm3-3 14-13', // wing
    'M2 5q7 3 13 12l4-4 4 1 5 3-6 1-2 4 7 3-5 1-4-2 2 5-6-5-5 5-1-3 4-7Q4 17 2 5Zm3 5 6 6-2-5 5 6m5-2h1M20 12l8-9q2 8-5 11', // eagle
    'M6 29q11-8 9-26m-1 15q-8-1-9-9m10 4q9-1 10-10m-3 8 7-2M9 18l-7-4', // antler
    'M8 5q10-4 17 2-1 16-18 23 8-14 1-25Zm3 3 10 1', // fang
    'M7 21q5-10 9-8 6 1 10 11-2 6-10 2-10 4-9-5Zm-4-9q1-5 4-1 2 6-1 6-3-1-3-5Zm7-6q3-6 5 1 0 6-3 5Zm8-1q4-4 5 1 0 7-4 6Zm7 7q3-5 5-2 0 6-4 7Z', // paw
    'M6 15 5 4l8 6 7-1 7-6-1 13q7 11-7 13Q2 31 5 18Zm4 4h2m7-1h2m-8 5 3 2 3-2', // cat
    'M12 4l6-1 2 5 5-1 4 5-3 4 2 5-5 4-5-1-3 5-5-2-1-5-6-2 1-6 5-2-1-5Zm0 12q0-6 6-5 6 2 3 8-5 6-9-3', // gear
    'M4 25l6-8 3-1 6-9-1-4 4-2 1 5 4-2 1 4-5 3-6 11-5 1-4 6Zm7-5 4 2m2-6 4-6', // arm
    'M5 10l21-1 1 14-21 1Zm11-1V4l3-2M9 15h3m7-1h3m-10 6 8-1m-9 5-1 4m12-5 2 5', // robot
    'M8 12q-3-8 5-7 7-5 11 2 4 7-4 10l5 8-5 3-4-5-5 5-4-4 5-8Zm5-2h1m5-1h1', // toy
    'M3 10l6-1 2-4h10l2 4h5l1 17-26 1Zm8 7q1-7 7-5 7 2 4 8-5 7-11-1Zm-5-4h2', // camera
    'M9 25l-4 5-2-2 6-8Q4 12 13 5q9-7 14 1 5 9-5 16-7 5-13-1Zm4-12 7-6m-6 11 9-9', // mirror
    'M3 12l5 4 2-7 5 6 4-8 3 7 7-3q-3 15-15 14Q5 24 3 12Zm3 13 20-4', // trap
    'M7 27C-1 20 9 4 18 4c12-2 13 13 3 18-8 2-11-6-6-11 4-4 10-1 8 4m-9 3L4 30', // reins
    'M3 26q11-3 16-17 1-9-6-5-6 4-3 12 6 14 14 7 5-7-5-9-10 0-7 7l15 8', // cord
    'M3 20 20 3q2-2 4 0l5 6-18 20q-2 1-4-1l-4-5Zm8-4 6-6 6 6-6 6Zm-4 6 2 2m13-17 2 2', // bandage
    'M3 10l26-1v18l-25 1Zm7-1V5l11-1v5m-7 4h4v4h4v4h-4v4h-4v-4h-4v-4h4Z', // medical
    'M3 12l15-3 2 3 9-1-1 6-8 1q-2 9-11 8-9-2-6-14Zm3 6q1-4 5-2 4 3 0 5-4 2-5-3', // whistle
    'M16 2v16q0 9-7 7-5-2-3-9l4 4m7-16q8 4 6 10', // hook
    'M5 5q11 5 20-2-4 12 4 21-9-3-14 2-4 3-12 1Q9 15 5 5Zm4 17q6-6 12-5', // veil
    'M15 2 29 12 14 24 3 12Zm0 0-1 22m-10-12h23m-13 13q7 6 12 3', // kite
    'M4 10l14-5 7 7-7 7-7-1-2 9-6-1 4-12Zm20 3 6-1-6 6', // drill
    'M4 15Q5 3 17 3q13 1 12 14-1 13-15 12Q3 27 4 15Zm1-3q9 5 12-8m-2 13q9-5 13-1m-16 2q-1 6 4 10', // ball
    'M3 28Q4 10 27 3q4 16-15 23Zm8-9 8-8m1 7-2-8 7 2', // surfboard
    'M8 10Q2 10 3 3l7 5q6-4 13 0l6-6q2 8-4 10l-1 10q-8 11-16 1Zm1 10q7-5 15-1m-12-6h1m7-1h1', // cow
    'M8 16Q7 4 16 3q8 0 9 13l5 7-6-2q-2 8-8 7-9 0-9-7l-5 3Zm4-2 4 3 4-3m-9 4q-3 8 5 8m-6 2-4 2m14-2 5 2', // penguin
    'M4 24q15-2 16-14 4-6 8-1 4 11-10 17-9 4-14-2Zm17-16q4-2 3-6', // chili
    'M7 26Q4 16 14 11q9-4 10 5-1 8-17 10l-4 4m17-19q-4-6 0-10l3 7 6-5-3 8m-13 8 4 2', // radish
    'M3 23l4-12 12-6 10 8-1 11-15 5Zm4-12 9 6 12-4m-12 4-3 12m-8-8 9 4 13-5', // pastry
    'M8 28v-3l3-2V8L7 6V3l19 1-1 4-4 1-1 15 4 1v4Zm6-17-1 10m5-12-1 12', // pillar
    'M2 16Q12-4 26 8l4 7q-5-2-8 1-4-3-9 1-4-3-11-1Zm14 0-1 10q-2 6-6 1m6-24 1-2', // umbrella
    'M13 3h6v8h8v5h-8v13h-6V16H5v-5h8Z', // cross
    'M2 16Q16-2 30 15 15 32 2 16Zm9-1q0-7 6-6 7 1 6 7-2 8-9 6-4-2-3-7Zm6-4v8', // raven eye
    'M4 30 21 9m-8 4 7 5m0-15 8 2-5 6-6-2Z', // hairpin
    'M3 17Q5 3 15 3q11-2 14 14-5-3-9 1-4-3-7 0-5-4-10-1Zm5 2q3 3-1 9m7-9q4 5-1 11m7-11q-2 5 4 9', // jellyfish
    'M4 4q11 4 24-1-3 12 1 24-11-3-25 1 3-11 0-24Zm9 9 4-5 1 5 5 2-5 3-3 5-1-5-5-3Z', // pillow
    'M8 18Q3 3 7 2q4 0 6 12m4 0q2-12 6-12 3 3-2 13 9 9 1 13-10 5-16-3-2-4 2-7m3 3h1m6-1h1m-6 4 3 1 2-2M4 29l5-2', // radish rabbit
    'M6 15 5 4l8 6 7-1 7-6-1 13q7 11-7 13Q2 31 5 18Zm4 4h2m7-1h2m-8 5 3 2 3-2M11 10l5 4 6-5', // forest doll
    'M8 18Q3 3 7 2q4 0 6 12m4 0q2-12 6-12 3 3-2 13 9 9 1 13-10 5-16-3-2-4 2-7m3 3h1m6-1h1m-6 4 3 1 2-2', // rabbit doll
    'M6 15 5 4l8 6 7-1 7-6-1 13q7 11-7 13Q2 31 5 18Zm4 4h2m7-1h2m-8 5 3 2 3-2M8 16l6 1-3 4Zm10 1 6-2-3 5Z', // tanuki
    'M8 11q-1-10 9-9 11 0 9 11l-7 4 6 5 2 7-21-1 3-9 5-3Zm2-3 13-1M12 19l6 6 4-6m-14 5 13 1', // puppet
    'M2 17q12-15 28-3v5q-17-5-28 4Zm3 6v5m21-9v7M6 15V9m7 2V6m8 4V5m6 7V8', // bridge
    'M3 7l24-2 2 21-25 2Zm5 6v10m7-13v13m7-14v12m-16-5h5m2 2h5m2-6h5', // mixer
    'M4 8l7 2 5-5 6 5 7-3-3 13-10 9L6 21Zm4 6 6 2-2 3Zm11 2 6-3-3 6Zm-6 8 3-2 4 1', // headdress
    'M7 30q11-10 11-19m0 3L10 6m8 8-2-11m2 10 6-9m-7 10 12-4m-11 4L6 11m2-7 4 3m1-5 5 1m5-1 3 3m1 2 3 4', // dandelion
    'M3 8l8-4 11 3 7-4v23l-7 3-11-4-8 4Zm8-4v21M22 7v21M5 19l4-5m4 4 5-6 3 4', // jade screen
    'M16 2v16q0 9-7 7-5-2-3-9l4 4m7-16q8 4 6 10', // catch hook
    'M3 10l12-6 14 5-1 16-12 5-13-6Zm0 0 13 6 13-7m-13 7v14M9 7l14 6v6M7 9 6 2l7 4m6-1 6-4-1 6', // cat box
    'M5 30 18 13m-2-4-4-5m8 5 2-7m2 9 6-4m-6 7 7 2m-10 2 3 6m-11-11-8-2m9 6-6 3', // sparkler
    'M7 20l-2-7q0-4 4-2l1-6q2-3 4 1 3-5 5 0 4-3 5 2 4-1 3 5l-2 8-4 3v5l-12-1v-6Zm3-9 2 6 7-3', // glove
    'M3 11l26-1v16l-26 1Zm7-1 1-5h10l1 5M4 17h24m-15-2h5v5h-5ZM8 20l3 2 2-3m5 0 3 2 2-3', // suitcase
    'M7 21q5-10 9-8 6 1 10 11-2 6-10 2-10 4-9-5Zm-4-9q1-5 4-1 2 6-1 6-3-1-3-5Zm7-6q3-6 5 1 0 6-3 5Zm8-1q4-4 5 1 0 7-4 6Zm7 7q3-5 5-2 0 6-4 7Z', // wolf paw
    'M2 17l12-7 16 4-13 8Zm0 1 2 6 13 5 12-9 1-6m-13 8v6m-4-18 4-5 5 6', // platform
    'M3 16Q4 3 17 3q13 1 12 14-2 14-16 12Q3 26 3 16Zm12-9q-7 6-1 9 5 1 3-4-3-2-2-5Zm9 9q0 8-7 7 0-5 4-4Zm-15 0q-3 6 3 8l2-3q-4 0-5-5', // triple seal
    'M3 17q0-13 14-14 13 2 12 14-2 13-15 12Q3 27 3 17Zm3 8L24 6m-13 14 4-10 6 2-4 9Zm2 8-4 2h17l-6-3', // astrolabe
    'M12 4l6-1 2 5 5-1 4 5-3 4 2 5-5 4-5-1-3 5-5-2-1-5-6-2 1-6 5-2-1-5Zm0 12q0-6 6-5 6 2 3 8-5 6-9-3M16 12l-2 5q2 3 4 0Z', // generator
    'M6 19l5-5 6 1 4 5-2 6-5 4-6-2-4-4 2-5ZM11 18l-2 5 4 3m4-7 1 2-2 2M11 11l10-9m-3 12L30 2m-7 17 7-7', // meteor
    'M4 21l7-4 1-4 13-6 5 1-3 6-12 6-4 7H7l2-7m4-3 12-6m-5-2-4-3-4 2 3 4M3 13l5-3M2 27l3-1m11 0 5-3', // flying gun
    'M17 4A12 12 0 1 0 28 20 10 10 0 0 1 17 4ZM24 4v8m-4-4h8m1 5v4m-2-2h4', // crescent and stars
    'M13 2h6v4h-1v6q0 2 3 4 2 1 2 4v9H9v-9q0-3 2-4 3-2 3-4V6h-1Zm1 4h4M9 20h14M9 26h14m-9-3h4', // wine bottle
    'M10 4q6 3 12 0l-2 7q9 6 9 13 0 6-13 6T3 24q0-7 9-13Zm2 7h8m-4 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2v4', // The Consultant’s Mora Pouch
    'M16 11q-1-6-7-8m7 8q1-9 10-9-1 7-10 9Zm-1 0q-9-1-11 7-3 8 5 10l2 2m6-2q7 2 10-3 2-5-3-9-3-4-9-5Zm-8 9v1m10-1v1m-8 4q3 2 6 0', // Aranara Grove Vision
    'M10 17a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 6 8-10 8 6h4m-12-6 4-6h5m-5 0-2-3M7 12h8l7 10m2 1 3 1m-3 3 2 2M2 13l3-3-3-1 3-4', // One-Wheeled Inferno
    'M4 29 20 13m-2-3 11-7-7 12-4-1Zm-2 7 4 4m-7-1 4 4m-7-1 4 4M8 7v8M4 11h8m-7-3 6 6m0-6-6 6', // Winter’s Spearpoint
    'M10 13a6 6 0 1 1 12 0q7 7 5 14-1 3-11 3T5 27q-2-7 5-14Zm0-2q6-6 12 0m-8 1v1m4-1v1m-4 2q2 2 4 0m-2 3v9m-4-7 8 5m0-5-8 5', // Anastasya’s Nesting Dolls
    'M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26ZM8 11l5-2m6 0 5 2m-13 3v2m10-2v2m-5 2a3 4 0 1 0 0 8 3 4 0 0 0 0-8Z', // Melody of Despair
    'M3 21h26q-2 8-13 8T3 21Zm5-3q0-4 2-5-1-2-1-4 0-5 7-5t7 5q0 2-1 4 2 1 2 5Zm5-8v1m6-1v1m-5 3h4m-2 0v3', // Poisoned Delicacy
    'M12 30v-3L5 20q-2-2 0-4 2-1 4 1l3 3V6a2.5 2.5 0 0 1 5 0v7q3-2 5 1 3-1 5 2 3 0 3 3v3q0 4-3 6v2Zm10-16v4m5-2v4M23 5h6m-3-3v6', // Pointing hand with a spark
  ];
  function itemDrawing(label) {
    const ns = 'http://www.w3.org/2000/svg';
    const icon = document.createElementNS(ns, 'svg');
    icon.classList.add('item-sketch');
    icon.setAttribute('viewBox', '-3 -3 38 38');
    icon.setAttribute('aria-hidden', 'true');
    const ink = document.createElementNS(ns, 'path');
    ink.setAttribute('d', inkDrawings[sketchByItem[label]]);
    icon.append(ink);
    return icon;
  }
  function redraw(){
    orbit.replaceChildren();
    gnoses.forEach((g,i)=>{
      const point=node('span','');
      const angle=i*Math.PI*2/7-Math.PI/2;
      point.className='globe-point';
      point.style.left=(50+41*Math.cos(angle))+'%';
      point.style.top=(50+41*Math.sin(angle))+'%';
      point.style.setProperty('--tone',g.color);
      const mark = marks.find(m => m.person === g);
      if (mark) {
        point.classList.add('active');
        point.title = [g.name, mark.artist.name, siteText(mark.pick.label)].join(' · ');
        point.setAttribute('role', 'img');
        point.setAttribute('aria-label', point.title);
        const elementIcon = new Image();
        elementIcon.className = 'globe-element';
        elementIcon.src = 'assets/characters/element-' + mark.artist.element + '.webp';
        elementIcon.alt = '';
        const portrait = new Image();
        portrait.className = 'globe-portrait';
        portrait.src = 'assets/characters/' + mark.artist.icon + '.webp';
        portrait.alt = '';
        const badges = node('span', '');
        badges.className = 'globe-badges';
        badges.append(portrait, elementIcon);
        point.append(itemDrawing(mark.pick.label), badges);
      }
      orbit.append(point);
    });
    history.replaceChildren(...marks.map(({artist,pick})=>node('li',artist.name+' · '+siteText(pick.label))));
  }
  function panel(step,title){
    status.textContent=step;heading.textContent=siteText(title);body.replaceChildren();
    if (!document.activeElement.closest('.site-language')) heading.focus({preventScroll:true});
  }
  function totals(){
    return statNames.map((_,i)=>marks.reduce((sum,mark)=>sum+mark.pick.stats[i],0));
  }
  const picker=document.querySelector('#relay-picker');
  // Native overlay scrollbars disappear on phones, so retain a visible position indicator.
  const scrollRail = document.createElement('span');
  scrollRail.className = 'relay-scroll-rail';
  scrollRail.setAttribute('aria-hidden', 'true');
  const scrollThumb = document.createElement('span');
  scrollRail.append(scrollThumb);
  picker.append(scrollRail);
  function updatePickerScroll() {
    const overflow = picker.scrollHeight - picker.clientHeight;
    scrollRail.hidden = !picker.open || overflow <= 1;
    if (scrollRail.hidden) return;
    const rect = picker.getBoundingClientRect();
    const trackHeight = Math.max(0, picker.clientHeight - 40);
    const thumbHeight = Math.min(trackHeight, Math.max(32, trackHeight * picker.clientHeight / picker.scrollHeight));
    scrollRail.style.cssText = `left:${rect.right - 12}px;top:${rect.top + 20}px;height:${trackHeight}px`;
    scrollThumb.style.height = thumbHeight + 'px';
    scrollThumb.style.transform = `translateY(${Math.min(1, Math.max(0, picker.scrollTop / overflow)) * (trackHeight - thumbHeight)}px)`;
  }
  picker.addEventListener('scroll', updatePickerScroll, {passive:true});
  picker.addEventListener('close', updatePickerScroll);
  new ResizeObserver(updatePickerScroll).observe(picker);
  new ResizeObserver(updatePickerScroll).observe(game);
  const triggers=[...hall.querySelectorAll('.gnosis-trigger')];
  const progressRow=hall.querySelector('.council-seats');
  const seatOrder=[7,8,4,3,2,1,5];
  function refreshHall(){
    hall.querySelector('.council-count').textContent=siteFormat('เลือกแล้ว {0} / 7 ธาตุ', '{0} / 7 elements selected', marks.length);
    progressRow.replaceChildren();
    for(const id of seatOrder){
      const mark=marks.find(m=>m.artist.element===id);
      const trigger=triggers.find(t=>Number(t.dataset.element)===id);
      trigger.toggleAttribute('data-filled', Boolean(mark));
      const seat=button('',()=>trigger.click(),'council-seat');
      seat.setAttribute('aria-label',mark?siteFormat('แก้ไข {0} · {1}', 'Edit {0} · {1}', mark.artist.name, mark.person.name):trigger.getAttribute('aria-label'));
      seat.dataset.filled=String(!!mark);
      const img=new Image();img.alt=mark?mark.artist.name:triggers.find(t=>Number(t.dataset.element)===id).getAttribute('aria-label');
      img.src='assets/characters/'+(mark?mark.artist.icon:'element-'+id)+'.webp';
      seat.append(img);progressRow.append(seat);
    }

  }
  function selectionIdentity(name) {
    return name === 'Aether' || name === 'Lumine' ? 'Traveler' : name;
  }
  function artistUnavailable(artist, gnosis) {
    return marks.some(({person, artist: chosen}) =>
      selectionIdentity(chosen.name) === selectionIdentity(artist.name) &&
      (person !== gnosis || chosen.name !== artist.name));
  }
  function roster(g,id){
    renderPicker = () => roster(g,id);
    panel(siteFormat('ผสานพลังแล้ว {0} / 7 ธาตุ', '{0} / 7 elements united', marks.length),
      siteFormat('ใครจะเป็นผู้วาดไอเทม{0}?', 'Who will draw the {0} item?', g.name));
    const current = marks.find(mark => mark.person === g);
    if (current) {
      const edit = node('div', '');
      edit.className = 'relay-edit';
      edit.append(node('span', siteFormat('เลือกไว้ · {0} · {1}', 'Selected · {0} · {1}', current.artist.name, siteText(current.pick.label))));
      edit.append(button('ยกเลิกการเลือกธาตุนี้', () => {
        marks.splice(marks.indexOf(current), 1);
        redraw();
        refreshHall();
        roster(g, id);
      }, 'relay-clear'));
      body.append(edit);
    }
    const list=node('div','');list.className='relay-roster';
    for(const artist of artists.filter(a=>a.element===id)){
      const el=button(artist.name,()=>choose(g,artist),'');
      el.disabled=artistUnavailable(artist,g);
      const img=new Image();img.src='assets/characters/'+artist.icon+'.webp';img.alt='';
      el.prepend(img);list.append(el);
    }
    body.append(list);
  }
  triggers.forEach((trigger,i)=>trigger.onclick=()=>{
    picker.showModal();syncAtmosphere();roster(gnoses[i],Number(trigger.dataset.element));
    picker.scrollTop=0;
  });
  picker.addEventListener('close', syncAtmosphere);
  picker.querySelector('.plan-close').onclick=()=>picker.close();
  const signatureStats={"Diluc":["531","234"],"Bennett":["414","144"],"Collei":["522","234"],"Nahida":["342","135"],"Albedo":["351","243"],"Klee":["513","135"],"Diona":["153","225"],"Xilonen":["135","522"],"Kaveh":["342","153"],"Furina":["342","225"],"Zhongli":["153","531"],"Alhaitham":["531","234"],"Raiden Shogun":["531","243"],"Barbara":["153","135"],"Fischl":["522","441"],"Xiangling":["432","135"],"Tighnari":["522","234"],"Rosaria":["243","531"],"Noelle":["252","441"],"Kirara":["423","144"],"Lisa":["531","441"],"Lynette":["342","135"],"Yaoyao":["243","135"],"Jean":["432","234"],"Ganyu":["144","531"],"Baizhu":["423","144"],"Venti":["432","135"],"Kaeya":["144","531"],"Amber":["522","243"]};
  const maxItemBonus = 5;
  const lynetteItemPreviews = {
    'กล่องแมววิเศษ': 'เงาแมวในกล่องช่วยขยายพลังที่ทีมสะสมไว้แล้ว',
    'นิ้วเพชรแมวมายา': 'เพียงแตะนิ้วเบา ๆ ลงบนหอคอย สิ่งที่ไม่คาดถึงก็พลิกผัน'
  };
  function choose(g,artist){
    renderPicker = () => choose(g,artist);
    panel(artist.name+' · '+g.name,'จะฝากสิ่งใดไว้ในแผนต่อต้าน?');
    const current = marks.find(mark => mark.person === g)?.pick;
    const beforeChoice = totals().map((score, i) => score - (current?.stats[i] ?? 0));
    artist.items.forEach((label,index)=>{
      const profile=signatureStats[artist.name]?.[index];
      let stats = itemStatOverrides[label] ?? (profile ? Array.from(profile, Number) : g.items[index].stats);
      if (artist.name === 'Lynette') {
        stats = beforeChoice.map(score => label === 'กล่องแมววิเศษ' ? Math.max(0, score) / 2 : 99);
      } else {
        stats = stats.map(value => Math.min(value, maxItemBonus));
      }
      const pick = {label, stats};
      const el=button('',()=>{
        if (artistUnavailable(artist, g)) return roster(g, artist.element);
        const index = marks.findIndex(mark => mark.person === g);
        const next = {person:g,artist,pick};
        if (index < 0) marks.push(next);
        else marks[index] = next;
        redraw();picker.close();
        refreshHall();
        if(marks.length===7) revealResult();
        else triggers.find((t,i)=>!marks.some(mark=>mark.person===gnoses[i]))?.focus({preventScroll:true});
      },'relay-choice');
      const copy = node('span', '');
      const description = artist.name === 'Lynette' ? lynetteItemPreviews[label] : itemTactics[artist.name][label];
      copy.append(node('strong', label), node('small', description));
      el.append(itemDrawing(label),copy);body.append(el);
    });
    body.append(button('← เปลี่ยนตัวละคร',()=>roster(g,artist.element),'relay-back'));
  }
  const celestialReplies = [
    ['สวรรค์ตอบกลับ', 'Celestia replies', 'รวบรวมเทพทั้งเจ็ดมาได้ทั้งที... แล้วนี่คือแผนของพวกเจ้า? ข้าควรหวาดกลัว หรือถอนหายใจก่อนดี กลับไปคิดใหม่เถิด ก่อนที่ข้าจะหมดความอดทนแทนโลกใบนี้', 'You assembled all seven gods... and this is your plan? Should I tremble, or sigh first? Go and think again, before my patience expires ahead of your world.'],
    ['เสียงถอนหายใจจากเบื้องบน', 'A sigh from above', 'ข้าเฝ้ามองมนุษย์ไขว่คว้าปัญญามาหลายยุคสมัย ไม่คิดเลยว่าวันที่พวกเจ้าร่วมมือกับเทพ จะได้ข้อสรุปเพียงเท่านี้ เอาเถอะ ข้าจะทำเป็นไม่เห็น เริ่มใหม่เสีย', 'For ages I have watched humanity reach for wisdom. I never imagined that joining forces with the gods would produce so little. Very well. I shall pretend I saw nothing. Begin again.'],
    ['สวรรค์ขอเวลาทำใจ', 'Celestia needs a moment', 'ไวน์ กระเป๋าเงิน อาหารพิษ... พวกเจ้ากำลังท้าทายสวรรค์ หรือจัดงานเลี้ยงที่ไม่มีใครอยากมา? ไม่ต้องอธิบาย ข้าเหนื่อยจะฟังแล้ว ไปเลือกมาใหม่ให้สมกับคำว่าฝืนโชคชะตาหน่อย', 'Wine, a purse, poisoned food... Are you challenging heaven or hosting a feast nobody wants to attend? Spare me the explanation. I am tired already. Choose again, and give defying fate a little dignity.']
  ];
  let celestialReply;
  let celestialReplyTimer;
  function isCelestialJokeTeam(team) {
    const gods = ['Venti', 'Zhongli', 'Raiden Shogun', 'Nahida', 'Furina', 'Mavuika', 'Anastasya'];
    return team.length === gods.length && gods.every(name => team.some(({artist, pick}) =>
      artist.name === name && pick.label === artist.items[name === 'Venti' ? 0 : artist.items.length - 1]));
  }
  function renderCelestialReply() {
    if (!celestialReply) return;
    const [thTitle, enTitle, th, en] = celestialReplies[celestialReply.index];
    celestialReply.title.textContent = siteFormat(thTitle, enTitle);
    celestialReply.quote.textContent = siteFormat(th, en);
    celestialReply.note.textContent = siteFormat('กำลังให้โอกาสพวกเจ้าเลือกใหม่…', 'You will be given another chance to choose…');
    celestialReply.retry.textContent = siteFormat('เลือกใหม่', 'Choose again');
  }
  function showCelestialReply() {
    const dialog = document.createElement('dialog');
    dialog.className = 'relay-celestial-reply';
    dialog.setAttribute('aria-labelledby', 'celestial-reply-title');
    const title = node('h2', ''); title.id = 'celestial-reply-title';
    const quote = node('p', '');
    const note = node('small', '');
    const retry = button('', () => { start(); triggers[0].focus({preventScroll:true}); });
    const content = node('div', '');
    content.append(title, quote, note, retry);
    dialog.append(content);
    celestialReply = {dialog, title, quote, note, retry, index: Math.floor(Math.random() * celestialReplies.length)};
    renderCelestialReply();
    hall.append(dialog);
    hall.classList.add('has-celestial-reply');
    dialog.addEventListener('cancel', event => { event.preventDefault(); retry.click(); });
    dialog.showModal();
    syncAtmosphere();
    celestialReplyTimer = setTimeout(() => retry.click(), 14000);
  }
  async function revealResult() {
    if (isCelestialJokeTeam(marks)) { showCelestialReply(); return; }
    const fusion = node('dialog', '');
    fusion.className = 'relay-fusion';
    fusion.setAttribute('aria-label', siteText('กำลังรวมพลัง Gnosis ทั้งเจ็ด'));
    fusion.addEventListener('cancel', event => event.preventDefault());
    const pieces = seatOrder.map(id => {
      const trigger = triggers.find(trigger => Number(trigger.dataset.element) === id);
      const gnosis = gnoses[triggers.indexOf(trigger)];
      const icon = new Image();
      icon.className = 'relay-fusion-icon';
      icon.src = 'assets/characters/element-' + id + '.webp';
      icon.alt = '';
      icon.style.setProperty('--tone', gnosis.color);
      fusion.append(icon);
      return icon;
    });
    const flash = node('div', '');
    flash.className = 'relay-fusion-flash';
    fusion.append(flash);
    hall.append(fusion);
    fusion.showModal();
    syncAtmosphere();

    const totalDuration = 2000;
    const flashDuration = 250;
    const radius = Math.min(fusion.clientWidth, fusion.clientHeight) * .39;
    const paths = pieces.map((piece, index) => {
      const frames = Array.from({length: 61}, (_, i) => {
        const t = i / 60;
        const angle = index * 2 * Math.PI / pieces.length - Math.PI / 2 - t * 2 * Math.PI;
        const distance = radius * (1 - t ** 1.65);
        return {
          transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(${1 - .42 * t})`,
          opacity: Math.min(1, 10 * (1 - t))
        };
      });
      return piece.animate(frames, {duration: totalDuration - 120, fill: 'both'});
    });
    const flare = flash.animate(
      [{opacity: 0}, {opacity: 1}],
      {delay: totalDuration - flashDuration, duration: flashDuration, easing: 'ease-in-out', fill: 'forwards'}
    );
    await Promise.allSettled([...paths, flare].map(animation => animation.finished));
    hall.append(game);
    fusion.classList.add('is-revealing');
    finish();
    const fade = flash.animate([{opacity: 1}, {opacity: 0}],
      {duration: 450, easing: 'ease-in-out', fill: 'forwards'});
    await Promise.allSettled([fade.finished]);
    fusion.remove();
    heading.focus({preventScroll:true});
  }
  function statLabel(index){
    const label=node('span','');
    label.className='relay-stat';
    const icon=node('span',['⚔','🛡','♥'][index]);
    icon.className='stat-icon stat-'+index;
    icon.setAttribute('aria-hidden','true');
    label.append(icon,siteText(statNames[index]));
    return label;
  }
  const itemStatOverrides = {
    'ฮัมร้องคืนเต็มดวง': [1, 5, 3],
    'ตุ๊กตาแม่ลูกดก': [1, 4, 4],
    'บทเพลงแห่งเสรีภาพ': [2, 2, 5],
    'กระเป๋าเงินที่ปรึกษา': [2, 5, 2],
    'เสน่ห์อาหารพิษ': [4, 4, 1],
    'ฝันตลกไม่รู้จบ': [1, 4, 4],
    'ทำนองสิ้นหวัง': [1, 3, 5],
    'โลกันล้อเดียว': [4, 1, 4],
    'ระเบิด Dodoco': [7, -2, 3],
    'วงล้อเพลิง': [8, 1, -2],
    'ดาบแห่งนิรันดร์': [8, -2, 1],
    'ดาบคู่ลมเหนือ': [6, -1, 2],
    'กระสุนปืนคาบศิลา': [7, 2, -1],
    'กระจกสลักแสง': [6, -1, 2],
    'วงดาวสะท้อนน้ำ': [4, 5, -1],
    'ตะเกียงจินน์': [-1, 5, 4],
  };
  function signedScore(value) {
    return value > 0 ? '+' + value : String(value);
  }
  const itemTactics = {
    "Aether": {
      "Dull Blade ฟ้าประทาน": "คมดาบรับแสงแรกไว้ เพื่อนทั้งหกจึงข้ามประตูทัน",
      "ขนนกจากต่างฟ้า": "ขนนกลอยสวนลม ตรงนั้นเองคือช่องโหว่ของม่านฟ้า",
    },
    "Aino": {
      "เครื่องกำเนิดน้ำ": "น้ำหยดแรกทำให้เฟืองแห้งฝืดใต้หอกลับมาหมุน",
      "กล่องเครื่องมือ": "อะไหล่ชิ้นสุดท้ายในกล่องพอดีกับกว้านประตู",
    },
    "Albedo": {
      "ดอกไม้แปรธาตุ": "กลีบสีทองผลิใต้เท้าพลธนู ยกแนวยิงพ้นกำแพง",
      "ลิฟต์หิน": "แท่นหินพาทั้งทีมขึ้นถึงระเบียงที่บันไดขาด",
    },
    "Alhaitham": {
      "กระจกสลักแสง": "มุมกระจกหักลำแสงย้อนเข้าตราที่ปล่อยมันออกมา",
      "หนังสือภาษาศาสตร์": "อักษรซ้ำบนผนังเผยว่าบรรทัดไหนคือคำสั่งปิดประตู",
    },
    "Aloy": {
      "กับดักเยือกแข็ง": "ยามกลก้าวลงบนพื้นเยือกแข็ง ข้อต่อก็หยุดค้าง",
      "ธนูนักล่า": "สายตานักล่าจับจังหวะแผ่นเกราะเผยอ ก่อนปล่อยลูกธนู",
    },
    "Alyosha": {
      "คมอัสนี": "ประกายแล่นตามร่องดาบ ไปดับอักขระที่อีกปลาย",
      "เครื่องรางเดินทาง": "พู่บนเครื่องรางไหวเตือนก่อนลมบนสะพานจะกลับทิศ",
    },
    "Amber": {
      "ลูกศรเพลิง": "ลูกศรปักยอดหอ เปลวไฟชี้เป้าให้คนที่ยิงตาม",
      "ตุ๊กตา Baron Bunny": "Baron Bunny เต้นอยู่กลางลาน ขณะทุกคนเลาะกำแพงผ่านไป",
    },
    "Anastasya": {
      "คมหอกเหมันต์": "เกล็ดน้ำแข็งเกาะตามคมหอกของ Anastasya เมื่อปลายหอกแตะแนวผนึก ความเย็นก็แล่นไปตามรอยร้าว",
      "คมเกล็ดหิมะ": "เกล็ดคมแทรกในรอยต่อ วงผนึกจึงหมุนไม่ครบรอบ",
      "ตุ๊กตาแม่ลูกดก": "ตุ๊กตาซ้อนกันทีละชั้น แต่ละตัววาดลวดลายของ Anastasya เทพแห่งน้ำแข็ง ตัวจิ๋วด้านในเก็บแผนทางถอยของทีมไว้",
    },
    "Arataki Itto": {
      "วัว Ushi": "Ushi กระทืบเท้าอยู่หน้าด่าน ยามทั้งแถวหันมาหามัน",
      "กระบองโอนิ": "กระบองยกคานที่ขวางทางขึ้นทั้งท่อน",
    },
    "Arlecchino": {
      "เคียวจันทราแดง": "เสี้ยวเคียวเกี่ยวสายแสงเหนือศีรษะแล้วกระชากขาด",
      "ข่าวกรองบ้านแสนอบอุ่น": "ข่าวกรองจาก House of the Hearth เผยทางลับที่อยู่พ้นสายตา Celestia",
    },
    "Baizhu": {
      "เขี้ยว Changsheng": "รอยเขี้ยวบนเปลือกเถาชี้ต้นที่ยังมียางแก้พิษ",
      "ห่อยาสมุนไพร": "กลิ่นสมุนไพรช่วยให้หน่วยหน้าเดินฝ่าหมอกต่อได้",
    },
    "Barbara": {
      "วงแหวนน้ำ": "สายน้ำโคจรรอบคนถือธง รับสะเก็ดแสงจากทุกด้าน",
      "โน้ตเพลงประสานเสียง": "เสียงร้องท่อนเดียวกันพาคนที่พลัดหลงกลับมาพบกัน",
    },
    "Beidou": {
      "ดาบผ่าคลื่น": "ฟันเดียวแหวกคลื่นที่ซัดขวางหัวเรือ",
      "ธงกองเรือ": "ธงบนเสากระโดงบอกเรือลำท้ายว่าถึงคราวฝ่าแนวปิดล้อม",
    },
    "Bennett": {
      "ดาบวงแหวนไฟ": "วงไฟบนพื้นกลายเป็นจุดรวมพลเมื่อทั้งลานมืดลง",
      "ผ้าพันแผลนักผจญภัย": "ผ้าพันรอบฝ่ามือ ช่วยให้คนดึงเชือกจับต่อได้จนคนสุดท้ายขึ้นมา",
    },
    "Candace": {
      "โล่จันทร์เสี้ยว": "หน้าโล่เอียงรับลำแสง เบนมันออกจากประตูหลบภัย",
      "เหยือกน้ำโอเอซิส": "น้ำหนึ่งเหยือกแบ่งถึงยามผลัดสุดท้ายก่อนประตูเปิด",
    },
    "Charlotte": {
      "ภาพข่าวแนวหน้า": "ภาพจากแนวหน้าเผยว่ายอดหอมืดลงก่อนยิงทุกครั้ง",
      "กล้อง Monsieur Verite": "ชัตเตอร์จับตราที่สว่างเพียงชั่วพริบตาไว้ทัน",
    },
    "Chasca": {
      "กระสุนวิญญาณ": "กระสุนเลี้ยวตามเป้าที่หลบหลังเสาหิน",
      "บังเหียนบิน": "Chasca ขี่ปืนบินพาทีมลอดแนวแสง แล้ววกขึ้นฟ้าก่อนทางจะปิด",
    },
    "Chevreuse": {
      "กระสุนปืนคาบศิลา": "เสียงปืนนัดเดียวตามด้วยเสียงสลักประตูตกพื้น",
      "นกหวีดหน่วยลาดตระเวน": "หวีดสั้นสองครั้งสั่งให้แนวหน้าหลบ เปิดทางให้แนวหลัง",
    },
    "Chiori": {
      "ตุ๊กตา Tamoto": "Tamoto ยึดชายม่านไว้ระหว่างทีมลอดฉากลวงตา",
      "ดาบคู่ช่างตัดเสื้อ": "ดาบข้างหนึ่งเกี่ยวเส้นผนึก อีกข้างตัดตรงตะเข็บ",
    },
    "Chongyun": {
      "ยันต์ขับไล่ภูต": "ยันต์สั่นตรงซุ้มที่มีเงาสิงอยู่ ทีมจึงเลี่ยงได้ทัน",
      "ดาบน้ำแข็ง": "ไอเย็นตรึงบานประตูให้ค้างอยู่ระหว่างปิด",
    },
    "Citlali": {
      "หมอน Itzpapa": "Itzpapa ลอยเป็นเพื่อนยามผลัดดึก คอยปลุกเมื่อผนึกขยับ",
      "ดาวราตรี": "แสงดาวสามจุดต่อกันเป็นเส้นกลับค่าย",
    },
    "Clorinde": {
      "ปืนดวล": "นัดตัดสินลอดช่องที่เปิดเพียงหนึ่งจังหวะ",
      "ตรานักประลอง": "ตรานักประลองชูเหนือฝูงชน ทุกคนถอยเปิดวงให้เธอ",
    },
    "Collei": {
      "บูมเมอแรงใบไม้": "ใบไม้หวดสวิตช์ด้านหลังแล้ววกกลับเข้ามือ",
      "ตุ๊กตา Cuilein-Anbar": "Cuilein-Anbar เด้งข้ามแนวโล่ไปถึงคนที่ติดอยู่อีกฝั่ง",
    },
    "Columbina": {
      "ฮัมร้องคืนเต็มดวง": "ใต้จันทร์เต็มดวง Columbina ฮัมทำนองแผ่วเบา พอเสียงลากยาวถึงโน้ตสุดท้าย ลำแสงจากสวรรค์ก็หยุดค้างกลางฟ้า",
      "ม่านแสงจันทร์": "แสงจันทร์คลุมสะพาน เงาของผู้ข้ามจางไปจากพื้น",
      "กล่องเพลงจันทรา": "เมื่อกล่องเพลงไขลาน เสียงเตือนของหอก็กลืนไปกับทำนอง",
    },
    "Cyno": {
      "หอกพิพากษา": "ปลายหอกปักตรากลางวง ขวางคำสั่งพิพากษาจากฟ้า",
      "ไพ่ Genius Invokation TCG": "ไพ่ที่หงายบนพื้นจำลองแนวยาม ทุกคนลองเดินหมากก่อนบุก",
    },
    "Dahlia": {
      "หยดน้ำแห่งพร": "หยดพรแตกเป็นวงน้ำรับเศษหินจากเพดาน",
      "ระฆังวิหาร": "ระฆังดังไกลถึงชายเมือง คนที่ตกค้างจึงรู้ว่าประตูยังเปิด",
    },
    "Danica": {
      "ประกายอัสนี": "ประกายสั้นๆ แตะโซ่แต่ละห่วง เผยว่าห่วงไหนมีผนึก",
      "โคมไฟนำทาง": "โคมแขวนต่ำกว่าระดับหมอก ส่องขั้นบันไดให้คนท้ายแถว",
    },
    "Dehya": {
      "ดาบทหารรับจ้าง": "ดาบเล่มหนักค้ำบานเหล็กไว้จนคนจ้างผ่านพ้น",
      "เครื่องรางสิงโต": "เครื่องรางสิงโตส่งต่อถึงมือคนเฝ้ายาม เขาจึงรู้ว่าใครมาแทน",
    },
    "Diluc": {
      "เหยี่ยวเพลิง": "เงาเหยี่ยวไฟบินต่ำ กวาดแนวยามออกจากสะพาน",
      "ตะเกียงรุ่งอรุณ": "ตะเกียงที่หน้าต่างโรงกลั่นบอกคนถอยว่าทางนี้ปลอดภัย",
    },
    "Diona": {
      "โล่อุ้งเท้าแมว": "อุ้งเท้าน้ำแข็งรับแรงตกกระแทกใต้คนที่กระโดดลงมา",
      "ขวดเครื่องดื่มเย็น": "ขวดเย็นส่งไปรอบวง ให้คนเฝ้าเตาผนึกได้พักหายใจ",
    },
    "Dori": {
      "ตะเกียงจินน์": "จินน์โผล่จากปากตะเกียง คอยส่งพลังให้เพื่อนทีละคน",
      "ถุง Mora": "เสียงโมราในถุงซื้อเสบียงเที่ยวสุดท้ายก่อนปิดด่าน",
    },
    "Durin": {
      "ปีกมังกรเพลิง": "ปีกกางบังฝนเถ้าถ่านเหนือขบวนเดินเท้า",
      "หนังสือนิทาน": "ภาพประตูในนิทานซ้อนทับทางตัน เผยทางออกอีกบาน",
    },
    "Emilie": {
      "ขวดน้ำหอม": "ละอองน้ำหอมติดสายลม เผยทางที่หมอกพิษไหลย้อน",
      "ดอกไม้กลั่นกลิ่น": "กลิ่นดอกไม้จางลงตรงรอยรั่ว เธอจึงหารอยนั้นเจอ",
    },
    "Escoffier": {
      "หม้อปรุงอาหาร": "ไอน้ำจากหม้อจับบนม่านล่องหนจนเห็นขอบ",
      "มีดเชฟ": "ปลายมีดเลาะเปลือกผลึกบางเท่าเปลือกผลไม้",
    },
    "Eula": {
      "รอยเท้าร่ายรำ": "ก้าวเต้นทิ้งรอยบนพื้นน้ำแข็ง เพื่อนเหยียบตามได้โดยไม่ลื่น",
      "ดาบแห่งแสง": "แสงที่สะสมในดาบแตกพร้อมจังหวะสุดท้ายของการรำ",
    },
    "Faruzan": {
      "กลไกพายุ": "ลมหมุนกวาดฝุ่นออกจากฟันเฟืองที่ติดขัด",
      "ตำราจักรกล": "ภาพตัดในตำราชี้สลักปลดผนึกที่ซ่อนอยู่ใต้ฐาน",
    },
    "Fischl": {
      "ปีกของ Oz": "ปีกดำโฉบเฉียดหอ ล่อแสงตรวจการณ์ขึ้นไปบนฟ้า",
      "ดวงตาของ Oz": "จากสายตาของ Oz เธอเห็นผู้พิทักษ์ที่ซ่อนหลังยอดเสา",
    },
    "Flins": {
      "หอกวิญญาณ": "เงาปลายหอกแตะร่างลวง ส่วนหอกจริงเข้าถึงต้นตอ",
      "ตะเกียงผู้เฝ้าสุสาน": "เปลวตะเกียงนำวิญญาณหลงทางออกจากสนามรบ",
    },
    "Freminet": {
      "หมวกนักดำน้ำ": "ใต้ผิวน้ำ เขาพบคันโยกอีกด้านของประตูระบายน้ำ",
      "เพนกวิน Pers": "Pers มุดเข้าไปในท่อแคบ เสียงแก๊กบอกว่าสลักหลุดแล้ว",
    },
    "Furina": {
      "ทำนองสิ้นหวัง": "เมื่อท้องฟ้าเริ่มแตกต่อหน้าต่อตา Furina เปล่งเสียงร้องสั่นเครือ ราวกับกำลังร้องท่อนสุดท้ายก่อนโลกดับลง",
      "เวทีสายน้ำ": "เวทีผุดกลางน้ำ พาคนที่ว่ายไม่ไหวพ้นกระแสเชี่ยว",
      "บทละครโอเปรา": "บทขานรับหลังม่านช่วยส่งคำสั่งผ่านเสียงต่อสู้",
    },
    "Gaming": {
      "หัวสิงโตวูซู": "หัวสิงโตผงกเหนือควัน คนด้านหลังมองตามได้ไกล",
      "กลองเชิดสิงโต": "กลองเร่งสามทีส่งเขากระโดดข้ามวงแสงอย่างพอดี",
    },
    "Ganyu": {
      "ดอกบัวน้ำแข็ง": "กลีบบัวเย็นจัดล่อสายตายาม ก่อนแตกเป็นไอขาว",
      "ลูกศรเกล็ดหิมะ": "ลูกศรแตะยอดหอแล้วผลิบานเป็นเกล็ดเย็นปิดช่องยิง",
    },
    "Gorou": {
      "ธงแม่ทัพ": "ทหารอ่านมุมธงแล้วแยกสองปีกแม้ไม่ได้ยินคำสั่ง",
      "ธนูทัพ Watatsumi": "ธนูจากเนินสูงคุ้มกันหน่วยที่กำลังข้ามน้ำตื้น",
    },
    "Hu Tao": {
      "หอกผีเสื้อ": "ผีเสื้อไฟเกาะเงาที่ไร้เจ้าของ เผยร่างลวงให้ปลายหอก",
      "โคมวิญญาณ": "โคมอุ่นพาเหล่าวิญญาณพ้นเขตที่หอใช้กักพลัง",
    },
    "Iansan": {
      "หมัดสายฟ้า": "หมัดเดียวส่งแรงสะเทือนถึงฐานหินที่ฝังอยู่ใต้ดิน",
      "อุปกรณ์ฝึกกำลัง": "สายรัดฝึกกำลังกลายเป็นห่วงดึงเพื่อนขึ้นเนินชัน",
    },
    "Ifa": {
      "ปืนลม": "แรงลมจากปากกระบอกพัดควันพ้นทางร่อนลง",
      "กระเป๋าสัตวแพทย์": "อุปกรณ์ในกระเป๋าช่วยให้สัตว์พาหนะกลับมายืนรับคนได้",
    },
    "Illuga": {
      "โคมไฟประภาคาร": "Illuga ส่งสัญญาณจากประภาคารให้ทีมฝ่าหมอกไปตามทางที่ปลอดภัย",
      "Aedon ผู้เฝ้าแสงประภาคาร": "Aedon บินล่วงหน้าไปหาเส้นทาง แล้ววกกลับมานำทีมข้ามปากเหว",
    },
    "Ineffa": {
      "แขนกล": "แขนกลรับน้ำหนักบานประตูระหว่างซ่อมรางเลื่อน",
      "หุ่น Birgitta": "Birgitta ยืนรับลำแสงขณะเจ้าของพาทีมอ้อมไปหลังหอ",
    },
    "Jahoda": {
      "กลไกลม": "ใบพัดจิ๋วหมุนแรงขึ้นใกล้ปล่องลับ เปิดโปงทางลง",
      "ถุงมือทำงาน": "ถุงมือหนาจับลวดร้อนได้พอดีจนปลดกลอนเสร็จ",
    },
    "Jean": {
      "ดาบเขี้ยวสิงโต": "ลมที่ปลายดาบยกเพื่อนออกจากวงยิงก่อนแสงตกถึงพื้น",
      "เมล็ดแดนดิไลออน": "เมล็ดขาวลอยผ่านม่าน เผยตำแหน่งช่องที่ลมลอดได้",
    },
    "Kachina": {
      "สว่าน Turbo Twirly": "Turbo Twirly ไต่ผนังขึ้นไปเปิดประตูจากด้านใน",
      "เกล็ดผลึก": "เกล็ดผลึกใต้ฝ่าเท้าเกาะพื้นลาดให้แถวหลังปีนตาม",
    },
    "Kaedehara Kazuha": {
      "คมดาบสายลม": "คมดาบตามเสียงลมไปถึงช่องว่างระหว่างเกราะสองชั้น",
      "ใบเมเปิล": "ใบเมเปิลพลิกด้านก่อนคลื่นลมมา เขาจึงเตือนเพื่อนได้ทัน",
    },
    "Kaeya": {
      "สะพานน้ำแข็ง": "แผ่นน้ำแข็งทอดทีละก้าวเหนือทางน้ำที่สะพานขาด",
      "คมดาบน้ำแข็ง": "คมดาบเย็นแตะกลอนเหล็ก ล็อกยามไว้อีกฝั่ง",
    },
    "Kamisato Ayaka": {
      "พัดกระเรียน": "พัดกางเพียงครึ่งเดียวก็พอให้เกล็ดหิมะพรางทางถอย",
      "ดาบหิมะ": "รอยฟันบางบนพื้นกลายเป็นแนวหิมะกั้นผู้ไล่ตาม",
    },
    "Kamisato Ayato": {
      "ดาบเงาวารี": "เงาดาบสะท้อนผิวน้ำ บดบังทิศที่คมจริงเข้าถึงตรา",
      "ถ้วยชาของเจ้าสำนัก": "ระลอกในถ้วยชาบอกจังหวะที่หอชาร์จพลังใต้พื้น",
    },
    "Kaveh": {
      "กระเป๋า Mehrak": "Mehrak ฉายโครงสร้างทางเดินให้เห็นคานที่ยังรับน้ำหนัก",
      "พิมพ์เขียวที่พักพิง": "แบบร่างพับเดียวเปลี่ยนลานโล่งเป็นที่พักพิงก่อนค่ำ",
    },
    "Keqing": {
      "ปิ่นสายฟ้า": "ปิ่นปักค้างเหนือรอยแยก เธอวาร์ปตามขึ้นไปปลดสลัก",
      "แผนผังเมือง": "ผังเมืองฉบับแก้มือเปิดตรอกเล็กเป็นเส้นอพยพสายใหม่",
    },
    "Kinich": {
      "ตะขอเกี่ยว": "ปลายตะขอเกี่ยวขอบหอ เหวี่ยงทั้งตัวผ่านช่องแสง",
      "ภาพ Ajaw": "Ajaw ในภาพส่งเสียงท้า ดึงสายตาทั้งลานไปคนละทาง",
    },
    "Kirara": {
      "กรงเล็บเนโกะ": "รอยกรงเล็บเรียงบนผนังเป็นจุดเกาะให้คนตามปีน",
      "กล่องพัสดุ": "กล่องพัสดุไถลลอดช่องส่งของ พร้อมกุญแจที่ทีมรอ",
    },
    "Klee": {
      "ระเบิด Dodoco": "Dodoco เด้งข้ามขอบกำแพงก่อนปล่อยแสงจ้าหลังแนวยาม",
      "ใบโคลเวอร์นำโชค": "ใบโคลเวอร์แปะบนหมวกคนท้ายแถว คลีจะได้มองเห็นเขาเสมอ",
    },
    "Kujou Sara": {
      "ขนนกเท็งงู": "ขนปีกตกตรงพื้นไหน อัสนีก็ตามลงตรงนั้น",
      "ธงแม่ทัพ": "ธงสะบัดลงพร้อมกันทั้งแถว ให้ทหารยิงในช่องจังหวะเดียว",
    },
    "Kuki Shinobu": {
      "แส้สายฟ้า": "ปลายแส้คล้องคันโยกจากนอกวงกับดัก",
      "วงแหวน Naku Weed": "วงแหวน Naku Weed ตามติดคนเปิดทาง ช่วยพยุงแรงตลอดแนวบุก",
    },
    "Lan Yan": {
      "วงแหวนหวาย": "ห่วงหวายยืดรับแรงแล้วดีดกลับ เบนเศษหินพ้นทาง",
      "ตะกร้าสาน": "ตะกร้าสานหย่อนเสบียงลงปล่องที่คนลอดไม่ได้",
    },
    "Lauma": {
      "สรรพสัตว์แดนเหนือ": "Lauma ขอให้สัตว์แห่งแดนเหนือตามรอยเท้าที่หายไปในหมอก แล้วนำทางให้ทีม",
      "คำอธิษฐานจันทรา": "Lauma เอ่ยคำอธิษฐานให้แสงจันทร์นำทางผู้ที่ยังติดอยู่กลางหมอก",
    },
    "Layla": {
      "ม่านดาวหลับใหล": "ม่านดาวห่มยามผลัดพัก ให้หลับได้แม้หอยังสั่น",
      "ดาวตก": "ดาวตกพุ่งตามเส้นที่ขีดในสมุด เข้ารอยแยกพอดี",
    },
    "Linnea": {
      "เครื่องมือสำรวจ": "เข็มวัดสั่นแรงเหนือโพรง เธอย้ายจุดตั้งค่ายได้ทัน",
      "ผลึกหิน": "แสงสะท้อนในผลึกเผยรอยร้าวลึกใต้ฐานหอ",
    },
    "Lisa": {
      "กุหลาบสายฟ้า": "กลีบกุหลาบปล่อยประกายทีละชั้น จนวงอักขระเผยรูป",
      "ตำราค่ายกล": "บันทึกริมหน้ากระดาษบอกว่าควรคลายค่ายกลวงไหนก่อน",
    },
    "Lohen": {
      "ตรากองอัศวิน": "ตราอัศวินส่งผ่านด่าน ทำให้รถขนเสบียงเข้าลานได้ทัน",
      "หอกท้าประลอง": "ปลายหอกเคาะโล่ท้าดวล ยามผละจากประตูมารับคำท้า",
    },
    "Lumine": {
      "Dull Blade ฟ้าประทาน": "ประกายดาบวาดทางโค้ง ตัดม่านที่กั้นทีมออกจากกัน",
      "ดอก Inteyvat": "ดอกสีขาวค้างอยู่ที่ปากทาง พี่น้องจึงตามรอยกันเจอ",
    },
    "Lynette": {
      "กล่องแมววิเศษ": "เงาแมวในกล่องขยายพลังที่สะสมไว้เพิ่มครึ่งหนึ่งในทุกด้าน",
      "นิ้วเพชรแมวมายา": "Lynette ชูเพชรรับแสงจาก Celestia แล้วสะท้อนกลับเป็นพลังทั้งสามด้าน ด้านละ 99 แต้ม",
    },
    "Lyney": {
      "ไพ่กล": "ไพ่สองใบสลับตำแหน่ง ยามจึงเฝ้าประตูผิดบาน",
      "หมวกนักมายากล": "พอเปิดหมวกออก กุญแจที่หายไปก็อยู่ในมือคนเปิดทาง",
    },
    "Mavuika": {
      "โลกันล้อเดียว": "มอเตอร์ไซค์คู่ใจของ Mavuika ผ่านสมรภูมิจนเสียไปหนึ่งล้อ รอยแผลบนตัวรถคือเกียรติยศจากวันที่มันพาเธอฝ่าแนวรบกลับมา",
      "วงล้อเพลิง": "วงล้อทิ้งรอยไฟไว้บนทางลาด คนด้านหลังจึงรู้ทางขึ้น",
      "เปลวไฟศักดิ์สิทธิ์": "ไฟจากคบแรกถูกส่งต่อจนสว่างครบทุกค่าย",
    },
    "Mika": {
      "แผนที่สำรวจ": "พิกัดที่วงไว้ช่วยให้หน่วยเสบียงเลี่ยงสะพานที่ทรุด",
      "หน้าไม้พลสำรวจ": "ลูกดอกปักธงผ้าไว้บนหน้าผา เป็นหมุดบอกระยะข้าม",
    },
    "Mitya": {
      "ประกายไฟฟ้า": "แสงวาบสั้นๆ ส่งข่าวข้ามลานโดยไม่ต้องวิ่งฝ่าแนวรบ",
      "สมุดจัดงาน": "สมุดเปิดค้างที่ตารางเวร ทุกช่องทางออกจึงมีคนรับช่วง",
    },
    "Mona": {
      "วงดาวสะท้อนน้ำ": "วงดาวในน้ำซ้อนกับตราบนหอ เผยดวงที่วางผิดตำแหน่ง",
      "แผนภูมิดวงดาว": "เธอขีดเวลาบนแผนภูมิ บอกทีมได้ว่าม่านจะเปิดตอนไหน",
    },
    "Mualani": {
      "กระดานฉลาม": "กระดานฉลามโต้คลื่นซัดย้อน พาคนส่งข่าวถึงฝั่งก่อนแสงดับ",
      "ลูกบอลชายหาด": "ลูกบอลลอยสีสดกลางฟองคลื่น เป็นจุดนัดให้คนพลัดตกน้ำ",
    },
    "Nahida": {
      "ฝันตลกไม่รู้จบ": "Nahida ทำให้ทหารสวรรค์ฝันว่าต้องขึ้นบันไดขั้นเดิมซ้ำ ๆ ทุกครั้งที่ใกล้ถึงยอด บันไดก็จามแล้วส่งพวกเขากลับไปจุดเริ่มต้น",
      "นิมิตพฤกษา Aranara": "ในนิมิตของ Nahida เหล่า Aranara จุดแสงตามรากไม้ นำทางคนที่พลัดจากทีมกลับมาหากัน",
      "เมล็ดพันธุ์ปัญญา": "เมล็ดเล็กๆ เก็บความทรงจำเรื่องทางกลับไว้ให้ทุกคน",
    },
    "Navia": {
      "ร่มกันปืน": "ร่มกางรับเศษแก้ว ก่อนหุบลงเล็งไปที่รอยปริ",
      "กระสุนผลึก": "เศษผลึกที่กระจัดกระจายกลายเป็นกระสุนชุดต่อไป",
    },
    "Nefer": {
      "มีดเงา": "มีดซ่อนเงาตัดเชือกตราเตือนภัยก่อนระฆังจะดัง",
      "ม้วนข่าวกรอง": "ข่าวในม้วนกระดาษบอกชื่อยามที่รู้รหัสประตูหลัง",
    },
    "Nicole": {
      "อักษรรูนแม่มด": "รูนที่เขียนทับช่องว่างทำให้ข้อความบนผนังอ่านได้อีกครั้ง",
      "ขนนกนำทาง": "ขนนกลากเส้นกลางอากาศ คนหลงในภาพฝันจึงตามออกมา",
    },
    "Nilou": {
      "ผ้าคลุมระบำ": "ปลายผ้าหมุนแตะผิวน้ำ ส่งวงคลื่นแยกภาพสะท้อนลวง",
      "ดอกบัวโรงละคร": "ดอกบัวลอยผ่านแถวหน้า เป็นคิวให้นักเต้นพาผู้คนออกจากลาน",
    },
    "Ningguang": {
      "ฉากหยก": "ม่านหยกล้อมลานประมูลเก่า รับหินร่วงแทนผู้อพยพ",
      "อัญมณีดาว": "ดาวหยกโคจรค้างเหนือช่องโหว่ ก่อนตกลงพร้อมกัน",
    },
    "Noelle": {
      "เกราะกุหลาบ": "เกราะกุหลาบกางล้อมคนที่ยังยกคานไม่พ้น",
      "ดาบใหญ่": "ดาบใหญ่ช้อนแผ่นหินออกจากทางราวกับย้ายเฟอร์นิเจอร์",
    },
    "Odette": {
      "ม่านเกล็ดหิมะ": "เกล็ดหิมะเกาะผนังใส จนมองเห็นประตูลวงชัดเจน",
      "คมน้ำแข็ง": "คมน้ำแข็งบางสอดใต้สลักโดยไม่ทำให้สะพานสั่น",
    },
    "Ororon": {
      "ลูกศรยามค่ำ": "ลูกศรหายไปกับฟ้ามืด ก่อนจุดแสงที่ยอดป้อม",
      "เมล็ดผัก": "เมล็ดจากแปลงผักแบ่งให้ค่ายที่เส้นส่งเสบียงถูกตัด",
    },
    "Prune": {
      "ตรานักล่าแม่มด": "ตราแตะกับรอยอาคมแล้วอุ่นขึ้น เผยว่าประตูนี้มีคำสาป",
      "หมวกแม่มด": "ปีกหมวกบังแสงตรวจการณ์ขณะเธอก้มอ่านตราที่พื้น",
    },
    "Qiqi": {
      "ยันต์คุ้มภัย": "ยันต์แปะบนหลังคนท้ายขบวน ช่วยให้ฉีฉีจำว่าใครยังมาไม่ถึง",
      "ดาบพิธีกรรม": "ท่าดาบซ้ำเป็นจังหวะคงที่ ขวางเงาที่วนกลับมาไม่หยุด",
    },
    "Raiden Shogun": {
      "เสน่ห์อาหารพิษ": "อาหารจานนี้ของ Raiden ทำให้แม้แต่ทหารสวรรค์ยังถอย ทีมจึงเก็บไว้เป็นพิษเคลือบอาวุธก่อนเข้าประจัญบาน",
      "ดาบแห่งนิรันดร์": "รอยฟันพาดข้ามวงผนึกทั้งวง ก่อนเสียงฟ้าร้องจะตามทัน",
      "ตรามิตสึโดโมเอะ": "อัสนีเวียนครบสามแฉก ส่งแรงให้เพื่อนลงมือพร้อมกัน",
    },
    "Razor": {
      "กรงเล็บสายฟ้า": "กรงเล็บตะปบโซ่แสงที่รั้งเพื่อนร่วมฝูง",
      "รอยเท้าฝูงหมาป่า": "รอยเท้าหมาป่าบนดินอ่อนเผยทางเลี่ยงที่ยามมองข้าม",
    },
    "Rosaria": {
      "เงาไม้กางเขน": "เงากางเขนทาบพื้นตรงที่ยามจะผ่าน เธอซุ่มรอตรงนั้น",
      "หอกน้ำแข็ง": "หอกปักคาพื้น แผ่ความเย็นรั้งผู้ไล่ตามไว้",
    },
    "Sandrone": {
      "ชิ้นส่วนหุ่นกล": "เฟืองสำรองเข้าแทนชิ้นที่บิ่น ทำให้ประตูกลกลับทิศ",
      "แขนจักรกล": "แขนจักรกลหมุนเสาหนักให้ช่องอักขระเรียงตรงกัน",
    },
    "Sangonomiya Kokomi": {
      "แมงกะพรุนน้ำ": "แมงกะพรุนเรืองแสงลอยอยู่ข้างหน่วยที่ต้องยืนรับศึกนานที่สุด",
      "สมุดแผนกลศึก": "หน้าที่คั่นไว้มีทางเลือกสำรอง เธอสั่งย้ายแนวก่อนน้ำหนุน",
    },
    "Sayu": {
      "ดาวกระจายนินจา": "ดาวกระจายเกี่ยวชายธง ยามเงยหน้าพอดีตอนเธอกลิ้งผ่าน",
      "ตุ๊กตา Muji-Muji Daruma": "Muji-Muji Daruma ตั้งเฝ้าปากทาง ส่วน Sayu พาคนหนีเข้าเงาไม้",
    },
    "Sethos": {
      "ลูกศรทราย": "ลูกศรพาทรายติดลมไปเผยม่านที่ขึงอยู่ในอากาศ",
      "แผนที่ทะเลทราย": "เส้นหมึกข้างโอเอซิสระบุบ่อน้ำที่กองทัพฟ้ายังหาไม่เจอ",
    },
    "Shenhe": {
      "เชือกแดงผนึกวิญญาณ": "เชือกแดงขึงข้ามช่องแตก รั้งเงาที่พยายามลอดออกมา",
      "หอกสะกดภูต": "หอกตรึงเงาภูตไว้กับพื้นจนทุกคนข้ามธรณีประตูพ้น",
    },
    "Shikanoin Heizou": {
      "หมัดพายุ": "ลมจากหมัดพัดฝุ่นออก เผยรอยรองเท้าของคนเปิดผนึก",
      "สมุดสืบสวน": "คำให้การสองหน้าขัดกัน เขาจึงหาประตูที่พยานปิดบังไว้ได้",
    },
    "Sigewinne": {
      "ปืนฟองน้ำ": "ฟองน้ำลอยครอบผู้บุกรุกไว้ชั่วครู่ ให้ทีมพาคนออกจากห้อง",
      "ชุดปฐมพยาบาล": "ผ้ายืดในชุดพยาบาลรัดเปลให้แน่นก่อนลงบันไดชัน",
    },
    "Sucrose": {
      "ผีเสื้อลมแปรธาตุ": "ผีเสื้อพาผงสีวนตามลม เผยขอบเขตของม่านที่มองไม่เห็น",
      "ขวดทดลอง": "ของเหลวในขวดเปลี่ยนสีใกล้รอยรั่ว เธอจดตำแหน่งไว้ทัน",
    },
    "Tartaglia": {
      "ดาบคู่วารี": "คมมีดน้ำแยกเป็นคู่ รับคมหนึ่งแล้วสวนกลับอีกด้าน",
      "ของเล่นให้ Teucer": "ของเล่นชิ้นเล็กทำให้เด็กยอมปล่อยมือจากประตูที่กำลังปิด",
    },
    "Thoma": {
      "หอกเพลิง": "ปลายหอกวาดวงไฟกั้นลาน ให้คนข้างในมีเวลาตั้งแถว",
      "เครื่องรางคุ้มครอง": "เครื่องรางแขวนที่ครัวสนาม บอกคนพลัดหลงว่ามีที่พัก",
    },
    "Tighnari": {
      "ลูกศรพฤกษา": "เมล็ดที่หัวลูกศรแตกหน่อ ทำเครื่องหมายเป้าแม้ในพุ่มทึบ",
      "คู่มือเจ้าหน้าที่พิทักษ์ป่า": "ภาพใบไม้ในคู่มือบอกหน่วยเดินเท้าว่าทางไหนมีละอองพิษ",
    },
    "Valeriy": {
      "หอกอัสนี": "ปลายหอกดึงสายฟ้าลงพื้นก่อนจะถึงแถวเสบียง",
      "เครื่องหมายหน่วย": "สองหน่วยจำเครื่องหมายเดียวกันได้ท่ามกลางควัน จึงรวมแถวทัน",
    },
    "Varesa": {
      "หน้ากากนักมวยปล้ำ": "สวมหน้ากากแล้วก้าวขึ้นวง ล่อผู้พิทักษ์ให้ออกห่างจากทีม",
      "ตะกร้าผลไม้": "ผลไม้ส่งถึงมือคนวิ่งส่งข่าวโดยไม่ต้องให้เขาหยุดพัก",
    },
    "Varka": {
      "ดาบคู่ลมเหนือ": "ดาบเล่มแรกปัดคานออก อีกเล่มค้ำทางให้คนท้ายสุด",
      "ธงกองสำรวจ": "ธงกองสำรวจโผล่เหนือหมอก หน่วยที่แยกกันจึงกลับมารวมพล",
    },
    "Venti": {
      "บทเพลงแห่งเสรีภาพ": "Venti ให้สายลมพาเสียงเพลงไปถึงคนที่พลัดกัน เพื่อบอกว่าถึงเวลารวมตัวแล้ว",
      "ไวน์แห่งอิสรภาพ": "Venti เปิดขวดให้กลิ่นไวน์ลอยไปกับสายลม พาคนที่พลัดกันกลับมารวมตัว",
      "พิณนักกวี": "พิณเล่นทำนองบ้านเกิด คนในค่ายจึงร้องตอบกันข้ามความมืด",
    },
    "Vesna": {
      "ดาบสายลม": "ลมตามคมดาบปัดหมวกยามปลิว อีกมือก็ชักกลอนประตู",
      "ผีเสื้อพเนจร": "ผีเสื้อหยุดเกาะทุกจุดพัก พาคนที่เดินช้าที่สุดกลับค่าย",
    },
    "Vodyanitsa": {
      "ม่านธารน้ำ": "ม่านน้ำหักภาพขบวนเป็นสองสาย ยามจึงเล็งผิดแนว",
      "หยดน้ำค้าง": "หยดใสกลิ้งย้อนบนพื้นเอียง เผยว่าห้องนี้ถูกภาพลวงบิดไว้",
    },
    "Wanderer": {
      "วงแหวนลม": "วงลมยกตัวเขาพ้นระยะผนึกที่ปูอยู่บนพื้น",
      "หมวกพเนจร": "เงาหมวกวาบเหนือยอดเสา ล่อสายตาคนเฝ้าให้พ้นจากบันได",
    },
    "Wriothesley": {
      "ตรา Fortress of Meropide": "ตราป้อมเปิดคลังให้ขบวนที่ติดอยู่ใต้แนวปิดล้อม",
      "นวมจักรกล": "หมัดกลกดบานประตูกลับเข้ารางที่หลุดจากแรงสั่น",
    },
    "Xiangling": {
      "พริกของ Guoba": "Guoba เคี้ยวพริกแล้วพ่นไฟไล่ไอเย็นที่จับกลอน",
      "หม้อซุป Wanmin Restaurant": "ซุปหม้อเดียวส่งกลิ่นถึงเวรดึก ทุกคนจึงหาครัวสนามเจอ",
    },
    "Xianyun": {
      "กลไกกระเรียน": "กระเรียนกลบินคาบปลายเชือกข้ามหน้าผาไปก่อนคน",
      "ว่าวเหินฟ้า": "ว่าวกินลมเหนือยอดไม้ เผยทิศที่เหมาะกับการร่อนลง",
    },
    "Xiao": {
      "หอกหยก": "หอกหยกดิ่งลงตรงศูนย์กลางเงาที่ไล่ตามขบวน",
      "หน้ากากยักษา": "หลังสวมหน้ากาก เขาล่อฝูงเงาออกจากเส้นทางอพยพเพียงลำพัง",
    },
    "Xilonen": {
      "เครื่องผสมเสียง": "เธอปรับเสียงเบสจนได้ยินจังหวะสั่นของเสาต้นที่กลวง",
      "ใบมีดโรลเลอร์": "ล้อเฉือนเป็นร่องบนพื้นลาด ให้คนปีนตามมีที่ยันเท้า",
    },
    "Xingqiu": {
      "ดาบพิรุณ": "ม่านดาบพิรุณรับแรงปะทะ กระจายคมเดียวออกเป็นหยดน้ำ",
      "นิยายกำลังภายใน": "ท่าในนิยายกลายเป็นรหัสนัดหมาย มีเพียงพวกเดียวกันที่อ่านออก",
    },
    "Xinyan": {
      "กีตาร์ไฟ": "คอร์ดแรกสะเทือนตะแกรงจนฝุ่นหลุด เผยช่องส่งเสียงใต้เวที",
      "กลองร็อก": "กลองตีสวนเสียงเตือนของหอ คนในลานจึงได้ยินจังหวะถอย",
    },
    "Yae Miko": {
      "กิ่งซากุระสายฟ้า": "กิ่งซากุระสามจุดล้อมลาน ใครข้ามแนวก็ทิ้งรอยอัสนี",
      "นิยายจาก Yae Publishing House": "ข้อความลับซ่อนในตอนจบ คนส่งสารเดินผ่านด่านพร้อมนิยายหนึ่งเล่ม",
    },
    "Yanfei": {
      "ตราพิพากษา": "ตราสีแดงประทับทับคำสั่งยึดเสบียง ขบวนรถจึงออกเดินทาง",
      "ตำรากฎหมาย": "เชิงอรรถในตำราเผยข้อยกเว้นที่ผนึกต้องยอมเปิดทาง",
    },
    "Yaoyao": {
      "หัวไชเท้าลูกขาว": "หัวไชเท้ากลิ้งลงบันไดไปถึงคนเฝ้าด่านที่ยังไม่ได้กินข้าว",
      "ตุ๊กตา Yuegui": "Yuegui กระโดดข้ามเศษหิน คอยส่งของให้คนที่มือยังไม่ว่าง",
    },
    "Yelan": {
      "สายไหมวารี": "เส้นไหมตึงขึ้นทีละจุด ตีกรอบวงยามโดยไม่มีใครรู้ตัว",
      "ลูกเต๋าหยก": "แต้มบนลูกเต๋าคือรหัสเปลี่ยนเส้นทาง สายข่าวเห็นก็แยกย้ายทันที",
    },
    "Yoimiya": {
      "จรวดดอกไม้ไฟ": "จรวดสีแดงพุ่งเหนือหลังคา ชี้ทางออกให้คนที่อยู่ไกลสุด",
      "ดอกไม้ไฟงานเทศกาล": "พลุแตกเป็นดอกไม้เหนือหอ กลบเสียงฝีเท้าขบวนสุดท้าย",
    },
    "Yumemizuki Mizuki": {
      "พัดแห่งฝัน": "ลมจากพัดค่อยๆ คลี่ฝันที่ขังยามเฝ้าค่ายไว้",
      "ขนมบำบัดฝัน": "รสหวานที่คุ้นเคยช่วยให้คนติดในภาพฝันจำโลกจริงได้",
    },
    "Yun Jin": {
      "ธงงิ้ว": "ธงงิ้วหมุนเปลี่ยนฉาก พรางจังหวะที่ทีมสลับแนว",
      "ทวนละครเวที": "ทวนกวาดตามก้าวรำ พันสายม่านของหอให้หลุดจากรอก",
    },
    "Zhongli": {
      "กระเป๋าเงินที่ปรึกษา": "ในกระเป๋าของ Zhongli มี Mora อยู่หนึ่งเหรียญ พอมันกลิ้งไปตกตรงกลไกของ Celestia จังหวะการต่อสู้ก็พลิกผัน",
      "เสาหินหยก": "เสาหินหยกรับน้ำหนักระเบียงที่ทรุด ให้คนเดินกลับได้อีกเที่ยว",
      "ลูกชิ้นกุ้งเทพอสูร": "Zhongli เรียกอุกกาบาตลงกลางแนวรบ ตรึงกองกำลังสวรรค์ให้กลายเป็นหิน",
    },
    "Zibai": {
      "ม่านแสงหยก": "แสงหยกทาบด่านเป็นเงาซ้อน ทำให้ขบวนข้ามพ้นสายตายาม",
      "ดาบแสงจันทร์": "คมจันทร์ตามแนวแสงสะท้อนไปถึงสลักที่ซ่อนอยู่หลังเสา",
    },
  };
  // Defeat, 42-day reprieve, 84-day reprieve, victory.
  const characterDialogue = {
    "Aether": [
      "ฉันเคยคิดว่าถ้าสองพี่น้องได้เจอกันอีกครั้ง ฉันจะเล่าเรื่องโลกใบนี้ให้เธอฟัง... ฉันจะเล่าตอนจบยังไงดี",
      "หกสัปดาห์เหรอ งั้นแวะบอกข่าวที่บ้านของแต่ละคนก่อน",
      "คราวนี้เรามีเวลาหาทางอ้อม ฉันอยากรู้ว่าหลังหอนั่นมีอะไร",
      "ฉันเคยคิดแต่อยากไปให้ถึงปลายทาง วันนี้ขอนั่งดูพระอาทิตย์ขึ้นกับนายก่อนนะ",
    ],
    "Aino": [
      "มันยังเดินอยู่นะ ดูสิ เฟืองทุกตัวหมุนตามที่ฉันออกแบบเลย แล้วทำไมเราถึงหยุดมันไม่ได้ล่ะ?",
      "ขอยืมโต๊ะเธอหกสัปดาห์นะ คราวนี้จะเก็บสกรูให้ครบเลย",
      "สิบสองสัปดาห์! ประกอบตัวทดลองได้อีกตั้งสามรุ่นแน่ะ",
      "ใช้ได้จริงด้วย! ช่วยจดที ก่อนที่ฉันจะถอดมันดูว่าทำไมถึงใช้ได้",
    ],
    "Albedo": [
      "เมื่อกี้ผมพยายามผสมสีท้องฟ้าก่อนที่แสงจะกลืนมันไป ผมจำสีนั้นไม่ได้แล้ว ทั้งที่เพิ่งเห็นกับตา",
      "รอยเล็กเท่านี้ทำให้ฟ้าหยุดได้หกสัปดาห์ น่าศึกษาจริงๆ",
      "ผมจะร่างรอยแตกไว้ คุณช่วยจับเวลาที่มันสมานที",
      "ยืนนิ่งสักครู่ได้ไหม ผมอยากวาดสีหน้าคนที่เพิ่งเปลี่ยนชะตาของตัวเอง",
    ],
    "Alhaitham": [
      "ผมเป็นคนบอกว่าความเสี่ยงนี้ยอมรับได้ ตอนนั้นคนที่ต้องรับความเสี่ยงเชื่อผมเสียด้วย นั่นแหละที่ผมเสียใจ",
      "แบ่งหกสัปดาห์ให้ดี การประชุมกินเวลาในนั้นด้วย",
      "รอยแตกเป็นหลักฐาน เอากระดาษมา ผมจะลอกไว้ก่อนมันเปลี่ยน",
      "รายงานฉบับนี้ขอให้คุณลงชื่อเอง ผมหมดเวลางานแล้ว",
    ],
    "Aloy": [
      "ตรงนี้เคยมีเสียงนก พวกมันมักรู้ก่อนฉันว่าอันตรายผ่านไปแล้ว ฉันยืนฟังมานานเหลือเกิน",
      "ฉันเห็นช่องเปิดแวบหนึ่ง หกสัปดาห์พอให้เราหัดยิงเข้าตรงนั้น",
      "มาดูนี่ รอยร้าววิ่งตามข้อต่อ คราวหน้าฉันรู้แล้วว่าจะเล็งตรงไหน",
      "เงี่ยหูฟังสิ เสียงนกกลับมาแล้ว เราวางคันธนูได้สักที",
    ],
    "Alyosha": [
      "ผมบอกที่บ้านให้เก็บตราเดินทางดวงสุดท้ายไว้ฉลองตอนเราชนะ คุณช่วยเก็บมันแทนผมที ผมทนมองไม่ไหว",
      "ผมขอหนึ่งวันไปแจ้งคนที่ด่าน ที่เหลือเราค่อยเตรียมกัน",
      "ผมเห็นประกายตรงรอยแตก คราวหน้าไปยืนข้างผมนะ จะชี้ให้ดู",
      "เก็บเครื่องรางไว้เถอะ ตอนเดินกลับคุณคงอยากมีอะไรติดมือ",
    ],
    "Amber": [
      "ตอนเราออกมา เด็กบนกำแพงโบกมือให้ฉันใหญ่เลย ฉันยังตะโกนกลับไปว่าไว้เจอกันตอนฉลอง... ไม่น่าพูดเลย",
      "ฉันจะบินล่วงหน้าไปแจ้งกองอัศวิน ฝากนับคนทีนะ",
      "จากข้างบนเห็นรอยแตกชัดเลย เอาแผนที่มา ฉันจะวงให้",
      "แข่งร่อนกลับเมืองกันไหม? คราวนี้ใครถึงเส้นชัยก่อนเลี้ยงมื้อเย็น!",
    ],
    "Anastasya": [
      "รอยแตกแรกบนเกราะอยู่ตรงนี้ ฉันได้ยินมันชัด แต่ก็ยังบอกทุกคนว่ายืนข้างฉันแล้วจะปลอดภัย",
      "น้ำแข็งละลายช้าลงแล้ว เรามีเวลาพาคนข้ามฝั่ง",
      "มองผ่านเกล็ดนี้สิ รอยร้าวบนหอสวรรค์ลึกกว่าที่เราเห็น",
      "แบมือหน่อยสิ อยากให้คุณเห็นเกล็ดสุดท้ายก่อนมันละลาย",
    ],
    "Arataki Itto": [
      "อุชิ ถ้าพวกลูกน้องถามว่าเจ๋งอย่างลูกพี่แพ้ได้ไง... ข้าคงต้องบอกว่าข้าก็กลัว ตอนนั้นข้ากลัวจริง ๆ",
      "หกสัปดาห์เรอะ! พอให้แก๊งข้าฝึกท่าไม้ตายใหม่เลยนะ",
      "เห็นรอยนั่นไหม อุชิ! เลิกเคี้ยวหญ้าแล้วมาดูผลงานลูกพี่เร็ว",
      "เฮ้! ตอนเล่ากลับไป บอกด้วยนะว่าแก๊งอิตโต้ยกนายขึ้นบ่าก่อนใคร!",
    ],
    "Arlecchino": [
      "เด็ก ๆ ในบ้านรู้ว่าต้องทำอย่างไรเมื่อได้ยินสัญญาณถอนตัว ฉันเป็นคนสอนเอง แต่ฉันไม่เคยสอนให้พวกเขารับมือกับวันที่ฉันรักษาคำพูดไม่ได้",
      "คืนนี้เด็กๆ จะได้กินอาหารร้อน หกสัปดาห์นั้นฉันจะจัดการเอง",
      "เก็บเส้นทางเข้าหอไว้เป็นความลับ แม้แต่คนในบ้านก็ให้รู้เท่าที่จำเป็น",
      "กลับบ้านเถอะ มีเด็กคนหนึ่งยืนยันว่าจะรอเปิดประตูให้คุณด้วยตัวเอง",
    ],
    "Baizhu": [
      "ผมรู้ว่าควรพูดอย่างไรให้คนไข้สบายใจ แต่ถ้าเขาถามว่าพรุ่งนี้จะดีขึ้นไหม... วันนี้ผมคงได้แต่ก้มหน้า",
      "หกสัปดาห์พอให้ยาเที่ยวใหม่มาถึงท่าเรือ ขอบคุณคุณจริงๆ",
      "ก่อนกลับไปที่หอ แวะร้านผมหน่อย ผมจะเปลี่ยนห่อยาให้",
      "หมดหน้าที่แล้วหรือครับ? สำหรับหมอ เพิ่งถึงเวลาตรวจทุกคนต่างหาก",
    ],
    "Barbara": [
      "ฉันร้องท่อนรับตั้งสองรอบ ปกติคนข้างล่างจะร้องต่อเอง รอบนี้ฉันต้องร้องจนจบคนเดียว",
      "ยังมีเวลาอีกหกวันอาทิตย์ ฉันอยากให้ทุกคนได้ฟังเพลงด้วยกันทุกครั้ง",
      "ฉันจะซ้อมกับคณะประสานเสียง พอถึงวันนั้นคุณต้องมาอยู่แถวหน้าเลยนะ",
      "ชูมือหน่อยค่ะ! ท่อนสุดท้ายนี้ฉันอยากให้ทั้งเมืองร้องไปกับคุณ",
    ],
    "Beidou": [
      "ลูกเรือถามว่าจะหันหัวเรือไปทางไหน ข้ายืนจับหางเสืออยู่นาน ทั้งชีวิตเพิ่งเคยกลัวจะต้องตอบว่าไม่รู้",
      "หกสัปดาห์พอแล่นไปกลับหนึ่งเที่ยว อยากให้ข้าขนอะไรมา?",
      "คราวหน้าข้าจะหันหัวเรือให้ตรงรอยนั่น เจ้ายืนข้างข้าแล้วให้สัญญาณ",
      "ยกจอกขึ้น! วันนี้ให้คนที่กล้าหันหัวเรือชนสวรรค์ดื่มก่อน",
    ],
    "Bennett": [
      "ผมลองนึกมุกเรื่องดวงซวยอยู่ จะได้เห็นคุณหัวเราะสักนิด... แต่เรื่องนี้ผมหัวเราะไม่ออกจริง ๆ",
      "ตั้งสี่สิบสองวัน! โชคผมเริ่มดีขึ้นแล้วใช่ไหม?",
      "ยังเหลือตั้งสิบสองสัปดาห์ คราวหน้าให้ผมลองเปิดทางอีกนะ",
      "เฮ้ เราชนะจริงๆ เหรอ? งั้นขอจดวันนี้ไว้หน้าแรกของบันทึกทีมเลย!",
    ],
    "Candace": [
      "ตอนเด็ก ๆ ถามว่าโล่ของฉันกันแสงบนฟ้าได้ไหม ฉันตอบว่าได้ทันที ถ้าย้อนกลับไปได้ ฉันอยากกอดพวกเขาให้นานกว่านั้น",
      "คืนนี้ที่หมู่บ้านจะมีน้ำให้ทุกคน พรุ่งนี้ค่อยคิดเรื่องหกสัปดาห์นั้น",
      "ฉันจะผลัดเวรยามใหม่ เรามีเวลาพอให้ทุกคนได้พักบ้าง",
      "เมื่อถึงหมู่บ้าน วางอาวุธไว้หน้าประตูนะ วันนี้คุณเป็นแขกของฉัน",
    ],
    "Charlotte": [
      "พาดหัวเขียนง่ายค่ะ แค่สองคำว่าเราแพ้ แต่พอเห็นหน้าคนที่ฝากฉันมาทำข่าว มือฉันก็เขียนต่อไม่ได้",
      "พาดหัวเช้านี้ต้องใช้คำให้แม่น เราซื้อเวลาได้ ยังเหลือเรื่องให้ติดตาม",
      "ขอภาพรอยร้าวอีกมุมค่ะ! ภาพนี้จะทำให้คนทั้งเมืองเข้าใจว่าเราทำได้แค่ไหน",
      "ขอถามคำเดียวก่อนทุกคนแย่งสัมภาษณ์นะคะ คุณอยากบอกข่าวดีกับใครคนแรก?",
    ],
    "Chasca": [
      "ข้างบนเงียบจนฉันได้ยินบังเหียนกระทบกัน ฉันบินวนอยู่ตั้งนาน ทั้งที่รู้ว่าเล็งอีกกี่ครั้งก็สายไปแล้ว",
      "ลมเพิ่งเปลี่ยนทิศ ฉันจะใช้ช่วงสงบนี้ไปคุยกับทั้งสองฝั่ง",
      "จากบนฟ้าเห็นทางแยกตรงรอยร้าว ฉันจำมันได้",
      "ได้ยินไหม เสียงข้างล่างดังขึ้นมาถึงนี่เลย อยากบินลงไปพร้อมกันไหม?",
    ],
    "Chevreuse": [
      "ในรายงานฉันเขียนว่า ทุกคนปฏิบัติหน้าที่ครบถ้วน นี่เป็นครั้งแรกที่ฉันอยากขีดประโยคนั้นทิ้ง อ่านแล้วมันเจ็บเหลือเกิน",
      "ให้เวลาสองวันเก็บหลักฐาน ที่เหลือฝึกตามรายงานจริง",
      "บันทึกตำแหน่งกระทบทีละจุด เราจะไม่เสียกระสุนนัดต่อไปเปล่าๆ",
      "ปิดคดีได้ค่ะ ทีนี้คุณคงยอมพักกินของทอดกับฉันสักมื้อ",
    ],
    "Chiori": [
      "ฉันเอาเข็มมาด้วยตามเคย พอเห็นธงขาดก็เผลอจะเย็บมัน ราวกับว่าปะรอยตรงนี้แล้วเรื่องวันนี้จะย้อนคืนได้",
      "หกสัปดาห์พอแก้แบบ ชุดคราวหน้าต้องให้คุณยกแขนได้สูงกว่านี้",
      "รอยปริยาวขนาดนั้น ต่อให้เป็นฉันก็ซ่อมยาก เก็บภาพไว้สิ",
      "อยู่นิ่งๆ ฉันจะเก็บชายเสื้อให้ คุณคงไม่อยากขึ้นรูปฉลองชัยในสภาพนี้",
    ],
    "Chongyun": [
      "ผมท่องคาถาถูกทุกคำเลยนะครับ อาจารย์คงภูมิใจ ถ้าเพียงแต่มันช่วยใครได้สักคน",
      "หกสัปดาห์นี้ผมจะเขียนยันต์เพิ่ม คุณเอาชุดแรกไปนะ",
      "คราวนี้ยันต์ติดตรงรอยแยกจริงๆ ผมอยากตรวจที่นั่นตอนกลางวันอีกที",
      "เอ๊ะ จบแล้วหรือครับ? ไอเย็นยังอยู่เลย มาแบ่งไอศกรีมกันไหม",
    ],
    "Citlali": [
      "มานั่งใกล้ ๆ ยายนี่หน่อยเถอะ วันนี้ข้าไม่มีคำทำนายอะไรจะบอกเจ้าแล้ว อยู่คนเดียวแล้วมันใจหายน่ะ",
      "หกสัปดาห์ อย่ารอจนวันสุดท้ายแล้วค่อยมาเคาะประตูบ้านข้าล่ะ",
      "ข้าอ่านดาวให้ได้อีกหลายคืน เจ้าก็หัดนอนบ้างเถอะ",
      "มากอดอะไรกันต่อหน้าคนเยอะแยะ... เอาเถอะ แค่คราวนี้นะ",
    ],
    "Clorinde": [
      "ตอนดวล อย่างน้อยคนที่ยอมลดดาบก็เลือกชะตาตัวเองได้ วันนี้ฉันลดดาบลง ทั้งที่ยังมีคนรอให้ฉันสู้แทนอยู่",
      "หกสัปดาห์จากนี้ มาฝึกกับฉันตอนรุ่งสาง",
      "ผนึกเปิดหลังเสียงกระสุนนัดที่สอง ครั้งหน้าฟังสัญญาณฉัน",
      "การประลองสิ้นสุดแล้ว คราวนี้ฉันขอเป็นฝ่ายยื่นมือให้คุณก่อน",
    ],
    "Collei": [
      "ฉันซ้อมบอกอาจารย์ไว้ว่า คราวนี้ฉันดูแลทุกคนได้แล้ว พอได้เจอหน้าอาจารย์จริง ๆ ฉันคงพูดได้แค่ขอโทษ",
      "ฉันเขียนป้ายบอกทางเพิ่มได้นะ! คราวนี้จะตรวจตัวสะกดสองรอบเลย",
      "สิบสองสัปดาห์พอให้ทางเลี่ยงในป่าเปิด ฉันอาสานำทางค่ะ",
      "ฉันอยากเขียนจดหมายถึงแอมเบอร์... ต้องใช้กี่หน้าถึงจะเล่าวันนี้หมดนะ",
    ],
    "Columbina": [
      "เธอได้ยินท่อนที่ควรมีคนร้องรับไหม? ฉันเว้นไว้ตรงนั้นทุกครั้ง แต่คราวนี้พอไม่มีเสียงตอบ ฉันก็ร้องต่อไม่ได้",
      "ฉันจะนับจันทร์ให้ พอถึงคืนสุดท้ายเธอค่อยมาปลุก",
      "ตรงที่ฟ้าร้าวมีเสียงอีกเสียงหนึ่ง คราวหน้าเราลองร้องตอบมันดูไหม",
      "แปลกจัง พอฟ้าเงียบลง ฉันกลับได้ยินเสียงเธอชัดที่สุด",
    ],
    "Cyno": [
      "พวกเขาถูกตัดสินต่อหน้าฉันโดยไม่มีโอกาสแก้ต่าง แม้แต่ตัวฉันเองยังต้องยืนฟังจนจบ... นี่หรือคือสิ่งที่ฉันปกป้องได้",
      "หกสัปดาห์นี้ฉันจะเฝ้าผนึกเอง ฝากสำรับไพ่ไว้กับนาย",
      "ช่องโหว่เปิดนานพอให้ตามตัวผู้บงการ เราต้องเก็บหลักฐานก่อน",
      "คืนนี้เล่นไพ่กัน คราวนี้ต่อให้จั่วได้ชะตาไม่ดี นายก็รู้แล้วว่าเปลี่ยนมันได้",
    ],
    "Dahlia": [
      "ผมจับเชือกระฆังอยู่ตั้งนาน ถ้าผมตี ทุกคนจะเปิดหน้าต่างรอฟังข่าวดี ผมทำอย่างนั้นกับพวกเขาไม่ลง",
      "สี่สิบสองเช้าที่ระฆังจะดังได้ ผมอยากให้คุณมาฟังเช้าแรก",
      "ได้เวลาเตรียมวิหารรับทุกคนแล้ว คุณช่วยจัดม้านั่งแถวนี้นะ",
      "วันนี้ใครๆ ก็อยากตีระฆัง แต่ผมเก็บรอบแรกไว้ให้คุณ",
    ],
    "Danica": [
      "ฉันยกโคมจนแขนชา กลัวคนที่มองขึ้นมาจะหาเราไม่เจอ ที่แท้คนที่ยืนรอปาฏิหาริย์อยู่ตรงนี้ก็คือฉันเอง",
      "แสงยังเหลือ เราผลัดกันถือไปจนถึงยามเช้าได้",
      "สิบสองสัปดาห์พอให้ฉันแขวนโคมตลอดทาง คราวหน้าคุณจะไม่หลง",
      "ลองดับโคมดูสิ เรามองเห็นกันได้ด้วยแสงเช้าแล้ว",
    ],
    "Dehya": [
      "ตอนรับงาน ฉันบอกให้พวกเขาเอาหลังมาฝากไว้กับฉัน พอเอาเข้าจริง ฉันยังไม่กล้าหันไปสบตาใครเลย",
      "หกสัปดาห์เชียว? หาคนมาผลัดเวรฉันสักคืนคงทันนะ",
      "ฉันรู้แล้วว่าต้องยืนรับตรงไหน คราวหน้าเธอเล็งไปที่รอยแตกเลย",
      "เอ้า ยิ้มหน่อย คนที่ฉันรับงานคุ้มกันเพิ่งพาฟ้าทั้งผืนลงมาเองนะ",
    ],
    "Diluc": [
      "ผมทิ้งไฟหน้าโรงกลั่นไว้ให้คนที่กลับดึกทุกคืน คืนนี้ผมอยากให้มันส่องไปถึงคนที่ยังรอข่าวจากเราเหลือเกิน",
      "คืนนี้ผมรับเวรเอง คุณใช้เวลาที่เหลือให้คุ้มก็พอ",
      "ผมจะเฝ้ารอยนั้นทุกคืน ถ้าแสงเปลี่ยน คุณจะรู้เป็นคนแรก",
      "เช้านี้คงเปิดร้านสายหน่อย อยู่ดื่มน้ำองุ่นด้วยกันสักแก้วสิ",
    ],
    "Diona": [
      "พ่อคงนั่งรอให้ฉันกลับไปบ่นใส่เหมือนทุกที ฉันอยากได้ยินพ่อบ่นฉันก่อนสักครั้ง... วันนี้ฉันเหนื่อยแล้ว",
      "หกสัปดาห์นะ สัญญาก่อนว่าพวกผู้ใหญ่จะไม่ฉลองกันตั้งแต่วันนี้!",
      "คราวหน้าฉันจะผสมอะไรให้ทุกคนตาสว่างทั้งคืน คอยดูสิ",
      "ห้ามสั่งเหล้านะ! วันนี้ฉันทำเครื่องดื่มแก้วพิเศษให้เธอเอง",
    ],
    "Dori": [
      "ฉันนึกว่าของทุกอย่างมีราคา ถ้าจ่ายแพงพอก็ต้องซื้อได้สิ แล้วจะให้ฉันเอาโมราทั้งหมดนี่ไปแลกเมื่อวานคืนจากใคร?",
      "สี่สิบสองวันคิดค่าเก็บของเท่าไรดี... ล้อเล่นน่า เที่ยวนี้ฉันออกให้",
      "ตั้งแปดสิบสี่วัน! ฉันจองค่าระวางของเที่ยวหน้าให้แล้ว",
      "กำไรงามที่สุดในชีวิต! อะไรเหรอ? ก็พรุ่งนี้ยังมีลูกค้าเดินเข้าร้านไง",
    ],
    "Durin": [
      "ผมเผลอพลิกหน้ากระดาษ นึกว่าต้องมีหน้าถัดไปที่ทุกอย่างดีขึ้นสักหน้า คุณก็เห็นใช่ไหม... มันว่างเปล่า",
      "เราแทรกเรื่องสั้นได้อีกหกบท ก่อนถึงตอนที่ฟ้ากลับมา",
      "รอยแยกดูเหมือนปีกเลยนะ คราวหน้าผมอยากบินลอดมันดู",
      "ผมนึกตอนจบได้แล้ว แต่คราวนี้ให้คุณเป็นคนเขียนประโยคสุดท้ายดีไหม",
    ],
    "Emilie": [
      "กลิ่นควันติดปลายนิ้วฉันอยู่เลยค่ะ ฉันรู้วิธีกลบมันตั้งหลายวิธี แต่คงไม่มีวิธีไหนทำให้ฉันลืมวันนี้ได้",
      "ฉันเก็บกลิ่นตอนผนึกเปิดไว้ได้ หกสัปดาห์พอจะแยกส่วนประกอบ",
      "แสงดับไปแล้ว แต่กลิ่นตรงรอยร้าวยังอยู่ ฉันตามมันต่อได้",
      "กลิ่นแรกหลังการต่อสู้เป็นกลิ่นฝน คุณอยากตั้งชื่อน้ำหอมขวดนี้ไหม",
    ],
    "Escoffier": [
      "ฉันสั่งตั้งโต๊ะไว้เจ็ดที่ กะว่าจะบ่นคนสุดท้ายที่มาสายเสียหน่อย พอถึงเวลา ฉันกลับไม่กล้าเปิดประตูห้องอาหาร",
      "หกสัปดาห์ค่ะ ขอรายชื่อคนกับคลังเสบียง ฉันจะจัดเมนูเอง",
      "เรามีเวลาทดสอบสูตรใหม่ กินให้อิ่มก่อนค่อยกลับไปที่หอ",
      "เชิญนั่งค่ะ อาหารจานนี้ควรเสิร์ฟตอนที่ทุกคนวางอาวุธแล้วเท่านั้น",
    ],
    "Eula": [
      "ฉันเคยบอกว่าจะจำทุกความแค้นไว้ พอมาถึงวันนี้ ต่อให้จำได้แม้แต่ชื่อของคนบนฟ้า มันจะเอาอะไรคืนมาให้เราได้ล่ะ?",
      "หกสัปดาห์พอซ้อมก้าวที่เราพลาด คราวหน้าตามจังหวะฉัน",
      "ฉันนับได้สามจังหวะก่อนหอร้าว เรากลับไปเริ่มตรงจังหวะที่สองกัน",
      "อย่าคิดว่าชัยชนะจะล้างหนี้หมดนะ คุณยังติดฉันอยู่หนึ่งเพลงเต้นรำ",
    ],
    "Faruzan": [
      "ในตำราของข้า พอกลไกเปิดจะมีเสียงคลิกเบา ๆ ข้าแนบหูฟังจนเจ้ามาแตะไหล่นี่แหละ ถึงยอมรับว่ามันจบแล้ว",
      "หกสัปดาห์พอดี ลงชื่อเรียนกับอาจารย์ฟารุซันเสียสิ",
      "เห็นรอยแตกหรือยัง คราวนี้ศิษย์ลองอธิบายกลไกให้อาจารย์ฟัง",
      "เก่งมาก คราวนี้จะยอมเรียกฉันว่าอาจารย์ได้หรือยัง?",
    ],
    "Fischl": [
      "ข้า... ออซ อย่าเพิ่งแปลนะ ขอให้ฉันพูดเองสักครั้ง ฉันกลัวว่าพอกลับถึงบ้านแล้ว จะไม่มีนิทานเล่มไหนทำให้คืนนี้ดีขึ้นเลย",
      "หกสัปดาห์แห่งสนธยา! ฝากแจ้งท่านพ่อว่าข้าจะกลับทันมื้อค่ำด้วย",
      "ออซเห็นรอยแยกจากบนฟ้า เจ้าจะร่วมสำรวจอาณาจักรต้องห้ามกับข้าหรือไม่?",
      "ผู้ร่วมชะตาเอ๋ย จงรับเกียรตินี้! เอ่อ คือ... ดีใจจังที่วันนี้มีเธออยู่ด้วย",
    ],
    "Flins": [
      "ปกติผมจุดตะเกียงให้คนหลงทางเห็นแล้วอุ่นใจ คืนนี้แสงมันส่องชัดไปหน่อย ผมอยากเก็บสีหน้าทุกคนตอนนั้นไว้ในความมืดมากกว่า",
      "หกสัปดาห์ข้างหน้า ผมยินดีรับเวรดึกแทนคุณ",
      "แสงรั่วจากยอดหอทุกคืน ระหว่างเดินเวรผมจะคอยสังเกตให้",
      "คืนนี้ตะเกียงดวงนี้พาคนเป็นกลับบ้าน คงไม่มีงานใดน่ายินดีกว่านี้",
    ],
    "Freminet": [
      "ใต้ผิวน้ำ ถ้าเสียงดังเกินทน ผมยังดำลึกลงไปได้ แต่เสียงประตูปิดเมื่อกี้... ผมเอามืออุดหูแล้วก็ยังได้ยิน",
      "หกสัปดาห์... ผมซ่อมข้อพับของ Pers ทันแน่",
      "ผมเห็นช่องแคบตรงฐาน ขอผมลองดำลงไปสำรวจให้ก่อนนะ",
      "ฟังสิ Pers เดินเป็นจังหวะเดิมแล้ว ทีนี้ผมก็กล้าถอดหมวกสักที",
    ],
    "Furina": [
      "ฉันเกือบโค้งให้คนดู ร่างกายมันจำเองน่ะ ช่วยจับมือฉันไว้ที ฉันไม่อยากต้องยิ้มรับตอนจบแบบนี้อีกแล้ว",
      "พักการแสดงหกสัปดาห์! อะแฮ่ม ระหว่างนี้เราไปกินเค้กกันเงียบๆ เถอะ",
      "สิบสองสัปดาห์สำหรับองก์สุดท้าย คราวนี้ฉันอยากเลือกตอนจบเอง",
      "ทำไมทุกคนมองฉันล่ะ? โค้งพร้อมกันสิ บนเวทีนี้มีที่ให้เธอด้วย!",
    ],
    "Gaming": [
      "ผมฝากพ่อให้ยืนแถวหน้า จะได้เห็นหัวสิงโตชัด ๆ ตอนเราเดินกลับ ตอนนี้ผมอยากให้พ่ออยู่ไกลจนมองหน้าผมไม่เห็น",
      "หกสัปดาห์พอจัดขบวนเล็กๆ ให้คนในเมืองยิ้มกันได้เนอะ",
      "คราวหน้าพอกลองดังสามที คุณส่งผมขึ้นไปตรงรอยนั้นเลย",
      "ยกหัวสิงโตขึ้นสิ! วันนี้ผมอยากให้คุณเห็นคนยิ้มจากตรงนี้",
    ],
    "Ganyu": [
      "ดิฉันตรวจรายชื่อผู้ขอความช่วยเหลือจนครบแล้วค่ะ ที่ยากคือช่องถัดไป... ดิฉันเขียนคำว่า «เรียบร้อย» ให้พวกเขาไม่ได้เลย",
      "หกสัปดาห์... ต้องจัดส่งเสบียงกี่เที่ยว ขอเวลาคำนวณสักครู่นะคะ",
      "เส้นทางส่งของจะกลับมาเปิดทัน ดิฉันจะรีบแจ้งท่าเรือคืนนี้",
      "เอ๊ะ วันนี้เลิกงานได้แล้วหรือคะ? ถ้าอย่างนั้น... เดินกลับด้วยกันไหมคะ",
    ],
    "Gorou": [
      "ทหารยังยืนรอฟังผมอยู่ ทั้งที่ธงของเราลงไปกองกับพื้นแล้ว ผมจะมองตาพวกเขาแล้วบอกว่าเรามาได้เท่านี้ได้ยังไง",
      "หกสัปดาห์นี้เราต้องฝึกถอนกำลังด้วย ทุกคนจะได้กลับมาครบ",
      "ถ้าปักธงตรงรอยแยก ทหารทั้งสองแนวจะเห็นพร้อมกัน ฉันอาสาเอง",
      "แถวตรง! เอ่อ วันนี้อนุญาตให้โยนหมวกได้... เดี๋ยว หมวกผมด้วยเหรอ!",
    ],
    "Hu Tao": [
      "แปลกนะ ปกติคนอื่นต่างหากที่ต้องให้ฉันช่วยหาคำอำลา พอเป็นตาฉันเอง กลับอยากขอเวลาอีกสักเดี๋ยว",
      "เพิ่มอีกสี่สิบสองเช้า เอ้า อย่าทำหน้าจะจองโลงกันสิ!",
      "แปดสิบสี่วัน มีเวลาคิดกลอนอีกตั้งหลายบท เธอช่วยหาคำคล้องกับฟ้าที",
      "วันนี้โถงแห่งการเกิดใหม่เงียบกริบ ดีจัง! ปิดร้านไปหาอะไรกินกัน",
    ],
    "Iansan": [
      "ฉันสอนลูกศิษย์เสมอว่าอย่าเพิ่งนับตัวเองแพ้ก่อนเสียงระฆัง พอระฆังดังจริง ๆ ฉันยังอยากให้ใครบอกว่าฉันฟังผิด",
      "หกสัปดาห์ ฝึกสี่ พักสอง ฉันจัดตารางให้เอง",
      "คราวหน้าต้องออกแรงให้ตรงจังหวะที่รอยนั้นเปิด มาจับคู่ซ้อมกัน",
      "ยืดกล้ามก่อนฉลอง! คนล้มนอนเพราะเป็นตะคริวหลังชนะฉันเห็นมาเยอะแล้ว",
    ],
    "Ifa": [
      "เพื่อน นายถอดกระเป๋ายาจากไหล่ฉันให้ที ฉันยังเผลอเปิดมันอยู่เรื่อย ทั้งที่รู้ว่าข้างในไม่มีอะไรช่วยเรื่องนี้ได้",
      "หกสัปดาห์ก็พอแวะดูเจ้าพวกตัวเล็กที่บ้านได้ ไปด้วยกันไหม",
      "ทางบนฟ้าเปิดกว้างขึ้นเยอะ คราวหน้าฉันบินรับนายตรงนี้ได้เลย",
      "ได้ยินเสียงร้องนั่นไหมเพื่อน สัตว์ทั้งฝูงรู้ข่าวดีก่อนพวกเราอีก!",
    ],
    "Illuga": [
      "ป้ายตรงแยกนั่น ผมเป็นคนเขียนว่าทางนี้ปลอดภัย พอเห็นคนเดินตามมัน ผมอยากย้อนกลับไปลบคำนั้นเหลือเกิน",
      "ผมจะเก็บแสงดวงนี้ไว้ที่ทางเข้า เผื่อหกสัปดาห์นี้ใครหาทางกลับ",
      "ขอผมเฝ้ารอยแยกเอง คุณจำทางเดินกลับได้แล้วใช่ไหม",
      "เมื่อเช้าผมนับคนที่ออกมา ตอนนี้นับอีกที... ครบจริงๆ ด้วย",
    ],
    "Ineffa": [
      "ไอโนขอให้ฉันบันทึกเสียงตอนเราชนะค่ะ ฉันเปิดระบบบันทึกค้างไว้จนถึงตอนนี้... จะให้ฉันเอาอะไรกลับไปให้เธอฟังดีคะ",
      "ฉันบันทึกเวลาที่เหลือไว้แล้ว จะให้ตั้งเสียงเตือนสำหรับมื้อเย็นด้วยไหมคะ",
      "ตรวจพบความเสียหายต่อเนื่องที่ฐานหอ ฉันกับ Birgitta จะเฝ้าบริเวณนี้ค่ะ",
      "งานเสร็จแล้วค่ะ... แต่ถ้าคุณจะจับมือฉันต่ออีกสักครู่ ก็ไม่มีงานถัดไปขัดจังหวะค่ะ",
    ],
    "Jahoda": [
      "ตอนแจกถุงมือฉันยังพูดอยู่เลยว่า งานแค่นี้เอง ตอนนี้อยากย้อนกลับไปบอกทุกคนว่าฉันกลัวเหมือนกัน จะได้ไม่ต้องทำเก่งใส่กันจนวินาทีสุดท้าย",
      "หกสัปดาห์พอหาอะไหล่ราคาดี ฝากเฝ้าร้านให้ทีนะ",
      "ตรงรอยแตกมีชิ้นส่วนหล่นมาด้วย ฉันขอเก็บไปลองประกอบนะ!",
      "ไหนๆ งานก็จบแล้ว ขอฉันเป็นคนเลี้ยงข้าวเธอบ้างเถอะ",
    ],
    "Jean": [
      "ฉันเซ็นคำสั่งให้ทุกคนออกมาเอง จำได้ว่าลงชื่อโดยมือไม่สั่นเลย แต่จดหมายถึงครอบครัวพวกเขา ฉันยังเขียนไม่พ้นบรรทัดแรก",
      "พรุ่งนี้ฉันจะเปิดห้องประชุมแต่เช้า แต่คืนนี้ทุกคนต้องได้นอน",
      "แปดสิบสี่วันพอให้เราฝึกคนมารับช่วง ฉันอยากให้ทุกบ้านมีคนกลับไปหา",
      "จากหน้าต่างห้องทำงาน ฉันเฝ้ามองเมืองนี้มานาน วันนี้เราออกไปเดินด้วยกันเถอะ",
    ],
    "Kachina": [
      "ฉันซ้อมลุกทุกครั้งที่ล้ม จริง ๆ นะ แต่คราวนี้พอลุกขึ้นมา หอคอยก็ยังอยู่ตรงนั้น... ฉันอยากนั่งร้องไห้สักพักได้ไหม",
      "อีกหกสัปดาห์ฉันต้องขับได้ตรงกว่านี้ คุณมาดูฉันซ้อมนะ",
      "ฉันเจาะถึงรอยร้าวแล้ว! ครั้งหน้าฉันขอไปเป็นคนแรกได้ไหม?",
      "ฉันทำได้ด้วยเหรอ? อย่าเพิ่งไปนะ ฉันอยากจำว่าตอนดีใจที่สุดเรายืนตรงไหน",
    ],
    "Kaedehara Kazuha": [
      "ตอนออกเรือ ลมพาเสียงคนริมฝั่งมาถึงข้า แม้แต่คำเบา ๆ ก็ฟังชัด วันนี้ข้าอยากฝากคำขอโทษกลับไป ลมกลับสงัดเหลือเกิน",
      "ลมพัดใบไม้ไปได้ไกลในหกสัปดาห์ เราเองก็เช่นกัน",
      "ข้าได้ยินลมลอดหินเป็นครั้งแรก วันหน้าเสียงนี้จะนำเรากลับมา",
      "ก่อนกลับ ขอฟังลมตรงนี้อีกหน่อย วันนี้มันไม่มีเสียงหอคอยปะปนแล้ว",
    ],
    "Kaeya": [
      "วางใจเถอะ ฉันมีไพ่อีกใบ... อยากได้ยินแบบนั้นใช่ไหม? ฉันเองก็อยากพูดแล้วให้มันเป็นจริงสักครั้ง",
      "ได้วันหยุดเพิ่มสี่สิบสองวัน... ถ้า Jean ถาม ฉันไม่เคยพูดประโยคนี้นะ",
      "มีรอยแตกให้คนเฝ้ามอง ส่วนฉันจะไปดูประตูอีกฝั่ง คุณมากับฉันไหม",
      "ดื่มด้วยกันสักแก้วสิ เรื่องจริงวันนี้เหลือเชื่อจนฉันไม่ต้องแต่งอะไรเพิ่มแล้ว",
    ],
    "Kamisato Ayaka": [
      "ก่อนออกมา ฉันพับพัดเก็บไว้ ตั้งใจว่าจะกางรำให้ทุกคนดูเมื่อเรื่องจบ ตอนนี้แค่เสียงซี่พัดขยับก็ดังเกินไปแล้วค่ะ",
      "อีกหกสัปดาห์ดอกไม้ที่บ้านคงบานพอดี ฉันจะรอคุณมาวางแผนด้วยกันนะคะ",
      "รอยคมที่สองยังไปไม่ถึงใจกลาง ขอคุณช่วยจับจังหวะให้ฉันอีกครั้ง",
      "วันนี้ขอวางพัดลงสักครู่ได้ไหมคะ ฉันอยากปรบมือให้คุณด้วยสองมือของตัวเอง",
    ],
    "Kamisato Ayato": [
      "ผมเผื่อทางถอยให้ทุกฝ่าย ยกเว้นคนที่ผมขอให้เชื่อมั่นในชัยชนะของเรา พวกเขาจะมองว่าผมผิดคำ ก็สมควรแล้วครับ",
      "หกสัปดาห์ที่ได้มา ขอให้เป็นความลับจนกว่าเราจะจัดคนลงตัว",
      "พออีกฝ่ายต้องหันไปอุดรอยนั้น เราก็มีทางเจรจาเพิ่มอีกทาง",
      "งานเลี้ยงคงเริ่มแล้ว แต่ชาถ้วยนี้ผมตั้งใจเก็บไว้ดื่มกับคุณสองคน",
    ],
    "Kaveh": [
      "รู้ไหมว่าตอนร่างแบบ ฉันวาดบ้านหลังเล็ก ๆ ไว้ตรงมุมด้วย เจ้าของบ้านยืนดูแล้วบอกว่ารอไหว... ทั้งแบบ ฉันมองตรงนั้นไม่ได้อยู่ที่เดียว",
      "หกสัปดาห์ ฉันจะทำที่พักให้มีทั้งหลังคาและหน้าต่าง คนต้องได้เห็นท้องฟ้าบ้าง",
      "ขอถ่านหน่อย ฉันจะร่างตำแหน่งคานจากรอยแตกก่อนลืม",
      "นี่เป็นครั้งแรกที่ฉันดีใจขนาดนี้ที่เห็นอาคารพัง! ไปเถอะ เรามีบ้านให้สร้างอีกเยอะ",
    ],
    "Keqing": [
      "ฉันเคยเชื่อว่าอนาคตของหลีเยว่อยู่ในมือคนหลีเยว่ ตอนแสงนั่นลงมา ฉันได้แต่กำมือแน่น เจ็บใจที่ทำได้เพียงเท่านั้น",
      "มีเวลาหกสัปดาห์ แผนวันแรกของฉันเสร็จแล้ว ของคุณล่ะ?",
      "ฉันต้องการช่างสำรวจสองคนไปวัดรอยแตก คุณพาฉันขึ้นไปได้ไหม",
      "ทีนี้คำสั่งสร้างอนาคตจะมาจากคนที่อยู่บนพื้น ฉันรอเซ็นงานแรกแทบไม่ไหว",
    ],
    "Kinich": [
      "จะคิดค่าจ้างอะไรได้ ฉันรับปากว่าจะพาเรื่องนี้ไปให้ถึงที่สุด แล้วคนที่ต้องจ่ายราคาจริง ๆ กลับเป็นคนที่ไว้ใจฉัน",
      "หกสัปดาห์นับรวมในสัญญาเดิม นายไม่ต้องจ่ายเพิ่ม",
      "มุมรอยแตกเอาตะขอเกี่ยวได้ คราวหน้าฉันพานายขึ้นไปเอง",
      "Ajaw เงียบก่อน ฉันอยากได้ยินคำตอบจากคนจ้าง... งานนี้พอใจไหม?",
    ],
    "Kirara": [
      "บนใบส่งของยังมีช่องให้ลงชื่อรับอยู่เลยค่ะ ฉันเดินวนจนรอยอุ้งเท้าทับกันหมด แต่ไม่มีใครเปิดประตูมารับสักที",
      "หกสัปดาห์เหรอ งั้นพัสดุที่ค้างอยู่ก็ส่งทันทุกชิ้นเลย!",
      "ฉันมุดรอยแยกนั่นเข้าไปได้ ฝากเซ็นชื่อรับแผนที่ด้วยนะ",
      "ส่งถึงมือผู้รับแล้วค่า! คราวนี้ของในกล่องคือพรุ่งนี้ของทุกคนเลยนะ",
    ],
    "Klee": [
      "คลีวาดพระอาทิตย์ยิ้มไว้ให้ทุกคนด้วย พี่ว่ามันรู้ไหมว่าข้างล่างเกิดอะไรขึ้น? คลีอยากให้มันเลิกยิ้มแล้ว",
      "ตั้งสี่สิบสองวัน! คลีวาดรูปให้พี่ได้อีกตั้งสี่สิบสองรูปเลย",
      "คราวหน้าเล็งตรงรอยแยกใช่ไหมคะ? คลีจะวงไว้สีแดงใหญ่ๆ เลย!",
      "พี่เห็นไหม! คลีทำได้! คราวนี้เขียนจดหมายบอกแม่สองคนเลยนะ!",
    ],
    "Kujou Sara": [
      "ข้าเคยคิดว่าผู้บัญชาการต้องเป็นคนสุดท้ายที่ก้มหน้า แต่เมื่อทหารหันมาหาข้า ข้ากลับเป็นคนแรกที่หลบตา",
      "หกสัปดาห์นี้ ข้าจะฝึกพลธนูให้ยิงถึงยอดหอ",
      "รอยแตกนั้นอยู่ในระยะยิง ข้าขอให้ท่านเป็นผู้ให้สัญญาณ",
      "เก็บธงได้แล้ว เหล่าทหารควรกลับไปให้ครอบครัวเห็นหน้าก่อนตะวันตก",
    ],
    "Kuki Shinobu": [
      "ฉันเตรียมคำแก้ตัวให้แก๊งมานับครั้งไม่ถ้วน พอทุกคนหันมาหาฉันวันนี้ ฉันอยากมีคำไหนก็ได้ที่ทำให้พวกเขาเจ็บน้อยลง",
      "หกสัปดาห์พอเคลียร์ทั้งงานซ่อมและค่าปรับ... หวังว่านะ",
      "ถ้าจะขึ้นไปที่รอยแตก ขอให้ฉันเช็กเชือกทุกเส้นก่อน",
      "ช่วยถ่ายรูปหมู่ที ก่อนหัวหน้าจะปีนขึ้นไปเขียนชื่อแก๊งบนยอดหอ",
    ],
    "Lan Yan": [
      "ห่วงหวายคู่นี้ฉันสานเองกับมือ บีบมันแน่นแค่ไหนมันก็คืนรูป แต่ทำไมพอฉันคลายมือแล้ว ทุกอย่างถึงยังพังอยู่เหมือนเดิมล่ะ",
      "หกสัปดาห์นี้ฉันจะสานเปลไว้ให้คนเฝ้ายามได้พัก",
      "ตรงรอยแตกต้องใช้สะพานแขวน ฉันรู้ว่าจะหาหวายเหนียวๆ ได้ที่ไหน",
      "ยื่นข้อมือมาสิ ฉันสานกำไลจากหวายเส้นที่พาเรากลับมาให้",
    ],
    "Lauma": [
      "เมื่อกี้กวางทั้งฝูงยืนนิ่งอยู่ข้างข้า พวกมันคงคิดว่าข้ารู้ว่าควรพาไปที่ไหน ข้าได้แต่ยืนฟังลมหายใจของพวกมัน",
      "คืนนี้ข้าจะนำฝูงกลับเข้าป่า หกสัปดาห์นี้มันควรได้อยู่อย่างสงบ",
      "แสงจันทร์ส่องผ่านรอยแตกลงมาถึงพื้น ข้าจะจำทางนี้ไว้",
      "กวางออกจากแนวไม้แล้ว นั่งข้างข้าเถอะ อย่าให้มันตกใจ",
    ],
    "Layla": [
      "ฉันภาวนาว่าตัวเองเผลอหลับหน้าโต๊ะอีกแล้ว พอตื่นคงบ่นเรื่องการบ้านเหมือนเคย... ฉันหยิกแขนจนเจ็บแล้วนะ",
      "หกสัปดาห์เหรอ... พอจะงีบก่อนส่งรายงานสักชั่วโมงไหมนะ",
      "เมื่อคืนฉันวาดรอยแยกนี้ไว้ในสมุดด้วยเหรอ? ลายมือฉันเองจริงๆ ด้วย",
      "ดาวยังอยู่ครบเลย... ทีนี้ถ้าฉันเผลอหลับ ช่วยจดให้ทีนะว่าวันนี้เราชนะจริงๆ",
    ],
    "Linnea": [
      "ฉันเคยจดสิ่งที่พบลงสมุดด้วยความตื่นเต้นทุกหน้า วันนี้เป็นครั้งแรกที่อยากให้สิ่งที่เห็นกับตาตัวเองเป็นแค่เรื่องที่จดผิด",
      "หกสัปดาห์นี้ฉันอยากกลับมาสำรวจชั้นหินกับคุณ",
      "รอยแยกเผยชั้นผลึกข้างใน เราเพิ่งได้เห็นสิ่งที่ซ่อนมานานนะ",
      "ขอเก็บหินชิ้นเล็กๆ กลับไปนะ ครั้งนี้ป้ายตัวอย่างจะมีชื่อคุณด้วย",
    ],
    "Lisa": [
      "คนเก่ง ปกติเวลาเจอหน้าที่อ่านแล้วใจหาย ฉันก็แค่ปิดหนังสือ วันนี้เธอช่วยนั่งข้างฉันหน่อยนะ ฉันปิดเรื่องนี้ไม่ได้จริง ๆ",
      "ตั้งหกสัปดาห์แน่ะ คราวนี้คืนหนังสือตรงเวลาด้วยนะจ๊ะ",
      "ตำราหน้าเดิมคงต้องเพิ่มเชิงอรรถแล้ว เธอช่วยเล่าสิ่งที่เห็นให้พี่ฟังที",
      "หืม จะให้พี่พูดสุนทรพจน์เหรอ? มาดื่มชาในห้องสมุดกันดีกว่าจ้ะ",
    ],
    "Lohen": [
      "ฉันขัดปลายหอกจนเห็นเงาตัวเองก่อนออกจากค่าย น่าขันนะ คนในเงาตอนนั้นเชื่อสนิทใจว่าจะพาชัยชนะกลับมา",
      "หกสัปดาห์ ฉันจะรอนายที่ลานซ้อมทุกเช้า",
      "ตรงรอยนั้นมีระยะให้ทวนผ่านได้หนึ่งช่วงแขน จำไว้ด้วยกันนะ",
      "คราวนี้ฉันยอมวางหอกก่อน นายสมควรได้รับคำคำนับจากฉัน",
    ],
    "Lumine": [
      "ฉันอยากเจอพี่มาตลอดทาง แต่ถ้าเจอกันตอนนี้ ฉันคงทำได้แค่กอดเขา ฉันไม่รู้จะบอกยังไงว่าโลกที่อยากให้พี่เห็นกำลังจะหายไป",
      "สี่สิบสองวัน... ฉันอยากใช้สักวันไปหาคนที่เราสัญญาว่าจะกลับไปเยี่ยม",
      "เราเข้าใกล้กว่าครั้งก่อนมาก ขอฉันทำเครื่องหมายตรงนี้ก่อน",
      "ฉันเคยมองดาวเพื่อหาทางไปโลกอื่น แต่คืนนี้ ฉันอยากดูดาวจากที่นี่กับเธอ",
    ],
    "Lynette": [
      "ปิดม่านได้แล้วค่ะ... ครั้งนี้ขอให้มันทึบหน่อย ฉันไม่อยากให้พี่เห็นว่าฉันกำลังร้องไห้",
      "สี่สิบสองวัน บันทึกแล้วค่ะ ตอนนี้... ขอเวลาชงชาห้านาที",
      "กลหลังม่านเริ่มเผยแล้วค่ะ เก็บความลับนี้ไว้ดูด้วยกันรอบหน้านะ",
      "ปิดม่านค่ะ วันนี้ฉันจะชงชาให้คุณเอง น้ำตาลกี่ก้อนคะ?",
    ],
    "Lyney": [
      "ถ้าเป็นบนเวที ผมคงขอให้คุณนับถึงสาม แล้วเอาทุกอย่างที่หายไปกลับมาได้ คุณอย่านับเลยครับ ผมทนเห็นคุณผิดหวังอีกครั้งไม่ได้",
      "กลนี้มีพักครึ่งยาวหกสัปดาห์ ช่วยผมเก็บความลับไว้ก่อนนะ",
      "คุณเห็นช่องลับเหมือนผมใช่ไหม? คราวหน้าเราสลับกันเป็นคนเปิดม่าน",
      "ปกติผมไม่เฉลยกล แต่รอบนี้เฉลยได้ครับ คนที่ทำให้ปาฏิหาริย์เกิดขึ้นคือคุณ",
    ],
    "Mavuika": [
      "ตอนข้าชูไฟ ทุกคนก็ยกมือขึ้นตาม ข้าจำมือเหล่านั้นได้ชัดกว่าแสงบนฟ้าเสียอีก พวกเขาเชื่อในตัวข้าจริง ๆ",
      "หกสัปดาห์ ไปเยี่ยมทุกเผ่ากับฉันเถอะ ทุกคนควรรู้ว่าเราซื้อเวลามาให้ใคร",
      "ฉันเห็นแสงจากอีกฝั่งแล้ว เตรียมตัวไว้ คราวหน้าเราจะขี่ทะลุไปด้วยกัน",
      "เอามือมา! วันนี้ไม่มีใครต้องยืนดูจากข้างสนาม เราฉลองด้วยกันทั้งสนามนี่แหละ",
    ],
    "Mika": [
      "ผมทำเครื่องหมายจุดนัดพบไว้บนแผนที่ด้วยดินสอ กะว่าจะลบตอนภารกิจสำเร็จ ตอนนี้ผมถือยางลบอยู่ แต่ทำใจลบไม่ได้ครับ",
      "ผมขอใช้สัปดาห์แรกทำแผนที่ใหม่ คราวหน้าจะได้ไม่มีใครหลง",
      "จากตรงนี้วัดมุมรอยแตกได้พอดี ช่วยถือไม้บรรทัดให้ผมหน่อยครับ",
      "ผมจะทำสำเนาแผนที่ให้คุณครับ ตรงที่เรายืนวันนี้ผมทำเครื่องหมายดาวไว้",
    ],
    "Mitya": [
      "ผมพับแผนสำรองไว้จนกระดาษนิ่มไปหมด พอคลี่ดู มันจบตรงประตูบานเดียวกับที่เพิ่งปิดต่อหน้าเรานี่เอง",
      "ขอสมุดคืนหน่อย ฉันจะเลื่อนนัดอีกหกสัปดาห์ให้ครบทุกคน",
      "สิบสองสัปดาห์พอจัดเวรใหม่ ฉันกันวันว่างให้คุณสักวันดีไหม",
      "ในกำหนดการไม่มีช่วงร้องไห้ด้วยความดีใจแฮะ... ขอเติมลงไปนะ",
    ],
    "Mona": [
      "ในเงาน้ำฉันเห็นตอนจบนี้มาตลอด ฉันเกลียดที่ตัวเองทำนายแม่นที่สุดในวันที่อยากทายผิดเหลือเกิน",
      "หกสัปดาห์ตรงตามวงดาวเลย คุณช่วยออกค่ากระดาษจดก่อนได้ไหม?",
      "เส้นดาวแยกเป็นสองสายแล้ว มาดูในน้ำสิ ครั้งนี้คุณมองเห็นด้วยแน่",
      "คำทำนายเดิมต้องขีดทิ้งทั้งหน้า... ทำไมฉันถึงดีใจขนาดนี้นะ!",
    ],
    "Mualani": [
      "ฉันเก่งเรื่องพาคนกลับฝั่งนะ ทุกทีพอเท้าแตะทรายทุกคนจะหัวเราะ วันนี้เรายืนอยู่บนฝั่งกันแล้ว ทำไมยังรู้สึกเหมือนจมน้ำอยู่เลย",
      "หกสัปดาห์พอซ่อมกระดานแล้วออกทริปด้วยกันอีกเที่ยวแน่ะ",
      "คราวหน้ารอคลื่นถึงยอดแล้วกระโดดตรงรอยแยก ฉันซ้อมกับเธอเอง!",
      "ป้ายต่อไป ชายหาด! คนพาเราฝ่าพายุวันนี้ขึ้นกระดานฉันฟรีตลอดทาง",
    ],
    "Nahida": [
      "เมื่อคืนมีเด็กฝันว่าโลกวันพรุ่งนี้หน้าตาเหมือนสวนเล็ก ๆ เขาขอให้ฉันมาเยี่ยม ฉันรับปากไปแล้วด้วย... ฉันจะไปหาเขาที่ไหนล่ะ",
      "หกสัปดาห์ดูสั้นสำหรับต้นไม้ แต่ยาวมากสำหรับเมล็ดที่กำลังงอก เธออยากปลูกอะไรดี?",
      "เมื่อคืนเด็กคนหนึ่งฝันเห็นแสงลอดรอยร้าว ฉันว่าเขาเริ่มนึกภาพวันพรุ่งนี้ออกแล้ว",
      "ฉันอยากถามเธอข้อหนึ่ง พอเราเลือกตอนจบเองได้แล้ว เธออยากเล่าเรื่องอะไรต่อ?",
    ],
    "Navia": [
      "ฉันซ้อมชนแก้วกับเก้าอี้ว่างของพ่อไว้ด้วยนะ ตลกใช่ไหม? ตอนนี้ฉันอยากให้พ่อนั่งอยู่ตรงนั้นจริง ๆ จนแทบทนไม่ไหว",
      "หกสัปดาห์พอซ่อมบ้านได้หลายหลัง ว่างไปช่วยฉันทาสีไหม?",
      "ถ้าเล็งปากร่มตรงนั้นอีกนิด... โอเค คู่หู รอบหน้าฉันขอเธอช่วยดูวิถีกระสุน!",
      "คู่หู มายืนใต้ร่มฉันทีสิ พ่อคงอยากเห็นว่าใครยืนอยู่ข้างฉันในวันนี้",
    ],
    "Nefer": [
      "ฉันประเมินราคาข่าวผิดมาแล้วหลายครั้ง แต่เพิ่งเคยจ่ายด้วยความไว้ใจของคนตั้งมากมาย แล้วไม่ได้อะไรกลับมาเลย",
      "สี่สิบสองวัน แลกกับข้อมูลหนึ่งชิ้น ถือว่าได้ราคาดี",
      "คนเฝ้าหอคงวุ่นกับรอยแตก ฝากดูหน้าประตูที ฉันจะสืบอีกทาง",
      "ข่าวนี้ฉันยอมบอกเธอฟรีๆ ต่อไปไม่มีใครมาเขียนตอนจบให้เราแล้ว",
    ],
    "Nicole": [
      "ฉันเคยกระซิบให้คนหลงทางเห็นทางแยก คราวนี้เธอได้ยินฉันชัดทุกคำ แต่สุดทางทั้งสองสายกลับเป็นที่เดียวกัน ฉันเสียใจจริง ๆ",
      "ฉันเว้นหน้ากระดาษไว้หกสัปดาห์ เธออยากเติมอะไรลงไปบ้าง?",
      "รอยแยกนั้นเหมือนช่องระหว่างคำ มองดีๆ ยังมีอะไรให้เราอ่านอีกมาก",
      "วันนี้ฉันขอเป็นคนฟัง เธอเล่าให้ฉันฟังได้ไหมว่าการเลือกชะตาเองรู้สึกอย่างไร",
    ],
    "Nilou": [
      "ฉันจำได้ว่าใครยืนตรงไหนตอนดนตรีเริ่ม พอเพลงหยุด ฉันยังเว้นที่ข้างตัวไว้ตามเดิม... ฉันไม่อยากเต้นฉากจบนี้เลย",
      "อีกหกสัปดาห์ฉันจะเต้นที่โรงละคร คุณพาคนที่เหนื่อยๆ มานั่งแถวหน้าได้ไหม?",
      "แสงส่องผ่านรอยนั้นเหมือนไฟบนเวทีเลย คราวหน้าฉันจะก้าวไปตรงนั้นกับคุณ",
      "ขอมือหน่อยค่ะ ไม่ต้องรู้ท่าก็ได้ เพลงนี้ฉันอยากเต้นกับคุณ",
    ],
    "Ningguang": [
      "ต่อให้ยอมสละวังหยกอีกครั้ง ข้าก็ซื้อเช้าวันเดิมคืนให้หลีเยว่ไม่ได้ นี่เป็นครั้งแรกที่ข้าอยากให้ใครสักคนบอกว่าข้าคิดราคาผิด",
      "สี่สิบสองวัน หากใช้ถูกที่ ย่อมมีค่ากว่าทองทั้งคลัง",
      "เมื่อหอมีรอยร้าว ตาชั่งเจรจาก็เปลี่ยน ข้าอยากฟังราคาที่เจ้าจะเรียก",
      "ของรางวัลหรือ? มองลงไปที่ท่าเรือสิ วันนี้ทั้งเมืองยังค้าขายตามความสมัครใจของตน",
    ],
    "Noelle": [
      "ทุกครั้งที่มีใครขอความช่วยเหลือ ฉันจะตอบว่าไว้ใจฉันได้เลย วันนี้ฉันเห็นเขาจะอ้าปากถาม... แล้วเขาก็เปลี่ยนใจ ฉันเสียใจตรงนั้นที่สุดค่ะ",
      "หกสัปดาห์ค่ะ ฉันจดรายการซ่อมไว้แล้ว คุณอยากให้เริ่มจากบ้านไหน?",
      "ถึงคราวฉันช่วยค้ำแนวนี้บ้างแล้วค่ะ ขอให้คุณเชื่อใจฉันนะคะ",
      "น้ำชาอุ่นกำลังดีค่ะ วันนี้ให้ฉันดูแลคุณในฐานะเพื่อนสักครั้งได้ไหมคะ",
    ],
    "Odette": [
      "ฉันเฝ้ามองรอยร้าวบนน้ำแข็งจนสุดสายตา หวังว่ามันจะหยุดตรงไหนสักแห่ง จะได้บอกคุณว่าตรงนั้นยังยืนได้",
      "ฉันจะทำเครื่องหมายไว้ที่หอ เผื่อหิมะกลบรอยก่อนครบหกสัปดาห์",
      "รอยแยกนี้กว้างพอให้ส่งแสงผ่าน ลองยืนฝั่งโน้น เดี๋ยวฉันส่งสัญญาณให้",
      "แตะมือฉันดูสิ เย็นเฉียบเลย ฉันเพิ่งกล้าปล่อยคมน้ำแข็งเมื่อครู่นี้เอง",
    ],
    "Ororon": [
      "ก่อนออกมา ผมรดน้ำแปลงผักเผื่อไว้แค่วันเดียว คิดว่าพรุ่งนี้คงได้กลับไปเล่าให้ยายฟังว่าเราทำได้ ผมไม่น่าทำให้ยายรอเลย",
      "หกสัปดาห์ ผักแปลงเล็กน่าจะทันเก็บ คุณอยากแบ่งไปปลูกบ้างไหม?",
      "ผมจะเฝ้าหอตอนกลางคืน แสงที่รั่วออกมาเล็กๆ เห็นง่ายกว่าเยอะ",
      "กลับไปดูแปลงผักด้วยกันไหมครับ วันนี้ผมเพิ่งแน่ใจว่าจะได้เห็นมันโต",
    ],
    "Prune": [
      "ฉันดึงหมวกลงเพราะอยากซ่อนหน้า คราวนี้ต่อให้หลบสายตาทุกคนพ้น ฉันก็ยังต้องอยู่กับสิ่งที่ตัวเองทำพลาดอยู่ดี",
      "ขีดไว้บนปีกหมวกแล้ว หกสัปดาห์พอดี ฉันไม่ลืมแน่",
      "รอยแยกมีแสงลอดออกมา คราวหน้าฉันอยากลองมองย้อนเข้าไป",
      "ช่วยถือหมวกที ฉันอยากเงยหน้ามองฟ้าผืนนี้ให้เต็มตา",
    ],
    "Qiqi": [
      "ในสมุดเขียนว่า ถ้าชนะ ให้ยิ้มให้คุณ... ฉีฉีจำไม่ได้ว่าเขียนตอนไหน แต่อ่านแล้วเจ็บตรงนี้",
      "อีกสี่สิบสองวัน เจอกันที่นี่ ฉีฉีเขียนไว้แล้ว",
      "มีรอยแตกบนฟ้า ฉีฉีวาดไว้ให้คุณ เผื่อฉีฉีลืม",
      "สมุดเขียนว่าเราชนะ แต่ความดีใจนี่... ฉีฉีจำเองได้",
    ],
    "Raiden Shogun": [
      "ข้าเคยเอ่ยคำว่านิรันดร์โดยไม่ลังเล บัดนี้แม้เพียงวันพรุ่งนี้ของผู้คนที่อยู่ใต้ฟ้าเดียวกับข้า ข้าก็ยังรักษาไว้ให้ไม่ได้",
      "หกสัปดาห์อาจเป็นชั่วพริบตาสำหรับข้า แต่เจ้าทำให้ข้าเห็นคุณค่าของมัน",
      "รอยฟันยังไม่ลบเลือน เมื่อถึงคราวอีกครั้ง ข้าจะลงดาบด้วยเจตนาที่แน่วแน่กว่าเดิม",
      "ข้าเคยเฝ้ารักษาสิ่งที่หยุดนิ่ง วันนี้ข้าอยากเห็นว่าวันพรุ่งนี้ของพวกเจ้าจะเปลี่ยนไปอย่างไร",
    ],
    "Razor": [
      "เราหอนเรียกฝูง รอตั้งนาน... ไม่มีเสียงตอบ เราอยากกลับบ้าน แต่กลัวที่นั่นจะเงียบเหมือนกัน",
      "อีกหลายคืน ฝูงมีเวลากลับถ้ำ ข้าไปบอกเอง",
      "ลมลอดหิน ข้าจำกลิ่นได้ คราวหน้าข้าพาเจ้าไป",
      "ไม่มีเสียงคำรามแล้ว เจ้า หิวไหม? กลับไปกินกับฝูง",
    ],
    "Rosaria": [
      "ปกติฉันไม่ค่อยเข้าวิหารหรอก คืนนี้ลองเข้าไปแล้ว นั่งอยู่ตั้งนาน... นึกไม่ออกจริง ๆ ว่าจะขออะไรที่ยังขอทัน",
      "หกสัปดาห์เพิ่มเหรอ งั้นคืนนี้ยกเวรสายให้ฉันได้ไหม",
      "ทางเข้าที่สองเปิดแล้ว เก็บเรื่องนี้ไว้ระหว่างเราจนกว่าฉันจะตรวจเสร็จ",
      "ถ้าใครถาม ฉันออกไปเดินเล่น ส่วนเธอ... ไปหาอะไรดื่มกันไหม",
    ],
    "Sandrone": [
      "ฉันเปิดฝาครอบ ตรวจทุกข้อต่อ ไม่มีชิ้นไหนเสียเลย ถ้ามันพังเสียสักชิ้น ฉันคงยังมีอะไรให้ซ่อม มีอะไรให้โทษ",
      "สี่สิบสองวันเพียงพอสำหรับการประกอบใหม่ หากไม่มีใครมาขัดจังหวะ",
      "รอยแยกเผยกลไกภายในแล้ว เอาแบบร่างมา ฉันอยากเห็นเฟืองชิ้นถัดไป",
      "เครื่องหยุดแล้ว ในที่สุดฉันก็ได้ฟังความเงียบที่ตัวเองออกแบบไว้",
    ],
    "Sangonomiya Kokomi": [
      "ฉันเขียนแผนรับมือไว้แม้กระทั่งกรณีที่เราแพ้ แต่ทหารคนหนึ่งถามว่า แล้วที่เราพยายามมาล่ะ? ฉันปิดสมุดลง ตอบเขาไม่ได้ค่ะ",
      "พลังงานวันนี้เหลือน้อย แต่ข่าวว่ามีอีกหกสัปดาห์ทำให้ฉันอยากเขียนแผนต่อค่ะ",
      "สิบสองสัปดาห์พอทดสอบแผนสองทาง คุณช่วยเล่นเป็นฝ่ายตรงข้ามให้ฉันได้ไหม?",
      "ฉันทำเครื่องหมายหน้าสุดท้ายไว้แล้วค่ะ... วันนี้ขอปิดสมุดแล้วไปเดินริมทะเลกับคุณนะ",
    ],
    "Sayu": [
      "ขอซ่อนในฮู้ดอีกหน่อยนะ ปกติก็แค่ไม่อยากให้ใครปลุก แต่วันนี้ฉันไม่อยากให้ใครเห็นหน้าตอนตื่นเลย",
      "หกสัปดาห์ นอนพอทุกวันน่าจะสูงขึ้นนิดหนึ่งนะ... อย่าบอกใครล่ะ",
      "ช่องตรงนั้นฉันลอดได้ ขอแค่อย่าส่งคนตัวสูงตามมาก็พอ",
      "งานเสร็จจริงๆ นะ? งั้นถ้าใครตามหา ช่วยบอกว่าฉันกำลังฝึกท่านอนอยู่",
    ],
    "Sethos": [
      "ฉันอ่านทางจากรอยเท้าเก่งนะ วันนี้ทุกคู่เดินย้อนกลับทางเดิมหมด ฉันได้แต่มองรอยขาไปตอนที่พวกเรายังเชื่อว่าจะชนะ",
      "หกสัปดาห์พอพาคนนอกเส้นทางกลับโอเอซิส ไปกับฉันไหม?",
      "ลมทรายจะกลบรอยที่พื้น แต่ดาวยังชี้ตำแหน่งรอยแตกได้ ฉันสอนนายดูนะ",
      "กลางคืนในทะเลทรายเห็นดาวชัดที่สุด คืนนี้อยากให้เธอเป็นคนเลือกทางเอง",
    ],
    "Shenhe": [
      "ข้าเคยคิดว่าเชือกแดงทำให้ใจสงบ พอได้ยินว่าเราแพ้ ข้าก็จับมันไว้จนแน่น เหตุใดข้างในจึงยังเจ็บถึงเพียงนี้",
      "ข้าจะรอหกสัปดาห์ หากเจ้าเรียกก่อน ข้าก็จะมา",
      "อาจารย์คงเห็นรอยแตกจากบนเขาแล้ว กลับไปถามท่านพร้อมข้าเถอะ",
      "ปกติข้าเดินกลับเขาคนเดียว แต่วันนี้... เจ้าพาข้ากลับเข้าเมืองได้ไหม",
    ],
    "Shikanoin Heizou": [
      "คดีที่มีหลักฐานครบ ปกติฉันอยากปิดให้เร็วที่สุด แต่นี่ฉันไล่ดูซ้ำเป็นรอบที่เท่าไรแล้วนะ... แค่อยากให้มีหลักฐานสักชิ้นที่บอกว่าเรายังไม่แพ้",
      "มีเวลาอีกหกสัปดาห์ให้สืบสวน พยานคนแรกที่ฉันอยากคุยด้วยก็คือนาย",
      "รอยแตกชี้ย้อนกลับไปถึงต้นเหตุแล้ว นักสืบอย่างฉันจะปล่อยมันผ่านได้ยังไง",
      "ไขคดีแล้ว! แต่ความรู้สึกตอนชนะนี่น่าสนใจกว่า ช่วยเล่าจากมุมของนายให้ฟังที",
    ],
    "Sigewinne": [
      "คนไข้ชอบถามฉันว่า อีกนานไหมกว่าจะหายเจ็บ วันนี้ฉันเพิ่งเข้าใจว่าการนั่งรอคำตอบ ทั้งที่อีกฝ่ายได้แต่จับมือเรา มันทรมานแค่ไหน",
      "หกสัปดาห์พอให้ทุกคนพักเต็มที่ คุณเองก็อยู่ในรายชื่อของฉันนะคะ",
      "ต่อให้มีเวลาเพิ่ม ฉันก็จะมาตรวจดูว่าคุณกินข้าวตรงเวลาค่ะ",
      "ยิ้มแบบนี้ดูดีจังค่ะ ขอวาดเก็บไว้บนฉลากขวดพิเศษของคุณได้ไหมคะ",
    ],
    "Sucrose": [
      "ฉันจดทุกอย่างไว้ เผื่อว่าคราวหน้าจะทำได้ดีขึ้น พอเขียนถึงคำว่าคราวหน้า... ฉันก็จับดินสอต่อไม่ไหวแล้วค่ะ",
      "หกสัปดาห์พอเพาะตัวอย่างรุ่นที่สอง! คุณมาดูมันโตกับฉันได้ไหม?",
      "รอยแตกใหญ่ขึ้นหลังปฏิกิริยาครั้งที่สาม ฉันจดไว้ทันค่ะ ดูนี่สิ",
      "มันสำเร็จจริงๆ... คราวนี้ฉันอยากเขียนชื่อคุณไว้หน้าแรก ก่อนชื่อการทดลองค่ะ",
    ],
    "Tartaglia": [
      "ถ้าแพ้ดวล ฉันคงขอแก้มือจนกว่าจะชนะ แต่นี่ฉันสัญญากับน้องไว้ว่าจะเอาเรื่องดี ๆ กลับไปเล่า สหาย ฉันจะกลับไปเล่าอะไรให้เขาฟังล่ะ?",
      "หกสัปดาห์ให้ซ้อมแก้มือ เจ้ามาเป็นคู่ซ้อมให้ข้าพรุ่งนี้เลยไหม?",
      "แตกขนาดนั้นยังตั้งอยู่ได้ สมกับเป็นคู่ต่อสู้ที่ข้ารอเจอจริงๆ!",
      "ฝีมือเจ้ายอดเยี่ยมสหาย! กลับไปข้าจะเล่าให้ Teucer ฟังว่าเจ้าซัดฟ้าแตกได้ยังไง",
    ],
    "Thoma": [
      "ผมหุงข้าวเผื่อไว้ กะให้ทุกคนเปิดประตูเข้ามาแล้วได้กลิ่นบ้าน พอถึงบ้านจริง ๆ ผมกลับยืนอยู่นอกประตูตั้งนาน ไม่กล้าเป็นคนแรกที่เข้าไป",
      "หกสัปดาห์นะ งั้นมื้อเย็นวันนี้ผมขอทำเยอะหน่อย จะได้แบ่งถึงบ้านข้างๆ",
      "ผมจะดูแลบ้านให้จนถึงวันกลับไปที่หอ คุณจดจ่อกับสิ่งตรงหน้าเถอะ",
      "ทุกคนกลับมาครบโต๊ะจริงๆ นั่งสิครับ ผมกันที่ข้างเตาให้คุณแล้ว",
    ],
    "Tighnari": [
      "หูฉันไวพอจะได้ยินเสียงคนรอข่าวตั้งแต่ยังไม่พ้นแนวไม้ นี่เป็นครั้งแรกที่ฉันอิจฉาคนที่ยังไม่ได้ยินอะไรเลย",
      "หกสัปดาห์พอให้ป่าฟื้นตัว ถ้าไม่มีใครไปเหยียบแปลงทดลองฉันอีกนะ",
      "แสงรั่วลงมาตรงแนวต้นกล้า ฉันอยากรู้ว่ามันตอบสนองยังไง นายมาช่วยจดที",
      "วันนี้อนุญาตให้ออกจากเส้นทางได้ครั้งหนึ่ง ฉันรู้จักจุดชมวิวที่นายควรได้เห็น",
    ],
    "Valeriy": [
      "ผมขานรับคำสั่งสุดท้ายตามระเบียบ เสียงไม่สั่นสักนิด แต่พอต้องบอกเพื่อนว่าเราหยุดหอคอยไม่ได้ ผมพูดไม่ออกครับ",
      "มีเวลาอีกหกสัปดาห์ ผมขอส่งจดหมายกลับหน่วยก่อน",
      "ผมจะบอกจุดร้าวให้หน่วยหอกทราบ นัดพบกันใต้แนวกำแพงนะ",
      "วันนี้ผมอยากกลับไปเรียกชื่อทุกคนทีละคน จะได้ยินคำว่ามาครบด้วยหูตัวเอง",
    ],
    "Varesa": [
      "ตอนเช้าฉันแบ่งผลไม้ไว้เจ็ดกอง ยังเถียงกันอยู่เลยว่าใครจะได้ลูกใหญ่สุด ถ้าได้กลับไปนั่งตรงนั้นอีกนาที ฉันยอมยกให้หมดเลย",
      "อีกหกสัปดาห์เหรอ! กินให้อิ่มแล้วกลับไปฝึกท่าทุ่มกันนะ",
      "รอยแยกกว้างกว่าไหล่ฉันแล้ว คราวหน้าฉันพุ่งลอดได้แน่!",
      "ยกเธอขึ้นบ่าได้ไหม? จะได้เห็นชัดๆ ว่าทุกคนกำลังโบกมือให้ใคร!",
    ],
    "Varka": [
      "ข้าเคยพาคนกลับจากศึกที่แพ้มาแล้ว แต่พอเจ้าหนูท้ายแถวถามว่าคนที่บ้านเราจะเป็นยังไง ข้ากลับอยากให้มีใครสักคนมาตอบแทน",
      "หกสัปดาห์เหรอ สองวันแรกให้ทุกคนกลับบ้าน นั่นเป็นคำสั่ง รวมถึงนายด้วย",
      "เห็นช่องนั่นไหม? คราวหน้าฉันบุกให้ นายพาคนตามมา คราวนี้เราไม่ต้องเดาทางแล้ว",
      "นับหัวให้ฉันอีกที... เจ็ด ครบ! ดี งั้นคนสุดท้ายที่ถึงโรงเหล้าล้างแก้วนะ ฉันออกเงินเอง",
    ],
    "Venti": [
      "ปกติพอลมพัดผ่านสายพิณ ฉันก็ได้ทำนองแล้ว วันนี้มันพัดมาตั้งหลายหน... ฉันยังหาสักท่อนที่จะร้องให้มอนด์สตัดท์ฟังไม่ได้เลย",
      "หกสัปดาห์พอดีกับเพลงยาวสักบท อยากใส่ชื่อเธอไว้ท่อนไหนดี?",
      "ลมลอดรอยแยกเป็นโน้ตใหม่ ฟังสิ ฟ้ายังช่วยแต่งเพลงให้เราเลย",
      "เพลงฉลองบทนี้ต้องมีเสียงเธอร้องด้วยนะ ค่าตัวกวีเหรอ? แอปเปิลลูกนั้นก็พอ!",
    ],
    "Vesna": [
      "ฉันเกือบปล่อยมุกว่าที่ล้มเมื่อกี้เป็นส่วนหนึ่งของการแสดง พอเห็นเธอยังรอให้ฉันลุกขึ้นมาแก้ทุกอย่าง ฉันก็ละอายจนพูดไม่ออก",
      "หกสัปดาห์พอซ้อมมุกให้เธอหัวเราะสักครั้ง พนันไหม?",
      "รูบนฟ้านั่นเอาไว้ระบายอากาศมั้ง... เฮ้ ยิ้มแล้วนี่ ไปต่อกันเถอะ",
      "ฉันเตรียมมุกเด็ดไว้พูดตอนชนะ แต่พอเห็นหน้าเธอแล้ว... ลืมหมดเลยแฮะ",
    ],
    "Vodyanitsa": [
      "ฉันก้มลงมองน้ำ อยากเห็นท้องฟ้าอย่างที่จำได้สักครั้ง แต่แม้แต่เงาสะท้อนก็ยังเป็นฟ้าของผู้ชนะ",
      "อีกหกสัปดาห์ น้ำค้างจะลงตรงนี้กี่เช้า ฉันอยากนับกับเธอ",
      "ม่านน้ำสะท้อนรอยแยกทั้งเส้น มองตรงนี้สิ เห็นปลายของมันแล้ว",
      "เช้านี้น้ำใสจนมองเห็นท้องฟ้าทั้งผืน เธอเข้ามาในเงาสะท้อนด้วยกันไหม",
    ],
    "Wanderer": [
      "ฉันควรจะหัวเราะใส่ฟ้านั่นได้สิ เคยทำได้ง่ายจะตาย... อย่ามองฉันแบบนั้น วันนี้ฉันทำไม่ได้",
      "ตั้งสี่สิบสองวันให้คิดแผนใหม่ คราวหน้าอย่าเอาแผนเดิมมาให้ฉันอ่านล่ะ",
      "ร้าวขนาดนี้แล้วยังทำเป็นสูงส่งอยู่ได้ คราวหน้าฉันจะขึ้นไปเคาะประตูเอง",
      "หึ ทำหน้าเหมือนไม่เคยเห็นฟ้าเลยนะ... จะนั่งมองต่อก็เชิญ ฉันยังไม่รีบ",
    ],
    "Wriothesley": [
      "ประตูในป้อมหนักแค่ไหนก็ยังมีกุญแจ แต่พอคนของผมหันมารอให้ผมเปิดทางในวันนี้ ผมได้แต่ยืนกำกุญแจไว้จนเจ็บมือ",
      "สี่สิบสองวันพอดี คงพอซ่อมประตูกับจัดหาชาดีๆ ได้สักกล่อง",
      "ทางขึ้นหอตอนนี้เหมือนประตูคุกที่ปิดไม่สนิท ผมพอจะรู้ว่าควรผลักตรงไหน",
      "สักถ้วยไหม? วันนี้ไม่มีแฟ้มให้เซ็น ผมตรวจดูถึงสองรอบแล้ว",
    ],
    "Xiangling": [
      "Guoba เก็บทัพพีเถอะ ปกติพอทุกคนเศร้า ฉันก็คิดเมนูออกทันที วันนี้ฉันตักชิมตั้งหลายครั้ง ยังไม่รู้รสเลย",
      "หกสัปดาห์นี้แวะมาชิมซุปด้วยนะ ฉันจะทำให้กินแล้วมีแรงจนถึงวันบุกเลย",
      "อุณหภูมิตรงรอยแตกพอดีมาก... โอ๊ะ ใช่ เรามาสู้กัน ไว้ค่อยทดลองทำอาหารนะ!",
      "ยกหม้อมาที! ฉันอยากให้คนที่ยืนตรงนี้ได้ชิมคำแรกพร้อมกัน",
    ],
    "Xianyun": [
      "ครั้งยังเล็ก ศิษย์ข้ามักหันมามองก่อนจะปล่อยว่าว เพราะรู้ว่าหากสายขาดข้ารับไว้ทัน วันนี้พวกเขาก็หันมาเช่นนั้น... ข้าอยากให้ตัวข้าในวันนั้นอยู่ที่นี่เหลือเกิน",
      "หกสัปดาห์รึ ข้าสร้างเครื่องส่งเสบียงให้อีกสักเครื่องก็ยังทัน",
      "คราวหน้าข้าจะปรับปีกกลให้ลอดรอยแยกได้พอดี เจ้าช่วยวัดความกว้างที",
      "ฝีมือพวกเจ้าเช่นนี้ ข้ามีเรื่องไปเล่าให้ศิษย์ฟังอีกนาน นั่งลงสิ เจ้าก็ต้องฟังด้วย",
    ],
    "Xiao": [
      "ข้าเคยบอกว่าเมื่อมีภัยให้เรียกชื่อข้า พวกเขาเรียก ข้าก็ได้ยินทุกเสียง... แต่การที่ข้าไปถึงกลับไม่เปลี่ยนอะไรเลย",
      "สี่สิบสองคืนนี้ หากมีภัย จงเรียกชื่อข้า",
      "ข้าจะเฝ้ารอยแยกนั้นเอง เจ้าไปพักเสีย",
      "กลับกันเถิด วันนี้... ข้าอยากเดินไปกับเจ้า",
    ],
    "Xilonen": [
      "ฉันรู้ว่าเสียงโลหะร้าวเป็นยังไง แต่เสียงที่ดังที่สุดตอนนั้นกลับเป็นตอนที่ทุกคนหยุดเชียร์ ฉันยังได้ยินความเงียบนั่นอยู่เลย",
      "หกสัปดาห์เนอะ งั้นขอนอนวันนี้ก่อน พรุ่งนี้ค่อยเอาแบบมาคุย",
      "ฉันจะทำใบมีดให้เกาะขอบรอยแตกได้ นายลองแล้วบอกด้วยว่าพอดีเท้าไหม",
      "ฟังเสียงเบสสิ พื้นยังสั่นอยู่เลย! รอบนี้นายเลือกเพลงฉลองเองนะ",
    ],
    "Xingqiu": [
      "ข้าเคยอ่านถึงจอมยุทธ์ที่มาช้าเพียงก้าวเดียว แล้วแอบคิดว่าหากเป็นข้าคงทำได้ดีกว่า วันนี้ข้าเพิ่งรู้ว่าก้าวนั้นหนักเพียงใด",
      "หกสัปดาห์เพียงพอสำหรับเขียนบทใหม่ คราวนี้ข้าอยากให้คนอ่านคาดตอนจบไม่ถึง",
      "รอยแยกประหนึ่งช่องว่างในกระบวนดาบ ข้าเห็นหนทางต่อบทแล้ว",
      "หากเล่าเรื่องนี้ในนิยาย คงมีคนว่าข้าแต่งเกินจริง ดีที่มีคุณเป็นพยาน",
    ],
    "Xinyan": [
      "ฉันดีดคอร์ดเดิมไปสามครั้ง หวังให้ใครสักคนร้องตาม พอเงยหน้าขึ้นถึงได้รู้ว่า ตัวฉันเองก็ไม่มีแรงร้องเหมือนกัน",
      "หกสัปดาห์ ฉันจะตระเวนเล่นให้ครบทุกค่าย ใครมีเพลงขอก็บอกมา",
      "เสียงสะท้อนตรงรอยแตกโคตรเจ๋งเลย! คราวหน้าเราตีคอร์ดนั้นพร้อมกันนะ",
      "มาเลย มือกลองกิตติมศักดิ์! คืนนี้ทั้งเมืองเป็นเวทีของเรา!",
    ],
    "Yae Miko": [
      "หากเป็นต้นฉบับ ข้าคงขีดตอนจบนี้ทิ้งไปแล้ว เจ้ามีหมึกอยู่ไหม... ช่างเถิด ข้าเพียงอยากให้เรื่องนี้แก้ได้ง่ายดายถึงเพียงนั้น",
      "หกสัปดาห์หรือ? บรรณาธิการบางคนให้เวลาน้อยกว่าสวรรค์เสียอีก",
      "รอยแตกงามขนาดนั้น เห็นทีต้องจ้างคนวาดหน้าปกใหม่ เจ้าว่างเป็นแบบไหม?",
      "เรื่องจบได้ดีนี่นา ค่าลิขสิทธิ์ของเจ้า... รับเป็นเต้าหู้ทอดสักจานก่อนได้ไหมจ๊ะ",
    ],
    "Yanfei": [
      "ฉันไล่อ่านทุกบรรทัด หวังว่าจะมีช่องให้ยื่นคัดค้าน พอเธอถามว่าพวกเรายังมีสิทธิ์อะไรเหลือบ้าง ฉันเสียใจที่ต้องปิดตำราลง",
      "หกสัปดาห์นับจากวันนี้นะ ฉันเขียนกำหนดไว้ชัดแล้ว ใครก็อ้างลืมไม่ได้",
      "มีช่องโหว่ให้เห็นขนาดนี้ สัญญาฉบับฟ้าคงบังคับใช้ไม่ได้ง่ายๆ แล้วล่ะ",
      "ปิดสำนวน! วันนี้ขอคิดค่าปรึกษาเป็นมื้อเย็นกับเธอก็แล้วกัน",
    ],
    "Yaoyao": [
      "พี่คะ หนูเอาหัวไชเท้ามาเผื่อทุกคนด้วย ปกติแค่แบ่งกันก็รู้สึกดีขึ้นแล้ว ทำไมวันนี้หนูแบ่งจนหมดตะกร้าแล้วยังอยากร้องไห้อยู่เลย",
      "หกสัปดาห์พอปลูกหัวไชเท้าได้อีกแปลง หนูเก็บลูกโตสุดไว้ให้พี่นะ",
      "หนูจะเตรียมของไปฝากคนเฝ้ารอยแตก พี่ช่วยถืออีกตะกร้าได้ไหมคะ?",
      "กลับมากินข้าวกันครบทุกคนแล้ว! หนูตักให้พี่ก่อนนะคะ",
    ],
    "Yelan": [
      "ฉันเคยถอยจากโต๊ะพนันได้ทันเสมอ แต่คราวนี้คนที่ลงเดิมพันกับฉันเอาวันพรุ่งนี้ของเขามาวางด้วย ฉันไม่ควรบอกเขาว่าฉันเอาอยู่",
      "สี่สิบสองวันก็พอฉันตามสายข่าวได้จนสุด เธอรอฟังตอนฉันทอยลูกเต๋านะ",
      "รอยแตกดึงสายตาคนไปหมด เหมาะกับงานของฉันพอดี ฝากยืนตรงที่เขามองเห็นที",
      "เจ้านี่หมดแต้มต่อแล้ว คราวนี้ฉันเก็บลูกเต๋าได้สักที หาอะไรกินกันไหม",
    ],
    "Yoimiya": [
      "ฉันเก็บดอกใหญ่สุดไว้จุดตอนเราชนะ เด็ก ๆ รู้ว่าสีทองแปลว่าอะไร คืนนี้ถ้าพวกเขาเงยหน้ารอ ฉันจะกล้าสบตาพวกเขาไหมนะ",
      "มีเวลาอีกตั้งหกสัปดาห์ เด็กๆ ที่ร้านต้องออกแบบดอกไม้ไฟทันแน่",
      "คราวหน้าฉันจะยิงแสงผ่านรอยแยกนั่น คนอยู่ไกลสุดลูกหูลูกตาก็จะเห็นเรา",
      "อย่าเพิ่งปิดตานะ! ลูกที่กำลังขึ้นไป เธอเคยบอกว่าชอบสีนี้ ฉันจำได้!",
    ],
    "Yumemizuki Mizuki": [
      "ถ้าเป็นฝันร้าย ฉันคงค่อย ๆ ปลุกคุณได้ค่ะ แต่เมื่อกี้ฉันเองต่างหากที่หลับตาขอให้ใครมาปลุก พอลืมตา หอคอยก็ยังอยู่",
      "หกสัปดาห์จากนี้ หากฝันร้ายกลับมา แวะมาหาฉันได้นะคะ",
      "ความฝันของผู้คนเริ่มมีแสงลอดเข้ามาแล้ว คุณเองเมื่อคืนหลับดีไหมคะ?",
      "ตื่นแล้วก็ยังเป็นจริงค่ะ ลองชิมขนมคำนี้ดู คุณจะได้จำรสชาติของเช้าวันนี้ไว้",
    ],
    "Yun Jin": [
      "ข้าฝึกร้องบทสูญเสียมานับครั้งไม่ถ้วน คิดว่ารู้อยู่แล้วว่าเสียงนั้นเป็นอย่างไร พอถึงวันนี้ แม้แต่จะเอ่ยคำแรกข้าก็ยังทำไม่ได้",
      "ข้าขอเวลาหกสัปดาห์ซ้อมบทใหม่ คราวนี้อยากให้คนดูเป็นฝ่ายร้องรับ",
      "รอยแตกนั้นงามราวเส้นพู่กัน ข้าคงต้องฝึกสะบัดแขนเสื้อให้ได้อย่างนั้นบ้าง",
      "วันนี้ข้าอยากยืนในหมู่ผู้ชม ปรบมือให้คนที่ก้าวขึ้นเวทีไปพร้อมกับข้า",
    ],
    "Zhongli": [
      "ครั้งหนึ่งข้าเคยขอให้ผู้คนเชื่อว่ามือของพวกเขาสร้างวันพรุ่งนี้ได้ ข้ายังจำแววตาของคนที่เชื่อข้า... นั่นทำให้วันนี้ยากจะทนเป็นพิเศษ",
      "หกสัปดาห์สำหรับหินย่อมสั้นนัก แต่ช่างที่ท่าเรือใช้เวลาน้อยกว่านั้นสร้างบ้านได้ทั้งหลัง เจ้าลองไปพบเขากับข้าสิ",
      "รอยร้าวเช่นนี้ซ่อนไว้ใต้ทองคำไม่ได้ อีกแปดสิบสี่วันเราค่อยกลับมาดูด้วยกัน ว่ามนุษย์สร้างสิ่งใดไว้ใต้เงามันบ้าง",
      "ฟังสิ ระฆังที่ท่าเรือดังแล้ว พ่อค้าวางแผง เด็กๆ ไปเรียน... ข้าว่านี่แหละคือสิ่งที่เจ้าตั้งใจรักษาไว้ มาเถิด ชาถ้วยแรกของเช้านี้ข้าเชิญ",
    ],
    "Zibai": [
      "ข้าพลิกหยกดูอีกด้าน หวังจะเห็นเงาจันทร์เหมือนก่อนขึ้นมาที่นี่ แต่สิ่งที่สะท้อนอยู่ทั้งสองด้านคือใบหน้าของคนที่รักษาสัญญาไม่ได้",
      "ข้าจะเก็บแสงจันทร์คืนนี้ไว้ เมื่อถึงกำหนดเราค่อยเปิดดูด้วยกัน",
      "เห็นแสงเส้นบางที่พาดผ่านหยกไหม รอยแตกบนฟ้าทอดมาถึงมือเราแล้ว",
      "คืนนี้แสงจันทร์จะตกถึงพื้นโดยไม่มีอะไรมาขวาง ข้าอยากชวนเจ้าออกมาดู",
    ],
  };
  const portraitBounds = new Map();
  function artworkBounds(image) {
    if (portraitBounds.has(image.src)) return portraitBounds.get(image.src);
    const probe = document.createElement('canvas');
    const scale = Math.min(1, 400 / Math.max(image.naturalWidth, image.naturalHeight));
    const w = probe.width = Math.max(1, Math.round(image.naturalWidth * scale));
    const h = probe.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const ctx = probe.getContext('2d', {willReadFrequently:true});
    ctx.drawImage(image, 0, 0, w, h);
    const {data} = ctx.getImageData(0, 0, w, h);
    let left = w, top = h, right = -1, bottom = -1;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (data[(y * w + x) * 4 + 3] <= 4) continue;
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
    const x = Math.floor(Math.max(0, left - 3) * image.naturalWidth / w);
    const y = Math.floor(Math.max(0, top - 3) * image.naturalHeight / h);
    const bounds = right < 0
      ? [0, 0, image.naturalWidth, image.naturalHeight]
      : [x, y, Math.ceil(Math.min(w, right + 4) * image.naturalWidth / w) - x,
        Math.ceil(Math.min(h, bottom + 4) * image.naturalHeight / h) - y];
    portraitBounds.set(image.src, bounds);
    return bounds;
  }

  // Defeat, 42-day reprieve, 84-day reprieve, victory.
  const pairedDialogue = {
    Columbina: [
      "Sandrone เคาะจังหวะให้ฉันจนฟ้าปิด ฉันยังจำเสียงนั้นได้ แต่พอหลับตาลง ฉันกลับจำท่อนจบไม่ได้เลย",
      "Sandrone บอกให้ใช้สี่สิบสองวันซ่อมเครื่อง ฉันขอคืนสุดท้ายไว้คืนหนึ่งนะ อยากให้เธอฟังท่อนที่ยังร้องไม่จบ",
      "เธอเห็น Sandrone เงยหน้าจากแบบร่างไหม? แค่ได้ยินเสียงฟ้าร้าว เธอก็เริ่มเคาะจังหวะใหม่ให้ฉันแล้ว",
      "พอฟ้าเงียบ Sandrone ก็ยังเคาะจังหวะอยู่ ฉันเลยร้องอีกท่อน คราวนี้ให้เธอฟังคนเดียว",
    ],
    Sandrone: [
      "ฉันเก็บจังหวะสุดท้ายของ Columbina ไว้ในเครื่องบันทึกแล้ว ตอนนี้... ฉันยังเปิดฟังไม่ไหว",
      "สี่สิบสองวันพอให้ฉันซ่อมเครื่องได้ บอก Columbina ด้วยว่าคืนสุดท้ายห้ามเข้าห้องช้า ฉันจองเก้าอี้ไว้ให้เธอแล้ว",
      "เฟืองตัวที่สามหยุดหมุนตรงโน้ตของ Columbina พอดี ฝากบอกเธอให้จำท่อนนั้นไว้ คราวหน้าฉันจะนับจังหวะให้เอง",
      "Columbina ร้องเกินเวลาที่ตกลงกันหนึ่งท่อน ฉันเลยเก็บเก้าอี้ช้าลงหน่อย จะได้ฟังจนจบ",
    ],
  };

  function renderCharacterArt(artwork, bounds, width, height, feather) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(artwork, ...bounds, 0, 0, width, height);
    if (feather) {
      ctx.globalCompositeOperation = 'destination-in';
      for (const [x, y, inset] of [[width, 0, .13], [0, height, .10]]) {
        const edge = ctx.createLinearGradient(0, 0, x, y);
        edge.addColorStop(0, 'transparent');
        edge.addColorStop(inset, 'black');
        edge.addColorStop(1 - inset, 'black');
        edge.addColorStop(1, 'transparent');
        ctx.fillStyle = edge;
        ctx.fillRect(0, 0, width, height);
      }
    }
    return canvas;
  }

  function dialoguePanel(result, activeSpeaker) {
    const section = node('section', '');
    section.className = 'relay-dialogue';
    const choices = node('div', '');
    choices.className = 'relay-speakers';
    choices.setAttribute('role', 'group');
    choices.setAttribute('aria-label', siteText('เลือกตัวละครเพื่อดูบทพูด'));
    const reply = node('div', '');
    reply.setAttribute('aria-live', 'polite');
    reply.setAttribute('aria-atomic', 'true');
    reply.className = 'relay-speaker-reply';
    const name = node('strong', '');
    const quote = node('blockquote', '');
    const copy = node('div', '');
    copy.className = 'relay-speaker-copy';
    copy.append(name, quote);
    const visual = node('div', '');
    visual.className = 'relay-speaker-visual';
    reply.append(copy, visual);
    dialoguePartners ??= pickRelayDialoguePartners(marks.map(({artist}) => artist.name));
    const speakers = marks.map(({artist}, index) => {
      const control = button('', () => showSpeaker(index), 'relay-speaker');
      control.setAttribute('aria-label', artist.name);
      control.title = artist.name;
      const portrait = new Image();
      portrait.src = 'assets/characters/' + artist.icon + '.webp';
      portrait.alt = '';
      control.append(portrait);
      return {control, name: artist.name};
    });
    function showSpeaker(index) {
      speakers.forEach(({control}, i) => control.setAttribute('aria-pressed', String(i === index)));
      const artwork = new Image();
      artwork.alt = '';
      artwork.className = 'relay-speaker-art';
      const artist = marks[index].artist;
      artwork.src = 'assets/characters/' + artist.art;
      visual.dataset.artwork = artwork.src;
      visual.toggleAttribute('data-feathered', Boolean(artist.featherArt));
      visual.replaceChildren();
      artwork.decode().then(() => {
        if (visual.dataset.artwork !== artwork.src) return;
        const bounds = artworkBounds(artwork);
        const [, , width, height] = bounds;
        const scale = Math.min(1, 1200 / Math.max(width, height));
        const crop = renderCharacterArt(artwork, bounds,
          Math.max(1, Math.round(width * scale)), Math.max(1, Math.round(height * scale)), artist.featherArt);
        crop.className = 'relay-speaker-art';
        crop.style.setProperty('--portrait-ratio', width / height);
        crop.setAttribute('aria-hidden', 'true');
        visual.replaceChildren(crop);
      }).catch(() => {
        if (visual.dataset.artwork === artwork.src) visual.replaceChildren(artwork);
      });
      const speaker = speakers[index].name;
      const partner = dialoguePartners.get(speaker);
      const specialPartner = speaker === 'Columbina' ? 'Sandrone' :
        speaker === 'Sandrone' ? 'Columbina' : null;
      const lines = partner === specialPartner ? pairedDialogue[speaker] : characterDialogue[speaker];
      const line = !partner || partner === specialPartner
        ? siteText(lines[result])
        : (relayRelationshipQuote(speaker, partner, result) ?? siteText(lines[result]));
      name.textContent = speaker;
      quote.textContent = '“' + line + '”';
    }
    choices.append(...speakers.map(({control}) => control));
    section.append(choices, reply);
    showSpeaker(activeSpeaker);
    return section;
  }

  async function createResultImage(background, dialogue, table) {
    const title = heading.textContent;
    const subtitle = status.textContent;
    const story = body.firstElementChild.textContent;
    const speaker = dialogue.querySelector('strong').textContent;
    const quote = dialogue.querySelector('blockquote').textContent;
    const selected = dialogue.querySelector('[aria-pressed="true"]');
    const portraits = [...dialogue.querySelectorAll('.relay-speaker')];
    const cells = Array.from(table.rows, row => Array.from(row.cells, cell => cell.textContent.trim()));
    const visual = dialogue.querySelector('.relay-speaker-visual');
    const featherArt = visual.hasAttribute('data-feathered');
    const urls = [background, visual.dataset.artwork,
      ...portraits.map(portrait => portrait.querySelector('img').src)];
    const images = await Promise.all(urls.map(async url => {
      const image = new Image();
      image.src = url;
      try { await image.decode(); return image; } catch { return null; }
    }));
    const [scene, artwork, ...faces] = images;
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    const ctx = canvas.getContext('2d');
    const width = 896;
    const left = 92;
    const font = (size, weight = 400) => `${weight} ${size}px system-ui, sans-serif`;
    const segmenter = typeof Intl.Segmenter === 'function'
      ? new Intl.Segmenter(document.documentElement.lang, {granularity:'word'})
      : null;
    function wrap(text, style, maxWidth = width) {
      ctx.font = style;
      const lines = [];
      let line = '';
      const segments = segmenter ? Array.from(segmenter.segment(text), part => part.segment) : Array.from(text);
      for (const segment of segments) {
        if (line && ctx.measureText(line + segment).width > maxWidth) {
          lines.push(line.trimEnd());
          line = segment.trimStart();
        } else {
          line += segment;
        }
      }
      if (line) lines.push(line.trimEnd());
      return lines;
    }
    const titleLines = wrap(title, font(62, 700));
    const storyLines = wrap(story, font(26));
    const copyInset = 32;
    const copyWidth = width - copyInset * 2;
    const quoteLines = wrap(quote, font(26), copyWidth);
    const bounds = artwork ? artworkBounds(artwork) : null;
    const artScale = bounds ? Math.min(width / bounds[2], 610 / bounds[3]) : 0;
    const artworkHeight = bounds ? Math.ceil(bounds[3] * artScale) : 0;
    const replyHeight = 112 + quoteLines.length * 38 + artworkHeight;
    canvas.height = 620 + replyHeight + titleLines.length * 74 + storyLines.length * 38;
    ctx.fillStyle = '#12172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (scene) {
      const scale = Math.max(canvas.width / scene.width, canvas.height / scene.height);
      ctx.drawImage(scene, (canvas.width - scene.width * scale) / 2, 0, scene.width * scale, scene.height * scale);
    }
    ctx.fillStyle = '#101423d9';
    ctx.fillRect(42, 42, 996, canvas.height - 84);
    ctx.textBaseline = 'top';
    function print(text, x, y, style, color = '#fff5e5', maxWidth = width) {
      ctx.font = style;
      ctx.fillStyle = color;
      ctx.fillText(text, x, y, maxWidth);
    }
    let y = 82;
    print(subtitle, left, y, font(24), '#f1d7a6');
    y += 47;
    for (const line of titleLines) {
      print(line, left, y, font(62, 700), '#ffe1a5');
      y += 74;
    }
    y += 12;
    for (const line of storyLines) {
      print(line, left, y, font(26));
      y += 38;
    }
    y += 28;
    faces.forEach((face, i) => {
      const x = left + 34 + i * 85;
      ctx.beginPath();
      ctx.arc(x, y + 32, 32, 0, Math.PI * 2);
      ctx.fillStyle = '#1d2438';
      ctx.fill();
      ctx.save();
      ctx.clip();
      if (face) ctx.drawImage(face, x - 32, y, 64, 64);
      ctx.restore();
      ctx.lineWidth = portraits[i] === selected ? 3 : 1;
      ctx.strokeStyle = '#e7cc98';
      ctx.stroke();
    });
    y += 86;
    let copyY = y + 20;
    print(speaker, left + copyInset, copyY, font(42, 700), '#ffe7ad', copyWidth);
    copyY += 68;
    for (const line of quoteLines) {
      print(line, left + copyInset, copyY, font(26));
      copyY += 38;
    }
    if (bounds) {
      const artWidth = bounds[2] * artScale;
      const artX = left + (width - artWidth) / 2;
      if (featherArt) {
        const feathered = renderCharacterArt(artwork, bounds, Math.ceil(artWidth), artworkHeight, true);
        ctx.drawImage(feathered, artX, copyY + 24, artWidth, artworkHeight);
      } else {
        ctx.drawImage(artwork, ...bounds, artX, copyY + 24, artWidth, artworkHeight);
      }
    }
    y += replyHeight + 28;
    print(table.caption.textContent, left, y, font(28, 700), '#f1d7a6');
    y += 48;
    for (const [index, row] of cells.entries()) {
      const offsets = [0, 335, 525, 715];
      row.forEach((value, column) => print(value, left + offsets[column], y, font(25, index ? 400 : 700),
        '#fff5e5', (offsets[column + 1] ?? width) - offsets[column] - 12));
      ctx.fillStyle = '#e7cc9855';
      ctx.fillRect(left, y + 34, width, 1);
      y += 45;
    }
    let blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (!blob?.size) {
      const dataUrl = canvas.toDataURL('image/png');
      const encoded = dataUrl.split(',')[1];
      if (!encoded) throw new Error('Unable to encode result image');
      const bytes = Uint8Array.from(atob(encoded), character => character.charCodeAt(0));
      blob = new Blob([bytes], {type: 'image/png'});
    }
    return new File([blob], 'teyvat-battle-result.png', {type: blob.type});
  }

  function downloadResultImage(file) {
    const download = document.createElement('a');
    download.href = URL.createObjectURL(file);
    download.download = file.name;
    document.body.append(download);
    download.click();
    download.remove();
    setTimeout(() => URL.revokeObjectURL(download.href), 60000);
  }

  function showResultImage(file) {
    const dialog = node('dialog', '');
    dialog.className = 'relay-image-preview';
    const title = node('h2', '');
    title.id = 'relay-image-preview-title';
    title.textContent = siteFormat('บันทึกภาพผลลัพธ์', 'Save result image');
    dialog.setAttribute('aria-labelledby', title.id);
    const hint = node('p', '');
    hint.setAttribute('role', 'status');
    const manualHint = siteFormat('แตะภาพค้างไว้ แล้วเลือกบันทึกภาพ หรือดาวน์โหลดไฟล์ PNG', 'Touch and hold the image to save it, or download the PNG.');
    const data = {files: [file]};
    const canShareImage = canShareResultImage(data);
    hint.textContent = canShareImage
      ? siteFormat('เปิดเมนูของเครื่อง แล้วเลือกบันทึกภาพลงรูปภาพหากมีตัวเลือกนี้', 'Open device options and choose Save Image if available.')
      : manualHint;
    const actions = node('div', '');
    actions.className = 'relay-result-actions';
    if (canShareImage) {
      const share = button(siteFormat('เปิดเมนูบันทึกภาพ', 'Open save options'), async () => {
        share.disabled = true;
        try {
          await navigator.share(data);
        } catch (error) {
          if (error.name !== 'AbortError') hint.textContent = manualHint;
        } finally {
          share.disabled = false;
        }
      });
      actions.append(share);
    }
    actions.append(
      button(siteFormat('ดาวน์โหลด PNG', 'Download PNG'), () => downloadResultImage(file)),
      button(siteFormat('ปิด', 'Close'), () => dialog.close())
    );
    const preview = new Image();
    preview.alt = siteFormat('ภาพผลการต่อสู้', 'Battle result image');
    const previewUrl = URL.createObjectURL(file);
    preview.src = previewUrl;
    dialog.append(title, hint, actions, preview);
    dialog.addEventListener('close', () => {
      dialog.remove();
      URL.revokeObjectURL(previewUrl);
    }, {once:true});
    document.body.append(dialog);
    dialog.showModal();
  }

  function canShareResultImage(data) {
    return typeof navigator.share === 'function' && navigator.canShare?.(data);
  }

  function resultActions(background, dialogue, table) {
    const group = node('div', '');
    group.className = 'relay-result-actions';
    const status = node('p', '');
    status.className = 'relay-share-status';
    status.setAttribute('role', 'status');
    let cachedImage;
    const preview = button(siteFormat('เปิดภาพเพื่อบันทึกเอง', 'Open image to save manually'), () => {
      if (cachedImage) showResultImage(cachedImage.file);
    }, 'relay-next relay-action-secondary');
    preview.hidden = true;
    const save = button(siteFormat('บันทึกภาพผลลัพธ์', 'Save result image'), async () => {
      save.disabled = true;
      preview.hidden = true;
      status.textContent = siteFormat('กำลังสร้างภาพ…', 'Preparing image…');
      try {
        const speaker = dialogue.querySelector('.relay-speaker[aria-pressed="true"]');
        if (cachedImage?.speaker !== speaker) {
          const file = await createResultImage(background, dialogue, table);
          cachedImage = {speaker, file};
        }
        if (!save.isConnected) return;
        const {file} = cachedImage;
        downloadResultImage(file);
        status.textContent = siteFormat('ตรวจไฟล์ PNG ในรายการดาวน์โหลดของเครื่อง', 'Check your device downloads for the PNG.');
        preview.hidden = !matchMedia('(max-width: 700px), (hover: none) and (pointer: coarse)').matches;
      } catch {
        status.textContent = siteFormat('บันทึกรูปไม่สำเร็จ ลองอีกครั้ง', 'Could not save the image. Try again.');
      } finally {
        save.disabled = false;
      }
    }, 'relay-next relay-action-secondary');
    const copy = button(siteFormat('คัดลอกลิงก์เว็บ', 'Copy website link'), async () => {
      try {
        await navigator.clipboard.writeText('https://genshin-impact-countdown-73.vercel.app/?share=meenchan-2');
        status.textContent = siteFormat('คัดลอกลิงก์แล้ว', 'Link copied.');
      } catch {
        status.textContent = siteFormat('คัดลอกไม่ได้ ลองคัดลอกจากแถบที่อยู่', 'Copy unavailable. Use the address bar.');
      }
    }, 'relay-next relay-action-secondary');
    const follow = node('a', siteFormat('ติดตามผู้สร้าง MeenChan', 'Follow the creator MeenChan'));
    follow.href = 'https://www.facebook.com/profile.php?id=61557128480263';
    follow.target = '_blank';
    follow.rel = 'noopener noreferrer';
    const restart = button('วางแผนต่อต้านใหม่', () => {
      start();
      triggers[0].focus({preventScroll:true});
    });
    group.append(restart, save, copy, follow, status, preview);
    return group;
  }

  const sceneryToggle = document.querySelector('.relay-scenery-toggle');
  let resultInView = false;
  function updateSceneryControl() {
    sceneryToggle.hidden = !hall.dataset.verdict || !resultInView;
  }
  new IntersectionObserver(([entry]) => {
    resultInView = entry.intersectionRatio >= .5;
    updateSceneryControl();
  }, {threshold: .5}).observe(hall);
  function syncSceneryToggle(hidden) {
    hall.toggleAttribute('data-scenery-only', hidden);
    sceneryToggle.setAttribute('aria-pressed', String(hidden));
    const label = hidden
      ? siteFormat('แสดงแผงผลลัพธ์', 'Show results')
      : siteFormat('ซ่อนแผงผลลัพธ์', 'Hide results');
    sceneryToggle.setAttribute('aria-label', label);
    sceneryToggle.title = label;
  }
  const resultScrollRail = node('span', '');
  resultScrollRail.className = 'relay-scroll-rail relay-result-scroll';
  resultScrollRail.setAttribute('aria-hidden', 'true');
  resultScrollRail.hidden = true;
  const resultScrollThumb = node('span', '');
  resultScrollRail.append(resultScrollThumb);
  hall.append(resultScrollRail);
  const mobileResult = matchMedia('(max-width:700px)');
  function updateResultScroll() {
    if (!mobileResult.matches || !hall.dataset.verdict) {
      resultScrollRail.hidden = true;
      return;
    }
    const {clientHeight, scrollHeight, scrollTop} = game;
    const overflow = scrollHeight - clientHeight;
    resultScrollRail.hidden = overflow <= 1;
    if (resultScrollRail.hidden) return;
    const thumbHeight = Math.min(clientHeight, Math.max(28, clientHeight ** 2 / scrollHeight));
    const progress = Math.max(0, Math.min(1, scrollTop / overflow));
    resultScrollRail.style.height = clientHeight + 'px';
    resultScrollThumb.style.height = thumbHeight + 'px';
    resultScrollThumb.style.transform = `translateY(${progress * (clientHeight - thumbHeight)}px)`;
  }
  game.addEventListener('scroll', updateResultScroll, {passive:true});
  const resultScrollObserver = new ResizeObserver(updateResultScroll);
  resultScrollObserver.observe(game);
  resultScrollObserver.observe(body);
  mobileResult.addEventListener('change', updateResultScroll);
  sceneryToggle.addEventListener('click', () => {
    syncSceneryToggle(!hall.hasAttribute('data-scenery-only'));
  });

  function finish({activeSpeaker = 0, expanded = false, contributionsOpen = false, scroll = true} = {}){
    const scores=totals();
    const passed=scores.filter((score,i)=>score>=encounter.need[i]).length;
    const endings=[
      ['loss',intact,'ความพ่ายของผู้ที่มิอาจต่อกรชะตาฟากฟ้า','หอคอยแห่ง Celestia ยังตั้งตระหง่านเหนือเมฆ แสงจากยอดหอกลบแสงจาก Gnosis ทั้งเจ็ด สวรรค์เป็นฝ่ายชนะ'],
      ['scarred','assets/celestia-scarred.webp','การรีเซ็ตโลกถูกเลื่อนออกไป 42 วัน','รอยร้าวเส้นแรกพาดผ่านหอคอย แสงบนยอดสะดุดไปหนึ่งจังหวะ ผู้คนทั่ว Teyvat ได้เห็นรุ่งเช้าอีกครั้ง'],
      ['fractured','assets/celestia-fractured.webp','การรีเซ็ตโลกถูกเลื่อนออกไป 84 วัน','ระเบียงสวรรค์แตกเป็นเสี่ยง เศษหินร่วงผ่านช่องแสง หอคอยยังยืนอยู่ แต่ก่อนที่ผนึกจะกลับมาทำงาน ชาวเมืองยังมีเวลาซ่อมกำแพงและเตรียมรับศึกอีกครั้ง'],
      ['win','assets/celestia-ruins.webp','ชัยชนะของผู้ฝืนโชคชะตา','เสียงระฆังจากทั่ว Teyvat ดังไปถึงบัลลังก์ฟ้า ด้วยพลัง Gnosis ทั้งเจ็ด พวกเจ้าชนะ Celestia แล้ว นับแต่รุ่งเช้านี้ จงเขียนชะตาของตนด้วยมือตนเอง']
    ];
    const [verdict,background,title,story]=endings[passed];
    hall.dataset.verdict=verdict;syncAtmosphere();art.src=background;
    panel(siteFormat('ผลการต่อสู้ · {0} · ถึงเกณฑ์ {1} / 3',
      'Battle outcome · {0} · {1} / 3 targets met', siteText(encounter.name), passed),title);
    const delay = title.match(/(\d+) วัน$/);
    if (delay) {
      const duration = node('span', '');
      duration.className = 'relay-result-duration';
      const digits = node('span', delay[1]);
      digits.className = 'relay-result-digits';
      duration.append(digits, siteFormat(' วัน', ' days'));
      heading.replaceChildren(siteFormat('การรีเซ็ตโลกถูกเลื่อนออกไป ', 'The world reset is delayed by '), duration);
    }
    body.append(node('p',story));
    const table=document.createElement('table');table.className='relay-scores';
    const caption=node('caption','พลังสะสมจาก Gnosis ทั้งเจ็ด');table.append(caption);
    const head=table.createTHead().insertRow();
    ['ค่าสถานะ','พลังรวม','ต้องการ','ผล'].forEach(label=>head.append(node('th',label)));
    const rows=table.createTBody();
    scores.forEach((score,i)=>{
      const row=rows.insertRow();
      const label=row.insertCell();label.append(statLabel(i));
      [score,encounter.need[i],score>=encounter.need[i]?'ถึงเกณฑ์':
        siteFormat('ขาด {0}', 'Short by {0}', encounter.need[i]-score)].forEach(value=>row.append(node('td',value)));
    });
    const details=document.createElement('details');details.className='relay-breakdown';
    details.open = expanded;
    details.append(node('summary','ดูภาพวาดและพลังทั้ง 7 ธาตุ'), game.querySelector('.globe-stage').cloneNode(true));
    const members = node('table', '');
    members.className = 'relay-contributions';
    const contributions = node('details', '');
    contributions.className = 'relay-breakdown relay-contributions-panel';
    contributions.open = contributionsOpen;
    contributions.append(node('summary', 'พลังจากผู้ถือวิชั่นทั้งเจ็ด'), members);
    const columns = members.createTHead().insertRow();
    for (const title of ['ผู้ถือวิชั่น', ...statNames]) {
      const column = node('th', title);
      column.scope = 'col';
      columns.append(column);
    }
    const entries = members.createTBody();
    const values = marks.flatMap(mark => mark.pick.stats);
    const left = Math.max(0, -Math.min(...values));
    const range = left + Math.max(1, ...values);
    const zero = left / range * 100;
    members.style.setProperty('--zero', zero + '%');
    for (const {person, artist, pick} of marks) {
      const member = entries.insertRow();
      member.style.setProperty('--element-color', person.color);
      const identity = node('th', '');
      identity.scope = 'row';
      const portrait = new Image();
      portrait.src = 'assets/characters/' + artist.icon + '.webp';
      portrait.alt = '';
      const info = node('div', '');
      info.append(node('strong', artist.name), node('small', person.name + ' · ' + siteText(pick.label)));
      const tactic = itemTactics[artist.name][pick.label];
      const note = node('p', tactic);
      note.className = 'member-tactic';
      note.title = siteText(tactic);
      info.append(note);
      identity.append(portrait, info);
      member.append(identity);
      for (const value of pick.stats) {
        const cell = member.insertCell();
        cell.append(node('span', signedScore(value)));
        const track = node('span', '');
        track.className = 'contribution-track';
        track.setAttribute('aria-hidden', 'true');
        const fill = node('span', '');
        fill.style.left = (zero + Math.min(0, value) / range * 100) + '%';
        fill.style.width = Math.abs(value) / range * 100 + '%';
        track.append(fill);
        cell.append(track);
      }
    }
    const dialogue = dialoguePanel(passed, activeSpeaker);
    body.append(dialogue, table, contributions, details, resultActions(background, dialogue, table));
    updateSceneryControl();
    syncSceneryToggle(hall.hasAttribute('data-scenery-only'));
    if (scroll) {
      game.scrollTop = 0;
      hall.scrollIntoView({block:'start',behavior:'instant'});
    }
    updateResultScroll();
  }
  function start(){
    clearTimeout(celestialReplyTimer);
    celestialReply?.dialog.remove();
    celestialReply = undefined;
    hall.classList.remove('has-celestial-reply');
    sceneryToggle.hidden = true;
    syncSceneryToggle(false);
    dialoguePartners = undefined;
    marks.length=0;delete hall.dataset.verdict;syncAtmosphere();art.src=intact;
    updateResultScroll();
    encounter=encounters[Math.floor(Math.random()*encounters.length)];
    body.replaceChildren();picker.append(game);redraw();refreshHall();
  }
  document.addEventListener('site-language-change', () => {
    renderCelestialReply();
    redraw();
    refreshHall();
    if (picker.open) renderPicker?.();
    else if (hall.dataset.verdict) {
      const speakers = [...body.querySelectorAll('.relay-speaker')];
      const activeSpeaker = Math.max(0, speakers.findIndex(speaker => speaker.getAttribute('aria-pressed') === 'true'));
      finish({
        activeSpeaker,
        expanded: Boolean(body.querySelector('.relay-breakdown:not(.relay-contributions-panel)')?.open),
        contributionsOpen: Boolean(body.querySelector('.relay-contributions-panel')?.open),
        scroll: false
      });
    }
  });
  start();
})();
