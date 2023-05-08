import { useRouter } from "next/router"
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  // 컴포넌트 내부에 들어있는 router는 클라이언트 사이드에서만 실행이 된다.
  // 만약 URL에 들어있는 영화 제목을 사용해서 SEO에 최적화하고, 유저가 접속 전에 정보를 얻고자 한다면
  // getServerSideProps를 사용해야 한다. 그렇지 않다면 loading... 돌고 있는 모습을 보여줘야 할 수 있다.
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params : {params} }) {
  return {
    props: {
      params
    }
  }
}