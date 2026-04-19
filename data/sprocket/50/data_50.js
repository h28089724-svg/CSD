/**
 * [수정] #50 전체 데이터 파일
 * [수정] 사용자가 제공한 CSV 원본 기준으로 10T ~ 90T 전체 반영
 * [수정] model 값을 "#50" 형식으로 통일
 * [유지] 검색 페이지에서 바로 사용할 수 있도록 allSprocketData에 추가
 */

// [유지] 전역 데이터 배열 확인 및 초기화
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}

// [수정] #50 전체 규격 데이터
const RS50_DATA = [
    { model: "#50", nt: 10, od: 58, pitchCircle: 51.37, rootCircle: 41.21, bossDiameter: 35, bossLength: 30, drill: 9.5 },
    { model: "#50", nt: 11, od: 64, pitchCircle: 56.35, rootCircle: 46.19, bossDiameter: 37, bossLength: 30, drill: 12.5 },
    { model: "#50", nt: 12, od: 69, pitchCircle: 61.34, rootCircle: 51.18, bossDiameter: 43, bossLength: 30, drill: 12.5 },
    { model: "#50", nt: 13, od: 74, pitchCircle: 66.33, rootCircle: 56.17, bossDiameter: 48, bossLength: 35, drill: 12.5 },
    { model: "#50", nt: 14, od: 79, pitchCircle: 71.34, rootCircle: 61.18, bossDiameter: 53, bossLength: 35, drill: 12.5 },
    { model: "#50", nt: 15, od: 84, pitchCircle: 76.35, rootCircle: 66.19, bossDiameter: 58, bossLength: 35, drill: 12.5 },
    { model: "#50", nt: 16, od: 89, pitchCircle: 81.37, rootCircle: 71.21, bossDiameter: 63, bossLength: 40, drill: 12.5 },
    { model: "#50", nt: 17, od: 94, pitchCircle: 86.39, rootCircle: 76.23, bossDiameter: 65, bossLength: 40, drill: 12.5 },
    { model: "#50", nt: 18, od: 100, pitchCircle: 91.42, rootCircle: 81.26, bossDiameter: 70, bossLength: 40, drill: 12.5 },
    { model: "#50", nt: 19, od: 105, pitchCircle: 96.45, rootCircle: 86.29, bossDiameter: 70, bossLength: 40, drill: 16.0 },
    { model: "#50", nt: 20, od: 110, pitchCircle: 101.48, rootCircle: 91.32, bossDiameter: 75, bossLength: 40, drill: 16.0 },
    { model: "#50", nt: 21, od: 115, pitchCircle: 106.51, rootCircle: 96.35, bossDiameter: 75, bossLength: 40, drill: 16.0 },
    { model: "#50", nt: 22, od: 120, pitchCircle: 111.55, rootCircle: 101.39, bossDiameter: 75, bossLength: 40, drill: 16.0 },
    { model: "#50", nt: 23, od: 125, pitchCircle: 116.59, rootCircle: 106.43, bossDiameter: 75, bossLength: 40, drill: 16.0 },
    { model: "#50", nt: 24, od: 130, pitchCircle: 121.62, rootCircle: 111.46, bossDiameter: 75, bossLength: 40, drill: 16.0 },
    { model: "#50", nt: 25, od: 135, pitchCircle: 126.66, rootCircle: 116.5, bossDiameter: 90, bossLength: 40, drill: 16.0 },
    { model: "#50", nt: 26, od: 140, pitchCircle: 131.7, rootCircle: 121.54, bossDiameter: 90, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 27, od: 145, pitchCircle: 136.74, rootCircle: 126.58, bossDiameter: 90, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 28, od: 150, pitchCircle: 141.79, rootCircle: 131.63, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 29, od: 155, pitchCircle: 146.83, rootCircle: 136.67, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 30, od: 161, pitchCircle: 151.87, rootCircle: 141.71, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 31, od: 166, pitchCircle: 156.92, rootCircle: 146.76, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 32, od: 171, pitchCircle: 161.96, rootCircle: 151.8, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 33, od: 176, pitchCircle: 167.01, rootCircle: 156.85, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 34, od: 181, pitchCircle: 172.05, rootCircle: 161.89, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 35, od: 186, pitchCircle: 177.1, rootCircle: 166.94, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 36, od: 191, pitchCircle: 182.15, rootCircle: 171.99, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 37, od: 196, pitchCircle: 187.19, rootCircle: 177.03, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 38, od: 201, pitchCircle: 192.24, rootCircle: 182.08, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 39, od: 206, pitchCircle: 197.29, rootCircle: 187.13, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 40, od: 211, pitchCircle: 202.33, rootCircle: 192.17, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 41, od: 216, pitchCircle: 207.38, rootCircle: 197.22, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 42, od: 221, pitchCircle: 212.43, rootCircle: 202.27, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 43, od: 226, pitchCircle: 217.48, rootCircle: 207.32, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 44, od: 231, pitchCircle: 222.53, rootCircle: 212.37, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 45, od: 237, pitchCircle: 227.58, rootCircle: 217.42, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 46, od: 242, pitchCircle: 232.63, rootCircle: 222.47, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 47, od: 247, pitchCircle: 237.68, rootCircle: 227.52, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 48, od: 252, pitchCircle: 242.73, rootCircle: 232.57, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 49, od: 257, pitchCircle: 247.78, rootCircle: 237.62, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 50, od: 262, pitchCircle: 252.82, rootCircle: 242.66, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 51, od: 267, pitchCircle: 257.87, rootCircle: 247.71, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 52, od: 272, pitchCircle: 262.92, rootCircle: 252.76, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 53, od: 277, pitchCircle: 267.97, rootCircle: 257.81, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 54, od: 282, pitchCircle: 273.03, rootCircle: 262.87, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 55, od: 287, pitchCircle: 278.08, rootCircle: 267.92, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 56, od: 292, pitchCircle: 283.13, rootCircle: 272.97, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 57, od: 297, pitchCircle: 288.18, rootCircle: 278.02, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 58, od: 302, pitchCircle: 293.23, rootCircle: 283.07, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 59, od: 307, pitchCircle: 298.28, rootCircle: 288.12, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 60, od: 312, pitchCircle: 303.33, rootCircle: 293.17, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 61, od: 317, pitchCircle: 308.38, rootCircle: 298.22, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 62, od: 323, pitchCircle: 313.43, rootCircle: 303.27, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 63, od: 328, pitchCircle: 318.48, rootCircle: 308.32, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 64, od: 333, pitchCircle: 323.53, rootCircle: 313.37, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 65, od: 338, pitchCircle: 328.58, rootCircle: 318.42, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 66, od: 343, pitchCircle: 333.64, rootCircle: 323.48, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 67, od: 348, pitchCircle: 338.69, rootCircle: 328.53, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 68, od: 353, pitchCircle: 343.74, rootCircle: 333.58, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 69, od: 358, pitchCircle: 348.79, rootCircle: 338.63, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 70, od: 363, pitchCircle: 353.84, rootCircle: 343.68, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 71, od: 368, pitchCircle: 358.89, rootCircle: 348.73, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 72, od: 373, pitchCircle: 363.94, rootCircle: 353.78, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 73, od: 378, pitchCircle: 369.0, rootCircle: 358.84, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 74, od: 383, pitchCircle: 374.05, rootCircle: 363.89, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 75, od: 388, pitchCircle: 379.1, rootCircle: 368.94, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 76, od: 393, pitchCircle: 384.15, rootCircle: 373.99, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 77, od: 398, pitchCircle: 389.2, rootCircle: 379.04, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 78, od: 403, pitchCircle: 394.25, rootCircle: 384.09, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 79, od: 409, pitchCircle: 399.31, rootCircle: 389.15, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 80, od: 414, pitchCircle: 404.36, rootCircle: 394.2, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 81, od: 419, pitchCircle: 409.41, rootCircle: 399.25, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 82, od: 424, pitchCircle: 414.46, rootCircle: 404.3, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 83, od: 429, pitchCircle: 419.51, rootCircle: 409.35, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 84, od: 434, pitchCircle: 424.57, rootCircle: 414.41, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 85, od: 439, pitchCircle: 429.62, rootCircle: 419.46, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 86, od: 444, pitchCircle: 434.67, rootCircle: 424.51, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 87, od: 449, pitchCircle: 439.72, rootCircle: 429.56, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 88, od: 454, pitchCircle: 444.77, rootCircle: 434.61, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 89, od: 459, pitchCircle: 449.83, rootCircle: 439.67, bossDiameter: 100, bossLength: 40, drill: 18.0 },
    { model: "#50", nt: 90, od: 464, pitchCircle: 454.88, rootCircle: 444.72, bossDiameter: 100, bossLength: 40, drill: 18.0 }
];

// [유지] 변환된 데이터를 전체 배열에 추가
allSprocketData.push(...RS50_DATA);