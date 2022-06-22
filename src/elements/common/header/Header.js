/**
 * @flow
 * @file Header bar
 * @author Box
 */

import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Logo from './Logo';
import messages from '../messages';
import { VIEW_FOLDER, VIEW_RECENTS, VIEW_SEARCH } from '../../../constants';
import type { View } from '../../../common/types/core';

import './Header.scss';
import Button from '../../../components/button';

type Props = {
    intl: any,
    isDownloadAllVisible: boolean,
    isHeaderLogoVisible?: boolean,
    isSmall: boolean,
    logoUrl?: string,
    onDownloadAll: Function,
    onSearch: Function,
    searchQuery: string,
    view: View,
};

// eslint-disable-next-line react/prop-types
const Header = ({
    isHeaderLogoVisible = true,
    view,
    isSmall,
    searchQuery,
    onSearch,
    logoUrl,
    intl,
    isDownloadAllVisible,
    onDownloadAll,
}: Props) => {
    const search = ({ currentTarget }: { currentTarget: HTMLInputElement }) => onSearch(currentTarget.value);
    const isFolder = view === VIEW_FOLDER;
    const isSearch = view === VIEW_SEARCH;
    const isRecent = view === VIEW_RECENTS;

    const shouldSearchDisabled = !(isFolder || isSearch || isRecent);

    return (
        <div className="be-header">
            {isHeaderLogoVisible && <Logo isSmall={isSmall} url={logoUrl} />}
            <div className="be-search">
                <input
                    aria-label="search"
                    disabled={shouldSearchDisabled}
                    onChange={search}
                    placeholder={intl.formatMessage(messages.searchPlaceholder)}
                    type="search"
                    value={searchQuery}
                />
            </div>
            {isDownloadAllVisible && (
                <Button onClick={onDownloadAll} type="button" className="outlined-button">
                    <FormattedMessage {...messages.downloadAll} />
                </Button>
            )}
        </div>
    );
};

export default injectIntl(Header);
