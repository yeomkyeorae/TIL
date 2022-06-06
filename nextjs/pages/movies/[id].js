import { useRouter } from "next/router"

export default function Detaul() {
    const router = useRouter();

    return (
        <div>
            {router.query.id}
        </div>
    )
}