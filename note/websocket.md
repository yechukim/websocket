## Noom
> first websocket 

## websocket (is protocol)
> websocket은 프로토콜, 언어에 dependent x\
> 백엔드끼리도 가능, 브라우저 백엔드만 소통할 수 있는 거 x\
> 브라우저에는 내장된 웹소켓 API 연결
websocket 연결 -> 악수처럼 작동함

브라우저가 서버와 손을 맞고 잇는 것처럼 연결된다. \
말 그대로 연결..connection
연결되어 있어서 서버는 유저가 누구인지 알 수 있음
연결되어 있어서 서버는 메시지를 보낼 수 있음

- bi-directional 연결
이 모든 것은 연결되어 있을 때만 발생함
- 브라우저, 서버 서로 아무때나 메시지를 보낼 수 있다.
나의 폰과 wifi 의 관계... 

### mvp css 
> 기본태그 예쁘게 바꿔줌 

## ws 
> implementation :웹소켓의 코어일 뿐(기초일뿐)\
엑스트라 기능 x\
websocket protocol을 실행하는 패키지

## ws event
> 웹 소켓에도 이벤트 리스너가 있다! 

#### 소켓 : 연결된 브라우저와의 contact line .. 연락 라인 

✏️ 현재 서로 다른 브라우저는 메시지를 주고 받지 못함..\
누가 서로 연결이 되어 있는지 알아야 한다.

닉네임 저장 
백엔드는 메시지를 구분하지 못함\
메세지 타입을 나누자 ..json으로 보내자

왜 object가 아닌 string을 보내야하는 거얏?\
=> websocket이 브라우저에 있는 API이기 때문이다.\
백엔드에서는 다양한 프로그래밍 언어를 사용할 수 있어서 해당 api는 어떤 판단도 x 
