import React, { useContext } from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import find from 'lodash/find';
import set from 'lodash/set';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';
import { StyledFieldGroup } from '@styles/Fieldgroup/StyledFieldGroup';
import { ButtonSize, Icon, Tooltip } from '@components';

const defaultProps = {
    variant: 'joined',
    type: 'radio',
    vertical: false,
    size: 'medium',
    dataId: 'field-group',
};

const getSelectedField = (type: 'radio' | 'checkbox', selectedValues: string | number | (string | number)[], allValues: FieldGroupItem[], selectedProp: string) => {
    let selectedItem;
    if (type === 'radio') {
        const objectToSelect = set({}, selectedProp, selectedValues);
        selectedItem = find(allValues, objectToSelect);
    }
    if (type === 'checkbox') {
        selectedItem = (selectedValues as [string | number]).map((item: string | number) => {
            const objectToSelect = set({}, selectedProp, item);
            return find(allValues, objectToSelect);
        });
    }
    return selectedItem;
};

const isFieldSelected = (group: RadioOrCheckboxFieldGroup, selectedField: any) => {
    let isEqual = false;
    if (group.type === 'radio') {
        isEqual = !!(group.selectedValues === selectedField);
    }
    if (group.type === 'checkbox') {
        isEqual = !!find(selectedField, group.selectedValues);
    }
    return isEqual;
};

type RadioFieldGroup = {
    type: 'radio';
    selectedValues: string | number;
};

type CheckboxFieldGroup = {
    type: 'checkbox';
    selectedValues: (string | number)[];
};

type RadioOrCheckboxFieldGroup = RadioFieldGroup | CheckboxFieldGroup;

type FieldGroupProps = RadioOrCheckboxFieldGroup & {
    variant?: 'joined' | 'split' | 'custom';
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
};

export type FieldGroupItem = {
    id: string;
    label: string;
    name: string;
    uniqueId?: string;
    value: string;
    tooltip?: string;
    isDisabled?: boolean;
};

export const FieldGroup = withDataId((props: FieldGroupProps) => {
    const { type, variant, values, selectedValues, size, name, vertical, onChange, onFieldClick, dataId } = props;
    const th = useContext(ThemeContext) || theme;
    const uniqueValues =
        values.length > 0
            ? [
                  ...values.map((value: FieldGroupItem) => ({
                      ...value,
                      uniqueId: uniqueId(value.id),
                  })),
              ]
            : [];

    const selectedField = getSelectedField(type, selectedValues, uniqueValues, 'value');
    // TODO REVIEW
    // const fieldGroupProps = omit(props, ['values', 'selectedValues', 'name', 'onChange', 'onFieldClick', 'dataId']);
    const handleOnFieldClick = (item: FieldGroupItem) => {
        const { uniqueId, ...itemRest } = item;
        onFieldClick && onFieldClick(itemRest);
    };

    const handleOnChange = (item: FieldGroupItem) => {
        const { uniqueId, ...itemRest } = item;
        onChange(itemRest);
    };

    return (
        <StyledFieldGroup theme={th} size={size} data-testid='field-group' $vertical={!!vertical} variant={variant} data-id={dataId}>
            {uniqueValues.map((item: any) => {
                const { uniqueId, value, label, icon, tooltip, isDisabled } = item;
                const isSelected = isFieldSelected({ type, selectedValues: item } as RadioOrCheckboxFieldGroup, selectedField);
                const classesItem = classNames('item', `item-${label}`, isSelected && 'active', isDisabled && 'disabled');
                const getLabel = () => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <label
                        className={classesItem}
                        data-tooltip={tooltip}
                        htmlFor={`${uniqueId}_${value}`}
                        key={`${uniqueId}_${value}`}
                        onClick={() => handleOnFieldClick(item)}
                        data-testid='field-group-label'
                    >
                        {!icon && label ? label : null}
                        {icon ? <Icon name={icon} size={variant === 'custom' && size === 'large' ? 'xlarge' : size} color='white' /> : null}
                        <input
                            id={`${uniqueId}_${value}`}
                            onChange={() => handleOnChange(item)}
                            type={type}
                            name={name}
                            value={value}
                            checked={isSelected}
                            data-testid='field-group-input'
                            disabled={isDisabled}
                        />
                    </label>
                );
                return tooltip ? (
                    <Tooltip title={tooltip} key={`tooltip_${uniqueId}`}>
                        {getLabel()}
                    </Tooltip>
                ) : (
                    getLabel()
                );
            })}
        </StyledFieldGroup>
    );
});

FieldGroup.defaultProps = defaultProps;
