import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            OOOppppsss!!
            {err?.data}
        </div>
    )
}
export default Error;