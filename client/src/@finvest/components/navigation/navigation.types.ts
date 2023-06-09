import { IsActiveMatchOptions, Params, QueryParamsHandling } from '@angular/router';

export interface FinvestNavigationItem {
    id?: string;
    title?: string | "";
    subtitle?: string;
    type:
    | 'aside'
    | 'basic'
    | 'collapsable'
    | 'divider'
    | 'group'
    | 'spacer';
    hidden?: (item: FinvestNavigationItem) => boolean;
    active?: boolean | true;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    fragment?: string | null;
    preserveFragment?: boolean | null;
    queryParams?: Params | null;
    queryParamsHandling?: QueryParamsHandling | null;
    externalLink?: boolean;
    target?:
    | '_blank'
    | '_self'
    | '_parent'
    | '_top'
    | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: FinvestNavigationItem | undefined | null) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string | "";
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: FinvestNavigationItem[];
    meta?: any;
}