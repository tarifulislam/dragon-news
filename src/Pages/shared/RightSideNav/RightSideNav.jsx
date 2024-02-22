import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className=" text-3xl">Login With</h2>
                <button className=" btn btn-outline w-full">Google</button>
                <button className=" btn btn-outline w-full">Github</button>
            </div>
            <div className="p-4  space-y-3  mb-6">
                <h2 className=" text-3xl">Find us on</h2>
                <p className=" border p-4 text-3xl rounded-t-lg">Facebook</p>
                <p className=" border p-4 text-3xl rounded-lg">Facebook</p>
                <p className=" border p-4 text-3xl rounded-b-lg">Facebook</p>
            </div>
            
            <div className="p-4  space-y-3  mb-6">
                <h2 className=" text-3xl">Q Zone</h2>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;