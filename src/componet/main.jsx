import Card1 from "./card"
import FeedBack1 from "./feedback";
const Main=()=>{
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[20px] mx-auto">
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
        </div>
        <div className="mx-auto mt-10 grid lg:grid-cols-2 gap-y-[40px] gap-x-[30px]">
        <FeedBack1/>
        <FeedBack1/>
        <FeedBack1/>
        <FeedBack1/>
        </div>
        </div>
    )
}
export default Main;