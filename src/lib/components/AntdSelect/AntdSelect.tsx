import { Select, SelectProps } from 'antd';
import theme, { Theme } from '@utils/theme';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { get, omit } from 'lodash';
import { ThemeContext } from 'styled-components';

import { Icon, Tooltip } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { SelectOptionStyle, StyledAntdSelectDropdown, StyledSpanOption, StyledSpanOptionSelected } from '@styles/AntdSelect/StyledAntdSelect';
import { filterOption, findSubstringIndices, getOptionsBySearch, getRegExpBasedOnInput, singleOptionFilter } from '../AntdSelect/selectUtils';
import { ButtonPaginationSelector } from '../AntdSelect/ButtonPaginationSelector';
import { colors } from 'index';

const ALL_CHARACTER = '*';
const ENTER_CHARACTER = 'Enter';

type CustomTagProps = {
    label: React.ReactNode;
    value: any;
    disabled?: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closable: boolean;
};

type Option = {
    value: string | number;
    label: string;
    color: string;
};

type DisplayValue = {
    key?: React.Key;
    value?: string | number;
    label?: any;
    title?: string | number;
    disabled?: boolean;
};

export const tagRenderButtonPagination = (props: CustomTagProps, options: Option[], maxTagLength: number, theme: Theme) => {
    const { value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const option = options.filter((element) => element.value === value)[0];
    const parsedLabel = (option.label as string).length > maxTagLength - 3 ? `${(option.label as string).slice(0, maxTagLength - 3)}...` : option.label;

    return (
        <Tooltip title={option.label}>
            <StyledSpanOptionSelected
                className='tag-select-option-selected'
                color={options.filter((element) => element.value === value)[0].color}
                onMouseDown={onPreventMouseDown}
                onClose={onClose}
                style={{ marginRight: 4 }}
                value={option.value as string}
                data-testid={`tag-option-selected-${value}`}
                theme={theme}
            >
                {parsedLabel}
                {closable && <Icon className='icon-close' name='close' size='small' onClick={onClose} color={colors.white} />}
            </StyledSpanOptionSelected>
        </Tooltip>
    );
};

export const dropdownRenderSelectAntd = (
    menu: React.ReactElement,
    currentPage: number,
    options: Option[],
    handleChangePage: (page: number) => void,
    handleSelectAll: () => void,
    text: SelectTextProps,
    searchValue: string,
    showDropdown: boolean,
    mode: string,
    theme: Theme,
    pageSize?: number
) => {
    return (
        <>
            <StyledAntdSelectDropdown data-testid='select-dropdown'>
                {menu}
                {pageSize !== undefined && ['multiple', 'tags'].includes(mode) && (
                    <ButtonPaginationSelector
                        pageSize={pageSize}
                        currentPage={currentPage}
                        handleSelectAll={handleSelectAll}
                        onPageChange={handleChangePage}
                        options={options}
                        text={text}
                        theme={theme}
                        searchValue={searchValue}
                        showDropdown={showDropdown}
                    />
                )}
            </StyledAntdSelectDropdown>
        </>
    );
};

export const renderUnselectedOption = (option: any, searchValue: string) => {
    if (searchValue !== '' && (![...searchValue].every((char) => char === '*' || char === ' ') || !searchValue.includes(ALL_CHARACTER))) {
        const regex = getRegExpBasedOnInput(searchValue);
        if (regex === false) {
            return (
                <StyledSpanOption data-testid={`option-span-${option}`} value={option as string}>
                    {option}
                </StyledSpanOption>
            );
        }
        const indices = findSubstringIndices(option as string, regex);
        if (indices.start !== -1 && indices.end !== -1) {
            return (
                <StyledSpanOption data-testid={`option-span-${option}-bold`} value={option as string}>
                    {[...option].map((letter, index) => {
                        const isBold = searchValue.includes(ALL_CHARACTER) ? index === indices.start || index === indices.end : index >= indices.start && index <= indices.end;
                        return isBold ? <b key={index}>{letter}</b> : letter;
                    })}
                </StyledSpanOption>
            );
        }
    }
    return (
        <StyledSpanOption data-testid={`option-span-${option}`} value={option as string}>
            {option}
        </StyledSpanOption>
    );
};

const isDisabledOption = (option: Option, selectedValues: (string | number)[], pageSize?: number) => {
    if (pageSize !== undefined) return selectedValues.length >= pageSize && !selectedValues.includes(option.value);
    return false;
};

export const optionsRenderer = (options: Option[], selectedValues: (string | number)[], searchValue: string, theme: Theme, pageSize?: number) => {
    const optionsToRender = searchValue !== '' ? options : (getOptionsBySearch(options, searchValue) as Option[]);
    return (
        <>
            {optionsToRender.map((option) => {
                const backgroundColor = selectedValues.includes(option.value) ? get(theme.color, option.color) : '#FFFFFF';
                return (
                    <Select.Option
                        id={option.value}
                        className='option-select'
                        key={option.value}
                        disabled={isDisabledOption(option, selectedValues, pageSize)}
                        value={option.value}
                        theme={theme}
                        color={option.color}
                        style={{
                            backgroundColor: backgroundColor,
                        }}
                        selected={selectedValues.includes(option.value)}
                        data-testid={`select-option-${option.value}`}
                    >
                        {selectedValues.includes(option.value) ? (
                            <StyledSpanOptionSelected value={option.label} theme={theme}>
                                {option.label}
                            </StyledSpanOptionSelected>
                        ) : (
                            renderUnselectedOption(option.label, searchValue)
                        )}
                    </Select.Option>
                );
            })}
        </>
    );
};

export type SelectTextProps = {
    select: string;
    all: string;
    connector: string;
    content: string;
    overflow: string;
};

type AntdSelectProps = Omit<SelectProps, 'options' | 'mode'> & {
    dataId?: string;
    defaultValues?: any[];
    pageSize?: number;
    text?: SelectTextProps;
    options?: {
        value: string;
        label: string;
        color: string;
    }[];
    theme?: Theme;
    isLoading?: boolean;
    maxTagLength?: number;
    overflowLength?: number;
    handleButtonSelectAll?: (values: any[]) => void;
    handleClearAll?: () => void;
    mode?: 'multiple' | 'single';
};

interface BaseSelectRef {
    focus: () => void;
    blur: () => void;
}

export const AntdSelect = withDataId((props: AntdSelectProps) => {
    const {
        dataId,
        defaultValues,
        mode,
        options: originalOptions,
        pageSize,
        text,
        placeholder,
        isLoading,
        onChange,
        maxTagLength,
        overflowLength,
        handleButtonSelectAll,
        handleClearAll,
        allowClear,
    } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValues, setSelectedValues] = useState<any[]>([]);
    const antdSelectProps = omit(props, [
        'allowClear',
        'dataId',
        'defaultValues',
        'mode',
        'options',
        'pageSize',
        'text',
        'isLoading',
        'onChange',
        'handleButtonSelectAll',
        'handleClearAll',
        'overflowLength',
        'maxTagLength',
    ]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState('');
    const ref = useRef<BaseSelectRef | null>(null);
    const sValue = useRef('');
    const th = useContext(ThemeContext) || theme;
    const options = originalOptions || [];

    useEffect(() => {
        setCurrentPage(1);
    }, [searchValue]);

    useEffect(() => {
        if (defaultValues) {
            setSelectedValues(defaultValues);
        }
    }, [defaultValues]);

    const handleChangePage = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const handleSelectAll = () => {
        const actualPage = currentPage;
        const selectedOptions = searchValue !== '' ? getOptionsBySearch(options, searchValue) : options;
        const startIndex = (actualPage - 1) * (pageSize ?? 1);
        const endIndex = startIndex + (pageSize ?? 1);
        const slicedOptions = selectedOptions.slice(startIndex, endIndex);
        const allValues = slicedOptions.map((option) => option.value);

        setSelectedValues(() => allValues);
        handleButtonSelectAll && handleButtonSelectAll(allValues);
    };

    const closeDropdown = () => {
        setCurrentPage(1);
        sValue.current = '';
        setSearchValue('');
        if (ref !== null && ref.current !== null) (ref.current as HTMLElement).blur();
        setShowDropdown(false);
    };

    const reset = () => {
        handleClearAll && handleClearAll();
        setCurrentPage(1);
        sValue.current = '';
        setSearchValue('');
        setSelectedValues([]);
        if (ref !== null && ref.current !== null) (ref.current as HTMLElement).blur();
        setShowDropdown(false);
    };

    return (
        <>
            <SelectOptionStyle $theme={th} />
            {mode === undefined || mode === 'single' ? (
                <Select<{
                    value: string | number;
                    label: string;
                    color: string;
                }>
                    data-testid='select'
                    autoClearSearchValue
                    removeIcon={<Icon color='gray' name='close' size='small' />}
                    data-id={dataId}
                    defaultValue={defaultValues}
                    optionFilterProp='children'
                    filterOption={singleOptionFilter}
                    loading={isLoading}
                    placeholder={placeholder}
                    open={showDropdown}
                    ref={(r) => {
                        ref.current = r;
                    }}
                    searchValue={sValue.current}
                    showSearch
                    style={{ width: '100%' }}
                    suffixIcon={
                        showDropdown ? (
                            <>
                                {allowClear && (searchValue !== '' || selectedValues.length > 0) && (
                                    <Icon
                                        color='gray'
                                        name='close'
                                        size='small'
                                        onClick={() => {
                                            reset();
                                        }}
                                    />
                                )}
                                <Icon
                                    color='gray'
                                    name='chevron_up'
                                    size='small'
                                    onClick={(e) => {
                                        closeDropdown();
                                        e.stopPropagation();
                                    }}
                                />
                            </>
                        ) : (
                            <Icon
                                className='selectable-icon'
                                color='gray'
                                name='chevron_down'
                                size='small'
                                onClick={() => {
                                    setShowDropdown(true);
                                }}
                            />
                        )
                    }
                    onSelect={(value, option) => {
                        onChange !== undefined && onChange(value, option);
                        setSelectedValues([value]);
                        closeDropdown();
                    }}
                    onDropdownVisibleChange={(e) => {
                        if (e !== showDropdown) {
                            setShowDropdown(e);
                        }
                    }}
                    onFocus={() => {
                        setShowDropdown(true);
                    }}
                    onSearch={(searchText) => {
                        setSearchValue(searchText);
                        sValue.current = searchText;
                        return searchText;
                    }}
                    options={options}
                    {...antdSelectProps}
                />
            ) : (
                <Select
                    autoClearSearchValue={false}
                    removeIcon={<Icon color='gray' name='close' size='small' />}
                    data-id={dataId}
                    data-testid='select'
                    defaultValue={defaultValues}
                    dropdownRender={
                        text
                            ? (menu: React.ReactElement) =>
                                  dropdownRenderSelectAntd(menu, currentPage, options, handleChangePage, handleSelectAll, text, searchValue, showDropdown, mode, theme, pageSize)
                            : undefined
                    }
                    optionFilterProp='children'
                    filterOption={filterOption}
                    maxTagCount='responsive'
                    maxTagPlaceholder={(props: DisplayValue[]) => {
                        const textOverflow = overflowLength && props.length > overflowLength ? ` ${text?.overflow}` : '';
                        const valuesToRender = `${props.slice(0, overflowLength).map((value) => ` ${value?.label.props.value}`)}${textOverflow}`;
                        return <Tooltip title={valuesToRender}>{`+${props.length}`}</Tooltip>;
                    }}
                    menuItemSelectedIcon={<Icon color='white' name='close' size='small' />}
                    mode={mode}
                    open={showDropdown}
                    placeholder={placeholder}
                    searchValue={sValue.current}
                    style={{ width: '100%' }}
                    showSearch
                    suffixIcon={
                        showDropdown ? (
                            <>
                                {allowClear && (searchValue !== '' || selectedValues.length > 0) && (
                                    <Icon
                                        className='selectable-icon'
                                        color='gray'
                                        name='close'
                                        size='small'
                                        onClick={() => {
                                            reset();
                                        }}
                                    />
                                )}
                                <Icon
                                    className='selectable-icon'
                                    color='gray'
                                    name='chevron_up'
                                    size='small'
                                    onClick={(e) => {
                                        closeDropdown();
                                        e.stopPropagation();
                                    }}
                                />
                            </>
                        ) : (
                            <Icon
                                className='selectable-icon'
                                color='gray'
                                name='chevron_down'
                                size='small'
                                onClick={() => {
                                    setShowDropdown(true);
                                }}
                            />
                        )
                    }
                    ref={(r) => {
                        if (ref !== null && r !== null) ref.current = r;
                    }}
                    onDropdownVisibleChange={(e) => {
                        if (e !== showDropdown) {
                            setShowDropdown(e);
                            if (e === false) {
                                setCurrentPage(1);
                                setSearchValue('');
                            }
                        }
                    }}
                    tagRender={maxTagLength ? (props: CustomTagProps) => tagRenderButtonPagination(props, options, maxTagLength, theme) : undefined}
                    value={selectedValues}
                    dropdownAlign={{ offset: [0, 3] }}
                    onChange={(values, options) => {
                        onChange !== undefined && onChange(values, options);
                        setSelectedValues(values);
                    }}
                    onFocus={() => {
                        setShowDropdown(true);
                    }}
                    onSearch={(searchText) => {
                        setSearchValue(searchText);
                        sValue.current = searchText;
                        return searchText;
                    }}
                    onInputKeyDown={(e) => {
                        if (['multiple', 'tags'].includes(mode) && e.key === ENTER_CHARACTER && sValue.current.includes(ALL_CHARACTER)) {
                            handleSelectAll();
                            e.stopPropagation();
                        }
                    }}
                    {...antdSelectProps}
                >
                    {optionsRenderer(options, selectedValues, searchValue, theme, pageSize)}
                </Select>
            )}
        </>
    );
});

AntdSelect.defaultProps = {
    options: [],
    allowClear: true,
    dataId: 'select',
    defaultValues: [],
    placeholder: 'Select',
    text: {
        select: 'Select',
        all: 'all',
        connector: 'of',
        content: '"All items"',
        overflow: 'and more...',
    },
    maxTagLength: 20,
    overflowLength: 5,
};
