/**
 * [수정] #40 전체 데이터 파일
 * [수정] model 값을 "#40" 형식으로 통일
 * [유지] 검색 페이지에서 바로 사용할 수 있도록 allSprocketData에 추가
 */

// [유지] 전역 데이터 배열 확인 및 초기화
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}

// [수정] #40 전체 규격 데이터
const RS40_DATA = [
    { model: "#40", nt: 10, od: 47, pitchCircle: 41.1, rootCircle: 33.18, bossDiameter: 28, bossLength: 25, drill: 9.5 },
    { model: "#40", nt: 11, od: 51, pitchCircle: 45.08, rootCircle: 37.16, bossDiameter: 30, bossLength: 25, drill: 9.5 },
    { model: "#40", nt: 12, od: 55, pitchCircle: 49.07, rootCircle: 41.15, bossDiameter: 34, bossLength: 25, drill: 9.5 },
    { model: "#40", nt: 13, od: 59, pitchCircle: 53.07, rootCircle: 45.15, bossDiameter: 38, bossLength: 25, drill: 9.5 },
    { model: "#40", nt: 14, od: 63, pitchCircle: 57.07, rootCircle: 49.15, bossDiameter: 43, bossLength: 30, drill: 9.5 },
    { model: "#40", nt: 15, od: 67, pitchCircle: 61.08, rootCircle: 53.16, bossDiameter: 46, bossLength: 30, drill: 9.5 },
    { model: "#40", nt: 16, od: 71, pitchCircle: 65.1, rootCircle: 57.18, bossDiameter: 51, bossLength: 30, drill: 9.5 },
    { model: "#40", nt: 17, od: 75, pitchCircle: 69.12, rootCircle: 61.2, bossDiameter: 54, bossLength: 30, drill: 9.5 },
    { model: "#40", nt: 18, od: 79, pitchCircle: 73.14, rootCircle: 65.22, bossDiameter: 57, bossLength: 30, drill: 9.5 },
    { model: "#40", nt: 19, od: 83, pitchCircle: 77.16, rootCircle: 69.24, bossDiameter: 60, bossLength: 30, drill: 9.5 },
    { model: "#40", nt: 20, od: 87, pitchCircle: 81.18, rootCircle: 73.26, bossDiameter: 60, bossLength: 30, drill: 9.5 },
    { model: "#40", nt: 21, od: 91, pitchCircle: 85.21, rootCircle: 77.29, bossDiameter: 60, bossLength: 30, drill: 12.5 },
    { model: "#40", nt: 22, od: 95, pitchCircle: 89.23, rootCircle: 81.31, bossDiameter: 70, bossLength: 30, drill: 12.5 },
    { model: "#40", nt: 23, od: 99, pitchCircle: 93.26, rootCircle: 85.34, bossDiameter: 70, bossLength: 30, drill: 12.5 },
    { model: "#40", nt: 24, od: 103, pitchCircle: 97.28, rootCircle: 89.36, bossDiameter: 70, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 25, od: 107, pitchCircle: 101.31, rootCircle: 93.39, bossDiameter: 70, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 26, od: 111, pitchCircle: 105.34, rootCircle: 97.42, bossDiameter: 70, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 27, od: 116, pitchCircle: 109.37, rootCircle: 101.45, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 28, od: 120, pitchCircle: 113.4, rootCircle: 105.48, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 29, od: 124, pitchCircle: 117.43, rootCircle: 109.51, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 30, od: 128, pitchCircle: 121.46, rootCircle: 113.54, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 31, od: 132, pitchCircle: 125.49, rootCircle: 117.57, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 32, od: 136, pitchCircle: 129.52, rootCircle: 121.6, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 33, od: 140, pitchCircle: 133.55, rootCircle: 125.63, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 34, od: 144, pitchCircle: 137.58, rootCircle: 129.66, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 35, od: 148, pitchCircle: 141.61, rootCircle: 133.69, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 36, od: 152, pitchCircle: 145.64, rootCircle: 137.72, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 37, od: 156, pitchCircle: 149.67, rootCircle: 141.75, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 38, od: 160, pitchCircle: 153.7, rootCircle: 145.78, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 39, od: 164, pitchCircle: 157.73, rootCircle: 149.81, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 40, od: 168, pitchCircle: 161.76, rootCircle: 153.84, bossDiameter: 80, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 41, od: 172, pitchCircle: 165.79, rootCircle: 157.87, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 42, od: 176, pitchCircle: 169.82, rootCircle: 161.9, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 43, od: 180, pitchCircle: 173.86, rootCircle: 165.94, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 44, od: 184, pitchCircle: 177.89, rootCircle: 169.97, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 45, od: 188, pitchCircle: 181.92, rootCircle: 174, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 46, od: 193, pitchCircle: 185.95, rootCircle: 178.03, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 47, od: 197, pitchCircle: 189.98, rootCircle: 182.06, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 48, od: 201, pitchCircle: 194.01, rootCircle: 186.09, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 49, od: 205, pitchCircle: 198.04, rootCircle: 190.12, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 50, od: 209, pitchCircle: 202.08, rootCircle: 194.16, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 51, od: 213, pitchCircle: 206.11, rootCircle: 198.19, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 52, od: 217, pitchCircle: 210.14, rootCircle: 202.22, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 53, od: 221, pitchCircle: 214.17, rootCircle: 206.25, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 54, od: 225, pitchCircle: 218.2, rootCircle: 210.28, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 55, od: 229, pitchCircle: 222.24, rootCircle: 214.32, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 56, od: 233, pitchCircle: 226.27, rootCircle: 218.35, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 57, od: 237, pitchCircle: 230.3, rootCircle: 222.38, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 58, od: 241, pitchCircle: 234.33, rootCircle: 226.41, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 59, od: 245, pitchCircle: 238.36, rootCircle: 230.44, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 60, od: 249, pitchCircle: 242.39, rootCircle: 234.47, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 61, od: 253, pitchCircle: 246.43, rootCircle: 238.51, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 62, od: 257, pitchCircle: 250.46, rootCircle: 242.54, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 63, od: 261, pitchCircle: 254.49, rootCircle: 246.57, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 64, od: 265, pitchCircle: 258.52, rootCircle: 250.6, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 65, od: 269, pitchCircle: 262.55, rootCircle: 254.63, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 66, od: 273, pitchCircle: 266.59, rootCircle: 258.67, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 67, od: 277, pitchCircle: 270.62, rootCircle: 262.7, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 68, od: 281, pitchCircle: 274.65, rootCircle: 266.73, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 69, od: 285, pitchCircle: 278.68, rootCircle: 270.76, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 70, od: 289, pitchCircle: 282.71, rootCircle: 274.79, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 71, od: 293, pitchCircle: 286.75, rootCircle: 278.83, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 72, od: 297, pitchCircle: 290.78, rootCircle: 282.86, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 73, od: 301, pitchCircle: 294.81, rootCircle: 286.89, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 74, od: 305, pitchCircle: 298.84, rootCircle: 290.92, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 75, od: 309, pitchCircle: 302.88, rootCircle: 294.96, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 76, od: 313, pitchCircle: 306.91, rootCircle: 298.99, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 77, od: 317, pitchCircle: 310.94, rootCircle: 303.02, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 78, od: 321, pitchCircle: 314.97, rootCircle: 307.05, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 79, od: 325, pitchCircle: 319, rootCircle: 311.08, bossDiameter: 100, bossLength: 35, drill: 12.5 },
    { model: "#40", nt: 80, od: 329, pitchCircle: 323.04, rootCircle: 315.12, bossDiameter: 100, bossLength: 35, drill: 12.5 }

];

// [유지] 변환된 데이터를 전체 배열에 추가
allSprocketData.push(...RS40_DATA);