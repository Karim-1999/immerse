import { Questions } from "./Questions";
import { Search } from "./Search/Search";

export function Home(){
    return(
        <>
            <Search />
            <Questions />
        </>
    )
}