import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categoris, setategoris] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setategoris(data))
    },[])


    return (
        <div>
            <h2>all categoris</h2>
            <div>
                {
                   categoris.map(category => <Link to={`/category/${category.id}`} className=" block ml-4 text-xl font-semibold" key={category.id} >{category.name}</Link>) 
                }
            </div>
        </div>
    );
};

export default LeftSideNav;