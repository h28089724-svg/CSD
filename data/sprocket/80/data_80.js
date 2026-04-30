/**
 * [수정] #80 전체 데이터 파일
 * [수정] 사용자가 제공한 CSV 원본 기준으로 10T ~ 90T 전체 반영
 * [수정] model 값을 "#80" 형식으로 통일
 * [유지] 검색 페이지에서 바로 사용할 수 있도록 allSprocketData에 추가
 */

// [유지] 전역 데이터 배열 확인 및 초기화
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}

// [수정] #80 전체 규격 데이터
const RS80_DATA = [
    { model: "#80", nt: 10, od: 93, pitchCircle: 82.2, rootCircle: 66.32, bossDiameter: 55, bossLength: 50, drill: 16 },
    { model: "#80", nt: 11, od: 102, pitchCircle: 90.16, rootCircle: 74.28, bossDiameter: 60, bossLength: 50, drill: 16 },
    { model: "#80", nt: 12, od: 110, pitchCircle: 98.14, rootCircle: 82.26, bossDiameter: 69, bossLength: 50, drill: 19 },
    { model: "#80", nt: 13, od: 118, pitchCircle: 106.14, rootCircle: 90.26, bossDiameter: 77, bossLength: 50, drill: 19 },
    { model: "#80", nt: 14, od: 127, pitchCircle: 114.15, rootCircle: 98.27, bossDiameter: 80, bossLength: 50, drill: 19 },
    { model: "#80", nt: 15, od: 135, pitchCircle: 122.17, rootCircle: 106.29, bossDiameter: 90, bossLength: 50, drill: 19 },
    { model: "#80", nt: 16, od: 143, pitchCircle: 130.2, rootCircle: 114.32, bossDiameter: 90, bossLength: 50, drill: 19 },
    { model: "#80", nt: 17, od: 151, pitchCircle: 138.23, rootCircle: 122.35, bossDiameter: 95, bossLength: 50, drill: 19 },
    { model: "#80", nt: 18, od: 159, pitchCircle: 146.27, rootCircle: 130.39, bossDiameter: 95, bossLength: 50, drill: 19 },
    { model: "#80", nt: 19, od: 167, pitchCircle: 154.32, rootCircle: 138.44, bossDiameter: 95, bossLength: 50, drill: 23 },
    { model: "#80", nt: 20, od: 176, pitchCircle: 162.37, rootCircle: 146.49, bossDiameter: 110, bossLength: 50, drill: 23 },
    { model: "#80", nt: 21, od: 184, pitchCircle: 170.42, rootCircle: 154.54, bossDiameter: 110, bossLength: 50, drill: 23 },
    { model: "#80", nt: 22, od: 192, pitchCircle: 178.48, rootCircle: 162.6, bossDiameter: 110, bossLength: 50, drill: 28 },
    { model: "#80", nt: 23, od: 200, pitchCircle: 186.54, rootCircle: 170.66, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 24, od: 208, pitchCircle: 194.6, rootCircle: 178.72, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 25, od: 216, pitchCircle: 202.66, rootCircle: 186.78, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 26, od: 224, pitchCircle: 210.72, rootCircle: 194.84, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 27, od: 232, pitchCircle: 218.79, rootCircle: 202.91, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 28, od: 241, pitchCircle: 226.86, rootCircle: 210.98, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 29, od: 249, pitchCircle: 234.92, rootCircle: 219.04, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 30, od: 257, pitchCircle: 242.99, rootCircle: 227.11, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 31, od: 265, pitchCircle: 251.06, rootCircle: 235.18, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 32, od: 273, pitchCircle: 259.13, rootCircle: 243.25, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 33, od: 281, pitchCircle: 267.2, rootCircle: 251.32, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 34, od: 289, pitchCircle: 275.27, rootCircle: 259.39, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 35, od: 297, pitchCircle: 283.34, rootCircle: 267.46, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 36, od: 305, pitchCircle: 291.41, rootCircle: 275.53, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 37, od: 313, pitchCircle: 299.48, rootCircle: 283.6, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 38, od: 322, pitchCircle: 307.55, rootCircle: 291.67, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 39, od: 330, pitchCircle: 315.62, rootCircle: 299.74, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 40, od: 338, pitchCircle: 323.69, rootCircle: 307.81, bossDiameter: 127, bossLength: 50, drill: 28 },
    { model: "#80", nt: 41, od: 346, pitchCircle: 331.76, rootCircle: 315.88, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 42, od: 354, pitchCircle: 339.83, rootCircle: 323.95, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 43, od: 362, pitchCircle: 347.9, rootCircle: 332.02, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 44, od: 370, pitchCircle: 355.97, rootCircle: 340.09, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 45, od: 378, pitchCircle: 364.04, rootCircle: 348.16, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 46, od: 386, pitchCircle: 372.12, rootCircle: 356.24, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 47, od: 394, pitchCircle: 380.19, rootCircle: 364.31, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 48, od: 403, pitchCircle: 388.26, rootCircle: 372.38, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 49, od: 411, pitchCircle: 396.33, rootCircle: 380.45, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 50, od: 419, pitchCircle: 404.41, rootCircle: 388.53, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 51, od: 427, pitchCircle: 412.48, rootCircle: 396.6, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 52, od: 435, pitchCircle: 420.55, rootCircle: 404.67, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 53, od: 443, pitchCircle: 428.63, rootCircle: 412.75, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 54, od: 451, pitchCircle: 436.7, rootCircle: 420.82, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 55, od: 459, pitchCircle: 444.77, rootCircle: 428.89, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 56, od: 467, pitchCircle: 452.85, rootCircle: 436.97, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 57, od: 475, pitchCircle: 460.92, rootCircle: 445.04, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 58, od: 483, pitchCircle: 469, rootCircle: 453.12, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 59, od: 492, pitchCircle: 477.07, rootCircle: 461.19, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 60, od: 500, pitchCircle: 485.14, rootCircle: 469.26, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 61, od: 508, pitchCircle: 493.22, rootCircle: 477.34, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 62, od: 516, pitchCircle: 501.29, rootCircle: 485.41, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 63, od: 524, pitchCircle: 509.37, rootCircle: 493.49, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 64, od: 532, pitchCircle: 517.44, rootCircle: 501.56, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 65, od: 540, pitchCircle: 525.52, rootCircle: 509.64, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 66, od: 548, pitchCircle: 533.59, rootCircle: 517.71, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 67, od: 556, pitchCircle: 541.67, rootCircle: 525.79, bossDiameter: 137, bossLength: 50, drill: 28 },
    { model: "#80", nt: 68, od: 564, pitchCircle: 549.75, rootCircle: 533.87, bossDiameter: 137, bossLength: 60, drill: 28 },
    { model: "#80", nt: 69, od: 572, pitchCircle: 557.82, rootCircle: 541.94, bossDiameter: 137, bossLength: 60, drill: 28 },
    { model: "#80", nt: 70, od: 580, pitchCircle: 565.9, rootCircle: 550.02, bossDiameter: 137, bossLength: 60, drill: 28 },
    { model: "#80", nt: 71, od: 589, pitchCircle: 573.97, rootCircle: 558.09, bossDiameter: 137, bossLength: 60, drill: 28 },
    { model: "#80", nt: 72, od: 597, pitchCircle: 582.05, rootCircle: 566.17, bossDiameter: 137, bossLength: 60, drill: 28 },
    { model: "#80", nt: 73, od: 605, pitchCircle: 590.13, rootCircle: 574.25, bossDiameter: 137, bossLength: 60, drill: 28 },
    { model: "#80", nt: 74, od: 613, pitchCircle: 598.2, rootCircle: 582.32, bossDiameter: 137, bossLength: 60, drill: 28 },
    { model: "#80", nt: 75, od: 621, pitchCircle: 606.28, rootCircle: 590.4, bossDiameter: 157, bossLength: 60, drill: 28 },
    { model: "#80", nt: 76, od: 629, pitchCircle: 614.36, rootCircle: 598.48, bossDiameter: 157, bossLength: 60, drill: 28 },
    { model: "#80", nt: 77, od: 637, pitchCircle: 622.43, rootCircle: 606.55, bossDiameter: 157, bossLength: 60, drill: 28 },
    { model: "#80", nt: 78, od: 645, pitchCircle: 630.51, rootCircle: 614.63, bossDiameter: 157, bossLength: 60, drill: 28 },
    { model: "#80", nt: 79, od: 653, pitchCircle: 638.59, rootCircle: 622.71, bossDiameter: 157, bossLength: 60, drill: 28 },
    { model: "#80", nt: 80, od: 661, pitchCircle: 646.67, rootCircle: 630.79, bossDiameter: 157, bossLength: 60, drill: 28 }

];

// [유지] 변환된 데이터를 전체 배열에 추가
allSprocketData.push(...RS80_DATA);