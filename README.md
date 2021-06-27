# learn-rxjs
옵저버패턴으로 동기적/비동기 처리를 단일화한다고? 그게 가능해?

## 복잡한 이벤트 처리~~

아래와 같은 이벤트처리를 rxjs 단일 패턴으로 풀어보아라~~

1. 동기적 처리 : 
  * 데이터 가공
  * 함수 체이닝
2. 비동기적 처리 :
  * 클릭 이벤트 등 사용자 인풋 이벤트
  * web api 호출 후 response
  
## til

### 2021-06-27

#### rxjs?

구글에서는 참 어렵게 설명하는데,\
동기적 이벤트 비동기적 이벤트 단일 패턴으로 받아 꿍짝꿍짝 하고자 나온 라이브러리 같다.\
'우리가 패턴 매니지드 해줄테니깐 비즈니스 로직이나 개발해' 라고 말하는듯하다.\

근데 일반적인 react, vue 등 javascript 프레임워크에서 구독패턴을 이미 제공하자너??\
이거랑 뭔 차이??\
뭔가 더 파워풀한가??\
이건 키보드 뚜들기며 알아볼 예정

#### fromEvent

이걸로 이벤트 리스너 구독가능하다! 신기해~~

#### 문제점
* rxjs import 가 잘안된다!!
* 오브젝트 구독(this.data) 어떻게 시키는지 몰르겠다!!
* 옵저버블, 옵저버 이거 api 문서봐도 뭔지 한개도 몰르겠음. 난 바보이다