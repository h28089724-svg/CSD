// 파일 상단에 이 줄을 추가하여 기존 데이터들을 하나의 배열에 넣습니다.
if (typeof allSprocketData === 'undefined') {
    var allSprocketData = [];
}
const RS180_DATA = [
      
    // #160 시리즈
    { model: "#180", nt: 10, od: 138, pitchCircle: 123.3, rootCircle: 101.07, bossDiameter: 92, bossLength: 56 }

];

// [수정] 변환된 데이터를 전체 배열에 추가
allSprocketData.push(...RS180_DATA);