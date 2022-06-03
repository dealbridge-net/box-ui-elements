/**
 * @flow
 * @file Function to render the date table cell
 * @author Box
 */

import React from 'react';
import MoreOptions from './MoreOptions';
import type { BoxItem } from '../../common/types/core';

export default (
    canPreview: boolean,
    canShare: boolean,
    canDownload: boolean,
    canDelete: boolean,
    canRename: boolean,
    canWatermark: boolean,
    watermarkFileTypeSupports: string[],
    onItemSelect: Function,
    onItemDelete: Function,
    onItemDownload: Function,
    onItemRename: Function,
    onItemShare: Function,
    onItemPreview: Function,
    onItemWatermarkUpdate: Function,
    isSmall: boolean,
) => ({ rowData }: { rowData: BoxItem }) => (
    <MoreOptions
        canWatermark={canWatermark}
        watermarkFileTypeSupports={watermarkFileTypeSupports}
        canPreview={canPreview}
        canShare={canShare}
        canDownload={canDownload}
        canDelete={canDelete}
        canRename={canRename}
        onItemSelect={onItemSelect}
        onItemDelete={onItemDelete}
        onItemDownload={onItemDownload}
        onItemRename={onItemRename}
        onItemShare={onItemShare}
        onItemPreview={onItemPreview}
        onItemWatermarkUpdate={onItemWatermarkUpdate}
        isSmall={isSmall}
        item={rowData}
    />
);
