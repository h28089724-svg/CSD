// 파일 상단에 이 줄을 추가하여 기존 데이터들을 하나의 배열에 넣습니다.
if (typeof allRollerChainData === 'undefined') {
    var allRollerChainData = [];
}

const rawRollerChainData = [
    { model: "RS25-1", ansiNo: "25-1", isoNo: "04C-1", pitch: 6.35, innerWidth: 3.1, rollerDiameter: 3.3, plateThickness: 0.75, plateHeightH1: 6, plateHeightH2: 5.2, pinDiameter: 2.31 },
    { model: "RS35-1", ansiNo: "35-1", isoNo: "06C-1", pitch: 9.525, innerWidth: 4.68, rollerDiameter: 5.08, plateThickness: 1.25, plateHeightH1: 9, plateHeightH2: 7.8, pinDiameter: 3.59 },
    { model: "RS40-1", ansiNo: "40-1", isoNo: "08A-1", pitch: 12.7, innerWidth: 7.85, rollerDiameter: 7.92, plateThickness: 1.5, plateHeightH1: 12, plateHeightH2: 10.4, pinDiameter: 3.98 },
    { model: "RS50-1", ansiNo: "50-1", isoNo: "10A-1", pitch: 15.875, innerWidth: 9.4, rollerDiameter: 10.16, plateThickness: 2, plateHeightH1: 15, plateHeightH2: 13, pinDiameter: 5.09 },
    { model: "RS60-1", ansiNo: "60-1", isoNo: "12A-1", pitch: 19.05, innerWidth: 12.57, rollerDiameter: 11.91, plateThickness: 2.4, plateHeightH1: 18.1, plateHeightH2: 15.6, pinDiameter: 5.96 },
    { model: "RS80-1", ansiNo: "80-1", isoNo: "16A-1", pitch: 25.4, innerWidth: 15.75, rollerDiameter: 15.88, plateThickness: 3.2, plateHeightH1: 24.1, plateHeightH2: 20.8, pinDiameter: 7.94 },
    { model: "RS100-1", ansiNo: "100-1", isoNo: "20A-1", pitch: 31.75, innerWidth: 18.9, rollerDiameter: 19.05, plateThickness: 4, plateHeightH1: 30.1, plateHeightH2: 26, pinDiameter: 9.54 },
    { model: "RS120-1", ansiNo: "120-1", isoNo: "24A-1", pitch: 38.1, innerWidth: 25.22, rollerDiameter: 22.23, plateThickness: 4.8, plateHeightH1: 36.2, plateHeightH2: 31.2, pinDiameter: 11.11 },
    { model: "RS140-1", ansiNo: "140-1", isoNo: "28A-1", pitch: 44.45, innerWidth: 25.22, rollerDiameter: 25.4, plateThickness: 5.6, plateHeightH1: 42.2, plateHeightH2: 36.4, pinDiameter: 12.71 },
    { model: "RS160-1", ansiNo: "160-1", isoNo: "32A-1", pitch: 50.8, innerWidth: 31.55, rollerDiameter: 28.58, plateThickness: 6.4, plateHeightH1: 48.2, plateHeightH2: 41.6, pinDiameter: 14.29 },
    { model: "RS180-1", ansiNo: "180-1", isoNo: "-", pitch: 57.15, innerWidth: 35.48, rollerDiameter: 35.71, plateThickness: 7.1, plateHeightH1: 54.2, plateHeightH2: 46.8, pinDiameter: 17.46 },
    { model: "RS200-1", ansiNo: "200-1", isoNo: "40A-1", pitch: 63.5, innerWidth: 37.85, rollerDiameter: 39.68, plateThickness: 8, plateHeightH1: 60.3, plateHeightH2: 52, pinDiameter: 19.85 },
    { model: "RS240-1", ansiNo: "240-1", isoNo: "48A-1", pitch: 76.2, innerWidth: 47.35, rollerDiameter: 47.63, plateThickness: 9.5, plateHeightH1: 72.4, plateHeightH2: 62.4, pinDiameter: 23.81 },
    { model: "RS25-2", ansiNo: "25-2", isoNo: "04C-2", pitch: 6.35, innerWidth: 3.1, rollerDiameter: 3.3, plateThickness: 0.75, plateHeightH1: 6, plateHeightH2: 5.2, pinDiameter: 2.31 },
    { model: "RS35-2", ansiNo: "35-2", isoNo: "06C-2", pitch: 9.525, innerWidth: 4.68, rollerDiameter: 5.08, plateThickness: 1.25, plateHeightH1: 9, plateHeightH2: 7.8, pinDiameter: 3.59 },
    { model: "RS40-2", ansiNo: "40-2", isoNo: "08A-2", pitch: 12.7, innerWidth: 7.85, rollerDiameter: 7.92, plateThickness: 1.5, plateHeightH1: 12, plateHeightH2: 10.4, pinDiameter: 3.98 },
    { model: "RS50-2", ansiNo: "50-2", isoNo: "10A-2", pitch: 15.875, innerWidth: 9.4, rollerDiameter: 10.16, plateThickness: 2, plateHeightH1: 15, plateHeightH2: 13, pinDiameter: 5.09 },
    { model: "RS60-2", ansiNo: "60-2", isoNo: "12A-2", pitch: 19.05, innerWidth: 12.57, rollerDiameter: 11.91, plateThickness: 2.4, plateHeightH1: 18.1, plateHeightH2: 15.6, pinDiameter: 5.96 },
    { model: "RS80-2", ansiNo: "80-2", isoNo: "16A-2", pitch: 25.4, innerWidth: 15.75, rollerDiameter: 15.88, plateThickness: 3.2, plateHeightH1: 24.1, plateHeightH2: 20.8, pinDiameter: 7.94 },
    { model: "RS100-2", ansiNo: "100-2", isoNo: "20A-2", pitch: 31.75, innerWidth: 18.9, rollerDiameter: 19.05, plateThickness: 4, plateHeightH1: 30.1, plateHeightH2: 26, pinDiameter: 9.54 },
    { model: "RS120-2", ansiNo: "120-2", isoNo: "24A-2", pitch: 38.1, innerWidth: 25.22, rollerDiameter: 22.23, plateThickness: 4.8, plateHeightH1: 36.2, plateHeightH2: 31.2, pinDiameter: 11.11 },
    { model: "RS140-2", ansiNo: "140-2", isoNo: "28A-2", pitch: 44.45, innerWidth: 25.22, rollerDiameter: 25.4, plateThickness: 5.6, plateHeightH1: 42.2, plateHeightH2: 36.4, pinDiameter: 12.71 },
    { model: "RS160-2", ansiNo: "160-2", isoNo: "32A-2", pitch: 50.8, innerWidth: 31.55, rollerDiameter: 28.58, plateThickness: 6.4, plateHeightH1: 48.2, plateHeightH2: 41.6, pinDiameter: 14.29 },
    { model: "RS180-2", ansiNo: "180-2", isoNo: "-", pitch: 57.15, innerWidth: 35.48, rollerDiameter: 35.71, plateThickness: 7.1, plateHeightH1: 54.2, plateHeightH2: 46.8, pinDiameter: 17.46 },
    { model: "RS200-2", ansiNo: "200-2", isoNo: "40A-2", pitch: 63.5, innerWidth: 37.85, rollerDiameter: 39.68, plateThickness: 8, plateHeightH1: 60.3, plateHeightH2: 52, pinDiameter: 19.85 },
    { model: "RS240-2", ansiNo: "240-2", isoNo: "48A-2", pitch: 76.2, innerWidth: 47.35, rollerDiameter: 47.63, plateThickness: 9.5, plateHeightH1: 72.4, plateHeightH2: 62.4, pinDiameter: 23.81 },
    { model: "RS35-3", ansiNo: "35-3", isoNo: "06C-3", pitch: 9.525, innerWidth: 4.68, rollerDiameter: 5.08, plateThickness: 1.25, plateHeightH1: 9, plateHeightH2: 7.8, pinDiameter: 3.59 },
    { model: "RS40-3", ansiNo: "40-3", isoNo: "08A-3", pitch: 12.7, innerWidth: 7.85, rollerDiameter: 7.92, plateThickness: 1.5, plateHeightH1: 12, plateHeightH2: 10.4, pinDiameter: 3.98 },
    { model: "RS50-3", ansiNo: "50-3", isoNo: "10A-3", pitch: 15.875, innerWidth: 9.4, rollerDiameter: 10.16, plateThickness: 2, plateHeightH1: 15, plateHeightH2: 13, pinDiameter: 5.09 },
    { model: "RS60-3", ansiNo: "60-3", isoNo: "12A-3", pitch: 19.05, innerWidth: 12.57, rollerDiameter: 11.91, plateThickness: 2.4, plateHeightH1: 18.1, plateHeightH2: 15.6, pinDiameter: 5.96 },
    { model: "RS80-3", ansiNo: "80-3", isoNo: "16A-3", pitch: 25.4, innerWidth: 15.75, rollerDiameter: 15.88, plateThickness: 3.2, plateHeightH1: 24.1, plateHeightH2: 20.8, pinDiameter: 7.94 },
    { model: "RS100-3", ansiNo: "100-3", isoNo: "20A-3", pitch: 31.75, innerWidth: 18.9, rollerDiameter: 19.05, plateThickness: 4, plateHeightH1: 30.1, plateHeightH2: 26, pinDiameter: 9.54 },
    { model: "RS120-3", ansiNo: "120-3", isoNo: "24A-3", pitch: 38.1, innerWidth: 25.22, rollerDiameter: 22.23, plateThickness: 4.8, plateHeightH1: 36.2, plateHeightH2: 31.2, pinDiameter: 11.11 },
    { model: "RS140-3", ansiNo: "140-3", isoNo: "28A-3", pitch: 44.45, innerWidth: 25.22, rollerDiameter: 25.4, plateThickness: 5.6, plateHeightH1: 42.2, plateHeightH2: 36.4, pinDiameter: 12.71 },
    { model: "RS160-3", ansiNo: "160-3", isoNo: "32A-3", pitch: 50.8, innerWidth: 31.55, rollerDiameter: 28.58, plateThickness: 6.4, plateHeightH1: 48.2, plateHeightH2: 41.6, pinDiameter: 14.29 },
    { model: "RS180-3", ansiNo: "180-3", isoNo: "-", pitch: 57.15, innerWidth: 35.48, rollerDiameter: 35.71, plateThickness: 7.1, plateHeightH1: 54.2, plateHeightH2: 46.8, pinDiameter: 17.46 },
    { model: "RS200-3", ansiNo: "200-3", isoNo: "40A-3", pitch: 63.5, innerWidth: 37.85, rollerDiameter: 39.68, plateThickness: 8, plateHeightH1: 60.3, plateHeightH2: 52, pinDiameter: 19.85 },
    { model: "RS240-3", ansiNo: "240-3", isoNo: "48A-3", pitch: 76.2, innerWidth: 47.35, rollerDiameter: 47.63, plateThickness: 9.5, plateHeightH1: 72.4, plateHeightH2: 62.4, pinDiameter: 23.81 },
];

/**
 * CSV 데이터를 화면 검색/표시용 roller chain 데이터 형식으로 변환
 * model 값은 RS25-1, RS35-2 같은 형식으로 통일
 */
const rollerChainData = rawRollerChainData.map(item => {
    return {
        ...item
    };
});

// 검색 페이지에서 바로 사용할 수 있도록 전체 데이터 배열에 누적
allRollerChainData = allRollerChainData.concat(rollerChainData);
