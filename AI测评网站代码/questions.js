var ALL_QUESTIONS = [
  [1, "你每天花在网上冲浪的时间大约是？", "N_online", [
    ["1小时以内，看看消息就撤", {"N_online": 1, "N_disconnect": 0, "N_info": 1}],
    ["3-5小时，工作和学习之余都在刷", {"N_online": 2, "N_disconnect": 1, "N_info": 2}],
    ["8小时以上，睁开眼到闭上眼都在线", {"N_online": 3, "N_disconnect": 3, "N_info": 3}]
  ]],
  [2, "手机没电/没网超过1小时，你会？", "N_disconnect", [
    ["正好清净一会儿，不急", {"N_disconnect": 1, "N_online": 1}],
    ["有点焦虑，时不时摸手机", {"N_disconnect": 2, "N_online": 2}],
    ["坐立不安，感觉和世界失联了", {"N_disconnect": 3, "N_online": 3}]
  ]],
  [3, "每天打开多少个不同的App/网站？", "N_info", [
    ["3-5个，够用就行", {"N_info": 1, "Ac_explore": 1}],
    ["10-20个，信息焦虑使我切换", {"N_info": 2, "Ac_explore": 2}],
    ["30+个，每个平台都是新的宇宙", {"N_info": 3, "Ac_explore": 3}]
  ]],
  [4, "睡前最后一眼看的是什么？", "N_online", [
    ["闹钟/睡眠app", {"N_online": 1, "N_disconnect": 1}],
    ["朋友圈/微博刷到困", {"N_online": 2, "N_disconnect": 2}],
    ["短视频，然后天亮了", {"N_online": 3, "N_disconnect": 3}]
  ]],
  [5, "看到一个热点话题没跟上，你会？", "N_info", [
    ["算了，错过就错过", {"N_info": 1, "Ac_explore": 1}],
    ["赶紧补课，了解来龙去脉", {"N_info": 2, "Ac_explore": 2}],
    ["疯狂搜索三天三夜直到全懂", {"N_info": 3, "Ac_explore": 3}]
  ]],
  [6, "你有多少个浏览器标签页常年不关？", "N_online", [
    ["3-5个，用完就关", {"N_online": 1, "N_info": 1}],
    ["20-50个，都是「稍后看」", {"N_online": 2, "N_info": 2}],
    ["100+，Chrome比我命都重", {"N_online": 3, "N_info": 3}]
  ]],
  [7, "在社交平台上的好友/关注数约是？", "So_connect", [
    ["50以下，只加现实认识的人", {"So_connect": 1, "Ac_social": 1}],
    ["200-500，朋友+兴趣圈子", {"So_connect": 2, "Ac_social": 2}],
    ["1000+，来者不拒都是人脉", {"So_connect": 3, "Ac_social": 3}]
  ]],
  [8, "看到陌生人发来好友申请，你？", "So_connect", [
    ["直接忽略，不认识不加", {"So_connect": 1, "Ac_social": 1}],
    ["看看资料再决定", {"So_connect": 2, "Ac_social": 2}],
    ["秒通过，朋友多多益善", {"So_connect": 3, "Ac_social": 3}]
  ]],
  [9, "在群聊里你通常是？", "Ac_social", [
    ["万年潜水，偶尔冒泡", {"Ac_social": 1, "E_express": 1, "So_connect": 1}],
    ["看话题，感兴趣就聊", {"Ac_social": 2, "E_express": 2, "So_connect": 2}],
    ["话痨本痨，群里的气氛组", {"Ac_social": 3, "E_express": 3, "So_connect": 3}]
  ]],
  [10, "你加了几个群聊？", "Ac_social", [
    ["5个以内，够用", {"Ac_social": 1, "So_connect": 1}],
    ["20-50个，每个群都重要", {"Ac_social": 2, "So_connect": 2}],
    ["100+，折叠群聊是刚需", {"Ac_social": 3, "So_connect": 3}]
  ]],
  [11, "你在网上有几个「小号」？", "So_identity", [
    ["0个，坦坦荡荡做自己", {"So_identity": 1, "E_voice": 1}],
    ["1-2个，分场合用", {"So_identity": 2, "E_voice": 2}],
    ["5个以上，每个号一个人格", {"So_identity": 3, "E_voice": 3}]
  ]],
  [12, "你的朋友圈/动态更新频率？", "E_express", [
    ["几乎不发，看别人就好", {"E_express": 1, "Ac_social": 1, "So_influence": 1}],
    ["一周几次，有好内容就发", {"E_express": 2, "Ac_social": 2, "So_influence": 2}],
    ["一天N条，生活即直播", {"E_express": 3, "Ac_social": 3, "So_influence": 3}]
  ]],
  [13, "群里有人吵架，你？", "A_debate", [
    ["默默围观，吃瓜", {"A_debate": 1, "A_troll": 1, "Ac_participate": 1}],
    ["偶尔插一句拉架或拱火", {"A_debate": 2, "A_troll": 2, "Ac_participate": 2}],
    ["冲锋陷阵，键盘就是我的剑", {"A_debate": 3, "A_troll": 3, "Ac_participate": 3}]
  ]],
  [14, "你在群里发红包时倾向于？", "So_influence", [
    ["基本不发，除非被@", {"So_influence": 1, "Ac_participate": 1}],
    ["偶尔发，活跃气氛", {"So_influence": 2, "Ac_participate": 2}],
    ["经常发，我就是气氛组组长", {"So_influence": 3, "Ac_participate": 3}]
  ]],
  [15, "群里有人发了你觉得不对的观点，你？", "A_critic", [
    ["划过去，不重要", {"A_critic": 1, "A_debate": 1, "E_voice": 1}],
    ["心里反驳但不说话", {"A_critic": 2, "A_debate": 2, "E_voice": 2}],
    ["必须指出来，真理不辩不明", {"A_critic": 3, "A_debate": 3, "E_voice": 3}]
  ]],
  [16, "你的群昵称风格是？", "So_identity", [
    ["真名/正常昵称", {"So_identity": 1, "E_create": 1}],
    ["有趣但不夸张", {"So_identity": 2, "E_create": 2}],
    ["抽象到极致，每次看都想笑", {"So_identity": 3, "E_create": 3}]
  ]],
  [17, "群里有人@你问问题，你？", "Ac_participate", [
    ["假装没看到", {"Ac_participate": 1, "So_connect": 1}],
    ["有空就回，没空就忘", {"Ac_participate": 2, "So_connect": 2}],
    ["秒回并展开长篇回答", {"Ac_participate": 3, "So_connect": 3}]
  ]],
  [18, "群里发通知公告时，你的角色？", "Ac_participate", [
    ["收到+1型选手", {"Ac_participate": 1, "E_express": 1}],
    ["偶尔补充或提醒", {"Ac_participate": 2, "E_express": 2}],
    ["我就是发通知的那个人", {"Ac_participate": 3, "E_express": 3, "So_influence": 3}]
  ]],
  [19, "看到一篇你很认同的文章，你？", "E_voice", [
    ["点赞就行，懒得打字", {"E_voice": 1, "E_express": 1}],
    ["偶尔评论表达支持", {"E_voice": 2, "E_express": 2}],
    ["长篇评论抒发共鸣", {"E_voice": 3, "E_express": 3}]
  ]],
  [20, "看到一篇让你很生气的文章，你？", "A_critic", [
    ["关掉，眼不见为净", {"A_critic": 1, "A_debate": 1, "E_voice": 1}],
    ["心里骂两句", {"A_critic": 2, "A_debate": 2, "E_voice": 2}],
    ["评论区开火，必须纠正", {"A_critic": 3, "A_debate": 3, "E_voice": 3}]
  ]],
  [21, "你的评论被很多人点赞，你？", "So_influence", [
    ["无所谓，随手写的", {"So_influence": 1, "E_voice": 1}],
    ["有点开心，看看谁点了赞", {"So_influence": 2, "E_voice": 2}],
    ["截图发朋友圈，这是我的高光时刻", {"So_influence": 3, "E_voice": 3}]
  ]],
  [22, "评论区有人反驳你，你？", "A_debate", [
    ["无视，懒得吵", {"A_debate": 1, "A_troll": 1}],
    ["礼貌解释一下", {"A_debate": 2, "A_troll": 2}],
    ["开战，不辩到对面认输不罢休", {"A_debate": 3, "A_troll": 3}]
  ]],
  [23, "你写评论时更倾向于？", "E_express", [
    ["简洁直接，说清楚就行", {"E_express": 1, "E_create": 1}],
    ["加点幽默和梗", {"E_express": 2, "E_create": 2}],
    ["写小作文，评论比原文还精彩", {"E_express": 3, "E_create": 3}]
  ]],
  [24, "你会用表情包来表达吗？", "E_create", [
    ["很少用，文字就够了", {"E_create": 1, "E_express": 1}],
    ["适度使用增加趣味", {"E_create": 2, "E_express": 2}],
    ["没有表情包不会说话", {"E_create": 3, "E_express": 3}]
  ]],
  [25, "每天刷短视频的时间？", "N_online", [
    ["不到半小时，偶尔看看", {"N_online": 1, "N_disconnect": 1, "Ac_explore": 1}],
    ["1-2小时，上瘾但可控", {"N_online": 2, "N_disconnect": 2, "Ac_explore": 2}],
    ["3小时起步，大拇指滑出火星", {"N_online": 3, "N_disconnect": 3, "Ac_explore": 3}]
  ]],
  [26, "你会自己拍/发短视频吗？", "E_create", [
    ["只看不拍，没兴趣", {"E_create": 1, "E_voice": 1, "So_influence": 1}],
    ["偶尔拍着玩", {"E_create": 2, "E_voice": 2, "So_influence": 2}],
    ["经常拍，我也有博主梦", {"E_create": 3, "E_voice": 3, "So_influence": 3}]
  ]],
  [27, "刷到不感兴趣的内容，你？", "A_critic", [
    ["直接划走", {"A_critic": 1, "Ac_explore": 1}],
    ["点「不感兴趣」调教算法", {"A_critic": 2, "Ac_explore": 2}],
    ["评论区吐槽完再走", {"A_critic": 3, "Ac_explore": 3}]
  ]],
  [28, "看到一个很火的短视频挑战，你？", "Ac_participate", [
    ["看看就好，不跟风", {"Ac_participate": 1, "So_influence": 1}],
    ["好玩的话就试试", {"Ac_participate": 2, "So_influence": 2}],
    ["第一个冲上去拍，我要上热门", {"Ac_participate": 3, "So_influence": 3}]
  ]],
  [29, "你对短视频算法的看法？", "N_info", [
    ["算法懂我，挺好的", {"N_info": 1, "A_critic": 1}],
    ["又爱又恨，但忍不住刷", {"N_info": 2, "A_critic": 2}],
    ["信息茧房让我焦虑但我已离不开", {"N_info": 3, "A_critic": 3}]
  ]],
  [30, "你会给创作者打赏/投币吗？", "Ac_participate", [
    ["从不，白嫖万岁", {"Ac_participate": 1, "So_connect": 1}],
    ["特别喜欢的会支持", {"Ac_participate": 2, "So_connect": 2}],
    ["经常打赏，创作者不容易", {"Ac_participate": 3, "So_connect": 3}]
  ]],
  [31, "你多久刷一次热搜榜？", "N_info", [
    ["几乎不看", {"N_info": 1, "Ac_explore": 1}],
    ["每天一两次", {"N_info": 2, "Ac_explore": 2}],
    ["每小时都刷，生怕错过大事", {"N_info": 3, "Ac_explore": 3}]
  ]],
  [32, "热搜上的争议事件，你的态度？", "A_debate", [
    ["等真相，不急着站队", {"A_debate": 1, "A_critic": 1, "E_voice": 1}],
    ["看看各方说法再判断", {"A_debate": 2, "A_critic": 2, "E_voice": 2}],
    ["第一时间发表看法带话题", {"A_debate": 3, "A_critic": 3, "E_voice": 3}]
  ]],
  [33, "看完热搜回来的感受通常是？", "N_disconnect", [
    ["平静，和自己没啥关系", {"N_disconnect": 1, "A_critic": 1}],
    ["偶尔被影响心情", {"N_disconnect": 2, "A_critic": 2}],
    ["情绪像过山车，世界要完了/世界真美好", {"N_disconnect": 3, "A_critic": 3}]
  ]],
  [34, "你会参与热搜话题讨论吗？", "Ac_participate", [
    ["不参与", {"Ac_participate": 1, "E_voice": 1, "So_influence": 1}],
    ["在朋友圈或群里讨论", {"Ac_participate": 2, "E_voice": 2, "So_influence": 2}],
    ["公开平台发帖带tag", {"Ac_participate": 3, "E_voice": 3, "So_influence": 3}]
  ]],
  [35, "热搜上出现你不认识的人，你？", "Ac_explore", [
    ["不关心，直接跳过", {"Ac_explore": 1, "N_info": 1}],
    ["点进去看看是干嘛的", {"Ac_explore": 2, "N_info": 2}],
    ["开启人肉搜索，查个底朝天", {"Ac_explore": 3, "N_info": 3}]
  ]],
  [36, "你对热搜的总体看法？", "A_critic", [
    ["就是个信息窗口而已", {"A_critic": 1, "N_info": 1}],
    ["半信半疑，需要判断", {"A_critic": 2, "N_info": 2}],
    ["热搜即真理，全民认证", {"A_critic": 3, "N_info": 3}]
  ]],
  [37, "发朋友圈/动态前会精修吗？", "So_identity", [
    ["随手发，不修", {"So_identity": 1, "E_create": 1}],
    ["稍微修一下", {"So_identity": 2, "E_create": 2}],
    ["精修半小时，P图+文案改十遍", {"So_identity": 3, "E_create": 3}]
  ]],
  [38, "你会分组可见/屏蔽某些人吗？", "So_identity", [
    ["懒得分，一视同仁", {"So_identity": 1, "So_connect": 1}],
    ["偶尔设置", {"So_identity": 2, "So_connect": 2}],
    ["精细管理，每类内容给不同人看", {"So_identity": 3, "So_connect": 3}]
  ]],
  [39, "看别人晒奢华生活，你的感受？", "So_influence", [
    ["无感，各有各的生活", {"So_influence": 1, "A_troll": 1}],
    ["有点羡慕但还好", {"So_influence": 2, "A_troll": 2}],
    ["哼，我一定要过得更好", {"So_influence": 3, "A_troll": 3}]
  ]],
  [40, "朋友发来聚会合照，你？", "Ac_social", [
    ["看一眼就过", {"Ac_social": 1, "So_connect": 1}],
    ["点赞+简单评论", {"Ac_social": 2, "So_connect": 2}],
    ["评论+转发+自己也发一条", {"Ac_social": 3, "So_connect": 3}]
  ]],
  [41, "你会在朋友圈发个人情绪吗？", "E_voice", [
    ["从不，朋友圈是营业场所", {"E_voice": 1, "E_express": 1}],
    ["偶尔，看心情", {"E_voice": 2, "E_express": 2}],
    ["天天发，朋友圈是我的情绪垃圾桶", {"E_voice": 3, "E_express": 3}]
  ]],
  [42, "朋友圈设置几天可见？", "So_identity", [
    ["全部可见，坦荡", {"So_identity": 1, "E_voice": 1}],
    ["一个月或半年", {"So_identity": 2, "E_voice": 2}],
    ["三天可见，昨天的事今天就不想认", {"So_identity": 3, "E_voice": 3}]
  ]],
  [43, "你每周玩游戏的时间？", "N_online", [
    ["几乎不玩", {"N_online": 1, "Ac_explore": 1}],
    ["5-10小时，休闲玩家", {"N_online": 2, "Ac_explore": 2}],
    ["20小时以上，游戏即生活", {"N_online": 3, "Ac_explore": 3}]
  ]],
  [44, "游戏中队友坑了你，你的反应？", "A_troll", [
    ["无所谓，游戏而已", {"A_troll": 1, "A_debate": 1}],
    ["打字友善提醒", {"A_troll": 2, "A_debate": 2}],
    ["开麦/打字问候全家", {"A_troll": 3, "A_debate": 3}]
  ]],
  [45, "在游戏公会/战队中活跃吗？", "Ac_social", [
    ["单人玩家，不加入组织", {"Ac_social": 1, "So_connect": 1}],
    ["加但不怎么说话", {"Ac_social": 2, "So_connect": 2}],
    ["公会核心，每天组织活动", {"Ac_social": 3, "So_connect": 3}]
  ]],
  [46, "你对游戏氪金的态度？", "Ac_participate", [
    ["零氪党，白嫖到底", {"Ac_participate": 1, "So_influence": 1}],
    ["小氪怡情", {"Ac_participate": 2, "So_influence": 2}],
    ["648说冲就冲，氪佬是我", {"Ac_participate": 3, "So_influence": 3}]
  ]],
  [47, "你会研究游戏攻略/机制吗？", "Ac_explore", [
    ["随缘玩，不研究", {"Ac_explore": 1, "N_info": 1}],
    ["卡关时才查攻略", {"Ac_explore": 2, "N_info": 2}],
    ["攻略狂魔，wiki是我的圣经", {"Ac_explore": 3, "N_info": 3}]
  ]],
  [48, "你会看游戏直播/比赛吗？", "Ac_participate", [
    ["不看", {"Ac_participate": 1, "N_online": 1}],
    ["偶尔看", {"Ac_participate": 2, "N_online": 2}],
    ["追着看，关注战队和选手", {"Ac_participate": 3, "N_online": 3}]
  ]],
  [49, "你对二次元文化的了解程度？", "Ac_explore", [
    ["几乎不了解", {"Ac_explore": 1, "N_info": 1}],
    ["看过一些番，略懂", {"Ac_explore": 2, "N_info": 2}],
    ["老二次元了，懂的都懂", {"Ac_explore": 3, "N_info": 3}]
  ]],
  [50, "你会用二次元梗/用语吗？", "E_create", [
    ["完全不会也听不懂", {"E_create": 1, "Ac_explore": 1}],
    ["能听懂但不太用", {"E_create": 2, "Ac_explore": 2}],
    ["张口就来，浓度拉满", {"E_create": 3, "Ac_explore": 3}]
  ]],
  [51, "你追番/看漫画的频率？", "N_online", [
    ["基本不追", {"N_online": 1, "Ac_explore": 1}],
    ["偶尔看热门的", {"N_online": 2, "Ac_explore": 2}],
    ["每周追新番，囤的漫画比书架还多", {"N_online": 3, "Ac_explore": 3}]
  ]],
  [52, "你买过多少周边/手办？", "Ac_participate", [
    ["0，不买", {"Ac_participate": 1, "So_identity": 1}],
    ["买过几个喜欢的", {"Ac_participate": 2, "So_identity": 2}],
    ["房间全是，为爱买单", {"Ac_participate": 3, "So_identity": 3}]
  ]],
  [53, "在社交平台展示二次元属性吗？", "So_identity", [
    ["不会，看不出来", {"So_identity": 1, "E_voice": 1}],
    ["头像或签名有一些", {"So_identity": 2, "E_voice": 2}],
    ["全方位沉浸，这就是我的世界", {"So_identity": 3, "E_voice": 3}]
  ]],
  [54, "同人创作/二创，你？", "E_create", [
    ["不看也不创作", {"E_create": 1, "Ac_participate": 1}],
    ["偶尔看看", {"E_create": 2, "Ac_participate": 2}],
    ["我是太太/太太是我，产粮专业户", {"E_create": 3, "Ac_participate": 3}]
  ]],
  [55, "你能理解抽象话/黑话吗？", "E_create", [
    ["完全不懂，火星文", {"E_create": 1, "Ac_explore": 1}],
    ["懂一部分，能get到", {"E_create": 2, "Ac_explore": 2}],
    ["我就是抽象文化的传播者", {"E_create": 3, "Ac_explore": 3}]
  ]],
  [56, "你的聊天风格更接近？", "E_express", [
    ["正经认真", {"E_express": 1, "A_troll": 1, "E_create": 1}],
    ["偶尔皮一下", {"E_express": 2, "A_troll": 2, "E_create": 2}],
    ["抽象到底，没有一句正经话", {"E_express": 3, "A_troll": 3, "E_create": 3}]
  ]],
  [57, "你在网上玩梗的频率？", "E_create", [
    ["很少玩，get不到", {"E_create": 1, "Ac_social": 1}],
    ["看到好玩的会用", {"E_create": 2, "Ac_social": 2}],
    ["我是造梗机，新梗由我定义", {"E_create": 3, "Ac_social": 3}]
  ]],
  [58, "你能接受多抽象的表达？", "E_express", [
    ["喜欢直来直去", {"E_express": 1, "A_troll": 1}],
    ["适度的幽默没问题", {"E_express": 2, "A_troll": 2}],
    ["越抽象越带劲，不抽象不聊天", {"E_express": 3, "A_troll": 3}]
  ]],
  [59, "别人不懂你的梗时，你？", "So_connect", [
    ["算了，不解释", {"So_connect": 1, "Ac_social": 1}],
    ["简单解释一下", {"So_connect": 2, "Ac_social": 2}],
    ["开启教学，拉人入坑", {"So_connect": 3, "Ac_social": 3}]
  ]],
  [60, "你觉得自己是「乐子人」吗？", "A_troll", [
    ["不是，我很正经", {"A_troll": 1, "Ac_participate": 1}],
    ["偶尔找乐子", {"A_troll": 2, "Ac_participate": 2}],
    ["一切皆为乐子，世界就是大舞台", {"A_troll": 3, "Ac_participate": 3}]
  ]],
  [61, "你在网上发表过长文/创作吗？", "E_create", [
    ["从来没写过长文", {"E_create": 1, "E_voice": 1, "E_express": 1}],
    ["偶尔有感而发写写", {"E_create": 2, "E_voice": 2, "E_express": 2}],
    ["经常写，博客/公众号/专栏都有", {"E_create": 3, "E_voice": 3, "E_express": 3}]
  ]],
  [62, "你对自己的表达能力？", "E_express", [
    ["不太自信，怕说不好", {"E_express": 1, "E_voice": 1}],
    ["还行，够用", {"E_express": 2, "E_voice": 2}],
    ["非常自信，觉得我很有文采", {"E_express": 3, "E_voice": 3}]
  ]],
  [63, "看到好内容会转发分享吗？", "So_influence", [
    ["从不转发", {"So_influence": 1, "Ac_social": 1, "So_connect": 1}],
    ["偶尔转发给特定的人", {"So_influence": 2, "Ac_social": 2, "So_connect": 2}],
    ["疯狂转发，好东西要让全世界看到", {"So_influence": 3, "Ac_social": 3, "So_connect": 3}]
  ]],
  [64, "你理想中的网上表达状态是？", "E_voice", [
    ["少说多做，低调潜水", {"E_voice": 1, "So_influence": 1}],
    ["有需要时才发声", {"E_voice": 2, "So_influence": 2}],
    ["持续输出，让世界听到我的声音", {"E_voice": 3, "So_influence": 3}]
  ]]
];

