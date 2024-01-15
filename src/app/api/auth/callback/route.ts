import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { create } from 'domain'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from '../../../../../node_modules/next/server'


export async function GET(request : NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}