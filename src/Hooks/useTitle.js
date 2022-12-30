import { useEffect } from "react"
const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-google task space`
    }, [title])
}
export default useTitle;