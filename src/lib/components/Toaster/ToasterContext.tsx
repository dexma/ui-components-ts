import React from 'react';

type ToasterContextType = {
    toast: ({ text, type }: { text: any; type: any }) => void;
};

const ToasterContext = React.createContext<ToasterContextType>({ toast: () => {} });

export default ToasterContext;
