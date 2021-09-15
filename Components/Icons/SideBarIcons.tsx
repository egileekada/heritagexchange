import React from 'react';

export default function SideBarIcons(props: any) { 

    return(
        <>
            {props.name === 'Transactions' || props.name === 'Settings' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17">
                        {/* <defs>
                            <style>.a,.b{fill:rgba(240,240,240,0.6);}.a{opacity:0.4;}</style>
                        </defs> */}
                        <g transform="translate(1.417 1.417)">
                            <path className='fill-current text-activeiconlow' d="M1.8,0H4.2a1.806,1.806,0,0,1,1.8,1.813V4.232A1.806,1.806,0,0,1,4.2,6.045H1.8A1.806,1.806,0,0,1,0,4.232V1.813A1.806,1.806,0,0,1,1.8,0" transform="translate(8.172 0)"/>
                            <path className='fill-current text-activeiconhigh' d="M9.97,14.167a1.806,1.806,0,0,1-1.8-1.813V9.935a1.806,1.806,0,0,1,1.8-1.814h2.4a1.806,1.806,0,0,1,1.8,1.814v2.419a1.806,1.806,0,0,1-1.8,1.813Zm-8.171,0A1.806,1.806,0,0,1,0,12.353V9.935A1.806,1.806,0,0,1,1.8,8.121H4.2a1.806,1.806,0,0,1,1.8,1.814v2.419a1.806,1.806,0,0,1-1.8,1.813Zm0-8.121A1.806,1.806,0,0,1,0,4.232V1.813A1.806,1.806,0,0,1,1.8,0H4.2a1.805,1.805,0,0,1,1.8,1.813V4.232A1.805,1.805,0,0,1,4.2,6.045Z" transform="translate(0 0)"/>
                        </g>
                    </svg> 
                : props.name === 'Dashboard' ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        {/* <defs><style>.a,.b{fill:#fff;}.b{opacity:0.4;}</style></defs> */}
                        <g transform="translate(1.667 1.667)">
                            <path className='fill-current text-activeiconhigh'  d="M6.794.537a.884.884,0,0,1,.083.274l.232,3.45h0l.115,1.734a1.783,1.783,0,0,0,.083.526.869.869,0,0,0,.838.526l5.548-.363a.915.915,0,0,1,.645.25.883.883,0,0,1,.266.507l.01.117a7.235,7.235,0,0,1-5.737,6.515A7.38,7.38,0,0,1,.884,10.52,6.845,6.845,0,0,1,.054,7.9,5.015,5.015,0,0,1,0,7.076,7.246,7.246,0,0,1,5.82.011.909.909,0,0,1,6.794.537Z" transform="translate(0 2.426)"/>
                            <path className='fill-current text-activeiconlow' d="M.708,0A7.87,7.87,0,0,1,8.316,6.51l-.006.027h0l-.017.039,0,.108a.667.667,0,0,1-.16.393.689.689,0,0,1-.385.226l-.091.013-6.4.415a.764.764,0,0,1-.583-.189A.736.736,0,0,1,.435,7.1L.006.7a.1.1,0,0,1,0-.067A.654.654,0,0,1,.221.175.679.679,0,0,1,.708,0Z" transform="translate(8.351 0)"/>
                        </g>
                    </svg>
                : props.name === 'Crypto Savings' ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.45" height="18" viewBox="0 0 14.45 17">
                        {/* <defs><style>.a,.b{fill:rgba(240,240,240,0.6);}.a{opacity:0.4;}</style></defs> */}
                        <path className='fill-current text-activeiconlow' d="M7.3,17a.665.665,0,0,1-.305-.073L3.932,15.342A7.185,7.185,0,0,1,1.854,13.8,7.006,7.006,0,0,1,.036,9.146L0,3.506A1.541,1.541,0,0,1,1.044,2.05L6.664.091A1.6,1.6,0,0,1,7.71.085l5.642,1.893a1.538,1.538,0,0,1,1.062,1.441l.036,5.644a7.006,7.006,0,0,1-1.756,4.671A7.16,7.16,0,0,1,10.636,15.3L7.6,16.923A.649.649,0,0,1,7.3,17" transform="translate(0 0)"/>
                        <path className='fill-current text-activeiconhigh' d="M2.275,4.518a.649.649,0,0,1-.455-.18L.19,2.771a.614.614,0,0,1-.005-.884.654.654,0,0,1,.908-.006L2.265,3.008,5.128.186A.654.654,0,0,1,6.036.18a.613.613,0,0,1,.006.884L2.728,4.332a.646.646,0,0,1-.453.186" transform="translate(4.371 5.955)"/>
                    </svg>
                : props.name === 'Profile' ?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    {/* <defs><style>.a,.b{fill:rgba(240,240,240,0.6);}.b{opacity:0.4;}</style></defs> */}
                    <g transform="translate(3.333 1.666)">
                        <path className='fill-current text-activeiconhigh' d="M6.664,0C3.07,0,0,.567,0,2.833S3.051,5.687,6.664,5.687c3.594,0,6.664-.566,6.664-2.833S10.278,0,6.664,0" transform="translate(0 10.979)"/>
                        <path className='fill-current text-activeiconlow' d="M4.41,8.82A4.41,4.41,0,1,0,0,4.41,4.394,4.394,0,0,0,4.41,8.82" transform="translate(2.254)"/></g>
                </svg>
                : props.name === 'LogIn' ?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    {/* <defs><style>.a,.b{fill:rgba(240,240,240,0.94);}.a{opacity:0.4;}</style></defs> */}
                    <g transform="translate(2.5 2)">
                        <path className='fill-current text-activeiconlow' d="M0,4.446A4.526,4.526,0,0,1,4.591,0H9.624A4.515,4.515,0,0,1,14.2,4.436V15.552A4.526,4.526,0,0,1,9.613,20H4.581A4.517,4.517,0,0,1,0,15.562V4.446Z" transform="translate(4.796)"/>
                        <path className='fill-current text-activeiconhigh' d="M13.537,3.134,10.569.225a.79.79,0,0,0-1.106,0,.762.762,0,0,0,0,1.089l1.625,1.593H.782a.77.77,0,1,0,0,1.54H11.091L9.465,6.043a.762.762,0,0,0,0,1.089.79.79,0,0,0,1.106,0l2.968-2.909a.761.761,0,0,0,0-1.091" transform="translate(0 6.32)"/>
                    </g>
                </svg>
                :null
            }
        </>
    )
}

