import { SliderComp } from "./CategoriesSlider";

const categories_pic = [
    {
    title: "Beach",
    image: "https://res.cloudinary.com/dqti9icif/image/upload/v1717063824/beach_ugn0q3.png"
    },
    {
    title: "Beachfront",
    image: "https://res.cloudinary.com/dqti9icif/image/upload/v1717063844/beachfront_uz0otv.png"
    },
    {
    title: "Vineyards",
    image: "https://res.cloudinary.com/dqti9icif/image/upload/v1717064201/vineyards_hvypws.png"
    },
    {
    title: "Mansions",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717064069/mansions_wjeeml.png"
    },
    {
    title: "Lake",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717063997/lake_adozli.png"
    },
    {
    title: "Treehouses",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717064168/treehouses_u9cnaf.png"
    },
    {
    title: "Farms",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717063953/farms_kwoc0s.png"
    },
    {
    title: "Skiing",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717064091/skiing_ccby2m.png"
    },
    {
    title: "Amazing pools",
    image:"	https://res.cloudinary.com/dqti9icif/image/upload/v1717063507/amazing_pools_dpylvq.png"
    },
    {
    title: "Earth homes",
    image:"	https://res.cloudinary.com/dqti9icif/image/upload/v1717063931/earth_homes_ln2zty.png"
    },
    {
    title: "Amazing views",
    image:"	https://res.cloudinary.com/dqti9icif/image/upload/v1717063768/amazing_views_vhyqc9.png"
    },
    {
    title: "Desert",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717063911/desert_asovai.png"
    },
    {
    title: "Lakefront",
    image:"	https://res.cloudinary.com/dqti9icif/image/upload/v1717064015/lakefront_ze7yei.png"
    },
    {
    title: "Islands",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717063979/islands_qcbnis.png"
    },
    {
    title: "Tropical",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717064186/tropical_x6amqu.png"
    },
    {
    title: "Camping",
    image:"	https://res.cloudinary.com/dqti9icif/image/upload/v1717063890/camping_jeueuk.png"
    },
    {
    title: "Surfing",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717064130/surfing_wrxzh4.png"
    },
    {
    title: "Bed & breakfasts",
    image:"	https://res.cloudinary.com/dqti9icif/image/upload/v1717063869/bed_breakfasts_emhbwj.png"
    },
    {
    title: "Luxe",
    image:"	https://res.cloudinary.com/dqti9icif/image/upload/v1717064051/luxe_mhbmqv.png"
    },
    {
    title: "Top of the world",
    image:"https://res.cloudinary.com/dqti9icif/image/upload/v1717064149/top_of_the_world_rmvs0n.png"
    },

];


export function Categories() {
    return (
    <div className="categories-container full main-content">
        <SliderComp
            data={categories_pic}
            slideNum={8}
        />
        </div>
    )
}
