import { PageEnum } from '../../Types';
import Page from '../common/Page';

const Home = () => {
    const skills = new Map<string, number>();
    skills.set('HTML', 60);
    skills.set('CSS', 30);
    skills.set('JavaScript', 70);
    skills.set('C#', 55);
    skills.set('Java', 55);
    return <Page title={'Home'} type={PageEnum.HOME} stats={skills}></Page>;
}

export default Home;