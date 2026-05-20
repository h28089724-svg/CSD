// hollow pin chain data
// chain_sub-hollow.html 검색 페이지에서 안정적으로 읽을 수 있도록 window 전역에 직접 등록합니다.
(function () {
    const rawHollowPinChainData = [
        { model: "40HP", pitch: 12.7, bushDiameter: 7.92, linkInnerWidth: 7.95, linkPlateThickness: 1.5, pinOuterDiameter: 5.68, pinInnerDiameter: 4, pinLengthA: 17.5 },
        { model: "50HP", pitch: 15.88, bushDiameter: 10.16, linkInnerWidth: 9.53, linkPlateThickness: 2, pinOuterDiameter: 7.22, pinInnerDiameter: 5.12, pinLengthA: 21.7 },
        { model: "60HP", pitch: 19.05, bushDiameter: 11.9, linkInnerWidth: 12.7, linkPlateThickness: 2.4, pinOuterDiameter: 8.4, pinInnerDiameter: 5.99, pinLengthA: 26.8 },
        { model: "80HP", pitch: 25.4, bushDiameter: 15.9, linkInnerWidth: 15.9, linkPlateThickness: 3.2, pinOuterDiameter: 11.4, pinInnerDiameter: 8, pinLengthA: 34.1 }
    ];

    const hollowPinChainData = rawHollowPinChainData.map(item => {
        const modelDir = String(item.model);
        const fileNameBase = String(item.model);

        return {
            ...item,
            files: {
                pdf: `../../../data/chain/hollow_pin_chain/${modelDir}/${fileNameBase}.pdf`,
                dwg: `../../../data/chain/hollow_pin_chain/${modelDir}/${fileNameBase}.dwg`,
                dxf: `../../../data/chain/hollow_pin_chain/${modelDir}/${fileNameBase}.dxf`
            }
        };
    });

    window.rawHollowPinChainData = rawHollowPinChainData;
    window.hollowPinChainData = hollowPinChainData;

    if (!Array.isArray(window.allHollowPinChainData)) {
        window.allHollowPinChainData = [];
    }

    window.allHollowPinChainData = window.allHollowPinChainData.concat(hollowPinChainData);
})();
