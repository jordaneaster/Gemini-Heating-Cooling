import React from "react";
import WelcomeBanner from "../Welcomebanner/Welcomebanner";
import  HomeBanner  from "../HomeBanner/HomeBanner";
import  ServiceBlock  from "../ServiceBlock/ServiceBlock";

export const BlockComponents = ({blocks}) => {
    const fragments = {
        ContentfulWelcomeHeader: WelcomeBanner,
        ContentfulBanner: HomeBanner,
        ContentfulServicesBlock: ServiceBlock

    };
    const blockContent = blocks.map((block, index) => {
        const FragmentComponents = fragments[block.type];
        if(FragmentComponents) {
            return <FragmentComponents block={block} key={`block-${index}`}/>
        }
        return null
    });
    return <section className="container">{blockContent}</section>;
}
export default BlockComponents;