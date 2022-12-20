ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.player','game.entities.enemy' )
.defines(function(){
LevelLevel1=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 40,
			"y": 128
		},
		{
			"type": "EntityEnemy",
			"x": 532,
			"y": 132
		}
	],
	"layer": [
		{
			"name": "paisaje",
			"width": 20,
			"height": 9,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/back.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12],
				[0,0,0,0,0,0,0,0,13,14,15,16,17,18,19,20,21,22,23,24],
				[0,0,0,0,0,0,0,0,25,26,27,28,29,30,31,32,33,34,35,36],
				[0,0,0,0,0,0,0,0,37,38,39,40,41,42,43,44,45,46,47,48],
				[0,0,0,0,0,0,0,0,49,50,51,52,53,54,55,56,57,58,59,60],
				[0,0,0,0,0,0,0,0,61,62,63,64,65,66,67,68,69,70,71,72],
				[0,0,0,0,0,0,0,0,73,74,75,76,77,78,79,80,81,82,83,84],
				[0,0,0,0,0,0,0,0,85,86,87,88,89,90,91,92,93,94,95,96],
				[0,0,0,0,0,0,0,0,97,98,99,100,101,102,103,104,105,106,107,108]
			]
		},
		{
			"name": "fondo",
			"width": 138,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/fondo.png ",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[426,427,428,429,430,431,432,433,1027,1028,1029,1030,1029,1030,1029,1030,1029,1030,1031,1032,446,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,42,43,44,45,46,47,48,49,50,51,52,53,54,55,34,35,36,37,38,39,40,34,35,36,37,38,39,40,34,35,36,37,38,39,40,834,835,836,837,838,839,840,841,418,419,420,421,422,423,424,42,43,44,45,46,47,48,49,50,51,52,53,54,55,42,43,44,45,46,47,48,49,50,51,52,53,54,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[426,427,428,429,430,431,432,433,1059,1060,1061,1062,1060,1061,1062,1063,1061,1062,1063,1064,446,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,42,43,44,45,46,47,48,49,50,51,52,53,54,55,34,35,36,37,38,39,40,34,35,36,37,38,39,40,34,35,36,37,38,39,40,834,835,836,837,838,839,840,841,418,419,420,421,422,423,424,42,43,44,45,46,47,48,49,50,51,52,53,54,55,42,43,44,45,46,47,48,49,50,51,52,53,54,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[458,459,460,461,462,463,464,465,1091,1092,1092,1092,1095,1092,1092,1092,1092,1092,1095,1096,478,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,74,75,76,77,78,79,80,81,82,83,84,85,86,87,66,67,68,69,70,71,72,66,67,68,69,70,71,72,66,67,68,69,70,71,72,866,867,868,869,870,871,872,873,450,451,452,453,454,455,456,74,75,76,77,78,79,80,81,82,83,84,85,86,87,74,75,76,77,78,79,80,81,82,83,84,85,86,87,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,106,107,108,109,110,111,112,113,114,115,116,117,118,119,98,99,100,101,102,103,104,98,99,100,101,102,103,104,98,99,100,101,102,103,104,898,899,900,901,902,903,904,905,482,483,484,485,486,487,488,106,107,108,109,110,111,112,113,114,115,116,117,118,119,106,107,108,109,110,111,112,113,114,115,116,117,118,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,138,139,140,141,142,143,144,145,146,147,148,149,150,151,130,131,132,133,134,135,136,130,131,132,133,134,135,136,130,131,132,133,134,135,136,930,931,932,933,934,935,936,937,514,515,516,517,518,519,520,138,139,140,141,142,143,144,145,146,147,148,149,150,151,138,139,140,141,142,143,144,145,146,147,148,149,150,151,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,170,171,172,173,174,175,176,177,178,179,180,181,182,183,162,163,164,165,166,167,168,162,163,164,165,166,167,168,162,163,164,165,166,167,168,962,963,964,965,966,967,968,969,546,547,548,549,550,551,552,170,171,172,173,174,175,176,177,178,179,180,181,182,183,170,171,172,173,174,175,176,177,178,179,180,181,182,183,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,202,203,204,205,206,207,208,209,210,211,212,213,214,215,194,195,196,197,198,199,200,194,195,196,197,198,199,200,194,195,196,197,198,199,200,994,995,996,997,998,999,1000,1001,578,579,580,581,582,583,584,202,203,204,205,206,207,208,209,210,211,212,213,214,215,202,203,204,205,206,207,208,209,210,211,212,213,214,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,0,0,635,636,637,638,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,234,235,236,237,238,239,240,241,242,243,244,245,246,247,226,227,228,229,230,231,232,226,227,228,229,230,231,232,226,227,228,229,230,231,232,1026,1027,1028,1029,1030,1031,1032,1033,610,611,612,613,614,615,616,234,235,236,237,238,239,240,241,242,243,244,245,246,247,234,235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,0,666,667,668,669,670,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,266,267,268,269,270,271,272,273,274,275,276,277,278,279,258,259,260,261,262,263,264,258,259,260,261,262,263,264,258,259,260,261,262,263,264,1058,1059,1060,1061,1062,1063,1064,1065,642,643,644,645,646,647,648,266,267,268,269,270,271,272,273,274,275,276,277,278,279,266,267,268,269,270,271,272,273,274,275,276,277,278,279,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,298,299,300,301,302,303,304,305,306,307,308,309,310,311,290,291,292,293,294,295,296,290,291,292,293,294,295,296,290,291,292,293,294,295,296,1090,1091,1092,1093,1094,1095,1096,1097,674,675,676,677,678,679,680,298,299,300,301,302,303,304,305,306,307,308,309,310,311,298,299,300,301,302,303,304,305,306,307,308,309,310,311,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,330,331,332,333,334,335,336,337,338,339,340,341,342,343,322,323,324,325,326,327,328,322,323,324,325,326,327,328,322,323,324,325,326,327,328,1122,1123,1124,1125,1126,1127,1128,1129,706,707,708,709,710,711,712,330,331,332,333,334,335,336,337,338,339,340,341,342,343,330,331,332,333,334,335,336,337,338,339,340,341,342,343,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,765,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,362,363,364,365,366,367,368,369,370,371,372,373,374,375,354,355,356,357,358,359,360,354,355,356,357,358,359,360,354,355,356,357,358,359,360,1154,1155,1156,1157,1158,1159,1160,1161,738,739,740,741,742,743,744,362,363,364,365,366,367,368,369,370,371,372,373,374,375,362,363,364,365,366,367,368,369,370,371,372,373,374,375,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 124,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/back.png'), new ig.Image('media/fondo.png ')];
});