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
  [3, "在群聊里你通常是？", "Ac_social", [
    ["万年潜水，偶尔冒泡", {"Ac_social": 1, "E_express": 1, "So_connect": 1}],
    ["看话题，感兴趣就聊", {"Ac_social": 2, "E_express": 2, "So_connect": 2}],
    ["话痨本痨，群里的气氛组", {"Ac_social": 3, "E_express": 3, "So_connect": 3}]
  ]],
  [4, "你会自己拍/发短视频吗？", "E_create", [
    ["只看不拍，没兴趣", {"E_create": 1, "E_voice": 1, "So_influence": 1}],
    ["偶尔拍着玩", {"E_create": 2, "E_voice": 2, "So_influence": 2}],
    ["经常拍，我也有博主梦", {"E_create": 3, "E_voice": 3, "So_influence": 3}]
  ]],
  [5, "看到一篇你很生气的文章，你？", "A_critic", [
    ["关掉，眼不见为净", {"A_critic": 1, "A_debate": 1, "E_voice": 1}],
    ["心里骂两句", {"A_critic": 2, "A_debate": 2, "E_voice": 2}],
    ["评论区开火，必须纠正", {"A_critic": 3, "A_debate": 3, "E_voice": 3}]
  ]],
  [6, "你会用表情包来表达吗？", "E_create", [
    ["很少用，文字就够了", {"E_create": 1, "E_express": 1}],
    ["适度使用增加趣味", {"E_create": 2, "E_express": 2}],
    ["没有表情包不会说话", {"E_create": 3, "E_express": 3}]
  ]],
  [7, "朋友圈/动态更新频率？", "E_express", [
    ["几乎不发，看别人就好", {"E_express": 1, "Ac_social": 1, "So_influence": 1}],
    ["一周几次，有好内容就发", {"E_express": 2, "Ac_social": 2, "So_influence": 2}],
    ["一天N条，生活即直播", {"E_express": 3, "Ac_social": 3, "So_influence": 3}]
  ]],
  [8, "你有多少个浏览器标签页常年不关？", "N_online", [
    ["3-5个，用完就关", {"N_online": 1, "N_info": 1}],
    ["20-50个，都是「稍后看」", {"N_online": 2, "N_info": 2}],
    ["100+，Chrome比我命都重", {"N_online": 3, "N_info": 3}]
  ]]
];
