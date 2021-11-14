import { IconProps, PageType } from './Types';
import { If, Then } from 'react-if';

/*******************
 ** App Constants **
 *******************/
const AppConstants = {
    StringConstants: {
        DataNotFound: 'The data could not be found.',
        DataUnavailable: 'The data is currently unavailable.'
    }
}

/*******************************
 ** Internal helper functions **
 *******************************/
const mapToIconComponents = (medias: any[]) => {
    const mapping: any[] = [];
    medias.forEach(media => {
        mapping.push(
            <div className="social-media-icon">
                <a href={media.ref}>
                    <img alt={media.name} src={media.imgLink}/>
                </a>
            </div>
        )
    });
    return mapping;
}

 const getPageDetails = async (type: PageType) => {
    const url = 'http://localhost:8000/api/hello.js';
    const response = await fetch(url, {
        method: 'GET',    
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'text/plain'
        }
    });
    return response.json();
}

const getProfessionalExperienceIcons = (): Promise<IconProps[]> => {
    const data: IconProps[] = [
        { name: "T-Mobile", imgLink: "https://tinyurl.com/4sak2hbs" },
        { name: "EagleView", imgLink: "https://tinyurl.com/3r92hdxv" },
        { name: "Microsoft", imgLink: "https://tinyurl.com/j8th9tvf" },
        { name: "Amazon", imgLink: "https://tinyurl.com/yysjvufx" },
        { name: "Microsoft", imgLink: "https://tinyurl.com/j8th9tvf" }
    ];
    return new Promise(resolve => resolve(data));
}

const getSocialMediaIcons = (): Promise<IconProps[]> => {
    // TODO: Get the data from the server 
    const data: IconProps[] = [
        {
            name: "Linkedin",
            imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png",
            ref: "https://www.linkedin.com/in/mike365/"
        }
    ];

    return new Promise(resolve => resolve(data));
}

const isNullOrUndefined = (entity: any) => {
    return entity === null || entity === undefined;
}

/********************
 ** DEBUGGER LOGIC **
 ********************/
const renderDocumentDetails = () => {
    const doctypeObj: DocumentType | null = document.doctype;
    return (
        <>
            <If condition={!isNullOrUndefined(doctypeObj)}>
                <Then>
                    <div>
                        <h3>Document type details</h3>
                        <ul>
                            <li>Name: {doctypeObj!.name}</li>
                            <li>
                                Public Id: {doctypeObj!.publicId ? 
                                doctypeObj!.publicId :
                                AppConstants.StringConstants.DataNotFound}
                            </li>
                            <li>
                                System Id: {doctypeObj!.systemId ?
                                doctypeObj!.systemId :
                                AppConstants.StringConstants.DataNotFound}
                            </li>
                        </ul>
                    </div>   
                </Then>
            </If>        
        </>
    )
}

export {
    getPageDetails,
    getProfessionalExperienceIcons,
    getSocialMediaIcons,
    isNullOrUndefined,
    mapToIconComponents,
    renderDocumentDetails
}