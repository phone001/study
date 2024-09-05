## react query v5
> 이름이 tanstack query로 변경이 되었음
> 리액트에서만 사용하는 것이 아닌 vue solid등등 사용하기 때문에
> 다른 프레임워크에서도 지원을 하게 되었다.
> 생태계가 확장된 것 

## react query의 목적
> 패치와 캐시의 서버 데이터를 관리를 해주는 라이브러리
> 비동기 과정을 도와주는게 목적인 라이브러리
> 리액트에서 서버의 상태를 가져오고 캐싱해서 지속적인 패칭을 막아준다.

- 캐싱 : 특적 데이터의 내용을 메모리에 저장해서 동일한 내용의 접근 속도를 높이는 것. 서버의 부하를 줄이는 결과
- 최신 데이터인지를 확인하고 캐시 메모리를 다뤄야한다.

- 최신 데이터는 요청을 보낸 직후 fresh한 데이터 상태가 되고 정해진 시간이 지나면 썩은 데이터 stale한 데이터 상태가 되면 다시 refresh를 해서 새로운 데이터를 가져올 수 있는 상태가 된다.

- fresh상태와 stale상태는 react query에서는 staleTime과 cacheTime(v4이전의 이름 현재는 gcTime-가비지 콜렉터시간)의 값을 사용한다.
- 패치 이후 fresh상태의 데이터가 생기고 statleTime이 지나면 stale상태의 데이터로 변한다.
- 이후 refresh를 할 수 있는 데이터의 상태
- gcTime은 데이터가 inactive화면에 보이고 있는 상태일때 캐시된 데이터가 상주할 시간, gcTime의 시간만큼만 데이터가 유지
- gcTime이 남아있는 경우 데이터를 참조하게 되면 fetch하는 동안 보여주는 데이터가 된다. 이전의 캐시 데이터를 보여주다가 fetch되고 이후에 최신 데이터를 가져와서 보여준다.

## tanstack query의 상태
> fetching -> fresh -> stale -> inactive -> 삭제
> stale 직전까지가 stale타임으로 데이터는 fresh상태
> fresh상태에는 새로운 요청이 되지 않는다.
> stale상태가 되면 재요청이 가능하다.
> inactive에서 데이터가 삭제되기까지 걸리는 시간을 gcTime이라고 한다.

- fresh : 신선한 데이터 상태, 재요청이 불가능
- stale : 썩은 데이터 상태, 데이터의 재요청이 가능하다.
- inactive : 화면에 데이터가 보이는 상태, gcTime이 지나면 가비지 컬렉터에서 수정해서 제거해준다.

## tanstack query의 상태관리와 기능
> 서버측 상태를 관리한다.
1. 캐싱
2. 동일한 데이터의 중복 요청을 단일 요청으로 만들 수 있다.
3. 오래된 데이터의 업데이트
4. 데이터가 얼마나 상주하는지 알 수 있다.
5. 서버의 상태의 메모리 관리 및 가비지 수집의 관리

```sh
npm i @tanstack/react-query
```

## tanstack query사용
```js
import {QueryClient} from'@tanstack/react-query'
const queryClient = new QueryClient({
  defualtOptions: {
    qeuries: {
      staleTime: 0, // 썩는 시간을 주는 옵션, infinity는 무한으로 새로운 업데이트가 불가능하다.
      gcTime: 0, // 기본값이 5분
      retry: 0, // 요청이 실패하면 몇번 재요청하고 오류를 발생시킬지
    }
  }
});

// queryClientProvider의 client키의 값으로 전달
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

## dev tools
```sh
npm i @tanstack/react-query-devtools 
```

## tanstack query count
> src 폴더에 api폴더만들고 
> 경로를 api 폴더로 이동
```sh
npm init -y
npm i express cors
```

## useQuery
> 서버에 get요청을 보낼 때 사용
> 요청 메서드가 get메서드를 요청 보낼때 사용하는 hook

```js
import {useQuery} from '@tanstack/react-query';
const Count =()=>{
    // useQuery
    // 첫번째 인자값으로 쿼리의 객체 
    // 유니크 키와 값
    // 비동기 처리함수의 키와 값
    const obj = useQuery({
        queryKey:[],
        queryFn:async ()=>{},
        refetchOnMount:true,
        enabled: false ,
        retry:10
        })
}
// refetchOnMount : 데이터가 썩은 상태가 되면 mount마다 refetch를 실행 
// 기본값이 true
// always로 설정하면 마운트 마다 refetch를 진행
// false가 들어가면 최초에 fetch를 진행하고 refetch를 하지 않음

//refetchOnWindowFocus : 브라우저가 포커실 될때마다 refetch를 실행하는 옵션
// 최초에 true, stale상태일 때 윈도우 포커싱하면 refetch
// always 포커실 될때마다 refetch

// enabled : 쿼리가 자동으로 실행될지 여부
// 해당 속성이 false면 isPending이 true
//원할 때 refetch메서드 호출

// retry : 몇번 재시도할 지 

//select : queryFn에서 반환한 데이터를 매개변수로 받아 data키에 값을 할당해준다.
```
- data : 쿼리 함수에서 반환한 값
- dataUpdatedAt 
- error : 쿼리함수에서 오류가 발생하면 오류객체가 할당
- errorUpdateCount 
- errorUpdatedAt
- failureCount
- failureReason
- fetchStatus
- isError
- isFetched
- isFetchedAfterMount
- isFetching
- isInitialLoading
- isLoading : 로딩 중 상태일 셩우 true false
- isLoadingError
- isPaused
- isPending : 요청 대시 상태일 경우 true false
- isPlaceholderData
- isRefetchError
- isRefetching
- isStale : 썩었는지 안썩었는지
- isSuccess : 성공했는지 여부 true false
- refetch : 쿼리를 수동으로 다시 호출하는 메서드, 메서드를 직접호출해서 업데이트 할 수 있음
- status : 로딩중인지 성공인지 에러인지 문자열을 반환


### useMutation
> tanstack-query에서 post요청을 하는 경우 사용하는 hook
> 값을 전달해서 요처으이 내용으로 포함시켜서 쿼리의 내용을 처리하기 위해서 사용