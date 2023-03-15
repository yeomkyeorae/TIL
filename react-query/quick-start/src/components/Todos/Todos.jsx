import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodo } from '../../api/api';

function Todos() {
  const queryClient = useQueryClient();

  // staleTime을 지정하지 않으면 default로 쿼리 값이 stale로 관리된다.
  const {isLoading, data} = useQuery({ queryKey: ['todos'], queryFn: getTodo, staleTime: 1000 * 60 });

  const mutation = useMutation({
    // mutationFn: mutate 메소드 호출로 동작
    mutationFn: () => { console.log('mutationFn executed!') },
    onSuccess: () => {
      console.log('mutation success!');
      
      // invalidate 처리해 쿼리 재요청
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: () => {
      console.log('mutation failed!');
    }
  });

  if(isLoading) {
    return <div>loading...</div>
  }

  return (
    <div>
      {
        data.title
      }
      <br />
      <button onClick={() => {mutation.mutate({})}}>occur mutate</button>
    </div>
  )
}

export default Todos;