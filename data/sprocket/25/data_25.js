// 파일 상단에 이 줄을 추가하여 기존 데이터들을 하나의 배열에 넣습니다.
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}

const rawSprocketData = [
    // [수정] 화면 표시용 model 값을 #25 형식으로 통일
    { model: "#25", nt: 10, od: 24, pitchCircle: 20.55, rootCircle: 17.25, bossDiameter: 14, bossLength: 15, drill: 5 },
    { model: "#25", nt: 11, od: 25, pitchCircle: 22.54, rootCircle: 19.24, bossDiameter: 15, bossLength: 15, drill: 5 },
    { model: "#25", nt: 12, od: 28, pitchCircle: 24.53, rootCircle: 21.23, bossDiameter: 15, bossLength: 15, drill: 5 },
    { model: "#25", nt: 13, od: 30, pitchCircle: 26.53, rootCircle: 23.23, bossDiameter: 20, bossLength: 15, drill: 8 },
    { model: "#25", nt: 14, od: 32, pitchCircle: 28.54, rootCircle: 25.24, bossDiameter: 20, bossLength: 15, drill: 8 },
    { model: "#25", nt: 15, od: 34, pitchCircle: 30.54, rootCircle: 27.24, bossDiameter: 20, bossLength: 15, drill: 8 },
    { model: "#25", nt: 16, od: 36, pitchCircle: 32.55, rootCircle: 29.25, bossDiameter: 25, bossLength: 15, drill: 8 },
    { model: "#25", nt: 17, od: 38, pitchCircle: 34.56, rootCircle: 31.26, bossDiameter: 25, bossLength: 15, drill: 9 },
    { model: "#25", nt: 18, od: 40, pitchCircle: 36.57, rootCircle: 33.27, bossDiameter: 25, bossLength: 15, drill: 9 },
    { model: "#25", nt: 19, od: 42, pitchCircle: 38.58, rootCircle: 35.28, bossDiameter: 28, bossLength: 15, drill: 9 },
    { model: "#25", nt: 20, od: 44, pitchCircle: 40.59, rootCircle: 37.29, bossDiameter: 28, bossLength: 15, drill: 9 },
    { model: "#25", nt: 21, od: 46, pitchCircle: 42.61, rootCircle: 39.31, bossDiameter: 28, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 22, od: 48, pitchCircle: 44.62, rootCircle: 41.32, bossDiameter: 30, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 23, od: 50, pitchCircle: 46.63, rootCircle: 43.33, bossDiameter: 30, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 24, od: 52, pitchCircle: 48.65, rootCircle: 45.35, bossDiameter: 30, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 25, od: 54, pitchCircle: 50.66, rootCircle: 47.36, bossDiameter: 35, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 26, od: 56, pitchCircle: 52.68, rootCircle: 49.38, bossDiameter: 35, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 27, od: 58, pitchCircle: 54.7, rootCircle: 51.4, bossDiameter: 35, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 28, od: 60, pitchCircle: 56.71, rootCircle: 53.41, bossDiameter: 35, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 29, od: 62, pitchCircle: 58.73, rootCircle: 55.43, bossDiameter: 35, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 30, od: 64, pitchCircle: 60.75, rootCircle: 57.45, bossDiameter: 35, bossLength: 15, drill: 9.5 },
    { model: "#25", nt: 31, od: 66, pitchCircle: 62.77, rootCircle: 59.47, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 32, od: 68, pitchCircle: 64.78, rootCircle: 61.48, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 33, od: 70, pitchCircle: 66.8, rootCircle: 63.5, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 34, od: 72, pitchCircle: 68.82, rootCircle: 65.52, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 35, od: 74, pitchCircle: 70.84, rootCircle: 67.54, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 36, od: 76, pitchCircle: 72.86, rootCircle: 69.56, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 37, od: 78, pitchCircle: 74.88, rootCircle: 71.58, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 38, od: 80, pitchCircle: 76.9, rootCircle: 73.6, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 39, od: 82, pitchCircle: 78.91, rootCircle: 75.61, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 40, od: 84, pitchCircle: 80.93, rootCircle: 77.63, bossDiameter: 40, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 41, od: 87, pitchCircle: 82.95, rootCircle: 79.65, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 42, od: 89, pitchCircle: 84.97, rootCircle: 81.67, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 43, od: 91, pitchCircle: 86.99, rootCircle: 83.69, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 44, od: 93, pitchCircle: 89.01, rootCircle: 85.71, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 45, od: 95, pitchCircle: 91.03, rootCircle: 87.73, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 46, od: 97, pitchCircle: 93.05, rootCircle: 89.75, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 47, od: 99, pitchCircle: 95.07, rootCircle: 91.77, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 48, od: 101, pitchCircle: 97.09, rootCircle: 93.79, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 49, od: 103, pitchCircle: 99.11, rootCircle: 95.81, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 50, od: 105, pitchCircle: 101.13, rootCircle: 97.83, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 51, od: 107, pitchCircle: 103.15, rootCircle: 99.85, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 52, od: 109, pitchCircle: 105.17, rootCircle: 101.87, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 53, od: 111, pitchCircle: 107.19, rootCircle: 103.89, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 54, od: 113, pitchCircle: 109.21, rootCircle: 105.91, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 55, od: 115, pitchCircle: 111.23, rootCircle: 107.93, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 56, od: 117, pitchCircle: 113.25, rootCircle: 109.95, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 57, od: 119, pitchCircle: 115.27, rootCircle: 111.97, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 58, od: 121, pitchCircle: 117.29, rootCircle: 113.99, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 59, od: 123, pitchCircle: 119.31, rootCircle: 116.01, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 60, od: 125, pitchCircle: 121.33, rootCircle: 118.03, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 61, od: 127, pitchCircle: 123.35, rootCircle: 120.05, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 62, od: 129, pitchCircle: 125.37, rootCircle: 122.07, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 63, od: 131, pitchCircle: 127.39, rootCircle: 124.09, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 64, od: 133, pitchCircle: 129.41, rootCircle: 126.11, bossDiameter: 50, bossLength: 20, drill: 9.5 },
    { model: "#25", nt: 65, od: 135, pitchCircle: 131.43, rootCircle: 128.13, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 66, od: 137, pitchCircle: 133.45, rootCircle: 130.15, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 67, od: 139, pitchCircle: 135.47, rootCircle: 132.17, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 68, od: 141, pitchCircle: 137.5, rootCircle: 134.2, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 69, od: 143, pitchCircle: 139.52, rootCircle: 136.22, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 70, od: 145, pitchCircle: 141.54, rootCircle: 138.24, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 71, od: 147, pitchCircle: 143.56, rootCircle: 140.26, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 72, od: 149, pitchCircle: 145.58, rootCircle: 142.28, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 73, od: 151, pitchCircle: 147.6, rootCircle: 144.3, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 74, od: 153, pitchCircle: 149.62, rootCircle: 146.32, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 75, od: 155, pitchCircle: 151.64, rootCircle: 148.34, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 76, od: 157, pitchCircle: 153.66, rootCircle: 150.36, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 77, od: 159, pitchCircle: 155.68, rootCircle: 152.38, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 78, od: 161, pitchCircle: 157.7, rootCircle: 154.4, bossDiameter: 50, bossLength: 90, drill: 9.5 },
    { model: "#25", nt: 79, od: 163, pitchCircle: 159.72, rootCircle: 156.42, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 80, od: 165, pitchCircle: 161.74, rootCircle: 158.44, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 81, od: 167, pitchCircle: 165.78, rootCircle: 160.46, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 82, od: 169, pitchCircle: 163.76, rootCircle: 162.48, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 83, od: 171, pitchCircle: 167.81, rootCircle: 164.51, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 84, od: 174, pitchCircle: 169.83, rootCircle: 166.53, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 85, od: 176, pitchCircle: 171.85, rootCircle: 168.55, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 86, od: 178, pitchCircle: 173.87, rootCircle: 170.57, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 87, od: 180, pitchCircle: 175.89, rootCircle: 172.59, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 88, od: 182, pitchCircle: 177.91, rootCircle: 174.61, bossDiameter: 50, bossLength: 30, drill: 9.5 },
    { model: "#25", nt: 90, od: 186, pitchCircle: 181.95, rootCircle: 178.65, bossDiameter: 50, bossLength: 30, drill: 9.5 }
];

/**
 * [수정] 실제 파일 위치도 C:\CSD\data\sprocket\25\... 구조에 맞춤
 * [수정] 경로 예시: ./data/sprocket/25/25_10NT.pdf
 */
const sprocketData = rawSprocketData.map(item => {
    const modelDir = String(item.model).replace('#', ''); // [수정] 실제 폴더명은 25
    const fileNameBase = `${String(item.model).replace('#', '')}_${item.nt}NT`; // [수정] 실제 파일명은 25_10NT

    return {
        ...item,
        files: {
            pdf: `./data/sprocket/${modelDir}/${fileNameBase}.pdf`,
            dwg: `./data/sprocket/${modelDir}/${fileNameBase}.dwg`,
            dxf: `./data/sprocket/${modelDir}/${fileNameBase}.dxf`
        }
    };
});

// [추가] 검색 페이지에서 바로 사용할 수 있도록 전체 데이터 배열에 누적
allSprocketData = allSprocketData.concat(sprocketData);