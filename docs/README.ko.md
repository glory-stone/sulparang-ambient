# Sulparang Ambient Free 0.1.2

## HACS에서 저장소 주소로 설치

술파랑 무료판은 HACS용 대시보드 카드입니다. Home Assistant의 왼쪽 메뉴 → HACS → ⋮ → 사용자 지정 저장소에서 추가하고, 유형은 대시보드(Dashboard)를 선택하세요.

> 설정 → 앱 → 저장소에 이 주소를 넣으면 ‘is not a valid app repository’ 오류가 납니다. 앱(애드온) 저장소와 HACS 저장소는 서로 다릅니다.

[HACS에서 술파랑 열기](https://my.home-assistant.io/redirect/hacs_repository/?owner=glory-stone&repository=sulparang-ambient&category=plugin) — HACS 설치·설정을 먼저 완료하세요. 버튼을 누른 뒤 설치할 Home Assistant 서버 주소를 확인하세요.

HACS가 없다면 공식 설치 안내부터 확인하세요. [HACS](https://www.hacs.xyz/docs/use/download/download/)

### 1. 사용자 지정 저장소 열기

Home Assistant에서 HACS를 열고 오른쪽 위 ⋮ 메뉴 → 사용자 지정 저장소(Custom repositories)를 선택합니다.

### 2. 저장소 주소 추가

아래 주소를 붙여넣고 유형은 대시보드(Dashboard)를 선택한 뒤 추가(Add)를 누릅니다.

```
https://github.com/glory-stone/sulparang-ambient
```

### 3. 무료판 다운로드

HACS에서 Sulparang Ambient를 검색해 열고 다운로드합니다. 완료 후 브라우저를 새로고침하세요. 기본 검색 목록 등록 전이므로 저장소 주소를 먼저 추가해야 합니다.

### 4. 대시보드에 카드 추가

대시보드 편집 → 카드 추가 → 수동에서 아래 설정을 저장합니다. 소리 아이콘을 누르면 현재 기기에서 재생됩니다.

```
type: custom:sulparang-ambient
language: ko
```

카드를 찾을 수 없으면 설정 → 대시보드 → 리소스에서 아래 URL이 JavaScript 모듈로 등록되어 있는지 확인하세요. YAML 대시보드는 직접 등록해야 할 수 있습니다. 기존 수동 설치에서 전환할 때는 이전 /local/sulparang-ambient/ 리소스를 제거하고 HACS 리소스 하나만 사용하세요.

```
/hacsfiles/sulparang-ambient/sulparang-ambient.js
```

업데이트는 HACS에서 다운로드한 뒤 새로고침합니다. 제거할 때는 대시보드 카드와 HACS 다운로드를 제거하세요.

## ZIP으로 직접 설치하기


Home Assistant 관리자 계정과 설정 폴더에 파일을 올릴 수 있는 환경이 필요합니다. Chrome·Edge·Firefox·Safari 등 Web Audio 지원 브라우저를 사용하세요.

## 1. 파일 내려받기

ZIP을 풀면 sulparang-ambient 폴더가 나옵니다. 폴더 안의 JavaScript와 MP3 파일을 같은 위치에 보관하세요.

## 2. Home Assistant에 복사

Samba 또는 Studio Code Server 등 파일을 복사할 수 있는 도구로 아래 위치에 폴더 전체를 올립니다. www 폴더가 없으면 만드세요. www를 처음 만들었다면 Home Assistant를 재시작합니다. Container 설치는 설정 볼륨의 www 폴더입니다.

```
/config/www/sulparang-ambient/
  sulparang-ambient.js
  rain.mp3
  fire.mp3
```

## 3. 리소스 등록

프로필에서 고급 모드를 켜고 설정 → 대시보드 → 우측 상단 메뉴 → 리소스를 엽니다. 아래 URL을 추가하고 유형은 JavaScript 모듈을 선택합니다.

```
/local/sulparang-ambient/sulparang-ambient.js?v=0.1.2
```

## 4. 대시보드에 카드 추가

대시보드 편집 → 카드 추가 → 수동을 선택하고 아래 내용을 붙여넣어 저장합니다. language는 ko, en, zh, es, ja 중 선택할 수 있습니다.

```
type: custom:sulparang-ambient
language: ko
```

## 5. 새로고침 후 소리 켜기

화면을 새로고침하고 소리 아이콘을 누릅니다. 같은 아이콘을 다시 누르면 꺼집니다. 여러 소리를 선택하면 함께 재생됩니다. 재생 장치는 현재 브라우저가 사용하는 스피커입니다.

## 6. 업데이트와 제거

업데이트 전 기존 폴더를 백업하고 새 파일로 교체한 다음 리소스 URL의 버전을 바꾸고 새로고침하세요. 제거할 때는 카드와 리소스를 먼저 삭제한 뒤 sulparang-ambient 폴더를 삭제하면 됩니다.

## FAQ

### 카드를 찾을 수 없다고 나와요.

리소스 URL과 JavaScript 모듈 선택을 확인하세요. /local/sulparang-ambient/sulparang-ambient.js 주소가 로그인된 브라우저에서 열리는지 확인하고 강력 새로고침하세요.

### 아이콘을 눌러도 소리가 안 나요.

기기·브라우저 탭 음소거와 출력 장치를 확인하세요. rain.mp3와 fire.mp3가 JavaScript 옆에 있어야 합니다. 일부 브라우저는 첫 클릭 후에만 소리를 허용합니다.

### 다른 기기의 스피커로 재생할 수 있나요?

이 무료판은 조작 중인 브라우저에서 재생합니다. 원격 스피커 제어, 라디오, 정시 알람, 시스템 점검 기능은 포함하지 않습니다.
