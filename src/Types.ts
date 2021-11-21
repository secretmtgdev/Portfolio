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
    type: PageEnum
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

type DebuggerProps = {
    state?: StateType
}

interface StateType {
    [key: string]: any
}

interface LinearAlgebraState {
    playing: boolean,
    paused: boolean,
    rows: number,
    columns: number,
    currentState: number,
    currentMatrix: number[][],
    currentJsxMatrix: JSX.Element,
    jsxMatrixStates: JSX.Element[]
}

// Enums only support numeric and string based literals
class PageEnum {
    static readonly HOME = new PageEnum(home);
    static readonly FEE = new PageEnum(fee);
    static readonly CS = new PageEnum(cs);
    static readonly JOURNEY = new PageEnum(journey);
    static readonly MATH = new PageEnum(math);

    private constructor(private readonly value: string){}

    toString() {
        return this.value;
    }
}

export type {
    DebuggerProps,
    FooterProps,
    HeaderProps,
    IconProps,
    MeterProps,
    PageProps,
    StatProps,
    StateType,
    LinearAlgebraState
}

export {
    PageEnum,
}