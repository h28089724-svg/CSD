/**
 * [완성] #100 전체 데이터 파일
 * [수정] 사용자가 제공한 CSV 원본 기준으로 10T ~ 90T 전체 반영
 * [수정] model 값을 "#100" 형식으로 통일
 */

// [유지] 전역 데이터 배열 확인 및 초기화
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}

// [전체 데이터]
const RS100_DATA = [
    { model:"#100", nt:10, od:117, pitchCircle:102.75, rootCircle:83.7, bossDiameter:65, bossLength:70, drill:25 },
    { model:"#100", nt:11, od:127, pitchCircle:112.7, rootCircle:93.65, bossDiameter:76, bossLength:70, drill:25 },
    { model:"#100", nt:12, od:138, pitchCircle:122.67, rootCircle:103.62, bossDiameter:86, bossLength:70, drill:25 },
    { model:"#100", nt:13, od:148, pitchCircle:132.67, rootCircle:113.62, bossDiameter:96, bossLength:70, drill:25 },
    { model:"#100", nt:14, od:158, pitchCircle:142.68, rootCircle:123.63, bossDiameter:100, bossLength:70, drill:25 },
    { model:"#100", nt:15, od:168, pitchCircle:152.71, rootCircle:133.66, bossDiameter:100, bossLength:70, drill:25 },
    { model:"#100", nt:16, od:179, pitchCircle:162.75, rootCircle:143.7, bossDiameter:110, bossLength:75, drill:25 },
    { model:"#100", nt:17, od:189, pitchCircle:172.79, rootCircle:153.74, bossDiameter:110, bossLength:75, drill:25 },
    { model:"#100", nt:18, od:199, pitchCircle:182.84, rootCircle:163.79, bossDiameter:110, bossLength:75, drill:25 },
    { model:"#100", nt:19, od:209, pitchCircle:192.9, rootCircle:173.85, bossDiameter:110, bossLength:75, drill:25 },
    { model:"#100", nt:20, od:220, pitchCircle:202.96, rootCircle:183.91, bossDiameter:110, bossLength:75, drill:25 },

    { model:"#100", nt:21, od:230, pitchCircle:213.03, rootCircle:193.98, bossDiameter:110, bossLength:75, drill:25 },
    { model:"#100", nt:22, od:240, pitchCircle:223.1, rootCircle:204.05, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:23, od:250, pitchCircle:233.17, rootCircle:214.12, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:24, od:260, pitchCircle:243.25, rootCircle:224.2, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:25, od:270, pitchCircle:253.32, rootCircle:234.27, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:26, od:281, pitchCircle:263.41, rootCircle:244.36, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:27, od:291, pitchCircle:273.49, rootCircle:254.44, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:28, od:301, pitchCircle:283.57, rootCircle:264.52, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:29, od:311, pitchCircle:293.66, rootCircle:274.61, bossDiameter:120, bossLength:75, drill:25 },
    { model:"#100", nt:30, od:321, pitchCircle:303.75, rootCircle:284.7, bossDiameter:120, bossLength:75, drill:25 },

    { model:"#100", nt:31, od:331, pitchCircle:313.83, rootCircle:294.78, bossDiameter:130, bossLength:75, drill:25 },
    { model:"#100", nt:32, od:341, pitchCircle:323.92, rootCircle:304.87, bossDiameter:130, bossLength:75, drill:25 },
    { model:"#100", nt:33, od:352, pitchCircle:334.01, rootCircle:314.96, bossDiameter:130, bossLength:75, drill:25 },
    { model:"#100", nt:34, od:362, pitchCircle:344.1, rootCircle:325.05, bossDiameter:130, bossLength:75, drill:25 },
    { model:"#100", nt:35, od:372, pitchCircle:354.2, rootCircle:335.15, bossDiameter:130, bossLength:75, drill:25 },
    { model:"#100", nt:36, od:382, pitchCircle:364.29, rootCircle:345.24, bossDiameter:130, bossLength:75, drill:25 },
    { model:"#100", nt:37, od:392, pitchCircle:374.38, rootCircle:355.33, bossDiameter:140, bossLength:80, drill:25 },
    { model:"#100", nt:38, od:402, pitchCircle:384.48, rootCircle:365.43, bossDiameter:140, bossLength:80, drill:25 },
    { model:"#100", nt:39, od:412, pitchCircle:394.57, rootCircle:375.52, bossDiameter:140, bossLength:80, drill:25 },
    { model:"#100", nt:40, od:422, pitchCircle:404.67, rootCircle:385.62, bossDiameter:140, bossLength:80, drill:25 },

    { model:"#100", nt:41, od:433, pitchCircle:414.77, rootCircle:395.72, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:42, od:443, pitchCircle:424.86, rootCircle:405.81, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:43, od:453, pitchCircle:434.96, rootCircle:415.91, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:44, od:463, pitchCircle:445.06, rootCircle:426.01, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:45, od:473, pitchCircle:455.15, rootCircle:436.1, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:46, od:483, pitchCircle:465.25, rootCircle:446.2, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:47, od:493, pitchCircle:475.35, rootCircle:456.3, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:48, od:503, pitchCircle:485.45, rootCircle:466.4, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:49, od:514, pitchCircle:495.55, rootCircle:476.5, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:50, od:524, pitchCircle:505.65, rootCircle:486.6, bossDiameter:150, bossLength:90, drill:25 },

    { model:"#100", nt:51, od:534, pitchCircle:515.75, rootCircle:496.7, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:52, od:544, pitchCircle:525.85, rootCircle:506.8, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:53, od:554, pitchCircle:535.95, rootCircle:516.9, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:54, od:564, pitchCircle:546.05, rootCircle:527.0, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:55, od:574, pitchCircle:556.15, rootCircle:537.1, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:56, od:584, pitchCircle:566.25, rootCircle:547.2, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:57, od:595, pitchCircle:576.35, rootCircle:557.3, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:58, od:605, pitchCircle:586.45, rootCircle:567.4, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:59, od:615, pitchCircle:596.56, rootCircle:577.51, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:60, od:625, pitchCircle:606.66, rootCircle:587.61, bossDiameter:150, bossLength:90, drill:25 },

    { model:"#100", nt:61, od:635, pitchCircle:616.76, rootCircle:597.71, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:62, od:645, pitchCircle:626.86, rootCircle:607.81, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:63, od:655, pitchCircle:636.96, rootCircle:617.91, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:64, od:665, pitchCircle:647.07, rootCircle:628.02, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:65, od:675, pitchCircle:657.17, rootCircle:638.12, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:66, od:686, pitchCircle:667.27, rootCircle:648.22, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:67, od:696, pitchCircle:677.37, rootCircle:658.32, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:68, od:706, pitchCircle:687.48, rootCircle:668.43, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:69, od:716, pitchCircle:697.58, rootCircle:678.53, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:70, od:726, pitchCircle:707.68, rootCircle:688.63, bossDiameter:150, bossLength:90, drill:25 },

    { model:"#100", nt:71, od:736, pitchCircle:717.78, rootCircle:698.73, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:72, od:746, pitchCircle:727.89, rootCircle:708.84, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:73, od:756, pitchCircle:737.99, rootCircle:718.94, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:74, od:766, pitchCircle:748.09, rootCircle:729.04, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:75, od:777, pitchCircle:758.2, rootCircle:739.15, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:76, od:787, pitchCircle:768.3, rootCircle:749.25, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:77, od:797, pitchCircle:778.4, rootCircle:759.35, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:78, od:807, pitchCircle:788.51, rootCircle:769.46, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:79, od:817, pitchCircle:798.61, rootCircle:779.56, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:80, od:827, pitchCircle:808.71, rootCircle:789.66, bossDiameter:150, bossLength:90, drill:25 },

    { model:"#100", nt:81, od:837, pitchCircle:818.82, rootCircle:799.77, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:82, od:847, pitchCircle:828.92, rootCircle:809.87, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:83, od:857, pitchCircle:839.03, rootCircle:819.98, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:84, od:868, pitchCircle:849.13, rootCircle:830.08, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:85, od:878, pitchCircle:859.23, rootCircle:840.18, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:86, od:888, pitchCircle:869.34, rootCircle:850.29, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:87, od:898, pitchCircle:879.44, rootCircle:860.39, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:88, od:908, pitchCircle:889.55, rootCircle:870.5, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:89, od:918, pitchCircle:899.65, rootCircle:880.6, bossDiameter:150, bossLength:90, drill:25 },
    { model:"#100", nt:90, od:928, pitchCircle:909.76, rootCircle:890.71, bossDiameter:150, bossLength:90, drill:25 }
];

// [유지] 데이터 추가
allSprocketData.push(...RS100_DATA);