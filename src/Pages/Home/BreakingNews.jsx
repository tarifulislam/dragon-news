
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div>
            <button className=" btn btn-secondary">Breaking news</button>
            <Marquee pauseOnHover={true} speed={200}>
                     I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;