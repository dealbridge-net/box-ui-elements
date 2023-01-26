/**
 * @flow
 * @file Header bar
 * @author Box
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import Logo from './Logo';
import messages from '../messages';
import { VIEW_FOLDER, VIEW_RECENTS, VIEW_SEARCH } from '../../../constants';
import type { View } from '../../../common/types/core';

import './Header.scss';
import Add from '../sub-header/Add';
import IconSearch from '../../../icons/general/IconSearch';

type Props = {
    canCreateNewFolder: boolean,
    canUpload: boolean,
    intl: any,
    isDownloadAllVisible: boolean,
    isHeaderLogoVisible?: boolean,
    isSmall: boolean,
    logoUrl?: string,
    onCreate: Function,
    onDownloadAll: Function,
    onSearch: Function,
    onUpload: Function,
    searchQuery: string,
    view: View,
};

// eslint-disable-next-line react/prop-types
const Header = ({
    canUpload,
    canCreateNewFolder,
    isHeaderLogoVisible = true,
    view,
    isSmall,
    searchQuery,
    onSearch,
    logoUrl,
    intl,
    onCreate,
    onUpload,
}: Props) => {
    const search = ({ currentTarget }: { currentTarget: HTMLInputElement }) => onSearch(currentTarget.value);
    const isFolder = view === VIEW_FOLDER;
    const isSearch = view === VIEW_SEARCH;
    const isRecent = view === VIEW_RECENTS;

    const shouldSearchDisabled = !(isFolder || isSearch || isRecent);
    const showAdd: boolean = (!!canUpload || !!canCreateNewFolder) && isFolder;

    return (
        <div className="be-header">
            {isHeaderLogoVisible && <Logo isSmall={isSmall} url={logoUrl} />}
            <div className="be-search">
                <IconSearch />
                <input
                    aria-label="search"
                    disabled={shouldSearchDisabled}
                    onChange={search}
                    placeholder={intl.formatMessage(messages.searchPlaceholderShort)}
                    type="search"
                    value={searchQuery}
                />
            </div>
            {showAdd && (
                <Add
                    isDisabled={!isFolder}
                    onCreate={onCreate}
                    onUpload={onUpload}
                    showCreate={canCreateNewFolder}
                    showUpload={canUpload}
                />
            )}
        </div>
    );
};

export default injectIntl(Header);
