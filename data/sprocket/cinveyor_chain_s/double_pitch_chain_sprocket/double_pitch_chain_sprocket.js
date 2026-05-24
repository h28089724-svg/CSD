// double_pitch_chain_sprocket.js
// Double pitch chain sprocket data converted from the uploaded PDF table.
(function () {
    if (typeof allSprocketData === 'undefined') {
        window.allSprocketData = [];
    }

    const rawSprocketData = [
        { model: "RF2040R-10T", chain: "RF2040R", pitch: 25.4, nt: 10, pitchCircle: 82.2, thickness: 7.3, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2040R-11T", chain: "RF2040R", pitch: 25.4, nt: 11, pitchCircle: 90.16, thickness: 7.3, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2040R-12T", chain: "RF2040R", pitch: 25.4, nt: 12, pitchCircle: 98.14, thickness: 7.3, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2040R-13T", chain: "RF2040R", pitch: 25.4, nt: 13, pitchCircle: 106.14, thickness: 7.3, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2040R-14T", chain: "RF2040R", pitch: 25.4, nt: 14, pitchCircle: 114.15, thickness: 7.3, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2040R-15T", chain: "RF2040R", pitch: 25.4, nt: 15, pitchCircle: 122.17, thickness: 7.3, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2040R-16T", chain: "RF2040R", pitch: 25.4, nt: 16, pitchCircle: 130.2, thickness: 7.3, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2050R-10T", chain: "RF2050R", pitch: 31.75, nt: 10, pitchCircle: 102.75, thickness: 8.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2050R-11T", chain: "RF2050R", pitch: 31.75, nt: 11, pitchCircle: 112.7, thickness: 8.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2050R-12T", chain: "RF2050R", pitch: 31.75, nt: 12, pitchCircle: 122.67, thickness: 8.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2050R-13T", chain: "RF2050R", pitch: 31.75, nt: 13, pitchCircle: 132.67, thickness: 8.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2050R-14T", chain: "RF2050R", pitch: 31.75, nt: 14, pitchCircle: 142.68, thickness: 8.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2050R-15T", chain: "RF2050R", pitch: 31.75, nt: 15, pitchCircle: 152.71, thickness: 8.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2050R-16T", chain: "RF2050R", pitch: 31.75, nt: 16, pitchCircle: 162.75, thickness: 8.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2060R-10T", chain: "RF2060R", pitch: 38.1, nt: 10, pitchCircle: 123.29, thickness: 11.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2060R-11T", chain: "RF2060R", pitch: 38.1, nt: 11, pitchCircle: 135.23, thickness: 11.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2060R-12T", chain: "RF2060R", pitch: 38.1, nt: 12, pitchCircle: 147.21, thickness: 11.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2060R-13T", chain: "RF2060R", pitch: 38.1, nt: 13, pitchCircle: 159.2, thickness: 11.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2060R-14T", chain: "RF2060R", pitch: 38.1, nt: 14, pitchCircle: 171.22, thickness: 11.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2060R-15T", chain: "RF2060R", pitch: 38.1, nt: 15, pitchCircle: 183.25, thickness: 11.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2060R-16T", chain: "RF2060R", pitch: 38.1, nt: 16, pitchCircle: 195.29, thickness: 11.9, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2080R-10T", chain: "RF2080R", pitch: 50.8, nt: 10, pitchCircle: 164.29, thickness: 15, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2080R-11T", chain: "RF2080R", pitch: 50.8, nt: 11, pitchCircle: 180.31, thickness: 15, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2080R-12T", chain: "RF2080R", pitch: 50.8, nt: 12, pitchCircle: 195.28, thickness: 15, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2080R-13T", chain: "RF2080R", pitch: 50.8, nt: 13, pitchCircle: 212.27, thickness: 15, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2080R-14T", chain: "RF2080R", pitch: 50.8, nt: 14, pitchCircle: 228.29, thickness: 15, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2080R-15T", chain: "RF2080R", pitch: 50.8, nt: 15, pitchCircle: 244.33, thickness: 15, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 },
        { model: "RF2080R-16T", chain: "RF2080R", pitch: 50.8, nt: 16, pitchCircle: 260.39, thickness: 15, od: 0, rootCircle: 0, bossDiameter: 0, bossLength: 0, drill: 0 }
    ];

    const sprocketData = rawSprocketData.map(item => {
        const modelDir = String(item.chain || item.model).replace('#', '');
        const fileNameBase = String(item.model).replace('#', '');

        return {
            ...item,
            files: {
                pdf: `./data/sprocket/${modelDir}/${fileNameBase}.pdf`,
                dwg: `./data/sprocket/${modelDir}/${fileNameBase}.dwg`,
                dxf: `./data/sprocket/${modelDir}/${fileNameBase}.dxf`
            }
        };
    });

    allSprocketData = allSprocketData.concat(sprocketData);
})();
