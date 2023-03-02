/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    switch (url.pathname) {
        case '/posts/2022/10/14/reading-log-october-14-1':
            url.pathname = '/reading-log/1';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/10/21/reading-log-october-21-2':
            url.pathname = '/reading-log/2';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/10/28/reading-log-october-28-3':
            url.pathname = '/reading-log/3';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/11/04/reading-log-november-4-4':
            url.pathname = '/reading-log/4';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/11/11/reading-log-november-11-5':
            url.pathname = '/reading-log/5';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/11/18/reading-log-november-18-6':
            url.pathname = '/reading-log/6';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/11/25/reading-log-november-25-7':
            url.pathname = '/reading-log/7';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/12/02/reading-log-december-2-8':
            url.pathname = '/reading-log/8';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/12/09/reading-log-december-9-9':
            url.pathname = '/reading-log/9';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/12/16/reading-log-december-16-10':
            url.pathname = '/reading-log/10';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/12/23/reading-log-december-23-11':
            url.pathname = '/reading-log/11';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2022/12/30/reading-log-december-30-12':
            url.pathname = '/reading-log/12';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2023/01/06/reading-log-january-6-13':
            url.pathname = '/reading-log/13';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2023/01/13/reading-log-january-13-14':
            url.pathname = '/reading-log/14';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2023/01/20/reading-log-january-20-15':
            url.pathname = '/reading-log/15';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2023/01/27/reading-log-january-27-16':
            url.pathname = '/reading-log/16';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2023/02/03/reading-log-february-3-17':
            url.pathname = '/reading-log/17';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2023/02/10/reading-log-february-10-18':
            url.pathname = '/reading-log/18';
            url.search = '';
            return NextResponse.redirect(url);

        case '/posts/2023/02/17/reading-log-february-17-19':
            url.pathname = '/reading-log/16';
            url.search = '';
            return NextResponse.redirect(url);

        default:
            return NextResponse.next();
    }
}
