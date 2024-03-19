import React, { useContext } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { DataIdContext } from '@components/DataId/DataIdProvider';

type WithDataIdProps = {
    dataId?: string;
};

export function withDataId<T extends WithDataIdProps>(Component: React.ComponentType<T>) {
    const withData = React.forwardRef((props: T, ref) => {
        const namespace = useContext(DataIdContext);
        const { defaultProps } = Component;
        const { dataId: oldId, ...rest } = props;

        let dataId = defaultProps?.dataId;

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
