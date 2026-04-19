// 파일 상단에 이 줄을 추가하여 기존 데이터들을 하나의 배열에 넣습니다.
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}

const RS240_DATA = [
    // #240 시리즈 데이터 (11NT ~ 60NT는 CSV 데이터 기반, 61NT ~ 90NT는 패턴 기반)
    { model: "#240", nt: 11, od: 305, pitchCircle: 270.47, rootCircle: 222.84, bossDiameter: 180, bossLength: 120 },
    { model: "#240", nt: 12, od: 330, pitchCircle: 294.41, rootCircle: 246.78, bossDiameter: 200, bossLength: 120 },
    { model: "#240", nt: 13, od: 355, pitchCircle: 318.41, rootCircle: 270.78, bossDiameter: 220, bossLength: 120 },
    { model: "#240", nt: 14, od: 380, pitchCircle: 342.44, rootCircle: 294.81, bossDiameter: 240, bossLength: 120 },
    { model: "#240", nt: 15, od: 404, pitchCircle: 366.5, rootCircle: 318.87, bossDiameter: 260, bossLength: 130 },
    { model: "#240", nt: 16, od: 429, pitchCircle: 390.59, rootCircle: 342.96, bossDiameter: 280, bossLength: 130 },
    { model: "#240", nt: 17, od: 453, pitchCircle: 414.69, rootCircle: 367.06, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 18, od: 478, pitchCircle: 438.82, rootCircle: 391.19, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 19, od: 502, pitchCircle: 462.96, rootCircle: 415.33, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 20, od: 527, pitchCircle: 487.1, rootCircle: 439.47, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 21, od: 551, pitchCircle: 511.26, rootCircle: 463.63, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 22, od: 576, pitchCircle: 535.43, rootCircle: 487.8, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 23, od: 600, pitchCircle: 559.61, rootCircle: 511.98, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 24, od: 625, pitchCircle: 583.79, rootCircle: 536.16, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 25, od: 649, pitchCircle: 607.97, rootCircle: 560.34, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 26, od: 673, pitchCircle: 632.16, rootCircle: 584.53, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 27, od: 698, pitchCircle: 656.35, rootCircle: 608.72, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 28, od: 722, pitchCircle: 680.54, rootCircle: 632.91, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 29, od: 747, pitchCircle: 704.74, rootCircle: 657.11, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 30, od: 771, pitchCircle: 728.94, rootCircle: 681.31, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 32, od: 820, pitchCircle: 777.34, rootCircle: 729.71, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 34, od: 868, pitchCircle: 825.75, rootCircle: 778.12, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 35, od: 893, pitchCircle: 849.96, rootCircle: 802.33, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 36, od: 917, pitchCircle: 874.17, rootCircle: 826.54, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 38, od: 965, pitchCircle: 922.6, rootCircle: 874.97, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 40, od: 1014, pitchCircle: 971.03, rootCircle: 923.4, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 42, od: 1063, pitchCircle: 1019.48, rootCircle: 971.85, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 45, od: 1135, pitchCircle: 1092.16, rootCircle: 1044.53, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 48, od: 1208, pitchCircle: 1164.87, rootCircle: 1117.24, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 50, od: 1257, pitchCircle: 1213.35, rootCircle: 1165.72, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 54, od: 1354, pitchCircle: 1310.33, rootCircle: 1262.7, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 60, od: 1499, pitchCircle: 1455.83, rootCircle: 1408.2, bossDiameter: 300, bossLength: 130 },
    // 61번부터 90번까지 패턴 생성 (Pitch 76.2mm 기준)
    { model: "#240", nt: 61, od: 1523, pitchCircle: 1480.08, rootCircle: 1432.45, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 65, od: 1620, pitchCircle: 1577.08, rootCircle: 1529.45, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 70, od: 1742, pitchCircle: 1698.35, rootCircle: 1650.72, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 75, od: 1863, pitchCircle: 1819.62, rootCircle: 1771.99, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 80, od: 1984, pitchCircle: 1940.9, rootCircle: 1893.27, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 85, od: 2105, pitchCircle: 2062.19, rootCircle: 2014.56, bossDiameter: 300, bossLength: 130 },
    { model: "#240", nt: 90, od: 2227, pitchCircle: 2183.48, rootCircle: 2135.85, bossDiameter: 300, bossLength: 130 }
];

allSprocketData.push(...RS240_DATA);