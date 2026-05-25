# chain_sub-iso-a(12).html 간격 조정 위치 정리

대상 파일: `chain_sub-iso-a(12).html`

요청 조건:
- 상단 헤더/제목 영역은 그대로 둡니다.
- 글자 크기는 변경하지 않고, 높이·상하 간격·패딩·마진 중심으로 조정합니다.
- 수정한 HTML 파일에는 각 수정 위치에 직접 코멘트를 넣었습니다.

---

## 1. 상단 헤더/제목 영역

이번 요청에서는 **수정하지 않는 부분**입니다.

관련 CSS:

```css
.header { ... }
.logo { ... }
.menu-btn { ... }
.header-mode-link { ... }
```

설명:  
상단 전체 높이, 제목 박스, 메뉴 버튼, 이전 메뉴 버튼은 그대로 둡니다.  
검색 영역 간격만 조정하려면 이 부분은 건드리지 않는 것이 좋습니다.

---

## 2. 헤더 아래와 검색 카드 위쪽 사이 간격

수정 위치:

```css
.container {
    padding-top: 18px;
}
```

설명:  
상단 헤더 아래에서 검색 조건 카드가 시작되기 전까지의 여백입니다.  
검색 박스를 더 위로 올리려면 `padding-top`을 줄이면 됩니다.

기존 주요 값:

```css
.container {
    padding: 30px 15px 170px;
}
```

---

## 3. 검색 카드 내부 위쪽/아래쪽 여백

수정 위치:

```css
.search-card {
    padding: 12px 16px;
}
```

설명:  
형번 선택, 피치 입력, 피치 오차범위, 버튼이 들어있는 카드 내부의 상하 여백입니다.  
카드 내부가 더 촘촘해지게 하려면 첫 번째 값을 줄입니다.

기존 주요 값:

```css
.search-card {
    padding: 18px 20px;
}
```

---

## 4. 입력 그룹 사이 세로 간격

수정 위치:

```css
.input-group {
    margin-bottom: 6px;
}
```

설명:  
형번 선택 영역, 피치 입력 영역, 피치 오차범위 영역 사이의 세로 간격입니다.  
각 입력 묶음 사이를 줄이고 싶을 때 조정합니다.

기존 주요 값:

```css
.input-group {
    margin-bottom: 10px;
}
```

---

## 5. 라벨과 입력창 사이 간격

수정 위치:

```css
.input-group label {
    margin-bottom: 3px;
}
```

설명:  
`형번 선택 (MODEL)`, `피치 입력 (P)`, `피치 오차범위 (%)` 라벨과 바로 아래 입력창 사이의 간격입니다.

기존 주요 값:

```css
.input-group label {
    margin-bottom: 5px;
}
```

---

## 6. 형번 선택창 / 피치 입력창 / 오차범위 입력창 높이

수정 위치:

```css
select,
input {
    padding-top: 8px;
    padding-bottom: 8px;
}
```

설명:  
이 파일은 입력창 높이를 `height`가 아니라 `padding`으로 만들고 있습니다.  
따라서 입력창 상하폭을 줄이려면 `padding-top`, `padding-bottom`을 줄이면 됩니다.  
글자 크기를 유지하려면 `font-size`는 건드리지 마세요.

기존 주요 값:

```css
select, input {
    padding: 11px 12px;
}
```

---

## 7. 초기화/검색하기 버튼 줄 간격

수정 위치:

```css
.btn-row {
    gap: 8px;
    margin-top: 2px;
}
```

설명:  
초기화 버튼과 검색하기 버튼 사이의 간격은 `gap`, 입력창 아래에서 버튼 줄까지의 간격은 `margin-top`입니다.

기존 주요 값:

```css
.btn-row {
    gap: 10px;
    margin-top: 5px;
}
```

---

## 8. 초기화/검색하기 버튼 높이

수정 위치:

```css
button {
    padding-top: 8px;
    padding-bottom: 8px;
}
```

설명:  
이 파일의 버튼 높이는 `height`가 아니라 `padding`으로 결정됩니다.  
버튼 상하폭만 줄이고 글자 크기를 유지하려면 `padding-top`, `padding-bottom`만 조정합니다.

기존 주요 값:

```css
button {
    padding: 11px;
}
```

---

## 9. 남은 검색 횟수 안내문 간격

수정 위치:

```css
.usage-info {
    margin-top: 5px;
}
```

설명:  
`남은 횟수: ...` 안내문과 버튼 줄 사이 간격입니다.

기존 주요 값:

```css
.usage-info {
    margin-top: 8px;
}
```

---

## 10. 검색 카드 아래와 결과 영역 사이 간격

수정 위치:

```css
.result-area {
    margin-top: 6px;
}
```

설명:  
검색 카드 아래에서 검색 결과 영역이 시작되기 전까지의 간격입니다.

기존 주요 값:

```css
.result-area {
    margin-top: 10px;
}
```

---

## 11. 결과 요약 박스 상하 간격

수정 위치:

```css
.result-summary {
    margin-top: 4px;
    margin-bottom: 9px;
    padding-top: 7px;
    padding-bottom: 7px;
}
```

설명:  
검색 결과 상단에 표시되는 요약 안내 박스의 외부 간격과 내부 상하폭입니다.

기존 주요 값:

```css
.result-summary {
    margin: 6px 0 14px;
    padding: 10px 12px;
}
```

---

## 12. 결과 카드 사이 간격

수정 위치:

```css
.result-card {
    margin-bottom: 9px;
}
```

설명:  
검색 결과 카드와 카드 사이의 세로 간격입니다.

기존 주요 값:

```css
.result-card {
    margin-bottom: 14px;
}
```

---

## 13. 결과 카드 상단 행 높이

수정 위치:

```css
.result-top {
    padding-top: 11px;
    padding-bottom: 11px;
}
```

설명:  
결과 카드에서 형번, 피치, 펼침 버튼이 들어가는 상단 행의 상하폭입니다.

기존 주요 값:

```css
.result-top {
    padding: 16px 16px;
}
```

---

## 14. 결과 카드 오른쪽 펼침 버튼 크기

수정 위치:

```css
.toggle-result-btn {
    width: 28px;
    height: 28px;
}
```

설명:  
결과 카드 오른쪽의 펼침 화살표 버튼 크기입니다.

기존 주요 값:

```css
.toggle-result-btn {
    width: 32px;
    height: 32px;
}
```

---

## 15. 펼침 상세 영역 내부 여백

수정 위치:

```css
.result-detail {
    padding-top: 11px;
    padding-bottom: 9px;
}
```

설명:  
결과 카드를 펼쳤을 때 상세 정보 영역의 위쪽/아래쪽 여백입니다.

기존 주요 값:

```css
.result-detail {
    padding: 16px 18px 12px;
}
```

---

## 16. 상세 정보 행/열 간격

수정 위치:

```css
.detail-grid {
    gap: 8px 14px;
}

.detail-row {
    padding-bottom: 5px;
}
```

설명:  
상세 정보 항목 사이의 세로/가로 간격과 각 행의 하단 여백입니다.

기존 주요 값:

```css
.detail-grid {
    gap: 12px 20px;
}

.detail-row {
    padding-bottom: 7px;
}
```

---

## 17. PDF/DWG/3D 버튼 영역 간격

수정 위치:

```css
.result-buttons {
    gap: 6px;
    padding-top: 10px;
    padding-bottom: 11px;
}

.result-buttons a {
    padding-top: 7px;
    padding-bottom: 7px;
}
```

설명:  
다운로드 버튼이 들어있는 영역의 상하폭과 버튼 자체의 상하폭입니다.

기존 주요 값:

```css
.result-buttons {
    gap: 8px;
    padding: 14px 16px 16px;
}

.result-buttons a {
    padding: 10px 6px;
}
```

---

## 18. 중앙 체인 배경 이미지 영역 간격

수정 위치:

```css
.middle-visual-zone {
    padding-top: 11px;
    padding-bottom: 22px;
    min-height: 190px;
}

.middle-visual-zone.search-active {
    padding-top: 6px;
    padding-bottom: 12px;
    min-height: 105px;
}
```

설명:  
검색 카드 아래쪽 중앙 체인 이미지 영역의 상하 여백과 최소 높이입니다.  
검색 전 상태는 `.middle-visual-zone`, 검색 후 상태는 `.middle-visual-zone.search-active`가 담당합니다.

---

## 19. 하단 고정 영역 높이

수정 위치:

```css
.bottom-area {
    padding-top: 8px;
    padding-bottom: 8px;
}
```

설명:  
하단 고정 영역 전체 상하폭입니다.

기존 주요 값:

```css
.bottom-area {
    padding: 12px 14px 12px;
}
```

---

## 20. 하단 HOME 버튼 높이

수정 위치:

```css
.home-btn {
    padding-top: 7px;
    padding-bottom: 7px;
}
```

설명:  
하단 HOME 버튼 자체의 상하폭입니다.

기존 주요 값:

```css
.home-btn {
    padding: 10px 18px;
}
```

---

## 21. 하단 브랜드 문구 간격

수정 위치:

```css
.bottom-brand {
    margin-top: 8px;
}

.bottom-sub {
    margin-top: 3px;
}
```

설명:  
하단 브랜드명과 보조 문구 주변의 세로 간격입니다.

기존 주요 값:

```css
.bottom-brand {
    margin-top: 12px;
}

.bottom-sub {
    margin-top: 4px;
}
```

---

# 바로 조정할 때 볼 핵심 CSS 모음

```css
.container { padding-top: 18px; }
.search-card { padding: 12px 16px; }
.input-group { margin-bottom: 6px; }
.input-group label { margin-bottom: 3px; }
select, input { padding-top: 8px; padding-bottom: 8px; }
.btn-row { gap: 8px; margin-top: 2px; }
button { padding-top: 8px; padding-bottom: 8px; }
.usage-info { margin-top: 5px; }
.result-area { margin-top: 6px; }
.result-card { margin-bottom: 9px; }
.result-top { padding-top: 11px; padding-bottom: 11px; }
.result-detail { padding-top: 11px; padding-bottom: 9px; }
.result-buttons { padding-top: 10px; padding-bottom: 11px; }
.bottom-area { padding-top: 8px; padding-bottom: 8px; }
```
