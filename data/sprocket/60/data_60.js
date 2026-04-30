/**
 * [수정] #60 전체 데이터 파일
 * [수정] 사용자가 제공한 CSV 원본 기준으로 10T ~ 90T 전체 반영
 * [수정] model 값을 "#60" 형식으로 통일
 * [유지] 검색 페이지에서 바로 사용할 수 있도록 allSprocketData에 추가
 */

// [유지] 전역 데이터 배열 확인 및 초기화
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}

// [수정] #60 전체 규격 데이터
const RS60_DATA = [
    { model: "#60", nt: 10, od: 70, pitchCircle: 61.65, rootCircle: 49.74, bossDiameter: 39, bossLength: 40, drill: 12.5 },
    { model: "#60", nt: 11, od: 76, pitchCircle: 67.62, rootCircle: 55.71, bossDiameter: 45, bossLength: 40, drill: 12.5 },
    { model: "#60", nt: 12, od: 83, pitchCircle: 73.6, rootCircle: 61.69, bossDiameter: 51, bossLength: 40, drill: 12.5 },
    { model: "#60", nt: 13, od: 89, pitchCircle: 79.6, rootCircle: 67.69, bossDiameter: 57, bossLength: 40, drill: 16.0 },
    { model: "#60", nt: 14, od: 95, pitchCircle: 85.61, rootCircle: 73.7, bossDiameter: 62, bossLength: 40, drill: 16.0 },
    { model: "#60", nt: 15, od: 101, pitchCircle: 91.63, rootCircle: 79.72, bossDiameter: 68, bossLength: 40, drill: 16.0 },
    { model: "#60", nt: 16, od: 107, pitchCircle: 97.65, rootCircle: 85.74, bossDiameter: 76, bossLength: 42, drill: 16.0 },
    { model: "#60", nt: 17, od: 113, pitchCircle: 103.67, rootCircle: 91.76, bossDiameter: 80, bossLength: 42, drill: 16.0 },
    { model: "#60", nt: 18, od: 119, pitchCircle: 109.7, rootCircle: 97.79, bossDiameter: 80, bossLength: 42, drill: 16.0 },
    { model: "#60", nt: 19, od: 126, pitchCircle: 115.74, rootCircle: 103.83, bossDiameter: 80, bossLength: 42, drill: 16.0 },
    { model: "#60", nt: 20, od: 132, pitchCircle: 121.78, rootCircle: 109.87, bossDiameter: 85, bossLength: 42, drill: 16.0 },
    { model: "#60", nt: 21, od: 138, pitchCircle: 127.82, rootCircle: 115.91, bossDiameter: 85, bossLength: 45, drill: 16.0 },
    { model: "#60", nt: 22, od: 144, pitchCircle: 133.86, rootCircle: 121.95, bossDiameter: 90, bossLength: 45, drill: 16.0 },
    { model: "#60", nt: 23, od: 150, pitchCircle: 139.9, rootCircle: 127.99, bossDiameter: 90, bossLength: 45, drill: 18.0 },
    { model: "#60", nt: 24, od: 156, pitchCircle: 145.95, rootCircle: 134.04, bossDiameter: 90, bossLength: 45, drill: 18.0 },
    { model: "#60", nt: 25, od: 162, pitchCircle: 151.99, rootCircle: 140.08, bossDiameter: 100, bossLength: 45, drill: 18.0 },
    { model: "#60", nt: 26, od: 168, pitchCircle: 158.04, rootCircle: 146.13, bossDiameter: 100, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 27, od: 174, pitchCircle: 164.09, rootCircle: 152.18, bossDiameter: 100, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 28, od: 181, pitchCircle: 170.14, rootCircle: 158.23, bossDiameter: 120, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 29, od: 187, pitchCircle: 176.19, rootCircle: 164.28, bossDiameter: 120, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 30, od: 193, pitchCircle: 182.25, rootCircle: 170.34, bossDiameter: 120, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 31, od: 199, pitchCircle: 188.3, rootCircle: 176.39, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 32, od: 205, pitchCircle: 194.35, rootCircle: 182.44, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 33, od: 211, pitchCircle: 200.41, rootCircle: 188.5, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 34, od: 217, pitchCircle: 206.46, rootCircle: 194.55, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 35, od: 223, pitchCircle: 212.52, rootCircle: 200.61, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 36, od: 229, pitchCircle: 218.57, rootCircle: 206.66, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 37, od: 235, pitchCircle: 224.63, rootCircle: 212.72, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 38, od: 241, pitchCircle: 230.69, rootCircle: 218.78, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 39, od: 247, pitchCircle: 236.74, rootCircle: 224.83, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 40, od: 253, pitchCircle: 242.8, rootCircle: 230.89, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 41, od: 260, pitchCircle: 248.86, rootCircle: 236.95, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 42, od: 266, pitchCircle: 254.92, rootCircle: 243.01, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 43, od: 272, pitchCircle: 260.98, rootCircle: 249.07, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 44, od: 278, pitchCircle: 267.03, rootCircle: 255.12, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 45, od: 284, pitchCircle: 273.09, rootCircle: 261.18, bossDiameter: 127, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 46, od: 290, pitchCircle: 279.15, rootCircle: 267.24, bossDiameter: 137, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 47, od: 296, pitchCircle: 285.21, rootCircle: 273.3, bossDiameter: 137, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 48, od: 302, pitchCircle: 291.27, rootCircle: 279.36, bossDiameter: 137, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 49, od: 308, pitchCircle: 297.33, rootCircle: 285.42, bossDiameter: 137, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 50, od: 314, pitchCircle: 303.39, rootCircle: 291.48, bossDiameter: 137, bossLength: 50, drill: 18.0 },
    { model: "#60", nt: 51, od: 320, pitchCircle: 309.45, rootCircle: 297.54, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 52, od: 326, pitchCircle: 315.51, rootCircle: 303.6, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 53, od: 332, pitchCircle: 321.57, rootCircle: 309.66, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 54, od: 339, pitchCircle: 327.63, rootCircle: 315.72, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 55, od: 345, pitchCircle: 333.69, rootCircle: 321.78, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 56, od: 351, pitchCircle: 339.75, rootCircle: 327.84, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 57, od: 357, pitchCircle: 345.81, rootCircle: 333.9, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 58, od: 363, pitchCircle: 351.87, rootCircle: 339.96, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 59, od: 369, pitchCircle: 357.93, rootCircle: 346.02, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 60, od: 375, pitchCircle: 363.99, rootCircle: 352.08, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 61, od: 381, pitchCircle: 370.06, rootCircle: 358.15, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 62, od: 387, pitchCircle: 376.12, rootCircle: 364.21, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 63, od: 393, pitchCircle: 382.18, rootCircle: 370.27, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 64, od: 399, pitchCircle: 388.24, rootCircle: 376.33, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 65, od: 405, pitchCircle: 394.3, rootCircle: 382.39, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 66, od: 411, pitchCircle: 400.36, rootCircle: 388.45, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 67, od: 417, pitchCircle: 406.42, rootCircle: 394.51, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 68, od: 423, pitchCircle: 412.49, rootCircle: 400.58, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 69, od: 430, pitchCircle: 418.55, rootCircle: 406.64, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 70, od: 436, pitchCircle: 424.61, rootCircle: 412.7, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 71, od: 442, pitchCircle: 430.67, rootCircle: 418.76, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 72, od: 448, pitchCircle: 436.73, rootCircle: 424.82, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 73, od: 454, pitchCircle: 442.79, rootCircle: 430.88, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 74, od: 460, pitchCircle: 448.86, rootCircle: 436.95, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 75, od: 466, pitchCircle: 454.92, rootCircle: 443.01, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 76, od: 472, pitchCircle: 460.98, rootCircle: 449.07, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 77, od: 478, pitchCircle: 467.04, rootCircle: 455.13, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 78, od: 484, pitchCircle: 473.1, rootCircle: 461.19, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 79, od: 490, pitchCircle: 479.17, rootCircle: 467.26, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 80, od: 496, pitchCircle: 485.23, rootCircle: 473.32, bossDiameter: 137, bossLength: 55, drill: 18.0 },
    { model: "#60", nt: 81, od: 502, pitchCircle: 491.29, rootCircle: 479.38, bossDiameter: 137, bossLength: 55, drill: 18.0 }

];

// [유지] 변환된 데이터를 전체 배열에 추가
allSprocketData.push(...RS60_DATA);