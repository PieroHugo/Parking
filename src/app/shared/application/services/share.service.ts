import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ShareService {

  async shareResource(data: ShareData): Promise<'shared' | 'copied'> {
    if (navigator.share) {
      await navigator.share(data);
      return 'shared';
    }

    if (navigator.clipboard?.writeText && data.url) {
      await navigator.clipboard.writeText(data.url);
      return 'copied';
    }

    throw new Error('Share API is not supported by this browser.');
  }
}
