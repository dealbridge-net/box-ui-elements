/**
 * @flow
 * @file Helper for the box zip api
 * @author Finitive
 */

import Base from 'api/Base';
import type { BoxItem } from 'common/types/core';
import { getTypedFileId, getTypedFolderId } from 'utils/file';

type ZipDownloadStatus = {
    downloaded_file_count: number,
    skipped_file_count: number,
    skipped_folder_count: number,
    state: string,
    total_file_count: number,
};
type ZipDownloadConflict = {
    download_name: string,
    id: string,
    original_name: string,
    type: string,
};
type ZipDownload = {
    download_url: string,
    expires_at: string,
    name_conflicts: Array<ZipDownloadConflict>,
    status_url: string,
};

class ZipDownloadAPI extends Base {
    /**
     * API for requesting zip service on an item(folder or file)
     *
     * @param {BoxItem} item - File or file version to download
     * @return {ZipDownload}
     */
    async createZipDownload(item: BoxItem): Promise<ZipDownload> {
        const payload = {
            url: `${this.getBaseApiUrl()}/zip_downloads`,
            id: item.type === 'folder' ? getTypedFolderId(item.id) : getTypedFileId(item.id),
            data: {
                items: [{ id: item.id, type: item.type }],
                download_file_name: item.name,
            },
            params: {},
        };

        return this.xhr.post(payload).then(it => it.data);
    }

    /**
     * API for requesting zip service on an item(folder or file)
     *
     * @param {BoxItem} item - File or file version to download
     * @param status_url
     * @return {ZipDownload}
     */
    async GetZipDownloadStatus(item: BoxItem, status_url: string): Promise<ZipDownloadStatus> {
        const typedId = item.type === 'folder' ? getTypedFolderId(item.id) : getTypedFileId(item.id);

        return this.xhr
            .get({
                url: status_url,
                id: typedId,
            })
            .then(it => {
                return it.data;
            })
            .catch(err => {
                const { type } = err;
            });
    }
}

export default ZipDownloadAPI;
