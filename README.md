# 정적 라우팅

- 폴더 -> page 파일을 만들어서 라우팅을 한다.
- - todos의 경우 /todo로 진입 시 page파일이 처음으로 보여짐

# 동적 라우팅

- 기존처럼 [폴더이름] -> page 파일로 라우팅을 한다.

# app 라우팅 규칙

## Routing Files

1. layout : .js .jsx .tsx Layout
2. page : .js .jsx .tsx Page
3. loading : .js .jsx .tsx Loading UI
4. not-found : .js .jsx .tsx Not found UI
5. error : .js .jsx .tsx Error UI
6. global-error : .js .jsx .tsx Global error UI
7. route : .js .ts API endpoint
8. template : .js .jsx .tsx Re-rendered layout
9. default : .js .jsx .tsx Parallel route fallback page

## 중첩 경로

1. folder : Route segment
2. folder-folder : Nested route segment

## 동적 경로

1. [folder] : 동적 경로 세그먼트
2. [...folder] : 포괄적 세그먼트
3. [[...folder]] : 선택적 포괄적인 세그먼트

## 경로 그룹 및 개인 폴더

1.(folder) : 라우팅에 영향을 주지 않고 경로 그룹화 2. \_folder : 라우팅에서 폴더 및 모든 하위 세그먼트 선택

## 병렬 및 가로채기 경로

1. @folder : 명명된 슬롯
2. (.)folder : 같은 수준 가로채기
3. (..)folder : 한 단계 위의 가로채기
4. (..)(..)folder : 위의 두 수준 차단
5. (...)folder : 루트에서 가로채기
