export { Wrapper }

import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { usePageContext } from 'vike-react/usePageContext';

function Wrapper({ children }) {
    const pageContext = usePageContext()
    if (typeof window !== "undefined") return <>{children}</>;
    return (
        <StyleSheetManager sheet={pageContext.config.styleSheet?.instance}>{children}</StyleSheetManager>
    )
}