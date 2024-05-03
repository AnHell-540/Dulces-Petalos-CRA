import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
    const location = useLocation();
    const { pathname } = location;
    const segments = pathname.split('/').filter((segment) => segment !== '');
    console.log('?', window.location.href);

    let url = '';
    const breadcrumbLinks = segments.map((segment, index) => {
        url += `/${segment}`;
        return (
            <>
                {index > 0 ? <span className='bc-separator'>&gt;</span> : ''}

                <Link key={segment} to={index > 0 ? location : url}>
                    {index === 0 ? <i className='fa-solid fa-house'></i> : ''}
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
            </>
        );
    });

    return <> {breadcrumbLinks} </>;
}
