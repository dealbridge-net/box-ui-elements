/**
 * @flow
 * @file Content sub header component
 * @author Box
 */

import React from 'react';
import Sort from './Sort';
import GridViewSlider from '../../../components/grid-view/GridViewSlider';
import ViewModeChangeButton from './ViewModeChangeButton';
import { VIEW_FOLDER, VIEW_MODE_GRID } from '../../../constants';
import type { ViewMode } from '../flowTypes';
import type { View, Collection } from '../../../common/types/core';
import './SubHeaderRight.scss';
import Button from '../../../components/button';
import Tooltip from '../Tooltip';
import IconDownloadSolid from '../../../icons/general/IconDownloadSolid';

type Props = {
    canCreateNewFolder: boolean,
    canUpload: boolean,
    currentCollection: Collection,
    gridColumnCount: number,
    gridMaxColumns: number,
    gridMinColumns: number,
    isDownloadAllVisible: boolean,
    maxGridColumnCountForWidth: number,
    onCreate: Function,
    onDownloadAll: Function,
    onGridViewSliderChange: (newSliderValue: number) => void,
    onSortChange: Function,
    onUpload: Function,
    onViewModeChange?: (viewMode: ViewMode) => void,
    view: View,
    viewMode: ViewMode,
};

const SubHeaderRight = ({
    currentCollection,
    gridColumnCount,
    gridMaxColumns,
    gridMinColumns,
    maxGridColumnCountForWidth,
    onGridViewSliderChange,
    onSortChange,
    onViewModeChange,
    view,
    viewMode,
    isDownloadAllVisible,
    onDownloadAll,
}: Props) => {
    const { sortBy, sortDirection, items = [] }: Collection = currentCollection;
    const hasGridView: boolean = !!gridColumnCount;
    const hasItems: boolean = items.length > 0;
    const isFolder: boolean = view === VIEW_FOLDER;
    const showSort: boolean = isFolder && hasItems;
    return (
        <div className="be-sub-header-right">
            {isDownloadAllVisible && (
                <Tooltip text="Download all">
                    <Button
                        aria-label="Download All"
                        onClick={onDownloadAll}
                        type="button"
                        className="btn bdl-ViewModeChangeButton"
                    >
                        <IconDownloadSolid width={17} height={17} fillColor="#909090" color="#909090" />
                    </Button>
                </Tooltip>
            )}
            {hasItems && viewMode === VIEW_MODE_GRID && (
                <GridViewSlider
                    columnCount={gridColumnCount}
                    gridMaxColumns={gridMaxColumns}
                    gridMinColumns={gridMinColumns}
                    maxColumnCount={maxGridColumnCountForWidth}
                    onChange={onGridViewSliderChange}
                />
            )}
            {hasItems && hasGridView && (
                <ViewModeChangeButton viewMode={viewMode} onViewModeChange={onViewModeChange} />
            )}
            {showSort && !!sortBy && !!sortDirection && (
                <Sort onSortChange={onSortChange} sortBy={sortBy} sortDirection={sortDirection} />
            )}
        </div>
    );
};

export default SubHeaderRight;
