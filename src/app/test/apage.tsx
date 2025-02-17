// import Link from 'next/link';

// import { auth } from '~/server/auth';
// import { trpc } from '~/trpc/server';

// export default async function Home() {
//     const hello = await trpc.post.hello({ text: 'from tRPC' });
//     const session = await auth();

//     return (
//         <div>
//             <main className='text-base-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
//                 <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16'>
//                     <h1 className='text-5xl font-extrabold tracking-tight sm:text-[5rem]'>
//                         Create <span className='text-[hsl(280,100%,70%)]'>T3</span> App
//                     </h1>
//                     <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'>
//                         <Link
//                             className='bg-base-0/10 hover:bg-base-0/20 flex max-w-xs flex-col gap-4 rounded-xl p-4'
//                             href='https://create.t3.gg/en/usage/first-steps'
//                             target='_blank'
//                         >
//                             <h3 className='text-2xl font-bold'>First Steps →</h3>
//                             <div className='text-lg'>
//                                 Just the basics - Everything you need to know to set up your database and
//                                 authentication.
//                             </div>
//                         </Link>
//                         <Link
//                             className='bg-base-0/10 hover:bg-base-0/20 flex max-w-xs flex-col gap-4 rounded-xl p-4'
//                             href='https://create.t3.gg/en/introduction'
//                             target='_blank'
//                         >
//                             <h3 className='text-2xl font-bold'>Documentation →</h3>
//                             <div className='text-lg'>
//                                 Learn more about Create T3 App, the libraries it uses, and how to deploy it.
//                             </div>
//                         </Link>
//                     </div>
//                     <div className='flex flex-col items-center gap-2'>
//                         <p className='text-base-0 text-2xl'>{hello ? hello.greeting : 'Loading tRPC query...'}</p>

//                         <div className='flex flex-col items-center justify-center gap-4'>
//                             <p className='text-base-0 text-center text-2xl'>
//                                 {session && <span>Logged in as {session.user?.name}</span>}
//                             </p>
//                             <Link
//                                 href={session ? '/api/auth/signout' : '/api/auth/signin'}
//                                 className='bg-base-0/10 hover:bg-base-0/20 rounded-full px-10 py-3 font-semibold no-underline transition'
//                             >
//                                 {session ? 'Sign out' : 'Sign in'}
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }
