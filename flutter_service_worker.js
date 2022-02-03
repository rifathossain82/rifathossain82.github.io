'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4bc01925255f11e531898313d90e89d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "048d883accd630623dc9fb1a42872f95",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "809106ee48e35f21fb2216a1b14f38a6",
".git/logs/refs/heads/main": "f62a54db9e37fccc799b7d909027f6c3",
".git/logs/refs/remotes/origin/main": "dcc2bbbc7b305f2b0add0f302b08bfe1",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/03/0442806d70299ba66d56d7e88fca8b0c38244a": "60bccaa624b0f0b61815b56d3b95908e",
".git/objects/03/b87000b87c7c6c453be837b05eb69b48973502": "ce24c6d8f344d9c96683e31332507ca0",
".git/objects/06/bd56501a38e79e67028ba681bd8b57a5fe46d7": "54a6da7f162133bd687831697d22516b",
".git/objects/07/7251d4fa960fd3cdc97506a57eb1f275a6b3e6": "5dcf100c6be319565b93848d01835f42",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/12/e05de71f0d7a6b755051b134e7dd88240af080": "95b663c9bbde01c5c14060f24f3248e2",
".git/objects/13/37bd5771ab9ed01e71507709e775e2bd8d0bea": "d8789aedf2e4c0a1c58cdfff1c3660c0",
".git/objects/13/5e6842db4891406bd103dc25a1f6775a453a64": "f13e4f41dccacf809275eb53875a2bff",
".git/objects/18/fa98ebf625710b6986c4c3452ee16a2f1df32d": "a0168021e7536f7a3583097b6b9438af",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/1f/af03a187e5d121665469d2e9c668052a501a40": "88d39bc7d544f7af4761d23978fc92c8",
".git/objects/25/a2a8d6e6cf317472396f689300f76fa1ff0679": "53aed441fd80097c240ed3a01d87b798",
".git/objects/25/c28aaa295a10aab0d8b9d2e0a6430ab36e4b3d": "125abfd433350ca50463991268517129",
".git/objects/26/7d7337593e977bf31d15a67d4c5554a3510ab3": "6705afd70cfbb5bd6b6c7b85b4979c91",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/44d39e8f28d71b14a5c8b14f2bf0a5cc34bf5d": "02142184d990beac0f5bcaed90f7bca7",
".git/objects/36/1cd9711691c20262643efe7ba57634d4af3e3b": "f6e4a46c57c0ef87eebfeaa94675fe2f",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/38/6971ab2a2f0dea10be2e70de9002327e916b24": "9a1b865f05cae74685deeb48d861b0d1",
".git/objects/3c/d3689efdccfbc9ea5d045839abb0e89c6bbc8b": "cd19de4c343c0ddaba5e665a9f4426f6",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/40/e1bc3a258e141491d626912dc934e0899f360c": "fa9e63e53e4bd58d4be8d1509de25222",
".git/objects/45/0f3340e76e10ff77fd3b20676a73d9e64452ef": "813d8bb47e5bc8e85818a6e038173ed4",
".git/objects/46/7dbce65550839ab9b82a991df1b523a5692bb8": "25e394816a89a657e30f5420792e9296",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/4a/2def3cd8277178938c7d6faebae756aa93f264": "ec4cdfd71c7235f82ea4ab81c2a2360d",
".git/objects/4d/cce65a5c9e6302cdd78b1449cb3b8cf0ab5faf": "5ef184b06787c5cb2345f68c2bbae593",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/5d/3286532f8192b48a0ce791007514a077dc792e": "6ef47ef4632824e0fb7845091f0ce9a6",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/62/072a18e4670052c73854ce1b89f2712ccfe063": "776635b9de6191821635acec4807b924",
".git/objects/62/69fa53b4d534e334668e7ddcf3414889a01324": "f6cd05ce7be839e5a5643bfe02c2069a",
".git/objects/62/b4715c288b0445cc30f7c1f3f941c25381a3e1": "08a80a043f63ddba8963dd780a9426a9",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/66/4cfb5fd928e39358291135e38d53c9a2e50fe5": "8f473fe23c66f39a30c610fde3098656",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6d/2b0b150122f265e47e57acfd6480a3151996de": "fccd2a90a432cee1690e36fb6cc1ecfa",
".git/objects/6f/5c12ea50ebf2e2c789708faa9a817a93f7e4c5": "2861dd7630886ee3ab2c7318966051dd",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/76/3329c00983efc443315278f709719cb786e4bf": "c8c4d8217cc876767d433f3782e8afbc",
".git/objects/76/6494c9beb866ddc9f864d79af2969fd87c8854": "43a00b7f35dc1b0814e09794d9a3ed46",
".git/objects/78/14806e3687c1fb618bb603bc95b112d3011b45": "32e4cbbad5cf23269c4d73dd9ddcc633",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/7d/70dc17ee0c71b85c85b000501409217e7ac781": "bb55eb71617cf30491bd26de3d9229e9",
".git/objects/7e/cfc33f0c0f92a0e5ca3e8973739d4456d14326": "fa6dd723fc2f84130ae843252f8b5730",
".git/objects/82/50b63b5d6c7bfada18cdb2f75dbbc5e5fc36bb": "264d1f9a443aa4d4154d05b91f37e3d9",
".git/objects/85/41307708df871250004d5282af39ea72b49417": "64052fbcde1f2cd8f372dae7052a3192",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/89/7f867937e90522c9ee849ae036b0b17fef71a1": "68126e42fc30d71560a1f2cf38df667b",
".git/objects/89/cdd20495d8aee973d186ce03c328d2a6914f7d": "74c7922b9bbc28dfb28ec69e40c071cf",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/1c7dde8503f70b7a9cd7fda9918af4bb7b7c9b": "a1d993a214f50d05807c2c3d5facb999",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/94/607e1db40195f6dfc2ad2be1532a3120172184": "5a67041c8762f6e7bf7e02f42396ed36",
".git/objects/97/2e59ae9d4731360c6707638cf83e1b3b6dbe00": "6b509d9dfaebb3839d945111e7a43da5",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/65b62feed0baa572f48ac0f7b5ff1d64d7ab54": "2fc691e530b7d1881034f7d26acd39cd",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/9d/45019285738e3c2064804982ced0c460e06eb2": "0dd5a555c9c4f8326ead11dd69a8d6d5",
".git/objects/a1/2abe6682e1407e0909908c50a25ec0dd621d8d": "66417f887df593fa890f0f3d3ceb8e85",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/2f7d84cd126a7f69c6116a69817295a9a175bf": "665f72cb4147b6cb49eb9253ba86eb77",
".git/objects/a7/6bcc7798645adc3ab67c130775f962f7902ae3": "d1af4a3017b0ffaa3cc2ee0eceb8519e",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/54754aa6735f166cfdce9dba58dbf8a3c872f2": "c0e05640206e92c20987e4c63f00f5cb",
".git/objects/b0/58cdb559c68499bf000a620df6b5356b6c5bd3": "7a4a31281866128e28ee74a8673bc0a6",
".git/objects/b2/7a9f0b783c94c6d83fe2e8f823c6c0557783e8": "7a91d9e7fad3bf5070def7becc77d6be",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/c1/60abab1bd84c6515546d77d25519bac09cd252": "f7ffce487c6889130ce7cfd0619f0284",
".git/objects/c1/d51bd392974fa28ef811a7f02ef6658fa14612": "a4c0a8de34ea09a0f90d445c8737dc81",
".git/objects/c8/df46fc69f027816a39c1053b96196133ad4438": "f37ebdb161c2bb4c9e7cc665128cb072",
".git/objects/cc/15b59be0517af21ebd0ea7b28d9b724a28745e": "92dee9b63eb302b3ce8cd990e8f5c71f",
".git/objects/d0/31ac441736d405cbd4c2d602aa297b32a37237": "99907dea81f29b2f0a6b6fafb1e50a99",
".git/objects/d2/29fea7a434b5199732ade9b15d8fa819ae390f": "64bf963e3f10eaebb8e4d62953683264",
".git/objects/d2/d3aaefdfe733ac70d8213180427df067db4c86": "d0792815302c382185c67f4a9696a807",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ece0297a41850ad983474ec4cd65e0baa77de4": "efab33dadacdf9049f957f4a505fb1cc",
".git/objects/da/0af7042a44b2847fa237f9a0b45a267d0fdf1c": "8fef41cdefee378ee8e3e59689ef9102",
".git/objects/dc/2a856268b983aa7117106aa0b332e25a32a5aa": "d3dcf35efb705dab738459ef4fff6e20",
".git/objects/e1/3a2d68e86151e0e43e654a416df9fe884beb5e": "61b638c7a9348c45fa61484ca1b9bbc8",
".git/objects/e2/14d686f4ec77a98d1054150d639c44114a1f77": "573d34a82af279609086988dfa4a9be3",
".git/objects/e2/fc2067216102c14dea390a6d4343b43773a530": "d7d03574ce22d3f89d58f837cd5036e2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/970606ed9267ab0706f0d9c18101da56190fdc": "437d61f18e5c669ba4d523503a9b7a36",
".git/objects/ea/940d75e730fa7d73c5c152d2f9cdcdc26216c1": "6e44c50d795544dcf131b66b704141c0",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/318ff6a29028ce790fb6d376157762d43d346f": "623c746f4ebdff90e89e2d74b7b8829c",
".git/objects/ec/d0ad340ba6940c2b07cb2e5d25e6da7e488baf": "7e2a4e67cc9df358f93244ae918261f3",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/f1/16247b412110ecbdaa969274f5d25c17716eb8": "7574fe15bbdab80126b368a5b469f4a2",
".git/refs/heads/main": "b655bcda1660702a8ad329c86e8b830a",
".git/refs/remotes/origin/main": "b655bcda1660702a8ad329c86e8b830a",
"assets/AssetManifest.json": "60f80b3d9221ba7e6a60ac4b63475e89",
"assets/FontManifest.json": "28098d04cc5da731b02d0cd2d01bfb0d",
"assets/fonts/Lobster_Regular.ttf": "9406d0ab606cf8cb91c41b65556bd836",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/aboutPage_image/20201203_093652.jpg": "d67f6a868fcbdf60943aa64dffaded77",
"assets/images/aboutPage_image/20201203_094008.jpg": "42a19b58a663a88eadca7a570ba6b278",
"assets/images/aboutPage_image/20201203_110907.jpg": "5c2ca5ed11fdbf3425f0c3e7cfd02de7",
"assets/images/aboutPage_image/20201203_110923.jpg": "7e35f013799f73dde93489c4f1b75216",
"assets/images/aboutPage_image/20211029_172853.jpg": "a11457c2e2d9d4c40435a988d59e3563",
"assets/images/aboutPage_image/9820201203_100235.jpg": "a3bfe741187e8764f3f7f6bd17243501",
"assets/images/aboutPage_image/courses.jpg": "4785492590180a855367d6215eaee234",
"assets/images/aboutPage_image/edu.png": "fa32c596a4f0b88a3dad377c5099b9cb",
"assets/images/aboutPage_image/skills.jpg": "4c9a1f85be58fde6b0ea3ebdc9f0f4d7",
"assets/images/blog/dart.png": "301c4a8bcab36ba8a45fbdf2e61b0884",
"assets/images/blog/features.jpg": "ccf6240eae38d61dd3132f4dd5197363",
"assets/images/blog/flutter.png": "d744440971931f937269e060e720f5a7",
"assets/images/blog/flutter_backend.png": "011a4a278bb94545c9dfe5ee70cb1577",
"assets/images/blog/flutter_react.png": "5e7114f7949631c625e4c57c98d3adcc",
"assets/images/blog/flutter_supported.png": "8c66e9c40ab68057c0698b31b443aa2a",
"assets/images/dark_logo.png": "56b43fc5fc80be484a56c93cf6e186f3",
"assets/images/logo4.json": "1a31978d144b28f532123776b8ff7777",
"assets/images/lotti_animation.json": "bc5ab66d897cb267ff6a33dfc32230b0",
"assets/images/myPic1.jpg": "fbbdac51506c9ac7212a3fbd3a82477c",
"assets/images/my_pic.JPG": "72dc1428c39a4dee504ba3cec61284f7",
"assets/images/my_pic_edit.jpg": "c98749027059c200728649ef44062253",
"assets/images/projects_image/A_adorsholopi_logo.jpg": "77c17e5a52bd1e93334646851e35e588",
"assets/images/projects_image/A_beta_browser.jpg": "6df44964ded0f0aefa81207baf06400c",
"assets/images/projects_image/A_calculaotr_logo.jpg": "9deaba41c25f54091bd1d06d086e06d8",
"assets/images/projects_image/A_eshop.png": "4fb6228701c52fe52e573fed02b0cfff",
"assets/images/projects_image/A_scanner_por.jpg": "861f8d58c54ce4eb987b7761c7733b8c",
"assets/images/projects_image/A_unique_trade_link.jpg": "1a78165e74a01b2288b0a6f769176234",
"assets/images/projects_image/D_emailSender.jpg": "a9af7987dbc2b32ee53cc6da610e66a1",
"assets/images/projects_image/D_fpi_StudentInfo.png": "7a28a54e91626d2fa04fe0df4ee9b9e1",
"assets/images/projects_image/D_hospitalManagement.jpg": "58ad69f59b6c834c86e4577f21ff0bf8",
"assets/images/projects_image/D_hostelManagement.jpg": "abce737462d7ad6e83b53baa670fa27a",
"assets/images/projects_image/D_inventorySystem.jpg": "d4fa66a606b75831f5e776b79ab4a99f",
"assets/images/projects_image/D_library.png": "f8a380d6490af5dd490dc91d07aac2a5",
"assets/images/projects_image/D_schoolManagement.jpg": "ee41a74c0aecf4d2acf37caa0de5d016",
"assets/images/projects_image/F_amarBangla.png": "fb25d70d736764787a7cda3fbe75e537",
"assets/images/projects_image/F_bmi.png": "f35375d51d51ad972e8659cb27b9866c",
"assets/images/projects_image/F_currencyConverter1.png": "2cfa197584a6c0c330306bb7d821d313",
"assets/images/projects_image/F_currencyConverter2.png": "e68e119c24cc8814c5d2a70bcbe1a1a2",
"assets/images/projects_image/F_news.png": "7bff67eb3fca28b83fdfe0e13d08e300",
"assets/images/projects_image/F_qrCodeScaner.png": "473f5d4517feaab0170df9876ad640b2",
"assets/images/red_logo.png": "be43146c0284367fcb85b0e2600ed91e",
"assets/images/white_logo.png": "a5db5b63c6049ab20baee80ba28aeb9c",
"assets/NOTICES": "f00c9bee980980cebdf677765649b4dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.ico": "acb2852e0ad10c4d86f4c40941ef7edf",
"icons/Icon-192.png": "2dfd26258b190f675907edc60ba72067",
"icons/Icon-512.png": "4eeb0adeb8f5412cc2785a76ca11cc39",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "87809280dd0c7a03b7d2a977767490a9",
"/": "87809280dd0c7a03b7d2a977767490a9",
"main.dart.js": "9d0af00f64cc970e749ec34533040fe8",
"manifest.json": "d4c45a95e1dac5fd29814a893c8c175f",
"version.json": "b6fdc639e2b230ffc205be445cb71b01"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
