// 파일 상단에 이 줄을 추가하여 기존 데이터들을 하나의 배열에 넣습니다.
if (typeof allRollerChainData === 'undefined') {
    var allRollerChainData = [];
}

const rawRollerChainData = [
    { model: "06B-1", ansiNo: "25-1", isoNo: "04C-1", pitch: 6.35, innerWidth: 3.1, rollerDiameter: 3.3, plateThickness: 0.75, plateHeightH1: 6, plateHeightH2: 5.2, pinDiameter: 2.31 },
    { model: "08B-1", ansiNo: "35-1", isoNo: "06C-1", pitch: 9.525, innerWidth: 4.68, rollerDiameter: 5.08, plateThickness: 1.25, plateHeightH1: 9, plateHeightH2: 7.8, pinDiameter: 3.59 },
    { model: "10B-1", ansiNo: "40-1", isoNo: "08A-1", pitch: 12.7, innerWidth: 7.85, rollerDiameter: 7.92, plateThickness: 1.5, plateHeightH1: 12, plateHeightH2: 10.4, pinDiameter: 3.98 },
    { model: "12B-1", ansiNo: "50-1", isoNo: "10A-1", pitch: 15.875, innerWidth: 9.4, rollerDiameter: 10.16, plateThickness: 2, plateHeightH1: 15, plateHeightH2: 13, pinDiameter: 5.09 },
    { model: "16B-1", ansiNo: "60-1", isoNo: "12A-1", pitch: 19.05, innerWidth: 12.57, rollerDiameter: 11.91, plateThickness: 2.4, plateHeightH1: 18.1, plateHeightH2: 15.6, pinDiameter: 5.96 },
    { model: "20B-1", ansiNo: "80-1", isoNo: "16A-1", pitch: 25.4, innerWidth: 15.75, rollerDiameter: 15.88, plateThickness: 3.2, plateHeightH1: 24.1, plateHeightH2: 20.8, pinDiameter: 7.94 },
    { model: "24B-1", ansiNo: "100-1", isoNo: "20A-1", pitch: 31.75, innerWidth: 18.9, rollerDiameter: 19.05, plateThickness: 4, plateHeightH1: 30.1, plateHeightH2: 26, pinDiameter: 9.54 },
    { model: "28B-1", ansiNo: "120-1", isoNo: "24A-1", pitch: 38.1, innerWidth: 25.22, rollerDiameter: 22.23, plateThickness: 4.8, plateHeightH1: 36.2, plateHeightH2: 31.2, pinDiameter: 11.11 },
    { model: "32B-1", ansiNo: "140-1", isoNo: "28A-1", pitch: 44.45, innerWidth: 25.22, rollerDiameter: 25.4, plateThickness: 5.6, plateHeightH1: 42.2, plateHeightH2: 36.4, pinDiameter: 12.71 },
    { model: "32B-1", ansiNo: "160-1", isoNo: "32A-1", pitch: 50.8, innerWidth: 31.55, rollerDiameter: 28.58, plateThickness: 6.4, plateHeightH1: 48.2, plateHeightH2: 41.6, pinDiameter: 14.29 },
    { model: "40b-1", ansiNo: "180-1", isoNo: "-", pitch: 57.15, innerWidth: 35.48, rollerDiameter: 35.71, plateThickness: 7.1, plateHeightH1: 54.2, plateHeightH2: 46.8, pinDiameter: 17.46 },
 
    

    { model: "06B-2", ansiNo: "25-2", isoNo: "04C-2", pitch: 6.35, innerWidth: 3.1, rollerDiameter: 3.3, plateThickness: 0.75, plateHeightH1: 6, plateHeightH2: 5.2, pinDiameter: 2.31 },
    { model: "08B-2", ansiNo: "35-2", isoNo: "06C-2", pitch: 9.525, innerWidth: 4.68, rollerDiameter: 5.08, plateThickness: 1.25, plateHeightH1: 9, plateHeightH2: 7.8, pinDiameter: 3.59 },
    { model: "10B-2", ansiNo: "40-2", isoNo: "08A-2", pitch: 12.7, innerWidth: 7.85, rollerDiameter: 7.92, plateThickness: 1.5, plateHeightH1: 12, plateHeightH2: 10.4, pinDiameter: 3.98 },
    { model: "12B-2", ansiNo: "50-2", isoNo: "10A-2", pitch: 15.875, innerWidth: 9.4, rollerDiameter: 10.16, plateThickness: 2, plateHeightH1: 15, plateHeightH2: 13, pinDiameter: 5.09 },
    { model: "16B-2", ansiNo: "60-2", isoNo: "12A-2", pitch: 19.05, innerWidth: 12.57, rollerDiameter: 11.91, plateThickness: 2.4, plateHeightH1: 18.1, plateHeightH2: 15.6, pinDiameter: 5.96 },
    { model: "20B-2", ansiNo: "80-2", isoNo: "16A-2", pitch: 25.4, innerWidth: 15.75, rollerDiameter: 15.88, plateThickness: 3.2, plateHeightH1: 24.1, plateHeightH2: 20.8, pinDiameter: 7.94 },
    { model: "24B-2", ansiNo: "100-2", isoNo: "20A-2", pitch: 31.75, innerWidth: 18.9, rollerDiameter: 19.05, plateThickness: 4, plateHeightH1: 30.1, plateHeightH2: 26, pinDiameter: 9.54 },
    { model: "28B-2", ansiNo: "120-2", isoNo: "24A-2", pitch: 38.1, innerWidth: 25.22, rollerDiameter: 22.23, plateThickness: 4.8, plateHeightH1: 36.2, plateHeightH2: 31.2, pinDiameter: 11.11 },
    { model: "32B-2", ansiNo: "140-2", isoNo: "28A-2", pitch: 44.45, innerWidth: 25.22, rollerDiameter: 25.4, plateThickness: 5.6, plateHeightH1: 42.2, plateHeightH2: 36.4, pinDiameter: 12.71 },
    { model: "32B-2", ansiNo: "160-2", isoNo: "32A-2", pitch: 50.8, innerWidth: 31.55, rollerDiameter: 28.58, plateThickness: 6.4, plateHeightH1: 48.2, plateHeightH2: 41.6, pinDiameter: 14.29 },
    { model: "40b-2", ansiNo: "180-2", isoNo: "-", pitch: 57.15, innerWidth: 35.48, rollerDiameter: 35.71, plateThickness: 7.1, plateHeightH1: 54.2, plateHeightH2: 46.8, pinDiameter: 17.46 },
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
