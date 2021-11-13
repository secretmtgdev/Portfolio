// types can use union operator were interfaces can't
// Ref: https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0
const home = 'Home';
const fee = 'FrontEndEngineering';
const cs = 'ComputerScience';
const math = 'Mathematics';
const journey = 'Journey';

type IconProps = {
    name: string, 
    imgLink: string
    ref?: string, 
}

type PageProps = {
    title: string,
    type: PageType
    stats?: Map<string, number>
}

type HeaderProps = {
    title: string
}

type FooterProps = {
    socialMedia: IconProps[]
}

type MeterProps = {
    value: number
}

type StatProps = {
    stats: Map<string, number>
}

// Enums only support numeric and string based literals
class PageType {
    static readonly HOME = new PageType(home);
    static readonly FEE = new PageType(fee);
    static readonly CS = new PageType(cs);
    static readonly JOURNEY = new PageType(journey);
    static readonly MATH = new PageType(math);

    private constructor(private readonly value: string){}

    toString() {
        return this.value;
    }
}

export type {
    FooterProps,
    HeaderProps,
    IconProps,
    MeterProps,
    PageProps,
    StatProps
}

export {
    PageType
}