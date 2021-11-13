import { getProfessionalExperienceIcons, mapToIconComponents } from "../../Utils";
import { useEffect, useState } from 'react';
import { IconProps } from "../../Types";

const Journey = () => {
    const baseState: IconProps[] = [];
    const [experienceIcons, setExperienceIcons] = useState(baseState);
    useEffect(() => {
        const getExperienceIcons = async () => {
            const res = await getProfessionalExperienceIcons();
            setExperienceIcons(res);
        };
        getExperienceIcons();
    })
    const mapping: any[] = mapToIconComponents(experienceIcons);
    return (
        <div>
            {mapping}
        </div>);
}

export default Journey;