const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json()); /*서버가 preview.html을 웹으로 내보내도록 아직 설정*/
app.use(express.static(__dirname));


const PORT = process.env.PORT || 3000;
const ACCESS_CODE = process.env.DWG_ACCESS_CODE || '1234';

// DWG 다운로드 API
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'preview.html')));
app.get('/preview.html', (req, res) => res.sendFile(path.join(__dirname, 'preview.html')));
app.post('/api/dwg-download', (req, res) => {
    const { code, filePath } = req.body;

    // 1. 인증코드 체크
    if (code !== ACCESS_CODE) {
        return res.status(403).json({ message: '인증코드 오류' });
    }

    // 2. 경로 보안 체크
    if (!filePath || filePath.includes('..')) {
        return res.status(400).json({ message: '잘못된 경로' });
    }

    // 3. 확장자 체크
    if (!filePath.endsWith('.dwg')) {
        return res.status(400).json({ message: 'DWG 파일만 허용' });
    }

    // 4. 실제 파일 경로
    const baseDir = path.join(__dirname, 'secure-download', 'dwg');
    const fullPath = path.join(baseDir, filePath);

    // 5. 파일 존재 확인
    if (!fs.existsSync(fullPath)) {
        return res.status(404).json({ message: '파일 없음' });
    }

    // 6. 다운로드
    res.download(fullPath);
});

app.listen(PORT, () => {
    console.log(`서버 실행됨: http://localhost:${PORT}`);
});