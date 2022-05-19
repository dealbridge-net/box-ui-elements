/**
 * @flow
 * @file Helper for the box zip api
 * @author Finitive
 */

import Base from './Base';
import type { BoxItem } from '../common/types/core';

interface IWatermarks {
    watermark: {
        created_at: string,
        modified_at: string,
    };
}

class Watermarks extends Base {
    /**
     * API for watermarking an item(folder or file)
     *
     * @param {BoxItem} item - File or file version to download
     * @return {IWatermarks}
     */
    async applyWatermark(item: BoxItem): Promise<IWatermarks> {
        const itemType = item.type === 'file' ? 'files' : 'folders';
        const payload = {
            url: `${this.getBaseApiUrl()}/${itemType}/${item.id}/watermark`,
            data: {
                watermark: {
                    imprint: 'default',
                },
            },
            params: {},
        };

        return this.xhr.put(payload).then(it => it.data);
    }

    /**
     * API for removing watermark in an item(folder or file)
     *
     * @param {BoxItem} item - File or file version to download
     * @return {IWatermarks}
     */
    async deleteWatermark(item: BoxItem): Promise<IWatermarks> {
        const itemType = item.type === 'file' ? 'files' : 'folders';
        const payload = {
            url: `${this.getBaseApiUrl()}/${itemType}/${item.id}/watermark`,
            data: {},
            params: {},
        };

        return this.xhr.delete(payload).then(it => it.data);
    }
}

export default Watermarks;
