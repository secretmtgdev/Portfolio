import { getSocialMediaIcons, isNullOrUndefined } from '../../Utils';
import { If, Then, Else } from 'react-if';
import { useState, useEffect } from 'react';

/**** CUSTOM TYPES ****/
import { IconProps, PageProps } from "../../types/Types";

/**** CUSTOM COMPONENTS ****/
import Navigation from "./Navigation";
import Header from './Header';
import Main from "./Main";
import Stats from "./Stats";
import Footer from './Footer';

const Page = (props: PageProps) => {
    const baseState: IconProps[] = [];
    const [socials, setSocials] = useState(baseState);
    useEffect(() => {
        const getSocials = async () => {
            const res = await getSocialMediaIcons();
            setSocials(res);
        };
        getSocials();
    }, []); // add the array to avoid just running once
    
    return (
        <div dir='ltr'>
            <Navigation />
            <Header title={props.title as string} />
            <Main />
            <If condition={!isNullOrUndefined(props.stats)}>
                <Then>
                    <Stats stats={props.stats!} />
                </Then>
                <Else>
                    No stats available at this time.
                </Else>
            </If>
            <Footer socialMedia={socials}/>
        </div>
    );
}

export default Page;