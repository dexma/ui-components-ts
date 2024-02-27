import React, { useContext } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { DataIdContext } from '@components/DataId/DataIdProvider';

export default (WrappedComponent: any) => {
    const withDataId = React.forwardRef((props: { dataId: string }, ref) => {
        const namespace = useContext(DataIdContext);
        const { defaultProps } = WrappedComponent;

        let dataId = defaultProps?.dataId;

        if (namespace && props.dataId) {
            dataId = `${namespace}.${props.dataId}`;
        } else if (namespace) {
            dataId = `${namespace}.${dataId}`;
        } else if (props.dataId) {
            dataId = props.dataId;
        }

        return <WrappedComponent {...{ ...props, dataId }} refs={ref} />;
    });

    const Hoisted = hoistStatics(withDataId, WrappedComponent);
    Hoisted.defaultProps = WrappedComponent.defaultProps;

    withDataId.displayName = `withDataId(WrappedComponent)`;

    return Hoisted;
};
