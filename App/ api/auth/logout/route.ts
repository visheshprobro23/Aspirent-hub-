import {NextResponse} from 'next/server';export async function POST(){const r=NextResponse.json({ok:true});r.cookies.set('ea_user','',{expires:new Date(0),path:'/'});return r}
