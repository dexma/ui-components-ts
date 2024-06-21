import React, { useContext } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { DataIdContext } from '@components/DataId/DataIdProvider';

type WithDataIdProps = {
    dataId?: string;
};

export function withDataId<T extends WithDataIdProps>(Component: React.ComponentType<T>, defaultValue: string) {
    const withData = React.forwardRef((props: T, ref) => {
        const namespace = useContext(DataIdContext);

        let dataId = defaultValue;

        if (namespace && props.dataId) {
            dataId = `${namespace}.${props.dataId}`;
        } else if (namespace) {
            dataId = `${namespace}.${dataId}`;
        } else if (props.dataId) {
            dataId = props.dataId;
        }
        return <Component {...props} dataId={dataId} refs={ref} />;
    });

    const Hoisted = hoistStatics(withData, Component);
    return Hoisted;
}
